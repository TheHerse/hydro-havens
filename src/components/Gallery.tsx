"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

const projects = [
  { title: "Custom Pool Build", category: "New Construction", image: "/images/pools/pool-1.webp", width: 768, height: 576 },
  { title: "Stamped Concrete Patio", category: "Hardscape", image: "/images/pools/concrete/concrete-1.webp", width: 768, height: 576 },
  { title: "Stamped Concrete Patio", category: "Hardscape", image: "/images/pools/concrete/concrete-2.webp", width: 768, height: 576 },
  { title: "Backyard Transformation", category: "Full Project", image: "/images/pools/outdoor/outdoor-1.webp", width: 768, height: 576 },
  { title: "Frontyard Transformation", category: "Full Project", image: "/images/pools/outdoor/outdoor-2.webp", width: 768, height: 576 },
  { title: "Decorative Concrete", category: "Hardscape", image: "/images/pools/concrete/concrete-3.webp", width: 768, height: 576 },
  { title: "Complete Backyard", category: "Full Project", image: "/images/pools/outdoor/outdoor-3.webp", width: 768, height: 576 },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);
  
  // CRITICAL: Only mount lightbox when opened (saves 15KB+ on initial load)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedImage(project);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setHasDragged(false);
    setLightboxOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }, 150);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "unset";
    }
  };

  const zoomIn = () => setScale(prev => Math.min(prev + 0.5, 4));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.5, 0.5));
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasDragged) {
      setHasDragged(false);
      return;
    }
    if (scale === 1) setScale(2.5);
    else resetZoom();
  };

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale(prev => Math.min(Math.max(prev + delta, 0.5), 4));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setHasDragged(false);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setHasDragged(true);
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <section id="gallery" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Recent Projects</h3>
            </div>
            
            <div className="flex gap-3">
              <button onClick={() => scroll("left")} aria-label="View previous project" className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center transition-colors border border-slate-700/30 backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={() => scroll("right")} aria-label="View next project" className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center transition-colors border border-slate-700/30 backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(project)}
                className="relative flex-none w-80 md:w-96 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/50 snap-start group border border-slate-800/50 cursor-pointer hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
                style={{ contain: 'layout paint' }} // Prevents layout shift
              >
                {!loadedImages.has(idx) && (
                  <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                )}
                
                {/* BACK TO NATIVE IMG - faster for static export */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onLoad={() => setLoadedImages(prev => new Set(prev).add(idx))}
                  style={{ contentVisibility: 'auto' }} // Performance boost
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700/50">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
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

      {/* DEFERRED: Only render when opened */}
      {lightboxOpen && selectedImage && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col">
          <div className="relative z-10 flex justify-between items-center p-4 bg-slate-900 border-b border-slate-800">
            <div className="text-white">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">{selectedImage.category}</div>
              <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
            </div>
            
            <div className="flex items-center gap-2">
              <button onClick={zoomOut} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
              </button>
              <span className="text-white text-sm font-medium w-16 text-center">{Math.round(scale * 100)}%</span>
              <button onClick={zoomIn} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </button>
              <button onClick={resetZoom} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4m0 0l6 6m-6-6l6 6m8 8v-4h-4m0 0l-6-6m6 6l-6-6" /></svg>
              </button>
              <button onClick={closeLightbox} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors ml-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-slate-950" onClick={closeLightbox}>
            <div
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
              }}
              onClick={handleImageClick}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
                draggable={false}
                decoding="async"
              />
            </div>
          </div>

          <div className="relative z-10 p-4 bg-slate-900 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">{scale === 1 ? 'Click image to zoom • Click dark area to close' : 'Drag to pan • Click image to reset'}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}