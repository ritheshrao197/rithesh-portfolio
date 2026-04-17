"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MessageCircle, Linkedin, Copy, Check, ExternalLink } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const email = "rithesh197rao@gmail.com";
  const whatsappNumber = "919123456789"; // Replace with your actual WhatsApp number (without '+' or spaces)
  const whatsappMessage = "Hi Rithesh, I came across your portfolio and would like to discuss...";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Robust mailto: opens default email client, falls back to copying email
  const handleMailto = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const mailtoLink = `mailto:${email}`;
    // Try to open mail client; if it fails (e.g., no default client), user can use the copy button
    window.location.href = mailtoLink;
    // Small delay to allow mail client to open; if it doesn't, the copy button remains visible
  };

  const contactMethods = [
    {
      label: "Email",
      onClick: handleMailto,
      icon: Mail,
      copyable: true,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      icon: MessageCircle,
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rithesh-rao-0b6091116",
      icon: Linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="px-6 md:px-10 max-w-7xl mx-auto py-24 md:py-36 border-t border-white/5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.4, 1] }}
        className="text-center space-y-10"
      >
        <p className="text-white/30 text-sm font-mono tracking-wide">/ connect</p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
          {contactMethods.map((method) => (
            <div key={method.label} className="relative group">
              {method.href ? (
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 border-b border-white/20 hover:border-white/60 pb-1"
                >
                  <method.icon className="w-4 h-4" />
                  <span>{method.label}</span>
                  {method.external && <ExternalLink className="w-3 h-3 opacity-50" />}
                </a>
              ) : (
                <button
                  onClick={method.onClick}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 border-b border-white/20 hover:border-white/60 pb-1 cursor-pointer"
                >
                  <method.icon className="w-4 h-4" />
                  <span>{method.label}</span>
                </button>
              )}
              {method.copyable && (
                <button
                  onClick={handleCopyEmail}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 text-xs font-mono transition flex items-center gap-1 whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3" /> copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> copy
                    </>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="text-white/40 text-sm mt-8 leading-relaxed max-w-md mx-auto">
          Open to building meaningful game experiences — let's talk.
        </p>
      </motion.div>
    </section>
  );
}