"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GitHubProject } from "@/lib/githubProjects";

interface RepoItemProps {
  project: GitHubProject;
  index: number;
}

export function RepoItem({ project, index }: RepoItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [showReadme, setShowReadme] = useState(false);

  return (
  <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{
    rotateX: 1,
    rotateY: 1,
    scale: 1.005,
    transition: { duration: 0.2 },
  }}
  style={{ perspective: "600px", transformStyle: "preserve-3d" }}
  className="border-b border-white/10 last:border-0 pb-8 last:pb-0"
>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl font-semibold tracking-tight text-white hover:text-accent-500 transition-colors duration-200 inline-flex items-center gap-2"
        >
          {project.name}
          <span className="text-sm text-white/30">↗</span>
        </a>
        <div className="flex flex-wrap gap-2">
          {project.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-xs font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded-sm"
            >
              [{topic}]
            </span>
          ))}
        </div>
      </div>
      <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed mb-3">
        {project.description}
      </p>
      <div className="flex items-center gap-6 text-sm">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white/70 transition-colors"
        >
          View on GitHub →
        </a>
        {project.readmePreview && (
          <button
            onClick={() => setShowReadme(!showReadme)}
            className="text-white/40 hover:text-white/70 transition-colors"
          >
            {showReadme ? "Hide preview" : "Preview README"}
          </button>
        )}
      </div>

      {/* README preview (collapsible) */}
      {showReadme && project.readmePreview && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 p-4 bg-white/5 rounded-sm text-white/50 text-xs font-mono leading-relaxed overflow-auto max-h-48"
        >
          {project.readmePreview}
        </motion.div>
      )}
    </motion.div>
  );
}