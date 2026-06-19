import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { RevealStagger, RevealItem, Reveal } from "@/components/ui/Reveal";
import { archLayers } from "@/data/architecture";

export function Architecture() {
  return (
    <SectionShell id="arquitectura" dark className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-line-bg opacity-30" aria-hidden />
      <div className="relative">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Arquitectura tecnológica"
            title="Una arquitectura por capas, abierta e integrable"
            description="Desde el dispositivo en la calle hasta el reporte de gestión, cada capa está diseñada para sumarse a la infraestructura existente sin reemplazarla."
          />
        </Reveal>

        <RevealStagger className="mt-12 space-y-3">
          {archLayers.map((layer, i) => {
            const Icon = layer.icon;
            const reversed = i % 2 === 1;
            return (
              <RevealItem key={layer.id}>
                <div className="grid items-stretch gap-3 lg:grid-cols-[260px_1fr]">
                  {/* layer header */}
                  <div
                    className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-tech/15 text-cyan-glow ring-1 ring-cyan-tech/30">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="nums text-[10px] font-bold uppercase tracking-wider text-ink-400">
                        Capa {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-sm font-semibold text-white">{layer.title}</h3>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-ink-300">
                        {layer.description}
                      </p>
                    </div>
                  </div>

                  {/* items */}
                  <div
                    className={`rounded-2xl border border-white/10 bg-brand-dark p-4 ${
                      reversed ? "lg:order-1" : ""
                    }`}
                  >
                    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {layer.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-[13px] text-ink-200"
                        >
                          <span className="size-1.5 rounded-full bg-cyan-glow" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-8">
          <p className="text-center text-sm text-ink-300">
            Plataforma agnóstica de hardware y proveedores. Se conecta con lo que la
            ciudad ya tiene y suma nuevas capas a su ritmo.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
