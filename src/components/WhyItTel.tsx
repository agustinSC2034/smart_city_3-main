import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Infraestructura propia",
    desc: "Más de 300 km de fibra óptica y 73 torres de telecomunicaciones en CABA. No dependemos de terceros para el backbone de conectividad.",
  },
  {
    title: "Alianza con SICE",
    desc: "Partners de SICE, líderes mundiales en ITS (Intelligent Transportation Systems). Tecnología probada en más de 30 países.",
  },
  {
    title: "Operación 24/7",
    desc: "NOC propio con monitoreo permanente y cuadrillas de campo. Respuesta ante cualquier fallo operativo en tiempo real.",
  },
  {
    title: "Presencia nacional",
    desc: "Despliegues en CABA, Provincia de Buenos Aires, Tandil y La Matanza. Conocemos la infraestructura urbana argentina.",
  },
  {
    title: "Integración total",
    desc: "Desde la instalación del sensor hasta la plataforma de gestión, somos responsables de toda la cadena tecnológica.",
  },
  {
    title: "Track record verificable",
    desc: "Clientes: Telecom, Movistar, Claro, ARSAT, Trenes Argentinos, Provincia de Buenos Aires y Presidencia de la Nación.",
  },
];

// Logos de clientes/partners — reactivar cuando se sumen los archivos reales
// const clients = [
//   "Telecom", "Movistar", "Claro", "ARSAT", "Trenes Argentinos", "Provincia de Buenos Aires", "Cirion", "SICE",
// ];

export function WhyItTel() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-brand-deep py-20 text-ink-100 sm:py-28">
      {/* Imagen de fondo — overlay institucional (sumar <img> real cuando exista el archivo) */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,16,35,0.96) 0%, rgba(5,16,35,0.92) 100%)",
          }}
        />
      </div>

      <div className="container-page relative">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-cyan-glow">
              ¿Por qué Grupo iTTel?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Más de una década de experiencia en infraestructura crítica, IoT y telecomunicaciones en Argentina.
            </h2>
          </div>
        </Reveal>

        {/* Reasons — sin cards, formato editorial con divisor sutil */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex flex-col">
                <div className="flex items-baseline gap-3">
                  <span className="nums text-sm font-bold text-cyan-glow">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base font-semibold text-white">{r.title}</h3>
                </div>
                <p className="mt-2 pl-8 text-sm leading-relaxed text-ink-300">{r.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Clients strip — oculto hasta contar con los logos reales
        <Reveal delay={0.15} className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
            Clientes y partners
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {clients.map((c) => (
              <span
                key={c}
                className="inline-flex h-12 min-w-[120px] items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 text-sm font-semibold text-ink-400 grayscale transition-opacity hover:text-ink-200"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
        */}

        {/* CTA + contacto */}
        <Reveal delay={0.2} className="mt-16">
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Contáctanos</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-300">
                  Estamos para responder cualquier consulta sobre la plataforma y los
                  servicios de Grupo ITTEL.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="mailto:administracion@it-tel.com.ar" className="btn-primary">
                    Escribinos
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-sm">
                <span className="flex items-center gap-2 text-ink-300">
                  <Mail className="size-4 text-cyan-glow" /> administracion@it-tel.com.ar
                </span>
                <span className="flex items-center gap-2 text-ink-300">
                  <Phone className="size-4 text-cyan-glow" /> 0810-345-ITTEL (4883)
                </span>
                <span className="flex items-center gap-2 text-ink-300">
                  <MapPin className="size-4 text-cyan-glow" /> Av. Alicia Moreau de Justo 1930, CABA
                </span>
                <span className="flex items-center gap-2 text-xs text-ink-400">
                  <CalendarDays className="size-3.5" /> Respuesta en 24 hs hábiles · soporte 7x24
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
