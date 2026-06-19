import { useState } from "react";
import {
  Search,
  Maximize2,
  Bell,
  Activity,
  Users,
  Cloud,
  Radio,
  Map as MapIcon,
  TrafficCone,
  Lightbulb,
  Cctv,
  Trash2,
  Wind,
  MessageSquareWarning,
  ChevronRight,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CityMap, type MapNode } from "@/components/ui/CityMap";
import { statusStyles } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const verticals = [
  { id: "movilidad", label: "Movilidad", icon: TrafficCone },
  { id: "alumbrado", label: "Alumbrado", icon: Lightbulb },
  { id: "camaras", label: "Cámaras", icon: Cctv },
  { id: "residuos", label: "Residuos", icon: Trash2 },
  { id: "cuadrillas", label: "Cuadrillas", icon: Users },
  { id: "ambiente", label: "Ambiente", icon: Wind },
  { id: "reclamos", label: "Reclamos", icon: MessageSquareWarning },
];

const overviewNodes: MapNode[] = [
  { id: "n1", x: 22, y: 26, status: "ok", pulse: true, label: "Cruce A" },
  { id: "n2", x: 48, y: 20, status: "ok", label: "Cámara 12" },
  { id: "n3", x: 70, y: 32, status: "warn", pulse: true, label: "Luminaria 478" },
  { id: "n4", x: 32, y: 50, status: "ok", label: "Contenedor 091" },
  { id: "n5", x: 56, y: 56, status: "alert", pulse: true, label: "Av. Corrientes" },
  { id: "n6", x: 80, y: 58, status: "ok", label: "Estación aire" },
  { id: "n7", x: 40, y: 78, status: "info", pulse: true, label: "Cuadrilla 3" },
  { id: "n8", x: 66, y: 82, status: "warn", pulse: true, label: "Sumidero 22" },
];

const kpis = [
  { label: "Activos monitoreados", value: "8.412", icon: Radio },
  { label: "Servicios operativos", value: "96%", icon: Activity },
  { label: "Cuadrillas activas", value: "12", icon: Users },
  { label: "Cumplimiento SLA", value: "94,2%", icon: CheckCircle2 },
];

const annotations = [
  { side: "left", label: "Mapa unificado", desc: "Todos los activos y servicios sobre una misma cartografía.", icon: MapIcon },
  { side: "left", label: "Datos en tiempo real", desc: "Sensores, cámaras, GPS, reclamos y sistemas externos.", icon: Radio },
  { side: "right", label: "Operación", desc: "Alertas, tickets, responsables y cuadrillas.", icon: Bell },
  { side: "right", label: "Auditoría", desc: "SLA, evidencia, historial y cumplimiento.", icon: CheckCircle2 },
];

export function PlatformOverview() {
  const [activeVertical, setActiveVertical] = useState("movilidad");

  return (
    <section id="soluciones" className="relative scroll-mt-24 overflow-hidden bg-ink-50/40 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-dot-bg opacity-30" aria-hidden />

      <div className="container-page relative">
        {/* Header */}
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">
              <span className="size-1.5 rounded-full bg-current" aria-hidden />
              Plataforma Smart City
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Una plataforma, todas las verticales urbanas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              Una sola pantalla para visualizar activos, monitorear servicios, coordinar
              equipos y medir resultados en tiempo real.
            </p>
            <p className="mt-3 text-sm text-ink-500">
              Cada solución puede funcionar de manera independiente, pero comparte el mismo
              mapa, motor de alertas, órdenes de trabajo e indicadores.
            </p>
          </div>
        </Reveal>

        {/* Platform mockup — grande, centrado */}
        <Reveal delay={0.1} direction="scale" className="mt-12">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-lift ring-1 ring-ink-200/50">
              {/* Top bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-200 bg-ink-50/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-lg bg-brand px-2.5 py-1.5">
                    <span className="size-2 rounded-full bg-ops animate-pulse-soft" />
                    <span className="text-xs font-semibold text-white">IT-TEL Smart City</span>
                  </div>
                  <span className="hidden text-xs text-ink-500 sm:inline">·</span>
                  <span className="hidden text-xs text-ink-600 sm:inline">CABA · 16 comunas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-xs text-ink-500 md:flex">
                    <Search className="size-3.5" />
                    <span>Buscar activo, zona…</span>
                  </div>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-xs font-medium text-ink-600 hover:bg-ink-50">
                    <Maximize2 className="size-3.5" /> Expandir
                  </button>
                </div>
              </div>

              {/* KPI strip */}
              <div className="grid grid-cols-2 gap-px border-b border-ink-200 bg-ink-200 sm:grid-cols-4">
                {kpis.map((k) => {
                  const Icon = k.icon;
                  return (
                    <div key={k.label} className="bg-white px-4 py-3">
                      <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-ink-600">
                        <Icon className="size-3.5 text-cyan-tech" /> {k.label}
                      </p>
                      <p className="nums mt-1 text-xl font-bold text-ink-900">{k.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* Main grid: sidebar + map + right panel */}
              <div className="grid gap-px bg-ink-200 lg:grid-cols-[180px_1fr_260px]">
                {/* Sidebar */}
                <aside className="bg-white p-3">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
                    Verticales
                  </p>
                  <ul className="space-y-1">
                    {verticals.map((v) => {
                      const isActive = activeVertical === v.id;
                      const Icon = v.icon;
                      return (
                        <li key={v.id}>
                          <button
                            onClick={() => setActiveVertical(v.id)}
                            className={cn(
                              "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors",
                              isActive
                                ? "bg-brand text-white"
                                : "text-ink-600 hover:bg-ink-100"
                            )}
                          >
                            <Icon className="size-4 shrink-0" /> {v.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </aside>

                {/* Map */}
                <div className="relative min-h-[320px] bg-brand-deep">
                  <CityMap nodes={overviewNodes} variant="dark" className="absolute inset-0 size-full" />
                  <div className="pointer-events-none absolute left-3 top-3 rounded-lg bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                    Mapa operativo · tiempo real
                  </div>
                  <div className="pointer-events-none absolute bottom-3 left-3 flex flex-wrap items-center gap-3 rounded-lg bg-black/45 px-3 py-1.5 text-[10px] text-white backdrop-blur">
                    <span className="flex items-center gap-1.5"><span className="size-2 rounded-full" style={{ background: "#10b981" }} /> Operativo</span>
                    <span className="flex items-center gap-1.5"><span className="size-2 rounded-full" style={{ background: "#f59e0b" }} /> Atención</span>
                    <span className="flex items-center gap-1.5"><span className="size-2 rounded-full" style={{ background: "#ef4444" }} /> Crítico</span>
                    <span className="flex items-center gap-1.5"><span className="size-2 rounded-full" style={{ background: "#0ea5b7" }} /> Cuadrilla</span>
                  </div>
                </div>

                {/* Right panel — minimal */}
                <aside className="bg-white p-3">
                  <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
                    <Bell className="size-3.5" /> Eventos recientes
                  </p>
                  <ul className="space-y-2">
                    {[
                      { title: "Luminaria LUM-478", zone: "Av. Rivadavia 2140", status: "warn" as const, time: "09:28" },
                      { title: "Contenedor 92%", zone: "Puerto Madero", status: "warn" as const, time: "09:15" },
                    ].map((e) => {
                      const s = statusStyles[e.status];
                      return (
                        <li key={e.title} className="rounded-lg border border-ink-200 p-2.5">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-800">
                              <span className={cn("dot", s.dot)} /> {e.title}
                            </span>
                            <span className="nums text-[10px] text-ink-500">{e.time}</span>
                          </div>
                          <p className="mt-0.5 truncate text-[10px] text-ink-500">{e.zone}</p>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Selected asset */}
                  <div className="mt-3 rounded-lg border border-cyan-tech/30 bg-cyan-tech/5 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-700">
                      Activo seleccionado
                    </p>
                    <p className="mt-1 text-[13px] font-bold text-ink-900">LUM-478</p>
                    <p className="text-[11px] text-ink-600">Luminaria · Av. Rivadavia 2140</p>
                    <div className="mt-2 space-y-1 text-[11px]">
                      <p className="flex items-center gap-1.5 text-ink-700">
                        <CheckCircle2 className="size-3 text-ops" /> Falla detectada
                      </p>
                      <p className="flex items-center gap-1.5 text-ink-700">
                        <Clock className="size-3 text-cyan-tech" /> Orden OT-2207 creada
                      </p>
                      <p className="flex items-center gap-1.5 text-ink-700">
                        <Users className="size-3 text-warn" /> Cuadrilla L-1 en camino
                      </p>
                    </div>
                    <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand py-2 text-[11px] font-semibold text-white hover:bg-brand-dark">
                      Ver ficha <ChevronRight className="size-3" />
                    </button>
                  </div>
                </aside>
              </div>

              {/* Bottom analytics bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink-200 bg-ink-50/40 px-4 py-2.5">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink-600">
                  <TrendingUp className="size-3.5 text-ops" /> Analítica · indicadores, tendencias y planificación
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-ink-500">
                  <Cloud className="size-3.5" /> En línea · 09:47
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Annotations — editorial, no cards */}
        <Reveal delay={0.15} className="mt-10">
          <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-5 sm:grid-cols-2">
            {annotations.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/5 text-brand ring-1 ring-brand/10">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{a.label}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-600">{a.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Closing line */}
        <Reveal delay={0.2} className="mt-10">
          <p className="text-center text-sm font-medium text-ink-600">
            Soluciones independientes.{" "}
            <span className="text-brand">Una operación conectada.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
