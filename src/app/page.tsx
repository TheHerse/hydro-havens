import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBadge from "@/components/TrustBadge";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "El Paso Custom Pool Builders | Hydro Havens Pools & Spas",
  description:
    "Hydro Havens Pools & Spas builds custom pools, spas, patios, turf, stamped concrete, and outdoor living spaces across El Paso. Get a free estimate.",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#061118] relative overflow-hidden">
      {/* CONTINUOUS BACKGROUND ELEMENTS - Span entire page */}
      
      {/* Top glow that fades down from hero area */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(43,143,169,0.08),transparent_60%)] pointer-events-none" />
      
      {/* Subtle teal glow from right side */}
      <div className="absolute top-[40%] right-0 w-[600px] h-[800px] bg-[radial-gradient(ellipse_at_right,rgba(20,184,166,0.08),transparent_70%)] pointer-events-none" />
      
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
      
      {/* Continuous subtle grid - very light, spans whole page */}
      
      {/* CONTENT SECTIONS - No hard backgrounds, just content on the continuous canvas */}
      
      {/* Hero - Transparent background, lets page bg show through */}
      <div className="relative z-10">
        <Hero />
      </div>
      
      {/* Trust Badge - Subtle gradient transition from hero */}
      <div className="relative z-10">
        <TrustBadge />
      </div>
      
      {/* Gallery - No hard background color, just content */}
      <div className="relative z-10">
        <Gallery />
      </div>
      
      {/* Services - Subtle elevation with blur backdrop */}
      <section className="relative z-10 py-28 px-6 bg-[#dceef1] text-[#071923]">
        {/* Smooth gradient transition from gallery */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(53,200,212,.16),transparent_32%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[11px] font-bold text-[#087f8c] uppercase tracking-[0.22em] mb-5">What We Do</h2>
            <h3 className="font-display text-4xl md:text-6xl font-semibold text-[#071923] mb-5 tracking-[-0.045em]">Premium Pool Services</h3>
            <p className="text-[#34505a] max-w-2xl text-lg">
              From custom pool construction to outdoor living spaces, we deliver quality that lasts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 border-t border-[#143b47]/20 mb-12">
            {[
              { title: "Custom Pool Design", desc: "Bespoke pools built to your exact specifications and vision." },
              { title: "Outdoor Living", desc: "Complete backyard transformations with kitchens and entertainment areas." },
              { title: "Concrete & Turf", desc: "Stamped concrete and artificial turf installation." }
            ].map((item) => (
              <div key={item.title} className="group py-9 md:px-8 first:pl-0 border-b md:border-b-0 md:border-r last:border-r-0 border-[#143b47]/15">
                <div className="w-8 h-1 bg-[#24bcc8] mb-7 transition-all duration-300 group-hover:w-14" />
                <h3 className="font-display text-xl font-semibold text-[#071923] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[#49626a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div>
            <Link 
              href="/services"
              className="inline-flex items-center text-[#087f8c] hover:text-[#045d68] font-bold"
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Stronger glow but still blended */}
      <section className="relative z-10 py-28 px-6 mt-0 bg-gradient-to-br from-[#09212c] via-[#071923] to-[#063440]">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
        
        {/* Center glow for emphasis */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-white/75 px-4 py-2 border-b border-[#40d6dc]/40">
              <CheckCircle className="w-5 h-5 text-teal-400" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-white/75 px-4 py-2 border-b border-[#40d6dc]/40">
              <CheckCircle className="w-5 h-5 text-teal-400" />
              Free Estimates
            </div>
            <div className="flex items-center gap-2 text-white/75 px-4 py-2 border-b border-[#40d6dc]/40">
              <CheckCircle className="w-5 h-5 text-teal-400" />
              El Paso Local
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-white mb-8">Ready to Build Your Dream Pool?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/#contact-form"
              className="inline-flex items-center justify-center bg-[#35c8d4] hover:bg-[#6ee7e7] text-[#061118] px-8 py-4 font-bold transition-colors"
            >
              Get Free Estimate
            </Link>
            <a 
              href="tel:+19152627590"
              className="inline-flex items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 font-bold transition-colors border border-white/25"
            >
              <Phone className="mr-2 w-5 h-5" />
              (915) 262-7590
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
