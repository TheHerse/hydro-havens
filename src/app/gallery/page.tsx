import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { id: 1, src: '/pools/pool-1.jpg', alt: 'Custom Inground Pool', category: 'Custom Pools' },
  { id: 2, src: '/pools/pool-2.jpg', alt: 'Luxury Pool with Spa', category: 'Pool & Spa' },
  { id: 3, src: '/pools/concrete-1.jpg', alt: 'Stamped Concrete Deck', category: 'Concrete' },
  { id: 4, src: '/pools/turf-1.jpg', alt: 'Artificial Turf Installation', category: 'Turf' },
  { id: 5, src: '/pools/outdoor-1.jpg', alt: 'Outdoor Kitchen', category: 'Outdoor Living' },
  { id: 6, src: '/pools/pool-3.jpg', alt: 'Modern Pool Design', category: 'Custom Pools' },
  { id: 7, src: '/pools/patio-1.jpg', alt: 'Patio Installation', category: 'Outdoor Living' },
  { id: 8, src: '/pools/pool-4.jpg', alt: 'Resort Style Pool', category: 'Custom Pools' },
  { id: 9, src: '/pools/concrete-2.jpg', alt: 'Decorative Concrete', category: 'Concrete' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects - Matching Services Page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      
      {/* Tiled Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Portfolio</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Our Work
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Explore our completed projects. From custom pools to outdoor living spaces, 
              see the quality craftsmanship that sets us apart.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">
                  {/* Placeholder - replace with actual Image when ready */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-slate-500 font-medium">{image.category}</span>
                  </div>
                  {/* Uncomment when you have images:
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  */}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-1">{image.alt}</h3>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Dream?</h2>
            <p className="text-slate-400 mb-8">Let's create something beautiful together.</p>
            <Link 
              href="/contact"
              className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}