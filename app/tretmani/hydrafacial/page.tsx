import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Hydrafacial Hollywood Glow Beograd",
  description:
    "Hydrafacial — neinvazivan tretman dubokog čišćenja, hidratacije i osveženja lica. Rezultati vidljivi nakon prvog tretmana. Studio Revive Beograd.",
  url: `${SITE_URL}/tretmani/hydrafacial`,
});

const efekti = [
  "Poboljšava teksturu kože",
  "Uklanja mrtve ćelije",
  "Potpuno pražnjenje pora",
  "Reguliše lučenje sebuma",
  "Povećava nivo hidratacije",
  "Omogućuje bolju penetraciju kozmetike u kućnoj nezi",
  "Unos antioksidanasa i hranljivih sastojaka direktno u dermis",
  "Smanjuje vidljivost finih linija i bora",
];

const koraci = [
  {
    broj: "01",
    naslov: "Hidrodermoabrazija",
    tekst: "Prva faza tretmana koja mehanički uklanja mrtve ćelije kože i priprema je za dalje korake.",
  },
  {
    broj: "02",
    naslov: "Vacuum peeling",
    tekst: "Vakuumska ekstrakcija dubinski čisti pore i uklanja nečistoće bez pritiska ili bola.",
  },
  {
    broj: "03",
    naslov: "Ručna komedoekspresija",
    tekst: "Ukoliko je potrebna, vrši se ručna ekstrakcija komedona — bezbolno i precizno.",
  },
  {
    broj: "04",
    naslov: "Čišćenje pora",
    tekst: "Temeljno pražnjenje i čišćenje pora za vidljivo čistiju i ravnomerniju kožu.",
  },
  {
    broj: "05",
    naslov: "Hidratacija serumima",
    tekst: "Personalizovani serumi birani u zavisnosti od tipa kože i problematike unose se direktno u kožu.",
  },
  {
    broj: "06",
    naslov: "Foto terapija",
    tekst: "Anti-age, podsticanje lučenja kolagena, tretman hiperpigmentacije, antibakterijska i antioksidativna svojstva.",
  },
];

export default function HydrafacialPage() {
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
            Hydrafacial<br />
            <span className="italic text-gold-light">Hollywood Glow</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Potpuno neinvazivan i bezbotan tretman dubokog čišćenja, hidratacije i
            osveženja lica. Rezultati su vidljivi već nakon prvog tretmana — koža
            je vidno sjajna, čista i zategnuta.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/hydrafacial.png"
                alt="Hydrafacial Hollywood Glow — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Hydrafacial spada u hidrokozmetičke procedure — aparaturna metoda kojom
                potpuno dubinski čistimo lice, pružamo licu neophodnu hidrataciju i
                osveženje. Hidroabrazija spada u najmoderniju piling i detoks tehnologiju
                u kozmetici.
              </p>
              <p className="text-muted text-base leading-7 mb-6">
                Tretman je namenjen svim tipovima i stanjima kože. Čak je veoma efikasan
                kao anti-age procedura. Ekstrakcija komedona je potpuno bezbolna za
                razliku od manuelne komedoekspresije.
              </p>
              <p className="text-muted text-base leading-7">
                Sam tretman traje od 30 minuta do 1 sata.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Efekti na kožu */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Kako deluje na kožu</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
              {efekti.map((e, i) => (
                <div key={i} className="flex items-start gap-4 border-t border-border pt-5">
                  <span className="font-serif text-2xl text-gold/20 font-light leading-none flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-muted text-sm leading-6 pt-0.5">{e}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Koraci tretmana */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Koraci tretmana</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
            {koraci.map((k) => (
              <div key={k.broj} className="flex gap-6">
                <span className="font-serif text-4xl text-gold/20 font-light leading-none flex-shrink-0 pt-1">
                  {k.broj}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-cream font-light mb-3">{k.naslov}</h3>
                  <p className="text-muted text-sm leading-7">{k.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Zašto + Da li je bolan */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">Zašto je vašem licu potreban hydrafacial?</span>
                </div>
                <p className="text-muted text-base leading-7">
                  Vaša koža svakodnevno trpi uticaje zagađenja, UV zračenja i neadekvatne
                  nege, što dovodi do gubitka sjaja, pojave bora i hiperpigmentacija,
                  zapušenih pora i dehidratacije. Idealan tretman za sve one koji žele da
                  vrate svojoj koži potrebnu hidrataciju i svežinu — bez iritacija i dugog
                  oporavka.
                </p>
              </div>
              <div className="border border-border p-8 self-start">
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-4">Da li je tretman bolan?</div>
                <p className="text-cream text-base font-serif font-light mb-4 leading-snug">
                  Nije — naprotiv, veoma je prijatan
                </p>
                <p className="text-muted text-sm leading-7">
                  Tretman nije bolan, jako je prijatan i opuštajuć, nema iritacija i
                  neželjenih efekata. Klijenti se mogu odmah vratiti svojim obavezama
                  bez perioda oporavka.
                </p>
              </div>
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
