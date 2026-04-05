"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FadeIn from "./FadeIn";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const skills = [
    "Systeme.io Expert",
    "ClickFunnels",
    "Fullstack Dev",
    "Copywriting FR",
    "Email Automation",
    "CRO & Tracking",
  ];

  const stats = [
    { value: 5, suffix: "+", label: "Années d'expérience" },
    { value: 50, suffix: "+", label: "Projets livrés" },
    { value: 98, suffix: "%", label: "Clients satisfaits" },
  ];

  return (
    <section ref={sectionRef} className="relative z-10 overflow-hidden" id="about">

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PART 1 — Dark editorial intro (Portrait + Name/Bio)   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-b from-[#110408] via-[#1a0a10] to-[#200e14] py-28 md:py-36 px-6 md:px-12 overflow-hidden">

        {/* Subtle grid background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
          <div className="absolute -inset-[50%] h-[200%] w-[200%] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

            {/* ─── LEFT: Portrait ─── */}
            <div className="lg:w-[42%] w-full flex justify-center lg:justify-start">
              <FadeIn direction="right" delay={0.15}>
                <div className="relative">
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute -inset-5 rounded-[2.5rem] border border-primary/20"
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />

                  {/* Image frame */}
                  <div className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] rounded-[2rem] overflow-hidden group">
                    {/* Gradient border */}
                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-b from-primary/50 via-primary/15 to-rose-500/30 z-0"></div>

                    <div className="absolute inset-[1px] rounded-[2rem] overflow-hidden bg-[#110408] z-10">
                      <img
                        src="/BIGBO.png"
                        alt="Waid Finance — Expert Tunnels de Vente"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Bottom fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#110408]/70 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-7 h-7 border-t-2 border-l-2 border-primary/50 rounded-tl-xl z-20"></div>
                    <div className="absolute top-2 right-2 w-7 h-7 border-t-2 border-r-2 border-primary/50 rounded-tr-xl z-20"></div>
                    <div className="absolute bottom-2 left-2 w-7 h-7 border-b-2 border-l-2 border-primary/50 rounded-bl-xl z-20"></div>
                    <div className="absolute bottom-2 right-2 w-7 h-7 border-b-2 border-r-2 border-primary/50 rounded-br-xl z-20"></div>
                  </div>

                  {/* Floating "Licence Pro" card */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 md:-right-10 z-30"
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                  >
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-[220px]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="font-label text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">Certifié</span>
                      </div>
                      <p className="font-headline font-extrabold text-white text-sm leading-tight mb-1">LICENCE PRO</p>
                      <p className="font-body text-[11px] text-white/45 leading-relaxed">Gestion des Établissements Financiers</p>
                    </div>
                  </motion.div>

                  {/* Icon accent top-left */}
                  <motion.div
                    className="absolute -top-4 -left-4 z-30"
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-[0_8px_32px_rgba(109,26,43,0.4)] border border-primary/50">
                      <span className="material-symbols-outlined text-white text-lg">payments</span>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            {/* ─── RIGHT: Name, Bio, Skills, CTA ─── */}
            <div className="lg:w-[58%] w-full flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* Tag */}
              <FadeIn direction="up" delay={0.2}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10 bg-primary/50"></div>
                  <span className="font-label text-[11px] font-bold uppercase tracking-[0.3em] text-rose-300/80">À Propos</span>
                  <div className="h-px w-10 bg-primary/50"></div>
                </div>
              </FadeIn>

              {/* Big Name Headline */}
              <FadeIn direction="up" delay={0.3}>
                <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                  Waid,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-100 to-rose-300">
                    dit{" "}
                  </span>
                  <span className="font-body italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-100 to-rose-300">
                    Finance.
                  </span>
                </h2>
              </FadeIn>

              {/* Bio paragraph */}
              <FadeIn direction="up" delay={0.4}>
                <p className="font-body text-lg md:text-xl text-white/60 leading-[1.8] font-light max-w-lg mb-12">
                  Développeur Fullstack et expert tunnels de vente depuis 2022.
                  J&apos;ai accompagné plus de 50 entrepreneurs — du coaching à
                  l&apos;e-commerce — avec un seul objectif :{" "}
                  <span className="text-white/90 font-medium">
                    transformer votre trafic en revenu réel et automatisé.
                  </span>
                </p>
              </FadeIn>

              {/* Skill Capsules */}
              <FadeIn direction="up" delay={0.5}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-14">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm text-white/80 font-label text-xs font-bold tracking-wide hover:bg-primary/20 hover:border-primary/40 hover:text-white transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, y: 12 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                      transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </FadeIn>

              {/* CTA Button */}
              <FadeIn direction="up" delay={0.65}>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-label font-black text-sm uppercase tracking-widest shadow-[0_10px_40px_rgba(109,26,43,0.35)] hover:shadow-[0_20px_60px_rgba(109,26,43,0.5)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Hover shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                  <span className="relative z-10">Travailler avec moi</span>
                  <span className="relative z-10 material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PART 2 — Stats Bar (Bridging dark → light)            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-b from-[#200e14] to-background pt-0 pb-8 z-20">
        <div className="max-w-5xl mx-auto px-6 -mt-8">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white/90 backdrop-blur-xl rounded-[1.5rem] border border-outline/30 shadow-[0_20px_80px_rgba(109,26,43,0.08)] p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-outline/20">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4">
                  <span className="font-headline font-black text-4xl md:text-5xl text-transparent bg-clip-text bordeaux-gradient mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PART 3 — Three Pillars (light background)             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="bg-background pt-16 pb-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h3 className="font-headline text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
                Ce que la banque m&apos;a{" "}
                <span className="text-transparent bg-clip-text bordeaux-gradient">enseigné</span>
              </h3>
              <p className="font-body text-on-surface/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Trois piliers fondamentaux qui transforment chaque tunnel de vente en machine de conversion.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "account_balance",
                title: "Rigueur Bancaire",
                description: "L'exigence du secteur financier appliquée à chaque pixel de votre tunnel.",
              },
              {
                icon: "query_stats",
                title: "Analyse Financière",
                description: "Des modèles de projection et des KPIs qui transforment vos données en décisions.",
              },
              {
                icon: "psychology",
                title: "Vision Stratégique",
                description: "Chaque projet est pensé comme un investissement avec un ROI mesurable.",
              },
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="up" fullWidth>
                <div className="group relative h-full bg-surface-card/80 backdrop-blur-md border border-outline/20 rounded-[1.5rem] p-8 md:p-10 hover:shadow-[0_30px_80px_rgba(109,26,43,0.06)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem]"></div>
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-colors duration-300">
                      <span className="material-symbols-outlined text-primary text-2xl">{pillar.icon}</span>
                    </div>
                    <h4 className="font-headline font-bold text-xl text-primary-dark mb-3 tracking-tight">{pillar.title}</h4>
                    <p className="font-body text-on-surface/65 text-[15px] leading-relaxed">{pillar.description}</p>
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
