import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Suresh Kumar",
  description: "Privacy Policy for applications, API integrations, and services developed by Suresh Kumar (Solo Developer).",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Last Updated: July 17, 2026
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white/50 dark:bg-zinc-900/40 backdrop-blur-md border border-gray-200/50 dark:border-zinc-800/50 rounded-2xl p-8 md:p-12 shadow-sm dark:shadow-2xl text-gray-700 dark:text-zinc-300 space-y-8 leading-relaxed">
          <section>
            <p>
              Welcome to the Privacy Policy of <strong>Suresh Kumar</strong> (Solo Developer). We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy outlines how we collect, use, store, and process your information when you use our websites, mobile applications, browser extensions, and API integrations—including integrations developed for platforms like <strong>LinkedIn</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
            <p>We may collect information directly from you or through third-party platform integrations that you authorize:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account Information:</strong> When you register or contact us, we may collect your name, email address, and billing details.
              </li>
              <li>
                <strong>Third-Party Integrations (e.g., LinkedIn API):</strong> If you choose to authenticate, sign in, or connect using third-party services like LinkedIn, we request access to your standard profile data (such as your full name, email address, profile photo, and unique member ID) using official OAuth authorization. We do <strong>not</strong> access or store your password.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect non-personal analytics data (such as page views, visitor click patterns, and referral sources) to improve user experience.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our services.</li>
              <li>To authenticate your identity during sign-in/registration via social logins (like LinkedIn).</li>
              <li>To perform actions you explicitly trigger, such as publishing authorized posts, managing page shares, or retrieving profile details.</li>
              <li>To monitor and analyze user behavior to improve site speed, usability, and features.</li>
              <li>To respond to customer support inquiries and provide assistance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">3. Information Sharing and Disclosure</h2>
            <p>
              We value your trust and do <strong>not</strong> sell, rent, trade, or share your personal data with third-party advertisers or external marketers. We only disclose information under these conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Consent:</strong> With your explicit consent, such as linking an API account or publishing social content on your behalf.
              </li>
              <li>
                <strong>Compliance with Law:</strong> When legally required to comply with court orders, regulatory inquiries, or law enforcement requests.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. Data Storage and Security</h2>
            <p>
              Your data is stored securely using industry-standard hosting platforms and encrypted storage systems. We retain personal data only as long as necessary to fulfill the services you requested. API tokens and access credentials are encrypted at rest and transmitted securely via HTTPS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. Revocation and Data Deletion</h2>
            <p>You have full control over your data and can request deletion or opt-out at any time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Revoking API access:</strong> You can disconnect our applications and revoke access tokens at any time directly through your LinkedIn account settings (under the &quot;Permitted Services&quot; section) or the equivalent settings in other third-party provider accounts.
              </li>
              <li>
                <strong>Data Deletion Request:</strong> If you wish to permanently delete your stored account data from our servers, please contact us at <a href="mailto:sureshkumar20133151@gmail.com" className="text-blue-500 hover:underline">sureshkumar20133151@gmail.com</a>. We will process your request within 5 business days.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">6. Changes to this Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this page periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">7. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please feel free to reach out:
            </p>
            <div className="bg-gray-100/50 dark:bg-zinc-800/40 rounded-xl p-6 border border-gray-200/30 dark:border-zinc-800/30 space-y-1 text-sm">
              <p><strong>Developer:</strong> Suresh Kumar (Solo Developer)</p>
              <p><strong>Email:</strong> <a href="mailto:sureshkumar20133151@gmail.com" className="text-blue-500 hover:underline">sureshkumar20133151@gmail.com</a></p>
              <p><strong>Location:</strong> Madurai, Tamil Nadu, India</p>
              <p><strong>Website:</strong> <Link href="/" className="text-blue-500 hover:underline">solodeveloper.pro</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
