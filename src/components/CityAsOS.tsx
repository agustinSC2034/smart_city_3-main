import {
  Radio,
  LayoutDashboard,
  Bell,
  Wrench,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { icon: Radio, label: "Fuentes", hint: "sensores · cámaras · reclamos" },
  { icon: LayoutDashboard, label: "Plataforma", hint: "datos · georreferencia" },
  { icon: Bell, label: "Alertas", hint: "reglas · priorización" },
  { icon: Wrench, label: "Operación", hint: "cuadrillas · evidencia" },
  { icon: BarChart3, label: "Indicadores", hint: "SLA · auditoría" },
];

const cycle = ["Detectar", "Analizar", "Accionar", "Medir"];

export function CityAsOS() {
  return (
    <SectionShell id="plataforma" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-dot-bg opacity-40" aria-hidden />

      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="La propuesta"
            title="La ciudad como un sistema operativo"
            description="Una plataforma que conecta sensores, cámaras, reclamos y cuadrillas, y los convierte en una sola operación coordinada — de la calle al indicador de gestión."
          />
        </Reveal>

        {/* Visual flow */}
        <Reveal delay={0.08} className="mt-12">
          <div className="relative">
            {/* connecting line */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-cyan-tech/40 to-transparent lg:block"
              aria-hidden
            />
            <ol className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-2">
              {stages.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.label} className="relative flex flex-col items-center text-center">
                    <span className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-ink-200">
                      <Icon className="size-6 text-brand" aria-hidden />
                      <span className="absolute -right-1 -top-1 inline-flex size-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-ink-900">{s.label}</h3>
                    <p className="mt-0.5 text-[12px] leading-snug text-ink-600">{s.hint}</p>
                    <ArrowRight
                      className="absolute -right-2 top-7 hidden size-4 -translate-y-1/2 text-ink-300 lg:block"
                      aria-hidden
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        {/* Cycle pill row */}
        <Reveal delay={0.14} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              Ciclo
            </span>
            {cycle.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-[13px] font-medium text-ink-800 shadow-soft">
                  <span className="size-1.5 rounded-full bg-cyan-tech" />
                  {c}
                </span>
                {i < cycle.length - 1 && (
                  <span className="text-ink-300" aria-hidden>→</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
