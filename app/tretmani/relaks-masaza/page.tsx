import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Relaks masaža lica, vrata i dekoltea | Studio Revive Beograd",
  description:
    "Ritual opuštanja koji umiruje um, podstiče cirkulaciju i vraća koži svežinu i blistavost. Studio Revive Beograd.",
};

const prednosti = [
  {
    title: "Oslobađa napetost",
    text: "Nežni i ritmični pokreti opuštaju mišiće lica i vrata, otklanjajući nakupljenu napetost i stres.",
  },
  {
    title: "Poboljšava cirkulaciju",
    text: "Stimulacija limfne drenaže i protoka kiseonika aktivira prirodne procese obnove i revitalizacije kože.",
  },
  {
    title: "Podstiče regeneraciju",
    text: "Masaža aktivira prirodnu regeneraciju kože, vraćajući joj elastičnost, svežinu i zdrav sjaj.",
  },
  {
    title: "Ublažava znake umora",
    text: "Vidljivo smanjuje znake umora i stresa, ostavljajući lice odmornijim, blistavijim i opuštenim.",
  },
];

export default function RelaksMasazaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani lica</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Relaks masaža<br />
            <span className="italic text-gold-light">lica, vrata i dekoltea</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Usporite tempo i dozvolite sebi trenutke duboke relaksacije.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/relaks-masaza.jpg"
                alt="Relaks masaža lica, vrata i dekoltea — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Relaks masaža lica, vrata i dekoltea nije samo tretman — to je ritual
                opuštanja koji umiruje um, podstiče cirkulaciju i vraća koži svežinu
                i blistavost.
              </p>
              <p className="text-muted text-base leading-7">
                Tokom tretmana koristimo nežne i ritmične pokrete kako bi opustili
                mišiće lica, vrata i dekoltea, istovremeno stimulišući cirkulaciju
                i limfnu drenažu.
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Šta masaža pruža</span>
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

        {/* Preporuka */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Kome je namenjena</span>
            </div>
            <p className="text-muted text-base leading-7 mb-8">
              Posebno se preporučuje osobama koje puno vremena provode za računarom,
              osećaju napetost u predelu vrata i ramena, ili jednostavno žele da svom
              licu vrate zdrav sjaj.
            </p>
            <p className="font-serif text-2xl text-cream font-light leading-snug">
              Prepustite se dodirima koji brišu stres i pružaju telu i duši istinsku harmoniju.
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
