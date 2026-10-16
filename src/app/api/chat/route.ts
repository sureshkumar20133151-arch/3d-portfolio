import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, sessionId } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Call the 24/7 Render WhatsApp & AI Backend
    const backendUrl =
      process.env.WHATSAPP_BOT_API_URL ||
      "https://whatsapp-assistant-iqpi.onrender.com/api/chat";

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const res = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          sessionId: sessionId || "web_" + Math.random().toString(36).substring(7),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch (fetchErr) {
      console.warn("Backend /api/chat error, using fallback response:", fetchErr);
    }

    // Fallback human-like reply if backend is restarting or sleeping
    return NextResponse.json({
      reply:
        "Vanakkam! Suresh Kumar's AI Assistant here. 🚀\n\nWe offer:\n• *Portfolio Websites* from *₹8,999* (7-day turnaround)\n• *Business Websites* from *₹9,999* (with WhatsApp CTAs & SEO)\n• *E-Commerce & Custom AI Tools*\n\nWould you like to discuss your project directly with Suresh on WhatsApp? Click below or ping *+91 93615 99097*!",
      sessionId,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
