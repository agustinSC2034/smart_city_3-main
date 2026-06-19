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
  Signpost,
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
      "Mapa vivo de la ciudad con alertas, estado de servicios y trazabilidad de cada evento.",
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
      "Regulación adaptativa, prioridad a transporte público y emergencias, alertas de fallas.",
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
      "Conteo vehicular, tiempos de viaje, incidentes, cortes y estacionamiento inteligente.",
    metric: "-18%",
    metricLabel: "Demora media",
    status: "info",
    tag: "Movilidad",
  },
  {
    id: "cameras",
    icon: Cctv,
    title: "Cámaras inteligentes",
    description:
      "Analítica de video para detectar incidentes, objetos, acumulación u obstrucciones.",
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
      "Detección de fallas en tiempo real, dimerización y postes como infraestructura IoT.",
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
      "Sensores de llenado, rutas optimizadas y detección de desbordes por punto crítico.",
    metric: "92%",
    metricLabel: "Contenedor pico",
    status: "alert",
    tag: "Higiene",
  },
  {
    id: "claims",
    icon: MessageSquareWarning,
    title: "Reclamos ciudadanos",
    description:
      "Reclamos con foto y ubicación, clasificación, derivación y cierre con evidencia.",
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
      "Activos georreferenciados, órdenes de trabajo, cuadrillas y evidencia fotográfica.",
    metric: "2.340",
    metricLabel: "Activos",
    status: "ok",
    tag: "Auditoría",
  },
  {
    id: "environment",
    icon: Wind,
    title: "Ambiente: aire, ruido y olores",
    description:
      "Sensores de PM2.5, gases, ruido y olores por zona con mapas de calor y alertas.",
    metric: "26",
    metricLabel: "Estaciones",
    status: "info",
    tag: "Ambiente",
  },
  {
    id: "water",
    icon: Droplets,
    title: "Agua e inundaciones",
    description:
      "Nivel, lluvia y sumideros críticos con alertas tempranas y cuadrillas preventivas.",
    metric: "180",
    metricLabel: "Sumideros",
    status: "warn",
    tag: "Hidrico",
  },
  {
    id: "tolls",
    icon: Signpost,
    title: "Peajes y accesos",
    description:
      "Lectura de patentes, telepeaje, control de flotas y cumplimiento por corredor.",
    metric: "4",
    metricLabel: "Corredores",
    status: "ok",
    tag: "Movilidad",
  },
];

solutions.sort((a, b) => {
  if (a.id === "waste") return -1;
  if (b.id === "waste") return 1;
  return 0;
});

export const heroIndicators: { label: string; status: StatusKey }[] = [];
