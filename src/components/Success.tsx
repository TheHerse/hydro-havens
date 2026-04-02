"use client";

export default function Success({ onReset }: { onReset?: () => void }) {
  return (
    <section id="contact" className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-2xl relative z-10">
        
        {/* Custom Pool-Themed Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-teal-500/30 rounded-full blur-xl animate-pulse" />
            
            {/* Checkmark in circle */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.5)]">
              <svg 
                className="w-10 h-10 text-slate-950" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={3}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            
            {/* Ripple rings */}
            <div className="absolute inset-0 rounded-full border-2 border-teal-400/30 animate-[ping_2s_ease-in-out_infinite]" />
            <div className="absolute inset-[-10px] rounded-full border border-cyan-400/20 animate-[ping_2s_ease-in-out_infinite_0.5s]" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Message Sent!</h1>
        <p className="text-slate-400 text-xl mb-8">
          Thanks for reaching out. Mario will get back to you within 24 hours.
        </p>
        
        {onReset && (
          <button 
            onClick={onReset}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
          >
            Send Another Message
          </button>
        )}
      </div>
    </section>
  );
}