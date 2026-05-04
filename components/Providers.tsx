"use client";

// Di HeroUI v3, HeroUIProvider telah dihapus. 
// Gunakan RouterProvider untuk integrasi navigasi Next.js.
import { RouterProvider } from "@heroui/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      {children}
    </RouterProvider>
  );
}