"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          <a href="#" className="flex items-center">
            <img 
              src="/images/logo/logo.png" 
              alt="Hydro Havens Pools and Spas" 
              className="h-14 w-auto object-contain"
            />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-slate-300 hover:text-teal-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="tel:+19152627590"
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              (915) 262-7590
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-slate-900 border-t border-slate-800 p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-teal-400 font-medium text-lg"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="tel:+19152627590" 
            onClick={() => setIsOpen(false)}
            className="block bg-teal-500 text-slate-950 font-bold px-6 py-3 rounded-full text-center mt-4"
          >
            Call (915) 262-7590
          </a>
        </div>
      </div>
    </nav>
  );
}