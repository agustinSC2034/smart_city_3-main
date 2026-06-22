import { Reveal } from "@/components/ui/Reveal";
import { ProductScreenshot } from "@/components/ui/Feature";

const capabilities = [
  { label: "Activos y sensores", hint: "Contenedores, luminarias, controladores, cámaras y equipos IoT en el territorio." },
  { label: "Plataforma geográfica", hint: "Datos, georreferencia y motor de eventos." },
  { label: "Alertas y reglas", hint: "Priorización, asignación y vencimientos." },
  { label: "Operación de campo", hint: "Cuadrillas, evidencia, SLA y cierre de tareas." },
  { label: "Indicadores y auditoría", hint: "Cumplimiento, productividad y control de recorridos." },
];

export function PlatformOverview() {
  return (
    <section id="plataforma" className="relative scroll-mt-24 bg-ink-50/50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Monitoreo de activos y servicios
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              Contenedores, sensores, luminarias, cámaras, reclamos y equipos de campo
              comparten una misma base geográfica. La plataforma permite supervisar
              servicios, asignar tareas de campo y medir el cumplimiento desde una misma
              operación.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="scale" className="mt-12">
          <div className="mx-auto max-w-6xl">
            <ProductScreenshot
              src="./plataforma/plataforma1.png"
              alt="Panel operativo Smart City con mapa, eventos recientes, incidentes activos e indicadores de SLA."
              aspect="aspect-[1672/941]"
              fit="contain"
              framed={false}
            />
          </div>
        </Reveal>

        {/* Capacidades — sin numeración, divisores verticales solo en desktop */}
        <Reveal delay={0.15} className="mt-12">
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {capabilities.map((c) => (
              <div
                key={c.label}
                className="flex flex-col border-l border-ink-200 pl-4 lg:pl-5"
              >
                <h3 className="text-sm font-semibold text-ink-900">{c.label}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-600">{c.hint}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
