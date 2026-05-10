const tretmani = [
  {
    number: "01",
    title: "Trajna šminka",
    subtitle: "PMU",
    description:
      "Puder obrve, eyeliner, usne — precizne tehnike prilagođene anatomiji lica i prirodnom izgledu.",
    href: "/tretmani/pmu",
  },
  {
    number: "02",
    title: "Tetovaže",
    subtitle: "Tattoo",
    description:
      "Fine line, realistične i minimalistički dizajni. Svaki rad jedinstven i prilagođen vašim željama.",
    href: "/tretmani/tattoo",
  },
  {
    number: "03",
    title: "Lasersko skidanje tetovaža",
    subtitle: "Laser removal",
    description:
      "Bezbedno i efikasno uklanjanje tetovaža i PMU radova najsavremenijim laserskim uređajima.",
    href: "/tretmani/tattoo-removal",
  },
  {
    number: "04",
    title: "Hemijski removal",
    subtitle: "Removal",
    description:
      "Uklanjanje PMU pigmenta voćnim kiselinama — alternativa laseru za korekciju i osvežavanje radova.",
    href: "/tretmani/hemijski-removal",
  },
  {
    number: "05",
    title: "Laserska epilacija",
    subtitle: "Epilacija",
    description:
      "Trajna redukcija dlačica laserskom tehnologijom na licu i telu, za svaki tip kože.",
    href: "/tretmani/laserska-epilacija",
  },
  {
    number: "06",
    title: "Tretmani lica",
    subtitle: "Lice",
    description:
      "Hydrafacial, karbon piling, mikrodermoabrazija i drugi tretmani za zdravu i sjajnu kožu.",
    href: "/tretmani/tretmani-lica",
  },
  {
    number: "07",
    title: "Lash & Brow Lift",
    subtitle: "Lift",
    description:
      "Podizanje i trajno uvijanje trepavica i obrva za prirodno otvorene oči bez maskare.",
    href: "/tretmani/lash-brow-lift",
  },
  {
    number: "08",
    title: "Hydrafacial",
    subtitle: "Hydrafacial",
    description:
      "Duboko čišćenje, hidratacija i obnavljanje kože u jednom tretmanu — vidljivi rezultati odmah.",
    href: "/tretmani/hydrafacial",
  },
  {
    number: "09",
    title: "Relaks masaža lica",
    subtitle: "Masaža",
    description:
      "Opuštajuća masaža lica, vrata i dekoltea koja poboljšava cirkulaciju i vraća sjaj koži.",
    href: "/tretmani/relaks-masaza",
  },
];

export default function Tretmani() {
  return (
    <section id="tretmani" className="py-24 lg:py-36 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-14">
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {tretmani.map((t) => (
            <a
              key={t.number}
              href={t.href}
              className="bg-dark-2 p-8 lg:p-10 group hover:bg-dark transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl text-muted/25 group-hover:text-gold/40 transition-colors duration-300 font-light leading-none">
                  {t.number}
                </span>
                <span className="text-[11px] text-gold tracking-[0.25em] uppercase border border-gold/30 px-2 py-1 group-hover:border-gold/60 transition-colors duration-300">
                  {t.subtitle}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-cream font-light mb-4 leading-tight">
                {t.title}
              </h3>

              <div className="w-8 h-px bg-gold/40 group-hover:bg-gold transition-colors duration-300 mb-5" />

              <p className="text-muted text-sm leading-7 flex-1">{t.description}</p>

              <div className="mt-6 flex items-center gap-2 text-gold/50 group-hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-300">
                Saznaj više
                <span className="w-4 h-px bg-current" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/tretmani"
            className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
          >
            Svi tretmani
            <span className="w-6 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
