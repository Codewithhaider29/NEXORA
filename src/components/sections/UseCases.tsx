"use client";

import { motion } from "framer-motion";
import { TrendingUp, Image, Gamepad2, CreditCard, Building2, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "DeFi",
    desc: "Build next-gen decentralized finance protocols with automated market makers, lending pools, and yield optimizers.",
    stat: "$8.46B TVL",
    color: "#3B82F6",
    gradient: "from-blue-600/20 to-blue-600/5",
    tags: ["AMM", "Lending", "Yield"],
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: "NFT",
    desc: "Create, manage and trade digital collectibles across multiple blockchains with gas-optimized minting.",
    stat: "2M+ NFTs Minted",
    color: "#8B5CF6",
    gradient: "from-violet-600/20 to-violet-600/5",
    tags: ["ERC-721", "Royalties", "Metadata"],
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Gaming",
    desc: "Power play-to-earn economies with fast transactions, in-game asset management, and cross-chain item bridging.",
    stat: "500K+ Gamers",
    color: "#F59E0B",
    gradient: "from-amber-600/20 to-amber-600/5",
    tags: ["Play2Earn", "NFT Items", "Tournaments"],
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payments",
    desc: "Enable borderless crypto payments with fiat on-ramps, off-ramps, and instant settlement for global commerce.",
    stat: "$150M+ Processed",
    color: "#39FF14",
    gradient: "from-green-600/20 to-green-600/5",
    tags: ["Multi-currency", "Fiat", "Settlement"],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprise",
    desc: "Deploy private or permissioned blockchain networks with compliance tools and enterprise SLAs.",
    stat: "200+ Enterprises",
    color: "#06B6D4",
    gradient: "from-cyan-600/20 to-cyan-600/5",
    tags: ["Private Chains", "KYC/AML", "SLA"],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3 block">Use Cases</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
            Built for Every Industry
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            From DeFi protocols to enterprise blockchain networks — Nexora powers it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`glass-card p-6 bg-gradient-to-b ${uc.gradient} group cursor-pointer relative overflow-hidden`}
              style={{ borderColor: `${uc.color}20` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${uc.color}12, transparent 70%)` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${uc.color}20`, color: uc.color, border: `1px solid ${uc.color}30`, boxShadow: `0 0 25px ${uc.color}25` }}
              >
                {uc.icon}
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-2">{uc.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{uc.desc}</p>

              <div className="text-sm font-bold font-mono mb-4" style={{ color: uc.color }}>{uc.stat}</div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {uc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{ background: `${uc.color}15`, color: uc.color, border: `1px solid ${uc.color}25` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2 transition-all"
                style={{ color: uc.color }}
              >
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
