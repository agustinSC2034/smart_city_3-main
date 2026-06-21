import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

// Activar cuando exista una imagen definitiva de la app ciudadana y el panel municipal.
const SHOW_CITIZENS_IMAGE = false;

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
    <SectionShell id="reclamos">
      <Reveal>
        <SectionHeading
          eyebrow="Reclamos ciudadanos"
          title="Reclamos conectados con la operación de campo"
          description="Cada reporte se geolocaliza, se clasifica y se vincula con el activo o servicio correspondiente. Desde el mismo registro se asigna la intervención y se controla su cierre."
        />
      </Reveal>

      {/* Flujo: fila editorial con divisores y numeración conservada */}
      <Reveal delay={0.05} className="mt-10">
        <ol className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-6">
          {flow.map((s, i) => (
            <li key={s.t} className="flex flex-col border-l border-ink-200 pl-4">
              <span className="nums text-[12px] font-semibold text-cyan-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-[13px] font-semibold text-ink-900">{s.t}</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Espacio reservado para imagen de app ciudadana + panel municipal.
          Activar SHOW_CITIZENS_IMAGE cuando el archivo esté disponible. */}
      {SHOW_CITIZENS_IMAGE && (
        <Reveal delay={0.1} className="mt-12">
          <img
            src="./plataforma/reclamos-app-panel.png"
            alt="App ciudadana y panel municipal con reclamo geolocalizado."
            className="mx-auto block w-full max-w-5xl"
            loading="lazy"
          />
        </Reveal>
      )}
    </SectionShell>
  );
}
