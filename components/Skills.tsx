"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Gameplay Systems",
    skills: ["Game Loops", "Progression", "Live Ops", "Event-driven Architecture"],
  },
  {
    category: "Performance Optimization",
    skills: ["CPU/GPU Profiling", "Memory Management", "Draw Call Reduction", "Low-end Device Tuning"],
  },
  {
    category: "Mobile Development",
    skills: ["iOS/Android", "Unity 2D/3D", "Addressables", "SDK Integration"],
  },
  {
    category: "Backend / Multiplayer",
    skills: ["Firebase Analytics", "REST APIs", "Multiplayer Sync", "Netcode Basics"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 md:py-28 border-t border-white/5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90 mb-12">
          Core skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <h3 className="text-white/80 text-lg font-medium mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-sm text-white/40 bg-white/5 px-3 py-1.5 rounded-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}