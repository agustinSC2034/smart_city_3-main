import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { label: "Fuentes", hint: "Sensores, cámaras, reclamos, GPS y activos." },
  { label: "Plataforma", hint: "Datos, georreferencia y motor de eventos." },
  { label: "Alertas", hint: "Reglas, priorización y asignación." },
  { label: "Operación", hint: "Cuadrillas, evidencia y SLA." },
  { label: "Indicadores", hint: "Cumplimiento, productividad y auditoría." },
];

export function CityAsOS() {
  return (
    <SectionShell id="plataforma">
      <Reveal>
        <SectionHeading
          eyebrow="La propuesta"
          title="La ciudad como un sistema operativo"
          description="Sensores, cámaras, reclamos y cuadrillas comparten un mismo mapa, motor de alertas y orden de trabajo. Cada evento deja responsable, vencimiento y trazabilidad."
        />
      </Reveal>

      {/* Flujo editorial: columnas separadas por divisores, sin tarjetas */}
      <Reveal delay={0.08} className="mt-12">
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
    </SectionShell>
  );
}
