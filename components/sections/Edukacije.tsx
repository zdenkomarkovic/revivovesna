const edukacije = [
  {
    number: "01",
    title: "Puder obrve",
    subtitle: "Bazna obuka",
    description:
      "Bazna obuka za trajnu šminku — puder obrve, usne, kapke i mini tattoo. Za početnike koji žele da postanu profesionalci.",
    href: "/edukacije/puder-obrve",
  },
  {
    number: "02",
    title: "Eyeliner",
    subtitle: "Masterclass",
    description:
      "Napredne tehnike senčenog ajlajnera — soft i bold varijanta, priprema za takmičenja. Za profesionalce koji žele da se izdvoje.",
    href: "/edukacije/eyeliner",
  },
  {
    number: "03",
    title: "Usne za 45 minuta",
    subtitle: "Masterclass",
    description:
      "Autorska tehnika nastala kombinovanjem korejskih i evropskih principa. Brz, precizan i prirodan rezultat. Dostupno i online.",
    href: "/edukacije/usne-masterclass",
  },
  {
    number: "04",
    title: "Usavršavanje",
    subtitle: "Napredni nivo",
    description:
      "Hairstroke, ombré, eyeliner, usne, korekcija i removal. Individualni pristup i rad na modelima za ekspertski nivo.",
    href: "/edukacije/usavrsavanje",
  },
  {
    number: "05",
    title: "Mini Tattoo",
    subtitle: "Edukacija",
    description:
      "Posebno osmišljeno za PMU artiste koji žele da prošire usluge. Sitni, detaljni dizajni — teorija, rad sa modelima, sertifikat.",
    href: "/edukacije/mini-tattoo",
  },
];

export default function Edukacije() {
  return (
    <section className="py-24 lg:py-36 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-14">
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Programi edukacija</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {edukacije.map((e) => (
            <a
              key={e.number}
              href={e.href}
              className="bg-dark p-8 lg:p-10 group hover:bg-dark-2 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl text-muted/25 group-hover:text-gold/40 transition-colors duration-300 font-light leading-none">
                  {e.number}
                </span>
                <span className="text-[11px] text-gold tracking-[0.25em] uppercase border border-gold/30 px-2 py-1 group-hover:border-gold/60 transition-colors duration-300">
                  {e.subtitle}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-cream font-light mb-4 leading-tight">
                {e.title}
              </h3>

              <div className="w-8 h-px bg-gold/40 group-hover:bg-gold transition-colors duration-300 mb-5" />

              <p className="text-muted text-sm leading-7 flex-1">{e.description}</p>

              <div className="mt-6 flex items-center gap-2 text-gold/50 group-hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-300">
                Saznaj više
                <span className="w-4 h-px bg-current" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/edukacije"
            className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
          >
            Sve edukacije
            <span className="w-6 h-px bg-current" />
          </a>
        </div>

        <div className="mt-20 border-t border-border pt-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Šta mogu da te naučim?</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-border">
            <div className="bg-dark p-8">
              <h3 className="font-serif text-xl text-cream font-light mb-4 leading-snug">Kako da razviješ svoj jedinstveni stil</h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="text-muted text-sm leading-6">Naučiću te kako da spojiš različite tehnike i stvoriš prepoznatljiv rad koji se ističe.</p>
            </div>
            <div className="bg-dark p-8">
              <h3 className="font-serif text-xl text-cream font-light mb-4 leading-snug">Kako da efikasno i precizno radiš</h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="text-muted text-sm leading-6">Pomoći ću ti da postigneš brzinu i preciznost, bez kompromisa na kvalitetu.</p>
            </div>
            <div className="bg-dark p-8">
              <h3 className="font-serif text-xl text-cream font-light mb-4 leading-snug">Kako da stvoriš lični odnos sa svakim klijentom</h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="text-muted text-sm leading-6">Pokazaću ti kako da prilagodiš svoj rad specifičnim potrebama svakog klijenta, stvarajući prirodan i dugotrajan efekat.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
