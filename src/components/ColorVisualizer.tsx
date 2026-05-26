"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import colorsData from "@/lib/vitex-colors.json";

type VitexColor = { name: string; code: string; hex: string };
const ALL_COLORS: VitexColor[] = colorsData;

function getColorFamily(hex: string): string {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  const max = Math.max(r,g,b), min = Math.min(r,g,b), d = max-min;
  if (d < 20 && max > 200) return "Λευκά";
  if (d < 25 && max < 80) return "Μαύρα";
  if (d < 30) return "Γκρι";
  let h = 0;
  if (d > 0) {
    if (max === r) h = ((g-b)/d)%6;
    else if (max === g) h = (b-r)/d+2;
    else h = (r-g)/d+4;
  }
  h = Math.round(h*60); if (h<0) h+=360;
  const s = max===0?0:d/max;
  if (s < 0.15) return max > 180 ? "Λευκά" : "Γκρι";
  if (h < 15 || h >= 345) return "Κόκκινα";
  if (h < 40) return "Πορτοκαλί";
  if (h < 70) return "Κίτρινα";
  if (h < 165) return "Πράσινα";
  if (h < 255) return "Μπλε";
  if (h < 290) return "Μωβ";
  return "Ροζ";
}

export default function ColorVisualizer() {
  const [search, setSearch] = useState("");
  const [family, setFamily] = useState("Όλα");
  const [copied, setCopied] = useState<string | null>(null);

  const families = useMemo(() => {
    const fams = new Set(ALL_COLORS.map(c => getColorFamily(c.hex)));
    return ["Όλα", ...Array.from(fams).sort()];
  }, []);

  const filtered = useMemo(() => {
    return ALL_COLORS.filter(c => {
      const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search);
      const matchFamily = family === "Όλα" || getColorFamily(c.hex) === family;
      return matchSearch && matchFamily;
    });
  }, [search, family]);

  function copyCode(text: string) {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header */}
      <div className="bg-white/90 backdrop-blur-lg border-b border-border sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Αρχική</span>
          </Link>
          <h1 className="text-base md:text-lg font-bold text-foreground">🎨 Χρωματολόγιο Vitex</h1>
          <span className="text-xs text-muted">{filtered.length} / {ALL_COLORS.length}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-6">
        {/* Search + Filters */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input type="text" placeholder="Αναζήτηση ονόματος ή κωδικού Vitex..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 text-sm" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {families.map(f => (
              <button key={f} onClick={() => setFamily(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${family === f ? 'bg-accent text-white' : 'bg-white border border-border text-muted hover:border-accent'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
          {filtered.map((color, i) => (
            <motion.div key={color.code + color.name} layout
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="group cursor-pointer" onClick={() => copyCode(`Vitex ${color.code} - ${color.name}`)}>
              <div className="relative rounded-lg overflow-hidden border border-black/5 hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="aspect-square" style={{ backgroundColor: color.hex }} />
                <div className="bg-white px-1.5 py-1.5">
                  <p className="text-[9px] font-bold text-foreground truncate leading-tight">{color.name}</p>
                  <p className="text-[8px] text-muted font-mono mt-0.5">{color.code}</p>
                </div>
                {/* Copy overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  {copied === `Vitex ${color.code} - ${color.name}` ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <Copy className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">
            <p>Δεν βρέθηκαν χρώματα για &ldquo;{search}&rdquo;</p>
          </div>
        )}

        <div className="mt-10 text-center text-[10px] text-muted">
          <p>Vitex Global Collection · {ALL_COLORS.length} αποχρώσεις · Τα χρώματα ενδέχεται να διαφέρουν λόγω οθόνης</p>
          <Link href="/#contact" className="inline-block mt-3 text-accent text-xs font-medium hover:underline">
            Ζητήστε Δωρεάν Εκτίμηση Βαψίματος →
          </Link>
        </div>
      </div>
    </div>
  );
}
