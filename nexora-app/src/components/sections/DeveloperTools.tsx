"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Terminal as TermIcon, LayoutDashboard } from "lucide-react";

const tools = [
  {
    icon: <Code2 className="w-7 h-7" />,
    label: "React Hooks",
    desc: "Drop-in hooks for wallet connection, transactions, and real-time blockchain state.",
    color: "#61DAFB",
    gradient: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    tags: ["useWallet", "useChain", "useContract"],
  },
  {
    icon: <Globe className="w-7 h-7" />,
    label: "Web3 Libraries",
    desc: "Native compatibility with ethers.js, viem, wagmi and web3.js with enhanced features.",
    color: "#8B5CF6",
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
    tags: ["ethers.js", "viem", "wagmi"],
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    label: "Mobile SDK",
    desc: "Build powerful iOS and Android Web3 apps with our React Native and Flutter SDKs.",
    color: "#39FF14",
    gradient: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    tags: ["React Native", "Flutter", "iOS"],
  },
  {
    icon: <TermIcon className="w-7 h-7" />,
    label: "CLI Tools",
    desc: "Automate deployments, run simulations, and manage projects from the command line.",
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/20",
    tags: ["nexora deploy", "nexora sim", "nexora audit"],
  },
  {
    icon: <LayoutDashboard className="w-7 h-7" />,
    label: "Dashboard API",
    desc: "Programmatic access to all analytics, metrics, and management capabilities.",
    color: "#EF4444",
    gradient: "from-red-500/20 to-pink-500/10",
    border: "border-red-500/20",
    tags: ["REST", "GraphQL", "WebSocket"],
  },
];

export default function DeveloperTools() {
  return (
    <section id="docs" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">Developer Tools</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">Everything You Need</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A complete toolkit so you can focus on building great products, not plumbing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card p-5 bg-gradient-to-br ${tool.gradient} ${tool.border} group cursor-pointer relative overflow-hidden`}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${tool.color}15, transparent 70%)` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${tool.color}20`, color: tool.color, border: `1px solid ${tool.color}30`, boxShadow: `0 0 20px ${tool.color}20` }}
              >
                {tool.icon}
              </div>

              <div className="text-base font-bold text-white mb-2 font-display">{tool.label}</div>
              <div className="text-xs text-slate-400 leading-relaxed mb-4">{tool.desc}</div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                    style={{
                      background: `${tool.color}15`,
                      color: tool.color,
                      border: `1px solid ${tool.color}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
