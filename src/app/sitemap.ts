import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services/", priority: 0.95 },
  { path: "/contact/", priority: 0.95 },
  { path: "/gallery/", priority: 0.8 },
  { path: "/financing/", priority: 0.75 },
  { path: "/about/", priority: 0.7 },
  { path: "/privacy-policy/", priority: 0.3 },
  { path: "/terms-of-service/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
