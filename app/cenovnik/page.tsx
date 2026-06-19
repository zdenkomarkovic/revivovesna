import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL, STUDIO_PHONE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Cenovnik — Studio Revive Beograd",
  description:
    "Cenovnik tretmana u kozmetičkom studiju REVIVE Beograd. PMU, laserska epilacija, INDIBA, tretmani lica, depilacija, trajna šminka i više. Promo 30% popust.",
  url: `${SITE_URL}/cenovnik`,
});

const sections = [
  {
    title: "Revive Thermalift tretmani",
    note: "Cene u eurima (€)",
    items: [
      { label: "Revive Thermalift paket od 6 tretmana", price: "210€" },
      { label: "Revive Thermalift paket od 10 tretmana", price: "300€" },
      { label: "Revive Thermalift održavanje — 1 tretman", price: "40€" },
      { label: "Revive Thermalift održavanje — mala regija", price: "20€" },
    ],
  },
  {
    title: "Tretmani lica",
    items: [
      { label: "Higijenski tretman lica", price: "4.000 rsd" },
      { label: "Higijenski tretman lica + voćne kiseline", price: "4.500 rsd" },
      { label: "Personalizovan tretman lica", price: "7.500 rsd" },
      { label: "SILICIUM lift", price: "9.000 rsd" },
      { label: "Revive Mare", price: "9.000 rsd" },
      { label: "Hydrafacial basic", price: "5.000 rsd" },
      { label: "Hydrafacial premium", price: "9.000 rsd" },
      { label: "Carbon peeling lica", price: "4.500 rsd" },
    ],
  },
  {
    title: "Tretmani tela",
    items: [
      { label: "Anticelulit masaža (noge)", price: "2.500 rsd" },
      { label: "Anticelulit masaža — paket od 5", price: "10.000 rsd" },
      { label: "Anticelulit masaža — paket od 10", price: "20.000 rsd" },
      { label: "Limfna drenaža (noge)", price: "2.500 rsd" },
      { label: "Limfna drenaža — paket od 5", price: "10.000 rsd" },
      { label: "Limfna drenaža — paket od 10", price: "20.000 rsd" },
      { label: "Anticelulit i limfna kombinacija", price: "3.000 rsd" },
      { label: "Anticelulit i limfna — paket od 5", price: "13.500 rsd" },
      { label: "Anticelulit i limfna — paket od 10", price: "25.000 rsd" },
    ],
  },
  {
    title: "Depilacija voskom",
    items: [
      {
        label: "Cele noge, ruke (hladni vosak) + duboke prepone (šećerna pasta)",
        price: "3.600 rsd",
      },
      {
        label: "Cele noge, ruke (hladni vosak) + brazilska depilacija (šećerna pasta)",
        price: "4.200 rsd",
      },
      { label: "Depilacija celih nogu", price: "1.700 rsd" },
      { label: "Depilacija pola nogu", price: "1.000 rsd" },
      { label: "Depilacija pola nogu + cele ruke", price: "2.500 rsd" },
      { label: "Depilacija celih ruku", price: "1.000 rsd" },
      { label: "Depilacija pola ruku", price: "700 rsd" },
      { label: "Depilacija nausnica (topli vosak)", price: "450 rsd" },
    ],
  },
  {
    title: "Depilacija šećernom pastom",
    items: [
      { label: "Cele noge i duboke prepone", price: "3.100 rsd" },
      { label: "Cele noge, ruke, duboke prepone", price: "4.300 rsd" },
      { label: "Cele ruke, noge, brazilka", price: "4.700 rsd" },
      { label: "Cele noge, ruke", price: "3.500 rsd" },
      { label: "Cele noge", price: "2.000 rsd" },
      { label: "Pola nogu", price: "1.300 rsd" },
      { label: "Plitke prepone", price: "300 rsd" },
      { label: "Duboke prepone", price: "1.300 rsd" },
      { label: "Brazilka", price: "1.700 rsd" },
      { label: "Cele ruke", price: "1.200 rsd" },
      { label: "Pola ruku", price: "900 rsd" },
      { label: "Pazuh", price: "700 rsd" },
    ],
  },
  {
    title: "Laserska epilacija — Dame",
    items: [
      { label: "Celo telo", price: "14.400 rsd" },
      { label: "Cele noge", price: "6.000 rsd" },
      { label: "Potkolenice", price: "3.600 rsd" },
      { label: "Podlaktice", price: "2.400 rsd" },
      { label: "Cela intima", price: "7.200 rsd" },
      { label: "Brazilka", price: "3.000 rsd" },
      { label: "Prepone", price: "2.400 rsd" },
      { label: "Analna regija", price: "4.200 rsd" },
      { label: "Gluteus", price: "2.400 rsd" },
      { label: "Donja leđa", price: "3.000 rsd" },
      { label: "Pazuh", price: "2.100 rsd" },
      { label: "Stomak", price: "2.100 rsd" },
      { label: "Linija stomaka", price: "1.200 rsd" },
      { label: "Vrat", price: "1.200 rsd" },
      { label: "Celo lice", price: "3.600 rsd" },
      { label: "Nausnice", price: "1.200 rsd" },
      { label: "Brada", price: "1.200 rsd" },
      { label: "Podbradak", price: "1.200 rsd" },
      { label: "Zulufi", price: "1.200 rsd" },
    ],
  },
  {
    title: "Laserska epilacija — Muškarci",
    items: [
      { label: "Cele noge", price: "10.800 rsd" },
      { label: "Butine", price: "6.000 rsd" },
      { label: "Potkolenice", price: "5.400 rsd" },
      { label: "Cele ruke", price: "4.200 rsd" },
      { label: "Cela leđa", price: "6.000 rsd" },
      { label: "Cele grudi", price: "1.800 rsd" },
      { label: "Pazuh", price: "2.100 rsd" },
      { label: "Stomak", price: "2.400 rsd" },
      { label: "Ramena", price: "2.400 rsd" },
      { label: "Vrat", price: "1.500 rsd" },
      { label: "Jagodice", price: "1.200 rsd" },
      { label: "Zulufi", price: "1.200 rsd" },
    ],
  },
  {
    title: "Lasersko uklanjanje obrva",
    items: [
      { label: "1 tretman", price: "6.000 rsd" },
      { label: "Paket od 3 tretmana", price: "15.000 rsd" },
    ],
  },
  {
    title: "Lasersko uklanjanje tetovaža",
    note: "Cena zavisi od veličine tetovaže",
    items: [{ label: "Konsultacija i procena", price: "na upit" }],
  },
  {
    title: "Lash & Brow Lift",
    items: [
      { label: "Brow lift + gratis farbanje obrva", price: "2.500 rsd" },
      { label: "Lash lift + gratis farbanje trepavica", price: "2.500 rsd" },
      { label: "Lash & Brow lift + gratis farbanje obrva i trepavica", price: "4.000 rsd" },
      { label: "Farbanje obrva", price: "700 rsd" },
      { label: "Oblikovanje obrva voskom i pincetom", price: "700 rsd" },
      { label: "Oblikovanje obrva + farbanje", price: "1.000 rsd" },
    ],
  },
  {
    title: "Trajna šminka",
    items: [
      { label: "Hairstroke (iscrtavanje dlačica mikropigmentacijom)", price: "21.500 rsd" },
      { label: "Puder obrve (tehnika sencenja, mikropigmentacija)", price: "21.500 rsd" },
      { label: "Hairstroke i Puder Combo", price: "23.500 rsd" },
      { label: "Konture usana", price: "18.000 rsd" },
      { label: "Ombre usne", price: "23.500 rsd" },
      { label: "Usne labelo", price: "18.000 rsd" },
      { label: "Usne karmin efekat", price: "21.500 rsd" },
      { label: "Lashliner", price: "15.000 rsd" },
      { label: "Klasični ajlajner", price: "18.000 rsd" },
      { label: "Senceni ajlajner", price: "23.500 rsd" },
      { label: "Donji senceni ajlajner", price: "10.000 rsd" },
    ],
  },
  {
    title: "Tetoviranje",
    note: "Minimalna cena 6.000 rsd",
    items: [],
  },
];

export default function CenovnikPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">
        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Studio Revive Beograd
            </span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Cenovnik
            <br />
            <span className="italic text-gold-light">tretmana</span>
          </h1>
        </div>

        <div className="w-full h-px bg-border" />

        {/* PROMO baner */}
        <div className="bg-gold/10 border-b border-gold/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">
                  Aktuelna promo ponuda
                </div>
                <p className="text-cream text-lg font-serif font-light leading-snug">
                  30% popusta na pakete i na pojedinačne tretmane
                </p>
                <p className="text-muted text-sm mt-2">
                  Pozovite nas da vam predstavimo ponudu i dogovorimo termin koji vam odgovara.
                </p>
              </div>
              <a
                href={`tel:${STUDIO_PHONE}`}
                className="inline-flex items-center gap-3 bg-gold text-dark text-xs tracking-[0.2em] uppercase font-medium px-6 py-3 hover:bg-gold-light transition-colors duration-200 flex-shrink-0"
              >
                Pozovite nas
                <span className="w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>

        {/* Cenovnik sekcije */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-20">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <h2 className="text-gold text-xs tracking-[0.3em] uppercase">{section.title}</h2>
              </div>
              {section.note && (
                <p className="text-muted/70 text-xs tracking-widest uppercase mb-6">
                  {section.note}
                </p>
              )}
              <div className="divide-y divide-border/50">
                {section.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-4 gap-4">
                    <span className="text-cream text-sm leading-relaxed">{item.label}</span>
                    <span className="text-gold font-medium text-sm tracking-wide whitespace-nowrap flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">
                  Zakažite tretman
                </div>
                <p className="text-cream text-base">
                  Kontaktirajte nas za konsultaciju i zakazivanje termina.
                </p>
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
