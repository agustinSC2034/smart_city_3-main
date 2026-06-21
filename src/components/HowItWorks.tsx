import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { flowSteps } from "@/data/architecture";

export function HowItWorks() {
  return (
    <SectionShell id="tecnologia">
      {/* Imagen de fondo — reemplazar por foto real de infraestructura / servidores / torres */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,248,251,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-end justify-end p-4 text-right" aria-hidden>
          <span className="rounded bg-ink-200/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
            Acá iría una imagen de fondo (infraestructura / servidores / torres)
          </span>
        </div>
      </div>

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
