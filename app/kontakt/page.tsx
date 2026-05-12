"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { trackPhoneConversion, trackFormConversion } from "@/lib/gtag";
import Footer from "@/components/layout/Footer";
import {
  STUDIO_PHONE,
  STUDIO_EMAIL,
  STUDIO_INSTAGRAM,
  STUDIO_FACEBOOK,
  STUDIO_WHATSAPP,
  STUDIO_VIBER,
  STUDIO_ADDRESS,
  STUDIO_ADDRESS_NOTE,
} from "@/lib/constants";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      trackFormConversion();
    } catch {
      setError("Slanje nije uspelo. Pokušajte ponovo ili nas kontaktirajte telefonom.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-dark-3 border border-border text-cream text-base px-4 py-3.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted/40";
  const labelClass = "block text-xs tracking-[0.2em] uppercase text-muted mb-2";

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
            Zakažite<br />
            <span className="italic text-gold-light">termin</span>
          </h1>
          <p className="text-muted text-base max-w-lg mt-6">
            Kontaktirajte nas putem forme, telefona ili društvenih mreža.
            Odgovaramo u roku od 24 sata.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Left — contact info (2 cols) */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                  Kontakt informacije
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-px bg-gold/30 self-stretch flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-muted tracking-widest uppercase mb-1">Adresa</div>
                      <p className="text-cream text-base">{STUDIO_ADDRESS}</p>
                      <p className="text-muted text-sm">{STUDIO_ADDRESS_NOTE}</p>
                      <p className="text-muted text-sm">Beograd, Srbija</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-px bg-gold/30 self-stretch flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-muted tracking-widest uppercase mb-1">Telefon</div>
                      <a href={`tel:${STUDIO_PHONE}`} onClick={trackPhoneConversion} className="text-cream text-base hover:text-gold transition-colors">
                        {STUDIO_PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-px bg-gold/30 self-stretch flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-muted tracking-widest uppercase mb-1">WhatsApp</div>
                      <a href={STUDIO_WHATSAPP} onClick={trackPhoneConversion} target="_blank" rel="noopener noreferrer" className="text-cream text-base hover:text-gold transition-colors">
                        {STUDIO_PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-px bg-gold/30 self-stretch flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-muted tracking-widest uppercase mb-1">Viber</div>
                      <a href={STUDIO_VIBER} onClick={trackPhoneConversion} className="text-cream text-base hover:text-gold transition-colors">
                        {STUDIO_PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-px bg-gold/30 self-stretch flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-muted tracking-widest uppercase mb-1">Email</div>
                      <a href={`mailto:${STUDIO_EMAIL}`} className="text-cream text-base hover:text-gold transition-colors">
                        {STUDIO_EMAIL}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-border">
                <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                  Pratite nas
                </h2>
                <div className="flex flex-col gap-4">
                  <a
                    href={STUDIO_INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted hover:text-gold transition-colors group"
                  >
                    <div className="w-9 h-9 border border-border group-hover:border-gold/40 flex items-center justify-center transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-cream group-hover:text-gold transition-colors">Instagram</div>
                      <div className="text-xs text-muted">@vesna_parojcic</div>
                    </div>
                  </a>
                  <a
                    href={STUDIO_FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted hover:text-gold transition-colors group"
                  >
                    <div className="w-9 h-9 border border-border group-hover:border-gold/40 flex items-center justify-center transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-cream group-hover:text-gold transition-colors">Facebook</div>
                      <div className="text-xs text-muted">Studio Revive Beograd</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                  Radno vreme
                </h2>
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex justify-between">
                    <span>Ponedeljak — Petak</span>
                    <span className="text-cream">12:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subota</span>
                    <span className="text-cream">na zakazivanje</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nedelja</span>
                    <span className="text-muted/50">zatvoreno</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form (3 cols) */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-24">
                  <div className="w-px h-16 bg-gold/30 mx-auto mb-8" />
                  <div className="font-serif text-4xl text-gold-light font-light mb-4">
                    Hvala vam!
                  </div>
                  <p className="text-muted text-base max-w-sm">
                    Poruka je uspešno poslata.
                    Odgovorićemo u najkraćem roku.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-10 text-xs tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors"
                  >
                    Pošalji novu poruku
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Ime i prezime</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        placeholder="Vaše ime"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Telefon</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                        placeholder="+381 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Email adresa</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="vasa@email.com"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Poruka</label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Postavite pitanje ili opišite šta vas zanima..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold text-dark text-sm tracking-[0.2em] uppercase font-medium py-4 hover:bg-gold-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Slanje..." : "Pošaljite poruku"}
                  </button>
                  {error && (
                    <p className="text-red-400/80 text-sm text-center">{error}</p>
                  )}
                  <p className="text-muted/50 text-sm text-center">
                    Odgovaramo u roku od 24 sata
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="border-t border-border bg-dark-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-gold tracking-[0.3em] uppercase mb-2">Kako do nas</div>
                <p className="text-cream text-base font-medium">{STUDIO_ADDRESS}</p>
                <p className="text-muted text-sm">{STUDIO_ADDRESS_NOTE} · Beograd</p>
              </div>
              <a
                href={`https://maps.google.com/?q=Ustanička+67+Beograd`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200 flex-shrink-0"
              >
                Otvori u Google Maps
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
