import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Infraestructura y conectividad",
    desc: "Red propia de fibra óptica, torres y capacidad de despliegue para conectar equipamiento distribuido en el territorio.",
  },
  {
    title: "Integración de punta a punta",
    desc: "Instalación, comunicaciones, plataforma, soporte y mantenimiento bajo una misma coordinación técnica.",
  },
  {
    title: "Operación y soporte de campo",
    desc: "Monitoreo, atención de incidentes y equipos técnicos para sostener la continuidad operativa.",
  },
  {
    title: "Experiencia en proyectos críticos",
    desc: "Trabajo con operadores de telecomunicaciones, organismos públicos, transporte e infraestructura. Partners de SICE en ITS.",
  },
];

// Logos de clientes/partners — reactivar cuando se sumen los archivos reales y autorización
// const clients = [
//   "Telecom", "Movistar", "Claro", "ARSAT", "Trenes Argentinos", "Provincia de Buenos Aires", "Cirion", "SICE",
// ];

export function WhyItTel() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-brand-deep py-20 text-ink-100 sm:py-28">
      {/* Fondo: azul institucional plano (sumar <img> real cuando exista el archivo definitivo) */}

      <div className="container-page">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Infraestructura y operación para proyectos urbanos
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Grupo ITTEL integra conectividad, equipamiento, software y soporte de
              campo para implementar y sostener soluciones críticas en territorio.
            </p>
          </div>
        </Reveal>

        {/* Razones — sin numeración, layout editorial con divisor */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col border-t border-white/10 pt-4">
                <h3 className="text-base font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{r.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Clients strip — oculto hasta contar con los logos reales
        <Reveal delay={0.15} className="mt-14">
          ...
        </Reveal>
        */}

        {/* CTA + contacto */}
        <Reveal delay={0.2} className="mt-16">
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Contáctanos</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-300">
                  Consultas sobre implementación, integración y características de la
                  plataforma.
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
