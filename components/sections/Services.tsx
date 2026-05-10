const services = [
  {
    number: "01",
    title: "Permanentni Make-up",
    subtitle: "PMU",
    description:
      "Precizne tehnike permanentnog šminkanja prilagođene anatomiji vašeg lica i prirodnom izgledu. Naglasak na prirodnom, dugotrajnom rezultatu.",
    items: [
      "Microblading",
      "Powder & Ombre brows",
      "Kombinovana tehnika",
      "Nano brows",
      "Lip blush & Aquarelle lips",
      "Eyeliner",
    ],
  },
  {
    number: "02",
    title: "Tetovaže",
    subtitle: "Tattoo",
    description:
      "Umetničke tetovaže različitih stilova. Svaki dizajn je jedinstven i prilagođen vašim željama. Sterilni uslovi, vrhunska oprema.",
    items: [
      "Fine line tetovaže",
      "Realistične tetovaže",
      "Minimalistički dizajni",
      "Custom dizajni",
      "Cover-up tetovaže",
      "Konsultacije",
    ],
  },
  {
    number: "03",
    title: "Edukacije",
    subtitle: "Treninzi",
    description:
      "Zvanični PMU trener od 2023. godine. Individualni i grupni treninzi koji kombinuju teorijsko znanje i praktičan rad na modelima.",
    items: [
      "Individualni treninzi",
      "Grupni workshopovi",
      "Microblading kurs",
      "Powder brows kurs",
      "Lip blush kurs",
      "Masterclass",
    ],
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-24 lg:py-36 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Usluge
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-cream font-light">
            Šta nudimo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-dark-2 p-8 lg:p-10 group hover:bg-dark-3 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl text-muted/25 group-hover:text-gold/40 transition-colors duration-300 font-light leading-none">
                  {service.number}
                </span>
                <span className="text-[11px] text-gold tracking-[0.25em] uppercase border border-gold/30 px-2 py-1">
                  {service.subtitle}
                </span>
              </div>

              <h3 className="font-serif text-3xl text-cream font-light mb-4 leading-tight">
                {service.title}
              </h3>

              <div className="w-8 h-px bg-gold/40 group-hover:bg-gold transition-colors duration-300 mb-6" />

              <p className="text-muted text-base leading-7 mb-8">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-base text-muted/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 text-gold text-sm tracking-[0.2em] uppercase hover:gap-5 transition-all duration-200"
          >
            Zakažite konsultaciju
            <span className="w-8 h-px bg-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
