import { FeatureSection, ProductScreenshot } from "@/components/ui/Feature";

export function SmartMobility() {
  return (
    <FeatureSection
      id="movilidad"
      dark
      eyebrow="Movilidad · ITS"
      title="Movilidad y semáforos inteligentes"
      description="Conteo de tráfico, regulación adaptativa de cruces y coordinación de corredores para priorizar transporte público y responder ante incidentes."
      highlights={[
        "Conteo vehicular, congestión, velocidades y tiempos de viaje por corredor",
        "Onda verde y prioridad para ambulancias y transporte público",
        "Falla de controlador → alerta + orden de trabajo + ruta alternativa",
      ]}
      platformNote="Cada cruce reporta su estado y comparte datos con tránsito, transporte público e incidentes."
      ctaLabel="Ver gestión de incidentes"
      ctaTarget="incidentes"
      className="snap-start"
      mock={<MobilityMock />}
    />
  );
}

function MobilityMock() {
  return (
    <ProductScreenshot
      src="./plataforma/semaforos.png"
      alt="Panel de movilidad con corredor semafórico, cruces coordinados, congestión y prioridad de transporte público."
      aspect="aspect-[1448/1086]"
      fit="contain"
      dark
      className="bg-white p-2"
    />
  );
}
