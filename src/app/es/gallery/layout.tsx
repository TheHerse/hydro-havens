import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Galeria de Albercas y Espacios Exteriores",
  description:
    "Mira proyectos de Hydro Havens Pools & Spas, incluyendo albercas personalizadas, concreto estampado, turf y patios en el area de El Paso.",
  path: "/es/gallery/",
  image: "/images/pools/pool-1.webp",
  locale: "es",
});

export default function SpanishGalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
