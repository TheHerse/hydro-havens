import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Tracking from "@/components/Tracking";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', 
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Hydro Havens Pools & Spas",
  description: "El Paso's trusted pool maintenance & repair experts. Weekly cleaning, equipment repair, concrete patios. Licensed & insured. Free estimates!",
  metadataBase: new URL('https://hydrohavenspools.com'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a', 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Tracking />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Hydro Havens Pools & Spas",
              "image": "https://hydrohavenspools.com/images/pools/pool-hero.webp",
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
              "url": "https://hydrohavenspools.com",
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
      <body className={`${inter.className} antialiased bg-slate-950`}>
        {/* Hidden form for Netlify detection - moved outside main to avoid hydration issues */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <select name="service">
            <option value="custom-pools">Custom Pools</option>
            <option value="pool-remodeling">Pool Remodeling</option>
            <option value="outdoor-living">Outdoor Living Spaces</option>
            <option value="pool-decking">Pool Decking & Concrete</option>
            <option value="stamped-concrete">Stamped Concrete</option>
            <option value="turf">Turf Installation</option>
            <option value="other">Other</option>
          </select>
          <textarea name="message"></textarea>
          <input name="bot-field" />
        </form>
        
        {/* Tracking removed from here - was causing duplicate */}
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}