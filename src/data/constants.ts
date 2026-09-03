// constants.ts
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  VERCEL = "vercel",
  FASTAPI = "fastapi",
  PYTHON = "python",
  N8N = "n8n",
  FIGMA = "figma",
  DOCKER = "docker",
  ANDROID = "android",
  FLUTTER = "flutter",
  ANTIGRAVITY = "antigravity",
  CLAUDE = "claude",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Adds interactive behavior, dynamic logic, and complex features to websites.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type-safe extension of JavaScript that prevents bugs and improves code reliability.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The essential markup language used to structure the layout and content of webpages.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Controls page design, layouts, colors, typography, and responsive styles for mobile screens.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "A powerful frontend library for building highly interactive, fast user interfaces.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "A flexible and lightweight frontend framework for building modern web applications.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "A production-grade React framework that excels in page load speed, SEO, and static generation.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "A utility-first CSS framework that enables rapid and custom styling directly in markup.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Enables running JavaScript on servers to build high-speed APIs and backend systems.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "A minimalist server framework that simplifies database integrations and API routing in Node.js.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "A secure, enterprise-grade relational database for structured business data and transactions.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "A modern NoSQL document database used for quick, flexible data storage and retrieval.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "A local version control system that tracks source code revisions and avoids data loss.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "A cloud platform for hosting repositories, managing deployments, and developer collaboration.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.ANDROID]: {
    id: 15,
    name: "android",
    label: "Android",
    shortDescription: "Native mobile app development for Android smartphones and tablet devices.",
    color: "#a4c639",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  [SkillNames.FLUTTER]: {
    id: 19,
    name: "flutter",
    label: "Flutter",
    shortDescription: "Cross-platform mobile app development framework for high-performance iOS & Android apps.",
    color: "#02569b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  [SkillNames.ANTIGRAVITY]: {
    id: 21,
    name: "antigravity",
    label: "Google Antigravity",
    shortDescription: "Advanced Agentic AI Coding Assistant platform designed by Google DeepMind.",
    color: "#4285f4",
    icon: "https://avatars.githubusercontent.com/u/128362638?s=48",
  },
  [SkillNames.CLAUDE]: {
    id: 22,
    name: "claude",
    label: "Claude AI",
    shortDescription: "State-of-the-art AI model by Anthropic for intelligent reasoning, code generation, and automation.",
    color: "#d97757",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/claude/claude-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 23,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization platform to package apps into lightweight, isolated production containers.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "The package registry used to manage software libraries, dependencies, and node packages.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Google's cloud suite providing quick user authentication, databases, and analytics.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "The world's most popular Content Management System (CMS) for business sites and blogs.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 26,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "A high-performance Python framework for building extremely fast, secure, and modern APIs.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 27,
    name: "python",
    label: "Python",
    shortDescription: "A versatile programming language used for scripting, backend APIs, and building AI agents.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.N8N]: {
    id: 28,
    name: "n8n",
    label: "n8n",
    shortDescription: "An automation tool that connects business apps (like Sheets & WhatsApp) to build workflows.",
    color: "#ff6d5a",
    icon: "https://avatars.githubusercontent.com/u/45487711?s=48",
  },
  [SkillNames.FIGMA]: {
    id: 29,
    name: "figma",
    label: "Figma",
    shortDescription: "A collaborative design tool used to craft UI/UX layouts, wireframes, and vector icons.",
    color: "#f24e1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Cloud deployment platform optimized for speed, performance, and SEO optimization.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "Present",
    title: "Freelance Web Developer & AI Builder",
    company: "Solo Developer (Self-employed)",
    description: [
      "Built custom websites, landing pages, and e-commerce stores for businesses across Tamil Nadu.",
      "Developed AI-powered tools including WhatsApp chatbots with Tamil NLP and product image generators.",
      "Created Chrome extensions for lead generation, business automation, and data scraping.",
      "Delivered 10+ projects with average 7-day turnaround and 30-day free post-launch support.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.TAILWIND,
      SkillNames.POSTGRES,
      SkillNames.VERCEL,
      SkillNames.GIT,
      SkillNames.JS,
      SkillNames.TS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.FASTAPI,
      SkillNames.PYTHON,
      SkillNames.N8N,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
