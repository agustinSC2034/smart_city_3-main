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
    id: "residuos",
    title: "Residuos, rutas y control de recolección",
    description:
      "Sensores de llenado, ubicación de contenedores, recorridos y evidencia de campo para priorizar servicios y controlar el cumplimiento de la recolección.",
    capabilities: [
      "Nivel de llenado, temperatura, batería y estado del sensor",
      "Priorización de puntos y planificación de recorridos según necesidad operativa",
      "GPS, evidencia y control del servicio realizado",
    ],
    screenshot: "./plataforma/residuos.png",
    alt: "Vista de residuos con contenedores sensorizados, niveles de llenado y recorrido de recolección.",
    aspect: "aspect-[1672/941]",
    fit: "contain",
    ctaLabel: "Ver solución de residuos",
    ctaTarget: "/soluciones/residuos-inteligentes",
  },
  {
    id: "cuadrillas",
    title: "Auditoría de cuadrillas y tareas de limpieza",
    description:
      "La plataforma registra tareas, recorridos, ubicación GPS, evidencia y tiempos de cumplimiento para supervisar servicios de limpieza y mantenimiento en la vía pública.",
    capabilities: [
      "Tareas con prioridad, responsable y vencimiento",
      "Recorridos, ubicación GPS y llegada al punto de trabajo",
      "Evidencia antes y después, validación y control de cumplimiento",
    ],
    screenshot: "./plataforma/cuadrillas.png",
    alt: "Plataforma de auditoría de cuadrillas — tareas, GPS, evidencia y control de cumplimiento.",
    aspect: "aspect-[16/10]",
    fit: "contain",
  },
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
    ctaLabel: "Ver el centro de control",
    ctaTarget: "incidentes",
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
