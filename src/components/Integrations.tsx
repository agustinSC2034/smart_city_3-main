import { Plug } from "lucide-react";
import { SectionShell } from "@/components/ui/Section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { integrations } from "@/data/architecture";

export function Integrations() {
  return (
    <SectionShell id="integraciones" className="bg-ink-50/50">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        {/* Left: heading + explanation */}
        <Reveal direction="left">
          <div>
            <p className="eyebrow">
              <span className="size-1.5 rounded-full bg-current" aria-hidden />
              Diseñada para integrarse
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Se conecta con lo que tu ciudad ya tiene
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              No reemplazamos tus sistemas: los unimos. La plataforma se integra con
              infraestructura municipal, canales de reclamos, cámaras, sensores, GPS y
              proveedores.
            </p>
            <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-cyan-tech/30 bg-cyan-tech/5 p-4">
              <Plug className="size-5 shrink-0 text-cyan-tech" />
              <p className="text-[13px] leading-relaxed text-ink-700">
                Plataforma agnóstica de hardware y proveedores. Se conecta con lo que la
                ciudad ya tiene y suma nuevas capas a su ritmo.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right: integration tags, fluid layout */}
        <Reveal direction="right" delay={0.1}>
          <RevealStagger className="flex flex-wrap gap-2.5" stagger={0.05}>
            {integrations.map((it) => (
              <RevealItem key={it}>
                <span className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-800 shadow-soft transition-colors hover:border-cyan-tech/40 hover:text-cyan-700">
                  <span className="size-1.5 rounded-full bg-ops" />
                  {it}
                </span>
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>
      </div>
    </SectionShell>
  );
}
