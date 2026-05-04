"use client";

import { motion } from "framer-motion";

interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.08, y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col cursor-default"
    >
      <span className="text-3xl md:text-4xl font-black text-green-900 tracking-tighter drop-shadow-sm">
        {value}
      </span>
      <span className="text-xs md:text-sm font-bold text-green-800/80 leading-snug mt-1 capitalize tracking-wide max-w-[120px]">
        {label}
      </span>
    </motion.div>
  );
}