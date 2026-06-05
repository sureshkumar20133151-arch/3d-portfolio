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
    <section id="process" className="py-20 px-4 bg-gray-50 dark:bg-zinc-950/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
            How it works
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            From first message to live website — here's exactly what happens.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:left-1/2"></div>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6 md:gap-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold z-10 md:mx-auto">
                  {i + 1}
                </div>
                <div className="flex-1 md:ml-8 pb-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {step.day}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mt-0.5 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
