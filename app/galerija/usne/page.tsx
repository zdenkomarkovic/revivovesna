import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Galerija — Trajna šminka usana Beograd",
  description:
    "Galerija radova trajne šminke usana — konture, akvarelne i puder usne. Studio Revive Beograd, Vesna Parojčić.",
  url: `${SITE_URL}/galerija/usne`,
});

const images = [
  "IMG_9204-225x300.jpg",
  "IMG_9016-225x300.jpg",
  "IMG_9031-225x300.jpeg",
  "IMG_8878-224x300.jpeg",
  "IMG_8713-169x300.jpg",
  "IMG_8666-225x300.jpg",
  "IMG_8575-169x300.jpg",
  "IMG_8572-169x300.jpg",
  "IMG_8495-224x300.jpeg",
  "IMG_7204-224x300.jpg",
  "IMG_5237-300x300.jpg",
  "IMG_5219-169x300.jpeg",
  "IMG_4939-263x300.jpg",
  "IMG_5022-135x300.jpeg",
  "IMG_4555-242x300.jpg",
  "IMG_4250-169x300.jpg",
  "IMG_3710-224x300.jpg",
  "IMG_3521-169x300.jpg",
  "IMG_1499-224x300.jpeg",
  "IMG_0995-193x300.jpg",
  "IMG_0903-222x300.jpg",
  "IMG_0468-169x300.jpg",
];

export default function GalerijaUsnePage() {
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
            Usne
          </h1>
        </div>

        <div className="w-full h-px bg-border" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <GalleryRow folder="usne" images={images} alt="Trajna šminka usana — Studio Revive Beograd" />
        </div>
      </main>
      <Footer />
    </>
  );
}
