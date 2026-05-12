import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vesnaparojcic.com"),
  title: {
    default: "Kozmetički Studio REVIVE Beograd | Vesna Parojčić",
    template: "%s | Studio REVIVE Beograd",
  },
  description:
    "Kozmetički studio REVIVE Beograd — Vesna Parojčić, nagrađivani PMU & tattoo artist, edukator i sudija. Tattoos, permanentni makeup i laser uklanjanje.",
  keywords: [
    "PMU Beograd",
    "trajna šminka Beograd",
    "permanentni makeup Beograd",
    "tetovaže Beograd",
    "tattoo Beograd",
    "lasersko uklanjanje tetovaža",
    "Vesna Parojčić",
    "Studio Revive",
    "puder obrve",
    "eyeliner trajna šminka",
    "lash lift Beograd",
    "hydrafacial Beograd",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://vesnaparojcic.com",
    siteName: "Studio Revive Beograd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kozmetički Studio REVIVE Beograd — Vesna Parojčić",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vesnaparojcic.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18126386464"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18126386464');
        `}
      </Script>
    </html>
  );
}
