import {
  Users,
  MapPin,
  Clock,
  CheckCircle2,
  X,
  Camera,
  FileText,
  TrendingUp,
} from "lucide-react";
import { FeatureSection, MockFrame } from "@/components/ui/Feature";
import { CityMap, type MapNode } from "@/components/ui/CityMap";
import { statusStyles, type StatusKey } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const crewNodes: MapNode[] = [
  { id: "c1", x: 24, y: 30, status: "ok", pulse: true, label: "L-1" },
  { id: "c2", x: 58, y: 24, status: "warn", pulse: true, label: "M-7" },
  { id: "c3", x: 70, y: 56, status: "info", pulse: true, label: "R-2" },
  { id: "c4", x: 38, y: 70, status: "ok", label: "T-3" },
];
const crewRoads: [string, string][] = [
  ["c1", "c2"],
  ["c2", "c3"],
  ["c1", "c4"],
];

export function CrewOperations() {
  return (
    <FeatureSection
      id="cuadrillas"
      dark
      eyebrow="Operación · Auditoría urbana"
      title="Gestión y auditoría de cuadrillas"
      description="Tickets, rutas, seguimiento GPS, evidencia y control de SLA para supervisar trabajos de limpieza, mantenimiento e infraestructura en la vía pública."
      highlights={[
        "Tickets u órdenes de trabajo con prioridad y SLA",
        "Ubicación GPS, ruta sugerida y llegada al lugar",
        "Evidencia fotográfica antes y después",
        "Validación de supervisor: aprobar, rechazar o corregir",
        "Productividad por cuadrilla y auditoría de contratistas",
      ]}
      platformNote="Cada ticket comparte responsable, GPS, SLA, evidencia e historial."
      ctaLabel="Ver detalle de activos y auditoría"
      ctaTarget="auditoria"
      mock={<CrewOpsMock />}
    />
  );
}

function CrewOpsMock() {
  const tickets = [
    { id: "OT-2207", t: "Bache · Av. Corrientes", crew: "M-7", st: "En sitio", status: "ok" as StatusKey, sla: "2h · 38 min" },
    { id: "OT-2208", t: "Luminaria sin luz", crew: "L-1", st: "En camino", status: "warn" as StatusKey, sla: "4h · 2h 10 min" },
    { id: "OT-2209", t: "Recolección punto crítico", crew: "R-2", st: "Activa", status: "info" as StatusKey, sla: "3h · 1h 45 min" },
    { id: "OT-2210", t: "Semáforo 03 fuera", crew: "T-3", st: "Pendiente", status: "alert" as StatusKey, sla: "1h · 22 min" },
  ];
  return (
    <MockFrame title="cuadrillas.ittel · despacho y auditoría" rightLabel="4 cuadrillas · en línea" dark>
      <div className="grid gap-3 sm:grid-cols-[1.3fr_1fr]">
        {/* Map with routes */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-brand-deep sm:aspect-auto sm:min-h-[280px]">
          <CityMap nodes={crewNodes} roads={crewRoads} variant="dark" className="absolute inset-0 size-full" />
          <div className="absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            Rutas y seguimiento GPS
          </div>
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-md bg-black/55 px-2 py-1 text-[10px] text-white backdrop-blur">
            <span className="size-2 rounded-full bg-ops" /> En sitio
            <span className="size-2 rounded-full bg-warn ml-2" /> En camino
            <span className="size-2 rounded-full bg-alert ml-2" /> Pendiente
          </div>
        </div>

        {/* Ticket list + selected detail */}
        <div className="flex flex-col gap-2.5">
          {/* Ticket list */}
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
            Tickets del día
          </p>
          <div className="max-h-[140px] space-y-1.5 overflow-y-auto pr-0.5">
            {tickets.map((t) => {
              const s = statusStyles[t.status];
              return (
                <div key={t.id} className={cn("rounded-lg border border-white/10 bg-white/5 p-2")}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                      <span className={cn("dot", s.dot)} /> {t.id}
                    </span>
                    <span className={cn("rounded-full px-1.5 py-0.5 text-[9px] font-semibold", s.chip)}>
                      {t.st}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-[10px] text-ink-300">{t.t}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-[9px] text-ink-400">
                    <Users className="size-2.5" /> {t.crew}
                    <span>·</span>
                    <Clock className="size-2.5" /> {t.sla}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Selected ticket detail */}
          <div className="rounded-lg border border-cyan-tech/30 bg-cyan-tech/5 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-glow">
              Ticket seleccionado
            </p>
            <p className="mt-1 text-[13px] font-bold text-white">OT-2207 · Bache</p>
            <p className="flex items-center gap-1 text-[11px] text-ink-300">
              <MapPin className="size-3" /> Av. Corrientes 1200 · Comuna 1
            </p>

            {/* Evidence before/after */}
            <p className="mt-2 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-ink-400">
              <Camera className="size-3" /> Evidencia
            </p>
            <div className="mt-1 grid grid-cols-2 gap-1.5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-[radial-gradient(circle_at_30%_30%,#475569,transparent_45%)]">
                <span className="absolute left-1 top-1 rounded bg-white/90 px-1 text-[8px] font-semibold text-ink-700">Antes</span>
                <CheckCircle2 className="absolute bottom-1 right-1 size-3 text-ops" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-[radial-gradient(circle_at_50%_50%,#e2e8f0,transparent_60%)]">
                <span className="absolute left-1 top-1 rounded bg-white/90 px-1 text-[8px] font-semibold text-ink-700">Después</span>
              </div>
            </div>

            {/* Approve / reject */}
            <div className="mt-2 flex gap-1.5">
              <button className="flex flex-1 items-center justify-center gap-1 rounded-md bg-ops py-1.5 text-[10px] font-semibold text-white hover:opacity-90">
                <CheckCircle2 className="size-3" /> Aprobar
              </button>
              <button className="flex flex-1 items-center justify-center gap-1 rounded-md border border-white/15 bg-white/5 py-1.5 text-[10px] font-semibold text-white hover:bg-white/10">
                <X className="size-3" /> Rechazar
              </button>
            </div>
          </div>

          {/* SLA summary */}
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <span className="flex items-center gap-1.5 text-[11px] text-ink-300">
              <FileText className="size-3.5 text-cyan-glow" /> SLA cumplido
            </span>
            <span className="flex items-center gap-1.5">
              <span className="nums text-lg font-bold text-white">94,2%</span>
              <TrendingUp className="size-3.5 text-ops" />
            </span>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
