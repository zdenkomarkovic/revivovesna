import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Kontakt — Zakazivanje",
  description:
    "Zakažite termin u kozmetičkom studiju REVIVE Beograd. Vesna Parojčić — PMU, tetovaže, laser tretmani. Pišite nam ili pozovite.",
  url: `${SITE_URL}/kontakt`,
});

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
