"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Partnership feed across all sectors and company types",
  "Legal doc generation in under 90 seconds",
  "Stocks and options data for informed outreach",
];

const roleOptions = [
  "Founder / CEO",
  "Business Development",
  "Partnerships Lead",
  "VP / Director",
  "Investor",
  "Other",
];

export default function EarlyAccess() {
  
  const { ref, visible } = useReveal();

  const [form, setForm] = useState({
    company: "",
    email: "",
    role: "",
    partnerType: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.company) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="early-access"
      ref={ref}
      className="bg-background min-h-screen flex items-center py-32 px-6 lg:px-12 grid-texture"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-orange text-[11px] tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Early Access
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-cream font-bold leading-none mb-6"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            Your next partnership starts here.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={visible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="w-[60px] h-[2px] bg-orange mb-7"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-muted text-lg leading-relaxed mb-10 max-w-md"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            Join the waitlist. Free plan available at launch. No credit card
            required.
          </motion.p>

          <ul className="flex flex-col gap-4">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -16 }}
                animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-4 h-4 bg-orange shrink-0 mt-0.5" />
                <span
                  className="text-muted text-[15px] leading-snug"
                  style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                >
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface border-t-2 border-orange p-8 lg:p-10"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 gap-6 text-center"
              >
                <CheckCircle2 size={48} className="text-orange" />
                <h3
                  className="text-cream text-2xl"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  You&apos;re on the list.
                </h3>
                <p
                  className="text-muted text-[14px] leading-relaxed max-w-xs"
                  style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                >
                  We will reach out with your invite when AXIS is ready. No spam.
                  Just the door opening.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5"
              >
                {/* Company Name */}
                <div>
                  <label
                    className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-1.5"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    Company Name
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Meridian Ventures"
                    className="w-full bg-background border border-border text-cream text-[14px] px-4 py-3 placeholder-[#4a3c2c] focus:outline-none focus:border-orange transition-colors"
                    style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label
                    className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-1.5"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full bg-background border border-border text-cream text-[14px] px-4 py-3 placeholder-[#4a3c2c] focus:outline-none focus:border-orange transition-colors"
                    style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                  />
                </div>

                {/* Role */}
                <div>
                  <label
                    className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-1.5"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    Your Role
                  </label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full bg-background border border-border text-cream text-[14px] px-4 py-3 focus:outline-none focus:border-orange transition-colors appearance-none"
                    style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    {roleOptions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Partner type */}
                <div>
                  <label
                    className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-1.5"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    What kind of partner are you looking for?
                  </label>
                  <textarea
                    name="partnerType"
                    value={form.partnerType}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Distribution partners, technology integrations, co-marketing..."
                    className="w-full bg-background border border-border text-cream text-[14px] px-4 py-3 placeholder-[#4a3c2c] focus:outline-none focus:border-orange transition-colors resize-none"
                    style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-orange hover:bg-orange-light disabled:opacity-60 text-cream text-[12px] tracking-[0.22em] uppercase py-4 transition-colors duration-200 mt-1"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {status === "loading" ? "Submitting..." : "Request Early Access"}
                </button>

                {status === "error" && (
                  <p
                    className="text-red-400 text-[12px] text-center"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    Something went wrong. Please try again.
                  </p>
                )}

                <p
                  className="text-muted text-[11px] text-center"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  No spam. No pitch decks. Just an invite when ready.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
