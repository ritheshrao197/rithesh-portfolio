"use client";

import { motion } from "framer-motion";

export function TerminalSection() {
  const lines = [
    "> system.log",
    "> loading gameplay systems...",
    "> performance optimized ✔",
    "> ready",
  ];

  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 md:py-28 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90 mb-8">
          Terminal
        </h2>
        <div className="bg-white/5 rounded-sm p-6 font-mono text-sm text-white/60 space-y-1 border border-white/5">
          {lines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
            >
              {line}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}