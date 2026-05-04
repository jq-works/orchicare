import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkHubButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
  isPrimary?: boolean;
}

export function LinkHubButton({ icon, label, href, isPrimary = false }: LinkHubButtonProps) {
  return (
    <Button
      asChild
      className={`
        w-full h-auto py-4 px-6 flex justify-start items-center gap-4 
        rounded-2xl text-lg font-semibold transition-all shadow-sm hover:-translate-y-1 hover:shadow-md
        ${isPrimary 
          ? "bg-orchi-base text-white hover:bg-orchi-dark border-transparent" 
          : "bg-white text-orchi-dark border-2 border-orchi-light hover:border-orchi-base"
        }
      `}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`p-2 rounded-xl ${isPrimary ? "bg-white/20" : "bg-orchi-light/50"}`}>
          {icon}
        </div>
        <span className="flex-1 text-left">{label}</span>
        {/* Panah kecil di kanan */}
        <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </Button>
  );
}