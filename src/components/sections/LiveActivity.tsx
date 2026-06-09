"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Image, ArrowLeftRight, Code, Zap } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
type ActivityType = {
  type: string;
  iconKey: string;
  color: string;
};

type Activity = {
  id: number;
  type: string;
  iconKey: string;
  address: string;
  amount?: string;
  chain: string;
  chainColor: string;
  time: string;
  color: string;
};

// ── Static config (no random values at module level) ───────────────────────
const CHAINS = ["Ethereum", "Solana", "Arbitrum", "Polygon", "Base"];
const CHAIN_COLORS: Record<string, string> = {
  Ethereum: "#627EEA",
  Solana: "#9945FF",
  Arbitrum: "#28A0F0",
  Polygon: "#8247E5",
  Base: "#0052FF",
};

const ACTIVITY_TYPES: ActivityType[] = [
  { type: "Wallet Connected", iconKey: "wallet", color: "#39FF14" },
  { type: "NFT Minted", iconKey: "image", color: "#06B6D4" },
  { type: "Bridge Completed", iconKey: "bridge", color: "#8B5CF6" },
  { type: "Contract Deployed", iconKey: "code", color: "#F59E0B" },
  { type: "Flash Loan", iconKey: "zap", color: "#EF4444" },
];

// ── Icon renderer (avoids storing ReactNode in state → prevents SSR mismatch)
function ActivityIcon({ iconKey, color }: { iconKey: string; color: string }) {
  const cls = "w-4 h-4";
  const icon =
    iconKey === "wallet" ? (
      <Wallet className={cls} />
    ) : iconKey === "image" ? (
      <Image className={cls} />
    ) : iconKey === "bridge" ? (
      <ArrowLeftRight className={cls} />
    ) : iconKey === "code" ? (
      <Code className={cls} />
    ) : (
      <Zap className={cls} />
    );

  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{
        background: `${color}15`,
        border: `1px solid ${color}30`,
        color,
      }}
    >
      {icon}
    </div>
  );
}

// ── Pure functions (only called client-side inside useEffect) ──────────────
function genAddress(rng: () => number): string {
  const chars = "0123456789abcdef";
  const seg = (n: number) =>
    Array.from({ length: n }, () => chars[Math.floor(rng() * 16)]).join("");
  return `0x${seg(4)}...${seg(4)}`;
}

function genActivity(id: number, rng: () => number): Activity {
  const t = ACTIVITY_TYPES[Math.floor(rng() * ACTIVITY_TYPES.length)];
  const chain = CHAINS[Math.floor(rng() * CHAINS.length)];
  return {
    id,
    type: t.type,
    iconKey: t.iconKey,
    color: t.color,
    address: genAddress(rng),
    amount:
      t.type !== "Wallet Connected"
        ? `$${(rng() * 50_000).toFixed(0)}`
        : undefined,
    chain,
    chainColor: CHAIN_COLORS[chain],
    time: "just now",
  };
}

const TX_START = 150_412_890;

// ── Component ──────────────────────────────────────────────────────────────
export default function LiveActivity() {
  // Start with empty arrays on the server → no hydration mismatch
  const [activities, setActivities] = useState<Activity[]>([]);
  const [txCount, setTxCount] = useState(TX_START);
  const [mounted, setMounted] = useState(false);

  // ── Populate on client after first paint ──────────────────────────────
  useEffect(() => {
    setActivities(
      Array.from({ length: 8 }, (_, i) => genActivity(i, Math.random)),
    );
    setMounted(true);
  }, []);

  // ── Live-update stream ────────────────────────────────────────────────
  useEffect(() => {
    if (!mounted) return;

    let nextId = 9;
    const interval = setInterval(() => {
      const id = nextId++;
      setActivities((prev) => {
        const aged = prev.map((a) => ({
          ...a,
          time:
            a.time === "just now"
              ? "1s ago"
              : a.time === "1s ago"
                ? "3s ago"
                : a.time === "3s ago"
                  ? "10s ago"
                  : "30s ago",
        }));
        return [genActivity(id, Math.random), ...aged.slice(0, 7)];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [mounted]);

  // ── Tx counter ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(
      () => setTxCount((c) => c + Math.floor(Math.random() * 50 + 10)),
      500,
    );
    return () => clearInterval(interval);
  }, [mounted]);

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* ── Left panel ─────────────────────────────────────────── */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                Live Activity
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-white">
                Real-Time Blockchain Feed
              </h2>
              <p className="text-slate-400">
                Watch live transactions and events happening across all
                supported chains right now.
              </p>

              {/* Live counter */}
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="live-dot" />
                  <span className="text-xs text-green-400 font-semibold">
                    LIVE
                  </span>
                </div>
                {/* suppressHydrationWarning prevents mismatch on the number itself */}
                <div
                  className="text-2xl font-bold font-mono text-white"
                  suppressHydrationWarning
                >
                  {txCount.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Total Transactions Processed
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "TPS", value: "12.4K" },
                  { label: "Active Nodes", value: "8,420" },
                  { label: "Pending", value: "2,104" },
                  { label: "Block Time", value: "12.2s" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="glass rounded-xl p-3 border border-white/[0.05]"
                  >
                    <div className="text-xs text-slate-500">{s.label}</div>
                    <div className="text-base font-bold text-white font-mono">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Activity feed ──────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-5 h-[520px] overflow-hidden"
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="live-dot" />
                  <span className="text-sm font-semibold text-white">
                    Live Activity Stream
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  Auto-updating
                </span>
              </div>

              {/* Skeleton while waiting for client mount */}
              {!mounted && (
                <div className="space-y-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-14 rounded-xl bg-white/[0.02] border border-white/[0.04] animate-pulse"
                    />
                  ))}
                </div>
              )}

              {mounted && (
                <div className="space-y-2 overflow-hidden">
                  <AnimatePresence initial={false}>
                    {activities.map((activity) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, y: -30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-200 group"
                      >
                        {/* Icon */}
                        <ActivityIcon
                          iconKey={activity.iconKey}
                          color={activity.color}
                        />

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white">
                              {activity.type}
                            </span>
                            <span
                              className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold"
                              style={{
                                background: `${activity.chainColor}20`,
                                color: activity.chainColor,
                                border: `1px solid ${activity.chainColor}30`,
                              }}
                            >
                              {activity.chain}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-mono">
                            {activity.address}
                          </div>
                        </div>

                        {/* Amount & time */}
                        <div className="text-right flex-shrink-0">
                          {activity.amount && (
                            <div className="text-sm font-bold text-green-400">
                              {activity.amount}
                            </div>
                          )}
                          <div className="text-xs text-slate-600">
                            {activity.time}
                          </div>
                        </div>

                        {/* Live pulse dot */}
                        {activity.time === "just now" && (
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: activity.color,
                              boxShadow: `0 0 6px ${activity.color}`,
                            }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
