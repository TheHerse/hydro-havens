export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-slate-500 text-sm">
            © {currentYear} Hydro Havens Pools & Spas. All rights reserved.
          </div>
          
          {/* Developer Credit */}
          <div className="text-slate-500 text-sm flex items-center gap-1">
            <span>Designed & Built by</span>
            <a 
              href="https://hersonhernandez.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              Herson Hernandez
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-slate-500 hover:text-white transition-colors">Services</a>
            <a href="#gallery" className="text-slate-500 hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="text-slate-500 hover:text-white transition-colors">Contact</a>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-slate-900 text-center">
          <p className="text-xs text-slate-600">
            Licensed, Insured & Locally Owned • Serving El Paso & Las Cruces
          </p>
        </div>
      </div>
    </footer>
  );
}