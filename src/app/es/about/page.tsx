import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sobre Hydro Havens Pools & Spas",
  description:
    "Conoce a Hydro Havens Pools & Spas, contratista local de albercas que sirve El Paso y Las Cruces con construccion de albercas y espacios exteriores.",
  path: "/es/about/",
  locale: "es",
});

export default function SpanishAboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Nosotros</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">Nuestra Historia</h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              En Hydro Havens Pools & Spas, nuestra mision es crear albercas, spas y espacios exteriores duraderos
              con calidad, comunicacion clara y atencion a cada detalle.
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-12 hover:border-cyan-500/30 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4">Lo Que Nos Hace Diferentes</h2>
              <p className="text-slate-400 leading-relaxed">
                No creemos en soluciones genericas. Cada alberca y cada patio se disena alrededor de tu casa,
                tu estilo de vida y la forma en que quieres disfrutar tu espacio con familia y amigos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">Nuestra Mision</h3>
                <p className="text-slate-400">Construir albercas hermosas y duraderas con calidad como prioridad.</p>
              </div>
              <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">Nuestra Promesa</h3>
                <p className="text-slate-400">Servicio honesto, trabajo experto y una experiencia clara de principio a fin.</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Calidad Es El Estandar, No La Mejora</h2>
                <Link href="/es/contact/#contact-form" className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 mt-4">
                  Trabaja Con Nosotros
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
