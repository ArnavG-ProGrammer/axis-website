import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://axis.dualswipe.com"
  ),
  title: "AXIS — The B2B Partnership Network",
  description:
    "AXIS is the B2B partnership network where companies discover each other, track market data, and generate legal documents to formalise deals.",
  openGraph: {
    title: "AXIS — The B2B Partnership Network",
    description:
      "Where companies discover each other, signal partnership intent, and formalise deals — all in one structured platform.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXIS — The B2B Partnership Network",
    description:
      "Where companies discover each other, signal partnership intent, and formalise deals — all in one structured platform.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased bg-background text-cream font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
