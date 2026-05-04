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
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className={`h-full ${className || ''}`}>
      <Card className="border border-white/20 bg-[#00B377] text-white rounded-[2rem] shadow-[0_4px_15px_rgba(0,179,119,0.15)] relative overflow-hidden group h-full hover:shadow-[0_8px_25px_rgba(0,179,119,0.3)] transition-all duration-500">
        {/* Efek Pendaran Cahaya (Glossy) */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/20 rounded-full blur-[40px] group-hover:bg-white/30 group-hover:scale-150 transition-all duration-700" />
        
        <CardContent className="p-5 md:p-6 relative z-10 flex gap-4 md:gap-5 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-[#00B377] transition-all duration-300 shadow-inner">
            <Icon size={24} className="drop-shadow-sm transition-colors duration-300" />
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-1 tracking-tight drop-shadow-sm">{title}</h4>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}