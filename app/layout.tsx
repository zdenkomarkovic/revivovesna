import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

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
      <body>{children}</body>
    </html>
  );
}
