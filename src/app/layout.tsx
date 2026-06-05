import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Suresh Kumar — Web Developer & AI Builder, Madurai",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
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
              "url": "https://www.uniqcraft.in",
              "jobTitle": "Web Developer & AI Builder",
              "worksFor": {
                "@type": "Organization",
                "name": "UniqCraft"
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
      </body>
    </html>
  );
}

