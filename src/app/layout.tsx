import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Μαστορέλης | Επαγγελματικοί Ελαιοχρωματισμοί & Ανακαινίσεις Αθήνα",
  description:
    "Ελαιοχρωματισμοί, θερμομόνωση, στεγανοποίηση, γυψοσανίδες και ανακαινίσεις στην Αθήνα και Αττική. 15+ χρόνια εμπειρίας. Δωρεάν εκτίμηση.",
  keywords:
    "ελαιοχρωματισμοί αθήνα, ανακαινίσεις αθήνα, θερμομόνωση, στεγανοποίηση, γυψοσανίδες, μαστορέλης, βαψίματα σπιτιών, ανακαίνιση σπιτιού",
  openGraph: {
    title: "Μαστορέλης | Επαγγελματικοί Ελαιοχρωματισμοί & Ανακαινίσεις",
    description:
      "Premium ελαιοχρωματισμοί και ανακαινίσεις στην Αθήνα. Δωρεάν εκτίμηση.",
    type: "website",
    locale: "el_GR",
    url: "https://mastorelis.gr",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://mastorelis.gr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
