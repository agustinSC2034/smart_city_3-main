import { SectionShell, SectionHeading } from "@/components/ui/Section";
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
    title: "Datos e indicadores",
    desc: "Histórico, cumplimiento, SLA y reportería para auditar servicios y planificar la operación.",
  },
];

export function HowItWorks() {
  return (
    <SectionShell id="tecnologia" className="bg-ink-50/50">
      <Reveal>
        <SectionHeading
          title="Integración y arquitectura"
          description="La plataforma reúne dispositivos, sistemas municipales y fuentes externas mediante APIs, protocolos IoT y servicios geográficos. Cada integración conserva el origen del dato, el historial del evento y su relación con la operación de campo."
        />
      </Reveal>

      <RevealStagger className="mt-12">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
          {groups.map((g) => (
            <div key={g.title} role="listitem" className="border-t border-ink-200 pt-4">
              <RevealItem>
                <h3 className="text-base font-semibold text-ink-900">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{g.desc}</p>
              </RevealItem>
            </div>
          ))}
        </div>
      </RevealStagger>
    </SectionShell>
  );
}
