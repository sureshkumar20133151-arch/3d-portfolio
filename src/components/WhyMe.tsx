import React from 'react';

const reasons = [
  {
    icon: "💰",
    title: "Fixed Price. No Surprises.",
    description: "You know the exact cost before we start. No hidden charges, no scope creep billing. What we agree is what you pay."
  },
  {
    icon: "⚡",
    title: "7-Day Delivery",
    description: "Most projects delivered in 7 days or less. I work fast without cutting corners because I have a proven build system."
  },
  {
    icon: "🛡️",
    title: "30-Day Free Support",
    description: "After launch, I'm still here. Any bugs, tweaks, or questions in the first 30 days — handled at zero extra cost."
  },
  {
    icon: "📍",
    title: "Local + Global Experience",
    description: "Based in Madurai, I understand Tamil Nadu businesses. I've also worked with UAE and global clients — same quality either way."
  },
  {
    icon: "🤖",
    title: "AI-Native Builder",
    description: "I don't just build websites — I integrate AI chatbots, WhatsApp bots, and automation that save your team hours every week."
  },
  {
    icon: "🔗",
    title: "Full-Stack, One Person",
    description: "Design, frontend, backend, deployment — I handle everything. No middlemen, no delays waiting on another team member."
  }
];

const WhyMe = () => {
  return (
    <section id="why" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
            Why choose me?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Hundreds of developers out there. Here&apos;s what makes working with me different.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              <div className="text-3xl mb-3">{reason.icon}</div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-950 dark:text-slate-50 font-medium leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
