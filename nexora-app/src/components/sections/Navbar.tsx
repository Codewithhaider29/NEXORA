"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wallet, LogIn, ChevronRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isClickScrolling.current) return;

      let currentActive = "Home";
      for (const link of navLinks.slice().reverse()) {
        const element = document.getElementById(link.href.substring(1));
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            currentActive = link.label;
            break;
          }
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileDrawerOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050816]/80 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-gradient-to-b from-[#050816]/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3 z-50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-10 h-10 rounded-full border border-white/10 overflow-hidden shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <Image
                src="/logo.jpeg"
                alt="Nexora Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
              NEXORA
            </span>
          </motion.a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  isClickScrolling.current = true;
                  setTimeout(() => {
                    isClickScrolling.current = false;
                  }, 1000);
                }}
                className="relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 group"
              >
                <span
                  className={
                    activeLink === link.label
                      ? "text-white"
                      : "text-slate-400 group-hover:text-white"
                  }
                >
                  {link.label}
                </span>

                {/* Animated Underline */}
                {activeLink === link.label ? (
                  <motion.div
                    layoutId="desktopUnderline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                    transition={{ type: "spring", stiffness: 280, damping: 30 }}
                  />
                ) : (
                  <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 z-50">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              Log in
            </button>
            <div className="w-[1px] h-4 bg-white/20" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <Wallet className="w-4 h-4 text-violet-400" />
              Connect
            </motion.button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white z-50"
            onClick={() => setMobileDrawerOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-[70] bg-[#050816]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="text-lg font-bold bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
                  Menu
                </span>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMobileDrawerOpen(false);
                      isClickScrolling.current = true;
                      setTimeout(() => {
                        isClickScrolling.current = false;
                      }, 1000);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeLink === link.label
                        ? "bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-white border border-white/10"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    <span className="font-medium">{link.label}</span>
                    {activeLink === link.label && (
                      <ChevronRight className="w-4 h-4 text-violet-400" />
                    )}
                  </a>
                ))}
              </div>

              <div className="p-6 border-t border-white/5 space-y-3 bg-black/20">
                <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                  <LogIn className="w-4 h-4" />
                  Log in
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
