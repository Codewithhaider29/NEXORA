"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out",
    });

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

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#050816] flex items-center justify-center"
      data-aos="fade-out"
      data-aos-duration="600"
      data-aos-delay="1200"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="relative flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
          {/* Outer spinning ring - CSS Animation */}
          <div className="absolute w-full h-full rounded-full border-t-2 border-r-2 border-blue-500 border-opacity-60 animate-spin-slow" />

          {/* Inner spinning ring - CSS Animation */}
          <div className="absolute w-[70%] h-[70%] rounded-full border-b-2 border-l-2 border-violet-500 border-opacity-60 animate-spin-reverse" />

          {/* Center Logo */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.8)] animate-scale-pulse">
            <Image
              src="/logo.jpeg"
              alt="Nexora Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Loading Text */}
        <div
          className="mt-6 sm:mt-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 font-display font-semibold tracking-widest uppercase text-xs sm:text-sm"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          Initializing Nexora...
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-40 sm:w-48 md:w-56 h-0.5 sm:h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 animate-progress"
            style={{ width: "0%" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes scale-pulse {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }

        .animate-scale-pulse {
          animation: scale-pulse 1s ease-out forwards;
        }

        .animate-progress {
          animation: progress 1.5s ease-in-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow,
          .animate-spin-reverse,
          .animate-scale-pulse,
          .animate-progress {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
