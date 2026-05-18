import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { obrveImages } from "@/lib/gallery-data";

export const metadata = buildMetadata({
  title: "Galerija — Puder obrve trajna šminka Beograd",
  description:
    "Galerija radova puder obrva i hairstroke tehnika. Rezultati trajne šminke obrva — Studio Revive Beograd, Vesna Parojčić.",
  url: `${SITE_URL}/galerija/obrve`,
});

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
          <GalleryRow folder="obrve" images={obrveImages} alt="Puder obrve — Studio Revive Beograd" />
        </div>
      </main>
      <Footer />
    </>
  );
}
