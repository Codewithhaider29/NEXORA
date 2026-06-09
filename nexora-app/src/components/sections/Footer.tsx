"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { FaXTwitter, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      "Overview",
      "Features",
      "Analytics",
      "Integrations",
      "Changelog",
      "Pricing",
    ],
  },
  {
    title: "Developers",
    links: [
      "Documentation",
      "API Reference",
      "SDK",
      "CLI Tools",
      "GitHub",
      "Status Page",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Tutorials",
      "Webinars",
      "Case Studies",
      "White Paper",
      "Glossary",
    ],
  },
  {
    title: "Community",
    links: ["Discord", "Forum", "Ambassador", "Grants", "Governance", "Events"],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Press Kit",
      "Partners",
      "Legal",
      "Privacy Policy",
    ],
  },
];

const socials = [
  { icon: <FaXTwitter className="w-4 h-4" />, label: "X (Twitter)", href: "#" },
  { icon: <FaGithub className="w-4 h-4" />, label: "GitHub", href: "#" },
  { icon: <FaDiscord className="w-4 h-4" />, label: "Discord", href: "#" },
  { icon: <FaLinkedin className="w-4 h-4" />, label: "LinkedIn", href: "#" },
];

// Replaced simple strings with objects containing names and logo URLs
const chains = [
  {
    name: "Ethereum",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
  },
  {
    name: "Solana",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=029",
  },
  {
    name: "Polygon",
    icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=029",
  },
  {
    name: "Arbitrum",
    icon: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029",
  },
  {
    name: "Avalanche",
    icon: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=029",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05] bg-[#050816]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-0" />

      {/* Massive Background Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center items-end z-0 opacity-50">
        <span className="text-[18vw] font-black uppercase tracking-tighter leading-[0.75] bg-gradient-to-b from-white/[0.04] to-transparent bg-clip-text text-transparent">
          NEXORA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a
              href="#hero"
              className="flex items-center gap-2.5 mb-5 group w-fit"
            >
              <Image
                src="/logo.jpeg"
                alt="Nexora Logo"
                width={32}
                height={32}
                className="rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.3)]"
              />
              <span className="font-bold text-white tracking-wide">Nexora</span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed mb-5 max-w-[200px]">
              AI-powered Web3 infrastructure for the decentralized future.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-slate-500 hover:text-slate-200 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Chain support row */}
        <div className="py-5 border-t border-white/[0.04] flex flex-wrap items-center gap-3">
          <span className="text-xs text-slate-600 mr-1">Supported chains:</span>
          {chains.map((chain) => (
            <span
              key={chain.name}
              className="flex items-center gap-2 text-[11px] font-medium px-3 py-1.5 bg-white/[0.02] backdrop-blur-sm rounded-full border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.15] transition-all cursor-default"
            >
              <img
                src={chain.icon}
                alt={`${chain.name} logo`}
                className="w-4 h-4 object-contain brightness-90 group-hover:brightness-110"
              />
              {chain.name}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} Nexora Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            {["Terms", "Privacy", "Cookies", "Security"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
