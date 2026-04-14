"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import LavaLamp from "@/components/LavaLamp";
import Hero from "@/sections/Hero";
import ProblemStatement from "@/sections/ProblemStatement";
import HowItWorks from "@/sections/HowItWorks";
import Features from "@/sections/Features";
import LegalDocs from "@/sections/LegalDocs";
import StocksOptions from "@/sections/StocksOptions";
import Pricing from "@/sections/Pricing";
import EarlyAccess from "@/sections/EarlyAccess";
import Founder from "@/sections/Founder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-background relative"
    >
      {/* Lava lamp blobs — sit behind all sections */}
      <LavaLamp />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <Features />
        <LegalDocs />
        <StocksOptions />
        <Pricing />
        <Founder />
        <EarlyAccess />
        <Footer />
      </div>
    </motion.div>
  );
}
