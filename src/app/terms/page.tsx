import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Suresh Kumar",
  description: "Terms of Service for applications, integrations, and websites developed by Suresh Kumar (Solo Developer).",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(20,100%,70%)]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(20,100%,70%)]/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="h-px w-[60px] bg-[hsl(20,100%,70%)]" />
            <span className="text-[hsl(20,100%,70%)] text-sm font-medium tracking-[0.2em] uppercase">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Last Updated: July 17, 2026
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white/50 dark:bg-zinc-900/40 backdrop-blur-md border border-gray-200/50 dark:border-zinc-800/50 rounded-2xl p-8 md:p-12 shadow-sm dark:shadow-2xl text-gray-700 dark:text-zinc-300 space-y-8 leading-relaxed">
          <section>
            <p>
              By accessing or using the services, websites, applications, and API integrations (including LinkedIn sign-in or publishing integrations) provided by <strong>Suresh Kumar</strong> (Solo Developer), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. Description of Services</h2>
            <p>
              Suresh Kumar provides custom software, websites, browser extensions, and API connection integrations (the &quot;Services&quot;) for personal and commercial client needs. We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. User Accounts and Platform Integrations</h2>
            <p>
              To use certain features of our applications, you may be required to log in using third-party social accounts (such as <strong>LinkedIn</strong>) via OAuth protocols. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the security of your platform permissions and access tokens.</li>
              <li>Ensuring that any content shared or posted through our applications complies with the terms of the third-party platforms (e.g., LinkedIn Developer Agreement and User Agreement).</li>
              <li>Immediately notifying us of any unauthorized use or security breaches.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">3. Acceptable Use and Restrictions</h2>
            <p>You agree not to use our Services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any local, state, national, or international laws or regulations.</li>
              <li>Upload, transmit, or share any content that is offensive, harmful, defamatory, or infringes on any intellectual property rights.</li>
              <li>Engage in unauthorized scraping, automated harvesting, or spamming actions that violate third-party API terms of service.</li>
              <li>Attempt to reverse engineer, disrupt, or compromise the security of our application infrastructure.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. Intellectual Property</h2>
            <p>
              All proprietary source code, software designs, UI features, logos, and graphics created by Suresh Kumar are the exclusive property of Suresh Kumar unless explicitly transferred under a separate client contract agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. Limitation of Liability and Disclaimer</h2>
            <p>
              Our Services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. Suresh Kumar shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our applications, including data loss, loss of profits, or service interruptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">6. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of <strong>India</strong>, and any legal disputes shall be subject to the exclusive jurisdiction of the courts located in <strong>Madurai, Tamil Nadu, India</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">7. Contact Information</h2>
            <p>
              If you have any questions or feedback regarding these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-100/50 dark:bg-zinc-800/40 rounded-xl p-6 border border-gray-200/30 dark:border-zinc-800/30 space-y-1 text-sm">
              <p><strong>Developer:</strong> Suresh Kumar (Solo Developer)</p>
              <p><strong>Email:</strong> <a href="mailto:sureshkumar20133151@gmail.com" className="text-blue-500 hover:underline">sureshkumar20133151@gmail.com</a></p>
              <p><strong>Location:</strong> Madurai, Tamil Nadu, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
