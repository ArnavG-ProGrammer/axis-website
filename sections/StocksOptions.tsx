"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

// Generate a realistic-looking 60-day price walk
function generatePriceData(seed: number, points = 60) {
  const data: number[] = [100 + seed];
  for (let i = 1; i < points; i++) {
    const change = (Math.sin(i * seed * 0.3) + Math.random() - 0.48) * 2.5;
    data.push(Math.max(50, data[i - 1] + change));
  }
  return data;
}

const tickers = [
  { symbol: "MSFT", name: "Microsoft", price: "421.23", change: "+1.24%", positive: true, seed: 7 },
  { symbol: "GOOG", name: "Alphabet", price: "178.45", change: "-0.38%", positive: false, seed: 3 },
  { symbol: "AMZN", name: "Amazon", price: "197.82", change: "+2.11%", positive: true, seed: 11 },
  { symbol: "NVDA", name: "NVIDIA", price: "875.50", change: "+3.45%", positive: true, seed: 5 },
  { symbol: "META", name: "Meta", price: "512.33", change: "-1.02%", positive: false, seed: 9 },
];

const optionsData = [
  { strike: "420", expiry: "May 17", type: "CALL", bid: "8.20", ask: "8.45", iv: "24.3%", delta: "0.52", oi: "12,450" },
  { strike: "420", expiry: "May 17", type: "PUT", bid: "7.10", ask: "7.35", iv: "23.8%", delta: "-0.48", oi: "9,230" },
  { strike: "430", expiry: "May 17", type: "CALL", bid: "4.60", ask: "4.80", iv: "25.1%", delta: "0.38", oi: "8,120" },
  { strike: "410", expiry: "Jun 21", type: "CALL", bid: "14.20", ask: "14.50", iv: "22.9%", delta: "0.61", oi: "5,670" },
  { strike: "410", expiry: "Jun 21", type: "PUT", bid: "9.40", ask: "9.70", iv: "22.4%", delta: "-0.39", oi: "4,880" },
];

function Sparkline({ seed, positive }: { seed: number; positive: boolean }) {
  const data = useMemo(() => generatePriceData(seed, 20), [seed]);
  const min = Math.min(...data);
  const max = Math.max(...data);
  const w = 60, h = 20;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / (max - min || 1)) * h;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "#4ade80" : "#f87171"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PriceChart() {
  const data = useMemo(() => generatePriceData(7, 60), []);
  const min = Math.min(...data) - 2;
  const max = Math.max(...data) + 2;
  const w = 400, h = 160;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const linePoints = pts.join(" ");
  const areaPoints = `0,${h} ${linePoints} ${w},${h}`;

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="w-full">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c95a2a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c95a2a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#chartGrad)" />
      <polyline
        points={linePoints}
        fill="none"
        stroke="#c95a2a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function StocksOptions() {
  
  const { ref, visible } = useReveal();

  return (
    <section
      id="stocks"
      ref={ref}
      className="bg-background py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: explanatory text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p
            className="text-orange text-[11px] tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Market Intelligence
          </p>
          <h2
            className="text-cream leading-tight mb-8"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(32px, 4.5vw, 48px)",
            }}
          >
            Know who you are partnering with.
          </h2>

          {[
            {
              heading: "Price history tells a story.",
              body: "A company's 60-day price chart reveals momentum, volatility, and investor sentiment — all signals that matter before you commit to a formal partnership.",
            },
            {
              heading: "Options data shows conviction.",
              body: "Open interest and implied volatility in a company's options chain reflect how the market is pricing their future. That is context no press release can give you.",
            },
            {
              heading: "Market signals inform outreach.",
              body: "Reaching out after a company's stock drops 15% is different from reaching out after a breakout quarter. AXIS gives you both the data and the timing to matter.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="mb-6 last:mb-0"
            >
              <p
                className="text-cream text-[12px] tracking-[0.1em] uppercase font-semibold mb-1.5"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {item.heading}
              </p>
              <p
                className="text-muted text-[15px] leading-[1.7]"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Bloomberg-style terminal */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="bg-[#0d0c09] border border-border overflow-hidden"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-[#111009]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[10px] text-muted tracking-wider">AXIS / MARKET TERMINAL</span>
          </div>

          <div className="flex">
            {/* Ticker list */}
            <div className="w-48 border-r border-border shrink-0">
              {tickers.map((t, i) => (
                <motion.div
                  key={t.symbol}
                  initial={{ opacity: 0 }}
                  animate={visible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className={`flex items-center justify-between px-3 py-2.5 border-b border-border cursor-pointer ${i === 0 ? "bg-[#1a1507]" : "hover:bg-[#151209]"}`}
                >
                  <div>
                    <div className="text-[11px] text-cream font-semibold">{t.symbol}</div>
                    <Sparkline seed={t.seed} positive={t.positive} />
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-cream">{t.price}</div>
                    <div className={`text-[10px] ${t.positive ? "text-green-400" : "text-red-400"}`}>
                      {t.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main chart + data */}
            <div className="flex-1 overflow-hidden">
              {/* Chart */}
              <div className="px-4 pt-4 pb-2 border-b border-border">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[13px] text-cream font-semibold">MSFT</span>
                  <span className="text-[11px] text-green-400">421.23 +1.24%</span>
                </div>
                <PriceChart />
                <div className="flex justify-between mt-1">
                  <span className="text-[9px] text-muted">60D</span>
                  <span className="text-[9px] text-muted">Microsoft Corp.</span>
                </div>
              </div>

              {/* Meta grid */}
              <div className="grid grid-cols-2 gap-px bg-border border-b border-border">
                {[
                  { label: "Mkt Cap", value: "3.13T" },
                  { label: "Volume", value: "18.4M" },
                  { label: "52W High", value: "468.35" },
                  { label: "52W Low", value: "309.45" },
                ].map((m) => (
                  <div key={m.label} className="bg-[#0d0c09] px-3 py-2">
                    <div className="text-[9px] text-muted">{m.label}</div>
                    <div className="text-[11px] text-cream">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Options table */}
              <div className="overflow-x-auto">
                <table className="w-full text-[9px]">
                  <thead>
                    <tr className="bg-[#111009] border-b border-border">
                      {["Strike", "Exp", "Type", "Bid", "Ask", "IV", "Δ", "OI"].map((h) => (
                        <th key={h} className="text-muted text-left px-2 py-1.5 font-normal">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {optionsData.map((row, i) => (
                      <tr key={i} className="border-b border-[#1a1507] hover:bg-[#111009]">
                        <td className="px-2 py-1.5 text-cream">{row.strike}</td>
                        <td className="px-2 py-1.5 text-muted">{row.expiry}</td>
                        <td className={`px-2 py-1.5 font-semibold ${row.type === "CALL" ? "text-green-400" : "text-red-400"}`}>
                          {row.type}
                        </td>
                        <td className="px-2 py-1.5 text-cream">{row.bid}</td>
                        <td className="px-2 py-1.5 text-cream">{row.ask}</td>
                        <td className="px-2 py-1.5 text-orange">{row.iv}</td>
                        <td className="px-2 py-1.5 text-muted">{row.delta}</td>
                        <td className="px-2 py-1.5 text-muted">{row.oi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
