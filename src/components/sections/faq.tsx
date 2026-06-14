"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does a project take?",
    answer: "Most websites are delivered in 7 days or less. E-commerce stores take 10–14 days. AI tools and automation projects are scoped individually — I'll give you an exact timeline in the proposal.",
  },
  {
    question: "What is your pricing and payment process?",
    answer: "All projects are fixed price — no hourly billing, no surprise invoices. I charge 50% upfront and 50% on delivery. You know the full cost before I write a single line of code.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. Every project includes up to 2 rounds of revisions. Most clients need just one. Major scope changes beyond the agreed brief are quoted separately.",
  },
  {
    question: "Will I be able to manage the website myself after launch?",
    answer: "Yes. I build a simple admin panel or CMS for content-heavy sites, and record a walkthrough video showing exactly how to update your site, add products, or manage orders.",
  },
  {
    question: "Do you work with clients outside Madurai or Tamil Nadu?",
    answer: "Absolutely. I work across India and have delivered projects for UAE and global clients. Everything is handled remotely via WhatsApp and Google Meet — location is never a barrier.",
  },
  {
    question: "What happens after the website goes live?",
    answer: "You get 30 days of free post-launch support. Any bugs, small tweaks, or questions — handled at zero extra cost via WhatsApp. After 30 days, affordable maintenance packages are available.",
  },
  {
    question: "Can you integrate AI, WhatsApp bots, or automation?",
    answer: "Yes — that's one of my core specialities. I build Claude/GPT chatbots, WhatsApp auto-reply bots, n8n/Zapier workflows, and AI image generators. These can be added to any project.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto z-10 relative bg-transparent min-h-screen flex flex-col justify-center">
      <div className="p-6 md:p-10 rounded-3xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl shadow-sm relative z-10">
        <div className="text-center mb-8 flex flex-col items-center">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
            ● FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
            Everything you want to know before we start.
          </p>
        </div>

        <div className="border-t border-gray-200/50 dark:border-zinc-800/50 pt-2">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqData.length - 1;
            return (
              <div key={index} className={cn(!isLast && "border-b border-gray-200/50 dark:border-zinc-800/50")}>
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between py-5 text-left font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors gap-4"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <span
                    className={cn(
                      "text-xl font-bold transition-colors select-none",
                      isOpen ? "text-blue-600 dark:text-blue-400" : "text-gray-400 dark:text-zinc-600"
                    )}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm md:text-base text-slate-950 dark:text-slate-50 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
