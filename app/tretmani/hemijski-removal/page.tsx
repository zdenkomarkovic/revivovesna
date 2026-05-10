import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Hemijski removal voćnim kiselinama | Studio Revive Beograd",
  description:
    "Hemijski removal obrva i tetovaža pomoću voćnih kiselina — sigurna i prirodna alternativa laseru. Studio Revive Beograd.",
};

type Tacka = { title: string; text: string };
type Sekcija = { broj: string; naslov: string; tekst?: string; tacke?: Tacka[] };

const sekcije: Sekcija[] = [
  {
    broj: "01",
    naslov: "Šta su voćne kiseline i kako funkcionišu?",
    tekst:
      "Voćne kiseline su prirodne kiseline koje se nalaze u voću, a najpoznatije su alfa-hidroksi kiseline (AHA), kao i beta-hidroksi kiseline (BHA). AHA kiseline, poput glikolne, mlečne i limunske kiseline, koriste se u različitim kozmetičkim tretmanima zbog svojih svojstava koja podstiču regeneraciju kože i uklanjanje mrtvih ćelija sa površine. Kada se koriste za hemijski removal obrva i tetovaža, ove kiseline deluju tako što razlažu molekule pigmenta unutar kože, omogućavajući njihov postupni nestanak. Proces se temelji na hemijskoj reakciji koja razgrađuje boje, što ih čini lakšim za uklanjanje kroz prirodne procese obnove kože.",
  },
  {
    broj: "02",
    naslov: "Kako izgleda proces hemijskog removal-a?",
    tekst:
      "Tretman započinje nanošenjem odgovarajuće voćne kiseline na tretiranu površinu, bilo da je reč o obrvama ili tetovaži. Kiselina se unosi PMU masinicom i tako prodire u kožu i počinje razgrađivati pigment, što može izazvati lagano crvenilo ili iritaciju. Zavisno od dubine boje i vrste pigmenta, tretman može biti potrebno ponoviti više puta. Kiselina ne deluje odmah; proces je postepen, jer telo postepeno uklanja pigment kroz prirodne mehanizme, kao što su limfni sistem i obnova kože. Obično je potrebno nekoliko sesija kako bi se postigao željeni rezultat. Tretman traje oko pola sata, kada su obrve u pitanju, a za veće površine je potrebno više vremena.",
  },
  {
    broj: "03",
    naslov: "Prednosti tretmana",
    tacke: [
      {
        title: "Manje invazivno",
        text: "Za razliku od laserskog tretmana, hemijski removal sa voćnim kiselinama ne zahteva upotrebu lasera niti fizičkih intervencija. Ovo znači manji rizik od ožiljaka ili drugih nuspojava.",
      },
      {
        title: "Prirodna alternativa",
        text: "Voćne kiseline su prirodni sastojci koji ne sadrže agresivne hemikalije, što ovu metodu čini pogodnom za osobe sa osetljivijom kožom.",
      },
      {
        title: "Preciznost i efikasnost",
        text: "Voćne kiseline mogu biti vrlo efikasne u razgradnji pigmenta, posebno u slučajevima kada tetovaža ili microblading nisu duboko uloženi u kožu. Najbolje kombinovati sa laserskim tretmanima uklanjanja boja.",
      },
      {
        title: "Minimalan oporavak",
        text: "Tretman ne izaziva značajne ožiljke ili dugačke periode oporavka. Koža se obnavlja postepeno, bez potrebe za dugotrajnim mirovanjem. Tretman se radi na mesec dana.",
      },
    ],
  },
  {
    broj: "04",
    naslov: "Moguće nuspojave i rizici",
    tacke: [
      {
        title: "Iritacija i crvenilo",
        text: "Zavisno od osetljivosti kože, može doći do crvenila ili blagih iritacija. Ove reakcije obično nestaju nakon nekoliko sati ili dana.",
      },
      {
        title: "Neželjena promena boje kože",
        text: "U retkim slučajevima, ako se tretman ne primeni pravilno, može doći do promena u boji kože, kao što su hiperpigmentacija ili hipopigmentacija.",
      },
      {
        title: "Potreba za višestrukim sesijama",
        text: "U poređenju sa laserskim uklanjanjem, efekti voćnih kiselina mogu biti sporiji, što znači da je potrebno više sesija kako bi se postigao potpuni rezultat.",
      },
    ],
  },
  {
    broj: "05",
    naslov: "Posttretmanska nega",
    tekst:
      "Nakon tretmana hemijskog removala sa voćnim kiselinama, nega kože je ključna za uspešan oporavak i postizanje željenih rezultata. Preporučuje se korišćenje blagih, hidratantnih krema nakon 24 sata, koje ne iritiraju kožu, kao i izbegavanje izlaganja suncu. Ne sme se kvasiti prvih 24 sata, ali nakon toga je obavezno održavati higijenu. Takođe, potrebno je izbegavati bilo kakve agresivne tretmane na koži dok se ne postigne potpuni oporavak. Koristiti prvih mesec dana SPF kreme.",
  },
  {
    broj: "06",
    naslov: "Ko je idealan kandidat?",
    tekst:
      "Ova metoda je pogodna za osobe koje žele da uklone neželjene tetovaže ili microblading sa obrva, ali ne žele da se podvrgnu invazivnijim tretmanima poput lasera. Hemijski removal sa voćnim kiselinama je naročito efikasan kod lakših tetovaža ili površinskih pigmenta, dok je kod dubljih i intenzivnijih tetovaža potrebno više sesija.",
  },
];

export default function HemijskiRemovalPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">

        {/* Page header */}
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Tretmani</span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight mb-4">
            Hemijski removal<br />
            <span className="italic text-gold-light">voćnim kiselinama</span>
          </h1>
          <p className="text-muted text-base max-w-2xl mt-6 leading-relaxed">
            Sigurna alternativa za uklanjanje pigmenta. Savremena tehnika koja koristi
            prirodne kiseline kako bi efikasno uklonila neželjene pigmente sa kože —
            bez lasera i invazivnih intervencija.
          </p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Hero slika + uvod */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/tretmani/hemijskiremoval.jpg"
                alt="Hemijski removal voćnim kiselinama — Studio Revive Beograd"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted text-base leading-7 mb-6">
                Hemijski removal obrva i tetovaža pomoću voćnih kiselina je popularan
                među onima koji žele da se reše neurednih ili nepoželjnih trajnih obrva
                ili tetovaža bez potrebe za invazivnim tretmanima.
              </p>
              <p className="text-muted text-base leading-7">
                Posebno je efikasan kada laser više ne prepoznaje određene pigmente —
                žute, crvene, bele, zelene i plave — ili pigmente koji su duboko u koži.
                Tada ovaj tretman stupa na snagu kao pouzdano rešenje.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Numerisane sekcije */}
        <div className="bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Kako funkcioniše</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
              {sekcije.map((s) => (
                <div key={s.broj} className={`flex gap-6 ${s.tacke ? "lg:col-span-2" : ""}`}>
                  <span className="font-serif text-4xl text-gold/20 font-light leading-none flex-shrink-0 pt-1">
                    {s.broj}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-cream font-light mb-6">{s.naslov}</h3>
                    {s.tekst && (
                      <p className="text-muted text-sm leading-7">{s.tekst}</p>
                    )}
                    {s.tacke && (
                      <div className={`grid gap-8 ${s.tacke.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
                        {s.tacke.map((t) => (
                          <div key={t.title} className="border-t border-border pt-6">
                            <h3 className="font-serif text-lg text-cream font-light mb-3">{t.title}</h3>
                            <p className="text-muted text-sm leading-6">{t.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Zaključak + edukacije */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Zaključak</span>
              </div>
              <p className="text-muted text-base leading-7">
                Hemijski removal sa voćnim kiselinama pruža sigurno i efikasno rešenje za
                uklanjanje tetovaža i obrva, posebno za one koji traže nežniji, manje
                invazivan pristup. Iako proces zahteva više sesija i može izazvati blage
                nuspojave, rezultat je obično prirodan i dugotrajan. Ako ste u potrazi za
                alternativom lasera, ova metoda može biti odličan izbor za vas. Preporučuje
                se da tretman bude izveden od strane stručnjaka kako bi se minimizirali
                rizici i postigao najbolji mogući rezultat.
              </p>
            </div>
            <div className="border border-border p-8 self-start">
              <div className="text-xs text-gold tracking-[0.3em] uppercase mb-4">Edukacije</div>
              <p className="text-cream text-base font-serif font-light mb-4 leading-snug">
                Dostupne su edukacije za PMU artiste
              </p>
              <p className="text-muted text-sm leading-7">
                Nudimo edukacije za više različitih tipova removala namenjene PMU
                artistima koji žele da prošire svoje znanje i ponudu usluga.
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
