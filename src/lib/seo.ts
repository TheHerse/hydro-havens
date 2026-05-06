import type { Metadata } from "next";

export const siteUrl = "https://hydrohavenspools.com";
export const siteName = "Hydro Havens Pools & Spas";
export const phoneNumber = "+19152627590";
export const displayPhone = "(915) 262-7590";
export const contactEmail = "marioluna301270@gmail.com";
export const serviceAreas = ["El Paso, TX", "Las Cruces, NM", "Socorro, TX"];

const defaultDescription =
  "El Paso pool builders specializing in custom pools, pool remodeling, stamped concrete, turf, and outdoor living spaces. Licensed and insured. Free estimates.";

const defaultSpanishDescription =
  "Constructores de albercas en El Paso y Las Cruces especializados en albercas personalizadas, remodelaciones, concreto estampado, pasto sintetico y espacios exteriores.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/images/pools/pool-hero.webp",
  locale = "en",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  locale?: "en" | "es";
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const resolvedDescription =
    description || (locale === "es" ? defaultSpanishDescription : defaultDescription);
  const englishPath = path.startsWith("/es")
    ? path.replace(/^\/es/, "") || "/"
    : path;
  const spanishPath = path.startsWith("/es")
    ? path
    : `/es${path === "/" ? "" : path}`;

  return {
    title,
    description: resolvedDescription,
    alternates: {
      canonical: path,
      languages: {
        "en-US": englishPath,
        "es-US": spanishPath,
        "x-default": englishPath,
      },
    },
    openGraph: {
      title,
      description: resolvedDescription,
      url,
      siteName,
      type: "website",
      locale: locale === "es" ? "es_US" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_US"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} custom pool project`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resolvedDescription,
      images: [imageUrl],
    },
  };
}
