import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";

const ComeupIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.83 17.58l-1.63-1.67c1.33-1.29 2.16-3.07 2.16-5.04 0-3.83-3.13-6.95-6.98-6.95-3.85 0-6.98 3.12-6.98 6.95 0 3.83 3.13 6.95 6.98 6.95 1.55 0 2.99-.5 4.14-1.35l1.65 1.63c-1.57 1.25-3.56 1.99-5.74 1.99-5.11 0-9.28-4.14-9.28-9.23S6.34 2.7 11.45 2.7c5.11 0 9.28 4.14 9.28 9.23 0 2.19-.77 4.19-2.05 5.65z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "Qui suis-je", href: "#about" },
    { label: "Mon Parcours", href: "#parcours" },
    { label: "Mes Services", href: "#services" },
    { label: "Témoignages", href: "#avis" },
  ];

  const legalLinks = [
    { label: "Mentions Légales", href: "/mentions-legales" },
    { label: "CGV", href: "/cgv" },
    { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
  ];

  const socialLinks = [
    {
      icon: <ComeupIcon />,
      href: "https://comeup.com/fr/@waid-finance",
      label: "ComeUp",
    },
    {
      icon: <FaLinkedinIn size={16} />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={16} />,
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <footer
      className="relative bg-[#110408] text-white overflow-hidden"
      id="footer"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[200px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Brand + Nav */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 pb-16 border-b border-white/5">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-headline font-black text-2xl tracking-tighter text-white">
                  WAID-FINANCE
                </span>
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </div>
              <p className="font-body text-white/40 text-[15px] leading-relaxed max-w-xs mb-8 font-light">
                Expert en création de tunnels de vente haute conversion et
                rédaction de business plans au format exigence bancaire.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:bg-primary/20 hover:border-primary/30 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="font-body text-white/50 text-[15px] font-light hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">
                Légal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="font-body text-white/50 text-[15px] font-light hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">
                Contact
              </h4>
              <a
                href="mailto:contact@waid-finance.com"
                className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <span className="block font-label text-[9px] uppercase tracking-widest text-white/30 mb-1">
                    Email
                  </span>
                  <span className="font-body text-white/80 text-sm group-hover:text-white transition-colors">
                    contact@waid-finance.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-label text-[11px] text-white/25 tracking-wider">
              © {currentYear} Waid Finance. Tous droits réservés.
            </p>
            <p className="font-label text-[11px] text-white/25 tracking-wider">
              Conçu avec rigueur. Optimisé pour convertir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}