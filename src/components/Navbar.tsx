"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { href: "/services", label: "Services", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { href: "/gallery", label: "Gallery", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { href: "/financing", label: "Financing", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { href: "/about", label: "About", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { href: "/contact", label: "Contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  ];

  // Proper scroll detection with SSR safety
  useEffect(() => {
    const handleScroll = () => {
      // Add solid background after scrolling 50px
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo/logo.webp" 
                alt="Hydro Havens Pools and Spas" 
                width={112}
                height={112}
                className="h-14 w-auto object-contain"
              />
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`transition-colors font-medium ${
                    scrolled ? "text-slate-300 hover:text-teal-400" : "text-white hover:text-teal-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="tel:+19152627590"
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
              >
                (915) 262-7590
              </a>
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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 z-50 md:hidden transform transition-transform duration-300 ease-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="Close navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex-1 space-y-2">
            {navLinks.map((link, idx) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-4 rounded-xl text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
                style={{ 
                  transitionDelay: isOpen ? `${idx * 50}ms` : "0ms",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(20px)"
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                </svg>
                <span className="text-lg font-medium">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-slate-800">
            <a 
              href="tel:+19152627590" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-4 rounded-full transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (915) 262-7590
            </a>
            
            <p className="text-center text-xs text-slate-500">
              Serving El Paso & Las Cruces
            </p>
          </div>

        </div>
      </div>
    </>
  );
}