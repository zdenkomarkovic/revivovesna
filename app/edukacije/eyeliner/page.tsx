import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Eyeliner Masterclass — PMU kurs Beograd",
  description:
    "Masterclass za senčeni ajlajner — soft, bold i priprema za takmičenje. Unapredite veštine uz profesionalnu obuku. Studio Revive Beograd.",
  url: `${SITE_URL}/edukacije/eyeliner`,
});

const ajlajnerImages = [
  "IMG_4564-1-224x300.png",
  "IMG_4484-1-169x300.png",
  "IMG_4456-1-169x300.png",
  "IMG_4455-1-224x300.jpg",
  "IMG_4351-1-169x300.jpg",
  "IMG_4265-1-224x300.png",
  "IMG_4262-1-224x300.png",
  "IMG_4222-1-222x300.jpg",
  "IMG_4060-1-224x300.png",
  "IMG_3820-1-224x300.png",
  "IMG_9202-225x300.jpeg",
  "IMG_9060-224x300.jpeg",
  "IMG_5067-300x225.jpg",
  "IMG_4548-224x300.jpeg",
  "IMG_4352-300x212.jpg",
  "IMG_1376-169x300.jpeg",
  "IMG_1037-224x300.jpg",
  "IMG_0313-224x300.jpeg",
];

const programi = [
  {
    broj: "01",
    naslov: "Senčeni Ajlajner — Soft",
    tekst:
      "Soft senčeni ajlajner stvara prirodan, suptilan izgled koji je savršen za dnevne i elegantne stilove. Polaznici uče kako da postignu efekt mekanog, postepenog prelaza boje koji vizuelno povećava oči.",
    tacke: [
      {
        title: "Tehnika senčenja",
        text: "Postepeno nanošenje boja i kreiranje mekih prelaza od svetlih prema tamnijim tonovima.",
      },
      {
        title: "Korekcija oblika očiju",
        text: "Prilagođavanje senčenog ajlajnera različitim oblicima očiju, čineći ih otvorenijim i svetlijim.",
      },
      {
        title: "Praktični rad",
        text: "Rad sa modelima — primena soft senčenog ajlajnera koji pruža elegantan i diskretan izgled.",
      },
    ],
  },
  {
    broj: "02",
    naslov: "Senčeni Ajlajner — Bold",
    tekst:
      "Bold senčeni ajlajner stvara dramatičniji i izraženiji izgled, savršen za osobe koje vole naglašeniji makeup. Tehnika koristi tamnije boje i naglašene linije uz senčenje koje dodaje dubinu i intenzitet.",
    tacke: [
      {
        title: "Tehnika bold senčenja",
        text: "Primena tamnijih tonova od unutrašnjeg kuta oka prema spoljnom kraju trepavica — dramatičan efekat.",
      },
      {
        title: "Preciznost i definicija",
        text: "Jasna, ali senčena linija koja je bold, ali ne previše oštra, sa savršenim balansiranim senčenjem.",
      },
      {
        title: "Praktični rad",
        text: "Različite tehnike za stvaranje dinamičnog i upečatljivog bold efekta na modelima.",
      },
    ],
  },
  {
    broj: "03",
    naslov: "Priprema za Takmičenje",
    tekst:
      "Masterclass dizajniran da vas pripremi za takmičenja u senčenju ajlajnera. Naučićete kako da optimizujete tehnike, pravilno prikažete rad i zadovoljavate standarde žirija.",
    tacke: [
      {
        title: "Tehnike za takmičenja",
        text: "Saveti kako da se istaknete — preciznost, umetnički izrađene linije, usklađenost boja, odabir modela, boja, igala i mašina.",
      },
      {
        title: "Kreativnost i originalnost",
        text: "Kombinovanje tehnika i dodavanje umetničkih elemenata koji privlače pažnju žirija.",
      },
      {
        title: "Mentorski saveti",
        text: "Iskustvo instruktora iz takmičenja — najčešće greške, prezentacija rada pred žirijem i kako ih izbeći.",
      },
    ],
  },
];

const prednosti = [
  {
    title: "Različite tehnike senčenja",
    text: "Naučićete kako da prilagodite senčeni ajlajner različitim prilikama — od suptilnog, prirodnog do dramatičnog bold efekta.",
  },
  {
    title: "Kreativnost",
    text: "Implementacija kreativnosti u rad, od elegantnog dnevnog do izražajnog večernjeg — svaki look prepoznatljiv i jedinstven.",
  },
  {
    title: "Priprema za takmičenje",
    text: "Konkretni alati za uspeh na regionalnim i međunarodnim takmičenjima u industriji lepote.",
  },
  {
    title: "Praktični rad",
    text: "Kroz rad sa modelima, polaznici usavršavaju tehnike uz direktno praćenje instruktora.",
  },
];

const vestine = [
  "Tehnike senčenja ajlajnera (soft i bold verzije)",
  "Kreiranje simetričnih i preciznih linija",
  "Prilagođavanje tehnika različitim oblicima očiju",
  "Veštine koje vas pripremaju za takmičenja",
  "Izbor i primena odgovarajućih boja za maksimalni efekat",
];

const zaKoga = [
  {
    title: "Kozmetičari i artisti",
    text: "Kozmetičari, šminkeri i permanent makeup artisti koji žele da prošire veštine u senčenju ajlajnera.",
  },
  {
    title: "Ljubitelji trajne šminke",
    text: "Koji žele da unaprede rad, postignu savršenstvo i ekspertski se bave senčenjem ajlajnera.",
  },
  {
    title: "Takmičari",
    text: "U oblasti lepote koji žele da se pripreme za nadolazeća takmičenja i savladaju tehnike koje ih čine konkurentnim.",
  },
];

export default function EyelinerMasterclassPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">
        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Edukacije · Masterclass
            </span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Eyeliner
            <br />
            <span className="italic text-gold-light">Masterclass</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Senčeni ajlajner — Soft / Bold / Priprema za takmičenje. Savršena prilika za
            profesionalce koji žele da unaprede veštine i istaknu se u industriji lepote.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Dve hero slike */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/eyeliner.png"
                alt="Eyeliner masterclass — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/eyeliner2.png"
                alt="Eyeliner masterclass — Studio Revive Beograd"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Program */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                Program masterclass-a
              </span>
            </div>
            <div className="flex flex-col gap-12">
              {programi.map((p, i) => (
                <div
                  key={p.broj}
                  className={`grid lg:grid-cols-2 gap-x-16 gap-y-8 ${i !== 0 ? "border-t border-border pt-12" : ""}`}
                >
                  <div className="flex gap-6">
                    <span className="font-serif text-4xl text-gold/20 font-light leading-none flex-shrink-0 pt-1">
                      {p.broj}
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl text-cream font-light mb-4">{p.naslov}</h2>
                      <p className="text-muted text-sm leading-7">{p.tekst}</p>
                    </div>
                  </div>
                  <ul className="space-y-5 lg:pt-1">
                    {p.tacke.map((t) => (
                      <li key={t.title} className="border-t border-border/50 pt-4">
                        <span className="block text-cream text-sm mb-1">{t.title}</span>
                        <p className="text-muted text-sm leading-6">{t.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Zašto ovaj masterclass */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Zašto je savršen za vas
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {prednosti.map((p) => (
              <div key={p.title} className="border-t border-border pt-6">
                <h3 className="font-serif text-lg text-cream font-light mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-6">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Veštine + Za koga */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">
                    Koje veštine ćete usavršiti
                  </span>
                </div>
                <ul className="space-y-4">
                  {vestine.map((v, i) => (
                    <li key={i} className="flex items-start gap-4 border-t border-border pt-4">
                      <span className="font-serif text-xl text-gold/20 font-light leading-none flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-muted text-sm leading-6">{v}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">Za koga je</span>
                </div>
                <div className="flex flex-col gap-6">
                  {zaKoga.map((z) => (
                    <div key={z.title} className="border-t border-border pt-5">
                      <h3 className="font-serif text-lg text-cream font-light mb-2">{z.title}</h3>
                      <p className="text-muted text-sm leading-6">{z.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija ajlajnera */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Galerija · Ajlajner
            </span>
          </div>
          <GalleryRow
            folder="ajlajner"
            images={ajlajnerImages}
            alt="Ajlajner — Studio Revive Beograd"
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
                  Postanite pravi profesionalac u senčenju ajlajnera.
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
