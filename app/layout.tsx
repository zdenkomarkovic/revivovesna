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
  metadataBase: new URL("https://revive.rs"),
  title: {
    default: "Kozmetički Studio REVIVE Beograd | Vesna Parojčić",
    template: "%s | Studio REVIVE Beograd",
  },
  description:
    "Kozmetički studio REVIVE Beograd — Vesna Parojčić, nagrađivani PMU & tattoo artist, edukator i sudija. Tattoos, permanentni makeup i laser uklanjanje.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://revive.rs",
    siteName: "Studio Revive",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
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
      </head>
      <body>{children}</body>
    </html>
  );
}
