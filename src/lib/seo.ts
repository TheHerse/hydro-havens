import type { Metadata } from "next";

export const siteUrl = "https://hydrohavenspools.com";
export const siteName = "Hydro Havens Pools & Spas";
export const phoneNumber = "+19152627590";
export const displayPhone = "(915) 262-7590";
export const contactEmail = "marioluna301270@gmail.com";
export const serviceAreas = ["El Paso, TX", "Las Cruces, NM", "Socorro, TX"];

const defaultDescription =
  "El Paso pool builders specializing in custom pools, pool remodeling, stamped concrete, turf, and outdoor living spaces. Licensed and insured. Free estimates.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = "/images/pools/pool-hero.webp",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
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
      description,
      images: [imageUrl],
    },
  };
}

