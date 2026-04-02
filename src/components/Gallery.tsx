"use client";
import { useRef, useState } from "react";

const projects = [
  { title: "Custom Pool Build", category: "New Construction", image: "/images/pools/pool-1.png" },
  { title: "Stamped Concrete Patio", category: "Hardscape", image: "/images/pools/concrete/concrete-1.png" },
  { title: "Pool Deck Surface", category: "Concrete Work", image: "/images/pools/concrete/concrete-2.png" },
  { title: "Backyard Transformation", category: "Full Project", image: "/images/pools/outdoor/outdoor-1.png" },
  { title: "Outdoor Living Space", category: "Landscape", image: "/images/pools/outdoor/outdoor-2.png" },
  { title: "Decorative Concrete", category: "Hardscape", image: "/images/pools/concrete/concrete-3.png" },
  { title: "Complete Backyard", category: "Full Project", image: "/images/pools/outdoor/outdoor-3.png" },
  { title: "Modern Pool Design", category: "Renovation", image: "/images/pools/concrete/concrete-4.png" },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#1e293b] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Recent Projects</h3>
          </div>
          
          <div className="flex gap-3">
            <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center transition-colors border border-slate-600/30 backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center transition-colors border border-slate-600/30 backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
          {projects.map((project, idx) => (
            <div key={idx} className="relative flex-none w-80 md:w-96 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 snap-start group border border-slate-700/30 cursor-pointer">
              
              {/* Image with fallback */}
              {!loadedImages.has(idx) && (
                <div className="absolute inset-0 bg-slate-800 animate-pulse" />
              )}
              
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onLoad={() => setLoadedImages(prev => new Set(prev).add(idx))}
                onError={(e) => {
                  console.error(`Failed to load: ${project.image}`);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">{project.category}</div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
          <div className="flex-none w-6" />
        </div>
      </div>
    </section>
  );
}