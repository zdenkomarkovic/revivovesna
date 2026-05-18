import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Anticelulit masaže i limfna drenaža Beograd",
  description:
    "Anticelulit masaže i limfna drenaža — smanjenje celulita, poboljšanje cirkulacije, eliminacija toksina i lakoća tela. Studio Revive Beograd.",
  url: `${SITE_URL}/tretmani/anticelulit-masaze`,
});

const benefiti = [
  { title: "Smanjenje celulita", text: "Vidljivo zaglađivanje kože i smanjenje narančaste kore uz ciljane tehnike." },
  { title: "Cirkulacija i tonus", text: "Poboljšanje cirkulacije, tonusa i teksture kože tretiranih regija." },
  { title: "Eliminacija toksina", text: "Podrška limfnom sistemu u eliminaciji viška tečnosti i toksina iz tela." },
  { title: "Relaksacija", text: "Opuštanje i smanjenje napetosti u telu uz prijatan osećaj lakoće." },
];

const limfnaDrenazaIndikacije = [
  "Oticanje nogu i tela",
  "Osećaj težine u nogama",
  "Usporena cirkulacija",
  "Zadržavanje vode",
  "Umor i nadutost",
];

export default function AnticeululiMasazePage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani tela</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Anticelulit masaže<br />
            <span className="italic text-gold-light">i limfna drenaža</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Pružite svom telu tretman koji ne deluje samo estetski, već i regenerativno —
            lakše telo, glađa koža, bolja cirkulacija.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/anticelulit-masaze.jpg"
                alt="Anticelulit masaže i limfna drenaža — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Anticelulit masaže i limfna drenaža pomažu u smanjenju zadržavanja tečnosti,
                poboljšanju cirkulacije i vidljivom zaglađivanju kože, uz osećaj lakoće i
                rasterećenja tela.
              </p>
              <p className="text-muted text-base leading-7">
                Kombinacijom manuelnih tehnika i ciljane stimulacije problematičnih regija,
                tretmani podstiču limfni sistem, ubrzavaju eliminaciju toksina i doprinose
                oblikovanju tela na prirodan način.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Benefiti */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Benefiti tretmana</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefiti.map((b) => (
                <div key={b.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{b.title}</h3>
                  <p className="text-muted text-sm leading-6">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {["Osećaj lakših nogu i manjeg otoka", "Poboljšanje zategnutosti kože", "Podrška procesu mršavljenja i oblikovanja tela"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gold flex-shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Limfna drenaža + Anticelulit masaže */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Limfna drenaža</span>
              </div>
              <p className="text-muted text-base leading-7 mb-8">
                Limfna drenaža je nežna, ali veoma efikasna tehnika koja stimuliše rad limfnog
                sistema i pomaže telu da se oslobodi viška tečnosti i toksina. Idealna je za
                osobe koje imaju:
              </p>
              <ul className="space-y-4">
                {limfnaDrenazaIndikacije.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gold flex-shrink-0 mt-2" />
                    <span className="text-muted text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Anticelulit masaže</span>
              </div>
              <p className="text-muted text-base leading-7 mb-6">
                Ciljanim pokretima i intenzivnijim tehnikama, anticelulit masaža deluje na
                problematične regije poput stomaka, nogu i bokova, pomažući u razbijanju masnih
                naslaga i poboljšanju izgleda kože.
              </p>
              <p className="text-muted text-base leading-7">
                Za najbolje rezultate preporučuje se serija tretmana uz adekvatnu hidrataciju i
                balansiran način života.
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
