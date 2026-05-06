import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tracking from "@/components/Tracking";
import { absoluteUrl, contactEmail, phoneNumber, serviceAreas, siteName, siteUrl } from "@/lib/seo";

const inter = Inter({ 
  subsets: ["latin"],
  display: "optional",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: false,
});

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${siteUrl}/#business`,
      name: siteName,
      url: siteUrl,
      telephone: phoneNumber,
      email: contactEmail,
      image: absoluteUrl("/images/logo/logo.webp"),
      logo: absoluteUrl("/images/logo/logo.webp"),
      priceRange: "$$",
      areaServed: serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
      description:
        "Custom pool construction, pool remodeling, stamped concrete, turf installation, and outdoor living services in El Paso and Las Cruces.",
      knowsLanguage: ["English", "Spanish"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "05:00",
          closes: "17:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pool and Outdoor Living Services",
        itemListElement: [
          "Custom Pool Construction",
          "Pool Remodeling",
          "Outdoor Living Spaces",
          "Pool Decking and Concrete",
          "Stamped Concrete",
          "Turf Installation",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            areaServed: serviceAreas,
          },
        })),
      },
      sameAs: [
        "https://www.instagram.com/hydro_havens_pools/",
        "https://www.facebook.com/hydrohavenspoolsandspas",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Hydro Havens Pools & Spas | El Paso Pool Builders",
    template: "%s | Hydro Havens Pools & Spas",
  },
  description: "El Paso pool builders specializing in custom pools, pool remodeling, stamped concrete, turf, and outdoor living spaces. Licensed and insured. Free estimates.",
  metadataBase: new URL("https://hydrohavenspools.com"),
  applicationName: siteName,
  category: "Pool Contractor",
  keywords: [
    "El Paso pool builders",
    "constructores de albercas El Paso",
    "custom pools El Paso",
    "albercas personalizadas El Paso",
    "pool contractor El Paso",
    "contratista de albercas El Paso",
    "pool remodeling El Paso",
    "remodelacion de albercas El Paso",
    "stamped concrete El Paso",
    "concreto estampado El Paso",
    "outdoor living El Paso",
    "espacios exteriores El Paso",
    "turf installation El Paso",
    "pasto sintetico El Paso",
    "Las Cruces pool builders",
    "constructores de albercas Las Cruces",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hydro Havens Pools & Spas | El Paso Pool Builders",
    description: "Custom pools, remodeling, concrete, turf, and outdoor living spaces in El Paso and Las Cruces. Licensed and insured. Free estimates.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/pools/pool-hero.webp",
        width: 1200,
        height: 630,
        alt: "Hydro Havens custom pool project in El Paso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydro Havens Pools & Spas | El Paso Pool Builders",
    description: "Custom pools, remodeling, concrete, turf, and outdoor living spaces in El Paso and Las Cruces.",
    images: ["/images/pools/pool-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://seal-elpaso.bbb.org" crossOrigin="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      </head>
      <body className={`${inter.className} antialiased bg-slate-950`}>
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" />
          <input name="phone" />
          <input name="email" />
          <select name="service">
            <option value="custom-pools">Custom Pools</option>
          </select>
          <textarea name="message" />
          <input name="bot-field" />
        </form>
        
        <Navigation />
        <main id="main-content">{children}</main>
        <Tracking />
        <Footer />
      </body>
    </html>
  );
}
