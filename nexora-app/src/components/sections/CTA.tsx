"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wallet } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-violet-950/50 to-blue-950/40" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      {/* Border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full neon-border">
            <div className="live-dot" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
              Web3 Revolution Starts Here
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl lg:text-7xl font-bold font-display leading-tight">
            <span className="text-white">Join the Future</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              of Web3 Today
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Build, scale, and innovate with Nexora. Join 25,000+ developers and enterprises already powering the decentralized future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: "0 0 50px rgba(99,102,241,0.7)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-10 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 border border-white/10 text-base shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-10 py-4 rounded-xl font-bold text-white glass border border-white/15 hover:border-cyan-500/40 text-base transition-all duration-300"
            >
              <Wallet className="w-5 h-5 text-cyan-400" />
              Connect Wallet
            </motion.button>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            {[
              { value: "25K+", label: "Builders" },
              { value: "$8.46B", label: "TVL" },
              { value: "99.99%", label: "Uptime" },
              { value: "25+", label: "Chains" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold font-display bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
