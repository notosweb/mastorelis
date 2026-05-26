"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, MOBILE_HREF } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong py-2 shadow-sm" : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-center relative">
          <a href="#hero">
            <Image
              src="/images/logo.png"
              alt="Μαστορέλης"
              width={120}
              height={120}
              className={`object-contain transition-all duration-500 ${scrolled ? 'w-14 h-14' : 'w-28 h-28 md:w-36 md:h-36'}`}
              priority
            />
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="absolute right-6 w-11 h-11 rounded-xl bg-accent/10 hover:bg-accent/20 flex flex-col items-center justify-center gap-[5px] transition-all duration-300"
            aria-label="Μενού"
          >
            <span className="block w-5 h-[2px] bg-accent rounded-full" />
            <span className="block w-3.5 h-[2px] bg-accent rounded-full" />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 42px) 28px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 42px) 28px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 42px) 28px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] bg-gradient-to-br from-[#1a1a1a] to-[#111] flex flex-col"
          >
            {/* Close */}
            <div className="flex items-center justify-between px-6 py-5">
              <Image src="/images/logo.png" alt="Μαστορέλης" width={48} height={48} className="w-12 h-12 object-contain brightness-0 invert" />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-10 md:px-20">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  className="group flex items-center gap-4 py-3 md:py-4 border-b border-white/5"
                >
                  <span className="text-xs font-mono text-white/20 w-6">0{i + 1}</span>
                  <span className="text-2xl md:text-4xl font-bold text-white/80 group-hover:text-accent transition-colors duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-10 md:px-20 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <a href={MOBILE_HREF} className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-medium">697 184 3971</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                Δωρεάν Εκτίμηση
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
