import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Revive Thermalift tretmani — Regeneracija, zatezanje i obnova kože Beograd",
  description:
    "Revive Thermalift radiofrekventna tehnologija 448kHz — podstiče regeneraciju kože, kolagen, zatezanje i obnovu lica i tela. Studio Revive Beograd.",
  url: `${SITE_URL}/tretmani/revive-thermalift`,
});

const benefiti = [
  { title: "Zatezanje kože", text: "Zatezanje i učvršćivanje kože lica i tela vidljivo već od prvih tretmana." },
  { title: "Kolagen i elastin", text: "Podsticanje prirodne proizvodnje kolagena i elastina za mladoliku, čvrstu kožu." },
  { title: "Oblikovanje tela", text: "Definisanje kontura i oblikovanje tela bez invazivnih procedura." },
  { title: "Brži oporavak", text: "Ubrzava oporavak kože i tkiva, idealno posle estetskih tretmana." },
];

const primena = [
  "Lifting lica i vrata bez igala",
  "Umorna i dehidrirana koža",
  "Podočnjaci i otoci",
  "Opuštena koža tela nakon gubitka kilaže",
  "Celulit i lokalizovane masne naslage",
  "Regeneracija nakon estetskih tretmana",
];

export default function ReviveThermaliftPage() {
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
            Revive Thermalift tretmani<br />
            <span className="italic text-gold-light">Regeneracija i obnova kože</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Otkrijte snagu najnaprednije radiofrekventne tehnologije uz Revive Thermalift tretmane koji
            podstiču prirodnu regeneraciju kože, poboljšavaju tonus i vraćaju svež, zdrav
            izgled licu i telu.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/revive-thermalift.png"
                alt="Revive Thermalift tretmani — Regeneracija i obnova kože Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Revive Thermalift koristi jedinstvenu radiofrekventnu tehnologiju od 448kHz koja stimuliše
                cirkulaciju, proizvodnju kolagena i obnovu ćelija, bez invazivnih procedura i
                dugog oporavka.
              </p>
              <p className="text-muted text-base leading-7">
                Tretman je prijatan, opuštajući i prilagođen različitim estetskim i
                regenerativnim potrebama — za lice i telo.
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Benefiti Revive Thermalift tretmana</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefiti.map((b) => (
                <div key={b.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{b.title}</h3>
                  <p className="text-muted text-sm leading-6">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Smanjenje otoka i zadržavanja tečnosti", "Poboljšanje tonusa i teksture", "Opuštanje mišića i poboljšanje cirkulacije"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gold flex-shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Primena */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Za lice i telo</span>
              </div>
              <p className="text-muted text-base leading-7 mb-8">
                Revive Thermalift tretmani idealni su za:
              </p>
              <ul className="space-y-4">
                {primena.map((item) => (
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
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Plan tretmana</span>
              </div>
              <p className="text-muted text-base leading-7 mb-6">
                Rezultati su vidljivi već nakon prvih tretmana, dok se puni efekat postiže kroz
                individualno prilagođen plan tretmana.
              </p>
              <p className="text-muted text-base leading-7 mb-6">
                Tretmani se izvode u serijama od minimum 6 ili 10 tretmana, pa do 14. U dogovoru
                sa terapeutom određujemo šta je za vas najbolje.
              </p>
              <p className="text-muted text-base leading-7">
                Održavanje novog stanja kože na mesečnom nivou ili ista serija ali nakon 6–12
                meseci. Pripremili smo za vas specijalne cene za pakete.
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
