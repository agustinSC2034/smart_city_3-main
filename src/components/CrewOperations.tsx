import { FeatureSection, ProductScreenshot } from "@/components/ui/Feature";

export function CrewOperations() {
  return (
    <FeatureSection
      id="cuadrillas"
      dark
      eyebrow="Operación · Auditoría urbana"
      title="Gestión y auditoría de cuadrillas"
      description="Tickets, rutas, seguimiento GPS, evidencia y control de SLA para supervisar trabajos de limpieza, mantenimiento e infraestructura en la vía pública."
      highlights={[
        "Tickets u órdenes de trabajo con prioridad y SLA",
        "Ubicación GPS, ruta sugerida y llegada al lugar",
        "Evidencia fotográfica antes y después",
        "Validación de supervisor: aprobar, rechazar o corregir",
        "Productividad por cuadrilla y auditoría de contratistas",
      ]}
      platformNote="Cada ticket comparte responsable, GPS, SLA, evidencia e historial."
      ctaLabel="Ver detalle de activos y auditoría"
      ctaTarget="auditoria"
      mock={
        <ProductScreenshot
          src="./plataforma/cuadrillas.png"
          alt="Plataforma de gestión y auditoría de cuadrillas — tickets, GPS, evidencia y SLA"
          aspect="aspect-[16/10]"
          dark
        />
      }
    />
  );
}
