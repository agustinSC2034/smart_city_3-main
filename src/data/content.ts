export const beforeAfter = {
  before: [
    "Sistemas y planillas separadas",
    "Alertas sin responsable definido",
    "Recorridos difíciles de verificar",
    "Evidencia distribuida en distintos canales",
    "Reclamos sin relación con activos o tareas",
    "Indicadores preparados de forma manual",
  ],
  after: [
    "Activos, eventos y tareas sobre una base geográfica común",
    "Responsables, prioridades y vencimientos registrados",
    "Recorridos y llegada al punto verificados por GPS",
    "Evidencia asociada a cada intervención",
    "Reclamos vinculados con servicios y activos",
    "Indicadores actualizados desde la operación",
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

export const navItems = [
  { id: "plataforma", label: "Plataforma" },
  { id: "soluciones", label: "Soluciones" },
  { id: "incidentes", label: "Incidentes" },
  { id: "analitica", label: "Analítica" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "contacto", label: "Contacto" },
];
