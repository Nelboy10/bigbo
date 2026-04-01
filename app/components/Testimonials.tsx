"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Thomas D.",
    role: "Fondateur E-commerce",
    content: "Mon taux de conversion a doublé en littéralement 48h. L'approche n'a rien à voir avec les templates qu'on voit partout. L'interface est épurée mais le copywriting tape incroyablement fort.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/51.jpg",
    rating: 5,
    tag: "High Conversion"
  },
  {
    id: 2,
    name: "Sarah L.",
    role: "Consultante Senior",
    content: "Waid a compris mon positionnement haut de gamme immédiatement. La landing page respire l'expertise. C'est la première fois qu'un prestataire livre avant la date prévue avec une telle qualité.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/24.jpg",
    rating: 5,
    tag: "Premium Quality"
  },
  {
    id: 3,
    name: "Marc V.",
    role: "Coach en investissement",
    content: "Mes appels découvertes ont fait x3 depuis la mise en ligne du tunnel. Je n'ai plus besoin de convaincre, la page le fait pour moi. La structuration du message est redoutable.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    rating: 5,
    tag: "ROI Focused"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden" id="avis">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
               <span className="font-label text-primary tracking-[0.4em] uppercase text-[10px] font-black">Social Proof</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary-dark mb-6 leading-[1.1]">
              Ce que mes <span className="text-transparent bg-clip-text bordeaux-gradient">clients disent.</span>
            </h2>
            <p className="font-body text-xl text-on-surface/60 font-light max-w-2xl mx-auto leading-relaxed">
              16 commandes complétées. 100% de satisfaction. <span className="text-primary font-medium italic">Un indice de performance maximal.</span>
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Grid (High-End Mosaic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.2} direction="up" fullWidth>
              <div className="group relative bg-white/60 backdrop-blur-xl border border-outline/30 rounded-[2.5rem] p-10 shadow-[0_4px_30px_rgba(109,26,43,0.02)] transition-all duration-700 hover:shadow-[0_40px_100px_rgba(109,26,43,0.08)] hover:-translate-y-2 flex flex-col h-full">
                
                {/* Quote Icon Accent */}
                <div className="absolute top-8 right-10 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                  <Quote size={60} className="text-primary" />
                </div>

                <div className="relative z-10 mb-auto">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  
                  {/* Testimonial Tag */}
                  <div className="inline-block px-3 py-1 bg-primary/5 rounded-full border border-primary/10 mb-6">
                    <span className="font-label text-[9px] font-bold uppercase tracking-widest text-primary">
                      {testimonial.tag}
                    </span>
                  </div>

                  <p className="font-body text-lg text-on-surface/90 leading-relaxed font-light italic mb-12 border-l-2 border-primary/10 pl-6 group-hover:border-primary transition-colors duration-500">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="relative z-10 flex items-center gap-4 mt-8 pt-8 border-t border-outline/20">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm ring-4 ring-primary/5">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Verified badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                       <span className="material-symbols-outlined text-white text-[10px] font-bold">check</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-headline font-extrabold text-primary-dark tracking-tight leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="font-label text-[10px] font-bold text-on-surface/40 uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Card glow hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]"></div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Global Social Proof Logic Bar */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 pb-12">
            <span className="font-headline font-black text-2xl tracking-tighter text-primary-dark">COMEUP <span className="text-primary">TOP RATED</span></span>
            <div className="h-4 w-px bg-outline/40 hidden md:block"></div>
            <span className="font-label font-bold tracking-[0.3em] uppercase text-xs text-primary-dark">Stratégie Bancaire Appliquée</span>
            <div className="h-4 w-px bg-outline/40 hidden md:block"></div>
            <span className="font-headline font-black text-2xl tracking-tighter text-primary-dark">100% <span className="text-primary">FIABILITÉ</span></span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
