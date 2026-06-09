"use client";

import { motion } from "framer-motion";

const logos = [
  {
    name: "Coinbase",
    color: "#0052FF",
    icon: "https://logo.clearbit.com/coinbase.com",
  },
  {
    name: "Binance",
    color: "#F0B90B",
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029",
  },
  {
    name: "Solana",
    color: "#9945FF",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=029",
  },
  {
    name: "Polygon",
    color: "#8247E5",
    icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=029",
  },
  {
    name: "Avalanche",
    color: "#E84142",
    icon: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=029",
  },
  {
    name: "Arbitrum",
    color: "#28A0F0",
    icon: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029",
  },
  {
    name: "Chainlink",
    color: "#375BD2",
    icon: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=029",
  },
  {
    name: "Alchemy",
    color: "#5B50FF",
    icon: "https://logo.clearbit.com/alchemy.com",
  },
  {
    name: "Optimism",
    color: "#FF0420",
    icon: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=029",
  },
  {
    name: "Base",
    color: "#0052FF",
    icon: "https://raw.githubusercontent.com/base-org/brand-kit/main/logo/symbol/Base_Symbol_Blue.svg",
  },
];

export default function TrustedBy() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 relative overflow-hidden border-y border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-blue-950/10 to-[#050816]" />

      <div className="max-w-7xl mx-auto px-4 mb-10 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-slate-500 uppercase tracking-widest"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      {/* Marquee Track 1 */}
      <div className="relative overflow-hidden">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[#050816] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[#050816] to-transparent pointer-events-none" />

        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300 group cursor-default shrink-0"
            >
              {/* Image Container with Glow Effect */}
              <div className="relative flex items-center justify-center w-6 h-6">
                <div
                  className="absolute inset-0 blur-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full"
                  style={{ backgroundColor: logo.color }}
                />
                <img
                  src={logo.icon}
                  alt={`${logo.name} logo`}
                  className="relative z-10 w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors duration-300 font-display">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Track 2 (Reverse) */}
      <div className="relative overflow-hidden mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[#050816] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[#050816] to-transparent pointer-events-none" />

        <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
          {[...doubled].reverse().map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300 group cursor-default shrink-0"
            >
              {/* Image Container with Glow Effect */}
              <div className="relative flex items-center justify-center w-6 h-6">
                <div
                  className="absolute inset-0 blur-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full"
                  style={{ backgroundColor: logo.color }}
                />
                <img
                  src={logo.icon}
                  alt={`${logo.name} logo`}
                  className="relative z-10 w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors duration-300 font-display">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
