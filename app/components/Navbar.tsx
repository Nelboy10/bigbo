import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-surface-card/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(109,26,43,0.06)] rounded-full border border-outline/20">
      <div className="flex justify-between items-center w-full px-6 py-3">
        <div className="text-xl font-black text-primary-dark tracking-tighter uppercase font-headline flex items-center gap-2">
          WAID-FINANCE<span className="w-1.5 h-1.5 rounded-full bg-primary mt-0.5"></span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link className="text-primary-dark/70 font-medium hover:text-primary transition-colors duration-300 font-manrope text-[14px] tracking-tight" href="#services">Services</Link>
          <Link className="text-primary-dark/70 font-medium hover:text-primary transition-colors duration-300 font-manrope text-[14px] tracking-tight" href="#parcours">Expertise</Link>
          <Link className="text-primary-dark/70 font-medium hover:text-primary transition-colors duration-300 font-manrope text-[14px] tracking-tight" href="#avis">Avis</Link>
        </div>
        <Link className="bg-primary-dark text-white px-5 py-2.5 rounded-full font-headline font-bold text-[13px] tracking-wide hover:bg-primary transition-colors shadow-sm hidden sm:block" href="#contact">
          Démarrer
        </Link>
      </div>
    </nav>
  );
}
