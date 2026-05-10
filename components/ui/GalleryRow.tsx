"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface GalleryRowProps {
  folder: string;
  images: string[];
  alt: string;
}

export function GalleryRow({ folder, images, alt }: GalleryRowProps) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const preview = images.slice(0, 5);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  const displayImages = expanded ? images : preview;

  return (
    <>
      {expanded ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {displayImages.map((f, idx) => (
            <div
              key={f}
              className="break-inside-avoid overflow-hidden cursor-pointer"
              onClick={() => setLightbox(idx)}
            >
              <Image
                src={`/${folder}/${f}`}
                alt={alt}
                width={300}
                height={300}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {displayImages.map((f, idx) => (
            <div
              key={f}
              className="relative aspect-[3/4] overflow-hidden cursor-pointer"
              onClick={() => setLightbox(idx)}
            >
              <Image
                src={`/${folder}/${f}`}
                alt={alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-200"
        >
          {expanded ? "Zatvori" : "Vidi više"}
          <span className="w-6 h-px bg-current" />
        </button>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Slika */}
          <div
            className="relative max-w-3xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 50) { if (diff > 0) next(); else prev(); }
              touchStartX.current = null;
            }}
          >
            <Image
              src={`/${folder}/${images[lightbox]}`}
              alt={alt}
              width={800}
              height={1000}
              className="w-full h-auto max-h-[85vh] object-contain"
            />

            {/* Brojač */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted tracking-widest">
              {lightbox + 1} / {images.length}
            </div>
          </div>

          {/* Prethodna */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted hover:text-gold transition-colors p-3"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Prethodna"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Sledeća */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-gold transition-colors p-3"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Sledeća"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Zatvori */}
          <button
            className="absolute top-4 right-4 text-muted hover:text-gold transition-colors p-3"
            onClick={() => setLightbox(null)}
            aria-label="Zatvori"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
