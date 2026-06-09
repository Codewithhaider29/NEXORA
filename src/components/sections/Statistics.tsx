"use client";

import { motion } from "framer-motion";
import {
  Users,
  Activity,
  DollarSign,
  Link,
  Shield,
  TrendingUp,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: 1.2,
    suffix: "M+",
    label: "Active Users",
    sublabel: "+34.2% from last month",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.3)",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    value: 150,
    suffix: "M+",
    label: "Transactions",
    sublabel: "Processed this month",
    color: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    value: 8.46,
    prefix: "$",
    suffix: "B",
    label: "Total Value Locked",
    sublabel: "Across all chains",
    color: "from-green-500 to-emerald-500",
    glow: "rgba(34,197,94,0.3)",
    decimals: 2,
  },
  {
    icon: <Link className="w-6 h-6" />,
    value: 25,
    suffix: "+",
    label: "Supported Chains",
    sublabel: "And growing daily",
    color: "from-orange-500 to-amber-500",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    value: 99.99,
    suffix: "%",
    label: "Uptime",
    sublabel: "All systems operational",
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(6,182,212,0.3)",
    decimals: 2,
  },
];

export default function Statistics() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-white/[0.05]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[#050816] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050816] to-[#050816] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Live Network Metrics
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Trusted at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Scale
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade performance metrics that demonstrate our platform's
            unwavering reliability, security, and continuous global growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -5 }}
              className="relative group rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
            >
              {/* Dynamic Top Glowing Border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Ambient Radial Hover Glow */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: stat.glow.replace("0.3", "1") }}
              />

              <div className="p-6">
                {/* Top Row: Label & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                    {stat.label}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.05] flex items-center justify-center text-slate-300 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-lg`}
                    style={{ boxShadow: `0 0 20px ${stat.glow}` }}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Middle: Huge Value */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold font-display bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-sm`}
                    >
                      <AnimatedCounter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals ?? 0}
                        duration={2}
                      />
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Sublabel with Trend */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                  <TrendingUp className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  <span className="text-xs font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
                    {stat.sublabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
