import { useState } from "react";
import { Wind, Volume2, Droplets, Activity, AlertTriangle, TrendingUp } from "lucide-react";
import { FeatureSection, MockFrame } from "@/components/ui/Feature";
import { statusStyles, type StatusKey } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type EnvTab = "aire" | "ruido" | "hidrico";

const tabs: { id: EnvTab; label: string; icon: typeof Wind }[] = [
  { id: "aire", label: "Aire", icon: Wind },
  { id: "ruido", label: "Ruido", icon: Volume2 },
  { id: "hidrico", label: "Riesgo hídrico", icon: Droplets },
];

const dataByTab: Record<EnvTab, {
  metrics: { label: string; value: string; tone?: StatusKey }[];
  alert: { title: string; zone: string; tone: StatusKey };
  mapColor: string;
  mapNodes: { x: number; y: number; c: string; label: string; pulse?: boolean }[];
}> = {
  aire: {
    metrics: [
      { label: "PM2.5", value: "28", tone: "ok" as StatusKey },
      { label: "PM10", value: "42", tone: "warn" as StatusKey },
      { label: "NOx", value: "0,8", tone: "ok" as StatusKey },
      { label: "Temperatura", value: "22°C" },
    ],
    alert: { title: "PM10 supera umbral", zone: "Comuna 1 · Microcentro", tone: "warn" as StatusKey },
    mapColor: "#10b981",
    mapNodes: [
      { x: 30, y: 28, c: "#10b981", label: "Estación 1" },
      { x: 60, y: 36, c: "#f59e0b", label: "Estación 2", pulse: true },
      { x: 44, y: 64, c: "#10b981", label: "Estación 3" },
      { x: 76, y: 72, c: "#10b981", label: "Estación 4" },
    ],
  },
  ruido: {
    metrics: [
      { label: "Promedio diurno", value: "58 dB", tone: "warn" as StatusKey },
      { label: "Pico nocturno", value: "72 dB", tone: "alert" as StatusKey },
      { label: "Zonas en alerta", value: "3", tone: "warn" as StatusKey },
      { label: "Reclamos asociados", value: "12" },
    ],
    alert: { title: "Ruido supera umbral nocturno", zone: "Comuna 14 · Palermo", tone: "alert" as StatusKey },
    mapColor: "#f59e0b",
    mapNodes: [
      { x: 28, y: 40, c: "#10b981", label: "Sensor 1" },
      { x: 56, y: 30, c: "#f59e0b", label: "Sensor 2" },
      { x: 70, y: 56, c: "#ef4444", label: "Sensor 3", pulse: true },
      { x: 40, y: 70, c: "#10b981", label: "Sensor 4" },
    ],
  },
  hidrico: {
    metrics: [
      { label: "Nivel", value: "78%", tone: "warn" as StatusKey },
      { label: "Lluvia 1h", value: "12 mm", tone: "warn" as StatusKey },
      { label: "Sumideros activos", value: "180" },
      { label: "Calles afectadas", value: "3", tone: "alert" as StatusKey },
    ],
    alert: { title: "Sumidero crítico · nivel alto", zone: "Comuna 6 · Caballito", tone: "alert" as StatusKey },
    mapColor: "#0ea5b7",
    mapNodes: [
      { x: 32, y: 36, c: "#0ea5b7", label: "Sensor lluvia" },
      { x: 56, y: 48, c: "#ef4444", label: "Sumidero 22", pulse: true },
      { x: 70, y: 68, c: "#f59e0b", label: "Nivel 78%" },
      { x: 24, y: 72, c: "#0ea5b7", label: "Bombeo" },
    ],
  },
};

export function EnvironmentalMonitoring() {
  return (
    <FeatureSection
      id="ambiente"
      dark
      eyebrow="Ambiente · Prevención"
      title="Monitoreo ambiental y prevención"
      description="Una red de sensores para medir las condiciones urbanas, detectar riesgos y priorizar acciones antes de que el problema escale."
      highlights={[
        "Calidad del aire: PM2.5, PM10, CO, NOx, temperatura y humedad",
        "Ruido urbano: decibeles, picos y patrones por zona y horario",
        "Lluvia, drenaje e inundaciones: nivel, sumideros y zonas de riesgo",
        "Alertas por umbral y tareas preventivas para cuadrillas",
      ]}
      platformNote="Las mediciones activan alertas, tareas preventivas e información pública."
      ctaLabel="Ver gestión de incidentes"
      ctaTarget="incidentes"
      mock={<EnvMock />}
    />
  );
}

function EnvMock() {
  const [tab, setTab] = useState<EnvTab>("aire");
  const data = dataByTab[tab];
  const alertStyle = statusStyles[data.alert.tone];

  return (
    <MockFrame title="ambiente.ittel · monitoreo urbano" rightLabel="26 estaciones · en línea">
      {/* Tab selector */}
      <div className="mb-3 flex gap-1.5">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-200",
                isActive
                  ? "bg-brand text-white"
                  : "border border-ink-200 bg-white text-ink-600 hover:bg-ink-50"
              )}
            >
              <Icon className="size-4" /> {t.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr]">
        {/* Environmental map */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-brand-deep sm:aspect-auto sm:min-h-[280px]">
          <svg viewBox="0 0 200 130" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <rect width="200" height="130" fill="#081a33" />
            <defs>
              <pattern id="envgrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0V10" fill="none" stroke="#16356a" strokeWidth="0.3" />
              </pattern>
              <radialGradient id="heatmap" cx="50%" cy="50%" r="40%">
                <stop offset="0%" stopColor={data.mapColor} stopOpacity="0.25" />
                <stop offset="100%" stopColor={data.mapColor} stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="200" height="130" fill="url(#envgrid)" opacity="0.5" />
            {/* heat zones */}
            {data.mapNodes.map((n, i) => (
              <circle key={`h-${i}`} cx={n.x * 2} cy={n.y * 1.3} r="20" fill="url(#heatmap)" />
            ))}
            {/* sensor nodes */}
            {data.mapNodes.map((n, i) => (
              <g key={`n-${i}`}>
                {n.pulse && (
                  <circle cx={n.x * 2} cy={n.y * 1.3} r="4" fill={n.c} opacity="0.3" className="animate-pulse-soft" />
                )}
                <circle cx={n.x * 2} cy={n.y * 1.3} r="2.5" fill={n.c} />
                <circle cx={n.x * 2} cy={n.y * 1.3} r="1" fill="#fff" />
              </g>
            ))}
          </svg>
          <div className="absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            {tabs.find((t) => t.id === tab)?.label} · mapa de calor
          </div>
          {/* active alert */}
          <div className={cn(
            "absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-semibold text-white backdrop-blur",
            data.alert.tone === "alert" ? "bg-alert/80" : "bg-warn/80"
          )}>
            <AlertTriangle className="size-3" /> {data.alert.title}
          </div>
          <div className="absolute bottom-2.5 left-2.5 rounded-md bg-black/55 px-2 py-1 text-[10px] text-white backdrop-blur">
            {data.alert.zone}
          </div>
        </div>

        {/* Metrics + evolution */}
        <div className="flex flex-col gap-2.5">
          {/* metrics grid */}
          <div className="grid grid-cols-2 gap-2">
            {data.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-ink-200 bg-white p-2.5">
                <p className="text-[10px] font-medium uppercase tracking-wide text-ink-600">{m.label}</p>
                <p className={cn(
                  "nums mt-0.5 text-lg font-bold",
                  m.tone ? statusStyles[m.tone].text : "text-ink-900"
                )}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* mini evolution chart */}
          <div className="rounded-lg border border-ink-200 bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-600">
                <Activity className="size-3.5 text-cyan-tech" /> Evolución · 24h
              </p>
              <span className="nums text-[11px] font-semibold text-ops-dark">estable</span>
            </div>
            <svg viewBox="0 0 120 40" className="mt-1 h-10 w-full" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="envspark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={data.mapColor} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={data.mapColor} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 30 L15 28 L30 25 L45 22 L60 18 L75 20 L90 15 L105 12 L120 14" fill="none" stroke={data.mapColor} strokeWidth="2" strokeLinecap="round" />
              <path d="M0 30 L15 28 L30 25 L45 22 L60 18 L75 20 L90 15 L105 12 L120 14 L120 40 L0 40 Z" fill="url(#envspark)" />
            </svg>
          </div>

          {/* alert detail */}
          <div className={cn("flex items-center gap-2.5 rounded-lg border p-3", alertStyle.chip)}>
            <span className={cn("dot", alertStyle.dot)} />
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold text-ink-900">{data.alert.title}</p>
              <p className="text-[10px] text-ink-600">{data.alert.zone}</p>
            </div>
            <TrendingUp className={cn("size-4", alertStyle.text)} />
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
