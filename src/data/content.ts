export const beforeAfter = {
  before: [
    "Sistemas y planillas separadas",
    "Alertas y tareas sin un seguimiento común",
    "Recorridos y evidencias difíciles de verificar",
    "Indicadores preparados de forma manual",
  ],
  after: [
    "Activos, eventos y tareas sobre una base geográfica común",
    "Responsables, prioridades y vencimientos registrados",
    "Recorridos, llegada y evidencia asociados a cada intervención",
    "Indicadores alimentados desde la operación",
  ],
};

export const impact = [
  {
    metric: "hasta -45%",
    label: "tiempo de respuesta operativa",
    note: "según alcance del piloto",
  },
  {
    metric: "+30 pp",
    label: "cumplimiento de SLA en mantenimiento",
    note: "métrica de ejemplo",
  },
  {
    metric: "-22%",
    label: "recorridos de inspección innecesarios",
    note: "potencial estimado",
  },
  {
    metric: "-35%",
    label: "reclamos repetidos por zona",
    note: "según alcance del proyecto",
  },
  {
    metric: "hasta -38%",
    label: "consumo energético en alumbrado",
    note: "con dimerización y evento",
  },
  {
    metric: "100%",
    label: "trazabilidad de activos urbanos",
    note: "ficha, estado, historial",
  },
];

export const osFlow = [
  { id: "sources", label: "Fuentes", items: ["Sensor", "Cámara", "Reclamo", "Activo urbano", "Vehículo", "Cuadrilla"] },
  { id: "platform", label: "Plataforma de datos", items: ["Normalización", "Eventos", "Georreferencia", "Contexto"] },
  { id: "decisions", label: "Alertas y decisiones", items: ["Reglas", "Priorización", "Asignación", "SLA"] },
  { id: "operation", label: "Operación y auditoría", items: ["Cuadrillas", "Evidencia", "Trazabilidad", "Responsables"] },
  { id: "report", label: "Indicadores y reportes", items: ["KPIs", "Cumplimiento", "Productividad", "Planificación"] },
];

export const detectAct = [
  { id: "detect", label: "Detectar", desc: "Sensores, cámaras y ciudadanos reportan." },
  { id: "analyze", label: "Analizar", desc: "La plataforma clasifica y prioriza el evento." },
  { id: "act", label: "Accionar", desc: "Se asigna la cuadrilla y se ejecuta la tarea." },
  { id: "measure", label: "Medir", desc: "Se registra evidencia, SLA e indicadores." },
];

export type NavItem = {
  id: string;
  label: string;
  targetId: string;
  sectionIds: string[];
};

export const navItems: NavItem[] = [
  { id: "plataforma", label: "Plataforma", targetId: "plataforma", sectionIds: ["plataforma"] },
  { id: "soluciones", label: "Soluciones", targetId: "soluciones", sectionIds: ["soluciones"] },
  { id: "operacion", label: "Operación", targetId: "incidentes", sectionIds: ["incidentes", "reclamos", "antes-despues"] },
  { id: "datos-ia", label: "Datos y analítica", targetId: "datos-ia", sectionIds: ["datos-ia"] },
  { id: "integracion", label: "Integración", targetId: "integracion", sectionIds: ["integracion"] },
  { id: "grupo-ittel", label: "Nosotros", targetId: "grupo-ittel", sectionIds: ["grupo-ittel"] },
];
