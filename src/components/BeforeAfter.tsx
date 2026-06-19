import { Check, X, TrendingUp } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { beforeAfter, impact } from "@/data/content";

export function BeforeAfter() {
  return (
    <SectionShell id="antes-despues">
      <Reveal>
        <SectionHeading
          eyebrow="Antes y después"
          title="De operación reactiva a operación en tiempo real"
          description="El mismo municipio, los mismos recursos y una forma distinta de trabajar: conectada, priorizada y auditable."
        />
      </Reveal>

      {/* Antes / Después */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal direction="left">
          <div className="rounded-2xl border border-ink-200 bg-ink-50/60 p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-ink-200 text-ink-600">
                <X className="size-4" />
              </span>
              <h3 className="text-base font-semibold text-ink-800">Antes</h3>
            </div>
            <ul className="space-y-2.5">
              {beforeAfter.before.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-ink-600">
                  <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-ink-300 text-white">
                    <X className="size-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="right">
          <div className="relative rounded-2xl border border-ops/30 bg-white p-6 shadow-card">
            <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-ops/10 blur-2xl" aria-hidden />
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-ops text-white">
                <Check className="size-4" />
              </span>
              <h3 className="text-base font-semibold text-ink-900">Después</h3>
            </div>
            <ul className="space-y-2.5">
              {beforeAfter.after.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-ink-800">
                  <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-ops text-white">
                    <Check className="size-3" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Métricas — datos secundarios, sin cards pesadas */}
      <Reveal delay={0.15} className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
          Indicadores de impacto
        </p>
      </Reveal>
      <RevealStagger className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {impact.map((m) => (
          <RevealItem key={m.label}>
            <div className="flex items-baseline gap-3 border-l-2 border-cyan-tech/30 pl-4">
              <p className="nums text-3xl font-extrabold tracking-tight text-ink-900">
                {m.metric}
              </p>
              <div>
                <p className="text-sm font-medium leading-snug text-ink-700">{m.label}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-500">
                  <TrendingUp className="size-3 text-ops" /> {m.note}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </SectionShell>
  );
}
