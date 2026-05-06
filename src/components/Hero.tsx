"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero({ locale = "en" }: { locale?: "en" | "es" }) {
  const isSpanish = locale === "es";
  const contactHref = isSpanish ? "/es/contact/#contact-form" : "/contact/#contact-form";

  // Track button clicks for analytics
  const trackClick = (label: string) => {
    if (typeof window !== 'undefined') {
      window.gtag?.('event', 'click', { event_category: 'cta', event_label: label });
      window.fbq?.('trackCustom', `Click_${label}`);
    }
  };

  return (
    <section className="relative z-0 min-h-[90vh] flex items-center justify-center overflow-hidden pt-28">
      {/* Background image - loads first */}
      <div className="absolute inset-0">
        <Image
          src="/images/pools/pool-hero-optimized.webp"
          alt="Custom Pool Installation El Paso"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={60}
          className="object-cover"
          unoptimized
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-slate-950/60" />
      
      {/* Water ripple animations */}
      <div className="ripple-container">
        <div className="ripple" />
        <div className="ripple" />
        <div className="ripple" />
      </div>

      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          <span className="text-sm text-slate-300">
            {isSpanish ? "Aceptando nuevos clientes en El Paso" : "Accepting new clients in El Paso"}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Hydro Havens
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 mt-2">
            {isSpanish ? "Pools and Spas" : "Pools and Spas"}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {isSpanish
            ? "Diseñamos y construimos albercas personalizadas, remodelaciones y espacios exteriores para familias en El Paso, Las Cruces y areas cercanas."
            : "Our team is dedicated to designing and constructing custom pools that combine beauty, functionality, and durability. Whether you're envisioning a serene oasis or an entertainment hotspot, we craft pools tailored to your unique style and needs."}
          <span className="block text-slate-300 mt-2">
            {isSpanish ? "Con licencia, asegurados y localmente operados." : "Licensed, insured, and locally owned."}
          </span>
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={contactHref}
            onClick={() => trackClick('hero_estimate')}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 text-lg shadow-[0_0_30px_rgba(20,184,166,0.3)]"
          >
            {isSpanish ? "Cotizacion Gratis" : "Get Free Estimate"}
          </Link>
          <a 
            href="tel:+19152627590"
            onClick={() => trackClick('hero_phone')}
            className="border border-slate-600 hover:border-teal-500 text-white px-8 py-4 rounded-full transition-all hover:bg-slate-800/50 text-lg font-medium backdrop-blur-sm"
          >
            (915) 262-7590
          </a>
        </div>
      </div>

      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />
    </section>
  );
}
