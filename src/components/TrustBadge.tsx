export default function TrustBadge() {
  return (
    <section className="py-16 relative">
      {/* No hard background here — lets the page's continuous background show through */}
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* BBB Seal */}
          <a 
            href="https://www.bbb.org/us/tx/socorro/profile/pool-contractors/hydro-havens-pools-and-spas-0895-99174777"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700 group-hover:border-teal-500/30 transition-colors">
              <iframe 
                src="https://seal-elpaso.bbb.org/frame/gray-seal-69-145-bbb-99174777.png?chk=110782F98B" 
                title="BBB Accredited Business"
                scrolling="no"
                style={{ border: 0, height: '110px', width: '69px', display: 'block' }}
              />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 group-hover:text-cyan-400 transition-colors">A-</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">BBB Rating</div>
            </div>
          </a>

          {/* Google Rating */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="text-4xl font-bold text-teal-400 mb-1">5.0</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Google Rating</div>
          </div>

          {/* Service Area */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="text-4xl font-bold text-teal-400 mb-1">Local</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">El Paso & Las Cruces</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}