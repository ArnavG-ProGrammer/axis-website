"use client";

import { motion } from "framer-motion";

// Real lava lamp physics:
// - blobs sit ABOVE all content at z-50
// - mix-blend-mode: screen on the container
//   => on dark backgrounds: adds warm orange glow (lava lamp light)
//   => blends naturally with text and UI without blocking interaction
// - organic shape morphing + slow velocity to mimic viscous fluid

const blobs = [
  {
    id: 0,
    w: 680,
    h: 560,
    color: "#c95a2a",
    opacity: 0.18,
    blur: 90,
    duration: 26,
    x: ["8%",  "58%", "28%", "74%", "8%"],
    y: ["12%", "52%", "82%", "22%", "12%"],
    scale: [1, 1.18, 0.88, 1.12, 1],
    br: [
      "56% 44% 62% 38% / 48% 54% 46% 52%",
      "42% 58% 44% 56% / 60% 42% 58% 40%",
      "64% 36% 52% 48% / 44% 62% 38% 56%",
      "48% 52% 38% 62% / 56% 44% 60% 40%",
      "56% 44% 62% 38% / 48% 54% 46% 52%",
    ],
  },
  {
    id: 1,
    w: 520,
    h: 620,
    color: "#e07a4a",
    opacity: 0.14,
    blur: 95,
    duration: 33,
    x: ["76%", "22%", "66%", "16%", "76%"],
    y: ["6%",  "62%", "80%", "36%", "6%"],
    scale: [1, 0.88, 1.22, 0.92, 1],
    br: [
      "62% 38% 48% 52% / 54% 46% 60% 40%",
      "44% 56% 62% 38% / 38% 62% 44% 56%",
      "52% 48% 38% 62% / 60% 40% 52% 48%",
      "38% 62% 56% 44% / 46% 54% 42% 58%",
      "62% 38% 48% 52% / 54% 46% 60% 40%",
    ],
  },
  {
    id: 2,
    w: 440,
    h: 500,
    color: "#b84820",
    opacity: 0.16,
    blur: 85,
    duration: 20,
    x: ["44%", "82%", "14%", "60%", "44%"],
    y: ["68%", "20%", "44%", "88%", "68%"],
    scale: [1, 1.28, 0.82, 1.16, 1],
    br: [
      "48% 52% 56% 44% / 62% 38% 54% 46%",
      "60% 40% 44% 56% / 44% 56% 38% 62%",
      "38% 62% 60% 40% / 52% 48% 62% 38%",
      "56% 44% 38% 62% / 40% 60% 48% 52%",
      "48% 52% 56% 44% / 62% 38% 54% 46%",
    ],
  },
  {
    id: 3,
    w: 340,
    h: 380,
    color: "#ff6030",
    opacity: 0.12,
    blur: 75,
    duration: 28,
    x: ["86%", "38%", "84%", "18%", "86%"],
    y: ["74%", "90%", "16%", "58%", "74%"],
    scale: [1, 1.1, 0.9, 1.22, 1],
    br: [
      "50% 50% 60% 40%",
      "40% 60% 50% 50%",
      "60% 40% 40% 60%",
      "50% 50% 44% 56%",
      "50% 50% 60% 40%",
    ],
  },
  {
    id: 4,
    w: 480,
    h: 400,
    color: "#d4622e",
    opacity: 0.10,
    blur: 105,
    duration: 38,
    x: ["32%", "68%", "12%", "54%", "32%"],
    y: ["38%", "8%",  "72%", "52%", "38%"],
    scale: [1, 0.94, 1.18, 0.88, 1],
    br: [
      "54% 46% 58% 42% / 46% 54% 42% 58%",
      "42% 58% 46% 54% / 58% 42% 54% 46%",
      "60% 40% 52% 48% / 40% 60% 48% 52%",
      "46% 54% 60% 40% / 54% 46% 38% 62%",
      "54% 46% 58% 42% / 46% 54% 42% 58%",
    ],
  },
];

export default function LavaLamp() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 50, mixBlendMode: "screen" }}
      aria-hidden
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          style={{
            position: "absolute",
            width: blob.w,
            height: blob.h,
            background: `radial-gradient(ellipse at 40% 40%, ${blob.color} 0%, ${blob.color}88 45%, transparent 75%)`,
            opacity: blob.opacity,
            filter: `blur(${blob.blur}px)`,
            left: blob.x[0],
            top: blob.y[0],
            translateX: "-50%",
            translateY: "-50%",
            willChange: "left, top, border-radius, transform",
          }}
          animate={{
            left: blob.x,
            top: blob.y,
            scale: blob.scale,
            borderRadius: blob.br,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}
    </div>
  );
}
