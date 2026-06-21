import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { beforeAfter, impact } from "@/data/content";

export function BeforeAfter() {
  const metrics = impact.slice(0, 4);

  return (
    <SectionShell id="antes-despues">
      <Reveal>
        <SectionHeading
          eyebrow="Antes y después"
          title="De operación reactiva a operación en tiempo real"
          description="El mismo municipio, los mismos recursos y una forma distinta de trabajar: conectada, priorizada y auditable."
        />
      </Reveal>

      {/* Antes / Después — dos paneles con imagen de fondo y overlay */}
      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-0 md:overflow-hidden md:rounded-xl md:border md:border-ink-200">
        {/* ANTES — fondo oscuro/apagado */}
        <Reveal direction="left">
          <div className="relative flex min-h-[340px] flex-col justify-end bg-ink-900 p-7 sm:p-9">
            {/* Fondo: reemplazar por imagen real de caos / suciedad urbana */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.78) 100%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 flex items-start justify-end p-4 text-right"
              aria-hidden
            >
              <span className="rounded bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-300">
                Acá iría una imagen que represente caos / suciedad urbana
              </span>
            </div>

            <div className="relative">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                Antes
              </h3>
              <ul className="mt-4 space-y-2.5">
                {beforeAfter.before.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-200"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-ink-500" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* DESPUÉS — fondo claro/limpio */}
        <Reveal delay={0.1} direction="right">
          <div className="relative flex min-h-[340px] flex-col justify-end bg-white p-7 sm:p-9 md:border-l md:border-ink-200">
            {/* Fondo: reemplazar por imagen real de orden / ciudad limpia */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(246,248,251,0.85) 100%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 flex items-start justify-end p-4 text-right"
              aria-hidden
            >
              <span className="rounded bg-brand/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand">
                Acá iría una imagen que represente orden / ciudad limpia
              </span>
            </div>

            <div className="relative">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
                Después
              </h3>
              <ul className="mt-4 space-y-2.5">
                {beforeAfter.after.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-800"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-cyan-tech" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Métricas — fila simple, sin tarjetas */}
      <Reveal delay={0.15} className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
          Indicadores de impacto
        </p>
      </Reveal>
      <RevealStagger className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
        {metrics.map((m) => (
          <RevealItem key={m.label}>
            <div className="border-t border-ink-200 pt-3">
              <p className="nums text-2xl font-bold tracking-tight text-ink-900">
                {m.metric}
              </p>
              <p className="mt-1 text-sm leading-snug text-ink-700">{m.label}</p>
              <p className="mt-0.5 text-[11px] text-ink-500">{m.note}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </SectionShell>
  );
}
