"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Cpu,
  Activity,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
  Stars,
  Hexagon,
  Globe,
  Command,
  BarChart3,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

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

const stats = [
  { value: "2.4M", label: "Transactions/sec", icon: Zap },
  { value: "99.99%", label: "Uptime SLA", icon: Shield },
  { value: "150+", label: "Ecosystem DApps", icon: Globe },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      setMousePosition({
        x: (clientX / innerWidth) * 2 - 1,
        y: (clientY / innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0F]"
    >
      {/* Custom Cursor Follower - CSS Only */}
      <div
        className="fixed w-64 h-64 rounded-full pointer-events-none z-0 mix-blend-screen cursor-follower"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Animated Particle Field - Pure CSS */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-gradient-to-b from-blue-400 to-violet-600 rounded-full particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}



      {/* Ambient Light Orbs */}
      <div
        className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none z-0 orb-1"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none z-0 orb-2"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Core Pitch */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-8">
            <div
              className="space-y-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* Animated Neon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-xl relative overflow-hidden group cursor-default neon-badge">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 shimmer" />
                <Stars className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-medium tracking-wider text-cyan-300 uppercase">
                  Next-Gen Infrastructure
                </span>
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              </div>

              {/* Dynamic Headline with Gradient Animation */}
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
                <span className="text-white">Building the</span>
                <br />
                <span className="relative inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent bg-[length:200%_auto] gradient-shift">
                  Decentralized
                </span>
                <br />
                <span className="text-white">Future</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-400/90 max-w-xl leading-relaxed font-light">
                Experience infrastructure that anticipates your needs.
                <span className="text-white/70 font-normal">
                  {" "}
                  AI-optimized routing
                </span>
                ,
                <span className="text-cyan-400/80 font-normal">
                  {" "}
                  zero-trust security
                </span>
                , and
                <span className="text-violet-400/80 font-normal">
                  {" "}
                  quantum-ready protocols
                </span>
                — all engineered for the next generation of the internet.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div
              className="flex flex-wrap gap-4 items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              {/* Primary CTA - Glassmorphism Button */}
              <button className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden cta-primary hover:scale-105 active:scale-95 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 gradient-rotate" />
                <div className="absolute inset-[1px] bg-[#0A0A0F] rounded-2xl" />
                <span className="relative flex items-center gap-2">
                  Initialize Node
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative" />
                </span>
              </button>

              {/* Secondary CTA - Neon Border */}
              <button className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-slate-300 border border-slate-700/50 bg-slate-800/10 backdrop-blur-xl hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300 hover:scale-105 active:scale-95">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Command className="w-4 h-4 text-blue-400" />
                </div>
                View Documentation
              </button>
            </div>

            {/* Stats Grid */}
            <div
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/50"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.value}
                  className="relative group cursor-default hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
                    <stat.icon className="w-5 h-5 text-blue-400 mb-2" />
                    <div className="text-2xl font-bold text-white font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Futuristic Dashboard */}
          <div className="lg:col-span-6 xl:col-span-5 relative hidden lg:flex justify-center items-center">
            {/* Holographic Dashboard Container */}
            <div
              className="relative w-full max-w-[460px] dashboard-container"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* Floating Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl glow-pulse" />

              {/* Main Dashboard Card */}
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
                {/* Dashboard Header */}
                <div className="px-6 py-4 border-b border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="h-4 w-px bg-slate-700/50" />
                    <div className="flex items-center gap-2">
                      <Hexagon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono text-slate-400">
                        nexus-core-v3.0
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400 font-mono uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Network Health Visualization */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        Network Health
                      </span>
                      <span className="text-xs font-mono text-green-400">
                        98.7%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 rounded-full progress-bar"
                        style={{ width: "98.7%" }}
                      />
                    </div>
                  </div>

                  {/* Real-time Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        icon: Activity,
                        label: "Throughput",
                        value: "42.5K TPS",
                        change: "+12.3%",
                      },
                      {
                        icon: BarChart3,
                        label: "Gas Fee",
                        value: "0.0012 ETH",
                        change: "-5.2%",
                      },
                    ].map((metric, i) => (
                      <div
                        key={metric.label}
                        className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm group hover:border-blue-500/30 transition-all hover:scale-105 duration-300"
                        style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                      >
                        <metric.icon className="w-4 h-4 text-blue-400 mb-2" />
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                          {metric.label}
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-white font-mono">
                            {metric.value}
                          </span>
                          <span
                            className={`text-xs font-medium ${
                              metric.change.startsWith("+")
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live Node Status */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        Active Nodes
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        128/128
                      </span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { region: "US-East", latency: "4ms", peers: 23 },
                        { region: "EU-West", latency: "8ms", peers: 18 },
                        { region: "APAC", latency: "12ms", peers: 15 },
                      ].map((node, i) => (
                        <div
                          key={node.region}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/20 transition-all hover:translate-x-1 cursor-pointer"
                          style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                        >
                          <div className="flex items-center gap-3">
                            <Cpu className="w-4 h-4 text-slate-500" />
                            <span className="text-sm text-slate-300 font-mono">
                              {node.region}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-slate-500 font-mono">
                              {node.latency}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-green-400" />
                              <span className="text-[10px] text-green-400 font-medium">
                                {node.peers} peers
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Cards */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-cyan-500/30 backdrop-blur-xl rounded-2xl p-4 shadow-2xl shadow-cyan-500/20 floating-card-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-400 font-medium">
                      Smart Contract
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      0x7F...4A21
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <span className="text-[10px] text-green-400">
                    Deployed 2s ago
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-violet-500/30 backdrop-blur-xl rounded-2xl p-3 shadow-2xl shadow-violet-500/20 floating-card-2">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-violet-400" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-violet-400 animate-ping" />
                  </div>
                  <span className="text-xs font-medium text-violet-200">
                    AI Optimizing Routes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-6 h-10 rounded-full border-2 border-slate-600/50 flex items-start justify-center p-1.5 scroll-indicator">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 scroll-dot" />
        </div>
        <span className="text-[9px] text-slate-600 tracking-[0.2em] uppercase font-medium">
          Explore Features
        </span>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes gradient-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(-10px) rotate(-2deg);
          }
          50% {
            transform: translateY(10px) rotate(2deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(10px) rotate(2deg);
          }
          50% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
        }

        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes particle-float {
          0% {
            opacity: 0.1;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-20px) scale(1.5);
          }
          100% {
            opacity: 0.1;
            transform: translateY(0) scale(1);
          }
        }

        .shimmer {
          animation: shimmer 2s linear infinite;
        }

        .gradient-shift {
          animation: gradient-shift 8s linear infinite;
        }

        .gradient-rotate {
          animation: gradient-rotate 10s linear infinite;
        }

        .floating-card-1 {
          animation: float-1 4s ease-in-out infinite;
        }

        .floating-card-2 {
          animation: float-2 5s ease-in-out infinite 1s;
        }

        .glow-pulse {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .scroll-indicator {
          animation: scroll-bounce 1.5s ease-in-out infinite;
        }

        .scroll-dot {
          animation: scroll-bounce 1.5s ease-in-out infinite;
        }

        .particle {
          animation: particle-float infinite ease-in-out;
        }

        .progress-bar {
          animation: slide-in 1.5s ease-out;
        }

        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .cursor-follower {
          transition: all 0.1s ease-out;
          transform: translate(var(--mouse-x, 0), var(--mouse-y, 0));
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
