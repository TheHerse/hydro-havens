"use client";
import { useState } from "react";
import Success from "@/components/Success";
import { Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
    
    // CONVERSION TRACKING - Add this code
    if (typeof window !== "undefined") {
      // Google Ads Conversion
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with your actual ID
          value: 1.0,
          currency: "USD",
        });
      }
      
      // Facebook Pixel Lead Event
      if (window.fbq) {
        window.fbq("track", "Lead");
      }
      
      // Optional: Google Analytics 4 Event
      if (window.gtag) {
        window.gtag("event", "form_submit", {
          event_category: "contact",
          event_label: "pool_estimate_request",
        });
      }
    }
    
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <Success onReset={() => setSubmitted(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Contact</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Get In Touch
            </h1>
            <p className="text-slate-400 text-xl">Ready to dive in? Get your free estimate today.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors group">
                <Phone className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <a href="tel:+19152627590" className="text-2xl font-bold text-slate-300 hover:text-teal-400 transition-colors">
                  (915) 262-7590
                </a>
                <p className="text-slate-500 text-sm mt-2">Mon-Sat: 5am-5pm</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors group">
                <Mail className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <a href="mailto:marioluna301270@gmail.com" className="text-lg font-semibold text-slate-300 hover:text-teal-400 transition-colors break-all">
                  marioluna301270@gmail.com
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors group">
                <Clock className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Hours</h3>
                <p className="text-slate-300">Monday - Saturday</p>
                <p className="text-slate-400">5:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/20 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <input type="hidden" name="form-name" value="contact" />
                <div hidden><input name="bot-field" /></div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Name</label>
                    <input type="text" name="name" placeholder="John Doe" required 
                      className="w-full bg-slate-950/50 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 border border-slate-800 focus:border-teal-500/50 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Phone</label>
                    <input type="tel" name="phone" placeholder="(915) 555-0123" 
                      className="w-full bg-slate-950/50 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 border border-slate-800 focus:border-teal-500/50 focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-slate-400 text-sm mb-2">Email</label>
                  <input type="email" name="email" placeholder="john@example.com" required 
                    className="w-full bg-slate-950/50 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 border border-slate-800 focus:border-teal-500/50 focus:outline-none transition-colors" />
                </div>

                <div className="mb-6">
                  <label className="block text-slate-400 text-sm mb-2">Service</label>
                  <select name="service" required 
                    className="w-full bg-slate-950/50 rounded-xl px-6 py-4 text-white border border-slate-800 focus:border-teal-500/50 focus:outline-none transition-colors appearance-none cursor-pointer">
                    <option value="">Select a Service</option>
                    <option value="custom-pools">Custom Pools</option>
                    <option value="pool-remodeling">Pool Remodeling</option>
                    <option value="outdoor-living">Outdoor Living Spaces</option>
                    <option value="pool-decking">Pool Decking & Concrete</option>
                    <option value="stamped-concrete">Stamped Concrete</option>
                    <option value="turf">Turf Installation</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-slate-400 text-sm mb-2">Message</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your project..." 
                    className="w-full bg-slate-950/50 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 border border-slate-800 focus:border-teal-500/50 focus:outline-none transition-colors resize-none" />
                </div>

                <button type="submit" disabled={submitting} 
                  className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold py-4 rounded-xl transition-all hover:scale-[1.02] text-lg shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}