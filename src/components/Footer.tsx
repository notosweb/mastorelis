"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, SERVICES, AREAS, MOBILE, MOBILE_HREF, EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white">
      {/* Paint drip top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 30" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 L0,25 Q60,25 70,15 Q80,5 90,25 L400,25 Q410,25 415,10 Q420,0 425,25 L800,25 Q810,25 815,8 Q820,0 825,25 L1200,25 Q1210,25 1215,12 Q1220,0 1225,25 L1440,25 L1440,30 Z" fill="#1a1a1a"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="Μαστορέλης" width={44} height={44} className="w-11 h-11 object-contain brightness-0 invert" />
              <span className="text-xl font-bold text-white/80">ΜΑΣΤΟΡΕΛΗΣ</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Επαγγελματικοί ελαιοχρωματισμοί και ανακαινίσεις στην Αθήνα.
              Ποιότητα, αξιοπιστία και εγγύηση.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/mastorelis.elliniko" target="_blank"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/thanos_mastorelis/" target="_blank"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold mb-6 text-white/90">Πλοήγηση</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-accent transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-white/90">Υπηρεσίες</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-white/50 hover:text-accent transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-white/90">Επικοινωνία</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href={MOBILE_HREF} className="flex items-center gap-3 text-sm text-white/50 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" />{MOBILE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm text-white/50 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" />{EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-accent" />Αθήνα & Αττική
              </li>
            </ul>
            <h4 className="font-semibold mb-3 text-sm text-white/70">Περιοχές</h4>
            <p className="text-xs text-white/30 leading-relaxed">{AREAS.join(" · ")}</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Μαστορέλης. Με επιφύλαξη παντός δικαιώματος.</p>
          <p className="text-xs text-white/30">
            Κατασκευή:{" "}
            <a href="https://notosweb.com" target="_blank" className="text-accent hover:text-accent-light transition-colors">NotosWeb</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
