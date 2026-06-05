import React from "react";
import { SectionHeader } from "./sections/section-header";
import SectionWrapper from "./ui/section-wrapper";
import RevealAnimation from "./reveal-animations";

interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  business: string;
  location: string;
}

const testimonialsData: Testimonial[] = [
  {
    stars: 5,
    quote: "Suresh delivered our clinic website in just 6 days. The WhatsApp button alone brought us 3 new patients in the first week.",
    name: "Ramesh K.",
    business: "Ramesh Dental Clinic",
    location: "Madurai",
  },
  {
    stars: 5,
    quote: "I gave him my product photos and a rough idea — he turned it into a full e-commerce store with Razorpay in under a week.",
    name: "Priya S.",
    business: "Mozhi Boutique",
    location: "Chennai",
  },
  {
    stars: 5,
    quote: "The AI chatbot handles Tamil and English queries automatically. We saved 4 hours of manual WhatsApp replies every day.",
    name: "Karthik M.",
    business: "ABC Builders",
    location: "Madurai",
  },
  {
    stars: 5,
    quote: "Fixed price, no hidden costs, delivered on time. The landing page looks better than sites agencies charge 3x more for.",
    name: "Arun T.",
    business: "PC Factory",
    location: "Coimbatore",
  },
  {
    stars: 5,
    quote: "He built and submitted our Chrome extension to the Web Store. It saves our sales team 2 hours every morning on prospecting.",
    name: "Divya R.",
    business: "Sales Agency",
    location: "Bangalore",
  },
];

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader
        id="testimonials"
        title={
          <span className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              ● Testimonials
            </span>
            <span>What Clients Say</span>
          </span>
        }
        desc="Real feedback from real businesses I've worked with."
        className="relative mb-12 md:mb-20 mt-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {testimonialsData.map((t, index) => {
          const isLast = index === testimonialsData.length - 1;
          return (
            <RevealAnimation
              key={index}
              delay={index * 0.1}
              className={isLast ? "md:col-span-2 md:max-w-2xl md:mx-auto md:w-full" : ""}
            >
              <div className="p-6 h-full rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md flex flex-col justify-between">
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm italic text-slate-950 dark:text-slate-50 font-medium leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                {/* Author Info */}
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                    {t.business} &middot; {t.location}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
