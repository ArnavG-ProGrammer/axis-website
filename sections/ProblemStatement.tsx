"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

export default function ProblemStatement() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="problem"
      ref={ref}
      className="bg-background py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Pull quote */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="border-l-4 border-orange pl-8"
        >
          <blockquote
            className="text-cream italic leading-tight"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
            }}
          >
            &ldquo;B2B partnerships still happen through cold emails and lucky
            introductions. That is not a system.&rdquo;
          </blockquote>
          <div className="mt-6 w-12 h-[1px] bg-orange" />
        </motion.div>

        {/* Right: paragraphs */}
        <div className="flex flex-col gap-7">
          {[
            {
              text: "Most partnerships fail not because the companies were a bad fit, but because there was no structured mechanism for them to discover each other in the first place. The signal was there. The process was not.",
              delay: 0.1,
            },
            {
              text: "Existing tools like LinkedIn were built for people, not companies. They optimise for personal reach and social proof — not for company-level strategic alignment, BD pipelines, or deal formalisation.",
              delay: 0.2,
            },
            {
              text: "AXIS is the purpose-built layer for company-to-company discovery and deal formalisation. A structured network where intent is explicit, outreach is organised, and agreements are generated — not improvised.",
              delay: 0.3,
            },
          ].map((item, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
              className="text-muted leading-[1.8]"
              style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "16px" }}
            >
              {item.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
