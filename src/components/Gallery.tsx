import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Custom Pool Build", category: "New Construction", image: "/images/pools/pool-lp.webp" },
  { title: "Stamped Concrete Patio", category: "Hardscape", image: "/images/pools/concrete/concrete-1.webp" },
  { title: "Backyard Transformation", category: "Full Project", image: "/images/pools/outdoor/outdoor-1.webp" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Recent Projects</h3>
          </div>
          
          <Link 
            href="/gallery" 
            className="hidden md:flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Static Grid - Zero JS, Zero Hydration Cost */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1 block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-teal-100 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700/50">
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
            href="/gallery"
            className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
          >
            View Full Portfolio
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}