import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";

const capabilities = [
  {
    title: "Indicadores operativos",
    desc: "Cumplimiento, tiempos de atención, tareas vencidas, recorridos y productividad por servicio, zona, empresa o cuadrilla.",
  },
  {
    title: "Detección de desvíos",
    desc: "Identificación de cambios de comportamiento, puntos recurrentes, aumentos de demanda y situaciones que requieren revisión.",
  },
  {
    title: "Análisis territorial e histórico",
    desc: "Comparación por zona, período, tipo de activo, servicio o responsable, con información georreferenciada.",
  },
  {
    title: "Asistencia con inteligencia artificial",
    desc: "Apoyo para resumir eventos, señalar patrones, priorizar revisiones y advertir información que podría pasar inadvertida en una supervisión manual.",
  },
];

export function Analytics() {
  return (
    <section id="analitica" className="scroll-mt-24 bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Analítica para supervisión y planificación
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              La plataforma consolida datos de activos, sensores, reclamos, recorridos e
              intervenciones para detectar desvíos, comparar resultados y orientar la
              supervisión operativa.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mt-12">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
            {capabilities.map((c) => (
              <div key={c.title} className="border-t border-ink-200 pt-4">
                <RevealItem>
                  <h3 className="text-base font-semibold text-ink-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.desc}</p>
                </RevealItem>
              </div>
            ))}
          </div>
        </RevealStagger>

        <Reveal delay={0.15} className="mt-10">
          <p className="max-w-2xl border-t border-ink-200 pt-6 text-sm leading-relaxed text-ink-500">
            Las sugerencias y alertas quedan sujetas a validación por los responsables
            de la operación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
