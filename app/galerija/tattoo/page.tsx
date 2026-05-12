import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Galerija tetovaža — Tattoo Studio Beograd",
  description:
    "Galerija tattoo radova — mini tattoo i tetovaže. Pogledajte radove Vesne Parojčić — Studio Revive Beograd.",
  url: `${SITE_URL}/galerija/tattoo`,
});

const images = [
  "IMG_0205-169x300.jpg",
  "IMG_0648-169x300.jpg",
  "IMG_1804-225x300.jpg",
  "IMG_1805-300x199.jpg",
  "IMG_1806-300x197.jpg",
  "IMG_3860-225x300.jpg",
  "IMG_3857-300x225.jpg",
  "IMG_3855-225x300.jpg",
  "IMG_3859-225x300.jpg",
  "IMG_4849-169x300.jpg",
  "IMG_6528-225x300.jpg",
  "IMG_6572-169x300.jpg",
  "IMG_6573-169x300.jpg",
  "IMG_6574-169x300.jpg",
  "IMG_6770-169x300.jpg",
  "gb-1-225x300.jpg",
];

export default function GalerijatattooPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight">
            Tattoo
          </h1>
        </div>

        <div className="w-full h-px bg-border" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <GalleryRow folder="tattoo" images={images} alt="Tattoo — Studio Revive Beograd" />
        </div>
      </main>
      <Footer />
    </>
  );
}
