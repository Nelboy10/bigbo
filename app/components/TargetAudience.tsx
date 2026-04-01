import FadeIn from "./FadeIn";

const criteria = [
  {
    icon: "trending_down",
    text: "Vous avez une offre de qualité mais votre page ne convertit pas comme vous le voudriez.",
  },
  {
    icon: "new_releases",
    text: "Vous lancez un nouveau produit et avez besoin d'un funnel incassable dès le premier jour.",
  },
  {
    icon: "credit_card_off",
    text: "Vos prospects sont qualifiés, mais ils abandonnent au moment clé de la carte bancaire.",
  },
  {
    icon: "palette",
    text: "Vous en avez marre des designs d'amateurs et cherchez une esthétique premium.",
  },
  {
    icon: "diamond",
    text: "Vous vendez du high-ticket et devez rassurer immédiatement vos futurs clients.",
  },
  {
    icon: "handyman",
    text: "Vous voulez arrêter le bricolage technique et déléguer de A à Z.",
  },
];

export default function TargetAudience() {
  return (
    <section
      className="py-32 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden"
      id="pour-qui"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="font-label text-primary tracking-[0.3em] uppercase text-[10px] font-bold px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                Ma Cible
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary-dark mb-6 leading-[1.1]">
              Pour qui je{" "}
              <span className="text-transparent bg-clip-text bordeaux-gradient">
                travaille.
              </span>
            </h2>
            <p className="font-body text-xl text-on-surface/60 font-light leading-relaxed">
              Si vous vous reconnaissez dans un seul de ces points, nous devrions
              parler.
            </p>
          </div>
        </FadeIn>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {criteria.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up" fullWidth>
              <div className="group relative h-full bg-white/40 backdrop-blur-xl border border-outline/30 rounded-[2rem] p-8 shadow-[0_4px_30px_rgba(109,26,43,0.02)] hover:shadow-[0_30px_80px_rgba(109,26,43,0.06)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Hover accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <p className="font-body text-[15px] text-on-surface/75 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Ethics Statement */}
        <FadeIn direction="up" delay={0.4}>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white/60 backdrop-blur-xl border border-outline/20 p-10 md:p-16 rounded-[3rem] shadow-[0_32px_64px_rgba(109,26,43,0.06)] relative overflow-hidden text-center">
              {/* Internal glow */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-[60px]"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/8 border border-primary/10 flex items-center justify-center mx-auto mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    verified_user
                  </span>
                </div>

                <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-primary-dark mb-6 tracking-tight">
                  L&apos;éthique avant le profit
                </h3>

                <p className="font-body text-lg md:text-xl text-on-surface/70 leading-relaxed font-light italic max-w-2xl mx-auto">
                  &laquo; Je ne travaille pas sur des projets contraires à
                  l&apos;éthique, des offres mensongères ou des promesses que
                  vous ne pouvez pas tenir. Mon nom est associé à votre page — il
                  en va de ma réputation autant que de la vôtre. &raquo;
                </p>

                <div className="mt-10 flex items-center justify-center gap-4">
                  <div className="h-px w-8 bg-primary/20"></div>
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface/40 font-bold">
                    Waid Finance Ethics
                  </span>
                  <div className="h-px w-8 bg-primary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
