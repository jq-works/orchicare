"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  AlertTriangle, 
  EyeOff, 
  TrendingDown, 
  Bug,
  ThermometerSnowflake,
  Activity,
  MapPin
} from "lucide-react";
import { CardLabel } from "../ui/CardLabel";
import { ProblemCard } from "../ui/ProblemCard";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export function Problem() {
  return (
    <section id="problem" className="py-24 relative overflow-hidden bg-white">
      {/* BACKGROUND DECORATIONS: High Detail */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Background Asset: Minimalist Botanical Tech */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.07] grayscale hover:grayscale-0 transition-all duration-1000">
          <Image 
            src="/botanical_tech_bg_asset_1778074277467.png" 
            alt="Decoration" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Dynamic Glassy Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-br from-[#00B377]/10 to-transparent rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            x: [0, -30, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#E39EB9]/10 to-transparent rounded-full blur-[100px]" 
        />

        {/* Decorative Floating Shapes */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] right-[15%] opacity-[0.08] text-[#00B377]"
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <CardLabel text="Urgensi Sektor" />
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.1] tracking-tight mt-6 mb-4">
              <span className="text-[#00B377] [-webkit-text-stroke:6px_#fff] md:[-webkit-text-stroke:10px_#fff] [paint-order:stroke_fill] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Mengapa Pemantauan
              </span>
              <br />
              <span className="text-[#E39EB9] [-webkit-text-stroke:6px_#fff] md:[-webkit-text-stroke:10px_#fff] [paint-order:stroke_fill] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Manual Tidak Cukup?
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-bold max-w-2xl mx-auto mt-4">
              Manajemen tradisional seringkali gagal merespons perubahan iklim mikro instan yang sangat krusial bagi anggrek Anda.
            </p>
          </motion.div>
        </div>

        {/* PROBLEMS GRID: 4 Poin Inti (Menggunakan Komponen ProblemCard) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
        >
          <ProblemCard 
            icon={EyeOff}
            title="Akurasi Data Terbatas"
            description="Mata manusia tidak mampu mendeteksi fluktuasi kelembapan 1% atau perubahan suhu mikro secara instan."
          />
          <ProblemCard 
            icon={Bug}
            title="Ancaman Tanpa Henti"
            description="Jamur dan patogen berkembang di kondisi mikro yang tidak stabil, seringkali terlambat disadari secara manual."
          />
          <ProblemCard 
            icon={TrendingDown}
            title="Risiko Investasi Tinggi"
            description="Setiap kegagalan panen berarti kehilangan modal bibit unggul dan waktu yang tidak bisa kembali."
          />
          <ProblemCard 
            icon={ThermometerSnowflake}
            title="Stres Termal Tanaman"
            description="Udara panas yang terjebak di greenhouse luput dari perhatian manual, menyebabkan anggrek gagal berbunga."
          />
        </motion.div>

        {/* FAKTA KUNCI: Lebih Ringkas & Beranimasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,179,119,0.08)" }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-[2.5rem] bg-[#00B377]/5 border-2 border-[#00B377]/10 flex flex-col md:flex-row gap-6 md:gap-8 shadow-sm backdrop-blur-sm relative overflow-hidden group transition-all duration-500"
        >
          {/* Animated Ornament */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#00B377] rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" 
          />
          
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#00B377] rounded-[1.2rem] flex items-center justify-center text-white shadow-xl shadow-[#00B377]/20 relative z-10 shrink-0 group-hover:scale-110 transition-transform duration-500">
            <MapPin size={28} fill="currentColor" fillOpacity={0.2} />
          </div>
          
          <div className="relative z-10">
            <span className="text-[#00B377] text-[9px] uppercase tracking-[0.2em] font-black block mb-2">Analisis Sektor Wilayah</span>
            <p className="text-slate-900 text-lg md:text-xl font-black leading-tight">
              Jawa Timur memiliki kapasitas <span className="text-[#00B377]">11,7 Juta</span> tangkai anggrek.
            </p>
            <div className="h-px w-full bg-[#00B377]/10 my-4" />
            <p className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed">
              Meskipun kapasitas besar, risiko kerugian tetap tinggi. Keterlambatan respon <span className="text-[#E39EB9] font-black">3 Jam</span> saja dapat memangkas kualitas mekar hingga <span className="text-[#E39EB9] font-black">45%</span>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}