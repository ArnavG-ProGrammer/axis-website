"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { n: "99.6%", label: "GNAT Percentile" },
  { n: "3", label: "Companies Founded" },
  { n: "40K", label: "Impressions / 90 Days" },
  { n: "3", label: "Papers Under Review" },
];

export default function Founder() {
  
  const { ref, visible } = useReveal();

  return (
    <section
      id="founder"
      ref={ref}
      className="bg-background py-32 px-6 lg:px-12 relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,90,42,0.05) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-orange text-[11px] tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          The Builder Behind AXIS
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-cream font-bold leading-none mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: "clamp(48px, 7vw, 80px)" }}
            >
              ARNAV
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-orange font-bold leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: "clamp(48px, 7vw, 80px)" }}
            >
              GOYAL.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[11px] tracking-[0.2em] uppercase text-muted mb-6"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              16 · Delhi, India · Founder
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={visible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              style={{ transformOrigin: "left" }}
              className="w-[60px] h-[2px] bg-orange mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-muted text-lg leading-[1.8] mb-6 max-w-md"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              I built AXIS because B2B partnerships still happen through cold
              emails and luck. That is not a system. AXIS is.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="text-muted text-base leading-[1.8] mb-10 max-w-md"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              Partnership Strategist. Aspiring Investment Banker. Scaler School
              of Technology intern — top 200 of 10,000+ applicants. GyanDhan
              Young Fellow Scholar. Building in public from New Delhi.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
            >
              {stats.map((s) => (
                <div key={s.label} className="border border-border p-4">
                  <div
                    className="text-cream font-bold leading-none mb-1"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: "28px" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="text-muted text-[10px] tracking-[0.12em] uppercase leading-tight"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://www.linkedin.com/in/arnavgoyalhamingos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-light text-cream text-[11px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-200"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                Connect on LinkedIn
                <ArrowUpRight size={14} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-muted hover:border-orange text-cream hover:text-orange text-[11px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-200"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: AXIS focus card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            {/* AXIS card */}
            <div className="bg-surface border-t-2 border-orange p-8">
              <p
                className="text-orange text-[10px] tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                Est. January 2026
              </p>
              <h3
                className="text-cream font-bold mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: "32px" }}
              >
                AXIS
              </h3>
              <p
                className="text-muted text-[15px] leading-[1.7] mb-6"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                The B2B partnership network. Purpose-built for company-to-company
                discovery, structured outreach, and legal deal formalisation —
                all in one platform. Eliminating the manual, luck-based process
                of finding the right partners.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Partnership Network", "Legal Doc Generator", "Market Intelligence", "BD Pipeline"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.12em] uppercase text-muted border border-border px-3 py-1"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently */}
            <div className="bg-surface border border-border p-6">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-muted mb-4"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                // Currently
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "SH1P — Partnerships Specialist",
                  "Synthica — Chapter Leader & Ambassador",
                  "Scaler School of Technology — YIIC Intern",
                  "NSRI — School Ambassador",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-orange rounded-full mt-[7px] shrink-0" />
                    <span
                      className="text-muted text-[13px] leading-snug"
                      style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
