"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Layers, Zap, MessageSquare, ChevronRight } from "lucide-react";
import { CardLabel } from "../ui/CardLabel";
import { SolutionCard } from "../ui/SolutionCard";

export function Solution() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-white">
      {/* BACKGROUND DECORATIONS: High Detail */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Background Asset: IoT Orchid Neural Network */}
        <div className="absolute bottom-0 left-0 w-[900px] h-[900px] opacity-[0.08] grayscale hover:grayscale-0 transition-all duration-1000">
          <Image
            src="/iot_orchid_tech_bg_asset_1778074296279.png"
            alt="Decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Section Blending Gradients: To avoid 'sharp' cuts between sections */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

        {/* Dynamic Glassy Blobs (Moved further inward to avoid cuts) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -60, 0],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#E39EB9]/10 to-transparent rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 120, 0],
            x: [0, 40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-[#00B377]/10 to-transparent rounded-full blur-[120px]" 
        />

        {/* Decorative Floating Shapes (Tech/Data) */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [0, 50, 0], x: [0, 20, 0], rotate: [0, 180, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] left-[12%] opacity-[0.08] text-[#00B377]"
          >
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        {/* SECTION HEADER: Fokus & Terpusat (Samakan dengan Problem) */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <CardLabel text="Inovasi Solusi" isSolution />
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.1] tracking-tight mt-6 mb-4">
              <span className="text-[#E39EB9] [-webkit-text-stroke:6px_#fff] md:[-webkit-text-stroke:10px_#fff] [paint-order:stroke_fill] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Mengubah Tebakan Menjadi
              </span>
              <br />
              <span className="text-[#00B377] [-webkit-text-stroke:6px_#fff] md:[-webkit-text-stroke:10px_#fff] [paint-order:stroke_fill] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Kepastian Data
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-bold max-w-2xl mx-auto mt-4">
              OrchiCare mengeliminasi faktor kesalahan manusia dengan
              menggabungkan komputasi saraf tiruan dan IoT presisi tinggi untuk
              strategi pertumbuhan anggrek unggulan.
            </p>
          </motion.div>
        </div>

        {/* Grid Solusi & Fitur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-6">
          <SolutionCard
            icon={Brain}
            title="Orchid Health Score (OHS)"
            description="Skor vitalitas 0-100 dari Jaringan Saraf Tiruan. Mengolah ribuan titik data sensor menjadi indikator tunggal yang akurat mengenai kesehatan tanaman."
          />
          <SolutionCard
            icon={Layers}
            title="Adaptive Profiling"
            description="Identifikasi otomatis kebutuhan varietas. Baik Dendrobium maupun Phalaenopsis, sistem akan menyesuaikan mikro-klimat secara otomatis."
          />
          <SolutionCard
            icon={Zap}
            title="Predictive Maintenance"
            description="Sistem antisipasi cerdas. OrchiCare melakukan intervensi (seperti misting) sebelum terjadi defisit kelembapan, mencegah stres tanaman."
          />
          <SolutionCard
            icon={MessageSquare}
            title="Dual-Access Interface"
            description="Akses analisis mendalam melalui Web Dashboard komprehensif, atau chatbot NLP intuitif layaknya berbicara dengan ahli botani pribadi."
          />
        </div>

        {/* Highlight Section: CTA Box Premium (Samakan dengan Fakta Sektor) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, boxShadow: "0 40px 80px -15px rgba(0,179,119,0.12)" }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-14 rounded-[3rem] bg-white border-2 border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-slate-200/40 relative overflow-hidden group transition-all duration-700"
        >
          {/* Subtle Mesh Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B377]/5 via-white to-[#E39EB9]/5 pointer-events-none" />
          
          {/* Enhanced Smooth Animated Ornaments */}
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#00B377]/20 to-transparent rounded-full blur-[120px] pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.05, 0.15, 0.05],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#E39EB9]/20 to-transparent rounded-full blur-[120px] pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 w-full">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[#00B377] text-[9px] uppercase tracking-[0.2em] font-black block mb-3">
                Langkah Selanjutnya
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 leading-tight">
                Siap mengamankan investasi tanaman Anda?
              </h3>
              <p className="text-slate-600 font-bold text-base md:text-lg">
                Gantikan rasa khawatir gagal panen dengan efisiensi teknologi
                yang sudah teruji secara teknis dan finansial.
              </p>
            </div>

            <div className="lg:ml-auto">
              <button className="bg-[#00B377] hover:bg-[#009966] text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all shrink-0 shadow-xl shadow-[#00B377]/20 hover:-translate-y-1 group">
                Dapatkan OrchiCare Sekarang
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
