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
import { ArrowUpRight, Search, Layout, ShoppingCart, Building, Smartphone, Puzzle, Bot, Brain, Eye } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const categories = [
  { id: "all", label: "All" },
  { id: "landing", label: "Landing Pages" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "business", label: "Business Sites" },
  { id: "software", label: "Web App / Mobile App" },
  { id: "extension", label: "Chrome Extensions" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI Projects" },
];

const catMeta: Record<string, { icon: React.ReactNode; bg: string; clr: string }> = {
  landing: { icon: <Layout className="w-4 h-4" />, bg: "#E6F1FB", clr: "#0C447C" },
  ecommerce: { icon: <ShoppingCart className="w-4 h-4" />, bg: "#EAF3DE", clr: "#27500A" },
  business: { icon: <Building className="w-4 h-4" />, bg: "#EEEDFE", clr: "#3C3489" },
  software: { icon: <Smartphone className="w-4 h-4" />, bg: "#FAEEDA", clr: "#633806" },
  extension: { icon: <Puzzle className="w-4 h-4" />, bg: "#E1F5EE", clr: "#085041" },
  automation: { icon: <Bot className="w-4 h-4" />, bg: "#FCEBEB", clr: "#791F1F" },
  ai: { icon: <Brain className="w-4 h-4" />, bg: "#FBEAF0", clr: "#72243E" },
};

const getTagStyle = (tag: string) => {
  switch (tag) {
    case "Live":
      return "bg-[#EAF3DE] text-[#27500A] dark:bg-emerald-950/40 dark:text-emerald-300";
    case "Buy":
      return "bg-[#EEEDFE] text-[#3C3489] dark:bg-indigo-950/40 dark:text-indigo-300";
    case "Demo":
      return "bg-[#FAEEDA] text-[#633806] dark:bg-amber-950/40 dark:text-amber-300";
    case "Free":
      return "bg-[#E0F2FE] text-[#0369A1] dark:bg-sky-950/40 dark:text-sky-300";
    default:
      return "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300";
  }
};

const ProjectsSection = () => {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");
  const [sort, setSort] = useState("newest");

  const filteredProjects = useMemo(() => {
    let list = projects.filter((p) => {
      const matchesCat = selectedCat === "all" || p.cat === selectedCat;
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });

    if (sort === "price-low") {
      list = [...list].sort((a, b) => {
        const pA = parseInt(a.price.replace(/\D/g, "")) || 0;
        const pB = parseInt(b.price.replace(/\D/g, "")) || 0;
        return pA - pB;
      });
    } else if (sort === "price-high") {
      list = [...list].sort((a, b) => {
        const pA = parseInt(a.price.replace(/\D/g, "")) || 0;
        const pB = parseInt(b.price.replace(/\D/g, "")) || 0;
        return pB - pA;
      });
    } else if (sort === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // default: newest (yr descending)
      list = [...list].sort((a, b) => b.yr - a.yr);
    }

    return list;
  }, [search, selectedCat, sort]);

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto min-h-screen py-16 px-4 md:px-8">
      <SectionHeader id="projects" title="Projects & Products" />

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-[14px]">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const meta = catMeta[project.cat] || catMeta.landing;
  return (
    <div className="w-full flex h-full">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex w-full text-left h-full focus:outline-none">
          <div className="bg-white dark:bg-zinc-950 border-[0.5px] border-slate-200 dark:border-zinc-900 rounded-[12px] p-4.5 w-full flex flex-col justify-between hover:border-slate-400 dark:hover:border-zinc-700 transition-all duration-150 shadow-none hover:shadow-none h-full">
            <div>
              {/* Card top */}
              <div className="flex items-center justify-between mb-4 w-full">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: meta.bg, color: meta.clr }}
                >
                  {meta.icon}
                </div>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${getTagStyle(project.tag)}`}>
                  {project.tag}
                </span>
              </div>
              {/* Card title */}
              <h3 className="text-slate-900 dark:text-zinc-100 font-semibold text-sm mb-1 leading-snug">
                {project.title}
              </h3>
              {/* Card description */}
              <p className="text-slate-500 dark:text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                {project.desc}
              </p>
            </div>
            {/* Card footer */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-zinc-900 w-full">
              <span className="text-slate-900 dark:text-zinc-100 font-bold text-xs">
                {project.price}
              </span>
              <span className="border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 bg-transparent hover:bg-slate-50 dark:hover:bg-zinc-900 text-[11px] px-2.5 py-1 rounded-[8px] flex items-center gap-1 transition-all">
                <Eye className="w-3.5 h-3.5" />
                Preview
              </span>
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
                {project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank">
                    <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                      Visit
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
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 animate-fade-in"
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
    </div>
  );
};

export default ProjectsSection;
