import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Chrome, Database, MessageCircle, Bot, Zap, Phone, Brain, Globe, ShoppingBag, Code } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({
  live,
  repo,
  platforms
}: {
  live: string;
  repo?: string;
  platforms?: Platform[];
}) => {
  if (platforms && platforms.length > 0) {
    return (
      <div className="flex flex-wrap items-center justify-start gap-3 my-3 mb-8">
        {platforms.map((p, idx) => {
          if (!p.available) return null;
          return (
            <Link
              key={idx}
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href={p.url}
            >
              <Button variant={"default"} size={"sm"} className="bg-blue-600 hover:bg-blue-700 text-white border-transparent">
                {p.buttonLabel}
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          );
        })}
        {repo && repo !== "#" && (
          <Link
            className="font-mono underline flex gap-2"
            rel="noopener"
            target="_new"
            href={repo}
          >
            <Button variant={"outline"} size={"sm"}>
              Github
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  chrome: {
    title: "Chrome Extension",
    bg: "black",
    fg: "white",
    icon: <Chrome size={18} />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  sheets: {
    title: "Google Sheets API",
    bg: "black",
    fg: "white",
    icon: <Database size={18} />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <Zap size={18} />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  whatsapp: {
    title: "WhatsApp API",
    bg: "black",
    fg: "white",
    icon: <MessageCircle size={18} />,
  },
  claude: {
    title: "Claude API",
    bg: "black",
    fg: "white",
    icon: <Bot size={18} />,
  },
  twilio: {
    title: "Twilio API",
    bg: "black",
    fg: "white",
    icon: <Phone size={18} />,
  },
  tamil: {
    title: "Tamil NLP",
    bg: "black",
    fg: "white",
    icon: <Brain size={18} />,
  },
  wordpress: {
    title: "WordPress",
    bg: "black",
    fg: "white",
    icon: <Globe size={18} />,
  },
  woocommerce: {
    title: "WooCommerce",
    bg: "black",
    fg: "white",
    icon: <ShoppingBag size={18} />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <Code size={18} />,
  }
};

export type Platform = {
  type: "web" | "android" | "chrome" | "windows";
  label: string;
  url: string;
  buttonLabel: string;
  available: boolean;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  platforms?: Platform[];
};

const projects: Project[] = [
  {
    id: "pc-factory",
    category: "E-commerce Landing",
    title: "PC Factory Configurator",
    src: "/assets/projects-screenshots/pc-factory/hero-animation.gif?v=2",
    screenshots: ["hero-animation.gif", "configurator.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.whatsapp,
      ],
    },
    live: "https://pc-factory-v2.vercel.app",
    github: "https://github.com/sureshkumar20133151-arch/pc-fac-live",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Custom PC Builder with Live Pricing
          </TypographyP>
          <TypographyP className="font-mono ">
            Custom PC builder with live pricing, EMI calculator, and WhatsApp CTA. Built for a Chennai computer shop to get online orders.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/pc-factory/hero-animation.gif?v=2`,
              `${BASE_PATH}/pc-factory/configurator.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Interactive custom PC part selector with real-time budget calculations.</li>
            <li>EMI calculator integrated on checkout options.</li>
            <li>Direct WhatsApp CTA sending configurator specs directly to shop.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "abc-builders",
    category: "Business Landing",
    title: "ABC Builders Madurai",
    src: "/assets/projects-screenshots/abc-builders/hero-animation.gif?v=7",
    screenshots: ["hero-animation.gif", "project_villa.png", "project_apartment.png", "project_office.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.whatsapp,
      ],
    },
    live: "https://abc-builders-madurai.vercel.app/",
    github: "https://github.com/sureshkumar20133151-arch/abc-builders-madurai",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Modern Construction & Builder Showcase
          </TypographyP>
          <TypographyP className="font-mono ">
            A premium business website for a construction firm in Madurai, featuring real-time project showcases, interactive design services, and direct WhatsApp consultations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/abc-builders/hero-animation.gif?v=7`,
              `${BASE_PATH}/abc-builders/project_villa.png`,
              `${BASE_PATH}/abc-builders/project_apartment.png`,
              `${BASE_PATH}/abc-builders/project_office.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Interactive project gallery displaying villas, offices, and apartments.</li>
            <li>Comprehensive construction service descriptions with step-by-step processes.</li>
            <li>Integrated customer enquiry channel with direct WhatsApp CTA.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "mozhi-boutique",
    category: "E-commerce Store",
    title: "Mozhi Boutique",
    src: "/assets/projects-screenshots/mozhi-boutique/hero-animation.gif?v=1",
    screenshots: ["hero-animation.gif", "hero.png", "kanchi.png", "kurti.png", "lehenga.png", "cotton.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.wordpress,
        PROJECT_SKILLS.woocommerce,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.whatsapp,
      ],
    },
    live: "http://mozhiboutique.xo.je/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Premium WooCommerce Ethnic Fashion Store
          </TypographyP>
          <TypographyP className="font-mono ">
            A customized e-commerce storefront for Mozhi Boutique, a Tamil Nadu ethnic fashion brand. Features an Amazon-style vertical product gallery with hover zoom, slide-out cart drawer, and live WhatsApp order integration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/mozhi-boutique/hero-animation.gif?v=1`,
              `${BASE_PATH}/mozhi-boutique/hero.png`,
              `${BASE_PATH}/mozhi-boutique/kanchi.png`,
              `${BASE_PATH}/mozhi-boutique/kurti.png`,
              `${BASE_PATH}/mozhi-boutique/lehenga.png`,
              `${BASE_PATH}/mozhi-boutique/cotton.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Custom WooCommerce child theme with high-performance design tokens.</li>
            <li>Amazon-style vertical thumbnail gallery with 2x hover zoom and lightbox.</li>
            <li>Slide-out Cart Drawer and Quick View modal for optimized buyer flows.</li>
            <li>WhatsApp Order Confirmation and automated consultation CTA.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "budget-tracker",
    category: "Web App / Mobile App",
    title: "Budget Tracker",
    src: "/assets/projects-screenshots/budget-tracker/hero-animation.gif?v=3",
    screenshots: ["hero-animation.gif", "dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://budgettracker.vercel.app",
    github: "https://github.com/sureshkumar20133151-arch/budget-tracker",
    platforms: [
      {
        type: "web",
        label: "Web App",
        url: "https://budgettracker.vercel.app",
        buttonLabel: "Open Web App",
        available: true,
      },
      {
        type: "android",
        label: "Android App",
        url: "https://drive.google.com/file/d/1tBNDxLz-9u1Xk1Fw9oY_R5T92v4V04_J/view?usp=sharing",
        buttonLabel: "Download APK",
        available: true,
      },
      {
        type: "chrome",
        label: "Chrome Extension",
        url: "#",
        buttonLabel: "Add to Chrome",
        available: false,
      },
      {
        type: "windows",
        label: "Windows App",
        url: "https://drive.google.com/file/d/1tBNDxLz-9u1Xk1Fw9oY_R5T92v4V04_J/view?usp=sharing",
        buttonLabel: "Download .exe",
        available: true,
      },
    ],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Smart Personal Finance SaaS
          </TypographyP>
          <TypographyP className="font-mono">
            A B2C SaaS budget tracker built for modern personal finance tracking. Supports multi-platform availability across browsers, Windows desktops, and Android mobile devices. Fully integrated with Razorpay subscription checkout.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} platforms={this.platforms} />
          <SlideShow
            images={[
              `${BASE_PATH}/budget-tracker/hero-animation.gif?v=3`,
              `${BASE_PATH}/budget-tracker/dashboard.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Sleek, responsive dashboard with circular budget indicators.</li>
            <li>Razorpay payment gateway integration for subscription billing.</li>
            <li>Cross-platform builds compiled for Android (APK) and Windows Desktop (.exe).</li>
            <li>Supabase cloud integration for real-time secure database synchronization.</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
