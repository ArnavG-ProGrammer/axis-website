"use client";

import { motion } from "framer-motion";

// Warm coffee-brown blobs for cream/light sections
// mix-blend-mode: multiply — blob color × cream background = warm brown staining
// Looks like espresso spreading through steamed milk

const blobs = [
  {
    id: 0,
    w: 480,
    h: 420,
    color: "#8B5E3C",
    opacity: 0.10,
    blur: 80,
    duration: 28,
    x: ["5%",  "55%", "20%", "70%", "5%"],
    y: ["10%", "60%", "85%", "25%", "10%"],
    scale: [1, 1.15, 0.88, 1.1, 1],
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
    w: 360,
    h: 440,
    color: "#6B4226",
    opacity: 0.09,
    blur: 70,
    duration: 35,
    x: ["75%", "18%", "65%", "12%", "75%"],
    y: ["5%",  "65%", "80%", "30%", "5%"],
    scale: [1, 0.9, 1.2, 0.95, 1],
    br: [
      "60% 40% 48% 52% / 54% 46% 60% 40%",
      "44% 56% 62% 38% / 38% 62% 44% 56%",
      "52% 48% 38% 62% / 60% 40% 52% 48%",
      "38% 62% 56% 44% / 46% 54% 42% 58%",
      "60% 40% 48% 52% / 54% 46% 60% 40%",
    ],
  },
  {
    id: 2,
    w: 300,
    h: 340,
    color: "#A0714F",
    opacity: 0.10,
    blur: 60,
    duration: 22,
    x: ["42%", "78%", "10%", "55%", "42%"],
    y: ["70%", "18%", "42%", "88%", "70%"],
    scale: [1, 1.25, 0.82, 1.15, 1],
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
    w: 260,
    h: 280,
    color: "#C49A6C",
    opacity: 0.08,
    blur: 50,
    duration: 30,
    x: ["85%", "35%", "82%", "15%", "85%"],
    y: ["75%", "88%", "15%", "55%", "75%"],
    scale: [1, 1.1, 0.9, 1.2, 1],
    br: [
      "50% 50% 60% 40%",
      "40% 60% 50% 50%",
      "60% 40% 40% 60%",
      "50% 50% 44% 56%",
      "50% 50% 60% 40%",
    ],
  },
];

export default function WarmBlobs() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ mixBlendMode: "multiply", zIndex: 0 }}
      aria-hidden
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          style={{
            position: "absolute",
            width: blob.w,
            height: blob.h,
            background: `radial-gradient(ellipse at 40% 40%, ${blob.color} 0%, ${blob.color}99 40%, transparent 72%)`,
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
