import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const layers = [
  {
    step: "01",
    title: "Fuentes",
    items: ["Sensores", "Cámaras", "GPS", "Reclamos", "Activos urbanos", "Sistemas municipales"],
  },
  {
    step: "02",
    title: "Integración",
    items: ["APIs", "Protocolos IoT", "Servicios geográficos", "Conectores con sistemas externos"],
  },
  {
    step: "03",
    title: "Plataforma",
    items: ["Georreferencia", "Eventos", "Reglas", "Historial", "Estados y responsables"],
  },
  {
    step: "04",
    title: "Operación",
    items: ["Alertas", "Tareas", "Evidencia", "Seguimiento", "Indicadores"],
  },
];

export function IntegrationArchitecture() {
  return (
    <section id="integracion" className="relative scroll-mt-24 overflow-hidden bg-brand-deep py-20 text-ink-100 sm:py-28">
      {/* Imagen de fondo */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="./plataforma/integracion.png"
          alt=""
          className="size-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,16,35,0.85) 0%, rgba(5,16,35,0.72) 50%, rgba(5,16,35,0.90) 100%)",
          }}
        />
      </div>

      <div className="container-page relative">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Integración y arquitectura
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              La plataforma recibe información de dispositivos y sistemas existentes,
              la relaciona con el territorio y la convierte en eventos, tareas e
              indicadores operativos.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              La incorporación puede realizarse de forma gradual y sin depender de un
              único fabricante de hardware.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid lg:grid-cols-4 lg:gap-6">
            {layers.map((layer, i) => (
              <div
                key={layer.step}
                className="relative py-5 pl-6 border-l border-white/10 lg:border-l-0 lg:py-6"
              >
                {i > 0 && (
                  <span className="absolute -left-4 top-0 hidden -translate-y-1/2 lg:block">
                    <ChevronRight className="size-4 text-cyan-glow/50" />
                  </span>
                )}
                <span className="text-xs font-medium text-cyan-glow/80">{layer.step}</span>
                <h3 className="mt-1 text-base font-semibold text-white">{layer.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {layer.items.map((item) => (
                    <li key={item} className="text-justify text-sm leading-relaxed text-ink-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
