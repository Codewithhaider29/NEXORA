"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  {
    quarter: "Q1 2024",
    title: "Platform Launch",
    desc: "Core infrastructure, Ethereum & Solana support, React SDK v1.0",
    items: ["Mainnet launch", "10K users onboarded", "SDK v1.0 released"],
    status: "completed",
    color: "#3B82F6",
  },
  {
    quarter: "Q2 2024",
    title: "AI Expansion",
    desc: "GPT-4o integration, predictive analytics, smart contract auditing AI",
    items: ["AI Command Center", "Threat detection live", "50K users milestone"],
    status: "completed",
    color: "#8B5CF6",
  },
  {
    quarter: "Q3 2024",
    title: "Cross-Chain Upgrade",
    desc: "25+ chains, universal bridge, cross-chain analytics dashboard",
    items: ["25 chains supported", "Bridge 500+ assets", "150K users reached"],
    status: "current",
    color: "#06B6D4",
  },
  {
    quarter: "Q4 2024",
    title: "Global Scaling",
    desc: "Enterprise tier, regional data centers, DAO governance v2",
    items: ["50+ data centers", "Enterprise SLA 99.99%", "1M users goal"],
    status: "upcoming",
    color: "#39FF14",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">Roadmap</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">Our Path Forward</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Shipping fast, building trust. Here's where we've been and where we're headed.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px hidden lg:block" style={{ background: "linear-gradient(to bottom, #3B82F6, #8B5CF6, #06B6D4, #39FF14)" }} />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Card */}
                <div className={`w-full lg:w-5/12 ${i % 2 !== 0 ? "lg:text-right" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 relative overflow-hidden"
                    style={{ borderColor: `${m.color}25` }}
                  >
                    {/* Status badge */}
                    <div
                      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold mb-3 ${
                        m.status === "completed" ? "bg-green-500/15 text-green-400 border border-green-500/20" :
                        m.status === "current" ? "bg-blue-500/15 text-blue-400 border border-blue-500/20" :
                        "bg-white/5 text-slate-400 border border-white/10"
                      }`}
                    >
                      {m.status === "completed" && <CheckCircle2 className="w-3 h-3" />}
                      {m.status === "current" && <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />}
                      {m.status === "upcoming" && <div className="w-2 h-2 rounded-full bg-slate-400" />}
                      {m.status === "completed" ? "Completed" : m.status === "current" ? "In Progress" : "Upcoming"}
                    </div>

                    <div className="text-xs font-mono font-semibold mb-1" style={{ color: m.color }}>{m.quarter}</div>
                    <div className="text-xl font-bold text-white font-display mb-2">{m.title}</div>
                    <div className="text-sm text-slate-400 mb-4">{m.desc}</div>

                    <ul className={`space-y-1.5 ${i % 2 !== 0 ? "items-end" : ""}`}>
                      {m.items.map((item) => (
                        <li key={item} className={`flex items-center gap-2 text-xs text-slate-300 ${i % 2 !== 0 ? "justify-end" : ""}`}>
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: m.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Color accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: m.color, opacity: 0.3 }} />
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-5 h-5 rounded-full border-4 flex-shrink-0"
                    style={{ borderColor: m.color, background: m.status === "current" ? m.color : "#050816", boxShadow: `0 0 15px ${m.color}60` }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
