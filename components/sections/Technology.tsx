"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Radio, 
  CloudFog, 
  Cpu, 
  LayoutDashboard, 
  Smartphone,
  ChevronRight,
  Zap,
  Activity
} from "lucide-react";
import { CardLabel } from "../ui/CardLabel";
import { FlowStep } from "../ui/FlowStep";

export function Technology() {
  return (
    <section id="teknologi" className="py-24 relative overflow-hidden bg-white">
      {/* BACKGROUND DECORATIONS: High Detail */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Background Asset: Tech Circuits */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.05] grayscale">
          <Image 
            src="/tech_circuit_bg_asset_1778075527282.png" 
            alt="Decoration" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Section Blending Gradients */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

        {/* Dynamic Glassy Blobs (Repositioned to avoid cuts) */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-[#00B377]/5 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-[#E39EB9]/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        
        {/* SECTION HEADER: Fokus & Terpusat */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <CardLabel text="Siklus Kerja" isSolution />
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.1] tracking-tight mt-6 mb-4">
              <span className="text-[#00B377] [-webkit-text-stroke:6px_#fff] md:[-webkit-text-stroke:10px_#fff] [paint-order:stroke_fill] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Bagaimana OrchiCare
              </span>
              <br />
              <span className="text-[#E39EB9] [-webkit-text-stroke:6px_#fff] md:[-webkit-text-stroke:10px_#fff] [paint-order:stroke_fill] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Bekerja?
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-bold max-w-2xl mx-auto mt-4">
              Dari sensor hingga analitik cloud, OrchiCare memastikan setiap data diproses dengan presisi tinggi untuk kesehatan anggrek Anda.
            </p>
          </motion.div>
        </div>

        {/* ALUR PROSES (FLOW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative">
          <FlowStep 
            step="01" icon={Radio} title="Data Collection" 
            description="Sensor SHT31 & Soil Moisture mengambil data mikro-klimat."
          />
          <FlowStep 
            step="02" icon={CloudFog} title="Edge Processing" 
            description="ESP32 memproses data awal sebelum dikirim ke Cloud Secure Server."
          />
          <FlowStep 
            step="03" icon={Cpu} title="AI Analysis" 
            description="Jaringan Saraf Tiruan mengolah skor OHS dan prediksi kesehatan."
          />
          <FlowStep 
            step="04" icon={Smartphone} title="Smart Action" isLast
            description="Laporan dikirim ke Dashboard & sistem otomatis melakukan intervensi."
          />
        </div>

        {/* DETAIL HARDWARE & SOFTWARE: Unified Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* HARDWARE (OrchiNode IoT Hub) */}
          {/* HARDWARE (OrchiNode IoT Hub) - PINK THEME */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-white border-2 border-[#E39EB9]/10 flex flex-col h-full relative overflow-hidden group shadow-sm hover:shadow-xl hover:border-[#E39EB9]/20 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E39EB9]/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-125 duration-700" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <CardLabel text="Infrastruktur" />
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight mt-4">
                  OrchiNode <span className="text-[#E39EB9]">IoT Hub</span>
                </h3>
              </div>

              <p className="text-slate-600 font-bold leading-relaxed mb-8">
                Perangkat keras kelas industri yang dirancang untuk bertahan di lingkungan greenhouse yang lembap dan ekstrem.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-10">
                <div className="flex gap-4 items-start group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#E39EB9]/10 flex items-center justify-center text-[#E39EB9] shrink-0 group-hover/item:bg-[#E39EB9] group-hover/item:text-white transition-colors">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">Ultra-Low Power</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Optimasi deep-sleep untuk efisiensi baterai maksimal selama berbulan-bulan.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#E39EB9]/10 flex items-center justify-center text-[#E39EB9] shrink-0 group-hover/item:bg-[#E39EB9] group-hover/item:text-white transition-colors">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">Industrial Grade</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Casing IP66 tahan air dan korosi untuk perlindungan komponen total.</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto p-5 rounded-2xl bg-[#E39EB9]/5 border border-[#E39EB9]/10">
                <p className="text-[11px] text-[#E39EB9] font-mono italic">
                  {"// Firmware optimized for ultra low-latency & battery efficiency."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* SOFTWARE (OrchiCloud Dashboard) - GREEN THEME */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-white border-2 border-[#00B377]/10 flex flex-col h-full relative overflow-hidden group shadow-sm hover:shadow-xl hover:border-[#00B377]/20 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B377]/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-125 duration-700" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <CardLabel text="Pusat Kendali" isSolution />
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight mt-4">
                  OrchiCloud <span className="text-[#00B377]">Dashboard</span>
                </h3>
              </div>

              <p className="text-slate-600 font-bold leading-relaxed mb-8">
                Akses kendali penuh dan analitik kesehatan tanaman yang dapat diakses kapan saja dan di mana saja melalui perangkat favorit Anda.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-10">
                <div className="flex gap-4 items-start group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#00B377]/10 flex items-center justify-center text-[#00B377] shrink-0 group-hover/item:bg-[#00B377] group-hover/item:text-white transition-colors">
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">AI Health Scoring</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Pantau skor OHS real-time berdasarkan analitik jaringan saraf tiruan.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#00B377]/10 flex items-center justify-center text-[#00B377] shrink-0 group-hover/item:bg-[#00B377] group-hover/item:text-white transition-colors">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">Akses Multi-Platform</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Teroptimasi sempurna untuk Desktop, Tablet, hingga Smartphone (PWA).</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://orchicare-dashboard.vercel.app/dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-between w-full p-6 rounded-2xl bg-[#00B377] text-white font-black hover:bg-[#009966] transition-all group/btn shadow-xl shadow-[#00B377]/20 hover:-translate-y-1"
              >
                <span className="uppercase text-xs tracking-[0.2em]">Buka OrchiCloud Dashboard</span>
                <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}