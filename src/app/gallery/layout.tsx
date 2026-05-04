import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pool & Outdoor Living Project Gallery",
  description:
    "View completed Hydro Havens Pools & Spas projects, including custom pools, stamped concrete, turf, and outdoor living transformations in the El Paso area.",
  path: "/gallery/",
  image: "/images/pools/pool-1.webp",
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}

