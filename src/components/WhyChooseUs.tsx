"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, Award, FileText, ShieldCheck } from "lucide-react";

const REASONS = [
  { icon: Sparkles, title: "Καθαρή Δουλειά", description: "Προστατεύουμε τον χώρο σας και παραδίδουμε πάντα σε άψογη κατάσταση.", color: "#C62828" },
  { icon: Clock, title: "Τήρηση Χρονοδιαγράμματος", description: "Ξεκινάμε και τελειώνουμε στην ώρα μας. Ο χρόνος σας είναι πολύτιμος.", color: "#1565C0" },
  { icon: Award, title: "Premium Υλικά", description: "Χρησιμοποιούμε μόνο κορυφαία υλικά από αναγνωρισμένους κατασκευαστές.", color: "#2E7D32" },
  { icon: FileText, title: "Αναλυτικές Προσφορές", description: "Διαφανείς τιμές χωρίς κρυφές χρεώσεις. Ξέρετε ακριβώς τι πληρώνετε.", color: "#F57F17" },
  { icon: ShieldCheck, title: "Εγγύηση Εργασίας", description: "Κάθε έργο μας συνοδεύεται από γραπτή εγγύηση ποιότητας.", color: "#6A1B9A" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              🏆 Γιατί Εμάς
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Η Ποιότητα δεν είναι
              <br />
              <span className="paint-stroke gradient-text">τυχαία</span>
            </h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              Με πάνω από 15 χρόνια εμπειρίας, γνωρίζουμε ότι η σωστή δουλειά
              βασίζεται στη λεπτομέρεια, στα σωστά υλικά και στον σεβασμό
              απέναντι στον πελάτη.
            </p>

            <a
              href="#contact"
              className="paint-btn inline-flex bg-accent text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              Ξεκινήστε Σήμερα
            </a>
          </motion.div>

          {/* Right */}
          <div className="space-y-3">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-5 flex items-start gap-5 border border-border/50 hover:border-transparent hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: reason.color + '12' }}
                >
                  <reason.icon className="w-5 h-5" style={{ color: reason.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-0.5 text-foreground">{reason.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
