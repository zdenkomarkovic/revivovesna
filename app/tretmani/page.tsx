import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tretmani | Studio Revive Beograd",
  description:
    "Moji tretmani poboljšavaju izgled i podižu samopouzdanje. PMU, tetovaže, uklanjanje tetovaža, tretmani lica i više — Studio Revive Beograd.",
};

const ostaleTretmani: { title: string; image: string }[] = [];

export default function TretmaniPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Savršenstvo koje traje
            </span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Tretmani
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Moji tretmani poboljšavaju izgled i podižu samopouzdanje. Trajna šminka
            omogućava dugotrajan i prirodan izgled obrva, eyeliner-a i usana. Tetovaže
            su prilagođene vašim željama, dok uklanjanje tetovaža koristi sigurne i
            efikasne metode. Tretmani lica revitalizuju kožu, a uklanjanje dlaka pruža
            dugoročne rezultate. Lash i brow lift tretmani podižu trepavice i obrve za
            zapanjujuć izgled. Svi tretmani su personalizovani za najbolje rezultate.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* PMU */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/pmu.png"
                alt="PMU — Permanentni Make-up"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase">PMU</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                Permanentni Make-up <span className="text-muted text-2xl lg:text-3xl">(trajna šminka)</span>
              </h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-muted text-base leading-7 mb-10">
                Trajna šminka omogućava savršen izgled bez svakodnevnog nanošenja
                šminke. Tehnika mikropigmentacije uvodi pigment u gornji sloj kože,
                stvarajući dugotrajan efekat. Primena je moguća na obrvama, očima i
                usnama, s naglaskom na isticanje prirodnih crta lica.
              </p>
              <a
                href="/tretmani/pmu"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
              >
                Saznaj više
                <span className="w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Tattoo */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Tattoo</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                  Tetovaže
                </h2>
                <div className="w-8 h-px bg-gold mb-8" />
                <p className="text-muted text-base leading-7 mb-10">
                  U našem salonu nudimo vrhunske usluge tetoviranja uz najviše standarde
                  higijene i profesionalizma. Bilo da želite malu ili kompleksnu tetovažu,
                  naš tim iskusnih majstora će vam pomoći da ostvarite svoju viziju.
                  Koristimo visokokvalitetne boje i sterilnu opremu za siguran i dugotrajan
                  rezultat. Pre tretmana pružamo konsultacije kako bismo izabrali idealan
                  dizajn i stil. Proces tetoviranja je potpuno prilagođen vama, uz pažnju
                  na komfor i detalje o nezi nakon tretmana.
                </p>
                <a
                  href="/tretmani/tattoo"
                  className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
                >
                  Saznaj više
                  <span className="w-6 h-px bg-current" />
                </a>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/tretmani/tattoo.jpg"
                  alt="Tattoo — Tetovaže"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Tattoo removal */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/tattoo removal.jpg"
                alt="Tattoo Removal — Lasersko uklanjanje"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Tattoo Removal</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                Lasersko uklanjanje tetovaža
              </h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-muted text-base leading-7 mb-10">
                Lasersko skidanje tetovaža i obrva postalo je popularno zbog preciznosti,
                minimalne invazivnosti i visokih rezultata. Ovaj tretman koristi lasere koji
                ciljaju pigment u koži, razbijajući molekule boje i omogućavajući njihovo
                prirodno uklanjanje. Takođe se koristi za uklanjanje neželjenih obrva,
                uključujući trajne i polutrajne tretmane poput microbladinga.
              </p>
              <a
                href="/tretmani/tattoo-removal"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
              >
                Saznaj više
                <span className="w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hair Removal */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Hair Removal</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                  Laserska epilacija
                </h2>
                <div className="w-8 h-px bg-gold mb-8" />
                <p className="text-muted text-base leading-7 mb-10">
                  U našem salonu nudimo lasersku epilaciju diodnim laserom, najefikasniji
                  tretman za trajno smanjenje rasta dlačica na svim delovima tela. Ova
                  metoda je sigurna, bezbolna i pogodna za sve tipove kože, pružajući
                  dugotrajne rezultate uz minimalnu nelagodnost. Diodni laser cilja folikul
                  dlake, sprečavajući njen ponovni rast, dok čuva okolnu kožu. Tretman je
                  brz i efikasan, a već nakon nekoliko sesija primetićete značajno smanjenje
                  dlačica.
                </p>
                <a
                  href="/tretmani/laserska-epilacija"
                  className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
                >
                  Saznaj više
                  <span className="w-6 h-px bg-current" />
                </a>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/tretmani/hairremoval.jpg"
                  alt="Hair Removal — Laserska epilacija"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Tretmani lica */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/tretmanilica.png"
                alt="Tretmani lica — Karbon piling"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani lica</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                Tretmani lica
              </h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-muted text-base leading-7 mb-10">
                Higijenski tretman, hydrafacial, masaža, carbon peeling i fitopiling —
                svaki tretman izvodi stručnjak kozmetičar estetičar i prilagođen je tipu
                i stanju kože klijenta, sa ciljem postizanja dugoročnih rezultata i
                očuvanja zdravlja kože.
              </p>
              <a
                href="/tretmani/tretmani-lica"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
              >
                Saznaj više
                <span className="w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Lash & Brow Lift */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Lash & Brow Lift</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                  Lash & Brow Lift
                </h2>
                <div className="w-8 h-px bg-gold mb-8" />
                <p className="text-muted text-base leading-7 mb-10">
                  U našem salonu nudimo vrhunske tretmane lash lifta i brow lifta, koji
                  vašim trepavicama i obrvama daju prirodno podignut, definisan i negovan
                  izgled.
                </p>
                <a
                  href="/tretmani/lash-brow-lift"
                  className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
                >
                  Saznaj više
                  <span className="w-6 h-px bg-current" />
                </a>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/tretmani/lash&browlift.jpg"
                  alt="Lash & Brow Lift"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hydrafacial */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/hydrafacial.jpg"
                alt="Hydrafacial Hollywood Glow"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani lica</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                Hydrafacial <span className="text-muted text-2xl lg:text-3xl">Hollywood Glow</span>
              </h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-muted text-base leading-7 mb-10">
                Potpuno neinvazivan i bezbotan tretman dubokog čišćenja, hidratacije i
                osveženja lica. Hidroabrazija spada u najmoderniju piling i detoks
                tehnologiju u kozmetici. Rezultati su vidljivi već nakon prvog tretmana —
                koža je vidno sjajna, čista i zategnuta.
              </p>
              <a
                href="/tretmani/hydrafacial"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
              >
                Saznaj više
                <span className="w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Relaks masaža */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani lica</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                  Relaks masaža lica, vrata i dekoltea
                </h2>
                <div className="w-8 h-px bg-gold mb-8" />
                <p className="text-muted text-base leading-7 mb-10">
                  Ritual opuštanja koji umiruje um, podstiče cirkulaciju i vraća koži
                  svežinu i blistavost. Nežni i ritmični pokreti opuštaju mišiće lica,
                  vrata i dekoltea, stimulišući cirkulaciju i limfnu drenažu.
                </p>
                <a
                  href="/tretmani/relaks-masaza"
                  className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
                >
                  Saznaj više
                  <span className="w-6 h-px bg-current" />
                </a>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/tretmani/relaks-masaza.jpg"
                  alt="Relaks masaža lica, vrata i dekoltea"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hemijski removal */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/hemijskiremoval.jpg"
                alt="Hemijski removal voćnim kiselinama"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Hemijski removal</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                Hemijski removal voćnim kiselinama
              </h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-muted text-base leading-7 mb-10">
                Hemijski removal obrva i tetovaža pomoću voćnih kiselina koristi prirodne
                kiseline za efikasno uklanjanje neželjenih pigmenata sa kože. Ova savremena
                metoda je popularna među onima koji žele da se reše neurednih ili nepoželjnih
                trajnih obrva ili tetovaža bez invazivnih tretmana. Takođe, kada laser ne
                može da prepozna određene pigmente (poput žutih, crvenih, belih, zelenih i
                plavih) duboko u koži, ovaj tretman postaje idealno rešenje.
              </p>
              <a
                href="/tretmani/hemijski-removal"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
              >
                Saznaj više
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
