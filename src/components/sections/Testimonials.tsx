"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "CTO",
    company: "DeFi Protocol",
    avatar: "AM",
    color: "#3B82F6",
    rating: 5,
    quote:
      "Nexora completely transformed our infrastructure. We went from managing 3 separate chains to running unified operations across 12 chains. The AI monitoring saved us from two major exploits in the first month alone.",
  },
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "NFT Marketplace",
    avatar: "SC",
    color: "#8B5CF6",
    rating: 5,
    quote:
      "The developer experience is unmatched. I integrated Nexora's SDK in a weekend and had multi-chain NFT support live. My team's support is incredible — they answered every question within hours. This is what Web3 infrastructure should feel like.",
  },
  {
    name: "James Walker",
    role: "Lead Developer",
    company: "GameFi Studio",
    avatar: "JW",
    color: "#39FF14",
    rating: 5,
    quote:
      "We process over 2 million in-game transactions daily with zero downtime. The 99.99% uptime SLA is real — we tested it. The cross-chain bridge for our in-game assets works seamlessly. Our players never even notice the blockchain.",
  },
  {
    name: "Maria Santos",
    role: "VP Engineering",
    company: "Enterprise Bank",
    avatar: "MS",
    color: "#06B6D4",
    rating: 5,
    quote:
      "Deploying our private blockchain with Nexora's enterprise tier was the best technical decision we made. The compliance tools and SOC 2 certification made our legal team very happy. 10/10 would recommend.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [autoPlay]);

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setAutoPlay(false); };
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setAutoPlay(false); };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3 block">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">What Our Users Say</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 lg:p-12 relative"
              style={{ borderColor: `${testimonials[current].color}20` }}
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-16 h-16" style={{ color: testimonials[current].color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}80)` }}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-base">{testimonials[current].name}</div>
                  <div className="text-sm text-slate-400">{testimonials[current].role}</div>
                  <div className="text-xs font-semibold" style={{ color: testimonials[current].color }}>
                    @ {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAutoPlay(false); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-blue-400" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Company logos under testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {["OpenAI", "Accenture", "Kube", "Coinbase", "UNIEX", "Solana"].map((c) => (
            <div key={c} className="glass px-5 py-2.5 rounded-xl border border-white/[0.06] text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors cursor-default">
              {c}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
