import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tretmani lica | Studio Revive Beograd",
  description:
    "Profesionalna nega lica — higijenski tretman, hydrafacial, masaža, carbon peeling i fitopiling. Prilagođeno vašem tipu kože. Studio Revive Beograd.",
};

const tretmani = [
  {
    tag: "Osnovna nega",
    naslov: "Higijenski tretman lica",
    tekst:
      "Osnovni korak ka zdravoj koži — ovaj tretman podrazumeva detaljno čišćenje lica, uklanjanje nečistoća, viška sebuma i mitisera. Idealan je za masnu, kombinovanu i problematičnu kožu, ali i kao redovan deo rutinske nege.",
    href: null,
  },
  {
    tag: "Hidratacija i sjaj",
    naslov: "Hydrafacial tretman",
    tekst:
      "Savremeni tretman koji kombinuje čišćenje, eksfolijaciju, hidrataciju i antioksidativnu zaštitu. Zahvaljujući vakuumskoj tehnologiji i aktivnim serumima, koža postaje osvežena, hidrirana i blistava — bez iritacija i crvenila.",
    href: "/tretmani/hydrafacial",
  },
  {
    tag: "Opuštanje i regeneracija",
    naslov: "Masaža lica i dekoltea",
    tekst:
      "Više od opuštanja — masaža stimuliše cirkulaciju, poboljšava tonus kože i podstiče prirodnu regeneraciju. Redovnom primenom, koža postaje elastičnija, a znakovi umora i stresa se smanjuju.",
    href: "/tretmani/relaks-masaza",
  },
  {
    tag: "Laserski tretman",
    naslov: "Carbon peeling (karbonski piling)",
    tekst:
      "Neinvazivni laserski tretman sa aktivnim ugljem koji dubinski čisti pore, matira kožu, smanjuje sitne bore i ujednačava ten. Posebno efikasan kod masne i aknozne kože.",
    href: null,
  },
  {
    tag: "Prirodna nega",
    naslov: "Fitopiling — prirodna regeneracija kože",
    tekst:
      "Fitopiling je biljni tretman baziran na prirodnim enzimima i ekstraktima algi, koji vrši blagu, ali dubinsku eksfolijaciju kože, podstiče obnavljanje ćelija i poboljšava mikrocirkulaciju. Idealan je za osobe koje žele efekat hemijskog pilinga, ali na potpuno prirodan i nežan način. Rezultat: ujednačen ten, smanjene pore i vidljivo osvežen izgled kože već nakon prvog tretmana.",
    href: null,
  },
];

export default function TretmaniLicaPage() {
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
            Tretmani lica<br />
            <span className="italic text-gold-light">profesionalna nega</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Zdravi i blistav ten. Svaki tretman je prilagođen tipu i stanju kože klijenta,
            sa ciljem postizanja dugoročnih rezultata i očuvanja zdravlja kože.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/tretmanilica.png"
                alt="Tretmani lica — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                U našem salonu tretmane lica izvodi stručnjak — kozmetičar estetičar,
                sa bogatim znanjem i iskustvom u nezi kože.
              </p>
              <p className="text-muted text-base leading-7">
                Svaki tretman je prilagođen tipu i stanju kože klijenta, sa ciljem
                postizanja dugoročnih rezultata i očuvanja zdravlja kože.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Tretmani */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Naši tretmani lica</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {tretmani.map((t, i) => (
                <div
                  key={t.naslov}
                  className={`border border-border p-8 flex flex-col ${
                    i === tretmani.length - 1 && tretmani.length % 2 !== 0
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
                  <span className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t.tag}</span>
                  <h2 className="font-serif text-2xl text-cream font-light mb-4 leading-snug">{t.naslov}</h2>
                  <div className="w-8 h-px bg-gold mb-5" />
                  <p className="text-muted text-sm leading-7 flex-1">{t.tekst}</p>
                  {t.href && (
                    <a
                      href={t.href}
                      className="mt-6 self-start inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
                    >
                      Saznaj više
                      <span className="w-5 h-px bg-current" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Zaključak */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Individualni pristup</span>
            </div>
            <p className="font-serif text-2xl lg:text-3xl text-cream font-light leading-snug">
              Zakoračite u svet profesionalne nege.
            </p>
            <p className="text-muted text-base leading-7 mt-6">
              Vaša koža zaslužuje individualan pristup i kvalitetnu pažnju — prepustite
              je rukama proverenog stručnjaka.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="border-t border-border bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">Zakažite tretman</div>
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
