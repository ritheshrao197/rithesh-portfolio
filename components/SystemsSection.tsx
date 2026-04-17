"use client";

import { motion } from "framer-motion";

const systems = [
  {
    title: "Scalable Gameplay Systems",
    description: "Event-driven architecture, state machines, and modular gameplay loops that grow with player demands.",
    capabilities: ["Dynamic game state management", "Reusable ability/action systems", "Data-driven balancing (ScriptableObjects)"],
  },
  {
    title: "UI & UX Frameworks",
    description: "High‑performance UI systems with smooth transitions, responsive layouts, and live data binding.",
    capabilities: ["MVC/MVP patterns for UI", "Object pooling for dynamic elements", "Addressable asset workflows"],
  },
  {
    title: "Performance Optimization Systems",
    description: "Aggressive profiling, memory management, and frame‑budgeting for 60fps on low‑end devices.",
    capabilities: ["CPU/GPU profiling & optimization", "Draw call batching & LOD systems", "GC reduction & object pooling"],
  },
  {
    title: "Multiplayer & Networking Systems",
    description: "Real‑time sync, matchmaking, and deterministic simulation for competitive multiplayer.",
    capabilities: ["Reliable UDP / WebSocket integrations", "Client‑side prediction & reconciliation", "Matchmaking & lobby systems"],
  },
  {
    title: "SDK & Tooling Systems",
    description: "Reusable SDKs for analytics, remote config, and live ops – used across multiple game titles.",
    capabilities: ["Modular SDK architecture", "Editor tooling for content creation", "CI/CD pipeline integration"],
  },
  {
    title: "Live Ops & Analytics Integration",
    description: "Data‑driven player engagement through live events, retention systems, and A/B testing.",
    capabilities: ["Firebase / Unity Analytics", "Remote config & dynamic content", "Player segmentation & funnel tracking"],
  },
];

export function SystemsSection() {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 md:py-28 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-white/40 text-sm font-mono mb-4 tracking-wide">
          / systems i build
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90 mb-6">
          I focus on building systems that scale with the product,
          <br />
          not just features that work in isolation.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-16">
          {systems.map((system, idx) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="border-l border-white/10 pl-6"
            >
              <h3 className="text-white text-xl font-semibold tracking-tight mb-2">
                {system.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-3">
                {system.description}
              </p>
              <ul className="space-y-1">
                {system.capabilities.map((cap) => (
                  <li key={cap} className="text-white/30 text-xs font-mono">
                    • {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}