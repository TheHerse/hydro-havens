import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBadge from "@/components/TrustBadge";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Constructores de Albercas en El Paso y Las Cruces",
  description:
    "Hydro Havens diseña y construye albercas personalizadas, spas, patios, concreto estampado, pasto sintetico y espacios exteriores en El Paso y Las Cruces.",
  path: "/es/",
  locale: "es",
});

export default function SpanishHome() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-[600px] h-[800px] bg-[radial-gradient(ellipse_at_right,rgba(20,184,166,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10">
        <Hero locale="es" />
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent">
        <TrustBadge />
      </div>

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Albercas en El Paso</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Construccion de albercas y espacios exteriores para El Paso y Las Cruces
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Ayudamos a familias a transformar su patio con albercas personalizadas, remodelaciones,
            concreto estampado, decks, turf, spas y areas de entretenimiento al aire libre.
          </p>
        </div>
      </section>

      <div className="relative z-10">
        <Gallery locale="es" />
      </div>

      <section className="relative z-10 py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Servicios</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Servicios de Albercas y Patios</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Desde la construccion de albercas hasta espacios exteriores completos, hacemos el trabajo con calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Albercas Personalizadas", desc: "Diseños a la medida para tu casa, tu familia y tu estilo." },
              { title: "Espacios Exteriores", desc: "Cocinas exteriores, areas de descanso, patios y entretenimiento." },
              { title: "Concreto y Turf", desc: "Concreto estampado, decks, banquetas y pasto sintetico." },
            ].map((item) => (
              <div key={item.title} className="group p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/50 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/es/services" className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium">
              Ver Todos los Servicios <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-6 mt-10">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            {["Con Licencia y Asegurados", "Cotizaciones Gratis", "Locales de El Paso"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-300 bg-slate-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800/50">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                {item}
              </div>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Listo para construir la alberca de tus suenos?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contact/#contact-form" className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(20,184,166,0.4)]">
              Cotizacion Gratis
            </Link>
            <a href="tel:+19152627590" className="inline-flex items-center justify-center bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/70 text-white px-8 py-4 rounded-full font-bold transition-all border border-slate-700/50">
              <Phone className="mr-2 w-5 h-5" />
              (915) 262-7590
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
