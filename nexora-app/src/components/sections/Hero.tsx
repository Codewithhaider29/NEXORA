"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Cpu,
  Activity,
  Wallet,
} from "lucide-react";



const floatingCards = [
  {
    icon: <Wallet className="w-4 h-4 text-green-400" />,
    label: "Wallet Connected",
    value: "0x4f2...8b3a",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    top: "8%",
    left: "-5%",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-blue-400" />,
    label: "TVL",
    value: "$8.46B",
    change: "+12.4%",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    top: "30%",
    right: "-5%",
  },
  {
    icon: <Cpu className="w-4 h-4 text-violet-400" />,
    label: "Smart Contracts",
    value: "2.4M+",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
    bottom: "30%",
    left: "-8%",
  },
  {
    icon: <Activity className="w-4 h-4 text-cyan-400" />,
    label: "Transactions",
    value: "150M+",
    color: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/20",
    bottom: "10%",
    right: "-4%",
  },
];

// Replaced initials and background colors with premium UI avatar images
const builders = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Sarah",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Alex",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Maria",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Liam",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Chloe",
  },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25) 0%, rgba(5,8,22,0) 70%), #050816",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh] py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border"
            >
              <span className="live-dot" />
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
                AI-Powered · Secure · Decentralized
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight"
              >
                <span className="text-white">Powering the</span>
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    Future of Web3
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-slate-400 max-w-lg leading-relaxed mt-6"
              >
                AI-powered infrastructure platform for building, scaling, and
                securing decentralized applications with enterprise-grade
                reliability.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(99,102,241,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 glass border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <Play className="w-4 h-4 text-blue-400" />
                Explore Platform
              </motion.button>
            </motion.div>

            {/* Social Proof with Human Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {builders.map((b, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#050816] overflow-hidden bg-slate-800 shadow-lg relative"
                  >
                    <img
                      src={b.image}
                      alt={`${b.name}'s avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {"★".repeat(5)}
                </div>
                <p className="text-sm text-slate-400">
                  <span className="text-white font-semibold">25,000+</span>{" "}
                  builders worldwide
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right – 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.4, 0, 0.2, 1] }}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative h-[600px] hidden lg:flex items-center justify-center"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-violet-600/20 via-blue-600/10 to-transparent blur-2xl" />

            {/* Video Canvas */}
            <div className="relative w-full h-full">
              <div className="absolute inset-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.2)] bg-[#050816]/50 backdrop-blur-sm">
                <video
                  src="/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 mix-blend-screen"
                />
                {/* Subtle overlay for better blending */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-violet-600/10 pointer-events-none" />
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  className={`absolute glass-card bg-gradient-to-br ${card.color} ${card.border} px-4 py-3 min-w-[140px] pointer-events-none z-10`}
                  style={{
                    top: card.top,
                    right: card.right,
                    bottom: card.bottom,
                    left: card.left,
                    animation: `float ${6 + i * 0.5}s ease-in-out ${i * 0.7}s infinite`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {card.icon}
                    <span className="text-xs text-slate-400">{card.label}</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    {card.value}
                  </div>
                  {card.change && (
                    <div className="text-xs text-green-400 font-medium">
                      {card.change}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
