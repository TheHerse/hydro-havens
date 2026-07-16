import Image from "next/image";
import Link from "next/link";

const projects = {
  en: [
    { title: "Custom Pool Build", category: "New Construction", image: "/images/pools/pool-lp-optimized.webp" },
    { title: "Stamped Concrete Patio", category: "Hardscape", image: "/images/pools/concrete/concrete-1-optimized.webp" },
    { title: "Backyard Transformation", category: "Full Project", image: "/images/pools/outdoor/outdoor-1-optimized.webp" },
  ],
  es: [
    { title: "Alberca Personalizada", category: "Construccion Nueva", image: "/images/pools/pool-lp-optimized.webp" },
    { title: "Patio de Concreto Estampado", category: "Concreto", image: "/images/pools/concrete/concrete-1-optimized.webp" },
    { title: "Transformacion de Patio", category: "Proyecto Completo", image: "/images/pools/outdoor/outdoor-1-optimized.webp" },
  ],
};

export default function Gallery({ locale = "en" }: { locale?: "en" | "es" }) {
  const isSpanish = locale === "es";
  const galleryHref = isSpanish ? "/es/gallery" : "/gallery";
  const pageProjects = projects[locale];

  return (
    <section id="gallery" className="py-32 relative bg-[radial-gradient(circle_at_14%_8%,rgba(25,180,195,.14),transparent_28%),linear-gradient(180deg,#07151d_0%,#061118_100%)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-14">
          <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#55dfe2] before:via-[#169dad] before:to-transparent">
            <h2 className="text-[11px] font-bold text-[#46d7de] uppercase tracking-[0.22em] mb-5">
              {isSpanish ? "Portafolio" : "Portfolio"}
            </h2>
            <h3 className="font-display text-4xl md:text-6xl font-semibold text-white tracking-[-0.045em]">
              {isSpanish ? "Proyectos Recientes" : "Recent Projects"}
            </h3>
          </div>
          
          <Link 
            href={galleryHref} 
            className="hidden md:flex items-center text-[#64e4e5] hover:text-white font-bold transition-colors border-b border-[#3bcbd3]/35 pb-2"
          >
            {isSpanish ? "Ver Proyectos" : "View All Projects"}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Static Grid - Zero JS, Zero Hydration Cost */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:auto-rows-[230px]">
          {pageProjects.map((project) => (
            <Link
              key={project.image}
              href={galleryHref}
              className="group relative aspect-[4/3] md:aspect-auto md:col-span-5 first:md:col-span-7 first:md:row-span-2 last:md:col-span-5 overflow-hidden bg-slate-900/50 block border-b-2 border-[#18aeba]/55 hover:border-[#67e6e7] transition-colors"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                decoding="async"
                className="object-cover group-hover:scale-[1.035] transition-transform duration-1000 ease-out"
                unoptimized
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#031018] via-transparent to-transparent opacity-90" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex bg-[#087f8c]/80 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                  {project.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-2 group-hover:text-cyan-50 transition-colors tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-black/25 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href={galleryHref}
            className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
          >
            {isSpanish ? "Ver Portafolio" : "View Full Portfolio"}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
