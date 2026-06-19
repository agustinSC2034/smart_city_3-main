import { Cpu, Thermometer, Droplets, Volume2, Wind, Gauge, Trash2, Lightbulb, TrafficCone } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { RevealStagger, RevealItem, Reveal } from "@/components/ui/Reveal";
import { flowSteps } from "@/data/architecture";

const sensorTypes = [
  { icon: Thermometer, label: "Temperatura y humedad", desc: "Condiciones ambientales por zona." },
  { icon: Wind, label: "Calidad del aire", desc: "PM2.5, PM10, CO, NOx y gases." },
  { icon: Volume2, label: "Ruido urbano", desc: "Decibeles, picos y patrones sonoros." },
  { icon: Droplets, label: "Nivel y lluvia", desc: "Sumideros, drenaje e inundaciones." },
  { icon: Gauge, label: "Conteo y velocidad", desc: "Tránsito vehicular y peatonal." },
  { icon: Trash2, label: "Llenado de contenedores", desc: "Ultrasonido, temperatura y puntos críticos." },
  { icon: Lightbulb, label: "Estado de luminarias", desc: "Consumo, fallas y dimerización." },
  { icon: TrafficCone, label: "Controladores semafóricos", desc: "Fases, fallas y regulación adaptativa." },
];

export function HowItWorks() {
  return (
    <SectionShell id="tecnologia">
      <Reveal>
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Del dato en la calle al indicador de gestión"
          description="Un mismo flujo recorre toda la operación: capturar, conectar, procesar, decidir, ejecutar y medir. Cada etapa deja rastro y alimenta la siguiente."
        />
      </Reveal>

      <RevealStagger className="mt-12">
        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6" role="list">
          {/* connecting line on lg */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block"
            aria-hidden
          />
          {flowSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="relative" role="listitem">
                <RevealItem>
                  <article className="card-surface h-full p-5">
                    <div className="flex items-center gap-3">
                      <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-soft ring-4 ring-white">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="nums text-[11px] font-bold uppercase tracking-wider text-cyan-700">
                          Paso {s.step}
                        </p>
                        <h3 className="text-base font-semibold text-ink-900">{s.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">
                      {s.description}
                    </p>
                  </article>
                </RevealItem>
              </div>
            );
          })}
        </div>
      </RevealStagger>

      <Reveal delay={0.1} className="mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500">
          <span className="font-semibold uppercase tracking-wide text-ink-600">Ciclo</span>
          <span>Detectar</span>
          <span className="text-ink-300">→</span>
          <span>Analizar</span>
          <span className="text-ink-300">→</span>
          <span>Accionar</span>
          <span className="text-ink-300">→</span>
          <span>Medir</span>
        </div>
      </Reveal>

      {/* Sensores — bloque editorial, no grilla de cards */}
      <Reveal delay={0.15} className="mt-16">
        <div className="border-t border-ink-200 pt-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand/5 text-brand ring-1 ring-brand/10">
              <Cpu className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                Dispositivos urbanos
              </p>
              <h3 className="text-xl font-bold text-ink-900">Sensores en la calle</h3>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">
            La plataforma es agnóstica de hardware: se conecta con sensores de múltiples
            proveedores mediante LoRaWAN, NB-IoT, 4G/5G o WiFi. Cada dispositivo reporta a su
            ritmo y queda georreferenciado en el mismo mapa operativo.
          </p>

          <RevealStagger className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {sensorTypes.map((s) => {
              const Icon = s.icon;
              return (
                <RevealItem key={s.label}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-brand ring-1 ring-ink-200">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-ink-900">{s.label}</p>
                      <p className="mt-0.5 text-[12px] leading-snug text-ink-600">{s.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>

          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-500">
            <span className="font-medium">Conectividad:</span>
            {["LoRaWAN", "NB-IoT", "4G/5G", "WiFi", "Fibra óptica", "Radioenlaces"].map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span className="rounded-full border border-ink-200 bg-white px-2.5 py-1 font-medium text-ink-700">{c}</span>
                {i < 5 && <span className="text-ink-300">·</span>}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
