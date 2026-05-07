"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-white py-20 relative overflow-hidden border-t border-slate-50">
      {/* BACKGROUND DECORATIONS - SUBTLE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#00B377]/5 via-transparent to-transparent" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter drop-shadow-md">
              <span className="text-[#00B377] [-webkit-text-stroke:4px_#fff] [paint-order:stroke_fill]">Orchi</span><span className="text-[#E39EB9] [-webkit-text-stroke:4px_#fff] [paint-order:stroke_fill]">Care.</span>
            </h2>
            <p className="text-slate-400 font-bold text-xs mt-2 uppercase tracking-[0.3em]">Agrotechnology Ecosystem</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
            {[
              { name: 'Beranda', href: '#' },
              { name: 'Masalah', href: '#problem' },
              { name: 'Solusi', href: '#solution' },
              { name: 'Inovasi', href: '#teknologi' },
              { name: 'Tim', href: '#tim' },
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-slate-500 hover:text-[#00B377] font-black text-xs uppercase tracking-widest transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact & Location Horizontal */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 py-8 border-y border-slate-50 w-full justify-center">
            <a 
              href="https://instagram.com/orchicare.id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-slate-600 hover:text-[#E39EB9] transition-all duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-[#E39EB9]/10 text-[#E39EB9] rounded-lg group-hover:bg-[#E39EB9] group-hover:text-white transition-all">
                <InstagramIcon size={16} />
              </div>
              <span className="font-black text-sm tracking-tight">@orchicare.id</span>
            </a>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-8 h-8 flex items-center justify-center bg-[#00B377]/10 text-[#00B377] rounded-lg">
                <MapPin size={16} />
              </div>
              <span className="text-sm font-black tracking-tight">Malang, Indonesia</span>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">
              <span>Youth Innovation</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full my-auto" />
              <span>Precision IoT</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full my-auto" />
              <span>AI Powered</span>
            </div>
            <p className="text-slate-400 text-[10px] font-bold">
              © 2026 ORCHICARE — FIKSI AGROTECHNOLOGY PROJECT
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}