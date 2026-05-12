import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

const edukacijeImages = [
  "puderobrva.png",
  "eyeliner.jpg",
  "trajnasminka.jpg",
  "usavrsavanjetrajnesminke.jpg",
  "minitattoo.jpg",
];

export const metadata = buildMetadata({
  title: "Edukacije PMU i Tattoo Beograd",
  description:
    "Profesionalne edukacije za PMU i mini tattoo u Beogradu. Vesna Parojčić — internacionalna edukatorka sa 15+ godina iskustva. Individualno ili u malim grupama, sa sertifikatom.",
  url: `${SITE_URL}/edukacije`,
});

const kvaliteti = [
  {
    title: "Posvećen rad",
    text: "Strastveno radimo na svakom detalju, posvećeni pružanju visokokvalitetnih usluga i edukacija.",
  },
  {
    title: "Nagrađivana",
    text: "Naša stručnost i predanost prepoznati su na međunarodnom nivou, donoseći nam brojne nagrade i priznanja.",
  },
  {
    title: "Iskusna",
    text: "Sa dugogodišnjim iskustvom, pružamo edukacije koje osiguravaju stručno savladavanje svih tehnika i veština.",
  },
  {
    title: "Garantujemo rezultate",
    text: "Edukacije koje vam garantuju uspeh, sa naglaskom na praktično znanje i dugoročne rezultate.",
  },
];

const edukacije = [
  {
    tag: "Bazna obuka",
    naslov: "Puder obrve",
    tekst:
      "Bazna obuka za trajnu šminku — puder obrve, usne, kapke i mini tattoo. Edukacija koja omogućava polaznicima da steknu osnovna znanja i veštine za obavljanje tretmana trajne šminke i tetoviranja. Ovaj kurs je namenjen osobama koje žele da postanu profesionalci u oblasti trajne šminke, bilo da žele da započnu sopstveni biznis ili da unaprede svoje veštine u okviru postojećeg kozmetičkog salona.",
    slika: "/edukacije/puderobrva.png",
    href: "/edukacije/puder-obrve",
  },
  {
    tag: "Masterclass",
    naslov: "Eyeliner",
    tekst:
      "Savršena prilika za sve profesionalce u industriji lepote koji žele da unaprede svoje veštine u tehnici senčenog ajlajnera. Fokusiraćemo se na različite stilove senčenja — soft ili bold varijanta lajnera, a tu je i kurs pripreme za takmičenja u ovom segmentu, dajući vam alate i tehnike koje će vas izdvojiti od ostalih artista.",
    slika: "/edukacije/eyeliner.jpg",
    href: "/edukacije/eyeliner",
  },
  {
    tag: "Masterclass",
    naslov: "Trajna šminka usana",
    tekst:
      "Savršen za sve profesionalce koji žele da usavrše svoje veštine u izradi usana, kombinujući korejske tehnike sa evropskim, uz lični pristup svakom klijentu. Tokom ovog intenzivnog kursa naučićete kako da efikasno, brzo i precizno radite usne, koristeći najsavremenije tehnike koje spajaju najbolje iz Koreje i Evrope.",
    slika: "/edukacije/trajnasminka.jpg",
    href: "/edukacije/usne-masterclass",
  },
  {
    tag: "Usavršavanje",
    naslov: "Trajna šminka i tetoviranje",
    tekst:
      "Usavršavanje tehnika trajne šminke nakon bazne obuke predstavlja ključni korak za sve koji žele da unaprede svoje veštine i postanu stručnjaci u ovom specifičnom i zahtevnom polju. Nakon što ste savladali osnovne tehnike trajne šminke, usavršavanje omogućava dalji napredak, bolje razumevanje naprednih tehnika i veće profesionalne mogućnosti.",
    slika: "/edukacije/usavrsavanjetrajnesminke.jpg",
    href: "/edukacije/usavrsavanje",
  },
  {
    tag: "Edukacija",
    naslov: "Mini tattoo",
    tekst:
      "Mini tattoo je savremena i popularna tehnika koja se sve više koristi u industriji trajne šminke. Edukacija je posebno osmišljena za PMU artiste koji žele da prošire svoje veštine i ponude klijentima postizanje malih, detaljnih i preciznih tetovaža. Ova tehnika zahteva visoki nivo preciznosti, kreativnosti i razumevanja umetnosti tetoviranja u kontekstu PMU.",
    slika: "/edukacije/minitattoo.jpg",
    href: "/edukacije/mini-tattoo",
  },
];

export default function EdukacijePage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Studio Revive</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Edukacije
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Profesionalne edukacije za permanentnu šminku i mini tattoo — namenjene
            početnicima i iskusnim tehničarima. Individualno ili u malim grupama,
            sa radom na modelima i sertifikatom.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Edukator + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Edukatorka</span>
              </div>
              <h2 className="font-serif text-4xl text-cream font-light mb-6 leading-tight">
                Vesna Parojčić
              </h2>
              <p className="text-muted text-base leading-7 mb-6">
                Internacionalna edukatorka i diplomirani profesor likovne kulture, sa
                15+ godina iskustva. Edukacije obuhvataju sve tehnike — puder obrve,
                ajlajner i usne (lip blush), kroz teorijski i praktični deo, sa naglaskom
                na rad sa aparatima, pigmentima, higijeni i prilagođavanju tehnike tipu
                kože.
              </p>
              <p className="text-muted text-base leading-7">
                Obezbeđujemo kontinuiranu podršku i nakon obuke.
                Rezervišite svoje mesto i investirajte u svoje znanje.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {kvaliteti.map((k) => (
                <div key={k.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{k.title}</h3>
                  <p className="text-muted text-sm leading-6">{k.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Lista edukacija */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Programi edukacija</span>
            </div>

            <div className="flex flex-col gap-0">
              {edukacije.map((e, i) => (
                <div key={e.naslov}>
                  <div className={`grid lg:grid-cols-2 gap-16 items-center py-16 ${i !== 0 ? "border-t border-border" : ""}`}>
                    <div className={i % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                      <span className="text-gold text-xs tracking-[0.3em] uppercase">{e.tag}</span>
                      <h2 className="font-serif text-3xl lg:text-4xl text-cream font-light mt-3 mb-6 leading-tight">
                        {e.naslov}
                      </h2>
                      <div className="w-8 h-px bg-gold mb-6" />
                      <p className="text-muted text-base leading-7 mb-8">{e.tekst}</p>
                      {"href" in e && e.href && (
                        <a
                          href={e.href as string}
                          className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
                        >
                          Saznaj više
                          <span className="w-6 h-px bg-current" />
                        </a>
                      )}
                    </div>
                    <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}>
                      <Image
                        src={e.slika}
                        alt={`${e.naslov} — edukacija Studio Revive`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija · Edukacije</span>
          </div>
          <GalleryRow folder="edukacije" images={edukacijeImages} alt="Edukacije — Studio Revive Beograd" />
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="border-t border-border bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">Rezervišite mesto</div>
                <p className="text-cream text-base">Kontaktirajte nas i investirajte u svoje znanje.</p>
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
