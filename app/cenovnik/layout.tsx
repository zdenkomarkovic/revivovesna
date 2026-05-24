import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Cenovnik — Studio Revive Beograd",
  description:
    "Cenovnik tretmana u kozmetičkom studiju REVIVE Beograd. PMU, laserska epilacija, INDIBA, tretmani lica, depilacija, trajna šminka i više. Promo 30% popust.",
  url: `${SITE_URL}/cenovnik`,
});

export default function CenovnikLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
