"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Nexora?",
    a: "Nexora is an enterprise-grade AI-powered infrastructure platform for building, scaling, and securing decentralized applications. We provide developer tools, analytics, security monitoring, and multi-chain support across 25+ blockchains.",
  },
  {
    q: "How do I get started?",
    a: "Sign up for a free account, install our SDK with `npm install @nexora/react`, and integrate with a few lines of code. Our comprehensive documentation and tutorials will have you connected in under 10 minutes.",
  },
  {
    q: "Which blockchains are supported?",
    a: "We support 25+ blockchains including Ethereum, Solana, Polygon, Arbitrum, Avalanche, Base, Optimism, BNB Chain, Fantom, and many more. New chains are added regularly based on community demand.",
  },
  {
    q: "Is Nexora secure?",
    a: "Security is our highest priority. We are SOC 2 Type II certified, ISO 27001 compliant, and every smart contract deployed through our platform undergoes automated and manual security audits. We maintain a $5M bug bounty program.",
  },
  {
    q: "What is the NXR token used for?",
    a: "The NXR token powers our governance system, allowing holders to vote on protocol upgrades, treasury allocation, and new feature proposals. Staking NXR also provides discounts on platform fees and access to exclusive features.",
  },
  {
    q: "Do you offer an enterprise plan?",
    a: "Yes! Our Enterprise plan includes custom SLAs (99.99% uptime), dedicated infrastructure, private blockchain deployment, unlimited team seats, compliance reporting, and 24/7 dedicated support. Contact our sales team for custom pricing.",
  },
  {
    q: "How does billing work?",
    a: "Our Starter plan is free forever. Pro is $49/month (or $39/month billed annually). Enterprise pricing is custom based on your usage and requirements. We accept credit cards and USDC/USDT for crypto-native payments.",
  },
  {
    q: "Can I try Nexora before committing?",
    a: "Absolutely! All paid plans include a 30-day free trial with full access to all features. No credit card required to start. You can also use our Starter plan indefinitely for personal projects and testing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3 block">FAQ</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">Frequently Asked</h2>
          <p className="text-slate-400 mt-4">Everything you need to know about Nexora.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card overflow-hidden transition-all duration-200 ${open === i ? "border-blue-500/20" : ""}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                >
                  <ChevronDown className={`w-5 h-5 transition-colors ${open === i ? "text-blue-400" : "text-slate-500"}`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 border-t border-white/[0.04]">
                      <p className="text-sm text-slate-400 leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-sm">
            Still have questions?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Talk to our team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
