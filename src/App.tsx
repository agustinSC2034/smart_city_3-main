import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PlatformOverview } from "@/components/PlatformOverview";
import { SolutionsShowcase } from "@/components/SolutionsShowcase";
import { IncidentCoordination } from "@/components/IncidentCoordination";
import { Citizens } from "@/components/Citizens";
import { HowItWorks } from "@/components/HowItWorks";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Integrations } from "@/components/Integrations";
import { WhyItTel } from "@/components/WhyItTel";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-white">
      <a
        href="#plataforma"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        {/* Inicio */}
        <Hero />
        <PlatformOverview />

        {/* Soluciones — scrollytelling editorial */}
        <SolutionsShowcase />

        {/* Operación transversal */}
        <IncidentCoordination />
        <Citizens />

        {/* Cierre */}
        <HowItWorks />
        <BeforeAfter />
        <Integrations />
        <WhyItTel />
      </main>
      <Footer />
    </div>
  );
}
