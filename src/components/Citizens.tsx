import {
  Camera,
  MapPin,
  Tag,
  Clock,
  CheckCircle2,
  ArrowRight,
  Image as ImageIcon,
  Send,
} from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const flow = [
  { n: "1", t: "Ciudadano reporta", d: "Desde web, app o 147/BOTI con foto y ubicación." },
  { n: "2", t: "Se geolocaliza", d: "El reclamo cae en el mapa con coordenadas exactas." },
  { n: "3", t: "Se clasifica", d: "Categoría automática y área responsable asignada." },
  { n: "4", t: "Cruce con activos", d: "Se vincula a luminaria, semáforo o contenedor cercano." },
  { n: "5", t: "Cuadrilla asignada", d: "Orden de trabajo con prioridad y SLA definido." },
  { n: "6", t: "Cierre con evidencia", d: "Foto antes/después y validación de cumplimiento." },
];

export function Citizens() {
  return (
    <SectionShell id="reclamos">
      <Reveal>
        <SectionHeading
          eyebrow="Reclamos ciudadanos"
          title="El reclamo deja de ser un ticket aislado y se convierte en una señal operativa"
          description="Cada reclamo ciudadano entra al mismo mapa que los sensores y las cámaras, se cruza con activos cercanos y dispara una operación trazable de principio a fin."
        />
      </Reveal>

      {/* flow */}
      <Reveal delay={0.05} className="mt-10">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {flow.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl border border-ink-200 bg-white p-3.5 shadow-soft"
            >
              <span className="inline-flex size-7 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-2.5 text-[13px] font-semibold text-ink-900">{s.t}</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* mockups */}
      <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
        {/* citizen app */}
        <Reveal>
          <div>
            <p className="eyebrow mb-3">
              <span className="size-1.5 rounded-full bg-cyan-tech" /> App ciudadana
            </p>
            <PhoneMock />
          </div>
        </Reveal>

        {/* municipal panel */}
        <Reveal delay={0.1}>
          <div>
            <p className="eyebrow mb-3">
              <span className="size-1.5 rounded-full bg-ops" /> Panel municipal
            </p>
            <MunicipalPanel />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="relative rounded-[2rem] border border-ink-200 bg-ink-900 p-2 shadow-lift">
        <div className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-ink-700" />
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          {/* status bar */}
          <div className="flex items-center justify-between bg-brand px-4 pb-2 pt-5 text-[10px] text-white/80">
            <span className="nums">09:47</span>
            <span className="font-semibold">147 · Smart City</span>
            <span>●●●</span>
          </div>

          <div className="p-4">
            <p className="text-base font-bold text-ink-900">Reportar problema</p>
            <p className="mt-0.5 text-[11px] text-ink-600">
              Una foto, una ubicación y listo.
            </p>

            {/* photo */}
            <div className="mt-3 aspect-[4/3] rounded-xl border border-dashed border-ink-300 bg-ink-50 bg-[radial-gradient(circle_at_30%_30%,#e2e8f0,transparent_40%),radial-gradient(circle_at_70%_70%,#cbd5e1,transparent_40%)] p-3">
              <div className="flex h-full items-end">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold text-white">
                  <Camera className="size-3" /> Foto agregada
                </span>
              </div>
            </div>

            {/* fields */}
            <div className="mt-3 space-y-2.5">
              <Field icon={MapPin} label="Ubicación" value="Av. Corrientes 1200" />
              <Field icon={Tag} label="Categoría" value="Bache / pavimento" />
              <Field icon={Clock} label="Estado" value="En validación" tone="info" />
            </div>

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-sm font-semibold text-white">
              <Send className="size-4" /> Enviar reclamo
            </button>

            <div className="mt-3 flex items-center justify-between rounded-lg bg-ops/10 px-3 py-2 text-[11px]">
              <span className="flex items-center gap-1.5 font-semibold text-ops-dark">
                <CheckCircle2 className="size-3.5" /> Reclamo #44-1182
              </span>
              <span className="text-ink-600">SLA 48h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  value,
  tone = "neutral",
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  tone?: "neutral" | "info";
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-ink-200 bg-white px-3 py-2">
      <Icon
        className={cn("size-4", tone === "info" ? "text-cyan-tech" : "text-ink-600")}
      />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-wide text-ink-600">{label}</p>
        <p className="truncate text-[12px] font-semibold text-ink-800">{value}</p>
      </div>
    </div>
  );
}

function MunicipalPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-lift">
      <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50/60 px-4 py-2.5">
        <span className="text-xs font-semibold text-ink-700">
          reclamos.ittel · panel municipal
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-700">
          <span className="dot bg-warn" /> Pendiente validación
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-ink-900">Reclamo #44-1182</p>
            <p className="text-[11px] text-ink-600">Bache en Av. Corrientes 1200 · Comuna 1</p>
          </div>
          <span className="rounded-full border border-cyan-700/30 bg-cyan-700/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-700">
            Prioridad media
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <PanelRow label="Activo relacionado" value="Vialidad · tramo 0042" />
          <PanelRow label="Área responsable" value="Mantenimiento vial" />
          <PanelRow label="Cuadrilla asignada" value="M-7 · ETA 14 min" tone="ok" />
          <PanelRow label="Vencimiento SLA" value="48h · faltan 46h" tone="warn" />
        </div>

        {/* evidence */}
        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-600">
            Evidencia
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <EvidenceTile label="Antes" tag="09:12" />
            <EvidenceTile label="Después" tag="pendiente" muted />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-ink-100 pt-3">
          <div className="flex items-center gap-2 text-[11px] text-ink-600">
            <ImageIcon className="size-3.5" /> 1 foto · 1 nota
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg border border-ink-300 px-3 py-1.5 text-[12px] font-semibold text-ink-700 hover:bg-ink-50">
              Validar
            </button>
            <button className="rounded-lg bg-brand px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-brand-dark">
              Derivar a cuadrilla
              <ArrowRight className="ml-1 inline size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PanelRow({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "ok" | "warn";
}) {
  const toneText =
    tone === "ok" ? "text-ops-dark" : tone === "warn" ? "text-amber-700" : "text-ink-900";
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-3">
      <p className="text-[10px] font-medium uppercase tracking-wide text-ink-600">{label}</p>
      <p className={cn("mt-0.5 text-[13px] font-semibold", toneText)}>{value}</p>
    </div>
  );
}

function EvidenceTile({
  label,
  tag,
  muted = false,
}: {
  label: string;
  tag: string;
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-lg border border-ink-200",
        muted
          ? "bg-ink-50 bg-[radial-gradient(circle_at_50%_50%,#e2e8f0,transparent_60%)]"
          : "bg-[radial-gradient(circle_at_30%_30%,#cbd5e1,transparent_45%),radial-gradient(circle_at_70%_70%,#94a3b8,transparent_45%)]"
      )}
    >
      <span className="absolute left-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-ink-700">
        {label}
      </span>
      <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-semibold text-white">
        {tag}
      </span>
    </div>
  );
}
