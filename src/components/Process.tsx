import React from 'react';

const steps = [
  {
    day: "Day 1",
    title: "Discovery Call",
    description: "We have a 30-minute call (WhatsApp or Google Meet). I understand your business, goals, and what you want the website to achieve. I ask questions — you answer honestly."
  },
  {
    day: "Day 1–2",
    title: "Proposal & Agreement",
    description: "I send a fixed-price proposal with the exact scope, cost, and timeline. No vague estimates. You approve it, we start. Simple."
  },
  {
    day: "Day 2–4",
    title: "Design & Build",
    description: "I build your site using React + Tailwind. You get a live preview link to check progress. I handle all the code, hosting setup, and integrations."
  },
  {
    day: "Day 5–6",
    title: "Your Feedback",
    description: "You review the live preview and share feedback. I make revisions — up to 2 rounds are included. Most clients need just one round."
  },
  {
    day: "Day 7",
    title: "Launch",
    description: "Your site goes live on your domain. I handle DNS, SSL, and deployment. You get a walkthrough video showing how to manage your content."
  },
  {
    day: "Day 8–37",
    title: "30-Day Free Support",
    description: "I'm available on WhatsApp for any bugs, small changes, or questions. No extra charge for the first 30 days after launch."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 px-4 bg-transparent">
      <style>{`
        @keyframes flow-line {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .chasing-line {
          background: linear-gradient(90deg, transparent, #3b82f6, #60a5fa, #3b82f6, transparent);
          background-size: 200% 100%;
          animation: flow-line 4s linear infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
            How it works
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            From first message to live website — here's exactly what happens.
          </p>
        </div>
        <div className="relative">
          {/* Chasing light line for large desktop screen */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] chasing-line opacity-60 hidden xl:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="relative flex flex-col items-center text-center p-6 rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md z-10"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center text-base font-semibold shadow-md mb-4 relative z-20">
                  {i + 1}
                </div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                  {step.day}
                </span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Ready to get started?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Get your free quote →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
