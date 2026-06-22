import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const partners = [
  { name: "Telecom", src: "./clients/telecom.png" },
  { name: "Movistar", src: "./clients/movistar.png" },
  { name: "Claro", src: "./clients/claro.png" },
  { name: "iPlan", src: "./clients/iplan.png" },
  { name: "ARSAT", src: "./clients/arsat.png" },
  { name: "Cirion", src: "./clients/cirion.png" },
  { name: "Provincia de Buenos Aires", src: "./clients/provincia.png" },
  { name: "Trenes Argentinos", src: "./clients/trenes-argentinos.png" },
];

export function WhyItTel({ onContact }: { onContact: () => void }) {
  return (
    <section
      id="grupo-ittel"
      className="scroll-mt-24 border-t border-ink-200 bg-ink-50 py-20 sm:py-28"
    >
      <div className="container-page">
        {/* Encabezado — sobre IT-TEL */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
            <div className="max-w-2xl flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                IT-TEL: infraestructura, integración y soporte
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
                Empresa argentina de tecnología y telecomunicaciones. Diseñamos,
                desplegamos y mantenemos redes, equipamiento y plataformas para
                organismos públicos, operadores e infraestructura crítica.
                Alianza estratégica con SICE para ITS, movilidad y servicios
                urbanos inteligentes.
              </p>
            </div>
            <img
              src="./favicon.png"
              alt="IT-TEL"
              className="w-16 shrink-0 opacity-80 lg:w-20"
            />
          </div>
        </Reveal>

        {/* Partners — grilla de logos */}
        <Reveal delay={0.1} className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            Operadores y organismos
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {partners.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={p.name}
                className="mx-auto max-h-12 w-auto max-w-full object-contain opacity-60 transition-opacity hover:opacity-100"
                loading="lazy"
              />
            ))}
          </div>
        </Reveal>

        {/* Contacto — botón abre modal */}
        <Reveal delay={0.15} className="mt-14">
          <div className="border-t border-ink-200 pt-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-xl font-bold text-ink-900 sm:text-2xl">Contáctanos</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-600">
                  Consultas sobre implementación, integración y características
                  de la plataforma.
                </p>
                <button onClick={onContact} className="btn-primary mt-5">
                  Enviar mensaje
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>

              <div className="flex flex-col gap-3 text-sm">
                <a href="mailto:administracion@it-tel.com.ar" className="flex items-center gap-2 text-ink-600 transition-colors hover:text-ink-900">
                  <Mail className="size-4 text-cyan-700" /> administracion@it-tel.com.ar
                </a>
                <span className="flex items-center gap-2 text-ink-600">
                  <Phone className="size-4 text-cyan-700" /> 0810-345-ITTEL (4883)
                </span>
                <span className="flex items-center gap-2 text-ink-600">
                  <MapPin className="size-4 text-cyan-700" /> Av. Alicia Moreau de Justo 1930, CABA
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
