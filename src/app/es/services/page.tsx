import type { Metadata } from "next";
import { Waves, Hammer, Trees, Grid3X3, BrickWall, Leaf } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Servicios de Albercas, Remodelacion y Espacios Exteriores",
  description:
    "Albercas personalizadas, remodelacion de albercas, espacios exteriores, decks, concreto estampado y pasto sintetico en El Paso y Las Cruces.",
  path: "/es/services/",
  locale: "es",
});

const services = [
  {
    title: "Albercas Personalizadas",
    description: "Diseno y construccion de albercas a la medida de tu patio, estilo de vida y presupuesto.",
    icon: Waves,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Remodelacion de Albercas",
    description: "Modernizamos tu alberca con acabados nuevos, tile, resurfacing y mejoras de equipo.",
    icon: Hammer,
    gradient: "from-teal-400 to-emerald-500",
  },
  {
    title: "Espacios Exteriores",
    description: "Transformaciones completas con patios, cocinas exteriores, pergolas y areas para convivir.",
    icon: Trees,
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    title: "Decks y Concreto",
    description: "Decks para alberca y concreto resistente al clima de El Paso y Las Cruces.",
    icon: Grid3X3,
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    title: "Concreto Estampado",
    description: "Patios, pasillos y bordes decorativos con acabados tipo piedra, ladrillo o madera.",
    icon: BrickWall,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Pasto Sintetico",
    description: "Turf de bajo mantenimiento para un patio verde con menos consumo de agua.",
    icon: Leaf,
    gradient: "from-emerald-400 to-teal-500",
  },
];

export default function SpanishServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Servicios</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Servicios de Albercas y Patios
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Construimos albercas personalizadas y espacios exteriores completos para hogares en El Paso y Las Cruces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-transparent transition-all duration-500 hover:-translate-y-1">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                  <div className="absolute inset-[1px] rounded-2xl bg-slate-900" />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Listo para empezar tu proyecto?</h2>
              <p className="text-slate-400 mb-8">Pide una cotizacion gratis para tu alberca o espacio exterior.</p>
              <Link href="/es/contact/#contact-form" className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
                Cotizacion Gratis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
