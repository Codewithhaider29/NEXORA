"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart2, Layers } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

type ValueType = any;

const treasuryData = [
  { m: "Jan", t: 82, r: 1.2, f: 0.4, s: 0.8 },
  { m: "Feb", t: 95, r: 1.8, f: 0.5, s: 1.0 },
  { m: "Mar", t: 88, r: 1.4, f: 0.6, s: 0.9 },
  { m: "Apr", t: 112, r: 2.1, f: 0.7, s: 1.2 },
  { m: "May", t: 128, r: 2.6, f: 0.8, s: 1.4 },
  { m: "Jun", t: 142, r: 3.1, f: 0.9, s: 1.6 },
];

const metrics = [
  { icon: <DollarSign className="w-6 h-6" />, label: "Treasury Value", value: "$142M", change: "+12.4%", color: "#3B82F6" },
  { icon: <TrendingUp className="w-6 h-6" />, label: "Revenue Generated", value: "$3.21M", change: "+18.7%", color: "#39FF14" },
  { icon: <BarChart2 className="w-6 h-6" />, label: "Protocol Fees", value: "$892K", change: "+9.2%", color: "#8B5CF6" },
  { icon: <Layers className="w-6 h-6" />, label: "Staking Rewards", value: "$1.58M", change: "+24.1%", color: "#06B6D4" },
];

const tooltipStyle = {
  contentStyle: { background: "#070b20", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 12 },
  labelStyle: { color: "#94a3b8" },
};

export default function TreasuryOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 to-violet-950/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3 block">Treasury Overview</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
            Financial Transparency
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Full on-chain transparency. Every dollar of treasury allocation is verifiable in real-time.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${m.color}20`, color: m.color, border: `1px solid ${m.color}30` }}
              >
                {m.icon}
              </div>
              <div className="text-xl font-bold text-white font-display">{m.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
              <div className="text-xs text-green-400 font-semibold mt-1">{m.change} this month</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Treasury Value */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-slate-400">Treasury Value</div>
                <div className="text-2xl font-bold text-white font-display">$142M</div>
              </div>
              <span className="text-sm text-green-400">↑ +12.4%</span>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <AreaChart data={treasuryData}>
                  <defs>
                    <linearGradient id="tGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="m" tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip {...tooltipStyle} formatter={(v: ValueType) => [`$${v ?? 0}M`, "Treasury"]} />
                  <Area type="monotone" dataKey="t" stroke="#3B82F6" strokeWidth={2} fill="url(#tGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Multi-metric chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-slate-400">Revenue Streams</div>
                <div className="text-2xl font-bold text-white font-display">$5.7M</div>
              </div>
              <div className="flex gap-3 text-xs">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-400" />Revenue</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-violet-400" />Fees</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-cyan-400" />Staking</div>
              </div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <AreaChart data={treasuryData}>
                  <defs>
                    <linearGradient id="rGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#39FF14" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="fGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="sGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="m" tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip {...tooltipStyle} />
                  <Area type="monotone" dataKey="r" stroke="#39FF14" strokeWidth={2} fill="url(#rGrad)" name="Revenue" />
                  <Area type="monotone" dataKey="f" stroke="#8B5CF6" strokeWidth={2} fill="url(#fGrad)" name="Fees" />
                  <Area type="monotone" dataKey="s" stroke="#06B6D4" strokeWidth={2} fill="url(#sGrad)" name="Staking" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
