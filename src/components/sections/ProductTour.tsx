"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, BarChart2, Wallet, Users, Shield, ChevronRight } from "lucide-react";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: <LayoutDashboard className="w-4 h-4" />,
    content: {
      title: "Platform Overview",
      metric: "$2,456,799,123",
      sublabel: "Total Volume Today",
      items: [
        { label: "Aave", value: "$892M", change: "+12.3%", color: "#B6509E" },
        { label: "Uniswap", value: "$634M", change: "+8.7%", color: "#FF007A" },
        { label: "Compound", value: "$411M", change: "+5.2%", color: "#00D395" },
        { label: "MakerDAO", value: "$312M", change: "+3.1%", color: "#F4B731" },
      ],
    },
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <BarChart2 className="w-4 h-4" />,
    content: {
      title: "Chain Analytics",
      metric: "12,586,064",
      sublabel: "Transactions Today",
      items: [
        { label: "Ethereum", value: "4.2M", change: "+15%", color: "#627EEA" },
        { label: "Solana", value: "3.8M", change: "+22%", color: "#9945FF" },
        { label: "Arbitrum", value: "2.1M", change: "+18%", color: "#28A0F0" },
        { label: "Polygon", value: "1.6M", change: "+9%", color: "#8247E5" },
      ],
    },
  },
  {
    id: "wallets",
    label: "Wallets",
    icon: <Wallet className="w-4 h-4" />,
    content: {
      title: "Connected Wallets",
      metric: "1,248,923",
      sublabel: "Active Wallets",
      items: [
        { label: "MetaMask", value: "48%", change: "+5%", color: "#F6851B" },
        { label: "Phantom", value: "24%", change: "+12%", color: "#AB9FF2" },
        { label: "WalletConnect", value: "18%", change: "+8%", color: "#3B99FC" },
        { label: "Coinbase", value: "10%", change: "+3%", color: "#0052FF" },
      ],
    },
  },
  {
    id: "governance",
    label: "Governance",
    icon: <Users className="w-4 h-4" />,
    content: {
      title: "Active Proposals",
      metric: "42",
      sublabel: "Pending Votes",
      items: [
        { label: "NXR-142: Fee Reduction", value: "78%", change: "In favor", color: "#39FF14" },
        { label: "NXR-141: Cross-chain Bridge", value: "65%", change: "In favor", color: "#39FF14" },
        { label: "NXR-140: Treasury Alloc", value: "52%", change: "In favor", color: "#39FF14" },
        { label: "NXR-139: Security Audit", value: "91%", change: "Passed", color: "#06B6D4" },
      ],
    },
  },
  {
    id: "security",
    label: "Security",
    icon: <Shield className="w-4 h-4" />,
    content: {
      title: "Security Score",
      metric: "98.2 / 100",
      sublabel: "Enterprise Security Rating",
      items: [
        { label: "Smart Contract Audits", value: "2,847", change: "All Clear", color: "#39FF14" },
        { label: "Vulnerabilities Found", value: "0", change: "Critical", color: "#39FF14" },
        { label: "Uptime", value: "99.98%", change: "30-day avg", color: "#06B6D4" },
        { label: "Response Time", value: "< 2ms", change: "P99", color: "#8B5CF6" },
      ],
    },
  },
];

export default function ProductTour() {
  const [active, setActive] = useState("overview");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-16 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3 block">Product Tour</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">See It in Action</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto px-4 text-sm sm:text-base">
            Explore Nexora's powerful dashboard features through our interactive preview.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
          style={{ boxShadow: "0 0 60px rgba(99,102,241,0.1)" }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 bg-white/[0.02] border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-2 sm:mx-4 px-3 sm:px-4 py-1 bg-white/[0.04] rounded-lg text-[10px] sm:text-xs text-slate-500 font-mono text-center truncate">
              app.nexora.io/dashboard
            </div>
          </div>

          {/* Dashboard layout */}
          <div className="flex flex-col md:flex-row">
            {/* Sidebar tabs */}
            <div className="w-full md:w-48 bg-black/20 border-b md:border-b-0 md:border-r border-white/[0.05] p-2 sm:p-3 flex overflow-x-auto md:block space-x-2 md:space-x-0 md:space-y-1 custom-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex-shrink-0 md:w-full flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:py-2.5 rounded-lg text-xs font-medium transition-all duration-200 text-left ${
                    active === tab.id
                      ? "bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-white border border-blue-500/20"
                      : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"
                  }`}
                >
                  {tab.icon}
                  <span className="whitespace-nowrap">{tab.label}</span>
                  {active === tab.id && <ChevronRight className="hidden md:block w-3 h-3 ml-auto" />}
                </button>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-4 sm:p-6 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <div className="text-[10px] sm:text-xs text-slate-500 mb-1">{activeTab.content.sublabel}</div>
                      <div className="text-2xl sm:text-3xl font-bold font-display text-white">{activeTab.content.metric}</div>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white bg-white/[0.05] px-3 py-1 rounded-full w-fit">{activeTab.content.title}</div>
                  </div>

                  {/* Simulated chart bar */}
                  <div className="h-20 sm:h-28 flex items-end gap-1 sm:gap-1.5 mb-6">
                    {Array.from({ length: 20 }, (_, i) => {
                      const h = 20 + Math.random() * 80;
                      return (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-blue-600/60 to-violet-600/60"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.03, duration: 0.5 }}
                        />
                      );
                    })}
                  </div>

                  {/* Table */}
                  <div className="space-y-2">
                    {activeTab.content.items.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
                      >
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                        <div className="text-xs text-slate-300 flex-1 min-w-[100px]">{item.label}</div>
                        <div className="text-xs font-bold text-white w-1/4 sm:w-auto text-right sm:text-left">{item.value}</div>
                        <div className="text-[10px] sm:text-xs text-green-400 w-1/4 sm:w-auto text-right">{item.change}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="btn-primary px-8 py-3 rounded-xl text-sm font-semibold">
            View Full Dashboard →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
