"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-background"
    >
      {/* Background video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.38 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      {/* Gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,23,16,0.6) 0%, rgba(26,23,16,0.2) 45%, rgba(26,23,16,0.9) 100%)",
        }}
      />

      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture pointer-events-none" />

      {/* AXIS watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-cream font-bold leading-none"
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(100px, 20vw, 280px)",
            opacity: 0.05,
            letterSpacing: "0.06em",
          }}
        >
          AXIS
        </span>
      </div>

      {/* Eyebrow */}
      <div className="relative z-10 w-full pt-28 flex justify-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-orange text-[11px] tracking-[0.35em] uppercase"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          Est. 2026 &nbsp;&nbsp;·&nbsp;&nbsp; Early Access
        </motion.p>
      </div>

      {/* Split content */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-5xl mx-auto px-6 lg:px-12">
        {/* Left — logo mark */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex-1 flex items-center justify-center py-12"
        >
          <img
            src="/axis-logo.png"
            alt="AXIS"
            style={{ width: "clamp(140px, 18vw, 220px)", height: "auto" }}
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          style={{ transformOrigin: "top", background: "rgba(154,120,88,0.35)" }}
          className="hidden md:block w-[1px] self-stretch mx-6 lg:mx-8"
        />

        {/* Right — AXIS wordmark */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex-1 flex flex-col justify-center py-12"
        >
          <h1
            className="text-cream font-bold leading-none mb-3"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(56px, 9vw, 100px)",
              letterSpacing: "0.06em",
            }}
          >
            AXIS
          </h1>
          <p
            className="text-muted tracking-[0.3em] uppercase"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "clamp(10px, 1.2vw, 14px)",
            }}
          >
            The Partnership Network
          </p>
        </motion.div>
      </div>

      {/* Orange rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        style={{ transformOrigin: "left" }}
        className="relative z-10 w-full h-[1px] bg-orange"
      />

      {/* Bottom bar */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-muted leading-relaxed max-w-sm text-center md:text-left"
          style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(13px, 1.4vw, 16px)",
          }}
        >
          AI-powered matching connects your company with the right partners —
          faster, smarter, and with less noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-3 shrink-0"
        >
          <button
            onClick={() => handleScroll("#early-access")}
            className="bg-orange hover:bg-orange-light text-cream text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 transition-all duration-200"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Request Early Access
          </button>
          <button
            onClick={() => handleScroll("#how-it-works")}
            className="text-cream text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 transition-all duration-200 border border-muted hover:border-cream"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              background: "rgba(26,23,16,0.5)",
            }}
          >
            See How It Works
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => handleScroll("#problem")}
        className="relative z-10 mx-auto mb-5 text-muted text-[10px] tracking-[0.25em] uppercase hover:text-orange transition-colors duration-200"
        style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
      >
        Scroll
      </motion.button>
    </section>
  );
}
