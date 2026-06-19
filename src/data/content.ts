export const beforeAfter = {
  before: [
    "Datos dispersos en áreas y planillas",
    "Reclamos aislados sin trazabilidad",
    "Poca visibilidad del cumplimiento",
    "Recorridos manuales y reactivos",
    "Reportes tardíos y estáticos",
    "Mantenimiento solo cuando falla",
    "Auditoría basada en muestras",
  ],
  after: [
    "Mapa único de operación urbana",
    "Alertas en tiempo real por zona",
    "Tareas priorizadas por impacto",
    "Cuadrillas coordinadas en mapa",
    "Evidencia antes y después",
    "Indicadores claros y vivos",
    "Auditoría y mejora continua",
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
  { id: "dispositivos", label: "Dispositivos" },
  { id: "cuadrillas", label: "Cuadrillas" },
  { id: "control", label: "Centro de control" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "contacto", label: "Contacto" },
];
