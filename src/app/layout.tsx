import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Tracking from "@/components/Tracking";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hydro Havens Pools & Spas",
  description: "El Paso's trusted pool maintenance & repair experts. Weekly cleaning, equipment repair, concrete patios. Licensed & insured. Free estimates!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Tracking />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Hydro Havens Pools & Spas",
              "image": "https://hydrohavens.com/images/pools/pool-hero.png",
              "telephone": "+1-915-262-7590",
              "email": "marioluna301270@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "El Paso",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "31.7619",
                "longitude": "-106.4850"
              },
              "url": "https://hydrohavens.com",
              "priceRange": "$$",
              "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "31.7619",
                  "longitude": "-106.4850"
                },
                "geoRadius": "50000"
              },
              "serviceType": ["Pool Maintenance", "Pool Repair", "Pool Construction", "Concrete Work"]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}