export default function TrustBadge() {
  return (
<section className="py-16 bg-[#0f172a] relative">      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* BBB Seal with Rating - Side by Side */}
          <a 
            href="https://www.bbb.org/us/tx/el-paso/profile/swimming-pool-service-and-repair/hydro-havens-pools-and-spas-99174777"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 group cursor-pointer"
          >
            <div className="bg-slate-800 rounded-lg p-3 border border-slate-700 shadow-lg group-hover:border-teal-500/50 transition-colors">
              <iframe 
                src="https://seal-elpaso.bbb.org/frame/gray-seal-69-145-bbb-99174777.png?chk=110782F98B" 
                title="BBB Accredited Business"
                scrolling="no"
                style={{ border: 0, height: '110px', width: '69px', display: 'block' }}
              />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">A-</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">BBB Rating</div>
            </div>
          </a>

          {/* Google Rating */}
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-teal-400 mb-1 drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]">5.0</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Google Rating</div>
          </div>

          {/* Service Area */}
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-1 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">Local</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">El Paso & Las Cruces</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}