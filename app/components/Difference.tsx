"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const differences = [
  {
    number: "01",
    title: "Analyse Financière Appliquée",
    description: "Là où d'autres voient du design, je vois des flux de trésorerie. J'applique l'exigence bancaire à l'architecture de vos tunnels pour maximiser la LTV.",
    highlight: "Rentabilité accrue"
  },
  {
    number: "02",
    title: "Copywriting de Précision",
    description: "Les belles paroles ne paient pas. J'utilise la psychologie humaine et une argumentation implacable pour transformer le skepticisme en investissement.",
    highlight: "Conversion chirurgicale"
  },
  {
    number: "03",
    title: "Architecture Minimaliste",
    description: "Je combats la surcharge cognitive. Un visiteur confus n'achète jamais. Mes pages dirigent l'œil avec une autorité naturelle vers l'action.",
    highlight: "Zéro friction"
  },
  {
    number: "04",
    title: "Pari sur l'Éthique & Clarté",
    description: "Je refuse les tactiques manipulatrices. La vraie conversion se construit sur la confiance et une proposition de valeur réelle, solide et durable.",
    highlight: "Confiance long-terme"
  },
  {
    number: "05",
    title: "L'Obsession du ROI",
    description: "Une belle page est inutile si elle ne performe pas. Mon unique indicateur de succès est le CA généré. Pas les likes, pas les impressions : les ventes.",
    highlight: "Focus résultats"
  }
];

export default function Difference() {
  return (
    <section className="py-32 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden" id="difference">
      {/* Background Decorative Grid Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(109,26,43,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(109,26,43,0.5)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Sticky Left Sidebar Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="font-label text-primary tracking-[0.3em] uppercase text-[10px] font-bold px-3 py-1 bg-primary/5 rounded-full border border-primary/10">Ma Différence</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary-dark mb-8 leading-[1.1]">
                Pourquoi me <br />
                <span className="text-transparent bg-clip-text bordeaux-gradient">choisir.</span>
              </h2>
              <p className="font-body text-xl text-on-surface/60 font-light leading-relaxed mb-10">
                Ce n'est pas de la magie. C'est une méthode rigoureuse héritée de la finance, appliquée à la psychologie de vente moderne.
              </p>
              
              <div className="flex flex-col gap-6 border-t border-outline/20 pt-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm font-bold">verified_user</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm text-primary-dark uppercase tracking-tight">Expertise Hybride</p>
                    <p className="font-body text-[13px] text-on-surface/60">Finance & Digital Growth</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Scrolling Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {differences.map((diff, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" fullWidth>
                <div className={`group relative h-full bg-white/40 backdrop-blur-xl border border-outline/30 rounded-[2.5rem] p-10 shadow-[0_4px_30px_rgba(109,26,43,0.02)] transition-all duration-500 hover:shadow-[0_40px_100px_rgba(109,26,43,0.06)] hover:-translate-y-2 flex flex-col justify-between overflow-hidden ${index === 4 ? 'md:col-span-2' : ''}`}>
                  
                  {/* Decorative number accent */}
                  <div className="absolute -top-10 -right-10 text-[10rem] font-black text-primary/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors">
                    {diff.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                       <span className="font-headline font-black text-3xl text-primary/30 group-hover:text-primary transition-colors">
                        {diff.number}
                       </span>
                       <h4 className="font-headline font-extrabold text-xl lg:text-2xl text-primary-dark tracking-tight leading-tight">
                        {diff.title}
                       </h4>
                    </div>
                    
                    <p className="font-body text-lg text-on-surface/70 leading-relaxed font-light mb-12">
                      {diff.description}
                    </p>
                  </div>

                  {/* Card bottom tag */}
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                    <span className="font-label text-[10px] font-bold text-on-surface/40 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                      {diff.highlight}
                    </span>
                  </div>

                  {/* Gradient corner hover */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-br-[2.5rem]"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
