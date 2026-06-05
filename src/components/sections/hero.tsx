import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MessageCircle, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none font-thin text-transparent text-slate-800 text-left",
                          "font-thin text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hiidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.1}>
                  <div className="mt-4 flex justify-center md:justify-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-slate-500 dark:text-zinc-400 text-xs md:text-sm font-medium leading-none">
                      📍 Based in Madurai, Tamil Nadu — Serving India & UAE
                    </span>
                  </div>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    A Web Developer & AI Builder
                  </p>
                </BlurIn>
                <BlurIn delay={1.4}>
                  <div className="flex flex-wrap items-center gap-3 mt-4 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Available for new projects
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">📍 Madurai, Tamil Nadu</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">🌍 UAE · Global Clients</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">★★★★★ 5.0 Rated</span>
                  </div>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href={
                    "https://wa.me/919361599097"
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <MessageCircle size={24} />
                      <p>WhatsApp Me</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={config.social.twitter}
                      target="_blank"
                    >
                      <Button variant={"outline"}>
                        <SiX size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <BlurIn delay={2.2}>
                <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 w-full max-w-md md:max-w-lg">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">8+</div>
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
