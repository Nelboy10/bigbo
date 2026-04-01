"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

export default function Parcours() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const financeSkills = [
    "Analyse de rentabilité & modèles de revenus",
    "Psychologie des décideurs & investisseurs",
    "Exigence de présentation & structuration bancaire",
  ];

  const digitalSkills = [
    "Architectures de vente à haute conversion",
    "Copywriting psychologique & persuasif",
    "Automatisation & scalabilité digitale",
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden" 
      id="parcours"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-y-1/2 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Intro Tag & Headline */}
        <FadeIn direction="up">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="font-label text-primary tracking-[0.2em] uppercase text-[10px] font-bold bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-primary/10">
                La Singularité
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary-dark mb-8 leading-[1.1]">
              Et puis, le digital a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bordeaux-gradient">tout changé.</span>
            </h2>
            <p className="text-on-surface/70 font-body text-xl font-light leading-relaxed">
              J&apos;ai découvert que les mêmes leviers qui convainquent une banque de financer un projet 
              sont ceux qui poussent un prospect à l&apos;achat immédiat.
            </p>
          </div>
        </FadeIn>

        {/* The Pivot Layout */}
        <div className="relative mt-20 md:mt-28">
          {/* Central Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
            
            {/* Left Column: The Foundation (Finance) */}
            <div className="lg:pr-16 flex flex-col justify-center">
              <FadeIn direction="right" delay={0.2}>
                <div className="relative group">
                  <div className="bg-white/40 backdrop-blur-md border border-outline/30 p-8 md:p-10 rounded-[2.5rem] shadow-sm group-hover:shadow-md transition-all duration-500 hover:bg-white/60">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary-dark/5 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-dark text-2xl">account_balance</span>
                      </div>
                      <h3 className="font-headline text-2xl font-black text-primary-dark tracking-tight uppercase">
                        La Fondation <span className="text-primary/40 text-lg ml-2">Bancaire</span>
                      </h3>
                    </div>
                    
                    <ul className="space-y-6">
                      {financeSkills.map((skill, index) => (
                        <li key={index} className="flex items-start gap-4 group/li">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 group-hover/li:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-[16px]">priority_high</span>
                          </div>
                          <span className="font-body text-on-surface/80 text-lg leading-relaxed">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connecting Arrow Accent (Desktop) */}
                  <motion.div 
                    className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 rounded-full bordeaux-gradient border-4 border-background items-center justify-center shadow-lg z-20"
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <span className="material-symbols-outlined text-white text-lg font-bold">east</span>
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: The Performance (Digital) */}
            <div className="lg:pl-16 flex flex-col justify-center lg:pt-20">
              <FadeIn direction="left" delay={0.4}>
                <div className="relative group">
                  <div className="bg-primary-dark/5 backdrop-blur-md border border-primary/10 p-8 md:p-10 rounded-[2.5rem] shadow-sm group-hover:shadow-lg transition-all duration-500 hover:bg-primary-dark/[0.08]">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl">rocket_launch</span>
                      </div>
                      <h3 className="font-headline text-2xl font-black text-primary-dark tracking-tight uppercase">
                        La Performance <span className="text-primary/40 text-lg ml-2">Digitale</span>
                      </h3>
                    </div>
                    
                    <ul className="space-y-6">
                      {digitalSkills.map((skill, index) => (
                        <li key={index} className="flex items-start gap-4 group/li">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                            <span className="material-symbols-outlined text-white text-[16px]">check</span>
                          </div>
                          <span className="font-body text-primary-dark text-lg font-medium leading-relaxed">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Corner Accent (Growth) */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-rose-200/20 blur-2xl rounded-full -z-10 group-hover:bg-rose-200/40 transition-colors"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Closing Strategic Statement */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mt-32 text-center max-w-4xl mx-auto relative group">
            {/* Quote Marks Decorative */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <span className="font-headline text-[12rem] text-primary select-none opacity-50">&quot;</span>
            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-outline/20 p-10 md:p-14 rounded-[3rem] shadow-[0_32px_64px_rgba(109,26,43,0.06)] relative z-10 overflow-hidden">
              {/* Internal glow */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-[60px]"></div>
              
              <p className="font-body text-2xl md:text-3xl text-primary-dark font-medium leading-relaxed italic relative z-10">
                &quot;Mon approche n&apos;est pas créative au sens artistique. Elle est{" "}
                <span className="text-transparent bg-clip-text bordeaux-gradient font-black not-italic relative inline-block">
                  stratégique, chiffrée
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 -z-10"></span>
                </span>{" "}
                et orientée résultat.&quot;
              </p>
              
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="h-px w-8 bg-primary/20"></div>
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface/40 font-bold">Waid Finance Strategy</span>
                <div className="h-px w-8 bg-primary/20"></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
