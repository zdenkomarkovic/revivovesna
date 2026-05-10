import Image from "next/image";

const images = [
  {
    src: "/4083cab1-cd8a-4f00-8491-50e5904c28ef-r1u8yqlqp7hmjxzijhdfph2i8w83jh6fah07k3d408.webp",
    alt: "Permanent makeup rezultat — Studio Revive",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/7d675fdf-315e-4752-81ee-51690f4f8248-r2w9xpw6b26ubz1rvw9pfox52b4z4m66029oyviwkw.png",
    alt: "PMU obrve — Studio Revive Beograd",
    aspect: "aspect-square",
  },
  {
    src: "/9fc25032-53f1-44ef-8413-f1f68789c325-r1vefw66foan2b96zbii69dyg6v8m342sp1p89xdv4.webp",
    alt: "Rad Vesne Parojčić — PMU",
    aspect: "aspect-square",
  },
  {
    src: "/pv-scaled-r2wa1x86vdxfsllo0506k0wcbhyv9zvrndt17grjpk.jpg",
    alt: "Vesna Parojčić — permanent makeup artist",
    aspect: "aspect-[4/5]",
  },
];

export default function Gallery() {
  return (
    <section id="galerija" className="py-24 lg:py-36 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.35em] uppercase">
              Galerija
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mb-4">
            Naši radovi
          </h2>
          <p className="text-muted text-sm max-w-md mx-auto">
            Svaki rad je jedinstven. Pogledajte deo naše kolekcije.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${image.aspect}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/vesna_parojcic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gold text-[10px] tracking-[0.3em] uppercase hover:gap-5 transition-all duration-200"
          >
            Više radova na Instagramu
            <span className="w-8 h-px bg-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
