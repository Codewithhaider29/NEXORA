"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const sdks = [
  {
    id: "react",
    label: "React SDK",
    lang: "javascript",
    code: `import { NexoraProvider, useWallet, useChain } from '@nexora/react';

function App() {
  return (
    <NexoraProvider apiKey="nxr_live_...">
      <WalletButton />
    </NexoraProvider>
  );
}

function WalletButton() {
  const { connect, address, balance } = useWallet();
  const { chain, switchChain } = useChain();

  return (
    <button onClick={() => connect('metamask')}>
      {address ? \`\${balance} ETH on \${chain.name}\` : 'Connect Wallet'}
    </button>
  );
}`,
  },
  {
    id: "typescript",
    label: "TypeScript SDK",
    lang: "typescript",
    code: `import { Nexora, Chain, Contract } from '@nexora/sdk';

const client = new Nexora({
  apiKey: 'nxr_live_...',
  chains: [Chain.Ethereum, Chain.Arbitrum],
});

// Deploy smart contract
const contract: Contract = await client.deploy({
  abi: contractABI,
  bytecode: contractBytecode,
  chain: Chain.Ethereum,
  gasLimit: 3_000_000n,
});

// Subscribe to events
client.subscribe(contract.address, 'Transfer', (event) => {
  console.log(\`Transfer: \${event.from} → \${event.to}\`);
});`,
  },
  {
    id: "api",
    label: "API Integration",
    lang: "bash",
    code: `# Authenticate
curl -X POST https://api.nexora.io/v1/auth \\
  -H "Authorization: Bearer nxr_live_..." \\
  -H "Content-Type: application/json"

# Get TVL across chains
curl https://api.nexora.io/v1/analytics/tvl \\
  -H "Authorization: Bearer nxr_live_..." \\
  -G -d "chains=ethereum,solana,arbitrum"

# Response:
# {
#   "total_tvl": "8460000000",
#   "by_chain": {
#     "ethereum": "3200000000",
#     "solana": "1800000000",
#     "arbitrum": "1100000000"
#   }
# }`,
  },
];

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting classes
  const highlighted = code
    .split("\n")
    .map((line, i) => (
      <div key={i} className="flex">
        <span className="w-8 text-right text-slate-700 select-none mr-4 text-xs leading-6 flex-shrink-0">
          {i + 1}
        </span>
        <span className="text-slate-300 text-xs leading-6 whitespace-pre">{line}</span>
      </div>
    ));

  return (
    <div className="relative">
      <button
        onClick={copy}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 glass rounded-lg border border-white/10 hover:border-blue-500/30 transition-all"
        title="Copy code"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
      </button>
      <div className="bg-[rgba(0,0,0,0.5)] rounded-xl p-3 sm:p-5 font-mono overflow-x-auto max-h-72 overflow-y-auto custom-scrollbar">
        {highlighted}
      </div>
    </div>
  );
}

const features = [
  "Powerful APIs, SDKs, and tools designed for every developer",
  "TypeScript support out of the box",
  "Webhooks & Events",
  "Comprehensive Documentation",
  "24/7 Developer Support",
];

export default function DeveloperExperience() {
  const [activeSdk, setActiveSdk] = useState("react");

  return (
    <section className="py-16 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/10 via-transparent to-blue-950/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6"
          >
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Developer Experience</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              Built for Builders
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Get from zero to production in minutes with our developer-first tooling, comprehensive SDKs, and battle-tested APIs.
            </p>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-slate-300 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                  </div>
                  {f}
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary px-7 py-3 rounded-xl text-sm font-semibold"
            >
              View Docs →
            </motion.button>
          </motion.div>

          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            {/* Editor header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 px-3 sm:px-4 py-3 bg-black/30 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5 pl-1 sm:pl-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/70" />
              </div>
              {/* SDK Tabs */}
              <div className="flex items-center gap-1 bg-white/[0.03] rounded-lg p-1 overflow-x-auto w-full sm:w-auto custom-scrollbar">
                {sdks.map((sdk) => (
                  <button
                    key={sdk.id}
                    onClick={() => setActiveSdk(sdk.id)}
                    className={`flex-shrink-0 px-3 py-1.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium transition-all duration-200 ${
                      activeSdk === sdk.id
                        ? "bg-white/10 text-white"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {sdk.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Code content */}
            <div className="p-4">
              {sdks.map((sdk) =>
                sdk.id === activeSdk ? (
                  <motion.div
                    key={sdk.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CodeBlock code={sdk.code} lang={sdk.lang} />
                  </motion.div>
                ) : null
              )}
            </div>

            {/* Quick stats */}
            <div className="flex gap-2 sm:gap-4 px-3 sm:px-4 pb-3 sm:pb-4 overflow-x-auto custom-scrollbar">
              {[
                { label: "npm downloads/mo", value: "1.2M+" },
                { label: "GitHub Stars", value: "12.4K" },
                { label: "Uptime SLA", value: "99.99%" },
              ].map((s) => (
                <div key={s.label} className="flex-1 min-w-[100px] sm:min-w-0 bg-white/[0.03] rounded-lg p-2 sm:p-2.5 text-center">
                  <div className="text-xs sm:text-sm font-bold text-white">{s.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
