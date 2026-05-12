import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Usavršavanje trajne šminke — napredni PMU kurs",
  description:
    "Napredne tehnike trajne šminke i tetoviranja — hairstroke, ombré, eyeliner, usne, korekcija. Sertifikat po završetku. Studio Revive Beograd.",
  url: `${SITE_URL}/edukacije/usavrsavanje`,
});

const razlozi = [
  {
    title: "Preciznost i kvalitet",
    text: "Napredne tehnike poput senčenja obrva, 3D tehnika, hairstroke ili rad sa specijalizovanim uređajima za precizno oblikovanje.",
  },
  {
    title: "Vlastiti stil",
    text: "Usavršavanjem razvijate sopstveni pristup i prepoznatljiv stil koji vas izdvaja na tržištu.",
  },
  {
    title: "Poverenje klijenata",
    text: "Klijenti traže stručnjake — napredne veštine pomažu da steknete poverenje i postanete lider u industriji.",
  },
  {
    title: "Bolji poslovni rezultati",
    text: "Sa naprednim tehnikama nudite širi spektar usluga, povećavate broj klijenata i unapređujete reputaciju.",
  },
];

const tehnike = [
  {
    broj: "01",
    naslov: "Hairstroke (mikropigmentacija)",
    tekst:
      "Tehnika koja omogućava prirodan izgled obrva sa efektnim senčenjem dlačica, stvarajući iluziju voluminoznih i prirodnih dlačica. Usavršavanje uključuje rad sa sofisticiranim alatima i precizno odabranim bojama.",
  },
  {
    broj: "02",
    naslov: "Ombré obrve",
    tekst:
      "Tehnika postepenog prelivanja boje koja stvara prirodan i blagi izgled obrva — tamniji krajevi i svetliji početak za savršen gradijent efekat.",
  },
  {
    broj: "03",
    naslov: "Trajni eyeliner",
    tekst:
      "Precizna aplikacija boje na ivici trepavica koja stvara efekat trajnog eyelinera. Rad sa sitnim i preciznim iglama uz razumevanje različitih oblika očiju. U ponudi su edukacije za senčeni ajlajner, lashliner i klasičnu crnu liniju.",
  },
  {
    broj: "04",
    naslov: "Trajne usne",
    tekst:
      "Stvaranje trajnog efekta ruža ili labelo efekta — definisanje linije usana ili popunjavanje za prirodan izgled. Postoje ombré tehnike, kao i tehnike koje se izvode brže nego uobičajeni pristupi.",
  },
  {
    broj: "05",
    naslov: "Popravka i korekcija",
    tekst:
      "Kako ispraviti prethodne greške ili nepravilnosti — neravnomerni pigmenti ili loše aplikacije. U ponudi je i skidanje starih radova voćnim kiselinama.",
  },
];

const prednosti = [
  {
    title: "Konkurentnost na tržištu",
    text: "Širok spektar naprednih tehnika čini vas konkurentnijim i privlači više klijenata.",
  },
  {
    title: "Sertifikati i priznanja",
    text: "Polaznici naprednih kurseva dobijaju sertifikate koji potvrđuju stručnost i koriste ih za promociju poslovanja.",
  },
  {
    title: "Profesionalna reputacija",
    text: "Usavršavanje je odličan način da unapredite profesionalni profil i postanete prepoznatljivi kao vrhunski stručnjak.",
  },
];

export default function UsavrsavanjePage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Edukacije · Napredni nivo</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Usavršavanje<br />
            <span className="italic text-gold-light">trajna šminka i tetoviranje</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Ključni korak za sve koji žele da napreduju nakon bazne obuke i postanu
            pravi stručnjaci u trajnoj šminki i tetovažama.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Dve hero slike */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/usavrsavanje.jpg"
                alt="Usavršavanje trajna šminka — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/usavrsavanje2.jpg"
                alt="Usavršavanje trajna šminka — Studio Revive Beograd"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Uvod + zašto */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">O programu</span>
                </div>
                <p className="text-muted text-base leading-7">
                  Usavršavanje tehnika trajne šminke nakon bazne obuke omogućava dalji
                  napredak, bolje razumevanje naprednih tehnika i veće profesionalne
                  mogućnosti. Kroz individualni pristup i rad sa modelima, polaznici
                  podižu kvalitet rada na ekspertski nivo.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">Praktična primena</span>
                </div>
                <p className="text-muted text-base leading-7">
                  Usavršavanje podrazumeva puno praktičnog rada, rad sa modelima i
                  individualne korekcije od strane instruktora. Učenici se usmeravaju
                  na preciznost, rad pod pritiskom i razumevanje individualnih
                  karakteristika svakog klijenta.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Zašto je usavršavanje važno</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {razlozi.map((r) => (
                <div key={r.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{r.title}</h3>
                  <p className="text-muted text-sm leading-6">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Tehnike */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Tehnike koje se usavršavaju</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
            {tehnike.map((t) => (
              <div key={t.broj} className="flex gap-6">
                <span className="font-serif text-4xl text-gold/20 font-light leading-none flex-shrink-0 pt-1">
                  {t.broj}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-cream font-light mb-3">{t.naslov}</h3>
                  <p className="text-muted text-sm leading-7">{t.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Prednosti + zaključak */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Prednosti usavršavanja</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 mb-16">
              {prednosti.map((p) => (
                <div key={p.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg text-cream font-light mb-3">{p.title}</h3>
                  <p className="text-muted text-sm leading-6">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl border-t border-border pt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Zaključak</span>
              </div>
              <p className="text-muted text-base leading-7">
                Usavršavanje tehnika trajne šminke omogućava vam da postanete pravi ekspert
                u ovoj oblasti, pružajući kvalitetnu uslugu klijentima i stalno unapređujući
                rad. Ulaganje u dodatnu edukaciju i primenu naprednih tehnika ne samo da
                povećava vašu profesionalnu vrednost, već vam omogućava i veću kreativnost
                i mogućnost da se izdvojite na konkurentnom tržištu.
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
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">Rezervišite mesto</div>
                <p className="text-cream text-base">Kontaktirajte nas i investirajte u svoje znanje.</p>
              </div>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200 flex-shrink-0"
              >
                Zakažite edukaciju
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
