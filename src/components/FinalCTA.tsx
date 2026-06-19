import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-brand-deep py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-line-bg opacity-25" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-0 size-[420px] rounded-full bg-cyan-tech/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 size-[420px] rounded-full bg-ops/10 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center text-cyan-glow">
              <span className="size-1.5 rounded-full bg-ops" />
              Cierre
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Smart City no es sumar pantallas.
              <br className="hidden sm:block" />
              <span className="text-cyan-glow">
                {" "}Es conectar la operación urbana para tomar mejores decisiones.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-300">
              Te mostramos la plataforma en acción y diseñamos un piloto Smart City a
              medida de tu municipio, concesionaria, parque industrial o barrio.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:smartcity@grupoittel.com" className="btn-primary">
                Solicitar una presentación
                <ArrowRight className="size-4" />
              </a>
              <a href="mailto:smartcity@grupoittel.com" className="btn-secondary !border-white/20 !bg-white/5 !text-white hover:!bg-white/10">
                Diseñar un piloto Smart City
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <ContactCard icon={Mail} label="Email" value="smartcity@grupoittel.com" />
              <ContactCard icon={Phone} label="Teléfono" value="+54 11 0000-0000" />
              <ContactCard icon={MapPin} label="Oficina" value="Buenos Aires, Argentina" />
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-xs text-ink-400">
              <CalendarDays className="size-3.5" /> Respuesta en 24 hs hábiles
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
      <div className="flex items-center gap-2 text-cyan-glow">
        <Icon className="size-4" />
        <span className="text-[11px] font-semibold uppercase tracking-wide">{label}</span>
      </div>
      <p className="mt-1.5 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
