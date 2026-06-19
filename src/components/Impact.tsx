import { TrendingUp } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { RevealStagger, RevealItem, Reveal } from "@/components/ui/Reveal";
import { impact } from "@/data/content";

export function Impact() {
  return (
    <SectionShell id="impacto" className="bg-ink-50/60">
      <Reveal>
        <SectionHeading
          eyebrow="Impacto"
          title="Resultados que se ven en la operación"
          description="Métricas de ejemplo según el alcance del proyecto. No son promesas contractuales, son indicadores de lo que una ciudad conectada puede alcanzar."
        />
      </Reveal>

      <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {impact.map((m) => (
          <RevealItem key={m.label}>
            <div className="card-surface h-full p-6">
              <div className="flex items-center gap-2 text-ops-dark">
                <TrendingUp className="size-4" />
                <span className="text-[11px] font-semibold uppercase tracking-wide">
                  {m.note}
                </span>
              </div>
              <p className="nums mt-3 text-4xl font-extrabold tracking-tight text-ink-900">
                {m.metric}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{m.label}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-8">
        <p className="text-xs text-ink-500">
          Las cifras varían según la cantidad de sensores, zonas integradas y procesos
          digitalizados. Presentamos un piloto medible para validar el impacto en tu
          contexto.
        </p>
      </Reveal>
    </SectionShell>
  );
}
