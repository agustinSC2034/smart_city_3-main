import { FeatureSection, ProductScreenshot } from "@/components/ui/Feature";

export function SmartMobility() {
  return (
    <FeatureSection
      id="movilidad"
      dark
      eyebrow="Movilidad · ITS"
      title="Movilidad y semaforos inteligentes"
      description="Medimos el transito, adaptamos los cruces y coordinamos corredores para mejorar la circulacion, priorizar el transporte publico y responder ante incidentes."
      highlights={[
        "Conteo vehicular, congestion, velocidades y tiempos de viaje",
        "Regulacion semaforica adaptativa y onda verde por corredor",
        "Prioridad para ambulancias y transporte publico",
        "Monitoreo de controladores, fallas y rutas alternativas",
        "Estacionamiento y zonas de carga como capacidad complementaria",
      ]}
      platformNote="El cruce reporta su estado y comparte datos con transito, transporte publico e incidentes."
      ctaLabel="Ver gestion de incidentes"
      ctaTarget="incidentes"
      mock={<MobilityMock />}
    />
  );
}

function MobilityMock() {
  return (
    <ProductScreenshot
      src="./plataforma/semaforos.png"
      alt="Panel de movilidad con corredor semaforico, cruces coordinados, congestion y prioridad de transporte publico."
      aspect="aspect-[1448/1086]"
      fit="contain"
      dark
      className="bg-white p-2"
    />
  );
}
