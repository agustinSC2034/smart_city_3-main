import { Reveal } from "@/components/ui/Reveal";

const flow = [
  { t: "Ciudadano reporta", d: "Desde web, app o 147/BOTI con foto, categoría y ubicación." },
  { t: "Geolocalización", d: "El reporte cae en el mapa con coordenadas y comuna." },
  { t: "Clasificación", d: "Categoría automática y derivación al área responsable." },
  { t: "Cruce con activos", d: "Se vincula a la luminaria, semáforo o contenedor más cercano." },
  { t: "Intervención asignada", d: "Orden de trabajo con responsable, prioridad y SLA." },
  { t: "Cierre con evidencia", d: "Foto antes/después y validación del área supervisora." },
];

export function Citizens() {
  return (
    <section
      id="reclamos"
      className="relative scroll-mt-24 overflow-hidden bg-brand-deep py-20 text-ink-100 sm:py-28"
    >
      {/* Imagen de fondo — reclamo.png */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="./plataforma/reclamo.png"
          alt=""
          className="size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,16,35,0.88) 0%, rgba(5,16,35,0.74) 40%, rgba(5,16,35,0.96) 80%, rgba(5,16,35,1) 100%)",
          }}
        />
      </div>

      <div className="container-page relative">
        {/* Header */}
        <Reveal direction="up">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Reclamos vinculados a tareas de campo
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Un reclamo por acumulación de residuos, un contenedor dañado o una
              luminaria apagada se geolocaliza, se vincula al activo correspondiente y
              genera una tarea con responsable, prioridad y vencimiento.
            </p>
          </div>
        </Reveal>

        {/* Flujo: fila editorial con numeración */}
        <Reveal delay={0.05} className="mt-12">
          <ol className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-6">
            {flow.map((s, i) => (
              <li key={s.t} className="flex flex-col border-l border-white/15 pl-4">
                <span className="nums text-[12px] font-semibold text-cyan-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-[13px] font-semibold text-white">{s.t}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-ink-200">{s.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
