import { Bell, CheckCircle2, Map as MapIcon, Radio } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ProductScreenshot } from "@/components/ui/Feature";

const annotations = [
  { label: "Mapa unificado", desc: "Todos los activos y servicios sobre una misma cartografia.", icon: MapIcon },
  { label: "Datos en tiempo real", desc: "Sensores, camaras, GPS, reclamos y sistemas externos.", icon: Radio },
  { label: "Operacion", desc: "Alertas, tickets, responsables y cuadrillas.", icon: Bell },
  { label: "Auditoria", desc: "SLA, evidencia, historial y cumplimiento.", icon: CheckCircle2 },
];

export function PlatformOverview() {
  return (
    <section id="soluciones" className="relative scroll-mt-24 overflow-hidden bg-ink-50/40 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-dot-bg opacity-30" aria-hidden />

      <div className="container-page relative">
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">
              <span className="size-1.5 rounded-full bg-current" aria-hidden />
              Plataforma Smart City
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Una plataforma, todas las verticales urbanas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              Una sola pantalla para visualizar activos, monitorear servicios, coordinar
              equipos y medir resultados en tiempo real.
            </p>
            <p className="mt-3 text-sm text-ink-500">
              Cada solucion puede funcionar de manera independiente, pero comparte el mismo
              mapa, motor de alertas, ordenes de trabajo e indicadores.
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
              className="rounded-3xl p-2 sm:p-3"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {annotations.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/5 text-brand ring-1 ring-brand/10">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{a.label}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-600">{a.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <p className="text-center text-sm font-medium text-ink-600">
            Soluciones independientes. <span className="text-brand">Una operacion conectada.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
