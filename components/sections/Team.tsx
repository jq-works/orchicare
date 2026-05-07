"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardLabel } from "../ui/CardLabel";

const team = [
  {
    name: "Mochammad Dzaky Azzam",
    role: "Hacker",
    desc: "Arsitek sistem OrchiCare. Spesialis hardware IoT, jaringan sensor mikroklimat, dan algoritma ML untuk presisi data.",
    image: "/images/dzaky.jpg",
    socials: {
      github: "https://github.com/jq-works",
      linkedin: "#",
      instagram: "https://instagram.com/dzaky.mdaaaa"
    }
  },
  {
    name: "Danish Satria Indie",
    role: "Hipster",
    desc: "Maestro pengalaman pengguna. Merancang dashboard intuitif, chatbot NLP, dan visualisasi data bagi pembudidaya.",
    image: "/images/danish.jpg",
    socials: {
      github: "https://github.com/DanishSatria",
      linkedin: "",
      instagram: "https://instagram.com/danisshsi"
    }
  }
];

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Team() {
  return (
    <section id="tim" className="py-24 relative overflow-hidden bg-white">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#00B377]/5 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#E39EB9]/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <CardLabel text="Profil Tim" />
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.1] tracking-tight mt-6 mb-4">
              <span className="text-[#00B377] [-webkit-text-stroke:6px_#fff] md:[-webkit-text-stroke:10px_#fff] [paint-order:stroke_fill] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Penggerak
              </span>
              <br />
              <span className="text-[#E39EB9] [-webkit-text-stroke:6px_#fff] md:[-webkit-text-stroke:10px_#fff] [paint-order:stroke_fill] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Masa Depan
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-bold max-w-2xl mx-auto mt-4">
              Duo inovator dari SMK Telkom Malang yang berdedikasi memajukan agroteknologi Indonesia melalui teknologi digital.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 hover:border-[#00B377]/20 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 transition-colors group-hover:bg-[#00B377]/5" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                  <div className="absolute inset-0 bg-[#00B377]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-110" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-slate-800 mb-2">{member.name}</h3>
                <p className="text-[#00B377] font-black text-xs mb-4 uppercase tracking-[0.2em]">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium max-w-xs">{member.desc}</p>
                
                <div className="flex justify-center gap-4">
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1">
                    <GithubIcon />
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-400 hover:text-white hover:bg-[#0077b5] shadow-sm transition-all duration-300 hover:-translate-y-1">
                    <LinkedinIcon />
                  </a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-400 hover:text-white hover:bg-gradient-to-tr from-[#f9ce67] via-[#e1306c] to-[#833ab4] shadow-sm transition-all duration-300 hover:-translate-y-1">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}