"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid,
} from "recharts";

type ValueType = any;


const revenueData = [
  { d: "Mon", v: 2.1 }, { d: "Tue", v: 3.4 }, { d: "Wed", v: 2.8 },
  { d: "Thu", v: 4.2 }, { d: "Fri", v: 5.1 }, { d: "Sat", v: 3.8 }, { d: "Sun", v: 6.2 },
];
const txData = [
  { d: "Mon", v: 12000 }, { d: "Tue", v: 19000 }, { d: "Wed", v: 14000 },
  { d: "Thu", v: 22000 }, { d: "Fri", v: 18000 }, { d: "Sat", v: 11000 }, { d: "Sun", v: 25000 },
];
const usersData = [
  { m: "Jan", v: 8200 }, { m: "Feb", v: 11400 }, { m: "Mar", v: 9800 },
  { m: "Apr", v: 15200 }, { m: "May", v: 18600 }, { m: "Jun", v: 22400 },
];
const crossChainData = [
  { chain: "ETH→ARB", v: 3200 }, { chain: "SOL→ETH", v: 2800 }, { chain: "ARB→OP", v: 1900 },
  { chain: "ETH→BASE", v: 2400 }, { chain: "MATIC→ETH", v: 1600 },
];

const tabs = [
  { id: "revenue", label: "Revenue", value: "$3.21M", change: "+18.4%" },
  { id: "txns", label: "Transactions", value: "125.8K", change: "+12.1%" },
  { id: "users", label: "Users", value: "12.45M", change: "+28.3%" },
  { id: "crosschain", label: "Cross-Chain", value: "$12.4B", change: "+44.2%" },
];

const tooltipStyle = {
  contentStyle: { background: "#070b20", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 12 },
  labelStyle: { color: "#94a3b8" },
};

export default function AdvancedAnalytics() {
  const [active, setActive] = useState("revenue");

  const renderChart = () => {
    switch (active) {
      case "revenue":
        return (
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="d" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}M`} />
              <Tooltip {...tooltipStyle} formatter={(v: ValueType) => [`$${v ?? 0}M`, "Revenue"]} />
              <Area type="monotone" dataKey="v" stroke="#3B82F6" strokeWidth={2.5} fill="url(#revGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        );
      case "txns":
        return (
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <BarChart data={txData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="d" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
              <Tooltip {...tooltipStyle} formatter={(v: ValueType) => [Number(v ?? 0).toLocaleString(), "Transactions"]} />
              <Bar dataKey="v" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "users":
        return (
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <LineChart data={usersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="m" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(1)}K`} />
              <Tooltip {...tooltipStyle} formatter={(v: ValueType) => [Number(v ?? 0).toLocaleString(), "Users"]} />
              <Line type="monotone" dataKey="v" stroke="#06B6D4" strokeWidth={2.5} dot={{ fill: "#06B6D4", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case "crosschain":
        return (
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <BarChart data={crossChainData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis type="number" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
              <YAxis type="category" dataKey="chain" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} width={70} />
              <Tooltip {...tooltipStyle} formatter={(v: ValueType) => [Number(v ?? 0).toLocaleString(), "Volume"]} />
              <Bar dataKey="v" fill="#39FF14" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">Advanced Analytics</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">Data-Driven Decisions</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Interactive charts and deep analytics to understand your platform performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white/[0.03] rounded-xl w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === tab.id ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {active === tab.id && (
                  <motion.div
                    layoutId="analyticsTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-violet-600/80 rounded-lg border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active tab stats */}
          <AnimatePresence mode="wait">
            {tabs.map((tab) =>
              tab.id === active ? (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 flex items-end gap-4"
                >
                  <div className="text-4xl font-bold font-display text-white">{tab.value}</div>
                  <div className="text-green-400 text-sm font-semibold mb-1.5">{tab.change} this month</div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Chart */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-64"
            >
              {renderChart()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
