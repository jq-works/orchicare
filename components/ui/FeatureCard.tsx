import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "problem" | "solution";
}

export function FeatureCard({ icon, title, description, variant = "solution" }: FeatureCardProps) {
  return (
    <div className={`
      p-6 rounded-2xl border bg-white transition-all hover:shadow-lg
      ${variant === "problem" 
        ? "border-red-100 hover:border-red-300" 
        : "border-orchi-light hover:border-orchi-base"
      }
    `}>
      <div className={`
        w-14 h-14 rounded-2xl flex items-center justify-center mb-6
        ${variant === "problem" ? "bg-red-50 text-red-500" : "bg-orchi-light/30 text-orchi-base"}
      `}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}