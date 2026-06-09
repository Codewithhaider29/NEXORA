"use client";

import { motion } from "framer-motion";
import { Brain, Globe2, Zap, Shield, Vote, BarChart2 } from "lucide-react";

const bento = [
  {
    id: "ai",
    title: "AI Engine",
    desc: "Predictive analytics powered by GPT-4o, processing 10B+ data points daily",
    icon: <Brain className="w-7 h-7" />,
    color: "#3B82F6",
    gradient: "from-blue-600/20 to-blue-600/5",
    size: "col-span-2 row-span-2",
    stat: "98.7%",
    statLabel: "accuracy",
  },
  {
    id: "multi",
    title: "Multi-Chain",
    desc: "25+ chains, one platform",
    icon: <Globe2 className="w-6 h-6" />,
    color: "#8B5CF6",
    gradient: "from-violet-600/20 to-violet-600/5",
    size: "col-span-1 row-span-1",
    stat: "25+",
    statLabel: "chains",
  },
  {
    id: "auto",
    title: "Automation",
    desc: "Smart triggers & workflows",
    icon: <Zap className="w-6 h-6" />,
    color: "#F59E0B",
    gradient: "from-amber-600/20 to-amber-600/5",
    size: "col-span-1 row-span-1",
    stat: "∞",
    statLabel: "rules",
  },
  {
    id: "sec",
    title: "Security",
    desc: "Zero-breach record since launch. SOC2 Type II & ISO 27001 certified enterprise infrastructure.",
    icon: <Shield className="w-7 h-7" />,
    color: "#39FF14",
    gradient: "from-green-600/20 to-green-600/5",
    size: "col-span-1 row-span-2",
    stat: "0",
    statLabel: "breaches",
  },
  {
    id: "gov",
    title: "Governance",
    desc: "DAO-powered decisions",
    icon: <Vote className="w-6 h-6" />,
    color: "#06B6D4",
    gradient: "from-cyan-600/20 to-cyan-600/5",
    size: "col-span-1 row-span-1",
    stat: "48K",
    statLabel: "voters",
  },
  {
    id: "analytics",
    title: "Analytics",
    desc: "Real-time deep insights",
    icon: <BarChart2 className="w-6 h-6" />,
    color: "#EF4444",
    gradient: "from-red-600/20 to-red-600/5",
    size: "col-span-1 row-span-1",
    stat: "1B+",
    statLabel: "events/day",
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3 block">Feature Highlights</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
            The Complete Web3 Stack
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Everything you need to build the next generation of decentralized applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {bento.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`glass-card p-6 bg-gradient-to-br ${item.gradient} ${item.size} relative overflow-hidden group cursor-pointer`}
              style={{ borderColor: `${item.color}20` }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: item.color }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}30` }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <div className="text-base font-bold text-white font-display mb-1">{item.title}</div>
              <div className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</div>

              {/* Stat */}
              <div className="absolute bottom-4 right-4 text-right">
                <div className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.stat}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">{item.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
