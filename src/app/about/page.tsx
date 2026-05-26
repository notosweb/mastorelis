import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Υπηρεσίες & Επικοινωνία | Μαστορέλης",
  description: "Ελαιοχρωματισμοί, μονώσεις, σπατουλαρίσματα, τεχνοτροπίες, μερεμέτια, ανακαινίσεις. Δωρεάν εκτίμηση στην Αττική.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
        <WhyChooseUs />
        <Process />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
