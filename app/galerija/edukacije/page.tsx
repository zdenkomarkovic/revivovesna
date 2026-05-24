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
  "180D738A-168B-4666-A235-21A28E8607D6.jpeg",
  "D3A1E1CE-0DFC-4EBE-8E73-57D57B4EA277.jpeg",
  "IMG_1868.jpeg",
  "IMG_3671.jpeg",
  "IMG_4665.jpeg",
  "IMG_5093.jpeg",
  "IMG_5852.jpeg",
  "IMG_6081.jpeg",
  "IMG_6835.jpeg",
  "IMG_7077.jpeg",
  "IMG_8231.jpeg",
  "2F0EB8BB-EE8A-4B03-B794-2733A53B0F19.jpeg",
  "4AB5D147-952B-42C5-B29E-1B82CA54C743.jpeg",
  "71E50983-66C5-4777-B40B-B48BA7266E54.jpeg",
  "A9344CB9-DAF2-4DD3-9E82-EF3C1AE94C81.jpeg",
  "C170A298-5010-4292-BEAD-9FF611031004.jpeg",
  "IMG_0351.jpeg",
  "IMG_0460.jpeg",
  "IMG_2741.jpeg",
  "IMG_3145.jpeg",
  "IMG_3564.jpeg",
  "IMG_9637.jpeg",
  "IMG_9808.jpeg",
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
