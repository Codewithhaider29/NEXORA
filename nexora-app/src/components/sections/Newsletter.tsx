"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-violet-900/30 to-blue-900/30" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Stay Updated</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white">
            Get the Latest Web3 Insights
          </h2>
          <p className="text-slate-400">
            Join 50,000+ developers and founders receiving our weekly Web3 infrastructure updates, tutorials, and announcements.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 p-5 glass rounded-2xl border border-green-500/20"
            >
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span className="text-white font-semibold">You're subscribed! Welcome to the community 🎉</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 bg-white/[0.05] border border-white/[0.10] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors text-sm"
              />
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl text-sm disabled:opacity-70 transition-all"
              >
                {loading ? (
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Subscribe
                  </>
                )}
              </motion.button>
            </form>
          )}

          <p className="text-xs text-slate-600">
            No spam. Unsubscribe anytime. Read our{" "}
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
