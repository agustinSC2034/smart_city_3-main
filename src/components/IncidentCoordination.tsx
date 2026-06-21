import { Reveal } from "@/components/ui/Reveal";

const keyPoints = [
  {
    title: "Dato y cámara en el mismo punto",
    description: "El sensor y la cámara caen sobre el mismo punto del mapa, con video de evidencia desde el primer segundo.",
  },
  {
    title: "Asignación por cercanía",
    description: "La plataforma elige la cuadrilla disponible más próxima según GPS, tipo de tarea y prioridad.",
  },
  {
    title: "Una trazabilidad, todos los actores",
    description: "Reclamo, sensor, cámara, activo, cuadrilla y supervisor quedan en un mismo evento auditable.",
  },
];

export function IncidentCoordination() {
  return (
    <section
      id="incidentes"
      className="relative scroll-mt-24 overflow-hidden bg-brand-deep py-20 text-ink-100 sm:py-28"
    >
      {/* Imagen de fondo — autopista atenuada */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="./plataforma/autopista.jpg"
          alt=""
          className="size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,16,35,0.88) 0%, rgba(5,16,35,0.74) 45%, rgba(5,16,35,0.9) 100%)",
          }}
        />
      </div>

      <div className="container-page relative">
        {/* Header */}
        <Reveal direction="up">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              De la alerta a la acción
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Cada incidente reúne datos, cámaras, activos, responsables y tareas
              en un mismo flujo. La ciudad sabe qué pasó, quién debe actuar y cuánto
              tarda en resolverlo.
            </p>
          </div>
        </Reveal>

        {/* Puntos clave — columnas con divisor, sin tarjetas */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
            {keyPoints.map((k, i) => (
              <div
                key={k.title}
                className="flex flex-col border-t border-white/15 pt-4 sm:border-l sm:border-t-0 sm:pl-6"
              >
                <span className="nums text-[12px] font-semibold text-cyan-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-base font-semibold text-white">{k.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-200">{k.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Cierre */}
        <Reveal delay={0.15} className="mt-14">
          <p className="max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            Un mismo evento, una respuesta coordinada,{" "}
            <span className="text-cyan-glow">una trazabilidad completa.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
