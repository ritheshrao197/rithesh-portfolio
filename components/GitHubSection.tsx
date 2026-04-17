"use client";

import { motion } from "framer-motion";
import { RepoItem } from "./RepoItem";
import { githubProjects } from "@/lib/githubProjects";

export function GitHubSection() {
  if (githubProjects.length === 0) return null;

  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 md:py-28 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90 mb-12">
          Selected Code Work
        </h2>
        <div className="space-y-10">
          {githubProjects.map((project, idx) => (
            <RepoItem key={project.id} project={project} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}