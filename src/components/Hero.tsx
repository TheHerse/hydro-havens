"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mouse-x", `${x}%`);
      hero.style.setProperty("--mouse-y", `${y}%`);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const trackClick = (label: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag?.('event', 'click', { event_category: 'cta', event_label: label });
    }
    if (typeof window !== 'undefined' && 'fbq' in window) {
      // @ts-ignore
      window.fbq?.('trackCustom', `Click_${label}`);
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative z-0 min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pool-bg hover-ripple"
    >
      {/* OPTIMIZED: Next.js Image with priority instead of CSS background */}
      <div className="absolute inset-0">
        <Image
          src="/images/pools/pool-hero.webp"
          alt="Custom Pool Installation El Paso"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          className="object-cover"
          unoptimized
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />
      
      {/* Animated water ripples */}
      <div className="ripple-container">
        <div className="ripple" />
        <div className="ripple" />
        <div className="ripple" />
        <div className="ripple" />
        <div className="ripple" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />

      {/* Caustic light patterns */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_8s_ease-in-out_infinite]" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-sm text-slate-300">Accepting new clients in El Paso</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Hydro Havens
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 mt-2">
            Pools and Spas
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Our team is dedicated to designing and constructing custom pools that combine beauty, functionality, and durability. Whether you're envisioning a serene oasis or an entertainment hotspot, we craft pools tailored to your unique style and needs.
          <span className="block text-slate-300 mt-2">Licensed, insured, and locally owned.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            onClick={() => trackClick('hero_estimate')}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 text-lg shadow-[0_0_30px_rgba(20,184,166,0.3)]"
          >
            Get Free Estimate
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

      {/* Bottom reflection fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />
    </section>
  );
}