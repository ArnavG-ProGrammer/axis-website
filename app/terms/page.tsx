import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AXIS",
  description: "AXIS Terms of Service. Read about how we operate the platform, your rights, and our responsibilities.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using AXIS ("the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Platform. AXIS is a product of Dual / Swipe, operated by Arnav Goyal. These Terms were last updated on 12 April 2026.`,
  },
  {
    title: "2. Description of Service",
    body: `AXIS is a B2B partnership network that enables companies to discover each other, signal partnership intent, manage structured outreach pipelines, and generate legal document templates. The Platform does not provide legal advice, financial advice, or investment advice. All legal documents generated through AXIS are templates and should be reviewed by qualified counsel before execution.`,
  },
  {
    title: "3. Eligibility",
    body: `You must represent a legitimate business entity or be building toward one to use AXIS. By registering an account, you confirm that the information you provide is accurate. If you are under the age of majority in your jurisdiction, we recommend reviewing these Terms with a parent or guardian.`,
  },
  {
    title: "4. User Accounts",
    body: `You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account. You must notify us immediately of any unauthorised access. AXIS reserves the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    title: "5. Acceptable Use",
    body: `You agree not to use AXIS to: (a) send spam or unsolicited communications; (b) misrepresent your company or its capabilities; (c) engage in any activity that violates applicable law; (d) attempt to gain unauthorised access to any part of the Platform; (e) scrape, crawl, or harvest data from the Platform without prior written consent.`,
  },
  {
    title: "6. Legal Document Templates",
    body: `AXIS provides document templates (NDAs, MOUs, Partnership Agreements) as a convenience feature. These templates do not constitute legal advice. AXIS, Dual / Swipe, and Arnav Goyal disclaim all liability for the legal effectiveness or enforceability of any document generated through the Platform. You assume all responsibility for reviewing, modifying, and executing any such document.`,
  },
  {
    title: "7. Market Data and Financial Information",
    body: `Any market data, stock prices, options data, or financial information provided through AXIS is for informational purposes only and does not constitute financial advice, investment advice, or a recommendation to buy or sell any security. This data may be delayed and is not guaranteed to be accurate. AXIS is not a registered financial adviser, broker, or dealer.`,
  },
  {
    title: "8. Intellectual Property",
    body: `All content, trademarks, and intellectual property on the Platform are owned by or licensed to Dual / Swipe. You may not reproduce, distribute, or create derivative works without explicit written permission. User-generated content (company profiles, posts, documents) remains owned by the creating user, but you grant AXIS a non-exclusive licence to display such content on the Platform.`,
  },
  {
    title: "9. Limitation of Liability",
    body: `To the maximum extent permitted by law, AXIS, Dual / Swipe, and Arnav Goyal shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Platform. Our total aggregate liability shall not exceed the amount you paid to us in the twelve months preceding the claim, or INR 1,000, whichever is lower.`,
  },
  {
    title: "10. Disclaimers",
    body: `The Platform is provided "as is" without any warranties of any kind, express or implied. We do not warrant that the Platform will be error-free, uninterrupted, or free from security vulnerabilities. We reserve the right to modify, suspend, or discontinue the Platform at any time.`,
  },
  {
    title: "11. Governing Law",
    body: `These Terms shall be governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.`,
  },
  {
    title: "12. Changes to Terms",
    body: `We may update these Terms at any time. We will notify registered users of material changes via email or through the Platform. Continued use of the Platform after changes constitutes acceptance of the updated Terms.`,
  },
  {
    title: "13. Contact",
    body: `For questions regarding these Terms, contact us at arnavsgoyal@gmail.com or through the Platform.`,
  },
];

export default function TermsPage() {
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
            Legal · Terms of Service
          </p>
          <h1
            className="text-cream font-bold leading-none mb-4"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(40px, 6vw, 64px)",
            }}
          >
            Terms of Service
          </h1>
          <p
            className="text-muted text-[12px]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Last updated: 12 April 2026 · Effective immediately
          </p>
          <div className="w-[60px] h-[2px] bg-orange mt-6" />
        </div>

        {/* Intro */}
        <p
          className="text-muted text-base leading-[1.8] mb-12"
          style={{ fontFamily: "var(--font-barlow), sans-serif" }}
        >
          Please read these Terms carefully before using AXIS. They form a
          binding agreement between you and Dual / Swipe. AXIS is not a law
          firm. Nothing on this platform constitutes legal or financial advice.
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
                className="text-muted text-[15px] leading-[1.8]"
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
            © 2026 Dual / Swipe · AXIS is a partnership network · Not legal advice · Not financial advice
          </p>
        </div>
      </div>
    </main>
  );
}
