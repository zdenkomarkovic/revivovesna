import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryRow } from "@/components/ui/GalleryRow";

const obrveImages = [
  "IMG_4438-2-224x300.jpg","po-169x300.png","po-300x224.jpg",
  "IMG_5035-300x225.jpg","obrve-300x169.jpg","obrve2-169x300.jpg",
  "obrve3-169x300.jpg","obrve4-169x300.jpg","obrve5-169x300.jpg",
  "obrve6-169x300.jpg","obrve7-169x300.jpeg","obrve9-169x300.jpg",
  "obrve10-169x300.jpeg","obrve11-300x300.jpg",
];

const ajlajnerImages = [
  "IMG_4564-1-224x300.png","IMG_4484-1-169x300.png","IMG_4456-1-169x300.png",
  "IMG_4455-1-224x300.jpg","IMG_4351-1-169x300.jpg","IMG_4265-1-224x300.png",
  "IMG_4262-1-224x300.png","IMG_4222-1-222x300.jpg","IMG_4060-1-224x300.png",
  "IMG_3820-1-224x300.png","IMG_9202-225x300.jpeg","IMG_9060-224x300.jpeg",
  "IMG_5067-300x225.jpg","IMG_4548-224x300.jpeg","IMG_4352-300x212.jpg",
  "IMG_1376-169x300.jpeg","IMG_1037-224x300.jpg","IMG_0313-224x300.jpeg",
];

const usneImages = [
  "IMG_9204-225x300.jpg","IMG_9016-225x300.jpg","IMG_9031-225x300.jpeg",
  "IMG_8878-224x300.jpeg","IMG_8713-169x300.jpg","IMG_8666-225x300.jpg",
  "IMG_8575-169x300.jpg","IMG_8572-169x300.jpg","IMG_8495-224x300.jpeg",
  "IMG_7204-224x300.jpg","IMG_5237-300x300.jpg","IMG_5219-169x300.jpeg",
  "IMG_4939-263x300.jpg","IMG_5022-135x300.jpeg","IMG_4555-242x300.jpg",
  "IMG_4250-169x300.jpg","IMG_3710-224x300.jpg","IMG_3521-169x300.jpg",
  "IMG_1499-224x300.jpeg","IMG_0995-193x300.jpg","IMG_0903-222x300.jpg",
  "IMG_0468-169x300.jpg",
];

export const metadata = {
  title: "PMU — Permanentni Make-up (trajna šminka) | Studio Revive Beograd",
  description:
    "Trajna šminka — mikropigmentacija na obrvama, očima i usnama. Dugotrajan, prirodan izgled bez svakodnevnog nanošenja šminke. Studio Revive Beograd.",
};

export default function PmuPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              PMU · Trajna šminka
            </span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Permanentni<br />
            <span className="italic text-gold-light">Make-up</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Trajna šminka je jedan od najpopularnijih tretmana u poslednjih 15tak godina
            koji omogućava postizanje savršenog izgleda bez potrebe za svakodnevnim
            nanošenjem jake šminke. Ovaj postupak koristi tehniku mikropigmentacije, pri
            kojoj se pigmenti uvode u gornji sloj kože, stvarajući dugotrajan efekat
            sličan šminki, ali bez potrebe za stalnim održavanjem.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + opis */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/pmu/po-r2t2ai07cftwxb6b8ns0uql76uvkzwpt8cl36ebmnk.png"
                alt="PMU — Permanentni Make-up"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-8">
                Tretmani trajne šminke mogu se primeniti na različite delove lica, kao
                što su obrve, oči i usne. Naša preporuka je da se naglase prirodne crte
                lica, nikako da se menjaju.
              </p>
              <div className="border border-gold/30 bg-gold/5 px-6 py-5">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Napomena</p>
                <p className="text-muted text-sm leading-6">
                  Trajna šminka ne menja dekorativnu ili večernju šminku.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Obrve / Oči / Usne */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Oblasti primene</span>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border">

              <div className="bg-dark-2 p-8 lg:p-10">
                <span className="text-[11px] text-gold tracking-[0.25em] uppercase border border-gold/30 px-2 py-1 mb-6 inline-block">
                  01
                </span>
                <h2 className="font-serif text-3xl text-cream font-light mb-4">Obrve</h2>
                <div className="w-8 h-px bg-gold/40 mb-6" />
                <p className="text-muted text-base leading-7">
                  Trajna šminka na obrvama je jedan od najpopularnijih tretmana, jer
                  omogućava savršeno oblikovane i ujednačene obrve koje traju mesecima.
                  Postoji nekoliko tehnika, kao što su "hairstroke" metoda, iscrtavanje
                  dlačica, koja simulira prirodne dlačice, ili "powder brows" tehnika koja
                  stvara mekanu i praskastu površinu.
                </p>
              </div>

              <div className="bg-dark-2 p-8 lg:p-10">
                <span className="text-[11px] text-gold tracking-[0.25em] uppercase border border-gold/30 px-2 py-1 mb-6 inline-block">
                  02
                </span>
                <h2 className="font-serif text-3xl text-cream font-light mb-4">Oči</h2>
                <div className="w-8 h-px bg-gold/40 mb-6" />
                <p className="text-muted text-base leading-7">
                  Tretman trajnog eyeliner-a (kapaka) savršen je za one koji žele istaknuti
                  oči bez potrebe za svakodnevnim nanošenjem maskare. Ovaj tretman može
                  biti u formi tankih linija duž linije trepavica ili nešto deblji, u
                  zavisnosti od željenog efekta, kao i u senčenoj formi — što možete
                  detaljno pogledati u našoj galeriji.
                </p>
              </div>

              <div className="bg-dark-2 p-8 lg:p-10">
                <span className="text-[11px] text-gold tracking-[0.25em] uppercase border border-gold/30 px-2 py-1 mb-6 inline-block">
                  03
                </span>
                <h2 className="font-serif text-3xl text-cream font-light mb-4">Usne</h2>
                <div className="w-8 h-px bg-gold/40 mb-6" />
                <p className="text-muted text-base leading-7">
                  Trajna šminka na usnama može se koristiti za definisanje kontura usana
                  ili za postizanje punijeg i izraženijeg izgleda. Pigmentacija na usnama
                  može biti u prirodnim tonovima, kao i u živopisnijim nijansama, čime se
                  postiže efekat svežih i ružičastih usana tokom celog dana. Efekat karmina
                  se ne preporučuje na tamnijim usnama.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Prednosti */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Prednosti</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mt-3 mb-6 leading-tight">
                Prednosti trajne šminke
              </h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <ul className="space-y-5">
                {[
                  {
                    title: "Ušteda vremena",
                    text: "Ne morate se brinuti o svakodnevnom nanošenju šminke tokom boravka na plaži, bazenima, teretani itd.",
                  },
                  {
                    title: "Dugotrajan efekat",
                    text: "Rezultati traju od nekoliko meseci do nekoliko godina, u zavisnosti od tretmana i tipa kože.",
                  },
                  {
                    title: "Prirodni izgled",
                    text: "Trajna šminka može pružiti vrlo prirodan izgled, bez opasnosti od razmazivanja ili brisanja.",
                  },
                  {
                    title: "Komfor i praktičnost",
                    text: "Idealna je za ljude sa aktivnim životnim stilom, sportiste, kao i one koji pate od alergija na klasičnu šminku.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-px bg-gold/30 self-stretch flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-cream text-sm font-medium mb-1">{item.title}</div>
                      <p className="text-muted text-sm leading-6">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/pmu/IMG_9016-r28b3s8iklilub26ujj8bjaf7z81ysoh02fgnxbey8.jpg"
                alt="PMU prednosti"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Nega nakon tretmana */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Nega nakon tretmana</span>
                <h2 className="font-serif text-4xl text-cream font-light mt-3 mb-10 leading-tight">
                  Uputstvo za negu
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Ajlajner</h3>
                    <div className="w-6 h-px bg-gold/30 mb-4" />
                    <p className="text-muted text-sm leading-7">
                      Otok se zadržava 2–3 dana i mazati Chloramphenicol krem tokom prvih
                      dana, zatim preći na Pantenol krem. Stavljati hladne ali suve obloge
                      (najbolje zalediti dve kašike i kad su potpuno hladne staviti na oči).
                      Prati i čuvati potpuno isto kao i obrve sa razlikom u tretiranju
                      drugačijom kremom prvih par dana.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Usne</h3>
                    <div className="w-6 h-px bg-gold/30 mb-4" />
                    <p className="text-muted text-sm leading-7">
                      Otok takođe traje 2–3 dana. Moguća pojava herpesa na tretiranoj
                      površini kod osoba koje su sklone tome. Ukoliko se pojavi, mazati
                      naizmenično Aciklovir krem i Cinkovu pastu. U protivnom mazati samo
                      Pantenol kremom ili labelom. Prati i čuvati isto kao i obrve i ajlajner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/pmu/IMG_4455-scaled-r2ripdhpg0fvr9x6envbiprf1m63tmdyrp5c1detf4.jpg"
                  alt="Nega nakon PMU tretmana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-muted text-base leading-7 mt-12 max-w-3xl">
              Tretmani trajne šminke su siguran način da se postigne lep, uredan i dugotrajan
              izgled bez stresa i napora, idealni za sve koji žele da uštede vreme i uživaju
              u postojanom rezultatu.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija — Obrve */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija · Obrve</span>
          </div>
          <GalleryRow folder="obrve" images={obrveImages} alt="Obrve — PMU Studio Revive" />
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija — Ajlajner */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija · Ajlajner</span>
            </div>
            <GalleryRow folder="ajlajner" images={ajlajnerImages} alt="Ajlajner — PMU Studio Revive" />
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Galerija — Usne */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Galerija · Usne</span>
          </div>
          <GalleryRow folder="usne" images={usneImages} alt="Usne — PMU Studio Revive" />
        </div>

        <div className="w-full h-px bg-border" />

        {/* CTA */}
        <div className="border-t border-border bg-dark">
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
