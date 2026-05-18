import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "EMS Sculpt Tesla — Izgradnja mišića i oblikovanje tela Beograd",
  description:
    "EMS Sculpt Tesla elektromagnetnom stimulacijom definiše mišiće, oblikuje telo i smanjuje masne naslage bez napornih treninga. Studio Revive Beograd.",
  url: `${SITE_URL}/tretmani/ems-sculpt`,
});

const benefiti = [
  { title: "Jačanje mišića", text: "Definisanje i jačanje mišića kroz intenzivne kontrakcije koje nije moguće postići klasičnim vežbanjem." },
  { title: "Oblikovanje tela", text: "Zatezanje i oblikovanje tela uz vidljivo smanjenje lokalizovanih masnih naslaga." },
  { title: "Gluteus", text: "Podizanje i učvršćivanje gluteusa za definisaniji i čvršći izgled." },
  { title: "Bez oporavka", text: "Neinvazivan tretman bez bola i oporavka — odmah se vraćate svakodnevnim aktivnostima." },
];

const regije = [
  "Stomak",
  "Gluteus",
  "Noge",
  "Ruke",
  "Leđa",
];

const idealno = [
  "Osobe koje žele definisanije telo",
  "Jačanje mišića nakon pauze ili neaktivnosti",
  "Dodatna podrška treningu i zdravom načinu života",
  "Oblikovanje tela bez hirurških procedura",
];

export default function EmsScultPage() {
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
            EMS Sculpt Tesla<br />
            <span className="italic text-gold-light">Izgradnja mišića i oblikovanje</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Napredni tretman za oblikovanje tela koji koristi elektromagnetnu stimulaciju
            visokog intenziteta za definisanje mišića i zategnutiji izgled tela — bez napornih
            treninga.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/ems-sculpt.jpg"
                alt="EMS Sculpt Tesla — Oblikovanje tela Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Tesla Sculpt EMS Sculpt Tesla je napredni tretman za oblikovanje tela koji
                koristi elektromagnetnu stimulaciju visokog intenziteta kako bi aktivirao
                mišiće, povećao njihovu definiciju i doprineo zategnutijem izgledu tela.
              </p>
              <p className="text-muted text-base leading-7">
                Tokom tretmana dolazi do snažnih mišićnih kontrakcija koje nije moguće postići
                klasičnim vežbanjem, čime se istovremeno stimuliše jačanje mišića i smanjenje
                masnih naslaga.
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
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Benefiti EMS Sculpt Tesla tretmana</span>
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
              {["Poboljšanje tonusa i čvrstine kože", "Brzi i vidljivi rezultati"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gold flex-shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Regije + Idealno za */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Regije koje se mogu tretirati</span>
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
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Idealno za</span>
              </div>
              <ul className="space-y-4 mb-8">
                {idealno.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gold flex-shrink-0 mt-2" />
                    <span className="text-muted text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted text-base leading-7">
                Tokom tretmana osećaju se intenzivne, ali kontrolisane kontrakcije mišića.
                Procedura je bezbolna, traje kratko i ne zahteva oporavak.
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
