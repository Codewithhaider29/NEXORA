"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-violet-950/20 to-blue-950/20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">Video Showcase</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">See Nexora in Action</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Watch how top Web3 teams are building on Nexora.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden glass-card"
          style={{ boxShadow: "0 0 80px rgba(99,102,241,0.2)" }}
        >
          {/* Continuous looping video background */}
          <video
            src="/web3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* Gradient overlay so the floating cards stand out */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

          {/* Floating 3D effect elements */}
          <motion.div
            className="absolute top-12 left-12 w-48 h-48 glass rounded-2xl p-4 border border-white/10"
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="text-xs text-slate-400 mb-2">Total Value Locked</div>
            <div className="text-3xl font-bold text-white font-display">$8.46B</div>
            <div className="text-xs text-green-400 mt-1">↑ +12.4% today</div>
          </motion.div>

          <motion.div
            className="absolute bottom-16 right-12 w-52 h-36 glass rounded-2xl p-4 border border-white/10"
            animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          >
            <div className="text-xs text-slate-400 mb-2">Smart Contracts Deployed</div>
            <div className="text-2xl font-bold text-white font-display">2,847</div>
            <div className="text-xs text-blue-400 mt-1">All audited & verified</div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 mt-6"
        >
          Join 25,000+ builders already on Nexora
        </motion.p>
      </div>
    </section>
  );
}
