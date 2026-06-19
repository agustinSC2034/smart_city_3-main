import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CityAsOS } from "@/components/CityAsOS";
import { Solutions } from "@/components/Solutions";
import {
  SmartTrafficLights,
  SmartLighting,
  SmartCameras,
  SmartWaste,
  CrewTracking,
  SmartTolls,
} from "@/components/DeviceSolutions";
import { ControlCenter } from "@/components/ControlCenter";
import { Citizens } from "@/components/Citizens";
import { Maintenance } from "@/components/Maintenance";
import { HowItWorks } from "@/components/HowItWorks";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Impact } from "@/components/Impact";
import { Integrations } from "@/components/Integrations";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-white">
      <a
        href="#soluciones"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <CityAsOS />
        <Solutions />

        {/* Dispositivos e infraestructura urbana */}
        <div id="dispositivos" className="scroll-mt-24" aria-hidden />
        <SmartTrafficLights />
        <SmartLighting />
        <SmartCameras />
        <SmartWaste />
        <CrewTracking />
        <SmartTolls />

        <ControlCenter />
        <Citizens />
        <Maintenance />
        <HowItWorks />
        <BeforeAfter />
        <Impact />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
