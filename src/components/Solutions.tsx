import { SectionShell, SectionHeading } from "@/components/ui/Section";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { SolutionCard } from "@/components/ui/Card";
import { solutions } from "@/data/solutions";

export function Solutions() {
  return (
    <SectionShell id="soluciones" className="bg-ink-50/60">
      <SectionHeading
        eyebrow="Soluciones"
        title="Una plataforma, todas las verticales urbanas"
        description="Cada módulo comparte el mismo mapa y motor de alertas. Activá los que tu ciudad necesita hoy y sumá el resto a medida que la operación crece."
      />

      <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <RevealItem key={s.id}>
            <SolutionCard
              icon={s.icon}
              title={s.title}
              description={s.description}
              metric={s.metric}
              metricLabel={s.metricLabel}
              status={s.status}
            />
          </RevealItem>
        ))}
      </RevealStagger>

      <p className="mt-8 text-sm text-ink-500">
        No son productos sueltos: son capas de una misma operación.
      </p>
    </SectionShell>
  );
}
