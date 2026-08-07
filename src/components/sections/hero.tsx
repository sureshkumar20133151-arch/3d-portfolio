"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import { usePreloader } from "../preloader";
import { BlurIn } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const typingPhrases = [
  "Automation That Handles Your Daily Repetitive Tasks",
  "Business Websites That Give Your Brand A Strong Online Presence",
  "Portfolio Websites That Showcase Your Work & Attract New Clients",
  "E-Commerce Stores That Generate Sales & Sell Your Products Online",
  "Lead Generators That Bring Unlimited Leads To Your Business",
  "WhatsApp Chatbots That Handle Your Customer Support 24/7",
  "Custom Chrome Extensions Built For Your Specific Software Needs",
  "Mobile Apps That Keep Your Customers Engaged & Coming Back"
];

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = typingPhrases[currentPhraseIdx];
    
    const type = () => {
      if (isDeleting) {
        setTypedText((prev) => prev.substring(0, prev.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setCurrentPhraseIdx((prev) => (prev + 1) % typingPhrases.length);
        }
      } else {
        setTypedText((prev) => currentFullText.substring(0, prev.length + 1));
        if (typedText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2800);
          return;
        }
      }
      
      const typingSpeed = isDeleting ? 30 : 55;
      timer = setTimeout(type, typingSpeed);
    };

    timer = setTimeout(type, isDeleting ? 30 : 55);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentPhraseIdx]);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById("contact-form") || document.getElementById("contact-get-free-quote") || document.getElementById("contact");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#contact-form");
    }
  };

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-36 sm:pt-36 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col w-full text-left">
              <div>
                <BlurIn delay={0.7}>
                  <div className="flex flex-col gap-2 md:gap-3 leading-none my-2">
                    <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-extrabold tracking-tight">
                      I Build
                    </h1>
                    <h2 className="text-sky-400 text-xl md:text-3xl font-semibold italic min-h-[60px] md:min-h-[80px] leading-relaxed flex items-center flex-wrap font-serif">
                      {typedText}
                      <span className="inline-block w-[3px] h-[0.8em] bg-sky-400 ml-1.5 rounded-sm animate-pulse" />
                    </h2>
                  </div>
                </BlurIn>

                <BlurIn delay={1.0}>
                  <p className="text-sm md:text-base text-gray-400 dark:text-zinc-400 mt-4 max-w-lg leading-relaxed">
                    Custom websites, SaaS tools, Chrome extensions, and AI agents — built for Madurai &amp; Tamil Nadu businesses and global clients. Fixed price. Real results.
                  </p>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <div className="flex flex-wrap items-center gap-2 mt-5 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-600 dark:text-purple-400 text-xs font-semibold">
                      📍 Madurai, Tamil Nadu
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                      🌍 UAE · Global Clients
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400 text-xs font-semibold">
                      ★★★★★ 5.0 Rated
                    </span>
                  </div>
                </BlurIn>
              </div>

              <div className="mt-6 flex flex-row items-center gap-3">
                <a href="#contact-form" onClick={handleQuoteClick}>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-6 h-11 rounded-lg text-sm transition-colors cursor-can-hover flex items-center gap-2">
                    GET FREE QUOTE &rarr;
                  </Button>
                </a>
                <Link href="#projects">
                  <Button variant="outline" className="border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-900 dark:text-white font-bold px-6 h-11 rounded-lg text-sm transition-all cursor-can-hover flex items-center gap-2">
                    ▶ View My Work
                  </Button>
                </Link>
              </div>

              <BlurIn delay={2.2}>
                <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 w-full max-w-md md:max-w-lg">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">10+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Projects Built</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">Across TN & Chennai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">7 days</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Avg. Delivery Time</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">All projects on schedule</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">30 days</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Free Post-Launch Support</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">Every project, included</div>
                  </div>
                </div>
              </BlurIn>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
