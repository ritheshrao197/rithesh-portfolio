"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Scalability first",
    description: "Systems are designed to handle 10x growth without rewrites – event buses, modular architecture, and data-driven configs.",
  },
  {
    title: "Performance mindset",
    description: "Every feature is profiled on target hardware. I aim for 60fps even on 2GB RAM devices.",
  },
  {
    title: "Clean architecture",
    description: "Separation of concerns, dependency injection, and testable logic. Code that lasts.",
  },
  {
    title: "Real‑device validation",
    description: "I don't trust the editor. I test on actual low‑end Android/iOS devices before shipping.",
  },
];

export function EngineeringApproach() {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 md:py-28 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90 mb-12">
          How I build systems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {principles.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="space-y-2 border-l border-white/10 pl-5"
            >
              <h3 className="text-white text-xl font-medium">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}