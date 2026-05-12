"use client";

import { useState, useRef } from "react";
import { trackPhoneConversion, trackFormConversion } from "@/lib/gtag";
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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const converted = useRef(false);

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
      if (!converted.current) {
        converted.current = true;
        trackFormConversion();
      }
    } catch {
      setError("Slanje nije uspelo. Pokušajte ponovo ili nas kontaktirajte telefonom.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="py-24 lg:py-36 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Kontakt
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-cream font-light mb-4">
            Zakažite termin
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            Pišite nam ili nas pozovite. Sa zadovoljstvom ćemo odgovoriti na sva
            vaša pitanja i zakazati konsultaciju.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
                Kontakt informacije
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-px h-full min-h-[20px] bg-gold/30 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted tracking-widest uppercase mb-1">
                      Telefon
                    </div>
                    <a
                      href={`tel:${STUDIO_PHONE}`}
                      onClick={trackPhoneConversion}
                      className="text-cream text-base hover:text-gold transition-colors"
                    >
                      {STUDIO_PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-px h-full min-h-[20px] bg-gold/30 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted tracking-widest uppercase mb-1">WhatsApp</div>
                    <a href={STUDIO_WHATSAPP} onClick={trackPhoneConversion} target="_blank" rel="noopener noreferrer" className="text-cream text-base hover:text-gold transition-colors">
                      {STUDIO_PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-px h-full min-h-[20px] bg-gold/30 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted tracking-widest uppercase mb-1">Viber</div>
                    <a href={STUDIO_VIBER} onClick={trackPhoneConversion} className="text-cream text-base hover:text-gold transition-colors">
                      {STUDIO_PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-px h-full min-h-[20px] bg-gold/30 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted tracking-widest uppercase mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${STUDIO_EMAIL}`}
                      className="text-cream text-base hover:text-gold transition-colors"
                    >
                      {STUDIO_EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-px h-full min-h-[20px] bg-gold/30 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted tracking-widest uppercase mb-1">
                      Adresa
                    </div>
                    <span className="text-cream text-base">{STUDIO_ADDRESS}</span>
                    <p className="text-muted text-sm">{STUDIO_ADDRESS_NOTE} · Beograd</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
                Pratite nas
              </h3>
              <div className="flex gap-6">
                <a
                  href={STUDIO_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted hover:text-gold transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                  <span className="text-sm tracking-widest uppercase">Instagram</span>
                </a>
                <a
                  href={STUDIO_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted hover:text-gold transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="text-sm tracking-widest uppercase">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-px h-12 bg-gold/50 mx-auto mb-6" />
                <div className="font-serif text-3xl text-gold-light font-light mb-3">
                  Hvala vam!
                </div>
                <p className="text-muted text-base">
                  Poruka je uspešno poslata.
                  Odgovorićemo u najkraćem roku.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-xs tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors"
                >
                  Pošalji novu poruku
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-dark-3 border border-border text-cream text-base px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted/40"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                    Email adresa
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-dark-3 border border-border text-cream text-base px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted/40"
                    placeholder="vasa@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                    Poruka
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-dark-3 border border-border text-cream text-base px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors resize-none placeholder:text-muted/40"
                    placeholder="Opišite uslugu koja vas zanima ili postavite pitanje..."
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
    </section>
  );
}
