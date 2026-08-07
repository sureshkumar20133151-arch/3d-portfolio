"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto scroll-mt-24">
      <div id="contact-get-free-quote" className="scroll-mt-24"></div>
      <SectionHeader id='contact-header' className="relative mb-10" title={
        <>
          LET&apos;S BUILD <br />
          YOUR NEXT PROJECT
        </>}
        desc="Fill the quick form below. I'll get back to you within 24 hours with a clear plan and fixed price — no jargon, no pressure."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card id="contact-form" className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-6 md:mt-10 scroll-mt-28">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Contact Form</CardTitle>
            <CardDescription>
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
