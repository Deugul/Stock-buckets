import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { LogoBar } from "@/components/LogoBar";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="hero-gradient selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <LogoBar />
        <CtaSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
