import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_for_build");

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  whatsapp: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    // 1. Forward lead data to n8n Webhook (n8n -> Google Sheets -> Email -> WhatsApp / CRM)
    const n8nWebhookUrl =
      process.env.N8N_WEBHOOK_URL ||
      "http://localhost:5678/webhook/9cd991ba-dcbe-45e4-8ece-bcf3eee57a48";
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: zodData.fullName,
            email: zodData.email,
            whatsapp: zodData.whatsapp || "Not provided",
            service: zodData.service || "Get Free Quote",
            budget: zodData.budget || "Not specified",
            timeline: zodData.timeline || "Not specified",
            message: zodData.message,
            submittedAt: new Date().toISOString(),
            source: "Website Contact Form",
          }),
        });
      } catch (webhookErr) {
        console.error("n8n Webhook Forwarding Error:", webhookErr);
      }
    }

    // 2. Send email via Resend
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: `New Lead: ${zodData.service || "Contact me"} from portfolio`,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        whatsapp: zodData.whatsapp,
        service: zodData.service,
        budget: zodData.budget,
        timeline: zodData.timeline,
        message: zodData.message,
      }) as React.ReactElement,
    });

    if (resendError && !n8nWebhookUrl) {
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, resendData });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
