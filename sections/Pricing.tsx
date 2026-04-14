"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Scout",
    price: "Free",
    period: "forever",
    description: "Everything you need to start exploring.",
    highlight: false,
    features: [
      "10 company follows",
      "2 partnership requests/month",
      "1 legal document/month",
      "Activity history",
      "Basic feed access",
    ],
    cta: "Join Free",
    ctaAction: "#early-access",
  },
  {
    name: "AXIS Pro",
    price: "$30",
    period: "/month",
    description: "For teams running serious BD pipelines.",
    highlight: true,
    features: [
      "Unlimited company follows",
      "Unlimited partnership requests",
      "Unlimited legal documents",
      "Stocks and options access",
      "Full activity history",
      "Priority support",
    ],
    cta: "Get Early Access",
    ctaAction: "#early-access",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "— talk to us",
    description: "For large BD teams with complex needs.",
    highlight: false,
    features: [
      "Everything in Pro",
      "Dedicated BD support",
      "API access",
      "White-label legal docs",
      "SSO & team management",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    ctaAction: "mailto:hello@dualswipe.com",
  },
];

export default function Pricing() {
  
  const { ref, visible } = useReveal();

  const handleClick = (action: string) => {
    if (action.startsWith("mailto")) {
      window.location.href = action;
    } else {
      const el = document.querySelector(action);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className="bg-background py-32 px-6 lg:px-12 grid-texture"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-cream leading-none mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(40px, 6vw, 72px)",
            }}
          >
            Three Plans. One Network.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted text-lg"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            Start free. Scale when you are ready.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.025 }}
              className={`relative flex flex-col p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-t-2 border-orange bg-surface shadow-[0_4px_40px_rgba(201,90,42,0.15)]"
                  : "border border-border bg-surface"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="bg-orange text-cream text-[9px] tracking-[0.2em] uppercase px-3 py-1"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p
                className="text-orange text-[11px] tracking-[0.2em] uppercase mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="text-cream"
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: plan.price === "Custom" ? "36px" : "48px",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-muted text-[13px]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {plan.period}
                </span>
              </div>

              <p
                className="text-muted text-[14px] mb-7 leading-relaxed"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                {plan.description}
              </p>

              <div className="w-8 h-[1px] bg-border mb-7" />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={14} className="text-orange mt-0.5 shrink-0" />
                    <span
                      className="text-muted text-[13px] leading-snug"
                      style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleClick(plan.ctaAction)}
                className={`w-full py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-200 ${
                  plan.highlight
                    ? "bg-orange text-cream hover:bg-orange-light"
                    : "border border-muted text-cream hover:border-orange hover:text-orange"
                }`}
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
