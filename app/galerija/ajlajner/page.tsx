import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Galerija — Trajni eyeliner ajlajner Beograd",
  description:
    "Galerija radova trajnog eyelinera — soft, bold, senčeni ajlajner. Studio Revive Beograd, Vesna Parojčić.",
  url: `${SITE_URL}/galerija/ajlajner`,
});

const images = [
  "IMG_0313.JPEG",
  "IMG_1037.PNG",
  "IMG_1376.JPEG",
  "IMG_4548.JPEG",
  "IMG_5307.JPG",
  "IMG_6692.JPG",
  "IMG_7409.PNG",
  "IMG_9060.JPEG",
  "IMG_9202.JPEG",
  "IMG_9298.JPG",
];

export default function GalerijaAjlajnerPage() {
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
            Ajlajner
          </h1>
        </div>

        <div className="w-full h-px bg-border" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <GalleryRow folder="ajlajner" images={images} alt="Trajni eyeliner — Studio Revive Beograd" />
        </div>
      </main>
      <Footer />
    </>
  );
}
