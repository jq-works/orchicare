"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@heroui/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Fitur", href: "#" },
    { name: "Tentang", href: "#" },
    { name: "Layanan", href: "#" },
    { name: "Kontak", href: "#" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] ${
          isScrolled 
            ? "top-4 w-[95%] lg:w-[85%] max-w-5xl bg-white/60 backdrop-blur-xs border border-white/50 shadow-lg shadow-[#00B377]/10 rounded-full py-3 px-6 md:px-8" 
            : "top-0 w-full bg-transparent border-transparent shadow-none rounded-none py-6 lg:py-8 px-6 md:px-12 lg:px-16"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-9 h-11 sm:w-10 sm:h-12 md:w-12 md:h-14 transition-transform hover:scale-105 duration-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <Image 
              src="/images/orchicare-logo-new.png"
              alt="OrchiCare Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
            <span className="text-[#00B377] [-webkit-text-stroke:6px_#fff] [paint-order:stroke_fill]">
              ORCHI
            </span>
            <span className="text-[#E39EB9] [-webkit-text-stroke:6px_#fff] [paint-order:stroke_fill]">
              CARE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-black uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[#00B377] [-webkit-text-stroke:4px_#fff] [paint-order:stroke_fill] hover:text-[#E39EB9] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#00B377] text-white rounded-full hover:bg-[#009966] transition-colors shadow-md shrink-0"
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl font-black uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#00B377] [-webkit-text-stroke:4px_#fff] [paint-order:stroke_fill] hover:text-[#E39EB9] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}