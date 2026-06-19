import type { StatusKey } from "@/components/ui/Card";

export type Alert = {
  id: string;
  zone: string;
  title: string;
  detail: string;
  status: StatusKey;
  time: string;
  category: "Transito" | "Alumbrado" | "Residuos" | "Ambiente" | "Camaras" | "Reclamo" | "Hidrico";
  crew?: string;
};

export const alerts: Alert[] = [
  {
    id: "a1",
    zone: "Centro / Av. Corrientes y Callao",
    title: "Congestión alta en cruce",
    detail: "Demora media 11 min. Semáforo 3 en regulación adaptativa.",
    status: "alert",
    time: "09:42",
    category: "Transito",
    crew: "Cuadrilla T-3",
  },
  {
    id: "a2",
    zone: "Comuna 5 / Balvanera",
    title: "Luminaria fuera de servicio",
    detail: "Luminaria 478 - postes Av. Rivadavia. Falla de driver.",
    status: "warn",
    time: "09:28",
    category: "Alumbrado",
    crew: "Cuadrilla L-1",
  },
  {
    id: "a3",
    zone: "Comuna 1 / Puerto Madero",
    title: "Contenedor con llenado 92%",
    detail: "Contenedor 091 - ruta de recolección recalculada.",
    status: "warn",
    time: "09:15",
    category: "Residuos",
    crew: "Cuadrilla R-2",
  },
  {
    id: "a4",
    zone: "Comuna 14 / Palermo",
    title: "Ruido supera umbral nocturno",
    detail: "Sensor 22 - 68 dB. Patron recurrente zona gastronómica.",
    status: "info",
    time: "02:10",
    category: "Ambiente",
  },
  {
    id: "a5",
    zone: "Comuna 3 / Balvanera",
    title: "Cámara detecta acumulación",
    detail: "Cámara 217 - objetos en vía pública. Verificando evento.",
    status: "warn",
    time: "08:51",
    category: "Camaras",
  },
  {
    id: "a6",
    zone: "147 / Reclamo ciudadano",
    title: "Reclamo pendiente de validación",
    detail: "Ticket #44-1182 - bache con foto. Cruce con activo cercano.",
    status: "info",
    time: "08:33",
    category: "Reclamo",
  },
  {
    id: "a7",
    zone: "Comuna 4 / La Boca",
    title: "Cuadrilla asignada en camino",
    detail: "Cuadrilla M-7 ETA 14 min. Orden de trabajo OT-2207.",
    status: "ok",
    time: "09:47",
    category: "Reclamo",
    crew: "Cuadrilla M-7",
  },
  {
    id: "a8",
    zone: "Comuna 6 / Caballito",
    title: "Sumidero crítico - nivel alto",
    detail: "Sumidero 22 - sensor de nivel 78%. Lluvia 12 mm/h.",
    status: "warn",
    time: "07:58",
    category: "Hidrico",
    crew: "Cuadrilla H-4",
  },
];

export type KpiTone = "up" | "down" | "flat";

export type Kpi = { label: string; value: string; delta: string; tone: KpiTone };

export const kpis: Kpi[] = [
  { label: "Sensores activos", value: "8.412", delta: "+126 hoy", tone: "up" },
  { label: "Alertas procesadas", value: "1.284", delta: "+38 últimas 24h", tone: "up" },
  { label: "Tiempo medio resolución", value: "42 min", delta: "-18% vs mes previo", tone: "up" },
  { label: "Servicios monitoreados", value: "11", delta: "Verticales activas", tone: "flat" },
  { label: "Cumplimiento SLA", value: "94,2%", delta: "+3,1pp", tone: "up" },
  { label: "Zonas críticas", value: "7", delta: "-2 vs semana", tone: "up" },
];

export const trafficSeries = [38, 42, 47, 55, 61, 58, 64, 72, 81, 76, 69, 74, 80, 88];
export const airSeries = [22, 24, 21, 26, 30, 34, 38, 41, 39, 36, 33, 31, 28, 27];
export const resolutionSeries = [62, 58, 55, 51, 48, 46, 44, 43, 42, 41, 42, 42];

export const crews = [
  { id: "T-3", name: "Tránsito 3", zone: "Centro", status: "ok" as StatusKey, task: "Regulación cruce" },
  { id: "L-1", name: "Alumbrado 1", zone: "Balvanera", status: "warn" as StatusKey, task: "Reemplazo driver" },
  { id: "R-2", name: "Residuos 2", zone: "Puerto Madero", status: "ok" as StatusKey, task: "Recolección ruta 7" },
  { id: "M-7", name: "Mantenimiento 7", zone: "La Boca", status: "info" as StatusKey, task: "OT-2207 bache" },
  { id: "H-4", name: "Hídrico 4", zone: "Caballito", status: "warn" as StatusKey, task: "Inspección sumidero" },
  { id: "A-1", name: "Ambiente 1", zone: "Palermo", status: "ok" as StatusKey, task: "Calibración sensor" },
];
