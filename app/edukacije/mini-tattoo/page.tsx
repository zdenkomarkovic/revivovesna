import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";

const tattooImages = [
  "IMG_0205-169x300.jpg","IMG_0648-169x300.jpg","IMG_1804-225x300.jpg",
  "IMG_1805-300x199.jpg","IMG_1806-300x197.jpg","IMG_3860-225x300.jpg",
  "IMG_3857-300x225.jpg","IMG_3855-225x300.jpg","IMG_3859-225x300.jpg",
  "IMG_4849-169x300.jpg","IMG_6528-225x300.jpg","IMG_6572-169x300.jpg",
  "IMG_6573-169x300.jpg","IMG_6574-169x300.jpg","IMG_6770-169x300.jpg",
  "gb-1-225x300.jpg",
];

export const metadata = {
  title: "Mini Tattoo Edukacija za PMU Artiste | Studio Revive Beograd",
  description:
    "Edukacija za mini tattoo namenjena PMU artistima — teorija, rad sa modelima, sertifikat. Proširite svoje usluge. Studio Revive Beograd.",
};

const program = [
  {
    broj: "01",
    naslov: "Uvod u Mini Tattoo",
    podnaslov: "teorijski deo",
    tacke: [
      { title: "Osnove mini tattoo-a", text: "Poreklo, trenutni trendovi i definicija — umetnost stvaranja malih, detaljnih dizajna sa finim linijama u manjim dimenzijama." },
      { title: "Razlika između mini tattoo-a i PMU", text: "Ista oprema, drugačiji cilj — mini tattoo je usmeren na estetske umetničke dizajne, ne nužno korekciju prirodnog izgleda." },
      { title: "Vrste mini tattoo dizajna", text: "Floralni motivi, simboli, inicijali, sitni crteži — razumevanje stilova i odabir prema željama klijenata." },
      { title: "Sanitacija i sigurnost", text: "Higijenska pravila, pravilno korišćenje opreme i sigurnost tokom rada — ključ za svakog PMU umetnika pri tetoviranju." },
      { title: "Odabir boja i igala", text: "Koje boje se koriste za mini tattoo i kako odabrati odgovarajuće igle i mašine za ovu tehniku." },
    ],
  },
  {
    broj: "02",
    naslov: "Teorija o tehnici izrade",
    podnaslov: "osnove tetoviranja",
    tacke: [
      { title: "Osnove tetoviranja", text: "Razumevanje rada sa iglom, vrste igala za mini tattoo i kako ih koristiti za sitne, precizne linije." },
      { title: "Postupak i tehnika", text: "Pravilno nanošenje boja, postavka igle, tehnika senčenja za mekan i definisan efekat." },
      { title: "Prilagođavanje dizajna", text: "Kako prilagoditi dimenzije, stil i tehniku u zavisnosti od vrste kože i klijentovih želja." },
    ],
  },
  {
    broj: "03",
    naslov: "Rad sa modelima",
    podnaslov: "praktični deo",
    tacke: [
      { title: "Postavka dizajna", text: "Razumevanje kako postaviti dizajn na kožu — crtanje predloga pre nanošenja boje." },
      { title: "Nanošenje mini tattoo-a", text: "Početak rada sa finim iglama, pravilna primena boja, preciznost u linijama i senčenju." },
      { title: "Korekcija i detalji", text: "Kako ispraviti greške ili nesavršenosti tokom rada i kako obraditi modela po završetku." },
      { title: "Rad na različitim tipovima kože", text: "Masna, suva, osetljiva koža — razumevanje uticaja tipa kože na rezultat i prilagođavanje tehnike." },
      { title: "Posttretmanska nega", text: "Kako klijentima dati savete o negovanju mini tattoo-a za maksimalnu izdržljivost i dugoročnu postojanost." },
    ],
  },
];

const prednosti = [
  {
    title: "Proširenje usluga",
    text: "Dodajte mini tattoo u svoj portfelj — popularna usluga među klijentima koji žele malu tetovažu ili jedinstveni umetnički dizajn.",
  },
  {
    title: "Nove veštine",
    text: "Napredne tehnike nanošenja boje, senčenja i upotrebe finih igala — postanite specijalista za mini tattoo.",
  },
  {
    title: "Iskustvo sa modelima",
    text: "Neposredno sticanje iskustva radom sa stvarnim modelima daje sigurnost i samopouzdanje u radnoj praksi.",
  },
  {
    title: "Veći prihod",
    text: "Mini tattoo je popularna usluga koja privlači različite klijente i čini vas konkurentnijim na tržištu.",
  },
];

const zahtevi = [
  {
    title: "Prethodno iskustvo u PMU",
    text: "Edukacija je namenjena isključivo PMU artistima sa osnovnim znanjem o trajnoj šminki i radu sa aparatima, iglama i bojama.",
  },
  {
    title: "Spretnost i preciznost",
    text: "Tehnika zahteva visok nivo preciznosti — važno je da polaznici imaju iskustva u radu sa finim iglama i preciznim crtežima.",
  },
];

export default function MiniTattooEdukacijaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Edukacije · PMU artisti</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Mini Tattoo<br />
            <span className="italic text-gold-light">edukacija</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Savremena tehnika koja se sve više koristi u industriji trajne šminke —
            posebno osmišljeno za PMU artiste koji žele da prošire svoje usluge.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Dve hero slike + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tattoo.jpg"
                alt="Mini tattoo edukacija — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tattoo2.jpg"
                alt="Mini tattoo edukacija — Studio Revive Beograd"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="max-w-3xl">
            <p className="text-muted text-base leading-7">
              Edukacija za mini tattoo je posebno osmišljena za PMU artiste koji žele
              da prošire veštine i ponude klijentima dodatnu uslugu — postizanje malih,
              detaljnih i preciznih tetovaža koje se mogu koristiti za ukrašavanje ili
              kao trajna šminka. Ova tehnika zahteva visoki nivo preciznosti, kreativnosti
              i razumevanja umetnosti tetoviranja u kontekstu PMU.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Program */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Šta podrazumeva edukacija</span>
            </div>
            <div className="flex flex-col gap-12">
              {program.map((p, i) => (
                <div key={p.broj} className={`grid lg:grid-cols-2 gap-x-16 gap-y-8 ${i !== 0 ? "border-t border-border pt-12" : ""}`}>
                  <div className="flex gap-6">
                    <span className="font-serif text-4xl text-gold/20 font-light leading-none flex-shrink-0 pt-1">
                      {p.broj}
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl text-cream font-light mb-1">{p.naslov}</h2>
                      <span className="text-gold/50 text-xs tracking-[0.2em] uppercase">{p.podnaslov}</span>
                    </div>
                  </div>
                  <ul className="space-y-5">
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

        {/* Zahtevi */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Zahtevi za učešće</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {zahtevi.map((z) => (
              <div key={z.title} className="border border-border p-8">
                <h3 className="font-serif text-xl text-cream font-light mb-4">{z.title}</h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-muted text-sm leading-7">{z.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Prednosti + zaključak */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Prednosti edukacije</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {prednosti.map((p) => (
                <div key={p.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{p.title}</h3>
                  <p className="text-muted text-sm leading-6">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl border-t border-border pt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Zaključak</span>
              </div>
              <p className="text-muted text-base leading-7">
                Edukacija za mini tattoo namenjena PMU artistima omogućava im da prošire
                veštine i ponude klijentima visokokvalitetne, detaljne tetovaže koje su
                brzo postale trend. Kombinovanjem teorije i praktičnog rada sa modelima,
                polaznici savladaju sve aspekte rada sa mini tattoo tehnikom i stiču
                vredne veštine koje mogu odmah primeniti u svom poslu.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija · Tattoo radovi</span>
          </div>
          <GalleryRow folder="tattoo" images={tattooImages} alt="Mini tattoo — Studio Revive Beograd" />
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="border-t border-border bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">Rezervišite mesto</div>
                <p className="text-cream text-base">Kontaktirajte nas i proširite svoje usluge.</p>
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
