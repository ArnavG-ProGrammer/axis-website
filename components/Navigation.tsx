"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Legal Docs", href: "#legal-docs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Founder", href: "#founder" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-12 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(26,23,16,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #2e2010" : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          {mounted && <AxisLogo />}
          <span
            className="text-cream text-xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            AXIS
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-muted hover:text-cream transition-colors duration-200 text-[11px] tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("#early-access")}
            className="bg-orange hover:bg-orange-light text-cream text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 transition-colors duration-200"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Request Access
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavClick(link.href)}
                className="text-cream text-2xl tracking-widest uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              onClick={() => handleNavClick("#early-access")}
              className="mt-4 bg-orange text-cream text-[12px] tracking-[0.2em] uppercase px-8 py-3"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Request Access
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AxisLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" suppressHydrationWarning>
      <path d="M4 4 L32 32" stroke="#c95a2a" strokeWidth="3.5" strokeLinecap="round" suppressHydrationWarning />
      <path d="M32 4 L4 32" stroke="#c95a2a" strokeWidth="3.5" strokeLinecap="round" suppressHydrationWarning />
      <path d="M9 18 L27 18" stroke="#c95a2a" strokeWidth="3" strokeLinecap="round" suppressHydrationWarning />
    </svg>
  );
}
