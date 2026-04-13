"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  // Throttle mouse tracking to 60fps max
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) return; // Skip if already scheduled
      
      rafRef.current = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        hero.style.setProperty("--mouse-x", `${x}%`);
        hero.style.setProperty("--mouse-y", `${y}%`);
        rafRef.current = null;
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const trackClick = (label: string) => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.gtag?.('event', 'click', { event_category: 'cta', event_label: label });
      // @ts-ignore
      window.fbq?.('trackCustom', `Click_${label}`);
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative z-0 min-h-[90vh] flex items-center justify-center overflow-hidden pt-28"
    >
      {/* Hero Image - Absolute priority */}
      <div className="hero-image-container">
        <Image
          src="/images/pools/pool-hero.webp"
          alt="Custom Pool Installation El Paso"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={70}
          className="object-cover"
          unoptimized
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />
      
      {/* OPTIMIZED: 3 ripples instead of 5, GPU-accelerated */}
      <div className="ripple-container" style={{ transform: 'translateZ(0)' }}>
        <div className="ripple" style={{ animationDuration: '6s' }} />
        <div className="ripple" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="ripple" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      {/* OPTIMIZED: Single subtle glow instead of 3 heavy blurs */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[80px]" 
        style={{ 
          willChange: 'transform',
          transform: 'translate(-50%, -50%) translateZ(0)',
          animation: 'pulse 8s ease-in-out infinite'
        }} 
      />
    
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          <span className="text-sm text-slate-300">Accepting new clients in El Paso</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Hydro Havens
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 mt-2">
            Pools and Spas
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Our team is dedicated to designing and constructing custom pools that combine beauty, functionality, and durability...
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />
    </section>
  );
}