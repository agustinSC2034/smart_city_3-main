import { SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";

const groups = [
  {
    title: "Dispositivos y sensores",
    desc: "Sensores de llenado, controladores, luminarias, cámaras y equipos IoT distribuidos en el territorio.",
  },
  {
    title: "Video y analítica",
    desc: "Cámaras con detección de incidentes, conteo y patrones de ocupación por zona.",
  },
  {
    title: "APIs y sistemas externos",
    desc: "Integración con sistemas municipales, canales de reclamos, GPS de vehículos y cuadrillas.",
  },
  {
    title: "Cartografía y georreferencia",
    desc: "Capa GIS para ubicar cada contenedor, activo, evento y recurso sobre el mapa de la ciudad.",
  },
  {
    title: "Motor de eventos",
    desc: "Reglas, clasificación, priorización y asignación automática de incidentes y tareas de campo.",
  },
  {
    title: "Almacenamiento e historial",
    desc: "Base histórica de eventos, tareas, evidencias y cambios de estado para consultar y reconstruir cualquier intervención.",
  },
];

export function HowItWorks() {
  return (
    <section id="tecnologia" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28">
      {/* Fondo: ciudad.png con overlay blanco para legibilidad y fade inferior */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="./plataforma/ciudad.png"
          alt=""
          className="size-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.50) 50%, rgba(255,255,255,1) 100%)",
          }}
        />
      </div>

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            title="Integración y arquitectura"
            description="La plataforma reúne dispositivos, sistemas municipales y fuentes externas mediante APIs, protocolos IoT y servicios geográficos. Cada integración conserva el origen del dato, el historial del evento y su relación con la operación de campo."
          />
        </Reveal>

        <RevealStagger className="mt-12">
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
            {groups.map((g) => (
              <div key={g.title} role="listitem" className="border-t border-ink-300 pt-4">
                <RevealItem>
                  <h3 className="text-base font-semibold text-ink-900">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{g.desc}</p>
                </RevealItem>
              </div>
            ))}
          </div>
        </RevealStagger>
      </div>
    </section>
  );
}
