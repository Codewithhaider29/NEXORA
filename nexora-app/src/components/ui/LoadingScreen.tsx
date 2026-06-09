"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Force scroll to top on load/refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // Slight delay to ensure DOM is ready to be scrolled
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // 2. Hide loading screen after 1.8 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#050816] flex items-center justify-center"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-32 h-32">
              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute w-full h-full rounded-full border-t-2 border-r-2 border-blue-500 border-opacity-60"
              />
              
              {/* Inner spinning ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border-b-2 border-l-2 border-violet-500 border-opacity-60"
              />
              
              {/* Center Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.8)]"
              >
                <Image src="/logo.jpeg" alt="Nexora Logo" fill className="object-cover" />
              </motion.div>
            </div>
            
            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 font-display font-semibold tracking-widest uppercase text-sm"
            >
              Initializing Nexora...
            </motion.div>
            
            {/* Progress Bar */}
            <div className="mt-4 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
