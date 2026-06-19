import { ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { osFlow, detectAct } from "@/data/content";

export function CityAsOS() {
  return (
    <SectionShell id="plataforma" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-dot-bg opacity-40" aria-hidden />
      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="La propuesta"
            title="La ciudad como un sistema operativo"
            description="No es una app aislada. Es una plataforma modular que conecta las verticales urbanas —sensores, cámaras, reclamos, activos, vehículos y cuadrillas— y las convierte en una sola operación coordinada."
          />
        </Reveal>

        {/* Flow layers */}
        <RevealStagger className="mt-12 grid gap-4 lg:grid-cols-5">
          {osFlow.map((layer, i) => (
            <RevealItem key={layer.id} className="relative">
              <div className="card-surface h-full p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex size-6 items-center justify-center rounded-md bg-brand/5 text-[11px] font-bold text-brand ring-1 ring-brand/10">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-ink-900">{layer.label}</h3>
                </div>
                <ul className="space-y-1.5">
                  {layer.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 text-[13px] text-ink-600"
                    >
                      <span className="size-1.5 rounded-full bg-cyan-tech" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              {i < osFlow.length - 1 && (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden size-5 -translate-y-1/2 text-ink-300 lg:block"
                  aria-hidden
                />
              )}
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Detect -> Analyze -> Act -> Measure */}
        <Reveal delay={0.1} className="mt-14">
          <div className="rounded-2xl border border-ink-200 bg-ink-50/60 p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              Ciclo operativo continuo
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {detectAct.map((s, i) => (
                <div key={s.id} className="relative">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-ink-900">{s.label}</h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-600">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  {i < detectAct.length - 1 && (
                    <div className="mt-4 hidden h-px w-full bg-gradient-to-r from-cyan-tech/40 to-transparent lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
