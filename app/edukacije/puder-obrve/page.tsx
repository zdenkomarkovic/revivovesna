import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Edukacija Puder Obrve — PMU kurs Beograd",
  description:
    "Bazna obuka za trajnu šminku — puder obrve, usne, kapke i mini tattoo. Teorijski i praktični deo, sertifikat. Vesna Parojčić Studio Revive Beograd.",
  url: `${SITE_URL}/edukacije/puder-obrve`,
});

const obrveImages = [
  "IMG_4438-2-224x300.jpg",
  "po-169x300.png",
  "po-300x224.jpg",
  "IMG_5035-300x225.jpg",
  "obrve-300x169.jpg",
  "obrve2-169x300.jpg",
  "obrve3-169x300.jpg",
  "obrve4-169x300.jpg",
  "obrve5-169x300.jpg",
  "obrve6-169x300.jpg",
  "obrve7-169x300.jpeg",
  "obrve9-169x300.jpg",
  "obrve10-169x300.jpeg",
  "obrve11-300x300.jpg",
];

const korisnici = [
  {
    title: "Kozmetičari",
    text: "Osobe koje se već bave ulepšavanjem lica i žele da prošire svoje usluge uvođenjem trajne šminke ili mini tattoo.",
  },
  {
    title: "Šminkeri i vizuelni umetnici",
    text: "Koji žele da uče nove tehnike i podignu svoj rad na viši nivo.",
  },
  {
    title: "Novi u industriji lepote",
    text: "Osobe koje nemaju prethodnog iskustva, ali žele da nauče kako da rade trajnu šminku i izgrade karijeru.",
  },
  {
    title: "Lični asistenti i stručnjaci",
    text: "Koji žele da prošire svoju ponudu i nauče kako da apliciraju tehnike trajne šminke.",
  },
];

export default function PuderObrveEdukacijaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">
        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Edukacije · Bazna obuka
            </span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Puder obrve
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Bazna obuka za trajnu šminku — puder obrve, usne, kapke i mini tattoo. Edukacija koja
            omogućava polaznicima da steknu osnovna znanja i veštine za obavljanje tretmana trajne
            šminke i tetoviranja.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Dve hero slike */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/edukacija obrve.jpg"
                alt="Edukacija puder obrve — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/edukacija obrve2.jpg"
                alt="Edukacija puder obrve — Studio Revive Beograd"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Za koga je namenjena */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                Za koga je namenjena
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {korisnici.map((k) => (
                <div key={k.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{k.title}</h3>
                  <p className="text-muted text-sm leading-6">{k.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Šta podrazumeva */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Šta podrazumeva</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-6">
              <span className="font-serif text-4xl text-gold/20 font-light leading-none flex-shrink-0 pt-1">
                01
              </span>
              <div>
                <h3 className="font-serif text-xl text-cream font-light mb-3">
                  Teorijski deo
                  <span className="text-muted text-base font-sans font-normal ml-2">
                    (online, do mesec dana)
                  </span>
                </h3>
                <p className="text-muted text-sm leading-7">
                  Anatomija kože, higijena i sterilizacija, teorija boja, upoznavanje sa različitim
                  vrstama igala i aparata, kao i zakonske regulative i etički aspekti trajne šminke.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="font-serif text-4xl text-gold/20 font-light leading-none flex-shrink-0 pt-1">
                02
              </span>
              <div>
                <h3 className="font-serif text-xl text-cream font-light mb-3">
                  Praktični deo
                  <span className="text-muted text-base font-sans font-normal ml-2">
                    (uživo, 2–6 dana)
                  </span>
                </h3>
                <p className="text-muted text-sm leading-7">
                  Vežbanje primene trajne šminke na modelima, rad na različitim regijama (obrve,
                  eyeliner, usne), odabir boja koje odgovaraju klijentovom tenu, rad sa opremom i
                  implementacija preciznosti u aplikaciji.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Cilj + sertifikat */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">Cilj obuke</span>
                </div>
                <p className="text-muted text-base leading-7">
                  Polaznici nauče kako da bezbedno i efikasno primenjuju trajnu šminku, čineći
                  klijente zadovoljnim i pružajući im dugotrajan estetski efekat. Obuka pruža osnovu
                  za dalji razvoj u ovoj oblasti i mogućnost specijalizacije u naprednijim
                  tehnikama.
                </p>
              </div>
              <div className="border border-border p-8 self-start">
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-4">Sertifikat</div>
                <p className="text-cream text-base font-serif font-light mb-4 leading-snug">
                  Po završetku kursa dobijate sertifikat
                </p>
                <p className="text-muted text-sm leading-7">
                  Sertifikat potvrđuje da ste prošli obuku i da ste sposobni za profesionalni rad sa
                  trajnom šminkom.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija radova */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija · Obrve</span>
          </div>
          <GalleryRow
            folder="obrve"
            images={obrveImages}
            alt="Puder obrve — Studio Revive Beograd"
          />
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="border-t border-border bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">
                  Rezervišite mesto
                </div>
                <p className="text-cream text-base">
                  Kontaktirajte nas i investirajte u svoje znanje.
                </p>
              </div>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200 flex-shrink-0"
              >
                Zakažite edukaciju
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
