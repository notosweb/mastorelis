"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SHOWCASE = [
  "/images/gallery/photo-01.jpg",
  "/images/gallery/photo-05.jpg",
  "/images/gallery/photo-10.jpg",
  "/images/gallery/photo-15.jpg",
  "/images/gallery/photo-20.jpg",
  "/images/gallery/photo-25.jpg",
  "/images/gallery/photo-30.jpg",
  "/images/gallery/photo-35.jpg",
];

export default function HeroGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SHOWCASE.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + SHOWCASE.length) % SHOWCASE.length);
  const next = () => setCurrent((c) => (c + 1) % SHOWCASE.length);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">📸 Δουλειές μας</span>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Από τα <span className="paint-stroke gradient-text">έργα μας</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative rounded-3xl overflow-hidden bg-surface-light aspect-[16/9] md:aspect-[21/9]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={SHOWCASE[current]}
                alt={`Έργο ${current + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Nav buttons */}
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {SHOWCASE.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"}`} />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
            {current + 1} / {SHOWCASE.length}
          </div>
        </div>

        {/* View all link */}
        <div className="text-center mt-6">
          <a href="/erga" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline">
            Δείτε όλα τα έργα ({54}) →
          </a>
        </div>
      </div>
    </section>
  );
}
