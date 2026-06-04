"use client";

import React from "react";
import { Project } from "@/data/projects";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "./responsive-dialog";
import { PlatformIcon } from "./PlatformIcon";
import { ArrowUpRight, Lock } from "lucide-react";

interface PlatformModalProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getPlatformDescription = (type: string) => {
  switch (type) {
    case "web":
      return "Access instantly in any browser — no install needed.";
    case "android":
      return "Install on your Android phone or tablet (.apk file).";
    case "chrome":
      return "Add directly to Chrome browser — works on any website.";
    case "windows":
      return "Install on Windows PC — works offline (.exe installer).";
    default:
      return "";
  }
};

const getPlatformCardStyle = (type: string, available: boolean) => {
  if (!available) {
    return "border-slate-100 dark:border-zinc-900 bg-slate-50/50 dark:bg-zinc-900/40 opacity-70";
  }
  switch (type) {
    case "web":
      return "border-blue-100 dark:border-blue-900/20 bg-blue-50/10 dark:bg-blue-950/5 hover:border-blue-300 dark:hover:border-blue-800/40";
    case "android":
      return "border-green-100 dark:border-green-900/20 bg-green-50/10 dark:bg-green-950/5 hover:border-green-300 dark:hover:border-green-800/40";
    case "chrome":
      return "border-orange-100 dark:border-orange-900/20 bg-orange-50/10 dark:bg-orange-950/5 hover:border-orange-300 dark:hover:border-orange-800/40";
    case "windows":
      return "border-slate-200 dark:border-zinc-800 bg-slate-50/30 dark:bg-zinc-900/10 hover:border-slate-300 dark:hover:border-zinc-700";
    default:
      return "border-slate-200 dark:border-zinc-850 bg-white dark:bg-zinc-950";
  }
};

const getPlatformBadgeStyle = (type: string, available: boolean) => {
  if (!available) return "bg-slate-100 text-slate-400 dark:bg-zinc-800 dark:text-zinc-500 border-none";
  switch (type) {
    case "web":
      return "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30";
    case "android":
      return "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400 border border-green-100 dark:border-green-900/30";
    case "chrome":
      return "bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30";
    case "windows":
      return "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300 border border-slate-200 dark:border-zinc-700";
    default:
      return "";
  }
};

export const PlatformModal: React.FC<PlatformModalProps> = ({
  project,
  open,
  onOpenChange,
}) => {
  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-xl p-6 md:p-8 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-900 rounded-2xl shadow-2xl">
        <ResponsiveDialogHeader className="mb-6 text-left">
          <ResponsiveDialogTitle className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            {project.title}
          </ResponsiveDialogTitle>
          <p className="text-xs md:text-sm text-slate-400 dark:text-zinc-500 mt-1">
            Available Platforms & Installers
          </p>
        </ResponsiveDialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {project.platforms?.map((platform) => {
            const cardStyle = getPlatformCardStyle(platform.type, platform.available);
            const badgeStyle = getPlatformBadgeStyle(platform.type, platform.available);
            const desc = getPlatformDescription(platform.type);

            return (
              <div
                key={platform.type}
                className={`flex flex-col justify-between p-5 rounded-xl border transition-all duration-200 ${cardStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        platform.available ? "bg-white dark:bg-zinc-900 shadow-sm" : ""
                      }`}
                    >
                      <PlatformIcon type={platform.type} size={20} />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${badgeStyle}`}>
                      {platform.available ? platform.label : "Soon"}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-950 dark:text-zinc-100 mb-1">
                    {platform.available ? platform.label : `${platform.label} App`}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-zinc-500 leading-relaxed mb-5 min-h-[32px]">
                    {desc}
                  </p>
                </div>

                <div className="mt-auto pt-2 w-full">
                  {platform.available ? (
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-200 text-xs font-semibold transition-all shadow-sm focus:outline-none"
                    >
                      {platform.buttonLabel}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-100 dark:bg-zinc-900 text-slate-400 dark:text-zinc-500 text-xs font-semibold cursor-not-allowed border border-slate-200/50 dark:border-zinc-800/40"
                    >
                      <Lock className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
};
