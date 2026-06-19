"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackPhoneConversion } from "@/lib/gtag";

const navLinks = [
  { href: "/", label: "Početna" },
];

const galerijаLinks = [
  { href: "/galerija/obrve", label: "Puder obrve" },
  { href: "/galerija/ajlajner", label: "Ajlajner" },
  { href: "/galerija/usne", label: "Usne" },
  { href: "/galerija/tattoo", label: "Tattoo" },
  { href: "/galerija/laserskoskidanje", label: "Lasersko skidanje" },
  { href: "/galerija/edukacije", label: "Edukacije" },
];

const edukacijeLinks = [
  { href: "/edukacije", label: "Sve edukacije" },
  { href: "/edukacije/puder-obrve", label: "Puder obrve — bazna obuka" },
  { href: "/edukacije/eyeliner", label: "Eyeliner masterclass" },
  { href: "/edukacije/usne-masterclass", label: "Usne masterclass" },
  { href: "/edukacije/usavrsavanje", label: "Usavršavanje" },
  { href: "/edukacije/mini-tattoo", label: "Mini tattoo" },
];

const tretmaniLinks = [
  { href: "/tretmani", label: "Svi tretmani" },
  { href: "/tretmani/pmu", label: "PMU — Trajna šminka" },
  { href: "/tretmani/tattoo", label: "Tetovaže" },
  { href: "/tretmani/tattoo-removal", label: "Lasersko skidanje tetovaža" },
  { href: "/tretmani/hemijski-removal", label: "Hemijski removal tetovaža" },
  { href: "/tretmani/laserska-epilacija", label: "Laserska epilacija" },
  { href: "/tretmani/tretmani-lica", label: "Tretmani lica" },
  { href: "/tretmani/lash-brow-lift", label: "Lash & Brow Lift" },
  { href: "/tretmani/hydrafacial", label: "Hydrafacial" },
  { href: "/tretmani/relaks-masaza", label: "Relaks masaža lica" },
  { href: "/tretmani/revive-thermalift", label: "Revive Thermalift tretmani" },
  { href: "/tretmani/anticelulit-masaze", label: "Anticelulit masaže i limfna drenaža" },
  { href: "/tretmani/kavitacija", label: "Kavitacija" },
  { href: "/tretmani/presoterapija", label: "Presoterapija" },
  { href: "/tretmani/ems-sculpt", label: "EMS Sculpt Tesla" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [edukacijeOpen, setEdukacijeOpen] = useState(false);
  const [galerijaOpen, setGalerijaOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [mobileEduOpen, setMobileEduOpen] = useState(false);
  const [mobileGalOpen, setMobileGalOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const edukacijeRef = useRef<HTMLLIElement>(null);
  const galerijaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (edukacijeRef.current && !edukacijeRef.current.contains(e.target as Node)) {
        setEdukacijeOpen(false);
      }
      if (galerijaRef.current && !galerijaRef.current.contains(e.target as Node)) {
        setGalerijaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Studio Revive Beograd"
            width={160}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}

          {/* Tretmani dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1.5 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors duration-200"
            >
              Tretmani
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>
                <path d="M1 3l4 4 4-4" />
              </svg>
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-dark-2 border border-border transition-all duration-200 ${
              dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
              {tretmaniLinks.map(({ href, label }, i) => (
                <a key={`${href}-${i}`} href={href} onClick={() => setDropdownOpen(false)}
                  className={`block px-5 py-3 text-xs tracking-[0.12em] uppercase text-muted hover:text-gold hover:bg-dark transition-colors duration-150 ${
                    i === 0 ? "border-b border-border text-gold" : "border-b border-border/40 last:border-0"
                  }`}>
                  {label}
                </a>
              ))}
            </div>
          </li>

          {/* Edukacije dropdown */}
          <li ref={edukacijeRef} className="relative">
            <button
              onClick={() => setEdukacijeOpen((v) => !v)}
              className="flex items-center gap-1.5 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors duration-200"
            >
              Edukacije
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"
                className={`transition-transform duration-200 ${edukacijeOpen ? "rotate-180" : ""}`}>
                <path d="M1 3l4 4 4-4" />
              </svg>
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-dark-2 border border-border transition-all duration-200 ${
              edukacijeOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
              {edukacijeLinks.map(({ href, label }, i) => (
                <a key={`${href}-${i}`} href={href} onClick={() => setEdukacijeOpen(false)}
                  className={`block px-5 py-3 text-xs tracking-[0.12em] uppercase text-muted hover:text-gold hover:bg-dark transition-colors duration-150 ${
                    i === 0 ? "border-b border-border text-gold" : "border-b border-border/40 last:border-0"
                  }`}>
                  {label}
                </a>
              ))}
            </div>
          </li>

          {/* Galerija dropdown */}
          <li ref={galerijaRef} className="relative">
            <button
              onClick={() => setGalerijaOpen((v) => !v)}
              className="flex items-center gap-1.5 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors duration-200"
            >
              Galerija
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"
                className={`transition-transform duration-200 ${galerijaOpen ? "rotate-180" : ""}`}>
                <path d="M1 3l4 4 4-4" />
              </svg>
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-dark-2 border border-border transition-all duration-200 ${
              galerijaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
              {galerijаLinks.map(({ href, label }, i) => (
                <a key={`${href}-${i}`} href={href} onClick={() => setGalerijaOpen(false)}
                  className="block px-5 py-3 text-xs tracking-[0.12em] uppercase text-muted hover:text-gold hover:bg-dark transition-colors duration-150 border-b border-border/40 last:border-0">
                  {label}
                </a>
              ))}
            </div>
          </li>

          <li>
            <a
              href="/cenovnik"
              className="text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors duration-200"
            >
              Cenovnik
            </a>
          </li>

          <li>
            <a
              href="/kontakt"
              className="text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors duration-200"
            >
              Kontakt
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="tel:+381669717706"
            onClick={trackPhoneConversion}
            className="hidden lg:inline-flex border-2 border-gold text-gold text-sm tracking-[0.15em] font-bold px-6 py-2.5 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
          >
            +381 66 971 7706
          </a>

          <a
            href="tel:+381669717706"
            onClick={trackPhoneConversion}
            className="lg:hidden absolute left-1/2 -translate-x-1/2 border border-gold text-gold text-xs tracking-[0.1em] font-normal px-3 py-1.5 hover:bg-gold hover:text-dark transition-all duration-200"
          >
            +381 66 971 7706
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            aria-label="Otvori meni"
          >
            <span
              className={`block w-full h-px bg-cream origin-center transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-cream transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-cream origin-center transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[900px]" : "max-h-0"
        }`}
      >
        <div className="bg-dark-2 border-t border-border px-6 py-6 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors border-b border-border/50"
            >
              {label}
            </a>
          ))}

          {/* Mobile Tretmani accordion */}
          <div className="border-b border-border/50">
            <button
              onClick={() => setMobileSubmenuOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors"
            >
              Tretmani
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-transform duration-200 ${mobileSubmenuOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 3l4 4 4-4" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileSubmenuOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {tretmaniLinks.map(({ href, label }, i) => (
                <a
                  key={`${href}-${i}`}
                  href={href}
                  onClick={() => { setIsOpen(false); setMobileSubmenuOpen(false); }}
                  className={`block py-2.5 pl-4 text-xs tracking-[0.12em] uppercase transition-colors hover:text-gold ${
                    i === 0 ? "text-gold" : "text-muted"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Edukacije accordion */}
          <div className="border-b border-border/50">
            <button
              onClick={() => setMobileEduOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors"
            >
              Edukacije
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"
                className={`transition-transform duration-200 ${mobileEduOpen ? "rotate-180" : ""}`}>
                <path d="M1 3l4 4 4-4" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileEduOpen ? "max-h-64" : "max-h-0"}`}>
              {edukacijeLinks.map(({ href, label }, i) => (
                <a
                  key={`${href}-${i}`}
                  href={href}
                  onClick={() => { setIsOpen(false); setMobileEduOpen(false); }}
                  className={`block py-2.5 pl-4 text-xs tracking-[0.12em] uppercase transition-colors hover:text-gold ${
                    i === 0 ? "text-gold" : "text-muted"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Galerija accordion */}
          <div className="border-b border-border/50">
            <button
              onClick={() => setMobileGalOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors"
            >
              Galerija
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"
                className={`transition-transform duration-200 ${mobileGalOpen ? "rotate-180" : ""}`}>
                <path d="M1 3l4 4 4-4" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileGalOpen ? "max-h-48" : "max-h-0"}`}>
              {galerijаLinks.map(({ href, label }, i) => (
                <a
                  key={`${href}-${i}`}
                  href={href}
                  onClick={() => { setIsOpen(false); setMobileGalOpen(false); }}
                  className="block py-2.5 pl-4 text-xs tracking-[0.12em] uppercase text-muted transition-colors hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/cenovnik"
            onClick={() => setIsOpen(false)}
            className="py-3 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors border-b border-border/50"
          >
            Cenovnik
          </a>

          <a
            href="/kontakt"
            onClick={() => setIsOpen(false)}
            className="py-3 text-sm tracking-[0.15em] uppercase text-cream font-medium hover:text-gold transition-colors border-b border-border/50"
          >
            Kontakt
          </a>

        </div>
      </div>
    </header>
  );
}
