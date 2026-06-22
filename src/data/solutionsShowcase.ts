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
    title: "Alumbrado, energía e infraestructura IoT",
    description:
      "Supervisión de luminarias, tableros y consumo energético por punto, zona y circuito. La infraestructura de alumbrado también puede alojar cámaras, sensores y conectividad urbana.",
    capabilities: [
      "Estado, falla, consumo y mantenimiento por luminaria o circuito",
      "Regulación por horario, zona, evento y condiciones de operación",
      "Postes y tableros como soporte para cámaras, sensores y comunicaciones",
    ],
    screenshot: "./plataforma/alumbrado.png",
    alt: "Vista de alumbrado inteligente con mapa de luminarias, estado del controlador y consumo por circuito.",
    aspect: "aspect-[1672/941]",
    fit: "contain",
  },
  {
    id: "camaras",
    title: "Cámaras, seguridad y analítica de video",
    description:
      "Cámaras y eventos de video integrados al mapa operativo para supervisar zonas, detectar situaciones relevantes y conservar evidencia asociada a cada incidente.",
    capabilities: [
      "Detección de incidentes, humo, obstrucciones, objetos y concentraciones",
      "Conteo vehicular y peatonal por zona, dirección y horario",
      "Evidencia, control de accesos y eventos vinculados a la operación",
    ],
    screenshot: "./plataforma/camaras.png",
    alt: "Panel de cámaras con analítica de video, detecciones, control de accesos y eventos vinculados al mapa.",
    aspect: "aspect-[1672/941]",
    fit: "contain",
    ctaLabel: "Ver el centro de control",
    ctaTarget: "incidentes",
  },
  {
    id: "ambiente",
    title: "Ambiente, agua y prevención urbana",
    description:
      "Sensores y fuentes de datos para supervisar calidad ambiental, lluvia, niveles y condiciones de riesgo, y generar alertas antes de que el problema afecte la operación.",
    capabilities: [
      "Aire y ruido: partículas, gases, temperatura, humedad, decibeles y picos",
      "Lluvia y drenaje: nivel de agua, sumideros, estaciones y zonas de riesgo",
      "Alertas por umbral, evolución histórica y tareas preventivas",
    ],
    screenshot: "./plataforma/ambiente.png",
    alt: "Plataforma de monitoreo ambiental con sensores de aire, ruido, lluvia, drenaje y zonas de riesgo.",
    aspect: "aspect-[16/10]",
    fit: "contain",
  },
];
