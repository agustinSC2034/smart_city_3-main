import { Reveal } from "@/components/ui/Reveal";
import { ProductScreenshot } from "@/components/ui/Feature";

const stages = [
  { label: "Fuentes", hint: "Sensores, cámaras, reclamos, GPS y activos." },
  { label: "Plataforma", hint: "Datos, georreferencia y motor de eventos." },
  { label: "Alertas", hint: "Reglas, priorización y asignación." },
  { label: "Operación", hint: "Cuadrillas, evidencia y SLA." },
  { label: "Indicadores", hint: "Cumplimiento, productividad y auditoría." },
];

export function PlatformOverview() {
  return (
    <section id="plataforma" className="relative scroll-mt-24 bg-ink-50/50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Una plataforma, todas las verticales urbanas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              Una sola pantalla para visualizar activos, monitorear servicios,
              coordinar equipos y medir resultados. Sensores, cámaras, reclamos y
              cuadrillas comparten un mismo mapa, motor de alertas y orden de trabajo.
              Cada vertical funciona de forma independiente y comparte la operación.
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
              className="p-2 sm:p-3"
            />
          </div>
        </Reveal>

        {/* Flujo operativo — de CityAsOS, fusionado acá */}
        <Reveal delay={0.15} className="mt-12">
          <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {stages.map((s, i) => (
              <li
                key={s.label}
                className="flex flex-col border-l border-ink-200 pl-4 lg:pl-5"
              >
                <span className="nums text-[12px] font-semibold text-cyan-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-ink-900">{s.label}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-600">{s.hint}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
