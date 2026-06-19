import {
  AlertTriangle,
  BarChart3,
  Bell,
  Camera,
  CheckCircle2,
  Factory,
  GitBranch,
  Lightbulb,
  Map,
  Radio,
  Recycle,
  Route,
  ShieldCheck,
  TrafficCone,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type DeckVisual =
  | "hero"
  | "problem"
  | "vision"
  | "platform"
  | "solutions"
  | "mobility"
  | "waste"
  | "crews"
  | "incident"
  | "environment"
  | "integration"
  | "closing";

export type DeckSlide = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  metric?: {
    value: string;
    label: string;
  };
  visual: DeckVisual;
};

export const deckSlides: DeckSlide[] = [
  {
    id: "portada",
    kicker: "GRUPO ITTEL Smart City",
    title: "Ciudades inteligentes en operacion",
    body:
      "Una plataforma para conectar infraestructura urbana, datos operativos y equipos de campo en una vista ejecutiva y accionable.",
    points: ["Mapa operativo", "Alertas en tiempo real", "Gestion trazable"],
    metric: { value: "360", label: "vision urbana integrada" },
    visual: "hero",
  },
  {
    id: "problema",
    kicker: "Punto de partida",
    title: "Servicios urbanos dispersos",
    body:
      "Las areas trabajan con sistemas, planillas y canales separados. La informacion llega tarde, cuesta priorizar y la respuesta pierde trazabilidad.",
    points: ["Datos aislados", "Reclamos sin contexto", "Cuadrillas reactivas"],
    metric: { value: "-45%", label: "potencial de demora operativa" },
    visual: "problem",
  },
  {
    id: "vision",
    kicker: "Vision operativa",
    title: "Una ciudad operada en tiempo real",
    body:
      "Cada evento urbano se detecta, se georreferencia, se prioriza y se convierte en accion medible desde un centro de control comun.",
    points: ["Operacion en vivo", "Decision con evidencia", "Indicadores siempre visibles"],
    visual: "vision",
  },
  {
    id: "plataforma",
    kicker: "Plataforma central",
    title: "Mapa, alertas, activos y cuadrillas",
    body:
      "El tablero integra capas urbanas, estado de activos, alertas, ordenes de trabajo y equipos en territorio para operar con una sola verdad.",
    points: ["Activos conectados", "Eventos priorizados", "Despacho coordinado"],
    metric: { value: "1", label: "centro de control para multiples verticales" },
    visual: "platform",
  },
  {
    id: "soluciones",
    kicker: "Soluciones urbanas",
    title: "Semaforos, alumbrado, camaras y residuos",
    body:
      "Cada vertical puede iniciar de forma independiente y compartir la misma base de mapas, reglas, alertas e indicadores.",
    points: ["Movilidad", "Alumbrado y seguridad", "Higiene urbana"],
    visual: "solutions",
  },
  {
    id: "movilidad",
    kicker: "Movilidad inteligente",
    title: "Cruces, flujo y prioridad urbana",
    body:
      "Los datos de transito y eventos en via publica permiten detectar congestiones, ajustar respuestas y coordinar desvio o asistencia.",
    points: ["Cruces monitoreados", "Alertas por zona", "Recorridos optimizados"],
    metric: { value: "96%", label: "servicios operativos visibles" },
    visual: "mobility",
  },
  {
    id: "residuos",
    kicker: "Residuos inteligentes",
    title: "Recoleccion basada en estado real",
    body:
      "Sensores, rutas y reclamos se combinan para priorizar contenedores, evitar recorridos innecesarios y auditar cumplimiento.",
    points: ["Nivel de llenado", "Ruta de camion", "SLA por zona"],
    visual: "waste",
  },
  {
    id: "cuadrillas",
    kicker: "Gestion territorial",
    title: "Cuadrillas coordinadas y auditables",
    body:
      "Las ordenes de trabajo se asignan con contexto, evidencia, ubicacion y prioridad. La supervision ve avance, desvio y cierre.",
    points: ["Asignacion por cercania", "Evidencia antes y despues", "Historial completo"],
    metric: { value: "12", label: "cuadrillas activas en mapa" },
    visual: "crews",
  },
  {
    id: "incidentes",
    kicker: "Respuesta coordinada",
    title: "Gestion integral de incidentes",
    body:
      "Un incidente conecta sensor, camara, activo, responsable y tarea. El flujo deja trazabilidad desde la deteccion hasta el cierre.",
    points: ["Detectar", "Validar", "Resolver y auditar"],
    visual: "incident",
  },
  {
    id: "ambiente",
    kicker: "Ambiente y prevencion",
    title: "Monitoreo ambiental para anticipar riesgos",
    body:
      "Estaciones, alertas climaticas y reportes territoriales ayudan a anticipar eventos y activar protocolos preventivos.",
    points: ["Calidad de aire", "Lluvia y anegamiento", "Alertas preventivas"],
    metric: { value: "24/7", label: "monitoreo continuo" },
    visual: "environment",
  },
  {
    id: "integracion",
    kicker: "Como se integra",
    title: "Sensores, plataforma, operacion e indicadores",
    body:
      "El modelo conecta fuentes de datos, motor operativo, equipos de campo e indicadores para cerrar el ciclo de mejora continua.",
    points: ["Capturar", "Procesar", "Accionar", "Medir"],
    visual: "integration",
  },
  {
    id: "cierre",
    kicker: "Propuesta de valor",
    title: "Implementacion gradual, impacto visible",
    body:
      "GRUPO ITTEL permite iniciar por una vertical prioritaria y escalar hacia una operacion urbana integrada, medible y sostenible.",
    points: ["Piloto focalizado", "Integracion progresiva", "Tablero ejecutivo"],
    metric: { value: "30-60", label: "dias para un piloto operativo" },
    visual: "closing",
  },
];

export const solutionIcons: Array<{ label: string; icon: LucideIcon; tone: string }> = [
  { label: "Semaforos", icon: TrafficCone, tone: "text-warn" },
  { label: "Alumbrado", icon: Lightbulb, tone: "text-cyan-glow" },
  { label: "Camaras", icon: Camera, tone: "text-ops" },
  { label: "Residuos", icon: Recycle, tone: "text-cyan-tech" },
];

export const integrationSteps: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Sensores", icon: Radio },
  { label: "Plataforma", icon: Map },
  { label: "Operacion", icon: Users },
  { label: "Indicadores", icon: BarChart3 },
];

export const closingPillars: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Diagnostico", icon: ShieldCheck },
  { label: "Integracion", icon: GitBranch },
  { label: "Operacion", icon: Bell },
  { label: "Mejora", icon: CheckCircle2 },
];

export const alertStack = [
  { title: "Luminaria fuera de servicio", zone: "Av. Rivadavia 2140", tone: "warn" },
  { title: "Contenedor al 92%", zone: "Puerto Madero", tone: "alert" },
  { title: "Cuadrilla en camino", zone: "Comuna 3", tone: "ok" },
];

export const crewRoute = [
  { label: "Base", icon: Factory },
  { label: "OT-2207", icon: AlertTriangle },
  { label: "Evidencia", icon: Camera },
  { label: "Cierre", icon: CheckCircle2 },
];

export const environmentSignals = [
  { label: "PM2.5", value: "18", suffix: "ug/m3" },
  { label: "Lluvia", value: "12", suffix: "mm/h" },
  { label: "Viento", value: "21", suffix: "km/h" },
  { label: "Riesgo", value: "Medio", suffix: "" },
];

export const mobilityRoutes = [
  { label: "Corredor Norte", value: "flujo alto", icon: Route },
  { label: "Cruce Central", value: "prioridad", icon: TrafficCone },
  { label: "Desvio activo", value: "7 min", icon: GitBranch },
];

export const deckRoutePath = "/presentacion";
