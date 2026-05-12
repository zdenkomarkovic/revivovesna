import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Galerija — Puder obrve trajna šminka Beograd",
  description:
    "Galerija radova puder obrva i hairstroke tehnika. Rezultati trajne šminke obrva — Studio Revive Beograd, Vesna Parojčić.",
  url: `${SITE_URL}/galerija/obrve`,
});

const images = [
  "IMG_4438-2-224x300.jpg",
  "IMG_5035-300x225.jpg",
  "obrve10-169x300.jpeg",
  "obrve11-300x300.jpg",
  "obrve2-169x300.jpg",
  "obrve-300x169.jpg",
  "obrve3-169x300.jpg",
  "obrve4-169x300.jpg",
  "obrve5-169x300.jpg",
  "obrve6-169x300.jpg",
  "obrve7-169x300.jpeg",
  "obrve9-169x300.jpg",
  "po-169x300.png",
  "po-300x224.jpg",
];

export default function GalerijaObrvePage() {
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
            Puder obrve
          </h1>
        </div>

        <div className="w-full h-px bg-border" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <GalleryRow folder="obrve" images={images} alt="Puder obrve — Studio Revive Beograd" />
        </div>
      </main>
      <Footer />
    </>
  );
}
