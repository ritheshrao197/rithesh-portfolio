"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const isYouTubeUrl = (url: string) => {
  return url.includes("youtube.com/watch") || url.includes("youtu.be/");
};

const getYouTubeEmbedUrl = (url: string) => {
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split(/[?#]/)[0];
  } else if (url.includes("youtube.com/watch")) {
    const params = new URLSearchParams(url.split("?")[1]);
    videoId = params.get("v") || "";
  }
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&modestbranding=1&rel=0`
    : url;
};

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const renderMedia = () => {
    if (project.videoUrl) {
      if (isYouTubeUrl(project.videoUrl)) {
        const embedUrl = getYouTubeEmbedUrl(project.videoUrl);
        return (
          <motion.iframe
            src={embedUrl}
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
        );
      } else {
        return (
          <motion.video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
        );
      }
    } else if (project.imageUrl) {
      return (
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
      );
    } else {
      return (
        <div className="w-full h-full flex items-center justify-center text-white/30">
          No media available
        </div>
      );
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.8, 0.4, 1] }}
      className="group border-b border-white/10 last:border-0 py-8 md:py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="space-y-4 max-w-4xl mx-auto"
        whileHover={{
          rotateX: 3,
          rotateY: 3,
          scale: 1.01,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Title and tech – compact */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <Link
            href={`/work/${project.slug}`}
            className="text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-accent-500 transition-colors duration-300"
          >
            {project.title}
          </Link>
          <div className="flex gap-2 text-xs text-white/30">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Short description – smaller */}
        <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Contribution – very compact */}
        <div className="text-xs text-white/40">
          {project.contribution}
        </div>

        {/* Media container – takes more visual space (aspect ratio stays 16:9, but padding above/below reduced) */}
        <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-white/5 mt-4 cursor-pointer">
          {renderMedia()}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition text-white text-sm tracking-wide">
              {project.videoUrl ? "Preview" : "View project"}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90 mb-12">
        Selected work
      </h2>
      <div className="space-y-2">
        {projects.map((project, idx) => (
          <ProjectItem key={project.slug} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}