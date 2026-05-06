import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { id: 1, src: "/images/pools/pool-1.webp", alt: "Alberca personalizada", category: "Albercas", aspect: "4/3" },
  { id: 2, src: "/images/pools/pool-hero.webp", alt: "Instalacion de alberca", category: "Alberca y Spa", aspect: "16/9" },
  { id: 3, src: "/images/pools/concrete/concrete-1-optimized.webp", alt: "Deck de concreto estampado", category: "Concreto", aspect: "4/3" },
  { id: 4, src: "/images/pools/outdoor/outdoor-1-optimized.webp", alt: "Instalacion de turf", category: "Exterior", aspect: "3/4" },
  { id: 5, src: "/images/pools/concrete/concrete-2.webp", alt: "Patio de concreto decorativo", category: "Concreto", aspect: "4/3" },
  { id: 6, src: "/images/pools/outdoor/outdoor-2.webp", alt: "Transformacion exterior", category: "Exterior", aspect: "16/9" },
  { id: 7, src: "/images/pools/concrete/concrete-3.webp", alt: "Entrada de concreto estampado", category: "Concreto", aspect: "1/1" },
  { id: 8, src: "/images/pools/outdoor/outdoor-3.webp", alt: "Transformacion de patio", category: "Exterior", aspect: "4/3" },
  { id: 9, src: "/images/pools/concrete/concrete-4.webp", alt: "Trabajo de concreto personalizado", category: "Concreto", aspect: "3/4" },
  { id: 10, src: "/images/pools/outdoor/outdoor-4.webp", alt: "Diseno de paisaje", category: "Exterior", aspect: "4/3" },
];

export default function SpanishGalleryPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Portafolio</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Nuestro Trabajo</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explora proyectos de albercas, concreto, turf y espacios exteriores en el area de El Paso y Las Cruces.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, idx) => (
              <div key={image.id} className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500">
                <div className="relative bg-slate-800" style={{ aspectRatio: image.aspect }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={idx < 2 ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{image.category}</span>
                    <h3 className="text-white text-lg font-bold mt-1">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Listo para transformar tu patio?</h2>
            <p className="text-slate-400 mb-8">Construyamos algo hermoso en El Paso o Las Cruces.</p>
            <Link href="/es/contact/#contact-form" className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
              Empezar Mi Proyecto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
