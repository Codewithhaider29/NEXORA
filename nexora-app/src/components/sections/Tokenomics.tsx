"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

type ValueType = any;

const tokenomics = [
  { name: "Ecosystem", value: 40, color: "#3B82F6", desc: "Platform development, grants & incentives" },
  { name: "Team", value: 15, color: "#8B5CF6", desc: "Founders & core contributors (4yr vest)" },
  { name: "Investors", value: 20, color: "#06B6D4", desc: "Seed, Series A & B investors (2yr vest)" },
  { name: "Community", value: 15, color: "#39FF14", desc: "Airdrops, rewards & DAO treasury" },
  { name: "Liquidity", value: 10, color: "#F59E0B", desc: "DEX liquidity & market makers" },
];

const totalSupply = "1,000,000,000 NXR";
const circulatingSupply = "248,000,000 NXR";

export default function Tokenomics() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 purple-glow opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">Tokenomics</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">NXR Token Distribution</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Designed for long-term sustainability with community-first allocation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Donut Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-96 relative"
          >
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
              <PieChart>
                <Pie
                  data={tokenomics}
                  cx="50%"
                  cy="50%"
                  innerRadius="55%"
                  outerRadius="75%"
                  paddingAngle={3}
                  dataKey="value"
                  onMouseEnter={(_, idx) => setActive(tokenomics[idx].name)}
                  onMouseLeave={() => setActive(null)}
                  strokeWidth={0}
                >
                  {tokenomics.map((t) => (
                    <Cell
                      key={t.name}
                      fill={t.color}
                      opacity={active === null || active === t.name ? 1 : 0.35}
                      style={{ cursor: "pointer", filter: active === t.name ? `drop-shadow(0 0 12px ${t.color}90)` : "none" }}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#070b20", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8 }}
                  formatter={(v: ValueType) => [`${v ?? 0}%`, "Allocation"]}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-xs text-slate-500">Total Supply</div>
              <div className="text-xl font-bold text-white font-mono mt-1">1B NXR</div>
              <div className="text-xs text-slate-500 mt-1">Circulating: 24.8%</div>
            </div>
          </motion.div>

          {/* Breakdown List */}
          <div className="space-y-4">
            {/* Supply info */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="glass-card p-4">
                <div className="text-xs text-slate-400 mb-1">Total Supply</div>
                <div className="text-sm font-bold text-white font-mono">{totalSupply}</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-xs text-slate-400 mb-1">Circulating</div>
                <div className="text-sm font-bold text-white font-mono">{circulatingSupply}</div>
              </div>
            </div>

            {tokenomics.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onHoverStart={() => setActive(t.name)}
                onHoverEnd={() => setActive(null)}
                className={`glass-card p-4 cursor-pointer transition-all duration-200 ${
                  active === t.name ? "border-opacity-50" : ""
                }`}
                style={{ borderColor: active === t.name ? `${t.color}40` : undefined }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: t.color, boxShadow: `0 0 10px ${t.color}` }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-white">{t.name}</span>
                      <span className="text-sm font-bold font-mono" style={{ color: t.color }}>{t.value}%</span>
                    </div>
                    <div className="text-xs text-slate-500">{t.desc}</div>
                    <div className="mt-2 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: t.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full py-3 rounded-xl text-sm text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/5 transition-colors"
            >
              View Token Details →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
