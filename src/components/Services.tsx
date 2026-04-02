const services = [
  {
    title: "Custom Pools",
    description: "From design to completion, we build bespoke pools tailored to your vision, lifestyle, and backyard space."
  },
  {
    title: "Pool Remodeling", 
    description: "Transform your existing pool with modern finishes, updated tile, resurfacing, and equipment upgrades."
  },
  {
    title: "Outdoor Living Spaces",
    description: "Complete backyard transformations featuring custom pergolas, outdoor kitchens, and entertainment areas."
  },
  {
    title: "Pool Decking & Concrete",
    description: "Durable, slip-resistant pool decks and concrete work designed to withstand El Paso's desert climate."
  },
  {
    title: "Stamped Concrete",
    description: "Decorative stamped concrete patios, walkways, and borders that mimic stone, brick, or wood finishes."
  },
  {
    title: "Turf Installation",
    description: "Low-maintenance artificial turf solutions for a lush, green landscape without the water bill."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#0f172a] relative">
      {/* Subtle water reflection background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Services</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Everything your pool needs</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-teal-500/30 hover:bg-slate-800/50 transition-all duration-500 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}