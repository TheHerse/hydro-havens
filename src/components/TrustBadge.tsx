export default function TrustBadge() {
  return (
    <section className="py-4 relative bg-[#086f7c] border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white/20">
          
          {/* BBB Seal */}
          <a 
            href="https://www.bbb.org/us/tx/socorro/profile/pool-contractors/hydro-havens-pools-and-spas-0895-99174777"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-5 py-7"
          >
            <div className="opacity-75 grayscale group-hover:grayscale-0 transition-all">
              <iframe 
                src="https://seal-elpaso.bbb.org/frame/gray-seal-69-145-bbb-99174777.png?chk=110782F98B" 
                title="BBB Accredited Business"
                loading="lazy"
                scrolling="no"
                style={{ border: 0, height: '110px', width: '69px', display: 'block' }}
              />
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-semibold text-white tracking-tight">A-</div>
              <div className="text-[10px] text-white/65 uppercase tracking-[0.2em]">BBB Rating</div>
            </div>
          </a>

          {/* Google Rating */}
          <div className="flex flex-col items-center justify-center py-7 border-t md:border-t-0 border-white/20">
            <div className="font-display text-4xl font-semibold text-white mb-2 tracking-tight">5.0</div>
            <div className="text-[10px] text-white/65 uppercase tracking-[0.2em]">Google Rating</div>
          </div>

          {/* Service Area */}
          <div className="flex flex-col items-center justify-center py-7 border-t md:border-t-0 border-white/20">
            <div className="font-display text-4xl font-semibold text-white mb-2 tracking-tight">Local</div>
            <div className="text-[10px] text-white/65 uppercase tracking-[0.2em]">El Paso & Las Cruces</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
