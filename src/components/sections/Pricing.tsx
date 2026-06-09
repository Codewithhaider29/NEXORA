"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Building2, ChevronRight } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 0, yearly: 0 },
    label: "Free Forever",
    desc: "Perfect for side projects and learning",
    color: "#64748B",
    gradient: "from-slate-500/10 to-slate-500/5",
    features: [
      "Up to 10K API calls/month",
      "3 supported chains",
      "Community support",
      "Basic analytics",
      "1 project",
    ],
    excluded: ["Advanced AI features", "Priority support", "Custom SLA", "Dedicated infrastructure"],
    cta: "Get Started Free",
    ctaStyle: "border border-white/10 hover:border-slate-500/30 text-slate-300",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 49, yearly: 39 },
    label: "Most Popular",
    desc: "For growing teams and production apps",
    color: "#3B82F6",
    gradient: "from-blue-500/15 to-violet-500/10",
    features: [
      "Unlimited API calls",
      "25+ supported chains",
      "Priority support (24hr SLA)",
      "Advanced AI analytics",
      "Unlimited projects",
      "Smart contract auditing",
      "Custom webhooks",
      "Team collaboration (5 seats)",
    ],
    excluded: ["Custom SLA", "Dedicated infrastructure"],
    cta: "Start Pro Trial",
    ctaStyle: "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)]",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: { monthly: null, yearly: null },
    label: "Custom Pricing",
    desc: "For large teams and enterprise requirements",
    color: "#8B5CF6",
    gradient: "from-violet-500/15 to-violet-500/5",
    features: [
      "Everything in Pro",
      "Custom SLA (99.99% uptime)",
      "Dedicated infrastructure",
      "Unlimited team seats",
      "Private blockchain deployment",
      "Custom AI model training",
      "SOC2 & ISO27001 reports",
      "24/7 dedicated support",
      "Custom contracts & billing",
    ],
    excluded: [],
    cta: "Contact Sales",
    ctaStyle: "border border-violet-500/30 hover:bg-violet-500/5 text-violet-300",
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Start free. Scale as you grow. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? "text-white" : "text-slate-500"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isYearly ? "bg-blue-500" : "bg-white/10"}`}
            >
              <motion.div
                className="absolute w-5 h-5 rounded-full bg-white top-0.5"
                animate={{ left: isYearly ? "26px" : "2px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-white" : "text-slate-500"}`}>
              Yearly <span className="text-green-400 text-xs font-semibold">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-card p-7 bg-gradient-to-b ${plan.gradient} relative overflow-hidden ${
                plan.popular ? "ring-1 ring-blue-500/40 shadow-[0_0_40px_rgba(99,102,241,0.15)]" : ""
              }`}
              style={{ borderColor: `${plan.color}25` }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full text-xs font-bold text-white">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-400 mb-1">{plan.label}</div>
                <div className="text-2xl font-bold text-white font-display">{plan.name}</div>
                <div className="mt-3 flex items-end gap-1.5">
                  {plan.price.monthly !== null ? (
                    <>
                      <span className="text-5xl font-bold text-white font-display">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-slate-400 mb-2">/month</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-white font-display">Custom</span>
                  )}
                </div>
                <div className="text-xs text-slate-500 mt-1">{plan.desc}</div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
                {plan.excluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 line-through">
                    <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-center">–</span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Feature comparison note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 mt-10"
        >
          All plans include 30-day free trial. No credit card required.{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300">Compare all features →</a>
        </motion.p>
      </div>
    </section>
  );
}
