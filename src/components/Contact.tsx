"use client";
import { useState } from "react";
import Success from "./Success";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Send to Netlify
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });
    
    setSubmitting(false);
    setSubmitted(true);
  };

  // Show success component instead of form
  if (submitted) {
    return <Success onReset={() => setSubmitted(false)} />;
  }

  return (
    <section id="contact" className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Pool night ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Contact</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">Ready to dive in?</h3>
          <p className="text-slate-400 text-xl">Get your free estimate today</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 mb-16 text-center">
          <div>
            <div className="text-sm text-slate-500 uppercase tracking-wider mb-2">Call</div>
            <a href="tel:+19152627590" className="text-3xl md:text-4xl font-bold text-white hover:text-teal-400 transition-colors drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]">
              (915) 262-7590
            </a>
          </div>
          <div className="hidden md:block w-px bg-slate-800" />
          <div>
            <div className="text-sm text-slate-500 uppercase tracking-wider mb-2">Email</div>
            <a href="mailto:marioluna301270@gmail.com" className="text-xl md:text-2xl font-semibold text-white hover:text-teal-400 transition-colors">
              marioluna301270@gmail.com
            </a>
          </div>
        </div>

        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto p-8 rounded-3xl bg-slate-800/20 border border-slate-700/30 backdrop-blur-sm"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden><input name="bot-field" /></div>

          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name" required className="w-full bg-slate-900/50 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 border border-slate-700/30 focus:border-teal-500/50 focus:outline-none text-lg" />
            <input type="tel" name="phone" placeholder="Phone" className="w-full bg-slate-900/50 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 border border-slate-700/30 focus:border-teal-500/50 focus:outline-none text-lg" />
          </div>
          <input type="email" name="email" placeholder="Email" required className="w-full bg-slate-900/50 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 border border-slate-700/30 focus:border-teal-500/50 focus:outline-none text-lg" />
          <select name="service" required className="w-full bg-slate-900/50 rounded-xl px-6 py-4 text-slate-300 border border-slate-700/30 focus:border-teal-500/50 focus:outline-none text-lg" >
            <option value="">Select Service</option>
            <option value="custom-pools">Custom Pools</option>
            <option value="pool-remodeling">Pool Remodeling</option>
            <option value="outdoor-living">Outdoor Living Spaces</option>
            <option value="pool-decking">Pool Decking & Concrete</option>
            <option value="stamped-concrete">Stamped Concrete</option>
            <option value="turf">Turf Installation</option>
            <option value="other">Other / Not Sure</option>
          </select>
          <textarea name="message" rows={4} placeholder="Tell us about your project" className="w-full bg-slate-900/50 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 border border-slate-700/30 focus:border-teal-500/50 focus:outline-none text-lg resize-none" />
          <button type="submit" disabled={submitting} className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 font-bold py-4 rounded-xl transition-all hover:scale-[1.02] text-lg shadow-[0_0_20px_rgba(20,184,166,0.3)]">
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}