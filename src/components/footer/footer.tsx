import React from "react";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md py-16 px-4 mt-20 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Solo Developer
              </span>
              <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
                Design. Build. Automate.
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-zinc-400 flex flex-col gap-1.5">
              <span>📍 Madurai, Tamil Nadu, India</span>
              <a
                href="mailto:dev.sureshkumar01@gmail.com"
                className="hover:text-blue-500 transition-colors"
              >
                dev.sureshkumar01@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com/sureshkumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <SiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sureshkumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/uniqcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-zinc-400">
              <li>Business Website</li>
              <li>Portfolio Website</li>
              <li>E-Commerce Store</li>
              <li>AI-Powered Tool</li>
              <li>Business Automation</li>
              <li>Chrome Extension</li>
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-zinc-400">
              <li>
                <Link href="/#hero" className="hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-blue-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#why" className="hover:text-blue-500 transition-colors">
                  Why Choose Me
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-blue-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-blue-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Reach Me */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                Reach Me
              </h3>
              <p className="text-sm text-gray-500 dark:text-zinc-400 mb-1">
                Serving clients in:
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Madurai &bull; Chennai &bull; Coimbatore
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Bangalore &bull; UAE &bull; Global
              </p>
            </div>
            <div className="mt-2">
              <a
                href="https://wa.me/919361599097"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm hover:shadow-md"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200/50 dark:border-zinc-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-zinc-500 text-center sm:text-left">
            &copy; 2026 Suresh Kumar &middot; Solo Developer. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-zinc-500">
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <span>&middot;</span>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
