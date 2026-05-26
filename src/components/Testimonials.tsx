"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { TESTIMONIALS, GOOGLE_RATING, GOOGLE_REVIEWS_COUNT } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const maxSlide = Math.max(0, TESTIMONIALS.length - 3);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(maxSlide, c + 1)), [maxSlide]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c >= maxSlide ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  return (
    <section id="reviews" className="py-24 bg-surface-light paint-divider" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            ⭐ Κριτικές
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Τι λένε οι <span className="paint-stroke">πελάτες μας</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold">{GOOGLE_RATING}/5</span>
            <span className="text-sm text-muted">· {GOOGLE_REVIEWS_COUNT} κριτικές Google</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                transform: `translateX(-${current * (100 / 3 + 2)}%)`,
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="min-w-[calc(33.333%-16px)] flex-shrink-0 max-md:min-w-[calc(100%-0px)]"
                >
                  <div className="bg-white rounded-2xl p-8 border border-border/50 h-full flex flex-col swatch-hover">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground leading-relaxed mb-6 flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{t.name}</p>
                        <p className="text-xs text-muted">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current >= maxSlide}
              className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
