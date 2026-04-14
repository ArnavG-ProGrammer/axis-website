import Link from "next/link";
import type { Metadata } from "next";
import { Mail, Phone, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — AXIS",
  description: "Get in touch with the founder of AXIS.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-cream px-6 lg:px-12 py-24">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-orange text-[11px] tracking-[0.2em] uppercase mb-12 transition-colors"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          ← Back to AXIS
        </Link>

        {/* Header */}
        <div className="mb-14">
          <p
            className="text-orange text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Get In Touch
          </p>
          <h1
            className="text-cream font-bold leading-none mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(40px, 6vw, 64px)",
            }}
          >
            Contact
          </h1>
          <p
            className="text-muted text-base leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            Reach out directly for partnership enquiries, press, or just to say
            hello. Built and run by Arnav Goyal from New Delhi.
          </p>
          <div className="w-[60px] h-[2px] bg-orange mt-6" />
        </div>

        {/* Contact cards */}
        <div className="flex flex-col gap-4">
          {/* Email */}
          <a
            href="mailto:arnavsgoyal@gmail.com"
            className="group flex items-center gap-5 bg-surface border border-border hover:border-orange p-6 transition-all duration-200"
          >
            <div className="w-10 h-10 bg-orange flex items-center justify-center shrink-0">
              <Mail size={18} color="#f0e4cc" />
            </div>
            <div className="flex-1">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                Email
              </p>
              <p
                className="text-cream text-[15px] group-hover:text-orange transition-colors"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                arnavsgoyal@gmail.com
              </p>
            </div>
            <ExternalLink size={14} className="text-muted group-hover:text-orange transition-colors shrink-0" />
          </a>

          {/* Phone */}
          <a
            href="tel:+919811856054"
            className="group flex items-center gap-5 bg-surface border border-border hover:border-orange p-6 transition-all duration-200"
          >
            <div className="w-10 h-10 bg-orange flex items-center justify-center shrink-0">
              <Phone size={18} color="#f0e4cc" />
            </div>
            <div className="flex-1">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                Phone
              </p>
              <p
                className="text-cream text-[15px] group-hover:text-orange transition-colors"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                +91 98118 56054
              </p>
            </div>
            <ExternalLink size={14} className="text-muted group-hover:text-orange transition-colors shrink-0" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arnavgoyalhamingos"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 bg-surface border border-border hover:border-orange p-6 transition-all duration-200"
          >
            <div className="w-10 h-10 bg-orange flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f0e4cc">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                LinkedIn
              </p>
              <p
                className="text-cream text-[15px] group-hover:text-orange transition-colors"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                linkedin.com/in/arnavgoyalhamingos
              </p>
            </div>
            <ExternalLink size={14} className="text-muted group-hover:text-orange transition-colors shrink-0" />
          </a>
        </div>

        {/* Note */}
        <div className="mt-12 border-t border-border pt-8">
          <p
            className="text-[#5a4a38] text-[11px] leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            For partnership requests, use the{" "}
            <Link href="/#early-access" className="text-orange hover:underline">
              waitlist form
            </Link>{" "}
            on the main page. Direct contact is for press, investment, and
            general enquiries.
          </p>
        </div>
      </div>
    </main>
  );
}
