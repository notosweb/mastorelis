"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { MOBILE, MOBILE_HREF, EMAIL, ADDRESS } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            ✉️ Επικοινωνία
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ας <span className="paint-stroke gradient-text">μιλήσουμε</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Πείτε μας τι χρειάζεστε — απαντάμε εντός 24 ωρών.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form - wider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-border/50"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-3">Ευχαριστούμε!</h3>
                <p className="text-muted">Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">Ονοματεπώνυμο *</label>
                    <input id="name" name="name" type="text" required
                      className="w-full bg-surface-light border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                      placeholder="Γιάννης Παπαδόπουλος" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">Τηλέφωνο *</label>
                    <input id="phone" name="phone" type="tel" required
                      className="w-full bg-surface-light border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                      placeholder="69x xxxx xxx" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2 text-foreground">Υπηρεσία</label>
                  <select id="service" name="service"
                    className="w-full bg-surface-light border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all">
                    <option value="">Επιλέξτε υπηρεσία</option>
                    <option value="painting">Ελαιοχρωματισμοί</option>
                    <option value="insulation">Μονώσεις</option>
                    <option value="waterproofing">Στεγανοποίηση</option>
                    <option value="spatoula">Σπατουλαρίσματα</option>
                    <option value="repairs">Μερεμέτια</option>
                    <option value="renovation">Ανακαινίσεις</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">Μήνυμα</label>
                  <textarea id="message" name="message" rows={4}
                    className="w-full bg-surface-light border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                    placeholder="Περιγράψτε μας τι χρειάζεστε..." />
                </div>

                <button type="submit"
                  className="paint-btn w-full bg-accent hover:bg-accent-light text-white py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2 text-base">
                  <Send className="w-5 h-5" />
                  Αποστολή Αιτήματος
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, title: "Τηλέφωνο", value: MOBILE, href: MOBILE_HREF, color: "#C62828" },
              { icon: Mail, title: "Email", value: EMAIL, href: `mailto:${EMAIL}`, color: "#1565C0" },
              { icon: MapPin, title: "Περιοχή", value: ADDRESS, href: undefined, color: "#2E7D32" },
              { icon: Clock, title: "Ωράριο", value: "Καθημερινά 07:00-23:00", href: undefined, color: "#F57F17" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-border/50 swatch-hover">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: item.color + '12' }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5 font-medium">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Viber CTA */}
            <a href="viber://chat?number=%2B306971843971" target="_blank"
              className="flex items-center justify-center gap-3 bg-[#7360F2] text-white rounded-2xl py-4 font-bold hover:bg-[#6050E0] transition-all hover:shadow-lg hover:shadow-[#7360F2]/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18.6 6.82a10.37 10.37 0 0 0-5.77-2.65c-.1-.01-.2-.02-.31-.02a11.66 11.66 0 0 0-4.9.63A8.62 8.62 0 0 0 4.1 7.83a7.45 7.45 0 0 0-.84 4.35 9.32 9.32 0 0 0 1.78 4.48l-.9 3.24 3.36-.87a12.3 12.3 0 0 0 4.5 1.16h.38a9.73 9.73 0 0 0 4.55-1.07 7.66 7.66 0 0 0 3.36-3.76 7.18 7.18 0 0 0 .5-3.59 9.14 9.14 0 0 0-2.17-4.96z"/></svg>
              Στείλτε μας στο Viber
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
