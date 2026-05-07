import { LucideIcon } from "lucide-react";

interface FlowStepProps {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function FlowStep({ icon: Icon, step, title, description, isLast }: FlowStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Konektor Garis (Hanya untuk Desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#00B377]/20 to-transparent z-0" />
      )}
      
      <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-[2.5rem] bg-white border border-slate-100 flex items-center justify-center text-[#00B377] shadow-xl shadow-slate-200/50 mb-8 group-hover:border-[#00B377]/30 group-hover:shadow-2xl group-hover:shadow-[#00B377]/10 transition-all duration-500 hover:-translate-y-2">
        <Icon size={32} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-[#00B377] text-white text-[10px] font-black flex items-center justify-center border-4 border-white shadow-lg">
          {step}
        </div>
      </div>
      
      <h4 className="text-lg md:text-xl font-black text-slate-800 mb-3 tracking-tight group-hover:text-[#00B377] transition-colors">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed max-w-[220px] font-medium">{description}</p>
    </div>
  );
}