"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, TrendingUp, BarChart2, Cpu } from "lucide-react";

const initialMessages = [
  {
    role: "user" as const,
    content: "What's the current TVL across all chains?",
  },
  {
    role: "ai" as const,
    content:
      "The total TVL across all supported chains is currently **$8.46B**, up 7.1% from yesterday. Ethereum leads with $3.2B, followed by Solana at $1.8B and Arbitrum at $1.1B.",
  },
  {
    role: "user" as const,
    content: "Show me the top performing protocols",
  },
  {
    role: "ai" as const,
    content:
      "Here are the top performing protocols by TVL:\n1. **Aave** – $2.8B (↑12.3%)\n2. **Uniswap** – $1.9B (↑8.7%)\n3. **Curve Finance** – $1.4B (↑5.2%)\n4. **Compound** – $890M (↑3.1%)",
  },
];

const suggestions = [
  { icon: <TrendingUp className="w-3.5 h-3.5" />, text: "Market trends" },
  { icon: <BarChart2 className="w-3.5 h-3.5" />, text: "Portfolio analysis" },
  { icon: <Cpu className="w-3.5 h-3.5" />, text: "Smart contract audit" },
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 py-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-blue-400"
          animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export default function AICopilot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const presetReplies = [
    "Based on current market data, gas fees are trending down 15% on Ethereum. Optimal trading window: next 2-3 hours.",
    "Risk assessment complete. Portfolio diversification score: 8.4/10. Recommend rebalancing Solana exposure from 35% to 25%.",
    "Smart contract audit complete. Found 0 critical vulnerabilities. 2 low-severity informational notes. Contract is safe to deploy.",
  ];

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user" as const, content: text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => [
        ...m,
        {
          role: "ai" as const,
          content: presetReplies[Math.floor(Math.random() * presetReplies.length)],
        },
      ]);
    }, 2000);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 blue-glow opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">AI Copilot</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
              Your On-Chain<br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                AI Assistant
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Ask anything about blockchain data, market trends, smart contract analysis, or portfolio optimization in natural language.
            </p>
            <div className="space-y-4">
              {[
                { title: "Natural Language Queries", desc: "Ask complex blockchain questions in plain English" },
                { title: "Real-Time Data", desc: "Responses backed by live on-chain data" },
                { title: "Smart Recommendations", desc: "AI-driven insights for optimal decisions" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden flex flex-col"
            style={{ height: 520 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/[0.06]">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Nexora AI</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs text-green-400">Online · GPT-4o powered</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      msg.role === "ai"
                        ? "bg-gradient-to-br from-violet-500 to-blue-500"
                        : "bg-white/10 border border-white/10"
                    }`}>
                      {msg.role === "ai" ? <Bot className="w-3.5 h-3.5 text-white" /> : <User className="w-3.5 h-3.5 text-slate-300" />}
                    </div>
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-blue-600/80 to-violet-600/80 text-white border border-blue-500/20"
                          : "bg-white/[0.04] text-slate-200 border border-white/[0.06]"
                      }`}
                      style={{ borderRadius: msg.role === "user" ? "1rem 1rem 0.25rem 1rem" : "1rem 1rem 1rem 0.25rem" }}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl px-4 py-3">
                    <TypingDots />
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto">
              {suggestions.map((s) => (
                <button
                  key={s.text}
                  onClick={() => sendMessage(s.text)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs text-slate-400 hover:text-white hover:border-violet-500/30 transition-all whitespace-nowrap"
                >
                  {s.icon}
                  {s.text}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/[0.06]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                  placeholder="Ask anything about Web3..."
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/40 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage(input)}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
