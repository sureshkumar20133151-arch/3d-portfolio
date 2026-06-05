import React from 'react';

interface Testimonial {
  name: string;
  business: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  // ADD REAL TESTIMONIALS HERE WHEN YOU COLLECT THEM
  // Format:
  // {
  //   name: "Rajan K.",
  //   business: "Furniture Shop, Madurai",
  //   text: "Suresh built our website in 6 days. We got our first WhatsApp inquiry the same week it launched.",
  //   rating: 5
  // }
];

const Testimonials = () => {
  if (testimonials.length === 0) return null; // Hides section until you add real reviews

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
            What clients say
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Real businesses. Real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                "{t.text}"
              </p>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-gray-400">{t.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
