"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const servicesData = [
  {
    icon: "filter_alt",
    title: "Tunnel de Vente",
    subtitle: "Architecture de Profit",
    description:
      "Un système complet conçu pour transformer chaque visiteur en client fidèle. De la capture d'e-mail à l'upsell stratégique, tout est automatisé.",
    features: [
      "Audit de rentabilité & stratégie",
      "Copywriting de conversion complet",
      "Configuration technique (Systeme.io, etc.)",
      "Order Bump & Upsell optimisés",
      "Workflow d'automation e-mail",
    ],
    className: "lg:col-span-1",
  },
  {
    icon: "web_stories",
    title: "Landing Page",
    subtitle: "Précision Chirurgicale",
    description:
      "Une page unique dédiée à une seule action. Pour capturer des leads ou vendre un produit, chaque mot est pesé pour maximiser le CTR.",
    features: [
      "Analyse psychologique de la cible",
      "Structure copywriting AIDA / PAS",
      "Design épuré & focused",
      "Optimisation mobile & vitesse",
      "Test A/B & suivi analytique",
    ],
    className: "lg:col-span-1",
  },
  {
    icon: "account_balance",
    title: "Business Plan",
    subtitle: "Rigueur Bancaire",
    description:
      "Convaincre un investisseur ou une banque nécessite une rigueur absolue. Fort de mon expérience bancaire, je structure des dossiers implacables.",
    features: [
      "Modélisation financière sur 3-5 ans",
      "Étude de marché & positionnement",
      "Résumé exécutif à fort impact",
      "Dossier prêt-à-présenter (PDF/Print)",
      "Accompagnement pitch stratégique",
    ],
    className: "lg:col-span-2",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 relative bg-transparent z-10 overflow-hidden" id="services">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <FadeIn direction="right">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-primary"></span>
                <span className="font-label text-primary tracking-[0.3em] uppercase text-[10px] font-bold">Solutions Stratégiques</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-primary-dark tracking-tight leading-[1.1]">
                Trois services. <br />
                <span className="text-transparent bg-clip-text bordeaux-gradient">Une seule obsession.</span>
              </h2>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <p className="font-body text-xl text-on-surface/60 max-w-sm lg:text-right leading-relaxed font-light">
              Que chaque page construite travaille pour vous, même quand vous dormez. Pas de design futile, seulement de la conversion.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up" fullWidth>
              <div 
                className={`group relative h-full bg-white/40 backdrop-blur-xl border border-outline/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_30px_rgba(109,26,43,0.02)] transition-all duration-700 hover:shadow-[0_40px_100px_rgba(109,26,43,0.08)] hover:-translate-y-2 overflow-hidden ${service.className}`}
              >
                {/* Spotlight background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>

                <div className="relative z-10 flex flex-col md:flex-row lg:flex-col xl:flex-row gap-10 h-full">
                  
                  {/* Left Side: Icon & Meta */}
                  <div className="flex-shrink-0 md:w-1/3 xl:w-1/4">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-primary to-primary-dark shadow-[0_10px_30px_rgba(109,26,43,0.3)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <span className="material-symbols-outlined text-white text-3xl">
                        {service.icon}
                      </span>
                    </div>
                    
                    <h3 className="font-headline font-black text-2xl lg:text-3xl text-primary-dark tracking-tight mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-label text-[10px] uppercase tracking-[0.25em] text-primary/60 font-black mb-6">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Right Side: Content & List */}
                  <div className="flex-grow">
                    <p className="font-body text-lg text-on-surface/80 leading-relaxed mb-10 font-light border-l-2 border-primary/10 pl-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300">
                            <span className="material-symbols-outlined text-primary group-hover/item:text-white text-[12px] font-bold transition-colors duration-300">
                              check
                            </span>
                          </div>
                          <span className="font-body text-sm text-on-surface/80 group-hover/item:text-primary-dark transition-colors duration-300 font-medium tracking-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-75 transition-transform duration-700"></div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Global Action Link */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mt-20 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-4 text-primary-dark font-label font-black uppercase text-xs tracking-[0.3em] group"
            >
              <span className="relative">
                Discuter de votre projet
                <span className="absolute -bottom-2 left-0 w-full h-px bg-primary/40 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500"></span>
                <span className="absolute -bottom-2 right-0 w-full h-px bg-primary origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>
              <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:border-primary">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-500 text-sm">arrow_outward</span>
              </div>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
