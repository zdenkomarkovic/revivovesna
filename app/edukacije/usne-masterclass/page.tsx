import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";

export const metadata = {
  title: "Usne Masterclass — Trajna šminka | Studio Revive Beograd",
  description:
    "Masterclass za trajnu šminku usana — autorska tehnika, korejski/evropski mix, brz i precizan rad. Dostupno i online. Studio Revive Beograd.",
};

const usneImages = [
  "IMG_9204-225x300.jpg","IMG_9016-225x300.jpg","IMG_9031-225x300.jpeg",
  "IMG_8878-224x300.jpeg","IMG_8713-169x300.jpg","IMG_8666-225x300.jpg",
  "IMG_8575-169x300.jpg","IMG_8572-169x300.jpg","IMG_8495-224x300.jpeg",
  "IMG_7204-224x300.jpg","IMG_5237-300x300.jpg","IMG_5219-169x300.jpeg",
  "IMG_4939-263x300.jpg","IMG_5022-135x300.jpeg","IMG_4555-242x300.jpg",
  "IMG_4250-169x300.jpg","IMG_3710-224x300.jpg","IMG_3521-169x300.jpg",
  "IMG_1499-224x300.jpeg","IMG_0995-193x300.jpg","IMG_0903-222x300.jpg",
  "IMG_0468-169x300.jpg",
];

const program = [
  {
    broj: "01",
    naslov: "Teorijski blok",
    podnaslov: "online",
    tekst: "Fokus na brzu i efikasnu primenu tehnika koje omogućavaju postizanje savršenih usana u kratkom vremenskom periodu. Idealno za profesionalce koji žele da povećaju produktivnost uz visok kvalitet rada.",
    tacke: [
      { title: "Tehnike brzog senčenja", text: "Postizanje prirodne, ali savršene linije i kolorizacije usana u što kraćem vremenu kroz odabir adekvatnih alata." },
      { title: "Efikasnost u radnoj praksi", text: "Minimalni ali precizni pokreti za brzo oblikovanje usana bez kompromisa na kvalitetu — vežba na latexu." },
      { title: "Optimizacija rada sa alatima", text: "Odgovarajuća oprema koja omogućava brzi i precizan rad, minimizacija vremena između koraka." },
      { title: "Tkivo usana i posebni slučajevi", text: "Bolesti, anestetici, alergije, fileri, ožiljno tkivo i fordyce spots." },
    ],
  },
  {
    broj: "02",
    naslov: "Demo rad na modelu",
    podnaslov: "skica · gradient · anestetici · unos boje",
    tekst: "Praktična demonstracija kompletnog procesa — od skice do unosa boje, uz objašnjenje svake faze rada.",
    tacke: [
      { title: "Gradient / kolorizacija usana", text: "Tehnika suptilnog gradijenta — sredina usne svetlija, spoljašnji delovi tamniji, za prirodan i nežan efekat." },
      { title: "Pravilno senčenje i oblikovanje", text: "Korišćenje tehnike za postizanje prirodnog izgleda uz savršen oblik usana." },
      { title: "Volumen bez prekomernog konturiranja", text: "Prirodni volumen bez naglašenih linija koje nisu u skladu sa prirodnim oblikom usana." },
    ],
  },
  {
    broj: "03",
    naslov: "Rad na modelu",
    podnaslov: "polaznici primenjuju stečeno znanje",
    tekst: "Polaznici samostalno primenjuju sve naučene tehnike na modelima uz neposrednu podršku instruktora.",
    tacke: [
      { title: "Fotografija i video", text: "Kako pravilno dokumentovati rezultate rada — fotografija, video i obrada materijala." },
      { title: "Društvene mreže", text: "Prezentacija radova na društvenim mrežama — kako prikazati svoj rad na pravi način." },
    ],
  },
];

const naucicete = [
  {
    title: "Brzi i precizan rad",
    text: "Tehnike koje omogućavaju profesionalni rezultat u što kraćem vremenu — idealne za rad u salonu.",
  },
  {
    title: "Korejski / Evropski mix",
    text: "Korejska tehnika za prirodan izgled sa hidratacijom i gradijentom, kombinovana sa evropskim tehnikama za savršen volumen i oblik.",
  },
  {
    title: "Personalizacija pristupa",
    text: "Prilagođavanje tehnike svakom klijentovom tipu usana i željama za jedinstvene rezultate.",
  },
  {
    title: "Brzi saveti i trikovi",
    text: "Kako ubrzati rad bez žrtvovanja kvaliteta i preciznosti.",
  },
];

const zaKoga = [
  {
    title: "Kozmetičari i šminkeri",
    text: "Koji žele da unaprede tehnike u izradi usana, kombinujući najbolje iz korejskih i evropskih pristupa.",
  },
  {
    title: "Profesionalci u industriji lepote",
    text: "Koji žele da nauče brži i efikasniji način rada sa usnama bez gubitka kvaliteta.",
  },
  {
    title: "Ljubitelji umetnosti šminke",
    text: "Koji žele da postanu stručnjaci za izradu savršenih usana i implementaciju najnovijih tehnika.",
  },
];

export default function UsneMasterclassPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Edukacije · Masterclass</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Usne za 45 minuta
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Masterclass za trajnu šminku usana — autorska tehnika nastala kombinovanjem
            korejskih i evropskih principa. Dostupno uživo i online.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Dve hero slike */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/usne.jpg"
                alt="Masterclass trajna šminka usana — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/usne2.jpeg"
                alt="Masterclass trajna šminka usana — Studio Revive Beograd"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Autorska tehnika */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">Autorska tehnika</span>
                </div>
                <p className="text-muted text-base leading-7 mb-6">
                  Ovo je moja autorska tehnika do koje sam došla radeći godinama PMU i tattoo,
                  kombinujući različite principe u izradi usana — sve u cilju postizanja ličnog
                  komfora i poštujući klijentove želje.
                </p>
                <p className="text-muted text-base leading-7">
                  Ovaj masterclass je savršen za sve profesionalce u industriji lepote koji
                  žele da usavrše veštine u izradi usana, kombinujući korejske tehnike sa
                  evropskim, uz lični pristup svakom klijentu.
                </p>
              </div>
              <div className="border border-border p-8">
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-4">Dostupno i online</div>
                <p className="text-cream text-base font-serif font-light mb-4 leading-snug">
                  Masterclass možete pohađati uživo ili online
                </p>
                <p className="text-muted text-sm leading-7">
                  Tokom ovog intenzivnog kursa naučićete kako da efikasno, brzo i precizno
                  radite usne, koristeći najsavremenije tehnike koje spajaju najbolje iz
                  Koreje i Evrope.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Program */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Program masterclass-a</span>
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
                    <p className="text-muted text-sm leading-7 mt-4">{p.tekst}</p>
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

        <div className="w-full h-px bg-border" />

        {/* Šta ćete naučiti */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Šta ćete naučiti</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {naucicete.map((n) => (
                <div key={n.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{n.title}</h3>
                  <p className="text-muted text-sm leading-6">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Za koga */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Za koga je masterclass</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {zaKoga.map((z) => (
              <div key={z.title} className="border-t border-border pt-6">
                <h3 className="font-serif text-lg text-cream font-light mb-3">{z.title}</h3>
                <p className="text-muted text-sm leading-6">{z.text}</p>
              </div>
            ))}
          </div>
          <p className="text-muted text-sm leading-7 mt-12 max-w-3xl">
            Masterclass za brzi rad usana je savršena prilika da naučite napredne tehnike
            koje će vam pomoći da postignete savršenstvo u izradi usana, ubrzate svoj radni
            proces i stvorite prirodne, ali izražene usne koje će zadovoljiti sve klijente.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija usana */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija · Usne</span>
            </div>
            <GalleryRow folder="usne" images={usneImages} alt="Trajna šminka usana — Studio Revive Beograd" />
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="border-t border-border bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">Rezervišite mesto</div>
                <p className="text-cream text-base">Dostupno uživo i online — kontaktirajte nas.</p>
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
