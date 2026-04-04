"use client";

import FadeIn from "./FadeIn";

const projectsData = [
  {
    category: "Landing Page & Funnel",
    title: "RESET Programme",
    description: "Une masterclass de copywriting pour un programme de reprogrammation mentale. Optimisation de la structure pour maximiser la conversion et incarner l'autorité scientifique.",
    metric: "Conversion Top Tier",
    url: "https://bigbo.systeme.io/7d6087a6",
    type: "Lien externe",
    icon: "psychology",
  },
  {
    category: "Lead Gen & Quiz",
    title: "Cinéaste Profiler",
    description: "Tunnel de capture interactif conçu pour engager et segmenter une audience mature. Qualification des leads à travers un parcours fluide sans friction.",
    metric: "Acquisition ciblée",
    url: "https://bigbo.systeme.io/16ccff74",
    type: "Lien externe",
    icon: "movie",
  },
  {
    category: "Executive Summary",
    title: "Dossiers & BP",
    description: "Conception de dossiers de présentation et pitch decks PDF architecturés pour investir banques et collaborateurs. La rigueur financière au service du design.",
    metric: "Rigueur Bancaire",
    url: "#contact",
    type: "Fichiers PDF",
    icon: "picture_as_pdf",
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-12 relative bg-transparent z-10 overflow-hidden" id="realisations">
      {/* Background visual accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <FadeIn direction="right">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-primary"></span>
                <span className="font-label text-primary tracking-[0.3em] uppercase text-[10px] font-bold">L'Excellence en Action</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-primary-dark tracking-tight leading-[1.1]">
                Projets Réalisés. <br />
                <span className="text-transparent bg-clip-text bordeaux-gradient">La preuve par l'impact.</span>
              </h2>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <p className="font-body text-xl text-on-surface/60 max-w-sm md:text-right leading-relaxed font-light">
              Des funnels haute conversion aux dossiers de présentation implacables. Un échantillon de l'expertise déployée.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up" fullWidth>
              <a 
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : "_self"}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : ""}
                className="group relative h-full flex flex-col bg-white/40 backdrop-blur-xl border border-outline/30 rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_30px_rgba(109,26,43,0.02)] transition-all duration-700 hover:shadow-[0_40px_100px_rgba(109,26,43,0.08)] hover:-translate-y-2 overflow-hidden block cursor-pointer"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Top: Icon & Category */}
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-white to-white/60 border border-outline/20 shadow-sm flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark transition-all duration-500 group-hover:scale-110">
                      <span className="material-symbols-outlined text-primary-dark group-hover:text-white transition-colors duration-500 text-3xl">
                        {project.icon}
                      </span>
                    </div>
                    <div className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                       <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                         {project.type}
                       </span>
                    </div>
                  </div>

                  {/* Body: Content */}
                  <div className="flex-grow">
                    <p className="font-label text-[10px] uppercase tracking-[0.25em] text-primary/60 font-black mb-4">
                      {project.category}
                    </p>
                    <h3 className="font-headline font-black text-xl lg:text-2xl text-primary-dark tracking-tight mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-body text-base text-on-surface/80 border-l-2 border-primary/10 pl-5 leading-relaxed font-light mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom: Action/Metric */}
                  <div className="mt-auto pt-6 border-t border-outline/20 flex items-center justify-between">
                    <span className="font-label text-[10px] font-black text-primary-dark/80 tracking-[0.1em] uppercase">
                      {project.metric}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:border-primary">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-500 text-sm">
                        arrow_outward
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-75 transition-transform duration-700"></div>
              </a>
            </FadeIn>
          ))}
        </div>
        
        {/* Aesthetic filler note */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mt-20 text-center">
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface/40 font-bold">
              Certains projets plus confidentiels (PDF / BP) ne sont présentés que sur demande.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
