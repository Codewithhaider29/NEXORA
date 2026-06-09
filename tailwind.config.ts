import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        navy: {
          950: "#050816",
          900: "#070b20",
          800: "#0a0f2e",
          700: "#0d1340",
        },
        electric: {
          blue: "#3B82F6",
          indigo: "#6366F1",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
          teal: "#14B8A6",
        },
        neon: {
          blue: "#00D4FF",
          purple: "#9D4EDD",
          pink: "#FF006E",
          green: "#39FF14",
          cyan: "#00FFFF",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.08)",
          hover: "rgba(255,255,255,0.06)",
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(5,8,22,0))",
        "blue-glow": "radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
        "purple-glow": "radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "electric-gradient": "linear-gradient(135deg, #3B82F6, #8B5CF6)",
        "neon-gradient": "linear-gradient(135deg, #00D4FF, #9D4EDD)",
        "section-gradient": "linear-gradient(180deg, rgba(5,8,22,0) 0%, rgba(59,130,246,0.05) 50%, rgba(5,8,22,0) 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.2)",
        "glow-purple": "0 0 20px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.2)",
        "glow-cyan": "0 0 20px rgba(6,182,212,0.5), 0 0 60px rgba(6,182,212,0.2)",
        "glow-green": "0 0 20px rgba(57,255,20,0.4), 0 0 60px rgba(57,255,20,0.15)",
        "glass": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-hover": "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
        "card-3d": "0 25px 50px -12px rgba(0,0,0,0.8)",
        "neon-border": "0 0 0 1px rgba(59,130,246,0.3), 0 0 20px rgba(59,130,246,0.1)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spinReverse 15s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marqueeReverse 25s linear infinite",
        "blink": "blink 1s step-end infinite",
        "scan": "scan 2s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "orbit": "orbit 10s linear infinite",
        "gradient-x": "gradientX 5s ease infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(139,92,246,0.8), 0 0 80px rgba(59,130,246,0.4)" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Fira Code", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
