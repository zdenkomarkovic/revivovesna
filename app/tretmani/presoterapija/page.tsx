import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Presoterapija — Detoks, limfna drenaža i lakoća tela Beograd",
  description:
    "Presoterapija kompresionom drenažom stimuliše cirkulaciju, eliminiše toksine i pruža osećaj lakoće. Studio Revive Beograd.",
  url: `${SITE_URL}/tretmani/presoterapija`,
});

const benefiti = [
  { title: "Smanjenje otoka", text: "Smanjenje otoka i zadržavanja tečnosti u nogama i telu." },
  { title: "Cirkulacija", text: "Podsticanje limfne i krvne cirkulacije za bolje funkcionisanje organizma." },
  { title: "Detoksikacija", text: "Ubrzava eliminaciju toksina i štetnih materija iz organizma." },
  { title: "Oporavak", text: "Ubrzava oporavak i regeneraciju, idealno posle fizičke aktivnosti." },
];

const indikacije = [
  "Problem sa oticanjem nogu i tela",
  "Dugo sedenje ili stajanje tokom dana",
  "Osećaj težine i umora u nogama",
  "Usporena cirkulacija",
  "Podrška procesu mršavljenja i oblikovanja tela",
];

export default function PresoterapijaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani tela</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Presoterapija<br />
            <span className="italic text-gold-light">Detoks i osećaj lakoće</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Efikasan tretman limfne drenaže koji pomoću kontrolisanog pritiska stimuliše
            cirkulaciju, eliminiše višak tečnosti i pruža osećaj lakoće u telu.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/presoterapija.jpg"
                alt="Presoterapija — Detoks i limfna drenaža Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Presoterapija je efikasan tretman limfne drenaže koji pomoću kontrolisanog
                pritiska stimuliše cirkulaciju i rad limfnog sistema, pomažući telu da eliminiše
                višak tečnosti i toksina.
              </p>
              <p className="text-muted text-base leading-7">
                Specijalni kompresioni nastavci ritmičnim pritiskom podstiču protok limfe i
                cirkulaciju, čime se telo regeneriše, relaksira i oslobađa zadržane vode.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Benefiti */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Benefiti presoterapije</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefiti.map((b) => (
                <div key={b.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{b.title}</h3>
                  <p className="text-muted text-sm leading-6">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {["Osećaj lakših i odmornijih nogu", "Podrška smanjenju celulita", "Poboljšanje tonusa i izgleda kože"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gold flex-shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Kome je namenjen */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Kome je namenjen</span>
              </div>
              <p className="text-muted text-base leading-7 mb-8">
                Presoterapija je idealna za osobe koje:
              </p>
              <ul className="space-y-4">
                {indikacije.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gold flex-shrink-0 mt-2" />
                    <span className="text-muted text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Opuštajući tretman</span>
              </div>
              <p className="text-muted text-base leading-7 mb-6">
                Tretman je potpuno bezbolan i veoma prijatan. Tokom procedure telo se opušta dok
                ritmični pritisak stimuliše prirodne procese eliminacije toksina i viška tečnosti.
              </p>
              <p className="text-muted text-base leading-7">
                Za najbolje rezultate preporučuje se serija tretmana u kombinaciji sa adekvatnom
                hidratacijom i zdravim životnim navikama.
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
