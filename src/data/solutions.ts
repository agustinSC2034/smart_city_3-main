import {
  LayoutDashboard,
  TrafficCone,
  CarFront,
  Cctv,
  Lightbulb,
  Trash2,
  MessageSquareWarning,
  Wrench,
  Wind,
  Droplets,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import type { StatusKey } from "@/components/ui/Card";

export type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  status: StatusKey;
  tag: string;
};

export const solutions: Solution[] = [
  {
    id: "control-center",
    icon: LayoutDashboard,
    title: "Centro de Control Smart City",
    description:
      "Mapa vivo de la ciudad con alertas operativas, estado de servicios, gestión por comuna o zona, indicadores de cumplimiento y trazabilidad de cada evento.",
    metric: "24/7",
    metricLabel: "Monitoreo",
    status: "ok",
    tag: "Núcleo",
  },
  {
    id: "traffic-lights",
    icon: TrafficCone,
    title: "Semáforos inteligentes",
    description:
      "Cruces conectados con regulación adaptativa, detección de congestión, prioridad para transporte público y emergencias, estado de controladores y alertas de fallas.",
    metric: "412",
    metricLabel: "Cruces activos",
    status: "ok",
    tag: "Movilidad",
  },
  {
    id: "mobility",
    icon: CarFront,
    title: "Tránsito y movilidad",
    description:
      "Cámaras de conteo vehicular, detección de congestión, tiempos de viaje, incidentes, cortes y estacionamiento inteligente, con zonas escolares, turísticas y de carga.",
    metric: "-18%",
    metricLabel: "Demora media",
    status: "info",
    tag: "Movilidad",
  },
  {
    id: "cameras",
    icon: Cctv,
    title: "Cámaras y operación urbana",
    description:
      "Cámaras integradas al mapa con analítica de video para detectar incidentes, objetos, acumulación, humo u obstrucciones. Evidencia visual para la operación, no vigilancia invasiva.",
    metric: "1.286",
    metricLabel: "Cámaras",
    status: "ok",
    tag: "Operación",
  },
  {
    id: "lighting",
    icon: Lightbulb,
    title: "Alumbrado inteligente",
    description:
      "Luminarias conectadas con detección de fallas en tiempo real, dimerización por horario o evento, mantenimiento preventivo y postes como infraestructura IoT para sensores y cámaras.",
    metric: "38%",
    metricLabel: "Ahorro energía",
    status: "ok",
    tag: "Energía",
  },
  {
    id: "waste",
    icon: Trash2,
    title: "Residuos inteligentes",
    description:
      "Contenedores con sensores de nivel de llenado, rutas de recolección optimizadas, detección de desbordes y control de cumplimiento por punto crítico.",
    metric: "92%",
    metricLabel: "Contenedor pico",
    status: "alert",
    tag: "Higiene",
  },
  {
    id: "claims",
    icon: MessageSquareWarning,
    title: "Reclamos ciudadanos conectados",
    description:
      "Reclamos desde web, app o 147/BOTI con foto y ubicación, clasificación automática, derivación a área responsable, seguimiento de SLA y cierre con evidencia. El reclamo como sensor humano.",
    metric: "147",
    metricLabel: "Canal integrado",
    status: "warn",
    tag: "Ciudadano",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Mantenimiento urbano",
    description:
      "Inventario de activos georreferenciados, órdenes de trabajo, cuadrillas en mapa, tareas por prioridad, fotos antes y después, historial de activos, SLA y productividad.",
    metric: "2.340",
    metricLabel: "Activos",
    status: "ok",
    tag: "Auditoría",
  },
  {
    id: "environment",
    icon: Wind,
    title: "Ambiente: aire y ruido",
    description:
      "Sensores de PM2.5, PM10, CO, NOx, temperatura y humedad, más sensores de ruido por zona que miden decibeles y patrones, no conversaciones. Mapas de calor y alertas por umbral.",
    metric: "26",
    metricLabel: "Estaciones",
    status: "info",
    tag: "Ambiente",
  },
  {
    id: "water",
    icon: Droplets,
    title: "Agua, drenaje e inundaciones",
    description:
      "Sensores de nivel, lluvia y sumideros críticos con alertas tempranas, mapa de riesgo y cuadrillas preventivas para reducir inundaciones y tiempos de respuesta.",
    metric: "180",
    metricLabel: "Sumideros",
    status: "warn",
    tag: "Hidrico",
  },
  {
    id: "zones",
    icon: MapPin,
    title: "Zonas inteligentes",
    description:
      "Zonas escolares, gastronómicas, turísticas, ambientales y de eventos con reglas específicas, sensores, cámaras, reclamos, permisos y fiscalización integrada.",
    metric: "9",
    metricLabel: "Zonas activas",
    status: "ok",
    tag: "Gestión",
  },
];

export const heroIndicators = [
  { label: "Sensores urbanos", status: "ok" as StatusKey },
  { label: "Alertas en tiempo real", status: "alert" as StatusKey },
  { label: "Gestión de cuadrillas", status: "info" as StatusKey },
  { label: "Datos en la nube", status: "ok" as StatusKey },
];
