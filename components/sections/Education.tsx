const countries = [
  { country: "Meksiko", detail: "Latinskoamerička škola PMU" },
  { country: "SAD", detail: "Američka tehnika i stilovi" },
  { country: "Japan", detail: "Japanska preciznost" },
  { country: "Kina", detail: "Azijska tehnika microblading" },
  { country: "Koreja", detail: "K-beauty pristup" },
  { country: "Tajland", detail: "Azijski masterclass" },
  { country: "Rusija", detail: "Ruska škola PMU" },
  { country: "Ukrajina", detail: "Ukrajinski majstori" },
  { country: "London", detail: "Britanska akademija" },
  { country: "Pariz", detail: "Evropska finesa" },
];

export default function Education() {
  return (
    <section id="edukacije" className="py-24 lg:py-36 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                Edukacije
              </span>
            </div>

            <h2 className="font-serif text-5xl lg:text-6xl text-cream font-light leading-tight mb-6">
              Znanje stečeno<br />
              <span className="italic text-gold-light">širom sveta</span>
            </h2>

            <div className="w-10 h-px bg-gold/50 mb-8" />

            <p className="text-muted text-base leading-8 mb-8">
              Edukaciju je sticala na svim kontinentima, učeći od najrenomiranijih
              svetskih majstora. Različite tehnike i pristupi spojeni su u jedinstven
              autorski metod koji daje izuzetne rezultate.
            </p>

            <div className="bg-dark-3 border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="font-serif text-4xl text-gold font-light leading-none pt-1">
                  2023
                </div>
                <div>
                  <div className="text-cream text-base font-medium mb-1">
                    Zvanični PMU Trener
                  </div>
                  <p className="text-muted text-sm leading-6">
                    Od 2023. godine zvanično licencirani trener za permanentni
                    makeup. Individualni i grupni programi obuke.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-muted text-sm leading-7">
                Učestvovala na brojnim seminarima, konvencijama i kongresima kao
                <span className="text-gold-light"> demo spiker</span>,
                <span className="text-gold-light"> takmičar</span>, a od nedavno
                i kao <span className="text-gold-light">sudija</span>.
              </p>
            </div>
          </div>

          {/* Right — country list */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {countries.map(({ country, detail }) => (
                <div
                  key={country}
                  className="bg-dark-2 px-6 py-5 hover:bg-dark-3 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-cream text-base group-hover:text-gold-light transition-colors">
                      {country}
                    </span>
                  </div>
                  <p className="text-muted text-sm mt-1 pl-5">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted/50 text-sm tracking-widest uppercase">
                i mnogi drugi majstori i akademije
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
