import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tretmani from "@/components/sections/Tretmani";
import Education from "@/components/sections/Education";
import Edukacije from "@/components/sections/Edukacije";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL, STUDIO_PHONE, STUDIO_ADDRESS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Kozmetički Studio REVIVE Beograd | Vesna Parojčić — PMU & Tattoo Artist",
  description:
    "Kozmetički studio REVIVE Beograd — Vesna Parojčić, nagrađivani PMU & tattoo artist, edukator i sudija. Trajna šminka (obrve, eyeliner, usne), tetovaže i laser uklanjanje u Beogradu.",
  url: SITE_URL,
  image: "/og-image.jpg",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Studio Revive Beograd",
  description:
    "Kozmetički studio u Beogradu — trajna šminka (PMU), tetovaže, lasersko uklanjanje tetovaža, laserska epilacija i tretmani lica.",
  url: "https://vesnaparojcic.com",
  telephone: STUDIO_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: STUDIO_ADDRESS,
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.7866,
    longitude: 20.4489,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/vesna_parojcic/",
    "https://www.facebook.com/beogradtrajnasminka/",
  ],
  image: "https://vesnaparojcic.com/og-image.jpg",
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tretmani />
        <Edukacije />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
