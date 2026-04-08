import Hero from "@/components/Hero";
import TrustBadge from "@/components/TrustBadge";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* CONTINUOUS BACKGROUND ELEMENTS - Span entire page */}
      
      {/* Top glow that fades down from hero area */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.12),transparent_60%)] pointer-events-none" />
      
      {/* Subtle teal glow from right side */}
      <div className="absolute top-[40%] right-0 w-[600px] h-[800px] bg-[radial-gradient(ellipse_at_right,rgba(20,184,166,0.08),transparent_70%)] pointer-events-none" />
      
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
      
      {/* Continuous subtle grid - very light, spans whole page */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none opacity-50" />

      {/* CONTENT SECTIONS - No hard backgrounds, just content on the continuous canvas */}
      
      {/* Hero - Transparent background, lets page bg show through */}
      <div className="relative z-10">
        <Hero />
      </div>
      
      {/* Trust Badge - Subtle gradient transition from hero */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent">
        <TrustBadge />
      </div>
      
      {/* Gallery - No hard background color, just content */}
      <div className="relative z-10">
        <Gallery />
      </div>
      
      {/* Services - Subtle elevation with blur backdrop */}
      <section className="relative z-10 py-20 px-6">
        {/* Smooth gradient transition from gallery */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Pool Services</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From custom pool construction to outdoor living spaces, we deliver quality that lasts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Custom Pool Design", desc: "Bespoke pools built to your exact specifications and vision." },
              { title: "Outdoor Living", desc: "Complete backyard transformations with kitchens and entertainment areas." },
              { title: "Concrete & Turf", desc: "Stamped concrete and artificial turf installation." }
            ].map((item) => (
              <div key={item.title} className="group p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/50 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/services"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Stronger glow but still blended */}
      <section className="relative z-10 py-20 px-6 mt-10">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
        
        {/* Center glow for emphasis */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800/50">
              <CheckCircle className="w-5 h-5 text-teal-400" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800/50">
              <CheckCircle className="w-5 h-5 text-teal-400" />
              Free Estimates
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800/50">
              <CheckCircle className="w-5 h-5 text-teal-400" />
              El Paso Local
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Pool?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(20,184,166,0.4)]"
            >
              Get Free Estimate
            </Link>
            <a 
              href="tel:9152627590"
              className="inline-flex items-center justify-center bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/70 text-white px-8 py-4 rounded-full font-bold transition-all border border-slate-700/50"
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