import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { tattooImages } from "@/lib/gallery-data";

export const metadata = buildMetadata({
  title: "Tetovaže — Tattoo Studio Beograd",
  description:
    "Vrhunske usluge tetoviranja uz najviše standarde higijene i profesionalizma. Mali i veliki tatoo radovi, prilagođeni vašoj viziji — Studio Revive Beograd.",
  url: `${SITE_URL}/tretmani/tattoo`,
});

export default function TattooPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Profesionalni<br />
            <span className="italic text-gold-light">tretman tetoviranja</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            U našem salonu nudimo vrhunske usluge tetoviranja uz najviše standarde
            higijene i profesionalizma. Bilo da želite malu, diskretnu tetovažu ili
            kompleksan umetnički dizajn, naš tim iskusnih tattoo majstora će vam
            pomoći da ostvarite svoju viziju.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + opis */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/tattoo.jpg"
                alt="Tetovaže — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Koristimo visokokvalitetne boje i sterilnu opremu kako bismo osigurali
                bezbedan i dugotrajan rezultat. Pre samog tretmana, pružamo konsultacije
                kako bismo zajedno odabrali idealan dizajn, stil i tehniku koja najbolje
                odgovara vašim željama.
              </p>
              <p className="text-muted text-base leading-7">
                Proces tetoviranja je potpuno prilagođen klijentu — vodimo računa o vašem
                komforu i detaljno vas informišemo o nezi nakon tretmana kako bi vaša
                tetovaža ostala lepa i postojana. Posetite nas i izrazite svoju
                jedinstvenost kroz umetnost tetoviranja!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija radova</span>
            </div>
            <GalleryRow folder="tattoo" images={tattooImages} alt="Tattoo rad — Studio Revive Beograd" />
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="border-t border-border bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">Zakažite tetovažu</div>
                <p className="text-cream text-base">Kontaktirajte nas za konsultaciju i zakazivanje.</p>
              </div>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200 flex-shrink-0"
              >
                Zakažite termin
                <span className="w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
