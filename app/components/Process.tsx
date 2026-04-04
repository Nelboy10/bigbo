"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Diagnostic Radical",
    subtitle: "Ne devinez plus, analysez.",
    description:
      "On décortique vos datas, vos pages actuelles et vos concurrents. J'identifie les points de fuite où vous perdez de l'argent et définis la stratégie exacte d'optimisation.",
    icon: "troubleshoot",
  },
  {
    number: "02",
    title: "L'Angle & Le Copywriting",
    subtitle: "Les mots qui vendent.",
    description:
      "La page n'est qu'un contenant, le vrai produit c'est le message. Je rédige l'intégralité du texte avec une structure psychologique faite pour briser les objections.",
    icon: "edit_note",
  },
  {
    number: "03",
    title: "Architecture & Intégration",
    subtitle: "Pixel perfect.",
    description:
      "Le texte prend forme. Je conçois une interface ultra-rapide et ergonomique, avec un tracking impeccable pour que vous récupériez vos data.",
    icon: "code",
  },
  {
    number: "04",
    title: "Tests & Lancement",
    subtitle: "La vérité du marché.",
    description:
      "On lance, on récolte les data (Heatmaps, Taux de conversion), on ajuste ce qui doit l'être jusqu'à atteindre l'indice de performance prévu.",
    icon: "rocket_launch",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden"
      id="process"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <FadeIn direction="right">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-primary"></span>
                <span className="font-label text-primary tracking-[0.3em] uppercase text-[10px] font-bold">
                  La Méthode
                </span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-primary-dark tracking-tight leading-[1.1]">
                Mon Process.{" "}
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bordeaux-gradient">
                  4 étapes. 0 surprise.
                </span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <p className="font-body text-xl text-on-surface/60 max-w-sm lg:text-right leading-relaxed font-light">
              Un cadre méthodique, précis et transparent. Vous savez exactement
              ce qui se passe à chaque instant.
            </p>
          </FadeIn>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent"></div>

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.15} direction="up" fullWidth>
                <div className="group relative flex flex-col lg:flex-row items-start gap-8 lg:gap-14">
                  {/* Step Number Node */}
                  <div className="relative z-20 shrink-0">
                    <div className="w-[120px] h-[120px] rounded-[2rem] bg-white/60 backdrop-blur-xl border border-outline/30 flex flex-col items-center justify-center shadow-sm group-hover:shadow-lg group-hover:bg-white/80 transition-all duration-500 group-hover:-translate-y-1">
                      <span className="font-headline font-black text-3xl text-transparent bg-clip-text bordeaux-gradient leading-none">
                        {step.number}
                      </span>
                      <span className="material-symbols-outlined text-primary/40 text-2xl mt-2 group-hover:text-primary transition-colors">
                        {step.icon}
                      </span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="flex-grow bg-white/40 backdrop-blur-xl border border-outline/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_30px_rgba(109,26,43,0.02)] group-hover:shadow-[0_30px_80px_rgba(109,26,43,0.06)] transition-all duration-500 group-hover:-translate-y-1 overflow-hidden relative">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
                        <h3 className="font-headline text-2xl lg:text-3xl font-black text-primary-dark tracking-tight">
                          {step.title}
                        </h3>
                        <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 w-fit">
                          {step.subtitle}
                        </span>
                      </div>
                      <p className="font-body text-lg text-on-surface/70 leading-relaxed font-light max-w-2xl">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/15 to-transparent scale-x-0 group-hover:scale-x-75 transition-transform duration-700 origin-center"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
