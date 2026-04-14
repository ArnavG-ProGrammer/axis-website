"use client";

import { GitBranch, ExternalLink } from "lucide-react";

const platformLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Legal Docs", href: "#legal-docs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Request Access", href: "#early-access" },
];

const companyLinks = [
  { label: "About", href: "#founder" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arnavgoyalhamingos" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isAnchor = href.startsWith("#");
  const handleClick = () => {
    if (isAnchor) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (isAnchor) {
    return (
      <button
        onClick={handleClick}
        className="text-muted hover:text-orange transition-colors duration-200 text-[13px] text-left"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        {children}
      </button>
    );
  }
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-muted hover:text-orange transition-colors duration-200 text-[13px]"
      style={{ fontFamily: "var(--font-barlow), sans-serif" }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 lg:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AxisLogoSmall />
              <span
                className="text-cream text-lg tracking-widest uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                AXIS
              </span>
            </div>
            <p
              className="text-muted text-[13px] leading-[1.7] mb-4"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              The B2B partnership network where companies discover each other,
              signal intent, and formalise deals.
            </p>
            <p
              className="text-[#5a4a38] text-[11px] tracking-wide"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              A Dual / Swipe product. Est. 2026.
              <br />
              Delhi, India.
            </p>
          </div>

          {/* Col 2: Platform */}
          <div>
            <p
              className="text-cream text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Platform
            </p>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <p
              className="text-cream text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <p
              className="text-cream text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-8">
                <a href="https://github.com/arnavgoyalhamingos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-orange transition-colors duration-200">
                <GitBranch size={16} />
              </a>
              <a href="https://www.linkedin.com/in/arnavgoyalhamingos" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-orange transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-muted hover:text-orange transition-colors duration-200">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[#5a4a38] text-[11px] leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            © 2026 Dual / Swipe. AXIS is a partnership network.
            <span className="hidden sm:inline"> Not financial advice. Not legal advice.</span>
          </p>
          <p
            className="text-[#5a4a38] text-[11px] sm:hidden"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Not financial advice. Not legal advice.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-orange" />
            <span
              className="text-[#5a4a38] text-[10px] tracking-wider uppercase"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              axis.dualswipe.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AxisLogoSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
      <path d="M4 4 L32 32" stroke="#c95a2a" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M32 4 L4 32" stroke="#c95a2a" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M9 18 L27 18" stroke="#c95a2a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
