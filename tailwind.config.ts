import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1710",
        surface: "#221a0e",
        cream: "#f0e4cc",
        orange: "#c95a2a",
        "orange-light": "#e07a4a",
        muted: "#9a7858",
        border: "#2e2010",
        charcoal: "#1c1c1c",
        "cream-light": "#f5f0e8",
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        sans: ["var(--font-barlow)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,90,42,0.04) 39px, rgba(201,90,42,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,90,42,0.04) 39px, rgba(201,90,42,0.04) 40px)",
      },
    },
  },
  plugins: [],
};
export default config;
