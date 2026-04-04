"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#110408]" id="contact">
      
      {/* Cinematic Background Elements (Mirroring Hero) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft colored glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] z-0 opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] z-0"></div>

        {/* The Grid - Linking back to the start */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
        
        {/* Cinematic Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Impact Copy */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-3 mb-8 bg-primary/20 border border-primary/30 px-5 py-2 rounded-full shadow-[0_0_30px_rgba(109,26,43,0.3)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
                <span className="text-white text-[10px] md:text-xs font-label font-bold tracking-[0.3em] uppercase">
                  Prêt pour la croissance ?
                </span>
              </div>
              
              <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[1.05]">
                Ne concevez pas un site. <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-100 to-rose-300">
                  Investissez dans un système.
                </span>
              </h2>
              
              <p className="font-body text-xl text-white/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
                Le passage à l&apos;action est le seul levier qui transforme une stratégie en profit. 
                Discutons de vos objectifs et construisons votre machine à convertir.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-white/40 font-label text-[10px] uppercase tracking-widest font-black">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#110408] bg-primary-dark overflow-hidden ring-1 ring-white/10">
                         <img src={`https://xsgames.co/randomusers/assets/avatars/male/${i + 20}.jpg`} alt="Client" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
                 <p>Disponibilité limitée — <span className="text-emerald-400">Avril 2026</span></p>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: High-End Contact Card */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <FadeIn direction="left" delay={0.3}>
              <div className="relative group">
                {/* Visual Depth Frame */}
                <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] border border-primary/20 blur-sm group-hover:bg-primary/15 transition-all duration-700"></div>
                
                <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.4)] max-w-lg w-full overflow-hidden">
                   {/* Animated Background Flow */}
                   <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
                   
                   <div className="relative z-10">
                      <h3 className="font-headline font-black text-2xl text-white mb-4 tracking-tight uppercase">
                        Demande de <span className="text-rose-300">consultation</span>
                      </h3>
                      <p className="font-body text-white/50 text-[15px] mb-10 leading-relaxed">
                        Expertise hybride Finance & Digital. Analyse de votre tunnel actuel ou création 
                        ex nihilo de votre stratégie de conversion.
                      </p>

                      <div className="space-y-4">
                        <a 
                          href="https://comeup.com/fr/@waid-finance" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between group/btn px-8 py-6 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-400 hover:from-rose-500 hover:to-rose-300 transition-all duration-500 shadow-[0_15px_40px_rgba(225,29,72,0.25)] hover:shadow-[0_20px_60px_rgba(225,29,72,0.45)] hover:-translate-y-1"
                        >
                          <div className="flex flex-col items-start translate-x-0 group-hover/btn:translate-x-1 transition-transform">
                             <span className="font-label text-[10px] font-black uppercase tracking-widest text-white/80">Collaborer sur</span>
                             <span className="font-headline text-xl font-black text-white">ComeUp Profil</span>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover/btn:bg-white/40 transition-colors">
                             <span className="material-symbols-outlined text-white">north_east</span>
                          </div>
                        </a>

                        <a 
                          href="mailto:contact@waidportfolio.com" 
                          className="flex items-center justify-between px-8 py-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-white/20"
                        >
                          <div className="flex flex-col items-start">
                             <span className="font-label text-[10px] font-black uppercase tracking-widest text-white/40">Ou par</span>
                             <span className="font-headline text-lg font-extrabold text-white">E-mail Direct</span>
                          </div>
                          <span className="material-symbols-outlined text-white/30 text-2xl group-hover:text-white/60 transition-colors">mail</span>
                        </a>
                      </div>

                      <div className="mt-12 pt-8 border-t border-white/5 text-center">
                         <p className="font-label text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">
                           Réponse sous 24 heures — Expertise Garantie
                         </p>
                      </div>
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
