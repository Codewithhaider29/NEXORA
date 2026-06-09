"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Activity,
  Shield,
  Zap,
  Globe,
  Database,
  Lock,
} from "lucide-react";

export default function Hero() {
  // Simulate live futuristic data fluctuating
  const [tps, setTps] = useState(42590);
  const [latency, setLatency] = useState(12.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setTps((prev) => prev + Math.floor(Math.random() * 500) - 250);
      setLatency((prev) =>
        Number((prev + (Math.random() * 0.4 - 0.2)).toFixed(1)),
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-[#02040A] text-white selection:bg-cyan-500/30"
    >
      {/* --- Ambient Background Systems --- */}
      {/* Hex/Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      {/* Scanning Laser Line */}
      <motion.div
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent shadow-[0_0_15px_rgba(0,243,255,0.3)] z-0 pointer-events-none"
      />

      {/* Massive Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          {/* --- Left Column: Core Pitch --- */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Sci-Fi Status Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-2 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,243,255,0.2)]"
              >
                <span className="flex h-2.5 w-2.5 ml-1 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_rgba(0,243,255,0.8)]"></span>
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-cyan-300 pr-3">
                  NEXORA // AI-CORE ACTIVE
                </span>
              </motion.div>

              {/* Bold Futuristic Headline */}
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold font-display leading-[1.05] tracking-tight">
                Architecting the <br />
                <span className="relative inline-block mt-2">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                    Web3 Frontier
                  </span>
                </span>
              </h1>

              {/* Technical Description */}
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
                An enterprise-grade, AI-driven infrastructure matrix engineered
                to build, scale, and secure next-generation decentralized
                ecosystems.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-5 items-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 px-8 py-4 bg-transparent overflow-hidden border border-cyan-500/30 hover:border-cyan-400 transition-colors"
              >
                {/* Button background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                <span className="relative text-sm font-mono tracking-widest uppercase text-cyan-50">
                  Initialize_
                </span>
                <ArrowRight className="relative w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />

                {/* Sci-fi corner cuts */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
              </motion.button>

              <motion.button
                whileHover={{ opacity: 1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-6 py-4 opacity-70 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center">
                  <Terminal className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <span className="text-sm font-mono tracking-wider uppercase text-slate-300">
                  View Docs
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* --- Right Column: Futuristic Data Core HUD --- */}
          <div className="lg:col-span-6 relative hidden lg:flex justify-center items-center h-[600px] w-full">
            {/* Center Core Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px] animate-pulse" />

            {/* Rotating SVG Rings (Pure 2D) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] opacity-30"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#00f3ff"
                  strokeWidth="0.2"
                  strokeDasharray="4 2 1 2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#b026ff"
                  strokeWidth="0.1"
                  strokeDasharray="10 5"
                />
              </motion.svg>

              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] opacity-40"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#0066ff"
                  strokeWidth="0.3"
                  strokeDasharray="2 8"
                />
                <path
                  d="M 50 2 L 50 8 M 50 98 L 50 92 M 2 50 L 8 50 M 98 50 L 92 50"
                  stroke="#00f3ff"
                  strokeWidth="0.5"
                />
              </motion.svg>
            </div>

            {/* Central HUD Data Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="relative z-20 w-56 h-56 rounded-full border border-cyan-500/30 bg-[#02040A]/80 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,243,255,0.1)]"
            >
              {/* Inner crosshair */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-full h-[1px] bg-cyan-400" />
                <div className="absolute h-full w-[1px] bg-cyan-400" />
              </div>

              <Globe className="w-8 h-8 text-cyan-400 mb-2 opacity-80" />
              <div className="text-2xl font-mono font-bold text-white tracking-widest">
                {tps.toLocaleString()}
              </div>
              <div className="text-[9px] font-mono text-cyan-500 tracking-[0.2em] uppercase mt-1">
                Global TPS
              </div>
            </motion.div>

            {/* Floating Panel 1: Security Shield */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[15%] left-[5%] z-30 w-48 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-xl p-4"
              style={{
                clipPath:
                  "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
              }} // Futuristic angled cut
            >
              <div className="flex items-center gap-3 border-b border-white/[0.05] pb-3 mb-3">
                <div className="w-8 h-8 rounded-none border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-500 tracking-widest uppercase">
                    Protocol Status
                  </div>
                  <div className="text-xs font-bold text-emerald-400 font-mono">
                    SECURED
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-[10px] font-mono text-slate-400">
                  Threat blocks
                </div>
                <div className="text-sm font-mono text-white">12.4M</div>
              </div>
            </motion.div>

            {/* Floating Panel 2: Latency Monitor */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[15%] right-[0%] z-30 w-52 bg-[#02040A]/60 border-l-2 border-violet-500 backdrop-blur-xl p-4 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-violet-400" />
                  <span className="text-[10px] font-mono text-violet-300 tracking-widest uppercase">
                    Latency
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-white">
                  {latency.toFixed(1)}ms
                </span>
              </div>

              {/* Live sparkline simulation */}
              <div className="flex items-end gap-1 h-8">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: ["20%", `${Math.random() * 80 + 20}%`, "20%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: Math.random() * 2 + 1,
                      ease: "easeInOut",
                    }}
                    className="flex-1 bg-violet-500/50 rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Panel 3: Active Nodes */}
            <motion.div
              animate={{ x: [5, -5, 5] }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-[60%] left-[-5%] z-30 w-40 bg-[#02040A]/80 border border-white/5 backdrop-blur-md p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">
                  Active Nodes
                </span>
              </div>
              <div className="text-lg font-mono font-bold text-white mb-2">
                1,042
              </div>
              {/* Mini progress bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-blue-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
