"use client";

import { motion } from "framer-motion";
import { 
  ThermometerSnowflake, 
  Droplets, 
  AlertCircle, 
  ShieldCheck, 
  Zap, 
  BarChart3 
} from "lucide-react";
import { CardLabel } from "../ui/CardLabel";
import { ProblemCard } from "../ui/ProblemCard";
import { SolutionCard } from "../ui/SolutionCard";

export function ProblemSolution() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Seamless Top Blend (Menghilangkan Patahan dengan Hero) */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white via-white/110 to-transparent z-15 pointer-events-none" />

      {/* Ornamen Latar Belakang */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#00B377]/[0.03] rounded-full blur-[120px] translate-x-1/3 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E39EB9]/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          
          {/* BAGIAN MASALAH (Tradisional) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col h-full"
          >
            <div className="mb-10 lg:mb-12">
              <CardLabel text="Tantangan Budidaya" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-[1.1] tracking-tighter">
                Mengapa cara manual <br />
                <span className="text-[#E39EB9] [-webkit-text-stroke:1px_#fff] md:[-webkit-text-stroke:1.5px_#fff] [paint-order:stroke_fill] drop-shadow-sm inline-block mt-1">berisiko tinggi?</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5 flex-1">
              <ProblemCard 
                className="flex-1"
                icon={ThermometerSnowflake} 
                title="Suhu Ekstrem & Sirkulasi Udara Buruk" 
                description="Perubahan iklim mikro dan sirkulasi udara yang tidak lancar memicu stres termal yang menghambat fase pembungaan anggrek." 
              />
              <ProblemCard 
                className="flex-1"
                icon={Droplets} 
                title="Overwatering (Kelebihan Air)" 
                description="Penyiraman manual berbasis insting sering memicu kelembapan berlebih yang berujung pada busuk akar—penyebab utama kematian tanaman." 
              />
              <ProblemCard 
                className="flex-1"
                icon={AlertCircle} 
                title="Keterlambatan Deteksi Hama" 
                description="Gejala awal serangan penyakit dan hama biasanya baru disadari ketika kerusakan seluler sudah parah dan sangat sulit diselamatkan." 
              />
            </div>
          </motion.div>

          {/* BAGIAN SOLUSI (OrchiCare) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex flex-col h-full"
          >
            {/* Ambient Background Glow tambahan untuk menonjolkan bagian solusi */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00B377]/10 blur-[100px] -z-10 rounded-full" />
            
            <div className="mb-10 lg:mb-12 relative z-10">
              <CardLabel text="Solusi OrchiCare" isSolution />
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-[1.1] tracking-tighter">
                Sistem otomatis untuk <br />
                <span className="text-[#00B377] [-webkit-text-stroke:1px_#fff] md:[-webkit-text-stroke:1.5px_#fff] [paint-order:stroke_fill] drop-shadow-sm inline-block mt-1">panen maksimal.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5 flex-1 relative z-10">
              <SolutionCard 
                className="flex-1"
                icon={ShieldCheck} 
                title="Deteksi Dini Berbasis AI" 
                description="Kamera cerdas menganalisis perubahan visual mikroskopis pada daun secara real-time sebelum gejala penyakit memburuk." 
              />
              <SolutionCard 
                className="flex-1"
                icon={Zap} 
                title="Otomasi IoT Presisi" 
                description="Pompa air dan sistem pengkabut otomatis menyala secara instan ketika sensor mendeteksi parameter lingkungan berada di bawah standar." 
              />
              <SolutionCard 
                className="flex-1"
                icon={BarChart3} 
                title="Monitoring Cerdas 24/7" 
                description="Kendalikan greenhouse dan pantau metrik lingkungan dari mana saja melalui Executive Dashboard interaktif." 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}