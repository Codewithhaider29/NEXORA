"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Bug, Globe, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Smart Contract Audits",
    desc: "Every contract deployed through Nexora undergoes rigorous automated and manual security reviews by top-tier auditors.",
    stat: "2,847 Audits",
    color: "#3B82F6",
    gradient: "from-blue-500/15 to-blue-500/5",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "256-bit Encryption",
    desc: "Military-grade AES-256 encryption protects all data at rest and in transit across our distributed infrastructure.",
    stat: "Zero Breaches",
    color: "#8B5CF6",
    gradient: "from-violet-500/15 to-violet-500/5",
  },
  {
    icon: <Bug className="w-8 h-8" />,
    title: "Bug Bounty Program",
    desc: "Our $5M bug bounty program incentivizes security researchers worldwide to help keep our platform safe.",
    stat: "$5M Rewards",
    color: "#EF4444",
    gradient: "from-red-500/15 to-red-500/5",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Decentralized Infrastructure",
    desc: "Distributed across 50+ data centers globally with no single point of failure and automated failover.",
    stat: "99.98% Uptime",
    color: "#39FF14",
    gradient: "from-green-500/15 to-green-500/5",
  },
];

const certifications = [
  "SOC 2 Type II", "ISO 27001", "GDPR Compliant", "CCPA Compliant",
  "PCI DSS Level 1", "NIST Framework",
];

export default function SecurityTrust() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">Security & Trust</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
            Security is Our Foundation
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Enterprise-grade security you can build on. We take security seriously so you don't have to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-card p-6 bg-gradient-to-b ${f.gradient} relative overflow-hidden group`}
              style={{ borderColor: `${f.color}25` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${f.color}20`, color: f.color, border: `1px solid ${f.color}30`, boxShadow: `0 0 25px ${f.color}20` }}
              >
                {f.icon}
              </div>
              <div className="font-bold text-white mb-2 text-lg font-display">{f.title}</div>
              <div className="text-xs text-slate-400 leading-relaxed mb-4">{f.desc}</div>
              <div
                className="text-sm font-bold font-mono"
                style={{ color: f.color }}
              >
                {f.stat}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${f.color}10, transparent 60%)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex items-center gap-3 shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-400" />
            <span className="text-sm font-semibold text-white">Certifications & Compliance</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1.5 glass rounded-lg text-xs font-semibold text-slate-300 border border-white/[0.07] hover:border-green-500/30 hover:text-green-300 transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
