"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex w-full items-center bg-[#110408] overflow-hidden"
      id="hero"
    >
      {/* ── Background Layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Ambient glows */}
        <motion.div 
          className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-primary/25 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-rose-500/12 rounded-full blur-[140px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] bg-primary-dark/30 rounded-full blur-[100px]"></div>

        {/* Animated Grid */}
        <div className="absolute -inset-[100%] h-[300%] w-[300%] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid opacity-40"></div>

        {/* Floating particles */}
        <motion.div className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-primary/40 blur-[1px]" animate={{ y: [0, -40, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full bg-rose-400/30 blur-[2px]" animate={{ y: [0, 50, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="absolute bottom-[20%] left-[40%] w-4 h-4 rounded-full bg-white/10 blur-[2px]" animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.025] mix-blend-overlay"></div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 relative z-20 pt-40 pb-20 lg:pt-32 lg:pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-12 min-h-[85vh]">
          {/* ─── LEFT: Typography ─── */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white/80 text-[10px] md:text-xs font-label font-bold tracking-[0.2em] uppercase">
                Top vendeur sur ComeUp
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-headline text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-50 to-white filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                WAID-FINANCE
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.div
              className="font-body text-lg md:text-xl text-white/70 font-light leading-[1.8] max-w-2xl mb-10 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-white/90 font-medium text-[1.1rem] md:text-2xl leading-snug">
                Conseiller Financier · Expert en Tunnels de Vente & Landing Pages
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-rose-300/90 text-sm md:text-base mt-2">
                <span className="text-yellow-400 tracking-widest text-lg drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">★★★★★</span>
                <span className="font-medium">16 avis positifs</span>
                <span className="hidden md:inline text-white/40">•</span>
                <span className="opacity-90">Indice de performance maximal sur ComeUp</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-label font-black text-xs uppercase tracking-widest shadow-[0_10px_40px_rgba(109,26,43,0.4)] hover:shadow-[0_20px_60px_rgba(109,26,43,0.6)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative z-10">Voir mes services</span>
                <span className="relative z-10 material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/[0.04] text-white/80 font-label font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                Mon parcours
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-6 mt-14 pt-8 border-t border-white/[0.06]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-2 transition-transform">
                <span className="font-headline font-black text-2xl text-white">50+</span>
                <span className="font-label text-[9px] text-white/35 uppercase tracking-wider leading-tight">
                  Projets<br />livrés
                </span>
              </motion.div>
              <div className="w-px h-8 bg-white/10"></div>
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-2 transition-transform">
                <span className="font-headline font-black text-2xl text-white">100%</span>
                <span className="font-label text-[9px] text-white/35 uppercase tracking-wider leading-tight">
                  Clients<br />satisfaits
                </span>
              </motion.div>
              <div className="w-px h-8 bg-white/10"></div>
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-2 transition-transform">
                <span className="font-headline font-black text-2xl text-rose-300/80">5★</span>
                <span className="font-label text-[9px] text-white/35 uppercase tracking-wider leading-tight">
                  Note<br />ComeUp
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Portrait ─── */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end order-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Outer decorative ring */}
                <motion.div 
                  className="absolute -inset-6 rounded-[2.5rem] border border-primary/15 opacity-60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                {/* Secondary ring */}
                <motion.div 
                  className="absolute -inset-12 rounded-[3rem] border border-primary/[0.06] opacity-40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                ></motion.div>

              {/* Main frame */}
              <div className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] rounded-[2rem] overflow-visible group">
                {/* Gradient border glow */}
                <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-b from-primary/60 via-primary/20 to-rose-500/40 z-0 blur-[1px]"></div>

                {/* Inner container */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-[#110408] z-10 shadow-[0_20px_50px_rgba(109,26,43,0.3)]">
                  <img
                    src="/BIGBO.png"
                    alt="Waid Finance — Expert Tunnels de Vente"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110408] via-[#110408]/20 to-transparent pointer-events-none"></div>
                  {/* Side glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg z-20"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg z-20"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg z-20"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg z-20"></div>

                {/* Name tag at bottom of image */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 flex items-center justify-between">
                    <div>
                      <p className="font-headline font-black text-white text-sm tracking-tight">WAID FINANCE</p>
                      <p className="font-label text-[9px] text-white/40 uppercase tracking-widest">Expert Conversion</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

                {/* Floating certification badge */}
                <motion.div
                  className="absolute -top-6 -right-6 z-30"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-[0_8px_32px_rgba(109,26,43,0.5)] border border-primary/40">
                    <span className="material-symbols-outlined text-white text-xl">workspace_premium</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
