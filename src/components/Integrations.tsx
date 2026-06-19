import { Plug, Check } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { RevealStagger, RevealItem, Reveal } from "@/components/ui/Reveal";
import { integrations } from "@/data/architecture";

export function Integrations() {
  return (
    <SectionShell id="integraciones">
      <Reveal>
        <SectionHeading
          eyebrow="Diseñada para integrarse"
          title="Se conecta con lo que tu ciudad ya tiene"
          description="No reemplazamos tus sistemas: los unimos. La plataforma se integra con infraestructura municipal, canales de reclamos, cámaras, sensores, GPS y proveedores."
        />
      </Reveal>

      <RevealStagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {integrations.map((it) => (
          <RevealItem key={it}>
            <div className="flex items-center gap-2.5 rounded-xl border border-ink-200 bg-white p-3.5 shadow-soft transition-colors hover:border-cyan-tech/40 hover:bg-cyan-tech/5">
              <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand/5 text-brand ring-1 ring-brand/10">
                <Plug className="size-3.5" />
              </span>
              <span className="text-[13px] font-medium text-ink-800">{it}</span>
              <Check className="ml-auto size-4 text-ops-dark" />
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </SectionShell>
  );
}
