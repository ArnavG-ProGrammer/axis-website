"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { Rss, BookMarked, TrendingUp, FileSignature, Send, ClipboardList } from "lucide-react";

const features = [
  {
    icon: Rss,
    title: "Partnership Feed",
    description:
      "Real-time stream of companies actively seeking partners. Filter by sector, company size, geography, and partnership type. Never miss a relevant signal.",
  },
  {
    icon: BookMarked,
    title: "Company Tracker",
    description:
      "Follow and monitor companies in your pipeline. Get notified when they post new opportunities, update their profile, or signal intent.",
  },
  {
    icon: TrendingUp,
    title: "Stocks and Options",
    description:
      "Full price history, market cap, volume, and live options chain for public partners. Know the financial health of who you are partnering with.",
  },
  {
    icon: FileSignature,
    title: "Legal Doc Generator",
    description:
      "Generate a custom NDA, MOU, or Partnership Agreement in under 90 seconds. Structured inputs. Clean output. Download as PDF immediately.",
  },
  {
    icon: Send,
    title: "Partnership Requests",
    description:
      "Structured outreach pipeline. Send, receive, and manage partnership requests with full context — goals, terms, and conversation history in one place.",
  },
  {
    icon: ClipboardList,
    title: "Activity History",
    description:
      "A full, timestamped log of every action taken across your BD pipeline. Follows, requests sent, docs generated, deals progressed.",
  },
];

export default function Features() {
  
  const { ref, visible } = useReveal();

  return (
    <section
      id="features"
      ref={ref}
      className="bg-background py-32 px-6 lg:px-12 grid-texture"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-orange text-[11px] tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          Features
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-cream leading-tight mb-4"
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(32px, 4.5vw, 48px)",
          }}
        >
          Pro features. Zero complexity.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted text-lg mb-16 max-w-xl"
          style={{ fontFamily: "var(--font-barlow), sans-serif" }}
        >
          Everything you need to run a serious BD function — without the enterprise overhead.
        </motion.p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const row = Math.floor(i / 3);
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: row * 0.15 + (i % 3) * 0.08,
                  ease: "easeOut",
                }}
                className="group relative bg-surface border-t-2 border-orange p-9 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,90,42,0.12)]"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-orange flex items-center justify-center mb-5">
                  <Icon size={18} color="#f0e4cc" />
                </div>

                {/* Title */}
                <h3
                  className="text-cream text-[11px] tracking-[0.18em] uppercase font-semibold mb-3"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-muted text-[15px] leading-[1.7]"
                  style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
