"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const useTypingEffect = (phrases: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[index];
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const typedPhrases = [
    "Building scalable gameplay systems that evolve with the game...",
    "Optimizing performance for real devices, not just the editor...",
    "Designing clean, modular architecture for long-term maintainability...",
    "Shipping polished mobile experiences across Android and iOS...",
  ];
  const typedText = useTypingEffect(typedPhrases, 70, 40, 2000);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      <motion.div style={{ y }} className="space-y-8">
        <div className="space-y-4">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.9, 0.4, 1] }}
            className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[1.1]"
          >
            Rithesh Rao
          </motion.h1>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/50 font-light tracking-wide flex flex-wrap items-center gap-2"
          >
            <span className="font-mono text-accent-500">{typedText}</span>
            <span className="w-[2px] h-6 bg-white/70 animate-pulse ml-0.5"></span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-base md:text-lg text-white/40 max-w-xl leading-relaxed"
        >
          Senior Unity Developer · Performance-focused engineer building scalable,
          production-ready game systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-8 pt-6"
        >
          <button
            onClick={scrollToWork}
            className="group relative text-sm tracking-wide text-white pb-1 transition-colors"
          >
            View Work
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            className="group relative text-sm tracking-wide text-white/50 hover:text-white/80 transition-colors pb-1"
          >
            Resume
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300"></span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-12 bg-white/20 animate-pulse"></div>
      </motion.div>
    </section>
  );
}