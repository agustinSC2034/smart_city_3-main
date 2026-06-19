import {
  Building2,
  HardHat,
  Factory,
  Home,
  Droplet,
  BusFront,
  ShieldCheck,
} from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { RevealStagger, RevealItem, Reveal } from "@/components/ui/Reveal";

const cases = [
  {
    icon: Building2,
    title: "Municipios y gobiernos",
    desc: "Operación urbana unificada, reclamos conectados y auditoría de servicios públicos.",
    points: ["Mapa único", "147 / BOTI", "Indicadores de gestión"],
  },
  {
    icon: HardHat,
    title: "Concesionarias viales",
    desc: "Monitoreo de tránsito, incidentes, semáforos y cumplimiento de SLA contractual.",
    points: ["Semáforos conectados", "Cámaras y analítica", "Trazabilidad"],
  },
  {
    icon: Factory,
    title: "Parques industriales",
    desc: "Seguridad perimetral, movilidad interna, ambiente y mantenimiento de activos.",
    points: ["Accesos", "Calidad de aire", "Mantenimiento"],
  },
  {
    icon: Home,
    title: "Barrios cerrados y urbanizaciones",
    desc: "Alumbrado, seguridad operativa, residuos y atención al residente en un panel.",
    points: ["Alumbrado IoT", "Cámaras", "Reclamos"],
  },
  {
    icon: Droplet,
    title: "Servicios públicos",
    desc: "Agua, drenaje, residuos y alumbrado con sensores y rutas optimizadas.",
    points: ["Nivel y lluvia", "Rutas", "Evidencia"],
  },
  {
    icon: BusFront,
    title: "Transporte y movilidad",
    desc: "Tiempos de viaje, prioridad semafórica, paradas y flotas integradas al mapa.",
    points: ["Conteo vehicular", "Prioridad TP", "Incidentes"],
  },
];

export function UseCases() {
  return (
    <SectionShell id="casos">
      <Reveal>
        <SectionHeading
          eyebrow="Casos de uso"
          title="Pensada para distintos tipos de operador urbano"
          description="La misma plataforma se adapta al alcance y la escala de cada cliente, desde un municipio hasta un parque industrial o una concesionaria."
        />
      </Reveal>

      <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => {
          const Icon = c.icon;
          return (
            <RevealItem key={c.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/5 text-brand ring-1 ring-brand/10 transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-[11px] font-medium text-ink-600"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          );
        })}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-8">
        <div className="flex items-center gap-3 rounded-xl border border-ink-200 bg-ink-50/60 p-4 text-sm text-ink-700">
          <ShieldCheck className="size-5 shrink-0 text-ops-dark" />
          Cada caso se entrega con roles, auditoría y SLA configurables según el
          contrato y la operación del cliente.
        </div>
      </Reveal>
    </SectionShell>
  );
}
