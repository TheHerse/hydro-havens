"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createPortal } from 'react-dom';

const galleryImages = [
  { id: 1, src: '/images/pools/pool-1.webp', alt: 'Custom Inground Pool', category: 'Custom Pools', aspect: '4/3' },
  { id: 2, src: '/images/pools/pool-hero.webp', alt: 'Luxury Pool Installation', category: 'Pool & Spa', aspect: '16/9' },
  { id: 3, src: '/images/pools/concrete/concrete-1.webp', alt: 'Stamped Concrete Deck', category: 'Concrete', aspect: '4/3' },
  { id: 4, src: '/images/pools/outdoor/outdoor-1.webp', alt: 'Turf Installation', category: 'Outdoor Living', aspect: '3/4' },
  { id: 5, src: '/images/pools/concrete/concrete-2.webp', alt: 'Decorative Concrete Patio', category: 'Concrete', aspect: '4/3' },
  { id: 6, src: '/images/pools/outdoor/outdoor-2.webp', alt: 'Frontyard Transformation', category: 'Outdoor Living', aspect: '16/9' },
  { id: 7, src: '/images/pools/concrete/concrete-3.webp', alt: 'Stamped Concrete Driveway', category: 'Concrete', aspect: '1/1' },
  { id: 8, src: '/images/pools/outdoor/outdoor-3.webp', alt: 'Backyard Transformation', category: 'Outdoor Living', aspect: '4/3' },
  { id: 9, src: '/images/pools/concrete/concrete-4.webp', alt: 'Custom Concrete Work', category: 'Concrete', aspect: '3/4' },
  { id: 10, src: '/images/pools/outdoor/outdoor-4.webp', alt: 'Landscape Design', category: 'Outdoor Living', aspect: '4/3' },
];

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  
  // Zoom/Pan state
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setHasDragged(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
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
    if (scale === 1) {
      setScale(2.5);
    } else {
      resetZoom();
    }
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
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Portfolio</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Our Work
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore our completed projects across El Paso. From custom pools to outdoor living spaces, 
              see the quality craftsmanship that sets us apart.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, idx) => (
              <div 
                key={image.id} 
                onClick={() => openLightbox(image)}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
              >
                <div className="relative bg-slate-800" style={{ aspectRatio: image.aspect }}>
                  {!loadedImages.has(idx) && (
                    <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                  )}
                  
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={idx < 3 ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    onLoad={() => setLoadedImages(prev => new Set(prev).add(idx))}
                    unoptimized
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h3 className="text-white text-lg font-bold mt-1">{image.alt}</h3>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700/50">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Dream?</h2>
            <p className="text-slate-400 mb-8">Let's create something beautiful together in El Paso.</p>
            <Link 
              href="/contact"
              className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* LIGHTBOX PORTAL */}
      {mounted && selectedImage && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col">
          {/* Header */}
          <div className="relative z-10 flex justify-between items-center p-4 bg-slate-900 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">{selectedImage.category}</div>
              <h3 className="text-lg font-semibold text-white">{selectedImage.alt}</h3>
            </div>
            
            <div className="flex items-center gap-2">
              <button onClick={zoomOut} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="text-white text-sm font-medium w-16 text-center">{Math.round(scale * 100)}%</span>
              <button onClick={zoomIn} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button onClick={resetZoom} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4m0 0l6 6m-6-6l6 6m8 8v-4h-4m0 0l-6-6m6 6l-6-6" />
                </svg>
              </button>
              <button onClick={closeLightbox} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors ml-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Container */}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 p-4 bg-slate-900 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              {scale === 1 ? 'Click image to zoom • Click dark area to close • ESC to exit' : 'Drag to pan • Click image to reset • Scroll to zoom'}
            </p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}