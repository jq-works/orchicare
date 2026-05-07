"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function SolutionCard({ icon: Icon, title, description, className }: SolutionCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }} 
      transition={{ duration: 0.3 }} 
      className={`h-full ${className || ''}`}
    >
      <div className="p-6 md:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#00B377]/20 transition-all duration-500 relative overflow-hidden group h-full">
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B377]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-5 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#00B377] flex items-center justify-center text-white shadow-lg shadow-[#00B377]/20 group-hover:scale-110 transition-transform duration-500">
            <Icon size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-lg md:text-xl mb-2 tracking-tight group-hover:text-[#00B377] transition-colors">{title}</h4>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}