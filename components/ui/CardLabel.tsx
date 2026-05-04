export function CardLabel({ text, isSolution }: { text: string; isSolution?: boolean }) {
  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.15em] mb-4 shadow-sm border ${
      isSolution 
        ? "bg-[#00B377]/10 text-[#00B377] border-[#00B377]/20" 
        : "bg-[#E39EB9]/10 text-[#E39EB9] border-[#E39EB9]/20"
    }`}>
      {text}
    </span>
  );
}