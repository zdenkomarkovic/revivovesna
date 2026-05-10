const achievements = [
  {
    title: "Demo Spiker",
    description:
      "Učestvovala na brojnim međunarodnim seminarima, konvencijama i kongresima kao demo spiker, demonstrirajući tehnike pred publikom stručnjaka.",
  },
  {
    title: "Takmičar",
    description:
      "Aktivno učestvovala na takmičenjima u oblasti permanentnog makeuupa i tetoviranja, merila snage sa najboljim artistima.",
  },
  {
    title: "Sudija",
    description:
      "Od nedavno u ulozi sudije na takmičenjima — prepoznata kao autoritet u industriji permanent makeuupa.",
  },
  {
    title: "Dobitnica nagrada",
    description:
      "Višestruka dobitnica nagrada na domaćim i međunarodnim takmičenjima i konvencijama u oblasti PMU i tetoviranja.",
  },
];

const awards = [
  { year: "2025", title: "Prime Speaker & Judge", event: "Browista Bosnia & Serbia" },
  { year: "2024", title: "1. mesto — Soft Liner", event: "World's Srbija" },
  { year: "2024", title: "2. mesto — Soft Liner", event: "Wulop ex Yu" },
  { year: "2024", title: "2. mesto — Hairstrokes", event: "Browista Srbija" },
  { year: "2024", title: "Judge", event: "World's Srbija" },
  { year: "2024", title: "Demo Speaker — Moonliner", event: "World's Sarajevo" },
  { year: "2024", title: "Judge", event: "Online Luxury PMU Championship" },
  { year: "2023", title: "2. mesto — Soft Liner", event: "Wulop ex Yu" },
  { year: "2023", title: "Demo Speaker — Soft Liner", event: "Jerevan, Jermenija" },
  { year: "2023", title: "Demo Speaker — Mini Tattoo Art", event: "World's Sarajevo" },
  { year: "2023", title: "Master Stage — Mini Tattoo", event: "Wulop, Beograd" },
  { year: "", title: "International PMU Trainer", event: "" },
];

export default function Awards() {
  return (
    <section className="py-24 lg:py-36 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Dostignuća
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-cream font-light mb-4">
            Nagrade i priznanja
          </h2>
          <p className="text-muted text-base max-w-sm mx-auto">
            Decenije rada prepoznate od strane industrije i struke.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border mb-20">
          {achievements.map(({ title, description }) => (
            <div key={title} className="bg-dark p-8 lg:p-10 group hover:bg-dark-2 transition-colors">
              <div className="flex items-start gap-6">
                <div className="font-serif text-3xl text-gold/40 group-hover:text-gold font-light transition-colors leading-none pt-1 flex-shrink-0">
                  ◆
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-cream font-light mb-3 group-hover:text-gold-light transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted text-base leading-7">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Nagrade</span>
        </div>
        <div className="flex flex-col divide-y divide-border">
          {awards.map((a, i) => (
            <div key={i} className="flex items-baseline gap-6 py-5 group hover:bg-dark-2 px-4 -mx-4 transition-colors duration-200">
              <span className="font-serif text-sm text-gold/50 font-light w-10 flex-shrink-0 group-hover:text-gold transition-colors">
                {a.year}
              </span>
              <span className="text-cream text-base flex-1 leading-snug group-hover:text-gold-light transition-colors">
                {a.title}
              </span>
              {a.event && (
                <span className="text-muted text-xs tracking-[0.1em] uppercase flex-shrink-0 hidden sm:block">
                  {a.event}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <div className="w-px h-12 bg-gold/30 mx-auto mb-8" />
          <blockquote className="font-serif italic text-2xl lg:text-3xl text-gold-light/80 font-light leading-relaxed">
            &ldquo;Umetnost traje, lepota zaostaje — ali trag koji ostavljamo je večan.&rdquo;
          </blockquote>
          <div className="mt-6 text-xs text-muted tracking-[0.3em] uppercase">
            Vesna Parojčić
          </div>
          <div className="w-px h-12 bg-gold/30 mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
