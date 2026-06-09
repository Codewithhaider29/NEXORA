"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chains = [
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    color: "#627EEA",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
    tvl: "$3.2B",
    tps: "30 TPS",
    x: 50,
    y: 50,
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    color: "#9945FF",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=029",
    tvl: "$1.8B",
    tps: "65,000 TPS",
    x: 75,
    y: 25,
  },
  {
    id: "matic",
    name: "Polygon",
    symbol: "MATIC",
    color: "#8247E5",
    icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=029",
    tvl: "$890M",
    tps: "7,000 TPS",
    x: 80,
    y: 65,
  },
  {
    id: "arb",
    name: "Arbitrum",
    symbol: "ARB",
    color: "#28A0F0",
    icon: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029",
    tvl: "$1.1B",
    tps: "40,000 TPS",
    x: 25,
    y: 72,
  },
  {
    id: "avax",
    name: "Avalanche",
    symbol: "AVAX",
    color: "#E84142",
    icon: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=029",
    tvl: "$620M",
    tps: "4,500 TPS",
    x: 20,
    y: 30,
  },
  // {
  //   id: "base",
  //   name: "Base",
  //   symbol: "BASE",
  //   color: "#0052FF",
  //   icon: "https://raw.githubusercontent.com/base-org/brand-kit/main/logo/symbol/Base_Symbol_Blue.svg",
  //   tvl: "$450M",
  //   tps: "30,000 TPS",
  //   x: 60,
  //   y: 80,
  // },
  {
    id: "op",
    name: "Optimism",
    symbol: "OP",
    color: "#FF0420",
    icon: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=029",
    tvl: "$380M",
    tps: "30,000 TPS",
    x: 35,
    y: 18,
  },
];

const connections = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 2],
  [1, 5],
  [3, 4],
  [4, 5],
  [2, 5],
];

export default function MultiChain() {
  const [selected, setSelected] = useState("eth");

  const selectedChain = chains.find((c) => c.id === selected);

  return (
    <section
      id="ecosystem"
      className="section py-28 relative overflow-hidden border-y border-white/[0.05]"
    >
      <div className="absolute inset-0 bg-[#050816] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-[#050816] to-[#050816] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3 block">
            Multi-Chain Infrastructure
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
            Built for Every Chain
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Seamlessly connect and operate across 25+ blockchain networks from a
            single unified interface.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Network Visualization */}
          <div className="lg:col-span-3 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-4 h-[480px] relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md z-20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                <span className="text-xs text-slate-300 font-mono">
                  Network Live
                </span>
              </div>

              {/* SVG Network */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Connection lines */}
                {connections.map(([a, b], i) => {
                  const from = chains[a];
                  const to = chains[b];
                  const isActive = selected === from.id || selected === to.id;
                  return (
                    <motion.line
                      key={i}
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke={isActive ? from.color : "rgba(255,255,255,0.05)"}
                      strokeWidth={isActive ? "0.4" : "0.2"}
                      style={{ opacity: isActive ? 0.8 : 0.3 }}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: isActive ? 0.8 : 0.3 }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                    />
                  );
                })}

                {/* Animated dashes on active connections */}
                {connections.map(([a, b], i) => {
                  const from = chains[a];
                  const to = chains[b];
                  const isActive = selected === from.id || selected === to.id;
                  if (!isActive) return null;
                  return (
                    <motion.line
                      key={`dash-${i}`}
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke={from.color}
                      strokeWidth="0.6"
                      strokeDasharray="2 8"
                      opacity="0.8"
                      animate={{ strokeDashoffset: [0, -20] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                      }}
                    />
                  );
                })}
              </svg>

              {/* Chain nodes */}
              {chains.map((chain) => (
                <motion.button
                  key={chain.id}
                  onClick={() => setSelected(chain.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-10`}
                  style={{ left: `${chain.x}%`, top: `${chain.y}%` }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl overflow-hidden"
                    style={{
                      background:
                        selected === chain.id
                          ? `linear-gradient(135deg, ${chain.color}40, ${chain.color}10)`
                          : `rgba(15,20,40,0.8)`,
                      border: `1.5px solid ${selected === chain.id ? chain.color : "rgba(255,255,255,0.1)"}`,
                      boxShadow:
                        selected === chain.id
                          ? `0 0 25px ${chain.color}60`
                          : "none",
                      backdropFilter: "blur(8px)",
                    }}
                    animate={
                      selected === chain.id ? { scale: [1, 1.05, 1] } : {}
                    }
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <img
                      src={chain.icon}
                      alt={chain.name}
                      className={`w-6 h-6 object-contain transition-all duration-300 ${selected === chain.id ? "opacity-100 scale-110 drop-shadow-md" : "opacity-60 group-hover:opacity-100"}`}
                    />
                  </motion.div>
                  <span
                    className={`text-[10px] font-mono whitespace-nowrap transition-colors bg-black/40 px-2 py-0.5 rounded-full border border-white/5 ${selected === chain.id ? "text-white" : "text-slate-400 group-hover:text-white"}`}
                  >
                    {chain.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Chain Details Panel */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="wait">
              {selectedChain && (
                <motion.div
                  key={selectedChain.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 relative overflow-hidden"
                  style={{
                    boxShadow: `0 0 40px ${selectedChain.color}15`,
                  }}
                >
                  {/* Subtle background glow based on chain color */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none"
                    style={{ backgroundColor: selectedChain.color }}
                  />

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-white/10"
                      style={{ background: `${selectedChain.color}20` }}
                    >
                      <img
                        src={selectedChain.icon}
                        alt={selectedChain.name}
                        className="w-7 h-7 object-contain drop-shadow-md"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-white">
                        {selectedChain.name}
                      </div>
                      <div className="text-sm text-slate-400">
                        {selectedChain.symbol}
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs font-medium text-green-400">
                        Live
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    {[
                      { label: "Total Value Locked", value: selectedChain.tvl },
                      { label: "Network Throughput", value: selectedChain.tps },
                      { label: "Active Validators", value: "10,000+" },
                      { label: "Block Finality", value: "< 2s" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-xl p-4 border border-white/[0.05]"
                      >
                        <div className="text-xs text-slate-500 mb-1.5">
                          {item.label}
                        </div>
                        <div className="font-bold text-white">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chain list sidebar */}
            <div className="space-y-2 bg-white/[0.01] border border-white/[0.03] rounded-3xl p-3">
              {chains.map((chain) => (
                <motion.button
                  key={chain.id}
                  onClick={() => setSelected(chain.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-200 ${
                    selected === chain.id
                      ? "bg-white/[0.06] border border-white/[0.1] shadow-lg"
                      : "hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${selected === chain.id ? "bg-white/10" : "bg-black/30"}`}
                  >
                    <img
                      src={chain.icon}
                      alt={chain.name}
                      className={`w-4 h-4 object-contain transition-all ${selected === chain.id ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}
                    />
                  </div>
                  <span
                    className={`text-sm font-semibold transition-colors ${selected === chain.id ? "text-white" : "text-slate-400"}`}
                  >
                    {chain.name}
                  </span>
                  <span
                    className={`ml-auto text-xs font-medium transition-colors ${selected === chain.id ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {chain.tvl}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
