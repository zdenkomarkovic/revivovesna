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
  "IMG_0313-224x300.jpeg",
  "IMG_1037-224x300.jpg",
  "IMG_1376-169x300.jpeg",
  "IMG_3820-1-224x300.png",
  "IMG_4060-1-224x300.png",
  "IMG_4222-1-222x300.jpg",
  "IMG_4262-1-224x300.png",
  "IMG_4265-1-224x300.png",
  "IMG_4351-1-169x300.jpg",
  "IMG_4352-300x212.jpg",
  "IMG_4455-1-224x300.jpg",
  "IMG_4456-1-169x300.png",
  "IMG_4484-1-169x300.png",
  "IMG_4548-224x300.jpeg",
  "IMG_4564-1-224x300.png",
  "IMG_5067-300x225.jpg",
  "IMG_9060-224x300.jpeg",
  "IMG_9202-225x300.jpeg",
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
