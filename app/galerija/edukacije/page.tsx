import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Galerija edukacija PMU i mini tattoo Beograd",
  description:
    "Galerija PMU i mini tattoo edukacija — radovi polaznika Vesne Parojčić. Studio Revive Beograd.",
  url: `${SITE_URL}/galerija/edukacije`,
});

const images = [
  "IMG_0210-169x300.jpeg",
  "IMG_0415-225x300.jpg",
  "IMG_0462-169x300.jpg",
  "IMG_1444-225x300.jpg",
  "IMG_1470-225x300.jpg",
  "IMG_2674-225x300.jpg",
  "IMG_2784-225x300.jpeg",
  "IMG_3125-200x300.jpeg",
  "IMG_3147-199x300.jpeg",
  "IMG_4267-223x300.jpeg",
  "IMG_4311-189x300.jpeg",
  "IMG_4318-169x300.jpg",
];

export default function GalerijaEdukacijePage() {
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
            Edukacije
          </h1>
        </div>

        <div className="w-full h-px bg-border" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <GalleryRow folder="galerijaedukacija" images={images} alt="Edukacije — Studio Revive Beograd" />
        </div>
      </main>
      <Footer />
    </>
  );
}
