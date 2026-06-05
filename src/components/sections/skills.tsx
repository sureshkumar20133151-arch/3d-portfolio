"use client";
import React, { useEffect, useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Skill } from "@/data/constants";
import { motion, AnimatePresence } from "motion/react";

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [autoplayActive, setAutoplayActive] = useState(true);

  useEffect(() => {
    const handleSkillSelected = (e: Event) => {
      const customEvent = e as CustomEvent<Skill | null>;
      setSelectedSkill(customEvent.detail);
    };

    const handleAutoplayChanged = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setAutoplayActive(customEvent.detail);
    };

    window.addEventListener("skill-selected", handleSkillSelected);
    window.addEventListener("skill-autoplay-state", handleAutoplayChanged);

    // Request active skill details immediately on mount
    window.dispatchEvent(new CustomEvent("request-active-skill"));

    return () => {
      window.removeEventListener("skill-selected", handleSkillSelected);
      window.removeEventListener("skill-autoplay-state", handleAutoplayChanged);
    };
  }, []);

  return (
    <SectionWrapper id="skills" className="w-full min-h-screen md:min-h-[120dvh] relative flex flex-col justify-between py-12 md:py-20 pointer-events-none">
      <div className="w-full flex flex-col items-center">
        <SectionHeader id="skills" title="Tech Stack" desc="(hint: hover/press a key or let it autoplay)" />
      </div>

      {/* Floating Card Overlay */}
      <div className="w-full max-w-xl mx-auto px-4 z-20 pointer-events-auto mt-auto mb-16 md:mb-24">
        <AnimatePresence mode="wait">
          {selectedSkill ? (
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative overflow-hidden bg-white/75 dark:bg-zinc-900/85 backdrop-blur-xl border border-slate-200/50 dark:border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col sm:flex-row items-center gap-6"
              style={{
                boxShadow: `0 10px 30px -10px rgba(0, 0, 0, 0.1), 0 0 20px -3px ${selectedSkill.color}25`
              }}
            >
              {/* Glowing Ambient Background */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${selectedSkill.color} 0%, transparent 70%)`
                }}
              />

              {/* Skill Icon */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center p-3 relative shrink-0 transition-transform duration-300 hover:scale-110"
                style={{
                  backgroundColor: `${selectedSkill.color}15`,
                  border: `1px solid ${selectedSkill.color}30`
                }}
              >
                <img 
                  src={selectedSkill.icon} 
                  alt={selectedSkill.label} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if devicon fails to load
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              {/* Skill Text */}
              <div className="flex-1 text-center sm:text-left">
                <h3 
                  className="text-2xl font-bold tracking-tight mb-2 transition-colors duration-300"
                  style={{ color: selectedSkill.color }}
                >
                  {selectedSkill.label}
                </h3>
                <p className="text-base text-slate-950 dark:text-zinc-50 leading-relaxed font-semibold">
                  {selectedSkill.shortDescription}
                </p>
              </div>

              {/* Loop Progress Bar */}
              {autoplayActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                  <motion.div 
                    key={`progress-${selectedSkill.name}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.5, ease: "linear" }}
                    className="h-full"
                    style={{ backgroundColor: selectedSkill.color }}
                  />
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="text-center text-sm text-slate-500 dark:text-zinc-400 font-medium italic py-6"
            >
              Waiting for interaction...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
