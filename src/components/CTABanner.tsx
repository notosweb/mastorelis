"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { MOBILE_HREF } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Paint-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-dark to-[#7f1d1d]" />

      {/* Paint splash decorations */}
      <div className="absolute top-10 left-[5%] w-60 h-60 bg-white/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-[10%] w-40 h-40 bg-white/5 rounded-full blur-[60px]" />

      {/* Paint drip top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 30" className="w-full" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,5 Q1350,5 1340,15 Q1330,25 1320,5 L900,5 Q890,5 885,18 Q880,30 875,5 L400,5 Q390,5 385,12 Q380,20 375,5 L0,5 Z" fill="#FAFAFA"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4 block">
            🖌️ Δωρεάν Εκτίμηση
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
            Έτοιμοι για <span className="text-white/90 underline decoration-white/30 underline-offset-4">Μεταμόρφωση;</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Ο τεχνικός μας θα επισκεφθεί τον χώρο σας δωρεάν. Αναλυτική προσφορά χωρίς δέσμευση.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["Δωρεάν αυτοψία", "Χωρίς δέσμευση", "Προσφορά σε 24h"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-white/80" />
                <span className="text-white/70">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="paint-btn bg-white text-accent hover:text-accent-dark px-10 py-4 rounded-2xl text-base font-bold transition-all duration-300 hover:shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Ζητήστε Εκτίμηση
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={MOBILE_HREF}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-2xl text-base font-bold transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              697 184 3971
            </a>
          </div>
        </motion.div>
      </div>

      {/* Paint drip bottom */}
      <div className="absolute bottom-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 30" className="w-full" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,5 Q1200,5 1190,20 Q1180,30 1170,5 L700,5 Q690,5 685,14 Q680,22 675,5 L200,5 Q190,5 185,18 Q180,28 175,5 L0,5 Z" fill="#FAFAFA"/>
        </svg>
      </div>
    </section>
  );
}
