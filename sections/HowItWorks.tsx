"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { UserCircle, Rss, Handshake, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCircle,
    title: "Set Up Your Profile",
    description:
      "Create your company profile with sector, stage, and partnership goals. Define what kind of partners you are looking for and what you bring to the table.",
  },
  {
    number: "02",
    icon: Rss,
    title: "Post and Discover",
    description:
      "Browse the live partnership feed. Post your own discovery cards. Filter by sector, size, and intent. Follow companies that fit your strategic roadmap.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Send a Partnership Request",
    description:
      "Move from passive interest to structured outreach. Send a partnership request with context, goals, and proposed terms — right through the platform.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Generate the Legal Document",
    description:
      "Once both parties are aligned, generate an NDA, MOU, or full Partnership Agreement in under 90 seconds. No lawyers needed to get started.",
  },
];

export default function HowItWorks() {
  
  const { ref, visible } = useReveal();

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="bg-cream-light py-32 px-6 lg:px-12 relative overflow-hidden z-[60]"
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      />
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-orange text-[11px] tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          How It Works
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-charcoal leading-tight mb-20"
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(36px, 5vw, 52px)",
          }}
        >
          From discovery to signed deal.
        </motion.h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {/* Connecting line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={visible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[1px] bg-orange"
            aria-hidden
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.15 * i, ease: "easeOut" }}
                className="flex flex-col items-start lg:items-start px-0 lg:px-6 relative"
              >
                {/* Step number background */}
                <div
                  className="absolute -top-2 right-0 lg:right-4 font-bold leading-none pointer-events-none select-none"
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: "80px",
                    color: "rgba(28,28,28,0.06)",
                  }}
                  aria-hidden
                >
                  {step.number}
                </div>

                {/* Icon box */}
                <div className="w-12 h-12 bg-orange flex items-center justify-center mb-5 relative z-10">
                  <Icon size={22} color="#f0e4cc" />
                </div>

                {/* Title */}
                <h3
                  className="text-charcoal text-[12px] tracking-[0.15em] uppercase font-semibold mb-3 relative z-10"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#5a4a38] text-[15px] leading-[1.7] relative z-10"
                  style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
