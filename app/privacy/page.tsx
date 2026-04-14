import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AXIS",
  description: "AXIS Privacy Policy. How we collect, use, and protect your data.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `AXIS is a B2B partnership network operated by Dual / Swipe, founded by Arnav Goyal, New Delhi, India. For privacy-related queries, contact: arnavsgoyal@gmail.com. This policy is governed by the Digital Personal Data Protection Act 2023 (DPDPA) of India and applies to all users of the Platform.`,
  },
  {
    title: "2. Data We Collect",
    body: `We collect the following categories of data when you use AXIS:\n\n• Identity data: Company name, your name, role, and work email address.\n• Usage data: Pages visited, features used, actions taken within the Platform (follows, requests sent, documents generated).\n• Communication data: Partnership requests, messages, and document contents you create.\n• Technical data: IP address, browser type, device information, and access timestamps.\n• Financial context data (AXIS Pro): No payment card data is stored by AXIS. Payments are processed by third-party processors subject to their own privacy policies.`,
  },
  {
    title: "3. How We Use Your Data",
    body: `We use your data to:\n\n• Operate and improve the AXIS platform\n• Match companies based on partnership intent\n• Send transactional communications (account verification, document notifications)\n• Send platform updates and feature announcements (you may opt out)\n• Comply with applicable legal obligations\n• Prevent fraud and enforce our Terms of Service\n\nWe do not sell your personal data to third parties. We do not use your data to train AI models without explicit consent.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `Under the DPDPA 2023, we process your data on the following bases: (a) Consent — obtained at registration for marketing and optional features; (b) Contract — necessary to provide the services you have signed up for; (c) Legitimate interest — to improve the platform, prevent abuse, and ensure security; (d) Legal obligation — where required by applicable law.`,
  },
  {
    title: "5. Data Sharing",
    body: `We share data only with:\n\n• Service providers who assist in operating the Platform (hosting, analytics, email), under contractual data processing agreements.\n• Other AXIS users — specifically, your company profile and partnership posts are visible to other registered users by design.\n• Law enforcement or regulatory bodies where required by law.\n\nWe do not share data with advertisers or data brokers.`,
  },
  {
    title: "6. Cookies and Tracking",
    body: `AXIS uses essential cookies required for the Platform to function (session management, authentication). We may use analytics tools to understand usage patterns. You can manage cookie preferences through your browser settings. Disabling essential cookies may prevent certain features from working.`,
  },
  {
    title: "7. Data Retention",
    body: `We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law or for the resolution of disputes. Anonymised, aggregated data may be retained indefinitely for analytics purposes.`,
  },
  {
    title: "8. Your Rights",
    body: `Under the DPDPA 2023, you have the right to:\n\n• Access the personal data we hold about you\n• Correct inaccurate personal data\n• Erase your personal data (right to erasure)\n• Withdraw consent at any time\n• Nominate another person to exercise your rights in the event of your death or incapacity\n\nTo exercise any of these rights, email arnavsgoyal@gmail.com. We will respond within 72 hours.`,
  },
  {
    title: "9. Data Security",
    body: `We implement industry-standard security measures including encrypted data transmission (HTTPS), access controls, and regular security reviews. However, no system is completely secure. We will notify you promptly in the event of a data breach that affects your personal data, in accordance with applicable law.`,
  },
  {
    title: "10. Third-Party Links",
    body: `AXIS may link to third-party websites or services (including company profiles or external URLs). We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before sharing data with them.`,
  },
  {
    title: "11. Minors",
    body: `AXIS is open to users of all ages who are accessing the Platform in a business context. If you are a minor, we encourage you to review this policy with a parent or guardian. We do not knowingly collect sensitive personal data from minors beyond what is necessary to operate the Platform.`,
  },
  {
    title: "12. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify registered users of material changes via email or through the Platform. The date of the most recent update is indicated at the top of this page.`,
  },
  {
    title: "13. Contact and Complaints",
    body: `For any privacy-related concerns, contact: arnavsgoyal@gmail.com. If you are not satisfied with our response, you have the right to lodge a complaint with the Data Protection Board of India, once established under the DPDPA 2023.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-cream px-6 lg:px-12 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-orange text-[11px] tracking-[0.2em] uppercase mb-12 transition-colors"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          ← Back to AXIS
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p
            className="text-orange text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Legal · Privacy Policy
          </p>
          <h1
            className="text-cream font-bold leading-none mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(40px, 6vw, 64px)",
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-muted text-[12px]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Last updated: 12 April 2026 · Compliant with DPDPA 2023
          </p>
          <div className="w-[60px] h-[2px] bg-orange mt-6" />
        </div>

        {/* Intro */}
        <p
          className="text-muted text-base leading-[1.8] mb-12"
          style={{ fontFamily: "var(--font-barlow), sans-serif" }}
        >
          At AXIS, we take data privacy seriously. This policy explains exactly
          what data we collect, why we collect it, and what rights you have. We
          are compliant with the Digital Personal Data Protection Act 2023
          (DPDPA) of India.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title} className="border-l-2 border-border pl-6">
              <h2
                className="text-cream text-[13px] tracking-[0.1em] uppercase font-semibold mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {s.title}
              </h2>
              <p
                className="text-muted text-[15px] leading-[1.8] whitespace-pre-line"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-border">
          <p
            className="text-[#5a4a38] text-[11px]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            © 2026 Dual / Swipe · AXIS is a partnership network · DPDPA 2023 compliant
          </p>
        </div>
      </div>
    </main>
  );
}
