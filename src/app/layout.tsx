import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Suresh Kumar | Web Developer & AI Builder — Madurai, Tamil Nadu",
  description: "Suresh Kumar (Solo Developer) builds custom websites, e-commerce stores, AI tools and Chrome extensions for businesses in Madurai, Tamil Nadu and across India. Fixed price. 7-day delivery. 30-day free support.",
  keywords: config.keywords,
  authors: [{ name: config.author }],
  icons: {
    icon: "/icon.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Suresh Kumar | Web Developer & AI Builder — Madurai, Tamil Nadu",
    description: "Suresh Kumar (Solo Developer) builds custom websites, e-commerce stores, AI tools and Chrome extensions for businesses in Madurai, Tamil Nadu and across India. Fixed price. 7-day delivery. 30-day free support.",
    url: config.site,
    siteName: "Suresh Kumar — Solo Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suresh Kumar — Web Developer & AI Builder, Madurai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suresh Kumar | Web Developer & AI Builder — Madurai, Tamil Nadu",
    description: "Suresh Kumar (Solo Developer) builds custom websites, e-commerce stores, AI tools and Chrome extensions for businesses in Madurai, Tamil Nadu and across India. Fixed price. 7-day delivery. 30-day free support.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-display font-sans" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Archivo+Black&display=swap" rel="stylesheet" />
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Suresh Kumar",
              "url": "https://solodeveloper.pro",
              "jobTitle": "Web Developer & AI Builder",
              "worksFor": {
                "@type": "Organization",
                "name": "Solo Developer"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madurai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://linkedin.com/in/solodevsuresh",
                "https://github.com/solodevsuresh",
                "https://instagram.com/solodevsuresh"
              ]
            })
          }}
        />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <AppOverlays />
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Analytics />
      </body>
    </html>
  );
}

