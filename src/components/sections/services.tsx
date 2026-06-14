"use client";
import React from "react";
import { motion } from "motion/react";
import { Globe, Palette, ShoppingCart, Brain, Cpu, MessageSquare, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SERVICES_DATA = [
  {
    id: 2,
    title: "Portfolio Website",
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    description: "A personal showcase for freelancers, designers, developers, or agencies — display your projects, skills, and testimonials to attract high-paying clients worldwide with modern 3D or minimalist designs.",
    price: "₹8,999"
  },
  {
    id: 1,
    title: "Business Website",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    description: "A professional online presence for your shop, clinic, agency, or brand — with WhatsApp CTAs, contact forms, Google Maps integration, and standard SEO. Customers find you and contact you directly.",
    price: "₹9,999"
  },
  {
    id: 3,
    title: "E-Commerce Store",
    icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
    description: "A full online shop where customers browse products, add to cart, pay online (Razorpay/UPI), and get order confirmations — you manage products, stock levels, and order histories from a simple dashboard.",
    price: "₹18,999"
  },
  {
    id: 4,
    title: "AI-Powered Tool",
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    description: "I build smart tools that think & respond — AI chatbots, WhatsApp bots, Claude/GPT integrations, and automatic image/text generators. The tool understands context and gives intelligent answers 24/7.",
    price: "₹24,999"
  },
  {
    id: 5,
    title: "Business Automation",
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
    description: "I connect your apps so they work automatically — form submitted → WhatsApp alert → Google Sheet → invoice sent. Create smart workflows using n8n/Zapier to save hours of manual work.",
    price: "₹14,999"
  },
  {
    id: 6,
    title: "Custom Software",
    icon: <MonitorSmartphone className="w-8 h-8 text-teal-500" />,
    description: "Tailored web, mobile, and desktop applications compiled for all platforms. Includes cross-platform deployment (Web app, Android APK, and Windows installer) with secure real-time cloud database sync.",
    price: "₹29,999"
  }
];

const ServicesSection = () => {
  return (
    <SectionWrapper id="services" className="max-w-7xl mx-auto py-20 min-h-screen">
      <SectionHeader id="services" title="Services & Pricing" desc="Not just websites — systems that bring more leads, more sales, and less manual work." className="mb-12 md:mb-20 mt-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="h-full flex flex-col justify-between bg-white/70 dark:bg-black/70 backdrop-blur-sm border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardHeader className="pb-3 flex flex-row items-center gap-4">
                <div className="p-2 bg-secondary/50 rounded-lg">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold tracking-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-6">
                <p className="text-base text-slate-950 dark:text-slate-50 font-medium leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Starting at</span>
                    <span className="text-2xl font-extrabold text-foreground">{service.price}</span>
                  </div>
                  <Link href="#contact">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
