import { Reveal } from "@/components/ui/Reveal";
import { beforeAfter } from "@/data/content";

export function BeforeAfter() {
  return (
    <section id="antes-despues" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Del control fragmentado a una operación verificable
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              La diferencia no está solamente en digitalizar información, sino en
              relacionar activos, eventos, responsables, recorridos y evidencias dentro
              del mismo proceso de supervisión.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid gap-x-0 lg:grid-cols-2">
            {/* Operación fragmentada */}
            <div className="border-t border-ink-200 pt-6 lg:pr-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                Operación fragmentada
              </h3>
              <ul className="mt-5 space-y-3.5">
                {beforeAfter.before.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-600"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-ink-300" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Operación integrada */}
            <div className="mt-10 border-t border-ink-200 pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
                Operación integrada
              </h3>
              <ul className="mt-5 space-y-3.5">
                {beforeAfter.after.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-800"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-brand" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
