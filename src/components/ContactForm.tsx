"use client";
import { ChevronRight, Loader2, Bookmark, Heart, MessageCircle, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useMotionTemplate, useMotionValue, motion, AnimatePresence } from "motion/react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  whatsapp: z.string().min(10, "WhatsApp number must be at least 10 digits").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service option"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;

// Styled Select Dropdown matching Ace Input styles
const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { containerClassName?: string }
>(({ className, containerClassName, children, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        var(--brand),
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn("p-[2px] rounded-lg transition duration-300 group/input w-full", containerClassName)}
    >
      <select
        className={cn(
          `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
        focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-brand dark:focus-visible:ring-brand
         disabled:cursor-not-allowed disabled:opacity-50
         dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
         group-hover/input:shadow-none transition duration-400 cursor-pointer
         `,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    </motion.div>
  );
});
Select.displayName = "Select";

const steps = [
  { id: 1, label: "ABOUT YOU" },
  { id: 2, label: "YOUR PROJECT" },
  { id: 3, label: "CONFIRM" },
];

const countryCodes = [
  { code: "+91", label: "🇮🇳 India (+91)" },
  { code: "+1", label: "🇺🇸 USA / Canada (+1)" },
  { code: "+44", label: "🇬🇧 UK (+44)" },
  { code: "+971", label: "🇦🇪 UAE (+971)" },
  { code: "+966", label: "🇸🇦 Saudi Arabia (+966)" },
  { code: "+974", label: "🇶🇦 Qatar (+974)" },
  { code: "+65", label: "🇸🇬 Singapore (+65)" },
  { code: "+60", label: "🇲🇾 Malaysia (+60)" },
  { code: "+61", label: "🇦🇺 Australia (+61)" },
  { code: "+49", label: "🇩🇪 Germany (+49)" },
  { code: "+33", label: "🇫🇷 France (+33)" },
  { code: "+81", label: "🇯🇵 Japan (+81)" },
];

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [service, setService] = useState("Get Free Quote");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const whatsapp = whatsappNumber.trim() ? `${countryCode} ${whatsappNumber.trim().replace(/^\+?\d{1,4}\s*/, "")}` : "";

  const { toast } = useToast();
  const router = useRouter();

  // Smart phone input change handler to auto-detect country code and prevent duplicate +91
  const handlePhoneChange = (inputVal: string) => {
    let val = inputVal;
    for (const c of countryCodes) {
      if (val.startsWith(c.code)) {
        setCountryCode(c.code);
        val = val.substring(c.code.length).trim();
        break;
      }
    }
    if (val.startsWith("+")) {
      val = val.replace(/^\+\d{1,4}\s*/, "").trim();
    }
    setWhatsappNumber(val);
    setErrors((p) => ({ ...p, whatsapp: undefined }));
  };

  // Listen for custom event trigger to auto-select service option
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setService(customEvent.detail);
      }
    };
    window.addEventListener("select-contact-service", handleServiceSelect);
    return () => window.removeEventListener("select-contact-service", handleServiceSelect);
  }, []);

  // Listen for URL hash (e.g. #contact-portfolio-website or #contact-form) to auto-scroll & auto-select service option
  useEffect(() => {
    const checkHashAndScroll = () => {
      const hash = window.location.hash;
      // Clean up duplicated hashes like #contact#contact
      if (hash.includes("#contact#") || (hash.match(/#/g) || []).length > 1) {
        window.history.replaceState(null, "", window.location.pathname + "#contact-form");
      }
      if (hash && (hash.includes("contact") || hash.includes("get-free-quote"))) {
        const contactTarget = document.getElementById("contact-form") || document.getElementById("contact-get-free-quote") || document.getElementById("contact");
        if (contactTarget) {
          contactTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      if (hash.startsWith("#contact-")) {
        const decoded = decodeURIComponent(hash.substring(9)).replace(/-/g, " ");
        const match = [
          "Get Free Quote",
          "Portfolio Website",
          "Business Website",
          "E-Commerce Store",
          "AI-Powered Tool",
          "Business Automation",
          "Custom Software"
        ].find(
          (opt) =>
            opt.toLowerCase() === decoded.toLowerCase() ||
            opt.toLowerCase().replace(/-/g, " ") === decoded.toLowerCase()
        );
        if (match) {
          setService(match);
          setStep(2); // Auto navigate to project details if triggered via service links
        }
      }
    };
    checkHashAndScroll();
    window.addEventListener("hashchange", checkHashAndScroll);
    return () => window.removeEventListener("hashchange", checkHashAndScroll);
  }, []);

  const handleNextStep1 = () => {
    const tempErrors: FieldErrors = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      tempErrors.fullName = "Full name must be at least 2 characters";
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (whatsappNumber.trim() && whatsappNumber.trim().replace(/\D/g, "").length < 5) {
      tempErrors.whatsapp = "Please enter a valid phone number or leave blank";
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
    } else {
      setErrors({});
      setStep(2);
    }
  };

  const handleNextStep2 = () => {
    const tempErrors: FieldErrors = {};
    if (!service) {
      tempErrors.service = "Please select a service option";
    }
    if (!budget) {
      tempErrors.budget = "Please select a budget range";
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
    } else {
      setErrors({});
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse({ fullName, email, whatsapp, service, budget, timeline, message });
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, whatsapp, service, budget, timeline, message }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      toast({
        title: "Thank you!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });
      setLoading(false);
      setFullName("");
      setEmail("");
      setWhatsappNumber("");
      setService("Get Free Quote");
      setBudget("");
      setTimeline("");
      setMessage("");
      setStep(1);
      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 1000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong! Please try again.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-full mx-auto sm:mt-2">
      {/* Stepper progress indicator tabs */}
      <div className="flex justify-between items-center w-full mb-8 relative border-b border-gray-100 dark:border-zinc-800/50 pb-4">
        {steps.map((s) => {
          const isCompleted = step > s.id;
          const isActive = step === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                if (s.id === 1 || (s.id === 2 && fullName && email) || (s.id === 3 && fullName && email && service && budget)) {
                  setStep(s.id);
                  setErrors({});
                }
              }}
              className="flex flex-col items-center gap-1.5 flex-1 cursor-pointer outline-none"
            >
              {/* Stepper Circle */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-extrabold transition-all duration-300",
                  isCompleted
                    ? "bg-green-500/10 border-green-500 text-green-500"
                    : isActive
                    ? "bg-amber-500/10 border-amber-500 text-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.2)]"
                    : "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500"
                )}
              >
                {isCompleted ? `✓${s.id}` : s.id}
              </div>
              {/* Stepper Label */}
              <span
                className={cn(
                  "text-[9px] md:text-xs font-extrabold tracking-wider transition-all duration-300",
                  isCompleted
                    ? "text-green-500"
                    : isActive
                    ? "text-amber-500"
                    : "text-zinc-400 dark:text-zinc-500"
                )}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Steps form rendering */}
      <form onSubmit={handleSubmit} className="w-full" aria-busy={loading}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4"
            >
              <LabelInputContainer>
                <Label htmlFor="fullname">Full name <span className="text-amber-500">*</span></Label>
                <Input
                  id="fullname"
                  name="fullName"
                  autoComplete="name"
                  placeholder="Your Name"
                  type="text"
                  value={fullName}
                  onInput={(e: any) => setFullName(e.target.value)}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setErrors((p) => ({ ...p, fullName: undefined }));
                  }}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="email">Email Address <span className="text-amber-500">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                  onInput={(e: any) => setEmail(e.target.value)}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((p) => ({ ...p, email: undefined }));
                  }}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="whatsapp">Contact Number (WhatsApp)</Label>
                <div className="flex gap-2.5 w-full items-center">
                  <Select
                    id="countryCode"
                    aria-label="Country Code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    containerClassName="w-[140px] flex-shrink-0"
                    className="w-full text-xs md:text-sm font-semibold"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </Select>
                  <div className="flex-1 w-full">
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      autoComplete="tel"
                      placeholder="98765 43210"
                      type="tel"
                      value={whatsappNumber}
                      onInput={(e: any) => handlePhoneChange(e.target.value)}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
                {errors.whatsapp && <p className="text-xs text-red-500 mt-1">{errors.whatsapp}</p>}
              </LabelInputContainer>

              <div className="mt-4 flex justify-end">
                <Button
                  type="button"
                  onClick={handleNextStep1}
                  className="bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 text-white rounded-md h-10 px-6 font-medium cursor-can-hover flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4"
            >
              <LabelInputContainer>
                <Label htmlFor="service">Service Required</Label>
                <Select
                  id="service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    setErrors((p) => ({ ...p, service: undefined }));
                  }}
                >
                  <option value="Get Free Quote">Get Free Quote</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                  <option value="Business Website">Business Website</option>
                  <option value="E-Commerce Store">E-Commerce Store</option>
                  <option value="AI-Powered Tool">AI-Powered Tool</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Custom Software">Custom Software</option>
                </Select>
                {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="budget">Project Budget Range</Label>
                <Select
                  id="budget"
                  value={budget}
                  onChange={(e) => {
                    setBudget(e.target.value);
                    setErrors((p) => ({ ...p, budget: undefined }));
                  }}
                >
                  <option value="">Select Budget Range...</option>
                  <option value="Under ₹10,000">Under ₹10,000</option>
                  <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                  <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                  <option value="₹50,000+">₹50,000+</option>
                  <option value="Not Sure">Not Sure / Negotiable</option>
                </Select>
                {errors.budget && <p className="text-xs text-red-500 mt-1">{errors.budget}</p>}
              </LabelInputContainer>

              <div className="mt-4 flex justify-between gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setStep(1);
                    setErrors({});
                  }}
                  className="border border-zinc-700 text-white font-medium px-6 h-10 rounded-md cursor-can-hover"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={handleNextStep2}
                  className="bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 text-white rounded-md h-10 px-6 font-medium cursor-can-hover flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 text-left"
            >
              <div className="grid w-full gap-1.5 mb-2">
                <Label htmlFor="content">Your Message / Requirements</Label>
                <Textarea
                  placeholder="Tell me about your project requirements..."
                  id="content"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setErrors((p) => ({ ...p, message: undefined }));
                  }}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <LabelInputContainer className="mb-2">
                <Label htmlFor="timeline">How soon do you need this?</Label>
                <Select
                  id="timeline"
                  value={timeline}
                  onChange={(e) => {
                    setTimeline(e.target.value);
                    setErrors((p) => ({ ...p, timeline: undefined }));
                  }}
                >
                  <option value="">Select timeline...</option>
                  <option value="ASAP — within 1 week">ASAP — within 1 week</option>
                  <option value="This month">This month</option>
                  <option value="1–2 months">1–2 months</option>
                  <option value="Flexible / Just exploring">Flexible / Just exploring</option>
                </Select>
                {errors.timeline && <p className="text-xs text-red-500 mt-1">{errors.timeline}</p>}
              </LabelInputContainer>

              {/* Summary panel */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-zinc-800/50 rounded-xl p-4 flex flex-col gap-2 mt-2 text-xs">
                <span className="font-extrabold text-[10px] text-amber-500 uppercase tracking-widest">Your Request Summary</span>
                <div className="text-gray-700 dark:text-zinc-300 leading-relaxed font-medium">
                  <p><strong>Client:</strong> {fullName} {whatsapp ? `(${whatsapp})` : ""}</p>
                  <p className="mt-1"><strong>Selected Service:</strong> {service}</p>
                  <p className="mt-1"><strong>Project Budget:</strong> {budget}</p>
                  <p className="mt-1"><strong>Timeline:</strong> {timeline || "Not specified"}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setStep(2);
                    setErrors({});
                  }}
                  className="border border-zinc-700 text-white font-medium px-6 h-10 rounded-md cursor-can-hover"
                >
                  Back
                </Button>
                <Button
                  disabled={loading}
                  type="submit"
                  className="bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 text-white rounded-md h-10 font-semibold cursor-can-hover flex items-center justify-center gap-2 flex-1 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    <>
                      Send Message <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full text-left", className)}>
      {children}
    </div>
  );
};
