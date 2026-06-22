import { Reveal } from "@/components/ui/Reveal";
import { beforeAfter } from "@/data/content";

export function BeforeAfter() {
  return (
    <section id="antes-despues" className="scroll-mt-16 bg-brand-deep py-16 text-ink-100 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Antes y después
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-300 sm:text-base">
              Relacionar activos, eventos, responsables y evidencias dentro del mismo
              proceso cambia la forma de trabajar.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          {/* Column headers — desktop */}
          <div className="hidden border-b border-white/15 pb-2.5 lg:grid lg:grid-cols-[1fr_1fr]">
            <p className="pr-12 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
              Operación fragmentada
            </p>
            <p className="pl-12 text-[11px] font-semibold uppercase tracking-wide text-cyan-glow">
              Operación integrada
            </p>
          </div>

          {/* Rows */}
          {beforeAfter.before.map((b, i) => (
            <div
              key={i}
              className="grid border-b border-white/10 py-3.5 lg:grid-cols-[1fr_1fr] lg:py-4"
            >
              <div className="lg:border-r lg:border-white/10 lg:pr-12">
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-500 lg:hidden">
                  Antes
                </p>
                <p className="text-sm leading-relaxed text-ink-400">{b}</p>
              </div>
              <div className="mt-2.5 lg:mt-0 lg:pl-12">
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-glow lg:hidden">
                  Después
                </p>
                <p className="text-sm font-medium leading-relaxed text-white">
                  {beforeAfter.after[i]}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
