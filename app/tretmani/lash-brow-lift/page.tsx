import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Lash & Brow Lift | Studio Revive Beograd",
  description:
    "Lash lift i brow lift tretmani — prirodno podignute, definisane i negovane trepavice i obrve. Studio Revive Beograd.",
};

const tretmani = [
  {
    tag: "Lash Lift",
    naslov: "Podignute i negovane trepavice",
    tekst:
      "Lash lift je tretman koji podiže, uvija i vizuelno produžava prirodne trepavice, bez potrebe za ekstenzijama ili maskarom. Zahvaljujući keratinskoj nezi, trepavice postaju jače, gušće i sjajnije, a efekat traje od 6 do 8 nedelja.",
    detalj: "Efekat traje 6–8 nedelja",
  },
  {
    tag: "Brow Lift",
    naslov: "Oblikovane i uredne obrve",
    tekst:
      "Brow lift je tretman oblikovanja obrva koji ih podiže, fiksira i daje im puniji i uredan izgled. Idealno je rešenje za neukrotive ili retke obrve, jer stvara efekat gustine i simetrije, a rezultat traje do 6 nedelja.",
    detalj: "Efekat traje do 6 nedelja",
  },
];

export default function LashBrowLiftPage() {
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
            Lash & Brow<br />
            <span className="italic text-gold-light">Lift</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Savršeno oblikovane trepavice i obrve. Prirodno podignut, definisan i negovan
            izgled bez ekstenzija i svakodnevnog stilizovanja.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/lash&browlift.jpg"
                alt="Lash & Brow Lift — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                U našem salonu nudimo vrhunske tretmane lash lifta i brow lifta, koji
                vašim trepavicama i obrvama daju prirodno podignut, definisan i negovan
                izgled.
              </p>
              <p className="text-muted text-base leading-7">
                Oba tretmana su bezbolna i potpuno bezbedna, a naš tim stručnjaka
                pobrinuće se da postignete željeni izgled uz vrhunsku negu i profesionalni
                pristup.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Lash Lift + Brow Lift */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {tretmani.map((t) => (
                <div key={t.tag} className="border border-border p-8">
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">{t.tag}</span>
                  <h2 className="font-serif text-2xl text-cream font-light mt-3 mb-6 leading-snug">
                    {t.naslov}
                  </h2>
                  <div className="w-8 h-px bg-gold mb-6" />
                  <p className="text-muted text-sm leading-7 mb-6">{t.tekst}</p>
                  <span className="text-xs text-gold/60 tracking-[0.2em] uppercase">{t.detalj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Edukacije */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Rezervišite termin</span>
              </div>
              <p className="text-muted text-base leading-7">
                Rezervišite svoj termin i istaknite prirodnu lepotu svojih trepavica i
                obrva. Naš tim stručnjaka prilagođava svaki tretman individualnim
                karakteristikama klijenta za optimalne rezultate.
              </p>
            </div>
            <div className="border border-border p-8 self-start">
              <div className="text-xs text-gold tracking-[0.3em] uppercase mb-4">Edukacije</div>
              <p className="text-cream text-base font-serif font-light mb-4 leading-snug">
                Dostupne su edukacije za PMU artiste
              </p>
              <p className="text-muted text-sm leading-7">
                Nudimo edukacije iz lash lift i brow lift tretmana namenjene PMU artistima
                koji žele da prošire svoju ponudu usluga.
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
