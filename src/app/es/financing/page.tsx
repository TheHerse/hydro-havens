import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calculator, BadgeCheck, Clock } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Opciones de Financiamiento para Albercas",
  description:
    "Explora opciones de financiamiento para albercas, spas y espacios exteriores en El Paso y Las Cruces con Hydro Havens.",
  path: "/es/financing/",
  image: "/images/financing/lyon-transparent.webp",
  locale: "es",
});

export default function SpanishFinancingPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Financiamiento</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">Opciones de Financiamiento</h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Haz realidad tu alberca con opciones flexibles de financiamiento para proyectos en El Paso y Las Cruces.
            </p>
          </div>

          <div className="mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 md:p-12 border border-cyan-500/20 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <BadgeCheck className="w-4 h-4" />
                  Socio Recomendado
                </div>
                <div className="mb-8 bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
                  <Image src="/images/financing/lyon-transparent.webp" alt="Lyon Financial" width={400} height={120} className="h-20 md:h-24 w-auto object-contain mx-auto" priority />
                </div>
                <p className="text-slate-400 mb-6 text-lg">
                  Lyon Financial se especializa en financiamiento para albercas y ofrece prestamos sin garantia con pagos competitivos.
                </p>
                <ul className="space-y-3 mb-8">
                  {["No requiere capital", "Terminos hasta 20 años", "Proceso de aprobacion rapido"].map((item) => (
                    <li key={item} className="flex items-center text-slate-300">
                      <BadgeCheck className="w-5 h-5 text-teal-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://www.lyonfinancial.net/contractor-resources/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-lg">
                  Aplicar con Lyon Financial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 text-center backdrop-blur-sm">
                <Calculator className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Prestamos Flexibles</h3>
                <p className="text-slate-400 mb-6">Opciones disponibles para proyectos de diferentes tamanos</p>
                <div className="text-3xl font-bold text-teal-400 mb-2">Cotizaciones Personalizadas</div>
                <p className="text-sm text-slate-500">Segun las necesidades de tu proyecto</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { name: "Viking Capital", image: "/images/financing/Viking-Logo-Horizontal.webp", href: "https://poolloan.net/" },
              { name: "HFS Financial", image: "/images/financing/hfs-logo-new.webp", href: "https://www.hfsfinancial.net/" },
            ].map((lender) => (
              <div key={lender.name} className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-transparent transition-all duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute inset-[1px] rounded-2xl bg-slate-900" />
                <div className="relative z-10">
                  <div className="mb-6 bg-white rounded-2xl p-6 w-full shadow-lg">
                    <div className="relative h-20 md:h-24 w-full">
                      <Image src={lender.image} alt={lender.name} fill className="object-contain" priority />
                    </div>
                  </div>
                  <p className="text-slate-400 mb-4">Soluciones de financiamiento para albercas y mejoras del hogar.</p>
                  <div className="space-y-2 mb-6 text-sm text-slate-500">
                    <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-teal-400" />Proceso rapido</div>
                    <div className="flex items-center"><BadgeCheck className="w-4 h-4 mr-2 text-teal-400" />Terminos flexibles</div>
                  </div>
                  <a href={lender.href} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-teal-500 hover:bg-teal-400 text-slate-950 py-3 rounded-lg font-bold transition-all hover:scale-[1.02]">
                    Aplicar con {lender.name}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Listo para empezar?</h2>
            <p className="text-slate-400 mb-8">Contactanos para una cotizacion gratis y ayuda con el financiamiento.</p>
            <Link href="/es/contact/#contact-form" className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
              Cotizacion Gratis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
