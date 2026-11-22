import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { getPriceList } from "@/sanity/lib/queries";
import { SITE_URL, STUDIO_PHONE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Cenovnik — Studio Revive Beograd",
  description:
    "Cenovnik tretmana u kozmetičkom studiju REVIVE Beograd. PMU, laserska epilacija, Revive Thermalift, tretmani lica, depilacija, trajna šminka i više. Promo 30% popust.",
  url: `${SITE_URL}/cenovnik`,
});

export const revalidate = 60;

export default async function CenovnikPage() {
  const sections = await getPriceList();
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
            <div key={section._key}>
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
                {(section.items ?? []).map((item) => (
                  <div key={item._key} className="flex items-center justify-between py-4 gap-4">
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
