import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  {
    title: "Información vinculada al territorio",
    description:
      "Sensores, cámaras, reclamos y activos se relacionan con un mismo punto del mapa y con el incidente correspondiente. Un contenedor con riesgo de desborde, un semáforo en falla o una luminaria apagada generan el mismo tipo de registro.",
  },
  {
    title: "Asignación y seguimiento",
    description:
      "La operación registra responsables, prioridad, vencimiento, ubicación de los equipos y estado de la intervención. Cada tarea de limpieza, mantenimiento o reparación queda vinculada a una cuadrilla y a un punto del mapa.",
  },
  {
    title: "Historial auditable",
    description:
      "Evidencias, cambios de estado, tiempos de respuesta y validaciones quedan asociados al mismo evento. El registro permite reconstruir qué ocurrió, quién intervino y con qué resultado.",
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
              "linear-gradient(180deg, rgba(5,16,35,0.88) 0%, rgba(5,16,35,0.74) 40%, rgba(5,16,35,0.96) 80%, rgba(5,16,35,1) 100%)",
          }}
        />
      </div>

      <div className="container-page relative">
        {/* Header */}
        <Reveal direction="up">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Coordinación operativa de incidentes
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Cada incidente queda asociado a una ubicación, los activos involucrados,
              un responsable, un vencimiento y un historial de acciones. Sensores de
              llenado, cámaras, reclamos y equipos de campo operan sobre el mismo registro.
            </p>
          </div>
        </Reveal>

        {/* Capacidades — sin numeración, columnas con divisor */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="flex flex-col border-t border-white/15 pt-4 sm:border-l sm:border-t-0 sm:pl-6"
              >
                <h3 className="text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-200">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
