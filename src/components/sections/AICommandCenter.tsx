"use client";

import { motion } from "framer-motion";
import { Brain, Shield, FileCode, TrendingUp, Zap, Eye, ChevronRight } from "lucide-react";
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip,
} from "recharts";

type ValueType = any;



const tvlData = [
  { m: "Jan", v: 2.1 }, { m: "Feb", v: 3.4 }, { m: "Mar", v: 2.8 }, { m: "Apr", v: 4.2 },
  { m: "May", v: 5.1 }, { m: "Jun", v: 6.8 }, { m: "Jul", v: 7.2 }, { m: "Aug", v: 8.46 },
];

const riskData = [
  { t: "00:00", r: 3.2 }, { t: "04:00", r: 2.8 }, { t: "08:00", r: 4.1 }, { t: "12:00", r: 2.1 },
  { t: "16:00", r: 1.8 }, { t: "20:00", r: 2.5 }, { t: "Now", r: 2.1 },
];

const features = [
  { icon: <Brain className="w-5 h-5" />, label: "Predictive Analytics", desc: "AI-driven market forecasting", color: "#3B82F6" },
  { icon: <Shield className="w-5 h-5" />, label: "Threat Detection", desc: "Real-time anomaly monitoring", color: "#EF4444" },
  { icon: <FileCode className="w-5 h-5" />, label: "Smart Contract Auditing", desc: "Automated vulnerability scans", color: "#8B5CF6" },
  { icon: <Eye className="w-5 h-5" />, label: "Market Intelligence", desc: "Cross-chain data aggregation", color: "#06B6D4" },
];

export default function AICommandCenter() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-violet-950/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">AI Command Center</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
            Intelligence at the Core
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Our AI engine processes billions of data points to give you an unfair advantage in Web3.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">AI Engine Online</span>
              </div>
              <div className="text-3xl font-bold font-mono text-white mb-1">98.7%</div>
              <div className="text-sm text-slate-400">Prediction Accuracy</div>
              <div className="mt-3 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "98.7%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </div>
            </div>

            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 flex items-start gap-3 group cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${f.color}20`, color: f.color, border: `1px solid ${f.color}30` }}
                >
                  {f.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{f.label}</div>
                  <div className="text-xs text-slate-500">{f.desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 text-sm"
            >
              Explore AI Features →
            </motion.button>
          </motion.div>

          {/* Center - TVL Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-slate-400">TVL Analytics</div>
                <div className="text-2xl font-bold text-white font-display">$8.46B</div>
                <div className="text-xs text-green-400">↑ +7.1% compared to yesterday</div>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <AreaChart data={tvlData}>
                  <defs>
                    <linearGradient id="tvlGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="m" tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#0a0f2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: "#94a3b8" }}
                    formatter={(v: ValueType) => [`$${v ?? 0}B`, "TVL"]}
                  />
                  <Area type="monotone" dataKey="v" stroke="#3B82F6" strokeWidth={2} fill="url(#tvlGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="text-xs text-green-400 font-semibold">What is the best performing protocol?</div>
              <div className="text-xs text-slate-400 mt-1">Aave leads with $2.8B TVL. Uniswap close second at $1.9B.</div>
            </div>
          </motion.div>

          {/* Right - Risk Score */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-400">Risk Score</div>
                  <div className="text-4xl font-bold text-green-400 font-mono">2.1%</div>
                  <div className="text-xs text-green-400 mt-1">Low Risk</div>
                </div>
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                    <motion.circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke="#39FF14" strokeWidth="3"
                      strokeLinecap="round"
                      pathLength="1"
                      style={{ opacity: 1 }}
                      initial={{ pathOffset: 1 }}
                      whileInView={{ pathOffset: 0.021 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>
              <div className="h-28">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                  <LineChart data={riskData}>
                    <XAxis dataKey="t" tick={{ fill: "#475569", fontSize: 9 }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: "#0a0f2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
                      formatter={(v: ValueType) => [`${v ?? 0}%`, "Risk"]}
                    />
                    <Line type="monotone" dataKey="r" stroke="#39FF14" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chain analytics mini cards */}
            {[
              { chain: "Ethereum", color: "#627EEA", pct: 38 },
              { chain: "Solana", color: "#9945FF", pct: 22 },
              { chain: "Arbitrum", color: "#28A0F0", pct: 18 },
              { chain: "Others", color: "#64748B", pct: 22 },
            ].map((item) => (
              <div key={item.chain} className="glass rounded-xl p-3 border border-white/[0.05]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-slate-300">{item.chain}</span>
                  <span className="text-xs font-mono text-white">{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
