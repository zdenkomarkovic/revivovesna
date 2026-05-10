import Image from "next/image";

export default function About() {
  return (
    <section id="o-meni" className="py-24 lg:py-36 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/9fc25032-53f1-44ef-8413-f1f68789c325-r1vefw66foan2b96zbii69dyg6v8m342sp1p89xdv4.webp"
                alt="Vesna Parojčić u studiju"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />

            <div className="absolute -bottom-6 left-6 bg-dark-3 border border-border px-6 py-4">
              <div className="font-serif text-4xl text-gold font-light leading-none">
                15+
              </div>
              <div className="text-xs text-muted tracking-[0.2em] uppercase mt-1">
                Godina iskustva
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                O Meni
              </span>
            </div>

            <h2 className="font-serif text-5xl lg:text-6xl text-cream font-light leading-tight mb-6">
              Umetnost koja<br />
              <span className="italic text-gold-light">traje zauvek</span>
            </h2>

            <div className="w-10 h-px bg-gold/50 mb-8" />

            <div className="space-y-5 text-muted text-base leading-8">
              <p>
                Vesna Parojčić je permanent makeup i tattoo artist sa dugogodišnjim
                iskustvom. Po struci je diplomirani profesor likovne kulture, a već
                oko 15 godina, iz potrebe i želje, aktivno radi u industriji PMU i
                tetoviranja.
              </p>
              <p>
                Edukaciju je sticala širom sveta — od Meksika, preko SAD-a, Japana,
                Kine, Koreje i Tajlanda, do ruskih i ukrajinskih majstora, kao i u
                Londonu i Parizu. Tokom svog profesionalnog razvoja upoznala je
                različite tehnike rada koje je, uz sopstveno iskustvo, spojila u
                jedinstven lični pristup.
              </p>
              <p>
                U njenom radu poseban akcenat stavljen je na{" "}
                <span className="text-gold-light">kvalitetan zarastao rezultat</span>,
                brzinu izvođenja i komfor klijenta. Od 2023. godine zvanično je i
                trener za PMU.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-6">
              {[
                { number: "2023", label: "Trener za PMU" },
                { number: "10+", label: "Zemalja edukacije" },
              ].map(({ number, label }) => (
                <div key={label}>
                  <div className="font-serif text-3xl text-gold font-light">
                    {number}
                  </div>
                  <div className="text-xs text-muted tracking-[0.2em] uppercase mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
