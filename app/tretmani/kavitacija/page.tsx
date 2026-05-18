import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Kavitacija — Neinvazivno oblikovanje tela Beograd",
  description:
    "Kavitacija ultrazvučnim talasima smanjuje lokalizovane masne naslage i definiše konture tela bez invazivnih procedura. Studio Revive Beograd.",
  url: `${SITE_URL}/tretmani/kavitacija`,
});

const benefiti = [
  { title: "Masne naslage", text: "Ciljano smanjenje lokalizovanih masnih naslaga na stomaku, bokovima, nogama i rukama." },
  { title: "Konture tela", text: "Oblikovanje i definisanje kontura tela uz vidljivo smanjenje obima tretiranih regija." },
  { title: "Glatka koža", text: "Vidljivo zaglađivanje kože i poboljšanje tonusa bez invazivnih procedura." },
  { title: "Bez oporavka", text: "Neinvazivan tretman bez bola i oporavka — odmah se vraćate aktivnostima." },
];

const regije = [
  "Stomak",
  "Bokovi",
  "Noge i butine",
  "Ruke",
  "Leđa",
];

export default function KavitacijaPage() {
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
            Kavitacija<br />
            <span className="italic text-gold-light">Oblikovanje tela bez hirurgije</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Savremeni, neinvazivan tretman koji koristi ultrazvučne talase za smanjenje
            lokalizovanih masnih naslaga i redefinisanje kontura tela.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/kavitacija.jpg"
                alt="Kavitacija — Neinvazivno oblikovanje tela Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Kavitacija je savremen, neinvazivan tretman za oblikovanje tela koji koristi
                ultrazvučne talase kako bi delovao na lokalizovane masne naslage i pomogao u
                redefinisanju kontura tela.
              </p>
              <p className="text-muted text-base leading-7">
                Ultrazvučna tehnologija deluje ciljano na masne ćelije, dok organizam prirodnim
                putem eliminiše razgrađene masnoće kroz limfni sistem. Zbog toga se kavitacija
                često kombinuje sa limfnom drenažom za maksimalne rezultate.
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Benefiti kavitacije</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefiti.map((b) => (
                <div key={b.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{b.title}</h3>
                  <p className="text-muted text-sm leading-6">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              {["Podrška borbi protiv celulita"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gold flex-shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Regije + Kako izgleda tretman */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Regije koje se tretiraju</span>
              </div>
              <ul className="space-y-4">
                {regije.map((item) => (
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
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Kako izgleda tretman</span>
              </div>
              <p className="text-muted text-base leading-7 mb-6">
                Tretman je prijatan i bezbolan, a tokom procedure oseća se blaga toplota i
                vibracija.
              </p>
              <p className="text-muted text-base leading-7">
                Nakon tretmana preporučuje se povećan unos vode i fizička aktivnost kako bi
                organizam efikasnije eliminisao razgrađene masne naslage.
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
