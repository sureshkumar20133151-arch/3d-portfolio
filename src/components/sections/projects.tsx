"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
  ResponsiveDialogTitle,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { PlatformIcon } from "../ui/PlatformIcon";
import { PlatformModal } from "../ui/PlatformModal";

const categories = [
  { id: "all", label: "All" },
  { id: "landing", label: "Landing Pages" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "business", label: "Business Sites" },
  { id: "software", label: "Web App / Mobile App / Windows App" },
  { id: "extension", label: "Chrome Extensions" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI Projects" },
];

const getProjectDesc = (id: string) => {
  if (id === "pc-factory") return "Custom PC builder with live pricing, EMI calculator, and WhatsApp CTA. Built for a Chennai computer shop to get online orders.";
  if (id === "abc-builders") return "A premium business website for a construction firm in Madurai, featuring real-time project showcases, interactive design services, and direct WhatsApp consultations.";
  if (id === "mozhi-boutique") return "A customized e-commerce storefront for Mozhi Boutique, a Tamil Nadu ethnic fashion brand. Features an Amazon-style vertical product gallery with hover zoom, slide-out cart drawer, and live WhatsApp order integration.";
  if (id === "budget-tracker") return "Smart personal finance tracker with expense categories, monthly reports, and Razorpay subscription billing. Available for Web, Android, and Windows.";
  return "";
};

const getProjectMeta = (id: string) => {
  if (id === "pc-factory") return { val: 9999, yr: 2025 };
  if (id === "abc-builders") return { val: 18999, yr: 2025 };
  if (id === "mozhi-boutique") return { val: 9999, yr: 2025 };
  if (id === "budget-tracker") return { val: 1499, yr: 2026 };
  return { val: 0, yr: 2026 };
};

const matchesCategory = (category: string, catId: string) => {
  if (catId === "all") return true;
  const cat = category.toLowerCase();
  if (catId === "landing") return cat.includes("landing");
  if (catId === "ecommerce") return cat.includes("e-commerce") || cat.includes("store") || cat.includes("shop");
  if (catId === "business") return cat.includes("business") || cat.includes("clinic") || cat.includes("firm");
  if (catId === "software") return cat.includes("app") || cat.includes("tool") || cat.includes("software") || cat.includes("apk");
  if (catId === "extension") return cat.includes("extension");
  if (catId === "automation") return cat.includes("workflow") || cat.includes("automation") || cat.includes("flow");
  if (catId === "ai") return cat.includes("ai") || cat.includes("agent") || cat.includes("chatbot");
  return false;
};

const ProjectsSection = () => {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");
  const [sort, setSort] = useState("newest");

  const filteredProjects = useMemo(() => {
    let list = projects.filter((p) => {
      const matchesCat = matchesCategory(p.category, selectedCat);
      const desc = getProjectDesc(p.id);
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        desc.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });

    if (sort === "price-low") {
      list = [...list].sort((a, b) => getProjectMeta(a.id).val - getProjectMeta(b.id).val);
    } else if (sort === "price-high") {
      list = [...list].sort((a, b) => getProjectMeta(b.id).val - getProjectMeta(a.id).val);
    } else if (sort === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // default: newest
      list = [...list].sort((a, b) => getProjectMeta(b.id).yr - getProjectMeta(a.id).yr);
    }

    return list;
  }, [search, selectedCat, sort]);

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto min-h-screen py-16 px-4 md:px-8">
      <SectionHeader id="projects" title="Projects" />

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
              selectedCat === cat.id
                ? "bg-[#EEEDFE] border-[#AFA9EC] text-[#3C3489] font-semibold"
                : "border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Search & Sort Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-zinc-900 max-w-6xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg outline-none focus:border-slate-400 dark:focus:border-zinc-600 transition-all text-slate-900 dark:text-zinc-100"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 text-sm bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg outline-none text-slate-600 dark:text-zinc-300 cursor-pointer focus:border-slate-400 dark:focus:border-zinc-600 transition-all"
          >
            <option value="newest">Newest first</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="az">A → Z</option>
          </select>
        </div>

        {/* Count Label */}
        <span className="text-sm text-slate-400 dark:text-zinc-500 font-medium sm:ml-auto self-center">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Cards Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 text-slate-400 dark:text-zinc-500 max-w-6xl mx-auto w-full">
          <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No projects match your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full focus:outline-none h-full">
          <div
            className="relative w-full max-w-[400px] rounded-lg overflow-hidden cursor-pointer h-full border border-slate-200/50 dark:border-zinc-800/40"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all object-cover"
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
              unoptimized={project.src.includes(".gif")}
            />

            {/* Visual platform badges on top left */}
            {project.platforms && project.platforms.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                {project.platforms.map((platform) => (
                  <span
                    key={platform.type}
                    className={`flex items-center justify-center p-1.5 rounded-lg backdrop-blur-md shadow-sm border ${
                      platform.available
                        ? "bg-white/90 dark:bg-zinc-950/90 border-slate-200/60 dark:border-zinc-800/50 text-slate-800 dark:text-zinc-200"
                        : "bg-white/50 dark:bg-zinc-950/50 border-slate-200/30 dark:border-zinc-800/30 text-slate-400 dark:text-zinc-500 opacity-60"
                    }`}
                    title={`${platform.label} ${platform.available ? "" : "(Coming Soon)"}`}
                  >
                    <PlatformIcon type={platform.type} size={13} />
                  </span>
                ))}
              </div>
            )}

            {/* Free Badge */}
            {project.id === "budget-tracker" && (
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                  Free APK/.EXE
                </span>
              </div>
            )}

            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-background via-background/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left text-foreground font-display">{project.title}</div>
                <div className="text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2 mt-1">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* Sticky header */}
          <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <ResponsiveDialogTitle asChild>
                  <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                    {project.title}
                  </h4>
                </ResponsiveDialogTitle>
                <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                  >
                    Source
                  </Link>
                )}
                {(!project.platforms || project.platforms.length === 0) && project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank">
                    <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                      Visit Website
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-8 py-8">
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Frontend
                    </span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Backend
                    </span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

              {/* Project content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.content}
              </motion.div>
            </div>
          </ScrollArea>
        </ResponsiveDialogContent>
      </ResponsiveDialog>

      {project.platforms && project.platforms.length > 0 && (
        <PlatformModal
          project={project}
          open={isDownloadOpen}
          onOpenChange={setIsDownloadOpen}
        />
      )}
    </div>
  );
};

export default ProjectsSection;
