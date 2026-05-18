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
  "IMG_9204.JPG",
  "IMG_9031.JPEG",
  "IMG_9016.PNG",
  "IMG_8878.JPEG",
  "IMG_8714.PNG",
  "IMG_8713.PNG",
  "IMG_8666.JPG",
  "IMG_8575.JPG",
  "IMG_8572.JPG",
  "IMG_8506.PNG",
  "IMG_8495.JPEG",
  "IMG_7204.JPG",
  "IMG_5278.PNG",
  "IMG_5237.JPG",
  "IMG_5219.JPEG",
  "IMG_5022.JPEG",
  "IMG_4939.JPG",
  "IMG_4555.JPG",
  "IMG_4250.JPG",
  "IMG_3555.PNG",
  "IMG_3521.JPG",
  "IMG_1499.JPEG",
  "IMG_0995.JPG",
  "IMG_0903.JPG",
  "IMG_0468.JPG",
  "IMG_0310.PNG",
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
