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

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
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

export type Project = {
  id: string;
  category: string;
  cat: string;
  title: string;
  desc: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  price: string;
  tag: 'Live' | 'Buy' | 'Demo' | 'Free';
  yr: number;
};

const projects: Project[] = [
  {
    id: "pc-factory",
    category: "E-commerce Landing",
    cat: "landing",
    title: "PC Factory Configurator",
    desc: "3D product landing page for a custom PC brand with animated hero and pricing.",
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
    price: "₹9,999",
    tag: "Live",
    yr: 2025,
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
    id: "mozhi-boutique",
    category: "E-commerce Store",
    cat: "landing",
    title: "Mozhi Boutique Store",
    desc: "Fashion boutique landing page with collections, lookbook, and WhatsApp CTA.",
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
    price: "₹9,999",
    tag: "Live",
    yr: 2025,
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
    id: "abc-builders",
    category: "Business Landing",
    cat: "ecommerce",
    title: "ABC Builders Madurai",
    desc: "Full e-commerce store with Razorpay checkout, product dashboard, and order tracking.",
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
    price: "₹18,999",
    tag: "Live",
    yr: 2025,
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
    id: "tamil-grocery",
    category: "Grocery App",
    cat: "ecommerce",
    title: "Tamil Grocery Shop",
    desc: "Local grocery store with UPI payment, inventory management, and delivery zones.",
    src: "/assets/projects-screenshots/tamil-grocery/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.postgres],
    },
    live: "#",
    price: "₹18,999",
    tag: "Demo",
    yr: 2026,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "dental-clinic",
    category: "Clinic Site",
    cat: "business",
    title: "Dental Clinic Website",
    desc: "Professional clinic site with appointment booking, service pages, and Google Maps.",
    src: "/assets/projects-screenshots/dental-clinic/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.whatsapp],
    },
    live: "#",
    price: "₹9,999",
    tag: "Live",
    yr: 2026,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "law-firm",
    category: "Corporate Site",
    cat: "business",
    title: "Law Firm Landing",
    desc: "Corporate law firm site with case studies, team profiles, and contact form.",
    src: "/assets/projects-screenshots/law-firm/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "#",
    price: "₹9,999",
    tag: "Demo",
    yr: 2026,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "whatsapp-bot",
    category: "WhatsApp Tool",
    cat: "software",
    title: "WhatsApp Auto-Reply Bot",
    desc: "APK that auto-replies to WhatsApp messages using custom rules and keywords.",
    src: "/assets/projects-screenshots/whatsapp-bot/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.whatsapp, PROJECT_SKILLS.claude],
    },
    live: "#",
    price: "₹999",
    tag: "Buy",
    yr: 2025,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "tamil-nlp",
    category: "NLP App",
    cat: "software",
    title: "Tamil NLP Toolkit",
    desc: "Android app for Tamil text processing — transliterate, summarize, and translate.",
    src: "/assets/projects-screenshots/tamil-nlp/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.tamil],
    },
    live: "#",
    price: "₹1,499",
    tag: "Buy",
    yr: 2026,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "lead-scraper",
    category: "Chrome Extension",
    cat: "extension",
    title: "Lead Scraper Pro",
    desc: "Chrome extension that scrapes business emails and phones from Google Maps results.",
    src: "/assets/projects-screenshots/lead-scraper/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.chrome, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.sheets],
    },
    live: "#",
    price: "₹499",
    tag: "Buy",
    yr: 2025,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "tab-session",
    category: "Chrome Extension",
    cat: "extension",
    title: "Tab Session Manager",
    desc: "Save, restore, and share browser sessions with one click.",
    src: "/assets/projects-screenshots/tab-session/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.chrome, PROJECT_SKILLS.js],
      backend: [],
    },
    live: "#",
    price: "₹299",
    tag: "Buy",
    yr: 2026,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "form-whatsapp",
    category: "n8n Workflow",
    cat: "automation",
    title: "Form → WhatsApp Alert",
    desc: "n8n workflow: form submitted → instant WhatsApp notification + Google Sheets log.",
    src: "/assets/projects-screenshots/form-whatsapp/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.whatsapp, PROJECT_SKILLS.sheets],
    },
    live: "#",
    price: "₹14,999",
    tag: "Demo",
    yr: 2025,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "invoice-generator",
    category: "Zapier Flow",
    cat: "automation",
    title: "Invoice Auto-Generator",
    desc: "Zapier automation that creates and emails GST invoices when orders are placed.",
    src: "/assets/projects-screenshots/invoice-generator/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.sheets],
    },
    live: "#",
    price: "₹14,999",
    tag: "Demo",
    yr: 2026,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "ai-image-gen",
    category: "AI SaaS Tool",
    cat: "ai",
    title: "AI Product Image Generator",
    desc: "Claude API-powered tool that generates lifestyle product photos from simple prompts.",
    src: "/assets/projects-screenshots/ai-image-gen/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.claude],
    },
    live: "#",
    price: "₹24,999",
    tag: "Live",
    yr: 2025,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
  {
    id: "tamil-chatbot",
    category: "AI Agent",
    cat: "ai",
    title: "Tamil Chatbot for Shops",
    desc: "WhatsApp chatbot with Tamil NLP that answers product and order queries 24/7.",
    src: "/assets/projects-screenshots/tamil-chatbot/hero-animation.gif",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.whatsapp, PROJECT_SKILLS.claude, PROJECT_SKILLS.tamil],
    },
    live: "#",
    price: "₹24,999",
    tag: "Live",
    yr: 2026,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">{this.title}</TypographyP>
          <TypographyP className="font-mono">{this.desc}</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    }
  },
];

export default projects;
