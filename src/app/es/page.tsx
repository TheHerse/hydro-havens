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
    <div className="min-h-screen bg-[#061118] relative overflow-hidden">

      <div className="relative z-10">
        <Hero locale="es" />
      </div>

      <div className="relative z-10">
        <TrustBadge />
      </div>

      <section className="relative z-10 py-24 px-6 bg-[#dceef1]">
        <div className="max-w-5xl mx-auto border-l-4 border-[#159dac] pl-6">
          <h2 className="text-[11px] font-bold text-[#087f8c] uppercase tracking-[0.22em] mb-5">Albercas en El Paso</h2>
          <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-[#071923] mb-6">
            Construccion de albercas y espacios exteriores para El Paso y Las Cruces
          </h3>
          <p className="text-[#47616a] text-lg leading-relaxed max-w-3xl">
            Ayudamos a familias a transformar su patio con albercas personalizadas, remodelaciones,
            concreto estampado, decks, turf, spas y areas de entretenimiento al aire libre.
          </p>
        </div>
      </section>

      <div className="relative z-10">
        <Gallery locale="es" />
      </div>

      <section className="relative z-10 py-28 px-6 bg-[#dceef1]">
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-[11px] font-bold text-[#087f8c] uppercase tracking-[0.22em] mb-5">Servicios</h2>
            <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-[#071923] mb-5">Servicios de Albercas y Patios</h3>
            <p className="text-[#47616a] max-w-2xl">
              Desde la construccion de albercas hasta espacios exteriores completos, hacemos el trabajo con calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-[#143b47]/20 mb-12">
            {[
              { title: "Albercas Personalizadas", desc: "Diseños a la medida para tu casa, tu familia y tu estilo." },
              { title: "Espacios Exteriores", desc: "Cocinas exteriores, areas de descanso, patios y entretenimiento." },
              { title: "Concreto y Turf", desc: "Concreto estampado, decks, banquetas y pasto sintetico." },
            ].map((item) => (
              <div key={item.title} className="group py-9 md:px-8 first:pl-0 border-b md:border-b-0 md:border-r last:border-r-0 border-[#143b47]/15">
                <div className="w-8 h-1 bg-[#24bcc8] mb-7" />
                <h3 className="font-display text-xl font-semibold text-[#071923] mb-3">{item.title}</h3>
                <p className="text-[#49626a]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <Link href="/es/services" className="inline-flex items-center text-[#087f8c] hover:text-[#045d68] font-bold">
              Ver Todos los Servicios <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 px-6 bg-gradient-to-br from-[#09212c] via-[#071923] to-[#063440]">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            {["Con Licencia y Asegurados", "Cotizaciones Gratis", "Locales de El Paso"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/75 px-4 py-2 border-b border-[#40d6dc]/40">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                {item}
              </div>
            ))}
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-white mb-8">Listo para construir la alberca de tus suenos?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contact/#contact-form" className="inline-flex items-center justify-center bg-[#35c8d4] hover:bg-[#6ee7e7] text-[#061118] px-8 py-4 font-bold transition-colors">
              Cotizacion Gratis
            </Link>
            <a href="tel:+19152627590" className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-bold transition-colors border border-white/25">
              <Phone className="mr-2 w-5 h-5" />
              (915) 262-7590
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
