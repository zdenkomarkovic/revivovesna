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
  "IMG_0205.JPG",
  "IMG_0648.JPG",
  "IMG_1804.JPG",
  "IMG_1805.JPG",
  "IMG_1806.JPG",
  "IMG_3849.JPG",
  "IMG_3855.JPG",
  "IMG_3857.JPG",
  "IMG_3859.JPG",
  "IMG_3860.JPG",
  "IMG_4849.JPG",
  "IMG_6238.JPG",
  "IMG_6528.JPG",
  "IMG_6572.JPG",
  "IMG_6573.JPG",
  "IMG_6574.JPG",
  "IMG_6770.JPG",
  "IMG_7474 (1).JPG",
  "IMG_9189 (1).JPG",
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
