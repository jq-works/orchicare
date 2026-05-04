import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ProblemCard({ icon: Icon, title, description, className }: ProblemCardProps) {
  return (
    <Card className={`h-full border border-[#E39EB9]/20 shadow-[0_4px_15px_rgba(0,0,0,0.03)] bg-white/60 backdrop-blur-md rounded-[2rem] overflow-hidden group hover:shadow-[0_8px_25px_rgba(227,158,185,0.15)] transition-all duration-500 hover:-translate-y-1 ${className || ''}`}>
      <CardContent className="p-5 md:p-6 flex gap-4 md:gap-5 items-start h-full">
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E39EB9]/10 border border-[#E39EB9]/20 flex items-center justify-center text-[#E39EB9] group-hover:bg-[#E39EB9] group-hover:text-white transition-all duration-300">
          <Icon size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 text-lg mb-1 tracking-tight">{title}</h4>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}