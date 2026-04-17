"use client";

import { motion } from "framer-motion";

const wins = [
  "Improved frame rate from 45 to 60fps on iPhone 8",
  "Reduced memory usage by 28% on Food Truck Chef",
  "Built reusable level editor → 40% faster content creation",
  "Shipped 5 live games with zero critical crashes post‑launch",
];

export function EngineeringWins() {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-20 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-medium tracking-tight text-white/80 mb-8">
          Engineering wins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wins.map((win, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-white/40 text-sm font-mono flex items-start gap-2"
            >
              <span className="text-accent-500">→</span> {win}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}