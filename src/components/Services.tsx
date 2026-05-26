"use client";

import { motion } from "framer-motion";
import {
  Paintbrush,
  Thermometer,
  Droplets,
  LayoutGrid,
  Wrench,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Paintbrush,
  Thermometer,
  Droplets,
  LayoutGrid,
  Wrench,
  Building2,
};

// Paint color for each service card top accent
const paintColors = [
  "#C62828", // red
  "#1565C0", // blue
  "#2E7D32", // green
  "#F57F17", // yellow
  "#455A74", // navy
  "#6A1B9A", // purple
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 paint-divider">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            🎨 Υπηρεσίες
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ολοκληρωμένες Λύσεις
            <br />
            <span className="paint-stroke text-muted">για κάθε χώρο</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Από ελαιοχρωματισμούς μέχρι πλήρεις ανακαινίσεις. Καλύπτουμε κάθε
            ανάγκη με επαγγελματισμό και εγγύηση.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-border/50 swatch-hover cursor-pointer overflow-hidden"
              >
                {/* Paint stripe top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: paintColors[i] }}
                />

                {/* Icon with paint splash bg */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                  style={{ background: paintColors[i] + '15' }}
                >
                  <Icon className="w-7 h-7" style={{ color: paintColors[i] }} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: paintColors[i] }}>
                  <span>Μάθετε περισσότερα</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Hover paint splash */}
                <div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 blur-2xl"
                  style={{ background: paintColors[i] }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
