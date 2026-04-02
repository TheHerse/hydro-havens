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
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedImage(project);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
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
              <div 
                key={idx} 
                onClick={() => openLightbox(project)}
                className="relative flex-none w-80 md:w-96 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 snap-start group border border-slate-700/30 cursor-pointer hover:border-teal-500/50 transition-colors"
              >
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Expand icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <div className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-1">{selectedImage.category}</div>
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}