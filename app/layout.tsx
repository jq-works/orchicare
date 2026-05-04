import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { cn } from "@/lib/utils";

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OrchiCare | Solusi Budidaya Anggrek Presisi",
  description: "Sistem manajemen greenhouse berbasis IoT dan AI untuk mengoptimalkan pertumbuhan anggrek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("font-sans scroll-smooth", poppins.variable)}>
       <body 
         className={cn(poppins.className, "antialiased bg-background text-foreground font-sans")} 
         suppressHydrationWarning
       >
         <Providers>
           {/* Main Container */}
           <main className="min-h-screen">
             {children}
           </main>
         </Providers>
       </body>
     </html>
  );
}