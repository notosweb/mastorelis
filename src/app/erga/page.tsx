import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Έργα | Μαστορέλης - Ελαιοχρωματισμοί & Ανακαινίσεις",
  description: "Δείτε τα ολοκληρωμένα έργα μας. 54 φωτογραφίες από ελαιοχρωματισμούς, ανακαινίσεις και τεχνοτροπίες στην Αττική.",
};

export default function ErgaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Gallery />
        <CTABanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
