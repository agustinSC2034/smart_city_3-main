import { motion } from "motion/react";
import { Camera, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { EASE, staggerContainer, itemFadeUp } from "@/lib/motion";

const keyPoints = [
  {
    icon: Camera,
    title: "Dato + cámara en el mismo lugar",
    description: "El sensor y la cámara caen sobre el mismo punto del mapa, con video de evidencia desde el primer segundo.",
  },
  {
    icon: MapPin,
    title: "Asignación por cercanía",
    description: "La plataforma elige la cuadrilla disponible más próxima según GPS, tipo de tarea y prioridad.",
  },
  {
    icon: Users,
    title: "Una trazabilidad, todos los actores",
    description: "Reclamo, sensor, cámara, activo, cuadrilla y supervisor quedan en un mismo evento auditable.",
  },
];

export function IncidentCoordination() {
  return (
    <section
      id="incidentes"
      className="relative scroll-mt-24 overflow-hidden bg-brand-deep py-20 text-ink-100 sm:py-28"
    >
      {/* Background image — dimmed highway */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="./plataforma/autopista.jpg"
          alt=""
          className="size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,16,35,0.85) 0%, rgba(5,16,35,0.72) 45%, rgba(5,16,35,0.88) 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 grid-line-bg opacity-15" />
      </div>

      <div className="container-page relative">
        {/* ===== Header ===== */}
        <Reveal direction="up">
          <div className="max-w-3xl">
            <p className="eyebrow text-cyan-glow">
              <span className="size-1.5 rounded-full bg-current" aria-hidden />
              Respuesta urbana coordinada
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              De la alerta a la acción
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Cada incidente reúne datos, cámaras, activos, responsables y tareas en un
              mismo flujo operativo. La ciudad sabe qué pasó, quién debe actuar y cuánto
              tarda en resolverlo.
            </p>
          </div>
        </Reveal>

        {/* ===== Key points ===== */}
        <motion.ol
          className="mt-12 grid gap-6 sm:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer(0.1)}
        >
          {keyPoints.map((k) => {
            const Icon = k.icon;
            return (
              <motion.li
                key={k.title}
                variants={itemFadeUp}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-cyan-tech/15 text-cyan-glow ring-1 ring-cyan-tech/30">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-white">{k.title}</h3>
                <p className="text-sm leading-relaxed text-ink-200">{k.description}</p>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* ===== Closing line ===== */}
        <Reveal delay={0.1} className="mt-14">
          <p className="mx-auto max-w-2xl text-center text-lg font-medium leading-relaxed text-white sm:text-xl">
            Un mismo evento, una respuesta coordinada,{" "}
            <span className="text-cyan-glow">una trazabilidad completa.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
