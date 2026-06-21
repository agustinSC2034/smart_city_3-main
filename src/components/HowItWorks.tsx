import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { flowSteps } from "@/data/architecture";

export function HowItWorks() {
  return (
    <SectionShell id="tecnologia" className="bg-ink-50/50">
      <Reveal>
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Arquitectura de la plataforma"
          description="Un mismo flujo recorre toda la operación: capturar, conectar, procesar, decidir, ejecutar y medir. Cada etapa deja rastro y alimenta la siguiente."
        />
      </Reveal>

      <RevealStagger className="mt-12">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
          {flowSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} role="listitem" className="border-t border-ink-200 pt-4">
                <RevealItem>
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 shrink-0 text-brand" aria-hidden />
                    <h3 className="text-base font-semibold text-ink-900">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {s.description}
                  </p>
                </RevealItem>
              </div>
            );
          })}
        </div>
      </RevealStagger>
    </SectionShell>
  );
}
