"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const companies = [
  { name: "OpenAI", color: "#10A37F" },
  { name: "Accenture", color: "#A100FF" },
  { name: "Kube", color: "#326CE5" },
  { name: "Coinbase", color: "#0052FF" },
  { name: "UNIEX", color: "#FF007A" },
  { name: "Solana Labs", color: "#9945FF" },
  { name: "Polygon Labs", color: "#8247E5" },
  { name: "Arbitrum", color: "#28A0F0" },
];

export default function TrustedBuilders() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">Trusted By Builders</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
            World's Leading Teams Build on Nexora
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            From ambitious startups to Fortune 500 enterprises — everyone builds on Nexora.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="glass-card p-5 flex items-center gap-3 group cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${company.color}20`,
                  border: `1px solid ${company.color}30`,
                  color: company.color,
                }}
              >
                <Building2 className="w-5 h-5" />
              </div>
              <div className="font-semibold text-slate-300 group-hover:text-white transition-colors text-sm font-display">
                {company.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "200+", label: "Enterprise Clients" },
            { value: "95%", label: "Customer Retention" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "$2B+", label: "Value Secured" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white font-display">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
