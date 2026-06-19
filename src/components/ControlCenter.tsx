import { useState } from "react";
import {
  LayoutDashboard,
  Map as MapIcon,
  Bell,
  Users,
  Activity,
  Cpu,
  Filter,
  Search,
  Maximize2,
  ChevronRight,
  Radio,
  Wind,
  Trash2,
  TrafficCone,
  Cctv,
  Lightbulb,
  Droplets,
  MessageSquareWarning,
} from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CityMap, type MapNode } from "@/components/ui/CityMap";
import { Sparkline } from "@/components/ui/Charts";
import { statusStyles, type StatusKey } from "@/components/ui/Card";
import { alerts, kpis, crews, trafficSeries, airSeries } from "@/data/operations";
import { cn } from "@/lib/cn";

const mapNodes: MapNode[] = [
  { id: "n1", x: 20, y: 24, status: "ok", pulse: true, label: "Cruce A" },
  { id: "n2", x: 46, y: 20, status: "ok", label: "Cámara 12" },
  { id: "n3", x: 70, y: 30, status: "warn", pulse: true, label: "Luminaria 478" },
  { id: "n4", x: 30, y: 50, status: "ok", label: "Contenedor 091" },
  { id: "n5", x: 56, y: 54, status: "alert", pulse: true, label: "Av. Corrientes" },
  { id: "n6", x: 80, y: 56, status: "ok", label: "Estación aire" },
  { id: "n7", x: 38, y: 76, status: "info", pulse: true, label: "Cuadrilla 3" },
  { id: "n8", x: 66, y: 80, status: "warn", pulse: true, label: "Sumidero 22" },
];

const filters = [
  { id: "all", label: "Todo", icon: LayoutDashboard },
  { id: "Transito", label: "Tránsito", icon: TrafficCone },
  { id: "Alumbrado", label: "Alumbrado", icon: Lightbulb },
  { id: "Residuos", label: "Residuos", icon: Trash2 },
  { id: "Ambiente", label: "Ambiente", icon: Wind },
  { id: "Camaras", label: "Cámaras", icon: Cctv },
  { id: "Hidrico", label: "Hídrico", icon: Droplets },
  { id: "Reclamo", label: "Reclamos", icon: MessageSquareWarning },
];

const sensorBars = [
  { label: "Semáforos", value: 96, color: "#10b981" },
  { label: "Alumbrado", value: 88, color: "#10b981" },
  { label: "Cámaras", value: 92, color: "#0ea5b7" },
  { label: "Residuos", value: 74, color: "#f59e0b" },
  { label: "Ambiente", value: 98, color: "#10b981" },
  { label: "Hídrico", value: 81, color: "#f59e0b" },
];

export function ControlCenter() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(alerts[0]);

  const filtered =
    active === "all" ? alerts : alerts.filter((a) => a.category === active);

  return (
    <SectionShell id="control" dark className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-line-bg opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-10 size-[400px] rounded-full bg-cyan-tech/10 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Centro de control"
            title="Una sola pantalla para ver y operar toda la ciudad"
            description="Mapa vivo, alertas operativas, KPIs, estado de sensores, cuadrillas activas y eventos en una consola diseñada para decisiones rápidas y trazables."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-dark shadow-lift ring-1 ring-white/5">
            {/* top toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/20 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5">
                  <span className="size-2 rounded-full bg-ops animate-pulse-soft" />
                  <span className="text-xs font-semibold text-white">Centro de Control · IT-TEL</span>
                </div>
                <span className="hidden text-xs text-ink-400 sm:inline">·</span>
                <span className="hidden text-xs text-ink-300 sm:inline">
                  CABA · 16 comunas · en línea
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-ink-300 md:flex">
                  <Search className="size-3.5" />
                  <span>Buscar activo, zona o evento…</span>
                </div>
                <button
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-ink-200 hover:bg-white/10"
                  aria-label="Expandir, pantalla completa"
                >
                  <Maximize2 className="size-3.5" /> Expandir
                </button>
              </div>
            </div>

            {/* KPI strip */}
            <div className="grid grid-cols-2 gap-px border-b border-white/10 bg-white/5 sm:grid-cols-3 lg:grid-cols-6">
              {kpis.map((k) => (
                <div key={k.label} className="bg-brand-dark px-3.5 py-3">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-ink-400">
                    {k.label}
                  </p>
                  <p className="nums mt-1 text-lg font-bold text-white">{k.value}</p>
                  <p
                    className={cn(
                      "mt-0.5 text-[10px] font-semibold",
                      k.tone === "up"
                        ? "text-ops"
                        : k.tone === "down"
                          ? "text-alert"
                          : "text-ink-400"
                    )}
                  >
                    {k.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* main grid */}
            <div className="grid gap-px bg-white/5 lg:grid-cols-[220px_1fr_300px]">
              {/* SIDEBAR filters */}
              <aside className="bg-brand-dark p-3">
                <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                  <Filter className="size-3.5" /> Verticales
                </div>
                <ul className="space-y-1">
                  {filters.map((f) => {
                    const isActive = active === f.id;
                    const Icon = f.icon;
                    const count =
                      f.id === "all"
                        ? alerts.length
                        : alerts.filter((a) => a.category === f.id).length;
                    return (
                      <li key={f.id}>
                        <button
                          onClick={() => setActive(f.id)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors",
                            isActive
                              ? "bg-cyan-tech/15 text-white ring-1 ring-cyan-tech/30"
                              : "text-ink-300 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <Icon className="size-4" /> {f.label}
                          </span>
                          <span
                            className={cn(
                              "nums rounded px-1.5 py-0.5 text-[10px] font-semibold",
                              isActive ? "bg-cyan-tech/20 text-cyan-glow" : "bg-white/5 text-ink-400"
                            )}
                          >
                            {count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-400">
                    Salud de red
                  </p>
                  <div className="mt-2 space-y-2.5">
                    {sensorBars.slice(0, 4).map((b) => (
                      <BarRowDark key={b.label} {...b} />
                    ))}
                  </div>
                </div>
              </aside>

              {/* MAP */}
              <div className="relative min-h-[360px] bg-brand-deep">
                <CityMap nodes={mapNodes} variant="dark" className="absolute inset-0 size-full" />
                <div className="pointer-events-none absolute left-3 top-3 rounded-lg bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                  Mapa operativo · tiempo real
                </div>
                <div className="pointer-events-none absolute bottom-3 left-3 flex flex-wrap items-center gap-3 rounded-lg bg-black/45 px-3 py-1.5 text-[10px] text-white backdrop-blur">
                  <LegendDot color="#10b981" label="Operativo" />
                  <LegendDot color="#f59e0b" label="Atención" />
                  <LegendDot color="#ef4444" label="Crítico" />
                  <LegendDot color="#0ea5b7" label="Cuadrilla" />
                </div>
                <div className="pointer-events-none absolute right-3 top-3 rounded-lg bg-black/45 px-2.5 py-1 text-[10px] text-white backdrop-blur">
                  <span className="nums">8.412</span> activos · <span className="nums">38</span> alertas
                </div>
              </div>

              {/* RIGHT PANEL: alerts + event */}
              <aside className="bg-brand-dark p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                    <Bell className="size-3.5" /> Alertas
                  </p>
                  <span className="nums rounded bg-alert/15 px-1.5 py-0.5 text-[10px] font-semibold text-alert">
                    {filtered.length}
                  </span>
                </div>
                <ul className="max-h-[210px] space-y-1 overflow-y-auto pr-0.5">
                  {filtered.map((a) => {
                    const s = statusStyles[a.status];
                    const isSel = selected.id === a.id;
                    return (
                      <li key={a.id}>
                        <button
                          onClick={() => setSelected(a)}
                          className={cn(
                            "w-full rounded-lg p-2 text-left transition-colors",
                            isSel
                              ? "bg-white/10 ring-1 ring-cyan-tech/30"
                              : "hover:bg-white/5"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                              <span className={cn("dot", s.dot)} />
                              {a.title}
                            </span>
                            <span className="nums text-[10px] text-ink-400">{a.time}</span>
                          </div>
                          <p className="mt-0.5 truncate text-[10px] text-ink-400">{a.zone}</p>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* selected event */}
                <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between">
                    <StatusChipDark status={selected.status} label={selected.category} />
                    <span className="nums text-[10px] text-ink-400">#{selected.id.toUpperCase()}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">{selected.title}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-ink-300">
                    {selected.detail}
                  </p>
                  <p className="mt-2 text-[10px] text-ink-400">{selected.zone}</p>

                  <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
                    <Row label="Categoría" value={selected.category} />
                    <Row label="Hora" value={selected.time} />
                    <Row label="Cuadrilla" value={selected.crew ?? "Sin asignar"} />
                    <Row label="SLA" value="2h · en curso" tone="warn" />
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 rounded-lg bg-cyan-tech px-2.5 py-1.5 text-[11px] font-semibold text-brand-deep hover:bg-cyan-glow">
                      Asignar
                    </button>
                    <button className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-white hover:bg-white/10">
                      Ver ficha
                    </button>
                  </div>
                </div>
              </aside>
            </div>

            {/* bottom: charts + crews + events */}
            <div className="grid gap-px border-t border-white/5 bg-white/5 lg:grid-cols-3">
              {/* traffic + air */}
              <div className="bg-brand-dark p-4">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                  <Activity className="size-3.5" /> Evolución · 14 días
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <ChartCard title="Tránsito" series={trafficSeries} color="#22d3ee" />
                  <ChartCard title="Calidad aire" series={airSeries} color="#10b981" />
                </div>
              </div>

              {/* crews */}
              <div className="bg-brand-dark p-4">
                <p className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                  <span className="flex items-center gap-2">
                    <Users className="size-3.5" /> Cuadrillas activas
                  </span>
                  <span className="nums text-ink-300">{crews.length}</span>
                </p>
                <ul className="mt-3 space-y-1.5">
                  {crews.map((c) => {
                    const s = statusStyles[c.status];
                    return (
                      <li
                        key={c.id}
                        className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-2.5 py-2"
                      >
                        <span className={cn("dot", s.dot)} />
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] font-semibold text-white">
                            {c.name}{" "}
                            <span className="nums text-[10px] font-medium text-ink-400">
                              · {c.id}
                            </span>
                          </p>
                          <p className="truncate text-[10px] text-ink-400">
                            {c.zone} · {c.task}
                          </p>
                        </div>
                        <ChevronRight className="size-4 text-ink-500" />
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* events table */}
              <div className="bg-brand-dark p-4">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                  <Cpu className="size-3.5" /> Últimos eventos
                </p>
                <ul className="mt-3 space-y-1">
                  {alerts.slice(0, 6).map((a) => {
                    const s = statusStyles[a.status];
                    return (
                      <li
                        key={a.id}
                        className="flex items-center gap-2 border-b border-white/5 py-2 last:border-0"
                      >
                        <span className={cn("dot", s.dot)} />
                        <span className="min-w-0 flex-1 truncate text-[12px] text-ink-200">
                          {a.title}
                        </span>
                        <span className="nums text-[10px] text-ink-500">{a.time}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* caption strip */}
        <Reveal delay={0.15} className="mt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-400">
            <FeatureBadge icon={MapIcon}>Mapa vivo por zona y comuna</FeatureBadge>
            <FeatureBadge icon={Bell}>Alertas priorizadas</FeatureBadge>
            <FeatureBadge icon={Users}>Cuadrillas en mapa</FeatureBadge>
            <FeatureBadge icon={Radio}>Trazabilidad de eventos</FeatureBadge>
            <FeatureBadge icon={Activity}>Indicadores de cumplimiento</FeatureBadge>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="size-2 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

function BarRowDark({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[10px]">
        <span className="text-ink-300">{label}</span>
        <span className="nums font-semibold text-white">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "warn";
}) {
  return (
    <div className="flex items-center justify-between text-[11px]">
      <span className="text-ink-400">{label}</span>
      <span
        className={cn(
          "nums font-semibold",
          tone === "warn" ? "text-warn" : "text-white"
        )}
      >
        {value}
      </span>
    </div>
  );
}

function StatusChipDark({ status, label }: { status: StatusKey; label: string }) {
  const s = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold",
        "border-white/15 bg-white/5",
        s.text
      )}
    >
      <span className={cn("size-1.5 rounded-full", s.dot)} />
      {label}
    </span>
  );
}

function ChartCard({
  title,
  series,
  color,
}: {
  title: string;
  series: number[];
  color: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-wide text-ink-400">
          {title}
        </p>
        <span className="nums text-[10px] font-semibold text-white">
          {series[series.length - 1]}
        </span>
      </div>
      <Sparkline points={series} stroke={color} className="mt-1 h-8" />
    </div>
  );
}

function FeatureBadge({
  icon: Icon,
  children,
}: {
  icon: typeof Bell;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
      <Icon className="size-3.5 text-cyan-glow" />
      {children}
    </span>
  );
}

