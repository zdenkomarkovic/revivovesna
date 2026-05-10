import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Lasersko skidanje tetovaža | Studio Revive Beograd",
  description:
    "Lasersko skidanje tetovaža i obrva — precizna, minimalno invazivna metoda uz nd yag Q switch tehnologiju. Studio Revive Beograd.",
};

const prednosti = [
  {
    title: "Preciznost",
    text: "Laser se koristi za tačno ciljanje pigmenta, čime se smanjuje rizik od oštećenja okolnog tkiva.",
  },
  {
    title: "Minimalna invazivnost",
    text: "Tretman je gotovo bezbolan i ne zahteva kirurške intervencije.",
  },
  {
    title: "Bezbednost",
    text: "Uz pravilan postupak i pravilnu negu, lasersko skidanje je sigurno i efikasno.",
  },
  {
    title: "Dugoročni rezultati",
    text: "Tetovaže i microblading mogu biti trajno uklonjeni, omogućavajući vam da se oslobodite neželjenih boja ili oblika.",
  },
];

const sekcije = [
  {
    broj: "01",
    naslov: "Princip rada lasera",
    tekst:
      "Lasersko skidanje koristi visoko fokusirane svetlosne zrake koje prodiru u kožu i razbijaju pigment boje u malene čestice. Na ovaj način, telo kasnije te čestice odstranjuje putem limfnog sistema. Različite vrste lasera koriste se za različite vrste pigmenata, s obzirom na to da različite boje apsorbuju svetlost različite talasne dužine. U našem studiju koristimo laser nd yag Q switch tehnologije, nemedicinski laser.",
  },
  {
    broj: "02",
    naslov: "Proces laserskog skidanja tetovaža",
    tekst:
      "Laserski tretman skida tetovaže u nekoliko sesija. Broj potrebnih sesija zavisi od više faktora, kao što su boja, veličina, starost i dubina tetovaže. Tretmani se obično izvode u razmacima od 6 do 8 nedelja, a može i duže, što omogućava koži da se oporavi između tretmana. Neke tetovaže mogu zahtevati i do 10 ili više sesija za potpuno uklanjanje, dok je kod drugih dovoljno manje sesija. Laser uklanja različitom brzinom sve boje izuzev pojedinih boja organskog porekla (žute i crvene) i zelene i plave i sve ostale boje koje sadrže navedene. U tom slučaju predlažemo hemijski removal voćnim kiselinama koje takođe nudimo u našem studiju.",
  },
  {
    broj: "03",
    naslov: "Lasersko skidanje obrva (Microblading i mikropigmentacija)",
    tekst:
      "Microblading/mikropigmentacija je popularna metoda za trajno oblikovanje obrva, ali u slučajevima kada rezultat nije zadovoljavajuć ili dođe do neželjenih promena, može se koristiti lasersko skidanje. Laserski tretman za uklanjanje microbladinga koristi sličnu tehnologiju kao i za skidanje tetovaža. Tretman je precizan, ali i štedljiv prema koži, jer ne utiče na okolna tkiva, a pigment se efikasno razbija. Broj tretmana varira u zavisnosti od hemijskog sastava boje i neke boje laser ne prepoznaje pa se u tom slučaju radi hemijski removal na bazi voćnih kiselina, koje takođe nudimo u našem studiju.",
  },
  {
    broj: "04",
    naslov: "Sigurnost i rizici",
    tekst:
      "Lasersko skidanje tetovaža i obrva je generalno sigurno kada ga obavljaju obučeni i licencirani stručnjaci. Međutim, kao i kod svakog tretmana, postoji rizik od nuspojava, kao što su ožiljci, promene u pigmentaciji kože ili iritacije. Da bi se minimalizovali ovi rizici, važno je slediti sve upute pre i posle tretmana i izbegavati izlaganje suncu.",
  },
  {
    broj: "05",
    naslov: "Oporavak i posttretmanska nega",
    tekst:
      "Nakon tretmana, mogu se pojaviti crvenilo, otekline ili sitni plikovi na koži, što je normalna reakcija. Tokom oporavka važno je pridržavati se nekoliko pravila: izbegavati sunčanje, ne čeprkati tretiranu kožu, koristiti proizvode za umirivanje i hidrataciju kože, te nositi zaštitu od sunca. U većini slučajeva, koža se potpuno oporavi u periodu od nekoliko nedelja.",
  },
];

export default function TattooRemovalPage() {
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
            Lasersko skidanje<br />
            <span className="italic text-gold-light">tetovaža i obrva</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Efikasna i sigurna metoda uklanjanja neželjenih tetovaža i trajnih obrva.
            Lasersko skidanje postalo je popularno zbog preciznosti, minimalne invazivnosti
            i visokih rezultata.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/tattoo removal.jpg"
                alt="Lasersko skidanje tetovaža — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Lasersko skidanje tetovaža i obrva koristi specijalizovane lasere koji
                ciljaju pigment u koži, razbijajući molekule boje, što omogućava njihovo
                prirodno uklanjanje iz organizma putem limfnog sistema.
              </p>
              <p className="text-muted text-base leading-7">
                Pored uklanjanja tetovaža, tretman se koristi i za uklanjanje neželjenih
                obrva — bilo da su u pitanju trajni ili polutrajni tretmani poput
                microbladinga. U našem studiju koristimo laser nd yag Q switch tehnologije.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Numerisane sekcije */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Kako funkcioniše</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
              {sekcije.map((s) => (
                <div key={s.broj} className="flex gap-6">
                  <span className="font-serif text-4xl text-gold/20 font-light leading-none flex-shrink-0 pt-1">
                    {s.broj}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-cream font-light mb-3">{s.naslov}</h3>
                    <p className="text-muted text-sm leading-7">{s.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Prednosti */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Prednosti tretmana</span>
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

        {/* Zaključak */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Zaključak</span>
              </div>
              <p className="text-muted text-base leading-7">
                Lasersko skidanje tetovaža i obrva je vrlo efikasna i sigurna metoda koja
                vam omogućava da se oslobodite neželjenih tetovaža ili trajnih obrva. Iako
                tretman može biti dugotrajan, rezultati su trajniji i mnogo manje invazivni
                od drugih metoda. Preporučuje se da se tretman obavlja kod licenciranih
                stručnjaka koji imaju iskustva u ovoj oblasti kako bi se izbegli potencijalni
                problemi.
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
