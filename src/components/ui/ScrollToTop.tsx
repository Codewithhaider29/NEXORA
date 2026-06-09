"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-8 z-50 p-3 rounded-full bg-slate-900/80 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-md transition-all duration-300 transform border border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] group ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform duration-300 text-blue-400 group-hover:text-cyan-400" />
    </button>
  );
}
