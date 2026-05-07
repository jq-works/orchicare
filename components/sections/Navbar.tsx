"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@heroui/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Masalah", href: "#problem" },
    { name: "Solusi", href: "#solution" },
    { name: "Inovasi", href: "#teknologi" },
    { name: "Tim", href: "#tim" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            isScrolled 
              ? "w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-3 px-6 md:px-8 rounded-full" 
              : "w-full max-w-6xl bg-transparent py-4 px-4 md:px-6"
          }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform group-hover:rotate-12 duration-500">
              <Image 
                src="/images/orchicare-logo-new.png"
                alt="OrchiCare Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center text-xl md:text-2xl font-black tracking-tight drop-shadow-md">
              <span className="text-[#00B377] [-webkit-text-stroke:4px_#fff] [paint-order:stroke_fill]">Orchi</span>
              <span className="text-[#E39EB9] [-webkit-text-stroke:4px_#fff] [paint-order:stroke_fill]">Care</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-[#00B377] text-sm font-bold transition-all duration-300 relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B377] transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="https://orchicare-dashboard.vercel.app/dashboard"
              target="_blank"
              className="bg-[#00B377] hover:bg-[#009966] text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-0.5"
            >
              Dashboard
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-white text-slate-800 rounded-full hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[45] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-xs">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center text-slate-800 text-3xl font-black hover:text-[#00B377] transition-colors w-full py-2 border-b border-slate-100"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full mt-4"
              >
                <Link 
                  href="https://orchicare-dashboard.vercel.app/dashboard"
                  target="_blank"
                  className="bg-[#00B377] text-white w-full py-5 rounded-3xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-sm shadow-xl shadow-[#00B377]/10"
                >
                  Buka Dashboard
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}