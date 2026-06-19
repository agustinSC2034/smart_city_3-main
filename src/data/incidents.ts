import type { StatusKey } from "@/components/ui/Card";
import type { MapNode } from "@/components/ui/CityMap";

export type IncidentStage = {
  id: string;
  label: string;
  status: StatusKey;
};

export type IncidentAction = {
  label: string;
  status: StatusKey;
};

export type IncidentArea = {
  label: string;
};

export type IncidentMetric = {
  label: string;
  value: string;
  hint?: string;
  tone?: StatusKey;
};

export type IncidentTimelineItem = {
  time: string;
  label: string;
  status: StatusKey;
};

export type Scenario = {
  id: string;
  tabLabel: string;
  title: string;
  location: string;
  status: string;
  statusTone: StatusKey;
  priority: string;
  elapsed: string;
  slaRemaining: string;
  mapNodes: MapNode[];
  mapRoads: [string, string][];
  hotSpotId: string;
  cameraLabel: string;
  cameraHint: string;
  areas: IncidentArea[];
  actions: IncidentAction[];
  metrics: IncidentMetric[];
  timeline: IncidentTimelineItem[];
};

export const processStages: IncidentStage[] = [
  { id: "detected", label: "Detectado", status: "ok" },
  { id: "validated", label: "Validado", status: "ok" },
  { id: "plan", label: "Plan activado", status: "info" },
  { id: "crews", label: "Equipos coordinados", status: "info" },
  { id: "resolved", label: "Resuelto", status: "warn" },
  { id: "audited", label: "Auditado", status: "warn" },
];

export const scenarios: Scenario[] = [
  {
    id: "accident",
    tabLabel: "Accidente vial",
    title: "Accidente vial",
    location: "Av. Corrientes y Callao",
    status: "En resolución",
    statusTone: "warn",
    priority: "Alta",
    elapsed: "12 min",
    slaRemaining: "18 min restantes",
    mapNodes: [
      { id: "m1", x: 50, y: 50, status: "alert", pulse: true, label: "Accidente" },
      { id: "m2", x: 30, y: 34, status: "info", pulse: true, label: "Cámara PTZ" },
      { id: "m3", x: 70, y: 38, status: "warn", label: "Semáforo 3" },
      { id: "m4", x: 26, y: 70, status: "info", pulse: true, label: "Cuadrilla V-1" },
      { id: "m5", x: 76, y: 72, status: "ok", label: "Desvío" },
      { id: "m6", x: 18, y: 22, status: "ok", label: "Cruce norte" },
      { id: "m7", x: 84, y: 22, status: "ok", label: "Cruce sur" },
    ],
    mapRoads: [
      ["m6", "m1"],
      ["m7", "m1"],
      ["m1", "m3"],
      ["m1", "m2"],
      ["m1", "m4"],
      ["m4", "m5"],
      ["m6", "m2"],
    ],
    hotSpotId: "m1",
    cameraLabel: "Cámara PTZ 217",
    cameraHint: "enfocando cruce",
    areas: [
      { label: "Tránsito" },
      { label: "Semaforización" },
      { label: "Guardia urbana" },
      { label: "Cuadrilla vial" },
    ],
    actions: [
      { label: "Plan semafórico de contingencia activado", status: "ok" },
      { label: "Desvío recomendado por Callao", status: "info" },
      { label: "Cámara PTZ enfocada", status: "ok" },
      { label: "Cuadrilla V-1 en camino", status: "warn" },
    ],
    metrics: [
      { label: "Tiempo transcurrido", value: "12 min" },
      { label: "SLA", value: "18 min", hint: "restantes", tone: "warn" },
      { label: "Áreas activas", value: "4" },
    ],
    timeline: [
      { time: "09:42", label: "Cámara detecta accidente", status: "alert" },
      { time: "09:43", label: "Alerta generada", status: "alert" },
      { time: "09:44", label: "Operador valida el incidente", status: "info" },
      { time: "09:45", label: "Cámaras cercanas asociadas", status: "ok" },
      { time: "09:46", label: "Plan semafórico ajustado", status: "ok" },
      { time: "09:47", label: "Desvío propuesto", status: "info" },
      { time: "09:48", label: "Cuadrilla V-1 asignada", status: "warn" },
      { time: "09:49", label: "Área de tránsito notificada", status: "ok" },
      { time: "—", label: "Evidencia y cierre", status: "warn" },
    ],
  },
  {
    id: "flood",
    tabLabel: "Inundación",
    title: "Riesgo de inundación",
    location: "Comuna 6 · Caballito",
    status: "Preventivo",
    statusTone: "warn",
    priority: "Media",
    elapsed: "08 min",
    slaRemaining: "30 min restantes",
    mapNodes: [
      { id: "f1", x: 48, y: 52, status: "alert", pulse: true, label: "Sumidero 22" },
      { id: "f2", x: 28, y: 40, status: "warn", label: "Sensor lluvia" },
      { id: "f3", x: 68, y: 44, status: "warn", pulse: true, label: "Nivel 78%" },
      { id: "f4", x: 32, y: 72, status: "info", pulse: true, label: "Cuadrilla H-4" },
      { id: "f5", x: 78, y: 70, status: "ok", label: "Ruta alternativa" },
      { id: "f6", x: 16, y: 22, status: "ok", label: "Zona alta" },
    ],
    mapRoads: [
      ["f6", "f1"],
      ["f1", "f3"],
      ["f1", "f2"],
      ["f1", "f4"],
      ["f4", "f5"],
    ],
    hotSpotId: "f1",
    cameraLabel: "Cámara 142",
    cameraHint: "calles afectadas",
    areas: [
      { label: "Hidráulica" },
      { label: "Tránsito" },
      { label: "Guardia urbana" },
      { label: "Cuadrilla hidráulica" },
    ],
    actions: [
      { label: "Cierre preventivo recomendado", status: "warn" },
      { label: "Ruta alternativa informada", status: "ok" },
      { label: "Cuadrilla H-4 enviada", status: "info" },
      { label: "Sumideros en inspección", status: "warn" },
    ],
    metrics: [
      { label: "Nivel de agua", value: "78%", tone: "warn" },
      { label: "Lluvia acumulada", value: "12 mm", hint: "última hora" },
      { label: "Calles afectadas", value: "3" },
    ],
    timeline: [
      { time: "07:50", label: "Sensor de nivel detecta aumento", status: "warn" },
      { time: "07:51", label: "Cruce con lluvia y zonas de riesgo", status: "info" },
      { time: "07:52", label: "Alerta generada", status: "alert" },
      { time: "07:53", label: "Cámaras cercanas revisadas", status: "ok" },
      { time: "07:55", label: "Cuadrilla hidráulica asignada", status: "info" },
      { time: "07:57", label: "Cierre preventivo recomendado", status: "warn" },
      { time: "07:58", label: "Ruta alternativa informada", status: "ok" },
      { time: "—", label: "Resolución registrada", status: "warn" },
    ],
  },
  {
    id: "failure",
    tabLabel: "Falla urbana",
    title: "Semáforo fuera de servicio",
    location: "Comuna 5 · Balvanera",
    status: "En reparación",
    statusTone: "warn",
    priority: "Alta",
    elapsed: "16 min",
    slaRemaining: "44 min restantes",
    mapNodes: [
      { id: "d1", x: 52, y: 48, status: "alert", pulse: true, label: "Semáforo 03" },
      { id: "d2", x: 34, y: 36, status: "info", pulse: true, label: "Cuadrilla T-2" },
      { id: "d3", x: 72, y: 40, status: "ok", label: "Activo LUM-478" },
      { id: "d4", x: 30, y: 70, status: "ok", label: "Reclamo #44-1190" },
      { id: "d5", x: 76, y: 72, status: "ok", label: "Cruce alterno" },
    ],
    mapRoads: [
      ["d4", "d1"],
      ["d1", "d3"],
      ["d1", "d2"],
      ["d2", "d5"],
    ],
    hotSpotId: "d1",
    cameraLabel: "Cámara 88",
    cameraHint: "estado del cruce",
    areas: [
      { label: "Mantenimiento vial" },
      { label: "Semaforización" },
      { label: "Tránsito" },
      { label: "Técnico de campo" },
    ],
    actions: [
      { label: "Orden de trabajo OT-3310 abierta", status: "info" },
      { label: "Técnico asignado y en camino", status: "warn" },
      { label: "Controlador en diagnóstico", status: "warn" },
      { label: "Cruce alterno señalizado", status: "ok" },
    ],
    metrics: [
      { label: "Tiempo transcurrido", value: "16 min" },
      { label: "SLA", value: "44 min", hint: "restantes", tone: "ok" },
      { label: "Activo", value: "SEM-03" },
    ],
    timeline: [
      { time: "09:18", label: "Sensor + reclamo detectan falla", status: "alert" },
      { time: "09:19", label: "Activo SEM-03 identificado", status: "info" },
      { time: "09:20", label: "Orden de trabajo OT-3310 abierta", status: "ok" },
      { time: "09:22", label: "Técnico asignado", status: "warn" },
      { time: "09:34", label: "Técnico en sitio · inicio de reparación", status: "info" },
      { time: "—", label: "Evidencia y medición de SLA", status: "warn" },
      { time: "—", label: "Incidente cerrado", status: "warn" },
    ],
  },
];
