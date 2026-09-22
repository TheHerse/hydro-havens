"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");
  const prefix = isSpanish ? "/es" : "";
  const otherLanguagePath = isSpanish
    ? pathname.replace(/^\/es/, "") || "/"
    : `/es${pathname === "/" ? "" : pathname || ""}`;

  const navLinks = [
    { href: `${prefix}/`, label: isSpanish ? "Inicio" : "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { href: `${prefix}/services`, label: isSpanish ? "Servicios" : "Services", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { href: `${prefix}/gallery`, label: isSpanish ? "Galeria" : "Gallery", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { href: `${prefix}/financing`, label: isSpanish ? "Financiamiento" : "Financing", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { href: `${prefix}/about`, label: isSpanish ? "Nosotros" : "About", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { href: `${prefix}/contact`, label: isSpanish ? "Contacto" : "Contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#061118]/95 backdrop-blur-xl border-b ${scrolled ? "border-[#35c8d4]/25" : "border-white/10"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            <Link href={isSpanish ? "/es/" : "/"} className="flex items-center">
              <Image
                src="/images/logo/logo-nav.webp" 
                alt="Hydro Havens Pools and Spas" 
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                priority
                unoptimized
              />
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                className={`transition-colors text-[11px] uppercase tracking-[0.12em] font-bold ${
                    "text-slate-200 hover:text-[#55dfe2]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="tel:+19152627590"
                className="bg-[#35c8d4] hover:bg-[#6ee7e7] text-[#07141c] px-5 py-3 text-xs uppercase tracking-[0.1em] font-bold transition-colors"
              >
                (915) 262-7590
              </a>
              <Link
                href={otherLanguagePath}
                className="text-xs font-bold text-white border-l border-white/25 pl-5 hover:text-cyan-200 transition-colors"
              >
                {isSpanish ? "EN" : "ES"}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none ${
                scrolled ? "text-white" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "top-2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-2 block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "top-2 -rotate-45" : "top-4"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#041017]/75 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[min(88vw,360px)] bg-[#dceef1] border-l-4 border-[#159dac] shadow-[-24px_0_70px_rgba(3,21,29,.35)] z-50 md:hidden transform transition-transform duration-300 ease-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full pt-20">
          
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-[#071923] border border-[#0d5663]/20 hover:bg-white/60 transition-colors"
            aria-label="Close navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex-1 overflow-y-auto border-t border-[#0d5663]/15">
            {navLinks.map((link, idx) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-7 py-5 text-[#123641] border-b border-[#0d5663]/15 hover:text-[#067785] hover:bg-white/60 transition-all duration-200"
                style={{ 
                  transitionDelay: isOpen ? `${idx * 50}ms` : "0ms",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(20px)"
                }}
              >
                <svg className="w-5 h-5 text-[#159dac]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                </svg>
                <span className="text-base font-display font-semibold tracking-tight">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="space-y-4 bg-[#071923] px-7 py-7 border-t-4 border-[#35c8d4]">
            <a 
              href="tel:+19152627590" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#35c8d4] hover:bg-[#55dfe2] text-[#061923] font-bold px-6 py-4 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (915) 262-7590
            </a>
            
            <p className="text-center text-xs text-white/45">
              {isSpanish ? "Sirviendo El Paso" : "Serving El Paso"}
            </p>
            <Link
              href={otherLanguagePath}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full border border-white/20 text-white font-bold px-6 py-3 transition-colors hover:border-[#35c8d4] hover:text-[#55dfe2]"
            >
              {isSpanish ? "English" : "Espanol"}
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
