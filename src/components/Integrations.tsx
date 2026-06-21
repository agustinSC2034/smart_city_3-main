import { SectionShell } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { integrations } from "@/data/architecture";

export function Integrations() {
  return (
    <SectionShell id="integraciones" className="bg-ink-50/50">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        {/* Izquierda: encabezado + explicación */}
        <Reveal direction="left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Se conecta con lo que la ciudad ya tiene
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              No reemplazamos los sistemas municipales: los unimos. La plataforma se
              integra con infraestructura existente, canales de reclamos, cámaras,
              sensores, GPS y proveedores, y suma nuevas capas a su ritmo.
            </p>
            <p className="mt-5 text-[13px] leading-relaxed text-ink-500">
              Plataforma agnóstica de hardware y proveedores.
            </p>
          </div>
        </Reveal>

        {/* Derecha: lista editorial con divisores */}
        <Reveal direction="right" delay={0.1}>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {integrations.map((it) => (
              <li
                key={it}
                className="flex items-center gap-2.5 border-t border-ink-200 pt-2.5 text-sm text-ink-800"
              >
                <span className="dot bg-ops" aria-hidden />
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
}
