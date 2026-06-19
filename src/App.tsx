import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CityAsOS } from "@/components/CityAsOS";
import { PlatformOverview } from "@/components/PlatformOverview";
import { SmartMobility } from "@/components/SmartMobility";
import { SmartLighting, SmartCameras, SmartWaste } from "@/components/DeviceSolutions";
import { CrewOperations } from "@/components/CrewOperations";
import { EnvironmentalMonitoring } from "@/components/EnvironmentalMonitoring";
import { IncidentCoordination } from "@/components/IncidentCoordination";
import { Citizens } from "@/components/Citizens";
import { HowItWorks } from "@/components/HowItWorks";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Integrations } from "@/components/Integrations";
import { WhyItTel } from "@/components/WhyItTel";
import { Footer } from "@/components/Footer";
import { PresentationDeck } from "@/components/PresentationDeck";

// Prevent tree-shaking — assign to a global so Rollup can't eliminate it
const _deck = PresentationDeck;
void _deck;

function isPresentationRoute(): boolean {
  try {
    const p = window.location.pathname.replace(/\/$/, "");
    return p === "/presentacion" || p.endsWith("/presentacion");
  } catch {
    return false;
  }
}

export default function App() {
  const showPresentation = isPresentationRoute();
  if (showPresentation) {
    return <PresentationDeck />;
  }

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
        <CityAsOS />
        <PlatformOverview />

        {/* Soluciones */}
        <div id="soluciones" className="scroll-mt-24" aria-hidden />
        <SmartMobility />
        <SmartLighting />
        <SmartCameras />
        <SmartWaste />
        <CrewOperations />
        <EnvironmentalMonitoring />

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
