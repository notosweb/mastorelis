"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  location: string;
  beforeColor: string;
  afterColor: string;
}

const PROJECTS: Project[] = [
  {
    title: "Ανακαίνιση Διαμερίσματος",
    location: "Γλυφάδα",
    beforeColor: "from-stone-700 to-stone-900",
    afterColor: "from-amber-100 to-amber-50",
  },
  {
    title: "Βάψιμο Εξωτερικού Χώρου",
    location: "Κηφισιά",
    beforeColor: "from-zinc-700 to-zinc-800",
    afterColor: "from-sky-100 to-sky-50",
  },
  {
    title: "Θερμομόνωση Πολυκατοικίας",
    location: "Μαρούσι",
    beforeColor: "from-neutral-700 to-neutral-900",
    afterColor: "from-emerald-100 to-emerald-50",
  },
];

function Slider({ project }: { project: Project }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] before-after-slider">
      {/* After (full background) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.afterColor} flex items-center justify-center`}
      >
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-stone-600">M</span>
          </div>
          <span className="text-sm font-medium text-stone-500 uppercase tracking-widest">
            Μετά
          </span>
        </div>
      </div>

      {/* Before (clipped) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.beforeColor} flex items-center justify-center`}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-white/60">M</span>
          </div>
          <span className="text-sm font-medium text-white/60 uppercase tracking-widest">
            Πριν
          </span>
        </div>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-accent z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>

      {/* Range input */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Before and after comparison slider"
      />

      {/* Project info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-white/70">{project.location}</p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-surface/50" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Έργα
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Πριν & Μετά
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            Σύρετε για να δείτε τη μεταμόρφωση. Κάθε έργο αντικατοπτρίζει την
            αφοσίωσή μας στην ποιότητα.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Slider project={project} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-medium"
          >
            Δείτε όλα τα έργα μας
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
