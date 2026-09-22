import Image from "next/image";
import Link from "next/link";

export default function Hero({ locale = "en" }: { locale?: "en" | "es" }) {
  const isSpanish = locale === "es";
  const contactHref = isSpanish ? "/es/contact/#contact-form" : "/contact/#contact-form";

  return (
    <section className="luxury-hero relative z-0 min-h-[760px] lg:min-h-[clamp(720px,78vh,860px)] bg-[#dceef1] overflow-hidden pt-20 lg:pt-0">
      <div className="hero-background-caustics" aria-hidden="true" />
      {/* Background image - loads first */}
      <div className="hero-image-panel relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 h-[44vh] min-h-[360px] lg:h-[clamp(460px,55vh,620px)] lg:min-h-0 overflow-hidden shadow-[0_30px_80px_rgba(5,35,44,.22)]">
        <Image
          src="/images/pools/pool-hero-optimized.webp"
          alt="Custom Pool Installation El Paso"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={60}
          className="object-cover object-[50%_52%]"
          unoptimized
        />
        <div className="absolute inset-0 hero-cinematic-overlay pointer-events-none" />
        <div className="hero-waterline" aria-hidden="true" />
      </div>

      {/* Background glow effect */}
      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-6 md:px-10 lg:px-14 py-16 lg:py-0 lg:min-h-[clamp(720px,78vh,860px)] lg:flex lg:items-center pointer-events-none">
        <div className="relative z-10 max-w-[560px] lg:max-w-[460px] lg:w-[34%] lg:pb-2 pointer-events-auto">
        <div className="flex items-center gap-4 mb-7">
          <span className="h-[3px] w-10 bg-[#16a9b8]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2e6670]">
            {isSpanish ? "Aceptando nuevos clientes en El Paso" : "Accepting new clients in El Paso"}
          </span>
        </div>

        <h1 className="font-display text-[clamp(3rem,4.2vw,4.25rem)] leading-[0.94] font-semibold text-[#061923] mb-8 tracking-[-0.055em]">
          Hydro Havens
          <span className="block text-[#1299aa] mt-2">
            {isSpanish ? "Pools and Spas" : "Pools and Spas"}
          </span>
        </h1>
        
        <p className="text-[15px] lg:text-base text-[#375961] mb-9 max-w-[500px] leading-[1.75]">
          {isSpanish
            ? "Diseñamos y construimos albercas personalizadas, remodelaciones y espacios exteriores para familias en el area de El Paso."
            : "Our team is dedicated to designing and constructing custom pools that combine beauty, functionality, and durability. Whether you're envisioning a serene oasis or an entertainment hotspot, we craft pools tailored to your unique style and needs."}
          <span className="block text-[#087f8c] mt-4 text-xs font-bold uppercase tracking-[0.14em]">
            {isSpanish ? "Con licencia, asegurados y localmente operados." : "Licensed, insured, and locally owned."}
          </span>
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href={contactHref}
            className="bg-[#35c8d4] hover:bg-[#6ee7e7] text-[#04151d] font-bold px-8 py-4 transition-colors text-sm uppercase tracking-[0.11em] text-center shadow-[0_12px_36px_rgba(53,200,212,.22)]"
          >
            {isSpanish ? "Cotizacion Gratis" : "Get Free Estimate"}
          </Link>
          <a 
            href="tel:+19152627590"
            className="border border-[#123b46]/30 hover:border-[#087f8c] text-[#0a303b] px-8 py-4 transition-colors hover:bg-white/70 text-sm uppercase tracking-[0.11em] font-bold text-center"
          >
            (915) 262-7590
          </a>
        </div>
        </div>
      </div>

    </section>
  );
}
