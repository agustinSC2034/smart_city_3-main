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
    "Mapa único con activos, tareas y evidencias",
    "Alertas por zona y por tipo de evento",
    "Tareas priorizadas según criticidad y SLA",
    "Cuadrillas coordinadas sobre el mapa",
    "Evidencia antes y después de cada tarea",
    "Indicadores de cumplimiento y productividad",
    "Historial auditable por activo y responsable",
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
  { id: "tecnologia", label: "Tecnología" },
  { id: "contacto", label: "Contacto" },
];
