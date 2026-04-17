"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="px-6 md:px-10 max-w-7xl mx-auto py-24 md:py-36 border-t border-white/5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.4, 1] }}
        className="text-center space-y-8"
      >
        <p className="text-white/30 text-sm tracking-wide">CONNECT</p>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
          <a
            href="mailto:rithesh197rao@gmail.com"
            className="text-white/80 hover:text-white transition border-b border-white/20 hover:border-white/60 pb-1"
          >
            rithesh197rao@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/ritheshrao-0b6091116"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition border-b border-white/20 hover:border-white/60 pb-1"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-white/40 text-sm mt-8">Open to building meaningful game experiences</p>
      </motion.div>
    </section>
  );
}