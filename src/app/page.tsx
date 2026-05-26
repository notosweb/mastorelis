import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import TrustBar from "@/components/TrustBar";
import HeroGallery from "@/components/HeroGallery";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HeroGallery />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
