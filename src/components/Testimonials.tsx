"use client";
import React, { useState, useEffect } from "react";
import { SectionHeader } from "./sections/section-header";
import RevealAnimation from "./reveal-animations";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - itemsPerView);

  // Safely adjust index if itemsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  // Auto-play feature
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handleDragEnd = (event: any, info: any) => {
    const dragThreshold = 50;
    const swipeDistance = info.offset.x;
    if (swipeDistance < -dragThreshold) {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    } else if (swipeDistance > dragThreshold) {
      setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <section id="testimonials" className="py-20 px-4 max-w-5xl mx-auto z-10 relative bg-transparent overflow-hidden">
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
        className="relative mb-12 md:mb-16 mt-0"
      />

      <RevealAnimation delay={0.1} className="relative w-full">
        {/* Carousel Window */}
        <div
          className="relative w-full overflow-hidden px-1 py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{
              x: itemsPerView === 2
                ? `calc(-${currentIndex} * (50% + 12px))`
                : `calc(-${currentIndex} * (100% + 24px))`
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 22,
            }}
          >
            {testimonialsData.map((t, index) => (
              <div
                key={index}
                className="shrink-0 rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between p-6 md:p-8 select-none"
                style={{
                  width: itemsPerView === 2 ? "calc(50% - 12px)" : "100%",
                }}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    {/* Star Rating */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <span key={j} className="text-yellow-400 text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    {/* Decorative quote icon */}
                    <Quote className="w-8 h-8 text-blue-500/10 dark:text-blue-400/10 shrink-0 pointer-events-none" />
                  </div>
                  {/* Quote Text */}
                  <p className="text-sm md:text-base italic text-slate-950 dark:text-slate-50 font-medium leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                {/* Author Details */}
                <div className="border-t border-gray-100 dark:border-zinc-800/80 pt-4">
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                    {t.business} &middot; <span className="text-blue-500 dark:text-blue-400 font-semibold">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots and Arrows */}
        <div className="flex items-center justify-between mt-8 max-w-sm mx-auto px-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-can-hover"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-can-hover ${
                  currentIndex === idx
                    ? "w-6 bg-blue-600 dark:bg-blue-500"
                    : "w-2 bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-can-hover"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Testimonials;
