import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calculator, BadgeCheck, Clock } from 'lucide-react';

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">Financing</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Pool Financing Options
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Make your dream pool a reality with flexible financing solutions. 
              We partner with industry-leading lenders to offer competitive rates.
            </p>
          </div>

          {/* Lyon Financial - Featured */}
          <div className="mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 md:p-12 border border-cyan-500/20 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <BadgeCheck className="w-4 h-4" />
                  Recommended Partner
                </div>
                
                {/* Lyon Financial Logo */}
                <div className="mb-8 bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
                  <Image 
                    src="/images/financing/lyon-transparent.webp" 
                    alt="Lyon Financial" 
                    width={400} 
                    height={120} 
                    className="h-20 md:h-24 w-auto object-contain mx-auto"
                    priority
                  />
                </div>
                
                <p className="text-slate-400 mb-6 text-lg">
                  Specializing in swimming pool financing since 1979. Lyon Financial offers 
                  unsecured loans with no equity required, featuring affordable fixed rates 
                  and terms up to 20 years.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <BadgeCheck className="w-5 h-5 text-teal-400 mr-3" />
                    No equity required
                  </li>
                  <li className="flex items-center text-slate-300">
                    <BadgeCheck className="w-5 h-5 text-teal-400 mr-3" />
                    Terms up to 20 years
                  </li>
                  <li className="flex items-center text-slate-300">
                    <BadgeCheck className="w-5 h-5 text-teal-400 mr-3" />
                    Quick approval process
                  </li>
                </ul>
                <a 
                  href="https://www.lyonfinancial.net/contractor-resources/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-lg"
                >
                  Apply with Lyon Financial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 text-center backdrop-blur-sm">
                <Calculator className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-3">Flexible Loan Amounts</h3>
                    <p className="text-slate-400 mb-6">Financing options available for projects of all sizes</p>
                    <div className="text-3xl font-bold text-teal-400 mb-2">Custom Quotes</div>
                    <p className="text-sm text-slate-500">Based on your specific project needs</p>
              </div>
            </div>
          </div>

          {/* Other Lenders Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Viking Capital */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="absolute inset-[1px] rounded-2xl bg-slate-900" />
              
              <div className="relative z-10">
                {/* Viking Logo - Fixed sizing */}
                <div className="mb-6 bg-white rounded-2xl p-6 w-full shadow-lg">
                  <div className="relative h-20 md:h-24 w-full">
                    <Image 
                      src="/images/financing/Viking-Logo-Horizontal.png" 
                      alt="Viking Capital" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                
                <p className="text-slate-400 mb-4">
                  Competitive financing solutions for pool and home improvement projects with fast approval.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-teal-400" />
                    Fast approval process
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-teal-400" />
                    Flexible terms available
                  </div>
                </div>
                <a 
                  href="https://poolloan.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-teal-500 hover:bg-teal-400 text-slate-950 py-3 rounded-lg font-bold transition-all hover:scale-[1.02]"
                >
                  Apply with Viking Capital
                </a>
              </div>
            </div>

            {/* HFS Financial */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="absolute inset-[1px] rounded-2xl bg-slate-900" />
              
              <div className="relative z-10">
                {/* HFS Logo */}
                <div className="mb-6 bg-white rounded-2xl p-6 w-full shadow-lg">
                  <Image 
                    src="/images/financing/hfs-logo-new.webp" 
                    alt="HFS Financial" 
                    width={400} 
                    height={120} 
                    className="h-20 md:h-24 w-auto object-contain mx-auto"
                    priority
                  />
                </div>
                
                <p className="text-slate-400 mb-4">
                  Industry leader in swimming pool loans with personalized service and 100% financing options.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-500">
                  <div className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-teal-400" />
                    100% financing available
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-teal-400" />
                    No collateral required
                  </div>
                </div>
                <a 
                  href="https://www.hfsfinancial.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-lg font-bold transition-all hover:scale-[1.02]"
                >
                  Apply with HFS Financial
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-400 mb-8">Contact us for a free estimate and financing guidance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
              >
                Get Free Estimate
              </Link>
              <a 
                href="tel:9152627590"
                className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold transition-all"
              >
                Call (915) 262-7590
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}