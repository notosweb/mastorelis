"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { MOBILE_HREF } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base warm wall color */}
      <div className="absolute inset-0 bg-[#f5ebe0]" />

      {/* Realistic wall texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Paint roller strokes — horizontal bands with different opacities */}
      <div className="absolute inset-0">
        {/* Fresh coat being rolled — top area */}
        <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-[#f0e4d4] to-[#f5ebe0]" />

        {/* Roller edge line — where fresh meets old */}
        <div className="absolute top-[44%] left-0 right-0 h-[3%]">
          <div className="h-full bg-gradient-to-b from-[#ecdcc8] to-[#f5ebe0] opacity-60" />
        </div>
      </div>

      {/* Color swatches floating — like paint samples taped to wall */}
      <motion.div
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 1, rotate: -8 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-[12%] right-[8%] w-16 h-20 rounded-sm shadow-lg hidden lg:block"
        style={{ background: 'linear-gradient(180deg, #C62828 70%, white 70%)' }}
      />
      <motion.div
        initial={{ opacity: 0, rotate: 3 }}
        animate={{ opacity: 1, rotate: 5 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute top-[22%] right-[14%] w-14 h-18 rounded-sm shadow-lg hidden lg:block"
        style={{ background: 'linear-gradient(180deg, #1565C0 70%, white 70%)' }}
      />
      <motion.div
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: -3 }}
        transition={{ delay: 2.1, duration: 1 }}
        className="absolute bottom-[25%] left-[6%] w-12 h-16 rounded-sm shadow-lg hidden lg:block"
        style={{ background: 'linear-gradient(180deg, #2E7D32 70%, white 70%)' }}
      />
      <motion.div
        initial={{ opacity: 0, rotate: 6 }}
        animate={{ opacity: 1, rotate: 8 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-[35%] left-[12%] w-10 h-14 rounded-sm shadow-lg hidden lg:block"
        style={{ background: 'linear-gradient(180deg, #F57F17 70%, white 70%)' }}
      />

      {/* Paint drip from top — like fresh paint running */}
      <div className="absolute top-0 left-[20%] w-[3px] bg-gradient-to-b from-accent to-transparent opacity-10" style={{ height: '120px' }} />
      <div className="absolute top-0 left-[75%] w-[2px] bg-gradient-to-b from-[#1565C0] to-transparent opacity-8" style={{ height: '90px' }} />
      <div className="absolute top-0 left-[45%] w-[4px] bg-gradient-to-b from-accent to-transparent opacity-5" style={{ height: '200px' }} />

      {/* Warm ambient light */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-white/20 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 text-center">
        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/5 rounded-full px-5 py-2.5 mb-10 shadow-sm"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">5.0</span>
          <span className="text-xs text-muted">· 118 Google Reviews</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1] tracking-tight mb-8 text-foreground"
        >
          <span className="block">Επαγγελματικοί</span>
          <span className="block gradient-text">Ελαιοχρωματισμοί</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-muted max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Βαψίματα · Τεχνοτροπίες · Σπατουλαρίσματα · Μονώσεις · Μερεμέτια
          <br className="hidden md:block" />
          <span className="text-foreground font-medium">Ελληνικό · Γλυφάδα · Όλη η Αττική</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative paint-btn bg-accent text-white px-10 py-4.5 rounded-2xl text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            Δωρεάν Εκτίμηση
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={MOBILE_HREF}
            className="bg-white hover:bg-gray-50 border border-black/8 px-10 py-4.5 rounded-2xl text-base font-bold transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-3 w-full sm:w-auto justify-center text-foreground"
          >
            📞 Καλέστε Τώρα
          </a>
        </motion.div>
      </div>

      {/* Paint drips bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,20 Q1400,20 1380,35 Q1360,50 1340,20 L1300,20 Q1260,20 1250,28 Q1240,36 1230,20 L900,20 Q880,20 870,40 Q860,60 850,20 L600,20 Q580,20 570,30 Q560,40 550,20 L200,20 Q180,20 170,45 Q160,60 150,20 L0,20 Z" fill="#FAFAFA"/>
        </svg>
      </div>
    </section>
  );
}
