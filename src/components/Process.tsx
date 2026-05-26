"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const stepColors = ["#C62828", "#1565C0", "#2E7D32", "#F57F17", "#6A1B9A"];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-surface-light paint-divider">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            📋 Διαδικασία
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Πώς <span className="paint-stroke">Δουλεύουμε</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            5 απλά βήματα από την επικοινωνία μέχρι την παράδοση.
          </p>
        </motion.div>

        {/* Timeline style */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                {/* Circle number */}
                <div className="relative inline-flex mb-5">
                  <div
                    className="w-[76px] h-[76px] rounded-full flex items-center justify-center text-white text-2xl font-extrabold shadow-lg relative z-10"
                    style={{ background: stepColors[i] }}
                  >
                    {step.step}
                  </div>
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-20"
                    style={{ background: stepColors[i] }}
                  />
                </div>

                <h3 className="font-bold text-base mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-[180px] mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
