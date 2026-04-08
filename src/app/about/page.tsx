import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects - Matching Other Pages */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      
      {/* Tiled Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">About Us</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Our Story
            </h1>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              At Hydro Havens Pools & Spas, our mission is to create beautiful, long-lasting pools and spas 
              with quality as our highest priority, while ensuring every customer is completely satisfied 
              through honest service, expert craftsmanship, and attention to detail.
            </p>
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-12 hover:border-cyan-500/30 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4">What Sets Us Apart</h2>
              <p className="text-slate-400 leading-relaxed">
                What sets us apart is our unwavering commitment to quality and customer satisfaction. 
                We don't believe in one-size-fits-all solutions—every pool and spa we build is customized 
                to match our clients' vision and lifestyle. From premium materials to expert craftsmanship 
                and clear communication, we ensure every project is completed to the highest standards 
                and with a smooth, stress-free experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">Our Mission</h3>
                <p className="text-slate-400">
                  Create beautiful, long-lasting pools with quality as our highest priority.
                </p>
              </div>
              <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">Our Promise</h3>
                <p className="text-slate-400">
                  Complete customer satisfaction through honest service and expert craftsmanship.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Where Quality Is the Standard, Not the Upgrade</h2>
                <Link 
                  href="/contact"
                  className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 mt-4"
                >
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}