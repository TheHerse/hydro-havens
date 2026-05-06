import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contacta a Hydro Havens para una Cotizacion Gratis",
  description:
    "Contacta a Hydro Havens Pools & Spas para una cotizacion gratis de albercas, remodelacion, concreto, turf o espacios exteriores en El Paso y Las Cruces.",
  path: "/es/contact/",
  locale: "es",
});

export default function SpanishContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
