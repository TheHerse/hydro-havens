import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'optional', 
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Hydro Havens Pools & Spas | El Paso Pool Builders",
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
        {/* PRELOAD HERO IMAGE - Critical for LCP */}
        <link rel="preload" as="image" href="/images/pools/pool-hero.webp" type="image/webp" fetchPriority="high" />
        
        {/* INLINE CRITICAL CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-image-container { position: absolute; inset: 0; z-index: -10; }
          .hero-image-container img { object-fit: cover; width: 100%; height: 100%; }
        `}} />
        
        {/* DEFERRED TRACKING - Loads AFTER page is interactive */}
        <Script id="gtm" strategy="lazyOnload" dangerouslySetInnerHTML={{__html: `
          // Paste your Google Tag Manager or tracking code here
          // It will load after everything else
        `}} />
        
        {/* Schema JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ /* your schema */ }) }} />
      </head>
      <body className={`${inter.className} antialiased bg-slate-950`}>
        {/* Your hidden form */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>...</form>
        
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}