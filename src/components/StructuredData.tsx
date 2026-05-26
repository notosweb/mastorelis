export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "ΕΛΑΙΟΧΡΩΜΑΤΙΣΜΟΙ-ΑΝΑΚΑΙΝΙΣΕΙΣ ΕΛΛΗΝΙΚΟ | THANOS MASTORELIS",
    description:
      "Ελαιοχρωματισμοί παντός τύπου, μονώσεις, μερεμέτια, σπατουλαρίσματα, τεχνοτροπίες. Συνέπεια, καλή και καθαρή δουλειά, καλές τιμές, πολυετής εμπειρία. Εντός Αττικής και σε όλη την Ελλάδα.",
    url: "https://mastorelis.gr",
    telephone: "+306971843971",
    email: "info@mastorelis.gr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Αμαζόνων 55",
      addressLocality: "Ελληνικό",
      postalCode: "167 77",
      addressRegion: "Αττική",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.8875,
      longitude: 23.7462,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.9838,
        longitude: 23.7275,
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "23:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "118",
    },
    priceRange: "$$",
    image: "https://mastorelis.gr/images/logo.png",
    sameAs: [
      "https://www.facebook.com/mastorelis",
      "https://www.instagram.com/mastorelis",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
