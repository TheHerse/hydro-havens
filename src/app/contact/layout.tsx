import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Hydro Havens for a Free Pool Estimate",
  description:
    "Contact Hydro Havens Pools & Spas for a free custom pool, remodeling, concrete, turf, or outdoor living estimate in El Paso and Las Cruces.",
  path: "/contact/",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

