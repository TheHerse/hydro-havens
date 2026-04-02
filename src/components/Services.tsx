import { 
  Waves, 
  Hammer, 
  Trees, 
  Grid3X3, 
  BrickWall, 
  Leaf 
} from "lucide-react";

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

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Top fade - blends from TrustBadge (#0f172a) to Services */}
      <div className="absolute top-0 left-0 right-0 h-35 bg-gradient-to-b from-[#0f172a] to-transparent z-10 pointer-events-none" />
      
      {/* Bottom fade - blends from Services to Gallery (#1e293b) */}
      <div className="absolute bottom-0 left-0 right-0 h-35 bg-gradient-to-t from-[#1e293b] to-transparent z-10 pointer-events-none" />
      
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Services</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Everything your pool needs
          </h3>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            From custom builds to complete backyard transformations, we handle it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title} 
                className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-transparent transition-all duration-500 hover:-translate-y-1"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                <div className="absolute inset-[1px] rounded-2xl bg-slate-900" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center text-teal-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}