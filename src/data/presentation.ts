import type { LucideIcon } from "lucide-react";
import {
  Radio,
  Camera,
  MessageSquareWarning,
  MapPin,
  TrafficCone,
  Lightbulb,
  Cctv,
  Trash2,
  Users,
  Wind,
  AlertTriangle,
  CheckCircle2,
  Gauge,
  BusFront,
  Navigation,
  Bell,
  Wrench,
  Droplets,
  Volume2,
  ShieldCheck,
} from "lucide-react";

export type SlideLayout =
  | "cover"        // full-screen background image
  | "statement"    // big text, minimal visual
  | "diagram"      // central diagram
  | "dashboard"    // platform mockup protagonist
  | "split"        // visual + text lateral
  | "flow"         // horizontal/vertical flow
  | "closing";     // full-screen dark

export type DeckSlide = {
  id: string;
  layout: SlideLayout;
  kicker: string;
  title: string;
  subtitle?: string;
  points?: string[];
  bgImage?: string;       // optional image path
  bgGradient?: boolean;   // use hero gradient fallback
  light?: boolean;        // light background (white/gray) instead of dark
  demo?: boolean;         // show "Escenario demostrativo"
};

export const deckSlides: DeckSlide[] = [
  {
    id: "portada",
    layout: "cover",
    kicker: "GRUPO ITTEL",
    title: "Ciudades inteligentes en operación",
    subtitle: "Infraestructura, datos y equipos de campo trabajando como un solo sistema.",
    bgImage: "/presentation/cover-city.jpg",
    bgGradient: true,
  },
  {
    id: "problema",
    layout: "statement",
    kicker: "El problema",
    title: "La ciudad funciona con información fragmentada",
    subtitle: "Tránsito, alumbrado, residuos y cuadrillas operan en sistemas aislados.",
    points: ["Planillas", "Llamadas", "Sistemas separados", "Poca trazabilidad"],
    light: true,
  },
  {
    id: "vision",
    layout: "diagram",
    kicker: "La visión",
    title: "Una ciudad conectada responde mejor",
    subtitle: "Sensores + cámaras + reclamos + GPS → operación coordinada → resultados medibles.",
    light: true,
  },
  {
    id: "plataforma",
    layout: "dashboard",
    kicker: "La plataforma",
    title: "Una sola pantalla para ver y operar la ciudad",
    subtitle: "Mapa, activos, alertas, cuadrillas e indicadores en tiempo real.",
    demo: true,
    light: true,
  },
  {
    id: "soluciones",
    layout: "diagram",
    kicker: "Soluciones",
    title: "Soluciones para cada servicio urbano",
    subtitle: "Cada solución puede comenzar de forma independiente.",
    light: true,
  },
  {
    id: "movilidad",
    layout: "split",
    kicker: "Movilidad inteligente",
    title: "Movilidad que se adapta a lo que ocurre",
    subtitle: "Medir · Adaptar · Priorizar",
    bgImage: "/presentation/mobility-corridor.jpg",
    bgGradient: true,
  },
  {
    id: "residuos",
    layout: "flow",
    kicker: "Residuos y cuadrillas",
    title: "Recolectar donde hace falta. Auditar lo que se hizo.",
    subtitle: "Sensor → Ruta → Tarea → Evidencia",
    light: true,
  },
  {
    id: "auditoria",
    layout: "split",
    kicker: "Gestión y auditoría",
    title: "Cada tarea con responsable, tiempo y evidencia",
    subtitle: "Ubicación · Cuadrilla · SLA · Foto antes/después · Validación",
    light: true,
  },
  {
    id: "incidentes",
    layout: "flow",
    kicker: "Incidentes coordinados",
    title: "La plataforma no solo alerta. Coordina la respuesta.",
    subtitle: "Detectar → Validar → Activar protocolo → Coordinar → Resolver → Auditar",
    bgImage: "/presentation/incident-response.jpg",
    bgGradient: true,
  },
  {
    id: "ambiente",
    layout: "statement",
    kicker: "Ambiente y prevención",
    title: "Medir para anticiparse",
    subtitle: "Aire · Ruido · Lluvia · Riesgo hídrico",
    bgImage: "/presentation/environment-city.jpg",
    bgGradient: true,
  },
  {
    id: "integracion",
    layout: "diagram",
    kicker: "Integración",
    title: "Soluciones independientes. Una operación conectada.",
    subtitle: "Dispositivos y sistemas → plataforma → alertas y tickets → cuadrillas → evidencia e indicadores.",
    light: true,
  },
  {
    id: "cierre",
    layout: "closing",
    kicker: "GRUPO ITTEL",
    title: "Empezar por una necesidad. Escalar hacia una ciudad conectada.",
    subtitle: "Diseñemos un piloto.",
    bgImage: "/presentation/closing-city.jpg",
    bgGradient: true,
  },
];

// --- Data for visual components ---

export const solutionNodes: Array<{ label: string; icon: LucideIcon; angle: number }> = [
  { label: "Movilidad", icon: TrafficCone, angle: 0 },
  { label: "Alumbrado", icon: Lightbulb, angle: 60 },
  { label: "Cámaras", icon: Cctv, angle: 120 },
  { label: "Residuos", icon: Trash2, angle: 180 },
  { label: "Cuadrillas", icon: Users, angle: 240 },
  { label: "Ambiente", icon: Wind, angle: 300 },
];

export const visionFlow: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Sensores", icon: Radio },
  { label: "Cámaras", icon: Camera },
  { label: "Reclamos", icon: MessageSquareWarning },
  { label: "GPS", icon: MapPin },
];

export const visionResult: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Operación coordinada", icon: Wrench },
  { label: "Resultados medibles", icon: CheckCircle2 },
];

export const wasteFlow: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Sensor", icon: Radio },
  { label: "Ruta", icon: Navigation },
  { label: "Tarea", icon: Wrench },
  { label: "Evidencia", icon: CheckCircle2 },
];

export const incidentFlow: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Detectar", icon: AlertTriangle },
  { label: "Validar", icon: Bell },
  { label: "Protocolo", icon: ShieldCheck },
  { label: "Coordinar", icon: Users },
  { label: "Resolver", icon: CheckCircle2 },
  { label: "Auditar", icon: Gauge },
];

export const integrationFlow: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Dispositivos y sistemas", icon: Radio },
  { label: "Plataforma", icon: MapPin },
  { label: "Alertas y tickets", icon: Bell },
  { label: "Cuadrillas", icon: Users },
  { label: "Evidencia e indicadores", icon: CheckCircle2 },
];

export const environmentLayers: Array<{ label: string; icon: LucideIcon; value: string }> = [
  { label: "Aire", icon: Wind, value: "PM2.5 · PM10 · CO · NOx" },
  { label: "Ruido", icon: Volume2, value: "Decibeles · patrones sonoros" },
  { label: "Lluvia", icon: Droplets, value: "Nivel · sumideros · zonas de riesgo" },
];

export const mobilityHighlights: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Corredor urbano", icon: Navigation },
  { label: "Transporte público", icon: BusFront },
  { label: "Prioridad de emergencia", icon: AlertTriangle },
];

// Re-export for convenience
export { ShieldCheck };

export const deckRoutePath = "/presentacion";
