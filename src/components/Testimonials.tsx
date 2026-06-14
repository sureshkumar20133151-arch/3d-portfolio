"use client";
import React, { useState, useEffect } from "react";
import { SectionHeader } from "./sections/section-header";
import RevealAnimation from "./reveal-animations";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

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
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
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
              x: itemsPerView === 3
                ? `calc(-${currentIndex} * (33.333% + 8px))`
                : itemsPerView === 2
                ? `calc(-${currentIndex} * (50% + 12px))`
                : `calc(-${currentIndex} * (100% + 24px))`
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 22,
            }}
          >
            {testimonialsData.map((t, index) => {
              const username = t.name.toLowerCase().replace(/[^a-z0-9]/g, "") + "_";
              return (
                <div
                  key={index}
                  className="shrink-0 rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between p-5 select-none aspect-square"
                  style={{
                    width: itemsPerView === 3
                      ? "calc(33.333% - 16px)"
                      : itemsPerView === 2
                      ? "calc(50% - 12px)"
                      : "100%",
                  }}
                >
                  {/* Instagram Post Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-zinc-800/80">
                    <div className="flex items-center gap-3">
                      {/* Story Ring Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-red-500 to-purple-600 p-[2px] shrink-0">
                        <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 p-[1px]">
                          <div className="w-full h-full rounded-full bg-blue-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                            {t.name.split(" ").map(n => n[0]).join("")}
                          </div>
                        </div>
                      </div>
                      {/* User Name & Location */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-gray-900 dark:text-white leading-none">
                            {username}
                          </span>
                          {/* Instagram Verified Rosette Checkmark */}
                          <svg className="w-3.5 h-3.5 text-[#0095f6] fill-current shrink-0" viewBox="0 0 24 24" aria-label="Verified">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <span className="text-xs text-blue-500 dark:text-blue-400 font-medium mt-1 cursor-can-hover leading-none">
                          {t.location}
                        </span>
                      </div>
                    </div>
                    {/* Three dots icon */}
                    <MoreHorizontal className="w-5 h-5 text-gray-400 dark:text-zinc-600 cursor-can-hover" />
                  </div>

                  {/* Post Content (The Testimonial Quote) */}
                  <div className="flex-1 flex flex-col justify-center py-4 px-1">
                    <p className="text-xs md:text-sm italic text-slate-950 dark:text-slate-50 font-medium leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Instagram Post Footer */}
                  <div className="pt-3 border-t border-gray-100 dark:border-zinc-800/80">
                    {/* Actions Bar */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Heart className="w-[22px] h-[22px] text-red-500 fill-red-500 cursor-can-hover shrink-0" />
                        <MessageCircle className="w-[22px] h-[22px] text-slate-900 dark:text-slate-100 cursor-can-hover shrink-0" />
                        <Send className="w-[22px] h-[22px] text-slate-900 dark:text-slate-100 cursor-can-hover shrink-0" />
                      </div>
                      <Bookmark className="w-[22px] h-[22px] text-slate-900 dark:text-slate-100 cursor-can-hover shrink-0" />
                    </div>

                    {/* Ratings as Likes */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="flex gap-0.5 shrink-0">
                        {Array.from({ length: t.stars }).map((_, j) => (
                          <span key={j} className="text-yellow-400 text-xs">
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-gray-900 dark:text-white leading-none">
                        5.0 rating
                      </span>
                    </div>

                    {/* Caption */}
                    <div className="text-[11px] text-gray-800 dark:text-zinc-200 line-clamp-1 leading-tight">
                      <span className="font-bold mr-1.5">{username}</span>
                      <span className="text-gray-500 dark:text-zinc-400">{t.business}</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
