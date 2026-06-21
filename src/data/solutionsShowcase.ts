export type Solution = {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  screenshot: string;
  alt: string;
  aspect: string;
  fit: "cover" | "contain";
  ctaLabel?: string;
  ctaTarget?: string;
};

export const solutions: Solution[] = [
  {
    id: "movilidad",
    title: "Movilidad y semáforos inteligentes",
    description:
      "Conteo de tráfico, regulación adaptativa de cruces y coordinación de corredores para priorizar transporte público y responder ante incidentes.",
    capabilities: [
      "Conteo vehicular, congestión y tiempos de viaje por corredor",
      "Onda verde y prioridad para ambulancias y transporte público",
      "Falla de controlador → alerta, orden de trabajo y ruta alternativa",
    ],
    screenshot: "./plataforma/semaforos.png",
    alt: "Panel de movilidad con corredor semafórico, cruces coordinados y prioridad de transporte público.",
    aspect: "aspect-[1448/1086]",
    fit: "contain",
    ctaLabel: "Ver gestión de incidentes",
    ctaTarget: "incidentes",
  },
  {
    id: "alumbrado",
    title: "Alumbrado inteligente",
    description:
      "Luminarias conectadas que reportan estado y consumo en tiempo real. Dimerización por horario, zona o evento, y postes como soporte IoT para cámaras y sensores.",
    capabilities: [
      "Falla y consumo por punto de luz, con ficha de cada luminaria",
      "Dimerización por horario, zona o evento",
      "Postes como infraestructura: cámaras, sensores y conectividad",
    ],
    screenshot: "./plataforma/alumbrado.png",
    alt: "Vista de alumbrado inteligente con mapa de luminarias, estado del controlador y cuadrilla asignada.",
    aspect: "aspect-[1672/941]",
    fit: "contain",
  },
  {
    id: "camaras",
    title: "Cámaras inteligentes",
    description:
      "Analítica de video integrada al mapa: detección de incidentes, objetos abandonados, acumulación de personas, humo u obstrucciones. Evidencia visual para la operación.",
    capabilities: [
      "Detección de incidentes, objetos, acumulación y humo por zona",
      "Conteo vehicular y peatonal por zona y horario",
      "Cada evento genera evidencia visual y alerta en el mapa",
    ],
    screenshot: "./plataforma/camaras.png",
    alt: "Panel de cámaras inteligentes con video analítico, detecciones y eventos recientes.",
    aspect: "aspect-[1672/941]",
    fit: "contain",
  },
  {
    id: "residuos",
    title: "Residuos inteligentes",
    description:
      "Sensores en contenedores seleccionados y puntos críticos para medir llenado, temperatura y otras variables. La plataforma selecciona qué puntos atender y calcula la ruta.",
    capabilities: [
      "Sensores de llenado, temperatura y variables según equipamiento",
      "El sistema selecciona puntos y calcula la ruta del recorrido",
      "Cumplimiento por punto, GPS y evidencia fotográfica",
    ],
    screenshot: "./plataforma/residuos.png",
    alt: "Vista de residuos inteligentes con contenedor sensorizado, nivel de llenado crítico y ruta recomendada.",
    aspect: "aspect-[1672/941]",
    fit: "contain",
  },
  {
    id: "cuadrillas",
    title: "Gestión y auditoría de cuadrillas",
    description:
      "Tickets, rutas, GPS, evidencia fotográfica y control de SLA para supervisar trabajos de limpieza, mantenimiento e infraestructura en la vía pública.",
    capabilities: [
      "Orden de trabajo con prioridad, responsable y SLA",
      "Ubicación GPS, ruta sugerida y llegada al lugar",
      "Evidencia antes/después y validación de supervisor",
    ],
    screenshot: "./plataforma/cuadrillas.png",
    alt: "Plataforma de gestión y auditoría de cuadrillas — tickets, GPS, evidencia y SLA",
    aspect: "aspect-[16/10]",
    fit: "contain",
  },
  {
    id: "ambiente",
    title: "Monitoreo ambiental y prevención",
    description:
      "Red de sensores para medir condiciones urbanas, detectar riesgos por umbral y priorizar tareas preventivas antes de que el problema escale.",
    capabilities: [
      "Aire: PM2.5, PM10, CO, NOx, temperatura y humedad",
      "Ruido urbano: decibeles, picos y patrones por zona y horario",
      "Lluvia, drenaje e inundaciones: nivel, sumideros y zonas de riesgo",
    ],
    screenshot: "./plataforma/ambiente.png",
    alt: "Plataforma de monitoreo ambiental con red de sensores de aire, ruido y riesgo hídrico sobre el mapa.",
    aspect: "aspect-[16/10]",
    fit: "contain",
  },
];
