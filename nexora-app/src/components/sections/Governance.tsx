"use client";

import { motion } from "framer-motion";
import { Vote, PiggyBank, Users, ChevronRight } from "lucide-react";

const proposals = [
  {
    id: "NXR-142",
    title: "Reduce Protocol Fee from 0.3% to 0.2%",
    votes: 78,
    for: 156000,
    against: 44000,
    status: "Active",
    color: "#39FF14",
    timeLeft: "2 days left",
  },
  {
    id: "NXR-141",
    title: "Enable Cross-Chain Bridge for Arbitrum",
    votes: 65,
    for: 130000,
    against: 70000,
    status: "Active",
    color: "#3B82F6",
    timeLeft: "5 days left",
  },
  {
    id: "NXR-140",
    title: "Increase Developer Grant Pool by $2M",
    votes: 52,
    for: 104000,
    against: 96000,
    status: "Active",
    color: "#8B5CF6",
    timeLeft: "1 day left",
  },
];

const treasury = [
  { label: "Ecosystem", pct: 45, color: "#3B82F6" },
  { label: "Development", pct: 25, color: "#8B5CF6" },
  { label: "Community", pct: 20, color: "#06B6D4" },
  { label: "Reserves", pct: 10, color: "#39FF14" },
];

export default function Governance() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3 block">Governance</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
            Community-Driven Decisions
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            NXR token holders govern the protocol. Vote on proposals, allocate treasury, and shape the future of Nexora.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Proposals */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Vote className="w-5 h-5 text-violet-400" />
                <span className="font-semibold text-white">Active Proposals</span>
              </div>
              <span className="text-xs text-slate-500">{proposals.length} proposals</span>
            </div>
            {proposals.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="glass-card p-5 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-slate-500">{p.id}</span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}30` }}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {p.title}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-violet-400 flex-shrink-0 mt-1 transition-colors" />
                </div>

                {/* Vote bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>For: {p.for.toLocaleString()}</span>
                    <span className="font-bold" style={{ color: p.color }}>{p.votes}%</span>
                    <span>Against: {p.against.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}80)` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.votes}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    />
                  </div>
                </div>

                <div className="text-xs text-slate-600 mt-2">{p.timeLeft}</div>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl border border-violet-500/20 text-sm text-violet-400 hover:bg-violet-500/5 transition-colors"
            >
              View All Proposals →
            </motion.button>
          </div>

          {/* Treasury */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <PiggyBank className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-white">Treasury Allocation</span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-5"
            >
              <div className="text-2xl font-bold font-display text-white mb-1">$142M</div>
              <div className="text-xs text-slate-400 mb-4">Total Treasury Value</div>

              <div className="space-y-3">
                {treasury.map((t, i) => (
                  <div key={t.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">{t.label}</span>
                      <span className="font-semibold" style={{ color: t.color }}>{t.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: t.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DAO Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Token Holders", value: "48,200", icon: <Users className="w-4 h-4" />, color: "#3B82F6" },
                { label: "Proposals Passed", value: "139", icon: <Vote className="w-4 h-4" />, color: "#39FF14" },
                { label: "Quorum", value: "10%", icon: <Users className="w-4 h-4" />, color: "#8B5CF6" },
                { label: "NXR Staked", value: "62%", icon: <PiggyBank className="w-4 h-4" />, color: "#06B6D4" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-card p-3 text-center"
                >
                  <div style={{ color: s.color }} className="flex justify-center mb-1">{s.icon}</div>
                  <div className="text-lg font-bold text-white">{s.value}</div>
                  <div className="text-[10px] text-slate-500">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
