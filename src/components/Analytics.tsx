import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Sparkles } from "lucide-react";

const capabilities = [
  {
    title: "Indicadores operativos",
    desc: "Cumplimiento, tiempos de atención, recorridos, tareas vencidas y productividad por servicio, zona o cuadrilla.",
  },
  {
    title: "Desvíos y recurrencias",
    desc: "Cambios de comportamiento, aumentos de demanda y situaciones repetidas que requieren revisión.",
  },
];

export function Analytics() {
  return (
    <section id="datos-ia" className="relative scroll-mt-24 overflow-hidden bg-white">
      {/* Imagen de fondo — mapa analítico a ancho completo */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="./plataforma/analiticas.png"
          alt=""
          className="size-full object-cover object-right"
          loading="lazy"
        />
        {/* Gradiente blanco de izquierda a derecha para legibilidad */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>

      {/* Contenido — columna izquierda */}
      <div className="container-page relative">
        <div className="grid min-h-[480px] items-center py-14 lg:min-h-[560px] lg:py-16">
          <Reveal direction="up" className="lg:max-w-[42%]">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
              Datos para supervisar la operación
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ink-600">
              La plataforma relaciona sensores, activos, reclamos, recorridos e
              intervenciones para identificar desvíos, recurrencias y puntos que
              requieren revisión.
            </p>

            {/* Capacidades — líneas editoriales con divisores */}
            <RevealStagger className="mt-8 max-w-lg" stagger={0.08}>
              <div className="divide-y divide-ink-200 border-t border-ink-200">
                {capabilities.map((c) => (
                  <RevealItem key={c.title}>
                    <article className="py-3">
                      <h3 className="text-sm font-semibold text-ink-900">{c.title}</h3>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-ink-600">{c.desc}</p>
                    </article>
                  </RevealItem>
                ))}
              </div>
            </RevealStagger>

            {/* IA — bloque diferenciado */}
            <Reveal delay={0.2} className="mt-5 max-w-lg">
              <div className="border-l-2 border-cyan-700 bg-cyan-700/[0.04] px-4 py-3">
                <h3 className="flex items-center gap-1.5 text-sm font-semibold text-cyan-700">
                  <Sparkles className="size-3.5" />
                  Asistencia con IA
                </h3>
                <p className="mt-0.5 text-[13px] leading-relaxed text-ink-600">
                  Puede resumir eventos, agrupar patrones y señalar información que
                  merece revisión. Las sugerencias quedan sujetas a validación por los
                  responsables de la operación.
                </p>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
