import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { RevealStagger, RevealItem, Reveal } from "@/components/ui/Reveal";
import { flowSteps } from "@/data/architecture";

export function HowItWorks() {
  return (
    <SectionShell id="tecnologia">
      <Reveal>
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Ciudad conectada. Gestión inteligente."
          description="Un mismo flujo recorre toda la operación: capturar, conectar, procesar, decidir, ejecutar y medir. Cada etapa deja rastro y alimenta la siguiente."
        />
      </Reveal>

      <RevealStagger className="mt-12">
        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6" role="list">
          {/* connecting line on lg */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block"
            aria-hidden
          />
          {flowSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="relative" role="listitem">
                <RevealItem>
                  <article className="card-surface h-full p-5">
                    <div className="flex items-center gap-3">
                      <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-soft ring-4 ring-white">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="nums text-[11px] font-bold uppercase tracking-wider text-cyan-700">
                          Paso {s.step}
                        </p>
                        <h3 className="text-base font-semibold text-ink-900">{s.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">
                      {s.description}
                    </p>
                  </article>
                </RevealItem>
              </div>
            );
          })}
        </div>
      </RevealStagger>

      <Reveal delay={0.1} className="mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500">
          <span className="font-semibold uppercase tracking-wide text-ink-600">Ciclo</span>
          <span>Detectar</span>
          <span className="text-ink-300">→</span>
          <span>Analizar</span>
          <span className="text-ink-300">→</span>
          <span>Accionar</span>
          <span className="text-ink-300">→</span>
          <span>Medir</span>
        </div>
      </Reveal>
    </SectionShell>
  );
}
