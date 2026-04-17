"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "MobileDrive",
    role: "Senior Software Engineer",
    period: "2024 — Present",
    description:
      "Building high-performance real-time UI systems for automotive-grade Unity applications. Focused on modular architecture and performance under real-time constraints.",
  },
  {
    company: "1518 Studios",
    role: "Senior Unity Developer",
    period: "2023 — 2024",
    description:
      "Developed WordNinja with strong gameplay loops and retention systems. Built level editor tools reducing content creation time by 40%.",
  },
  {
    company: "HCL Technologies",
    role: "Lead Engineer",
    period: "2022 — 2023",
    description:
      "Built gameplay systems for a 3D multiplayer game. Reduced crashes by 25% through profiling and synchronization fixes.",
  },
];

const earlierExperience = [
  "Mobile Premier League — Unity SDK & Multiplayer Systems",
  "Nukebox Studios — Shipped Food Truck Chef (1M+ downloads)",
  "Juego Studios — Built 2D/3D gameplay systems",
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 md:px-10 max-w-5xl mx-auto py-24 border-t border-white/5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section header with subtle label */}
        <div className="mb-12">
          <p className="text-white/30 text-sm font-mono mb-2 tracking-wide">
            / career
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90">
            Experience
          </h2>
          <p className="text-white/50 max-w-xl mt-4 text-sm leading-relaxed">
            6+ years building mobile games and real-time systems, focusing on
            performance, scalability, and production-ready architecture.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline dot with hover effect */}
              <div className="absolute -left-[9px] top-2 w-2 h-2 bg-white/40 rounded-full group-hover:bg-white/80 transition-colors duration-300" />

              {/* Content */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-white text-lg font-medium tracking-tight">
                    {exp.role}
                  </div>
                  <div className="text-white/30 text-xs font-mono">
                    {exp.period}
                  </div>
                </div>

                <div className="text-white/50 text-sm">
                  {exp.company}
                </div>

                <p className="text-white/40 text-sm leading-relaxed max-w-lg group-hover:text-white/50 transition-colors duration-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Earlier Experience with refined styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 pt-6 border-t border-white/5"
        >
          <div className="text-white/60 text-sm mb-4 font-medium tracking-wide">
            Earlier experience
          </div>

          <div className="space-y-2">
            {earlierExperience.map((item, i) => (
              <div
                key={i}
                className="text-white/40 text-sm hover:text-white/60 transition-colors duration-200"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Optional resume link */}
        <div className="mt-12 text-right">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-1 text-white/30 hover:text-white/60 text-xs font-mono transition-colors"
          >
            View full resume →
          </a>
        </div>
      </motion.div>
    </section>
  );
}