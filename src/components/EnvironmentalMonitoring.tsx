import { FeatureSection, ProductScreenshot } from "@/components/ui/Feature";

export function EnvironmentalMonitoring() {
  return (
    <FeatureSection
      id="ambiente"
      eyebrow="Ambiente · Prevención"
      title="Monitoreo ambiental y prevención"
      description="Una red de sensores para medir las condiciones urbanas, detectar riesgos y priorizar acciones antes de que el problema escale."
      highlights={[
        "Calidad del aire: PM2.5, PM10, CO, NOx, temperatura y humedad",
        "Ruido urbano: decibeles, picos y patrones por zona y horario",
        "Lluvia, drenaje e inundaciones: nivel, sumideros y zonas de riesgo",
        "Alertas por umbral y tareas preventivas para cuadrillas",
      ]}
      platformNote="Las mediciones activan alertas, tareas preventivas e información pública."
      ctaLabel="Ver gestión de incidentes"
      ctaTarget="incidentes"
      mock={
        <ProductScreenshot
          src="./plataforma/ambiente.png"
          alt="Plataforma de monitoreo ambiental con red de sensores de aire, ruido y riesgo hídrico sobre el mapa de la ciudad."
          aspect="aspect-[16/10]"
        />
      }
    />
  );
}
