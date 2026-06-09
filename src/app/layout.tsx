import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexora – AI-Powered Web3 Infrastructure Platform",
  description:
    "Nexora is an enterprise-grade AI-powered infrastructure platform for building, scaling, and securing decentralized applications. Trusted by 25,000+ builders worldwide.",
  keywords: [
    "Web3 platform",
    "blockchain infrastructure",
    "DeFi",
    "smart contracts",
    "decentralized apps",
    "AI blockchain",
    "multi-chain",
  ],
  authors: [{ name: "Nexora Team" }],
  creator: "Nexora",
  openGraph: {
    type: "website",
    title: "Nexora – AI-Powered Web3 Infrastructure Platform",
    description:
      "Build, scale, and secure decentralized applications with Nexora's enterprise-grade infrastructure.",
    siteName: "Nexora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora – AI-Powered Web3 Infrastructure Platform",
    description:
      "Build, scale, and secure decentralized applications with Nexora's enterprise-grade infrastructure.",
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-navy-950 text-slate-100 overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
