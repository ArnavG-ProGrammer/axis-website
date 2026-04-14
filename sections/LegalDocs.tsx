"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const formFields = [
  { label: "Company A", value: "Meridian Ventures Ltd." },
  { label: "Company B", value: "Solaris Technologies Inc." },
  { label: "Purpose", value: "Strategic product integration" },
  { label: "Duration", value: "24 months" },
  { label: "Jurisdiction", value: "Delhi, India" },
];

const docTypes = ["NDA", "MOU", "PA"] as const;
type DocType = typeof docTypes[number];

const docContent: Record<DocType, { title: string; sections: { section: string; content: string }[] }> = {
  NDA: {
    title: "Non-Disclosure Agreement",
    sections: [
      { section: "PARTIES", content: "This Non-Disclosure Agreement is entered into between Meridian Ventures Ltd. (\"Disclosing Party\") and Solaris Technologies Inc. (\"Receiving Party\")." },
      { section: "CONFIDENTIAL INFORMATION", content: "\"Confidential Information\" means any non-public information disclosed by either party relating to business plans, product roadmaps, financial data, or technical processes." },
      { section: "OBLIGATIONS", content: "The Receiving Party agrees to hold all Confidential Information in strict confidence, use it solely for the Purpose, and not disclose it to any third party without prior written consent." },
      { section: "TERM", content: "This Agreement shall remain in effect for 24 months from the date of signing, unless terminated earlier by mutual written agreement of both parties." },
      { section: "GOVERNING LAW", content: "This Agreement shall be governed by the laws of Delhi, India. Any disputes shall be resolved through binding arbitration in New Delhi." },
      { section: "SIGNATURES", content: "IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.\n\n_________________________     _________________________\nMeridian Ventures Ltd.         Solaris Technologies Inc." },
    ],
  },
  MOU: {
    title: "Memorandum of Understanding",
    sections: [
      { section: "PARTIES", content: "This Memorandum of Understanding is entered into between Meridian Ventures Ltd. (\"Party A\") and Solaris Technologies Inc. (\"Party B\") to outline a framework for cooperation." },
      { section: "PURPOSE & SCOPE", content: "Both parties intend to explore a strategic product integration opportunity. This MOU sets out the mutual understanding, roles, and responsibilities of each party during the collaboration period." },
      { section: "ROLES & RESPONSIBILITIES", content: "Party A shall provide access to its distribution network and partner relations. Party B shall provide technical integration support and product development resources as agreed." },
      { section: "FINANCIAL TERMS", content: "Each party shall bear its own costs during the exploration phase. Any revenue-sharing or cost-sharing arrangements shall be formalised in a separate Partnership Agreement." },
      { section: "DURATION", content: "This MOU shall remain in effect for 24 months from the date of signing. Either party may terminate with 30 days written notice." },
      { section: "SIGNATURES", content: "This MOU is non-binding except for confidentiality and governing law provisions.\n\n_________________________     _________________________\nMeridian Ventures Ltd.         Solaris Technologies Inc." },
    ],
  },
  PA: {
    title: "Partnership Agreement",
    sections: [
      { section: "PARTIES", content: "This Partnership Agreement is entered into between Meridian Ventures Ltd. (\"Partner A\") and Solaris Technologies Inc. (\"Partner B\") to establish a formal business partnership." },
      { section: "PARTNERSHIP STRUCTURE", content: "The parties agree to form a co-marketing and co-distribution partnership for the joint commercialisation of their integrated product offering in the Indian B2B market." },
      { section: "REVENUE SHARING", content: "Net revenues from joint activities shall be split 60% (Partner A) / 40% (Partner B) based on contribution metrics defined in Schedule B. Quarterly reconciliation applies." },
      { section: "INTELLECTUAL PROPERTY", content: "Each party retains ownership of its pre-existing IP. Any jointly developed IP shall be co-owned with equal rights to commercialise, subject to a separate IP Schedule." },
      { section: "TERM & TERMINATION", content: "This Agreement has an initial term of 24 months, auto-renewing for 12-month periods. Either party may terminate for material breach with 60 days written notice." },
      { section: "SIGNATURES", content: "This Agreement is legally binding upon execution by authorised representatives of both parties.\n\n_________________________     _________________________\nMeridian Ventures Ltd.         Solaris Technologies Inc." },
    ],
  },
};

export default function LegalDocs() {
  const { ref, visible } = useReveal();
  const [visibleFields, setVisibleFields] = useState(0);
  const [activeDoc, setActiveDoc] = useState<DocType>("NDA");

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleFields(i);
      if (i >= formFields.length) clearInterval(timer);
    }, 350);
    return () => clearInterval(timer);
  }, [visible]);

  const currentDoc = docContent[activeDoc];

  return (
    <section
      id="legal-docs"
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
        {/* Heading */}
        <div className="mb-16 max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-orange text-[11px] tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Legal Doc Generator
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-charcoal italic leading-tight mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
            }}
          >
            An NDA in 90 seconds.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#5a4a38] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            AXIS removes friction, not legal responsibility. Every document is
            structured, jurisdiction-aware, and ready for counsel review. You
            handle the relationship. We handle the paperwork.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Animated form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-[#e0d8cc] p-8 shadow-sm"
          >
            <p
              className="text-[11px] tracking-[0.2em] uppercase text-[#9a7858] mb-6"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Document Details
            </p>

            <div className="space-y-4 mb-8">
              {formFields.map((field, i) => (
                <AnimatePresence key={field.label}>
                  {visibleFields > i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label
                        className="block text-[10px] tracking-[0.15em] uppercase text-[#9a7858] mb-1"
                        style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                      >
                        {field.label}
                      </label>
                      <div
                        className="w-full border border-[#e0d8cc] px-3 py-2.5 text-charcoal text-sm bg-[#faf8f4]"
                        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                      >
                        {field.value}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>

            {/* Document type pills */}
            <p
              className="text-[10px] tracking-[0.15em] uppercase text-[#9a7858] mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Document Type
            </p>
            <div className="flex gap-2">
              {docTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveDoc(type)}
                  className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase transition-all duration-200 ${
                    activeDoc === type
                      ? "bg-orange text-cream"
                      : "border border-[#e0d8cc] text-[#9a7858] hover:border-orange"
                  }`}
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {type}
                </button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleFields >= formFields.length ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-full mt-6 bg-orange text-cream text-[11px] tracking-[0.2em] uppercase py-3 hover:bg-orange-light transition-colors"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Generate {activeDoc}
            </motion.button>
          </motion.div>

          {/* Right: Document preview — updates when doc type changes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-surface border border-border overflow-hidden"
          >
            {/* Doc header */}
            <div className="border-b border-border px-6 py-4 flex items-center justify-between">
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-orange"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {currentDoc.title}
              </span>
              <span
                className="text-[10px] text-muted"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                DRAFT · {new Date().getFullYear()}
              </span>
            </div>

            {/* Doc body — animates when doc type switches */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDoc}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-6 space-y-5 max-h-[420px] overflow-y-auto"
              >
                {currentDoc.sections.map((item, i) => (
                  <div key={item.section}>
                    <p
                      className="text-[9px] tracking-[0.2em] uppercase text-orange mb-1.5"
                      style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                    >
                      {item.section}
                    </p>
                    <p
                      className="text-muted text-[12px] leading-[1.7] whitespace-pre-line"
                      style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                    >
                      {item.content}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
