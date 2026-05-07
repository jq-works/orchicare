"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "./Navbar";
import { ArrowDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-white">
      {/* Navbar */}
      <div className="relative z-50 pt-2">
        <Navbar />
      </div>

      {/* BACKGROUND IMAGE (Full Layar & Animasi bernapas) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/greenhouse-illustration.png"
            alt="Smart Orchid Greenhouse"
            fill
            className="object-cover object-center"
            priority={true}
          />
        </motion.div>

        {/* Restore lighter overall gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_35%,transparent_75%)] pointer-events-none"></div>

        {/* Smoother & Taller Linear Gradient at bottom for seamless section transition */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
      </div>

      {/* MAIN CONTENT AREA */}
      {/* Diubah menjadi pt-[15vh] agar text turun sedikit menjauhi navbar */}
      <div className="relative z-20 h-full w-full flex flex-col items-center pt-[15vh] pb-2 px-6 min-h-[calc(100svh-80px)]">
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="container mx-auto flex flex-col items-center flex-1 w-full justify-between"
        >
          {/* TOP CENTER: Text Hero Tanpa Box */}
          <motion.div
            variants={textVariants}
            className="w-full max-w-4xl text-center flex flex-col items-center mt-6 z-30"
          >
            {/* Added strong black drop shadow to make text pop against background without needing a box */}
            <h1 className="text-4xl md:text-5xl lg:text-[72px] font-black leading-[1.1] mb-6 tracking-tight">
              <span className="text-[#00B377] [-webkit-text-stroke:8px_#fff] md:[-webkit-text-stroke:14px_#fff] [paint-order:stroke_fill] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                Budidaya Anggrek
              </span>
              <br />
              <span className="text-[#E39EB9] [-webkit-text-stroke:8px_#fff] md:[-webkit-text-stroke:14px_#fff] [paint-order:stroke_fill] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                Berbasis AI & IoT
              </span>
            </h1>

            <p className="mt-4 text-slate-600 drop-shadow-xs  drop-shadow-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold tracking-wide [-webkit-text-stroke:1px_#fff] md:[-webkit-text-stroke:2px_#fff] [paint-order:stroke_fill]">
             Ubah manajemen tradisional menjadi sistem otomatis yang akurat. Gunakan analitik AI untuk mencegah gagal panen dan maksimalkan pertumbuhan anggrek unggulan Anda.
            </p>

            <Link href="#problem">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="mt-10 w-14 h-14 bg-white/80 backdrop-blur-md border-2 border-white hover:bg-white transition-colors rounded-full flex items-center justify-center text-[#00B377] shadow-[0_10px_20px_rgba(0,0,0,0.2)] cursor-pointer"
              >
                <ArrowDown size={28} strokeWidth={3} />
              </motion.div>
            </Link>
          </motion.div>

          <div className="flex-1 min-h-[40px]"></div>

          {/* BOTTOM AREA: CTA Buttons Only (Geser ke bawah) */}
          <div className="w-full flex flex-col items-center gap-6 mt-auto z-30">
            {/* CTA Buttons dengan hover animasi & shadow tebal (Lebih ramping) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-3 w-full"
            >
              <Button asChild className="bg-[#00B377] hover:bg-[#009966] text-white px-6 py-5 md:px-8 md:py-6 rounded-full text-sm md:text-base font-bold shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-300">
                <Link 
                  href="https://orchicare-dashboard.vercel.app/dashboard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Demo Dashboard
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-[2px] border-[#00B377] text-[#00B377] bg-white/80 backdrop-blur-md hover:bg-white px-6 py-5 md:px-8 md:py-6 rounded-full text-sm md:text-base font-bold shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300"
              >
                Executive Summary
              </Button>
              <Button
                variant="outline"
                className="border-[2px] border-[#E39EB9] text-[#E39EB9] bg-white/80 backdrop-blur-md hover:bg-white px-6 py-5 md:px-8 md:py-6 rounded-full text-sm md:text-base font-bold shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300"
              >
                Produk IoT
              </Button>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </section>
  );
}
