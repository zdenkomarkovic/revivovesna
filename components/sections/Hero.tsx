import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden flex items-center">
      {/* Image — right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
        <Image
          src="/pv-scaled-r2wa1x86vdxfsllo0506k0wcbhyv9zvrndt17grjpk.jpg"
          alt="Vesna Parojčić — permanent makeup i tattoo artist"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-dark to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Top gradient — navbar readability */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-dark/80 to-transparent z-10 pointer-events-none" />

      {/* Mobile overlay */}
      <div className="absolute inset-0 bg-dark/80 lg:hidden" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20">
        <div className="max-w-2xl">

          <h1 className="font-serif font-light leading-none mb-8">
            <span className="block text-sm md:text-base tracking-[0.45em] uppercase text-gold mb-4">
              Kozmetički Studio
            </span>
            <span className="block text-7xl md:text-8xl lg:text-[9rem] text-cream tracking-tight">
              REVIVE
            </span>
            <span className="block text-xl md:text-2xl text-cream/60 tracking-[0.4em] uppercase mt-3 mb-8">
              Beograd
            </span>

            {/* Dekorativni separator unutar h1 */}
            <span className="flex items-center gap-4 mb-8" aria-hidden="true">
              <span className="block w-14 h-px bg-gold" />
              <span className="text-gold/40 text-xs">◆</span>
              <span className="block w-6 h-px bg-gold/40" />
            </span>

            <span className="block font-serif italic text-3xl md:text-4xl text-gold-light font-light mb-2">
              Vesna Parojčić
            </span>
          </h1>

          <p className="text-muted text-sm tracking-[0.15em] uppercase mb-8">
            PMU & Tattoo Artist · Edukator · Sudija
          </p>

          <p className="text-muted text-base leading-8 max-w-md mb-12">
            Više od 15 godina posvećenosti umetnosti permanentnog šminkanja i
            tetoviranja. Diplomirani profesor likovne kulture čija je strast
            transformisana u poziv.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/kontakt"
              className="inline-flex items-center bg-gold text-dark text-xs tracking-[0.15em] uppercase font-medium px-8 py-4 hover:bg-gold-light transition-colors duration-200"
            >
              Zakažite termin
            </a>
            <a
              href="#o-meni"
              className="inline-flex items-center border border-gold/40 text-cream/80 text-xs tracking-[0.15em] uppercase px-8 py-4 hover:border-gold hover:text-cream transition-all duration-200"
            >
              Saznajte više
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-muted/60 text-[11px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
