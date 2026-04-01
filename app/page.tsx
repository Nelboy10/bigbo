import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Parcours from "./components/Parcours";
import Services from "./components/Services";
import Difference from "./components/Difference";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import TargetAudience from "./components/TargetAudience";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="bg-transparent text-on-surface min-h-screen selection:bg-primary/20 selection:text-primary-dark font-body relative overflow-x-hidden">
        {/* Global decorative background vectors could go here */}
        <Hero />
        <About />
        <Parcours />
        <Services />
        <Difference />
        <Testimonials />
        <Process />
        <TargetAudience />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
