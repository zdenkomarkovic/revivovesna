import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Laserska epilacija diodnim laserom | Studio Revive Beograd",
  description:
    "Laserska epilacija diodnim laserom — trajno smanjenje rasta dlačica, sigurno i bezbolno za sve tipove kože. Studio Revive Beograd.",
};

const prednosti = [
  {
    title: "Pogodan za sve tipove kože",
    text: "Diodni laser je prilagođen svim tipovima kože i dlačica, pružajući efikasne rezultate bez obzira na ton kože.",
  },
  {
    title: "Brz i bezbedan",
    text: "Tretman je brz i ne izaziva iritacije. Inovativna tehnologija osigurava precizno delovanje na folikul uz zaštitu okolne kože.",
  },
  {
    title: "Dugotrajni rezultati",
    text: "Već nakon nekoliko sesija primetićete vidljivo smanjenje dlačica. Dugotrajni rezultati uz minimalan broj naknadnih tretmana.",
  },
  {
    title: "Bezbolna tehnologija",
    text: "Sistem hlađenja integrisan u uređaj čini tretman gotovo bezbolnim i prijatnim, čak i na osetljivijim delovima tela.",
  },
];

export default function LaserEpilacijaPage() {
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
            Laserska epilacija<br />
            <span className="italic text-gold-light">diodnim laserom</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Najefikasniji tretman za trajno smanjenje rasta dlačica na svim delovima tela.
            Sigurno, bezbolno i prilagođeno svim tipovima kože.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/hairremoval.jpg"
                alt="Laserska epilacija diodnim laserom — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                U našem salonu nudimo lasersku epilaciju diodnim laserom, najefikasniji
                tretman za trajno smanjenje rasta dlačica na svim delovima tela. Ova
                metoda je sigurna, bezbolna i prilagođena svim tipovima kože, pružajući
                dugotrajne rezultate uz minimalan osećaj nelagodnosti.
              </p>
              <p className="text-muted text-base leading-7">
                Diodni laser deluje direktno na folikul dlake, sprečavajući njen ponovni
                rast, dok istovremeno čuva okolnu kožu. Zahvaljujući inovativnoj
                tehnologiji, tretman je brz i efikasan, a već nakon nekoliko sesija
                primetićete vidljivo smanjenje dlačica.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Prednosti */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Prednosti diodnog lasera</span>
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
        </div>

        <div className="w-full h-px bg-border" />

        {/* Paketi + konsultacije */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Konsultacije i paketi</span>
              </div>
              <p className="text-muted text-base leading-7">
                Naši stručnjaci pružaju besplatne konsultacije i prilagođavaju tretman
                vašem tipu kože i dlačica, kako biste postigli najbolje rezultate.
                Rezervišite svoj termin i uživajte u glatkoj koži tokom cele godine.
              </p>
            </div>
            <div className="border border-border p-8 self-start">
              <div className="text-xs text-gold tracking-[0.3em] uppercase mb-4">Dostupni paketi</div>
              <p className="text-cream text-base font-serif font-light mb-4 leading-snug">
                Celo telo ili pojedinačne regije
              </p>
              <p className="text-muted text-sm leading-7">
                Nudimo pakete prilagođene vašim potrebama — bilo da se radi o tretmanu
                celog tela ili pojedinih zona. Kontaktirajte nas za više informacija o
                cenama i dostupnim paketima.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="border-t border-border bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">Zakažite tretman</div>
                <p className="text-cream text-base">Besplatne konsultacije — kontaktirajte nas.</p>
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
