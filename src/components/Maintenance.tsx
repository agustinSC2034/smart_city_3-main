import {
  Wrench,
  MapPin,
  ClipboardList,
  Camera,
  Clock,
  User,
  FileText,
  CheckCircle2,
  CircleDashed,
  AlertTriangle,
  History,
} from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatusChip, type StatusKey } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type HistoryItem = {
  date: string;
  title: string;
  who: string;
  status: StatusKey;
};

const history: HistoryItem[] = [
  { date: "18 jun · 09:12", title: "Reclamo ciudadano recibido", who: "147 / BOTI", status: "info" },
  { date: "18 jun · 09:18", title: "Validación y clasificación", who: "Supervisor zona 1", status: "ok" },
  { date: "18 jun · 09:24", title: "Orden de trabajo OT-2207 creada", who: "Sistema", status: "ok" },
  { date: "18 jun · 09:31", title: "Cuadrilla M-7 asignada · ETA 14 min", who: "Despacho", status: "warn" },
  { date: "18 jun · 09:45", title: "Cuadrilla en sitio · inicio de tarea", who: "Cuadrilla M-7", status: "ok" },
  { date: "—", title: "Cierre con evidencia fotográfica", who: "Pendiente", status: "alert" },
];

const assets = [
  { id: "LUM-478", name: "Luminaria Av. Rivadavia 2140", status: "warn" as StatusKey },
  { id: "SEM-03", name: "Controlador semafórico Callao", status: "ok" as StatusKey },
  { id: "CON-091", name: "Contenedor Puerto Madero", status: "alert" as StatusKey },
  { id: "SUM-22", name: "Sumidero Caballito", status: "warn" as StatusKey },
];

export function Maintenance() {
  return (
    <SectionShell id="auditoria" className="bg-ink-50/60">
      <Reveal>
        <SectionHeading
          eyebrow="Mantenimiento y auditoría"
          title="Cada activo urbano con ficha, estado e historial"
          description="Activos georreferenciados, órdenes de trabajo, evidencia fotográfica y trazabilidad completa para auditar el servicio y planificar la mejora continua."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* asset card */}
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card">
            <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand text-white">
                  <Wrench className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">LUM-478</p>
                  <p className="text-[11px] text-ink-600">Luminaria · Av. Rivadavia 2140</p>
                </div>
              </div>
              <StatusChip status="warn" label="Requiere atención" />
            </div>

            <div className="p-4">
              {/* visual */}
              <div className="relative aspect-[16/7] overflow-hidden rounded-xl bg-[radial-gradient(circle_at_20%_30%,#1e293b,transparent_45%),radial-gradient(circle_at_80%_60%,#0b2545,transparent_50%)]">
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-2 py-1 text-[10px] font-semibold text-ink-700">
                  <MapPin className="size-3 text-cyan-tech" /> Comuna 5 · Balvanera
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold text-amber-400">
                    <AlertTriangle className="size-3" /> Falla de driver
                  </span>
                </div>
                {/* pole representation */}
                <div className="absolute right-8 top-1/2 h-16 w-1 -translate-y-1/2 bg-ink-400/40" />
                <div className="absolute right-4 top-1/2 h-3 w-6 -translate-y-[200%] rounded-full bg-warn/70 blur-[1px]" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3" role="group" aria-label="Datos del activo">
                <Info icon={ClipboardList} label="Orden de trabajo" value="OT-2207" />
                <Info icon={Clock} label="SLA" value="2h · 38 min restantes" tone="warn" />
                <Info icon={User} label="Responsable" value="Cuadrilla L-1" />
                <Info icon={Camera} label="Evidencia" value="2 fotos" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-lg bg-brand px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-brand-dark">
                  Ver ficha completa
                </button>
                <button className="rounded-lg border border-ink-300 px-3 py-1.5 text-[12px] font-semibold text-ink-700 hover:bg-ink-50">
                  Crear inspección
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* history timeline */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-sm font-bold text-ink-900">
                <History className="size-4 text-cyan-tech" /> Historial del activo
              </h3>
              <span className="text-[11px] text-ink-600">Últimos 30 días</span>
            </div>

            <ol className="mt-5 space-y-0">
              {history.map((h, i) => {
                const isLast = i === history.length - 1;
                return (
                  <li key={i} className="relative flex gap-3 pb-5 last:pb-0">
                    {!isLast && (
                      <span
                        className="absolute left-[11px] top-6 h-full w-px bg-ink-200"
                        aria-hidden
                      />
                    )}
                    <span
                      className={cn(
                        "relative z-10 mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border-2 bg-white",
                        h.status === "ok"
                          ? "border-ops text-ops-dark"
                          : h.status === "warn"
                            ? "border-amber-500 text-amber-700"
                            : h.status === "alert"
                              ? "border-alert text-alert"
                              : "border-cyan-tech text-cyan-tech"
                      )}
                    >
                      {h.status === "ok" ? (
                        <CheckCircle2 className="size-3.5" />
                      ) : h.status === "alert" ? (
                        <CircleDashed className="size-3.5" />
                      ) : (
                        <span className="size-1.5 rounded-full bg-current" />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[13px] font-semibold text-ink-900">{h.title}</p>
                        <span className="nums shrink-0 text-[11px] text-ink-600">{h.date}</span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-ink-600">por {h.who}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-ink-100 pt-4">
              <Mini label="SLA cumplido" value="94,2%" />
              <Mini label="Productividad" value="+18%" />
              <Mini label="Recurrencia" value="-35%" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* related assets */}
      <Reveal delay={0.15} className="mt-6">
        <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-sm font-bold text-ink-900">
              <FileText className="size-4 text-cyan-tech" /> Activos relacionados en la zona
            </h3>
            <span className="text-[11px] text-ink-600">Comuna 5 · 1 km</span>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {assets.map((a) => (
              <li
                key={a.id}
                className="flex items-center justify-between rounded-xl border border-ink-200 px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="nums text-[12px] font-bold text-ink-900">{a.id}</p>
                  <p className="truncate text-[11px] text-ink-600">{a.name}</p>
                </div>
                <StatusChip status={a.status} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  tone = "neutral",
}: {
  icon: typeof Clock;
  label: string;
  value: string;
  tone?: "neutral" | "warn";
}) {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-2.5">
      <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-ink-600">
        <Icon className="size-3" /> {label}
      </p>
      <p
        className={cn(
          "mt-0.5 text-[13px] font-semibold",
          tone === "warn" ? "text-amber-700" : "text-ink-900"
        )}
      >
        {value}
      </p>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-ink-50 px-3 py-2 text-center">
      <p className="nums text-base font-bold text-ink-900">{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-ink-600">{label}</p>
    </div>
  );
}
