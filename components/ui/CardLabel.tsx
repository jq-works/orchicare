export function CardLabel({ text, isSolution, className }: { text: string; isSolution?: boolean; className?: string }) {
  return (
    <span className={`inline-block px-5 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-4 shadow-sm border transition-all ${
      isSolution 
        ? "bg-[#00B377]/10 text-[#00B377] border-[#00B377]/20" 
        : "bg-[#E39EB9]/10 text-[#E39EB9] border-[#E39EB9]/20"
    } ${className || ""}`}>
      {text}
    </span>
  );
}