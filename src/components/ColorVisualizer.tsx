"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowLeft, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import colorsData from "@/lib/vitex-colors.json";

type VitexColor = { name: string; code: string; hex: string; family: string; warmth: string; brightness: string; palette: number };
const ALL: VitexColor[] = colorsData as VitexColor[];
const FAMILIES = ["Όλα", ...Array.from(new Set(ALL.map(c => c.family))).sort()];
const WARMTHS = ["Όλα", "Ζεστό", "Ουδέτερο", "Ψυχρό"];
const BRIGHTS = ["Όλα", "Υψηλή", "Μέτρια", "Χαμηλή"];

function getRelated(color: VitexColor): VitexColor[] {
  const p = color.palette;
  return ALL.filter(c => c.palette === p && c.code !== color.code).slice(0, 6);
}

export default function ColorVisualizer() {
  const [search, setSearch] = useState("");
  const [family, setFamily] = useState("Όλα");
  const [warmth, setWarmth] = useState("Όλα");
  const [bright, setBright] = useState("Όλα");
  const [showFilters, setShowFilters] = useState(false);
  const [selected, setSelected] = useState<VitexColor | null>(null);

  const filtered = useMemo(() => {
    return ALL.filter(c => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.code.includes(search)) return false;
      if (family !== "Όλα" && c.family !== family) return false;
      if (warmth !== "Όλα" && c.warmth !== warmth) return false;
      if (bright !== "Όλα" && c.brightness !== bright) return false;
      return true;
    });
  }, [search, family, warmth, bright]);

  const activeFilters = [family, warmth, bright].filter(f => f !== "Όλα").length;

  function resetFilters() {
    setFamily("Όλα"); setWarmth("Όλα"); setBright("Όλα"); setSearch("");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-lg border-b border-border sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Αρχική</span>
          </Link>
          <h1 className="text-base md:text-lg font-bold text-foreground">🎨 Χρωματολόγιο Vitex</h1>
          <span className="text-xs text-muted">{filtered.length} αποχρώσεις</span>
        </div>

        {/* Toolbar */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 pb-3 flex gap-2 items-center flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input type="text" placeholder="Αναζήτηση..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface-light border border-border rounded-lg text-sm focus:outline-none focus:border-accent" />
          </div>

          <button onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-all ${activeFilters > 0 ? 'bg-accent text-white border-accent' : 'bg-white border-border text-muted hover:border-accent'}`}>
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            Φίλτρα {activeFilters > 0 && `(${activeFilters})`}
          </button>

          {activeFilters > 0 && (
            <button onClick={resetFilters} className="text-xs text-accent hover:underline">Επαναφορά</button>
          )}
        </div>

        {/* Filter panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border">
              <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 space-y-3">
                {/* Family */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-muted w-20">Οικογένεια</span>
                  {FAMILIES.map(f => (
                    <button key={f} onClick={() => setFamily(f)}
                      className={`px-2.5 py-1 rounded-md text-xs transition-all ${family === f ? 'bg-foreground text-white' : 'bg-surface-light text-muted hover:bg-surface-lighter'}`}>
                      {f}
                    </button>
                  ))}
                </div>
                {/* Brightness */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-muted w-20">Φωτεινότητα</span>
                  {BRIGHTS.map(b => (
                    <button key={b} onClick={() => setBright(b)}
                      className={`px-2.5 py-1 rounded-md text-xs transition-all ${bright === b ? 'bg-foreground text-white' : 'bg-surface-light text-muted hover:bg-surface-lighter'}`}>
                      {b}
                    </button>
                  ))}
                </div>
                {/* Warmth */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-muted w-20">Θερμότητα</span>
                  {WARMTHS.map(w => (
                    <button key={w} onClick={() => setWarmth(w)}
                      className={`px-2.5 py-1 rounded-md text-xs transition-all ${warmth === w ? 'bg-foreground text-white' : 'bg-surface-light text-muted hover:bg-surface-lighter'}`}>
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Color palette circles — family quick filter */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
        {FAMILIES.filter(f => f !== "Όλα").map(f => {
          const sample = ALL.find(c => c.family === f);
          return (
            <button key={f} onClick={() => setFamily(family === f ? "Όλα" : f)}
              className={`flex flex-col items-center gap-1 min-w-[50px] transition-all ${family === f ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}>
              <div className="w-8 h-8 rounded-full border-2 shadow-sm" style={{ backgroundColor: sample?.hex, borderColor: family === f ? '#C62828' : 'transparent' }} />
              <span className="text-[9px] text-muted font-medium">{f}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-8">
        <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 xl:grid-cols-13 gap-1.5">
          {filtered.map((color) => (
            <button key={color.code + color.name} onClick={() => setSelected(color)}
              className="group rounded-lg overflow-hidden border border-transparent hover:border-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="aspect-square" style={{ backgroundColor: color.hex }} />
              <div className="bg-white px-1 py-1">
                <p className="text-[8px] font-semibold text-foreground truncate">{color.name}</p>
                <p className="text-[7px] text-muted font-mono">{color.code}</p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">Δεν βρέθηκαν χρώματα</div>
        )}
      </div>

      {/* Detail panel — slide up */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-50" onClick={() => setSelected(null)} />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              {/* Handle */}
              <div className="flex justify-center py-2">
                <div className="w-10 h-1 bg-border rounded-full" />
              </div>

              {/* Close */}
              <button onClick={() => setSelected(null)} className="absolute top-3 right-4 w-8 h-8 rounded-full bg-surface-light flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>

              <div className="px-6 pb-8">
                {/* Color preview */}
                <div className="flex gap-5 items-start mb-6">
                  <div className="w-24 h-24 rounded-2xl shadow-lg flex-shrink-0" style={{ backgroundColor: selected.hex }} />
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{selected.name}</h2>
                    <div className="mt-3 space-y-1">
                      <div className="flex justify-between text-sm"><span className="text-muted">Κωδικός Χρώματος</span><span className="font-semibold">{selected.code}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted">Οικογένεια</span><span className="font-semibold">{selected.family}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted">Θερμότητα</span><span className="font-semibold">{selected.warmth}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted">Φωτεινότητα</span><span className="font-semibold">{selected.brightness}</span></div>
                    </div>
                  </div>
                </div>

                {/* Related colors */}
                {getRelated(selected).length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-3">🎨 Συνδυασμοί</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {getRelated(selected).map(c => (
                        <button key={c.code} onClick={() => setSelected(c)} className="rounded-lg overflow-hidden border border-border hover:border-accent/30 transition-all">
                          <div className="aspect-square" style={{ backgroundColor: c.hex }} />
                          <div className="bg-white px-1.5 py-1">
                            <p className="text-[8px] font-semibold truncate">{c.name}</p>
                            <p className="text-[7px] text-muted font-mono">{c.code}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link href="/#contact" className="block mt-6 bg-accent text-white text-center py-3 rounded-xl font-bold hover:bg-accent-light transition-colors">
                  Ζητήστε Εκτίμηση με αυτό το χρώμα
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="text-center py-6 text-[10px] text-muted">
        Vitex Global Collection · {ALL.length} αποχρώσεις
      </div>
    </div>
  );
}
