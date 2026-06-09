"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield } from "lucide-react";

const scanLines = [
  { text: "> Initializing Nexora Network Scanner v3.2.1...", delay: 0, color: "#39FF14" },
  { text: "> Scanning network topology...", delay: 0.5, color: "#94A3B8" },
  { text: "> Analyzing smart contracts [████████████░░░] 78%", delay: 1.0, color: "#94A3B8" },
  { text: "> Checking security protocols...", delay: 1.5, color: "#94A3B8" },
  { text: "> Running vulnerability assessment...", delay: 2.0, color: "#94A3B8" },
  { text: "> Cross-referencing threat database...", delay: 2.5, color: "#94A3B8" },
  { text: "> Verifying cryptographic signatures...", delay: 3.0, color: "#94A3B8" },
  { text: "> Scanning mempool for anomalies...", delay: 3.5, color: "#94A3B8" },
  { text: "", delay: 4.0, color: "#39FF14" },
  { text: "╔══════════════════════════════════════╗", delay: 4.2, color: "#39FF14" },
  { text: "║        SCAN COMPLETE - SECURED        ║", delay: 4.4, color: "#39FF14" },
  { text: "╚══════════════════════════════════════╝", delay: 4.6, color: "#39FF14" },
  { text: "", delay: 4.8, color: "" },
  { text: "  Risk Score:      2.1%  ✓ LOW RISK", delay: 5.0, color: "#39FF14" },
  { text: "  Vulnerabilities: 0 Critical, 1 Low", delay: 5.2, color: "#39FF14" },
  { text: "  Smart Contracts: 847 Verified", delay: 5.4, color: "#39FF14" },
  { text: "  Nodes Checked:   10,420/10,420", delay: 5.6, color: "#39FF14" },
  { text: "  Network Health:  99.98% Operational", delay: 5.8, color: "#39FF14" },
  { text: "", delay: 6.0, color: "" },
  { text: "> All systems secure. Ready for deployment.", delay: 6.2, color: "#06B6D4" },
];

export default function NetworkScanner() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    setIsRunning(true);
    let timeouts: NodeJS.Timeout[] = [];
    scanLines.forEach((_, i) => {
      const t = setTimeout(() => setVisibleLines(i + 1), scanLines[i].delay * 1000);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [inView]);

  const restart = () => {
    setVisibleLines(0);
    setIsRunning(false);
    setTimeout(() => {
      setIsRunning(true);
      scanLines.forEach((_, i) => {
        setTimeout(() => setVisibleLines(i + 1), scanLines[i].delay * 1000);
      });
    }, 100);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-xs font-semibold text-green-400 uppercase tracking-widest">Network Scanner</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
              Real-Time Security{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Analysis
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Our advanced network scanner continuously monitors all on-chain activity, flagging threats before they become exploits.
            </p>

            {/* Security badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Smart Contract Audits", value: "2,847", color: "#39FF14" },
                { label: "Threats Blocked", value: "14,200+", color: "#EF4444" },
                { label: "Nodes Monitored", value: "10,420", color: "#06B6D4" },
                { label: "Uptime", value: "99.98%", color: "#8B5CF6" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4">
                  <div className="text-xl font-bold font-mono" style={{ color: item.color }}>
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 glass-card p-4">
              <Shield className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-sm font-semibold text-white">SOC 2 Type II Certified</div>
                <div className="text-xs text-slate-400">Enterprise-grade security compliance</div>
              </div>
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
            style={{ border: "1px solid rgba(57,255,20,0.15)", boxShadow: "0 0 30px rgba(57,255,20,0.05)" }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/30 border-b border-green-500/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400 font-mono font-semibold">nexora@security:~$ scan --full</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
            </div>

            {/* Scan line overlay */}
            <div className="relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-20 z-10"
                style={{
                  background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57,255,20,0.03) 2px, rgba(57,255,20,0.03) 4px)",
                }}
              />
              {isRunning && (
                <div
                  className="absolute left-0 right-0 h-8 bg-gradient-to-b from-green-400/10 to-transparent z-20 pointer-events-none animate-scan"
                />
              )}

              {/* Terminal content */}
              <div className="p-5 font-mono text-xs leading-6 min-h-[380px] bg-[rgba(0,0,0,0.4)]">
                {scanLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    style={{ color: line.color || "#39FF14" }}
                  >
                    {line.text || "\u00A0"}
                  </motion.div>
                ))}
                {visibleLines < scanLines.length && (
                  <span className="text-green-400 animate-blink">█</span>
                )}
              </div>
            </div>

            {/* Run Again */}
            <div className="px-4 py-3 border-t border-green-500/10 flex justify-between items-center">
              <span className="text-xs text-slate-600 font-mono">Last scan: just now</span>
              <button
                onClick={restart}
                className="text-xs text-green-400 hover:text-green-300 font-mono transition-colors"
              >
                Run Again →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
