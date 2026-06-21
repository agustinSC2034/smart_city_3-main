import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImageMock } from "@/components/ui/Feature";

const flow = [
  { t: "Ciudadano reporta", d: "Desde web, app o 147/BOTI con foto y ubicación." },
  { t: "Geolocalización", d: "El reclamo cae en el mapa con coordenadas exactas." },
  { t: "Clasificación", d: "Categoría automática y área responsable asignada." },
  { t: "Cruce con activos", d: "Se vincula a luminaria, semáforo o contenedor cercano." },
  { t: "Cuadrilla asignada", d: "Orden de trabajo con prioridad y SLA definido." },
  { t: "Cierre con evidencia", d: "Foto antes/después y validación de cumplimiento." },
];

export function Citizens() {
  return (
    <SectionShell id="reclamos">
      <Reveal>
        <SectionHeading
          eyebrow="Reclamos ciudadanos"
          title="El reclamo deja de ser un ticket aislado y se convierte en una señal operativa"
          description="Cada reclamo ciudadano entra al mismo mapa que los sensores y las cámaras, se cruza con activos cercanos y dispara una operación trazable de principio a fin."
        />
      </Reveal>

      {/* Flujo: fila editorial con divisores, sin tarjetas */}
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

      {/* Espacio para imagen real de la app ciudadana + panel municipal */}
      <Reveal delay={0.1} className="mt-12">
        <ImageMock
          label="Acá iría una imagen de la app ciudadana y el panel municipal"
          caption="Captura de la app 147/BOTI + panel del operador con reclamo, activo relacionado, cuadrilla y SLA."
          aspect="aspect-[16/9]"
        />
      </Reveal>
    </SectionShell>
  );
}
