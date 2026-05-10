import Image from "next/image";
import {
  STUDIO_PHONE,
  STUDIO_EMAIL,
  STUDIO_INSTAGRAM,
  STUDIO_FACEBOOK,
  STUDIO_WHATSAPP,
  STUDIO_VIBER,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Kolona 1: Logo + opis */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo.webp"
                alt="Studio Revive Beograd"
                width={160}
                height={56}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted text-base leading-relaxed max-w-xs mb-5">
              Nagrađivani permanent makeup i tattoo studio u srcu Beograda.
            </p>
            <ul className="space-y-3 text-base text-muted">
              <li>
                <a href={`tel:${STUDIO_PHONE}`} className="hover:text-gold transition-colors">
                  {STUDIO_PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-gold transition-colors">
                  {STUDIO_EMAIL}
                </a>
              </li>
            </ul>

            <div className="flex flex-col gap-2 mt-6">
              <a
                href={STUDIO_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={STUDIO_VIBER}
                className="flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M11.997 0C5.895 0 .675 4.763.675 10.618c0 3.11 1.37 5.922 3.565 7.9V22.5l4.153-2.282c.513.142 1.05.24 1.604.293v-.001c.667.065 1.346.1 2.002.1C17.096 20.61 23.325 16.3 23.325 10.618S17.096 0 11.997 0zm.003 18.808c-.63 0-1.244-.06-1.835-.176L6.24 20.53v-3.232C4.207 15.628 3.075 13.28 3.075 10.618c0-4.703 4.05-8.818 8.925-8.818s8.925 4.115 8.925 8.818c0 4.703-4.05 8.19-8.925 8.19zm4.5-6.207c-.247-.124-1.464-.723-1.692-.806-.228-.083-.393-.124-.558.124-.165.248-.639.806-.784.972-.144.166-.289.186-.537.062-.247-.124-1.045-.386-1.99-1.23-.736-.657-1.233-1.468-1.378-1.716-.144-.248-.015-.382.108-.505.112-.111.248-.29.373-.434.124-.145.165-.248.248-.414.082-.165.041-.31-.021-.434-.062-.124-.558-1.343-.764-1.84-.2-.482-.406-.416-.558-.424-.144-.007-.31-.009-.475-.009-.165 0-.434.062-.66.31-.227.248-.868.847-.868 2.068 0 1.22.888 2.397 1.012 2.563.123.165 1.748 2.668 4.235 3.74.591.255 1.052.407 1.412.521.593.189 1.133.162 1.56.099.476-.07 1.466-.6 1.673-1.178.207-.579.207-1.075.144-1.178-.062-.104-.227-.166-.475-.29z" />
                </svg>
                Viber
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={STUDIO_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href={STUDIO_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Kolona 2: Navigacija */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
              Navigacija
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#o-meni", label: "O Meni" },
                { href: "#usluge", label: "Usluge" },
                { href: "#galerija", label: "Galerija" },
                { href: "#edukacije", label: "Edukacije" },
                { href: "#kontakt", label: "Kontakt" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-base text-muted hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolona 3: Mapa */}
          <div className="rounded-lg overflow-hidden border border-border min-h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.714947188727!2d20.480444800000004!3d44.78661640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aae79e55f05%3A0x2cdc40e46af7bf12!2sKozmeticki%20studio%20REVIVE%20by%20Vesna%20Parojcic%20-%20Tattoos%2C%20PMU%20%26%20Laser%20Removal!5e0!3m2!1sen!2srs!4v1778320965223!5m2!1sen!2srs"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Revive Beograd — lokacija"
            />
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm tracking-wider">
            © {new Date().getFullYear()} Studio Revive Beograd · Vesna Parojčić
          </p>
          <p className="text-muted/50 text-sm">
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
