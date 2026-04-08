import { 
  Waves, 
  Hammer, 
  Trees, 
  Grid3X3, 
  BrickWall, 
  Leaf 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Custom Pools",
    description: "From design to completion, we build bespoke pools tailored to your vision, lifestyle, and backyard space.",
    icon: Waves,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Pool Remodeling", 
    description: "Transform your existing pool with modern finishes, updated tile, resurfacing, and equipment upgrades.",
    icon: Hammer,
    gradient: "from-teal-400 to-emerald-500"
  },
  {
    title: "Outdoor Living Spaces",
    description: "Complete backyard transformations featuring custom pergolas, outdoor kitchens, and entertainment areas.",
    icon: Trees,
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    title: "Pool Decking & Concrete",
    description: "Durable, slip-resistant pool decks and concrete work designed to withstand El Paso's desert climate.",
    icon: Grid3X3,
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Stamped Concrete",
    description: "Decorative stamped concrete patios, walkways, and borders that mimic stone, brick, or wood finishes.",
    icon: BrickWall,
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "Turf Installation",
    description: "Low-maintenance artificial turf solutions for a lush, green landscape without the water bill.",
    icon: Leaf,
    gradient: "from-emerald-400 to-teal-500"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      
      {/* Tiled Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Services</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              From custom builds to complete backyard transformations, we handle it all with quality craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title} 
                  className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-transparent transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                  <div className="absolute inset-[1px] rounded-2xl bg-slate-900" />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-slate-400 mb-8">Get a free estimate for your pool or outdoor living project.</p>
              <Link 
                href="/contact"
                className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}