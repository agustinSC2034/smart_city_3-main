import { FeatureSection, ProductScreenshot } from "@/components/ui/Feature";

export function CrewOperations() {
  return (
    <FeatureSection
      id="cuadrillas"
      dark
      eyebrow="Operación · Auditoría urbana"
      title="Gestión y auditoría de cuadrillas"
      description="Tickets, rutas, GPS, evidencia fotográfica y control de SLA para supervisar trabajos de limpieza, mantenimiento e infraestructura en la vía pública."
      highlights={[
        "Orden de trabajo con prioridad, responsable y SLA",
        "Ubicación GPS, ruta sugerida y llegada al lugar",
        "Evidencia antes/después y validación de supervisor",
      ]}
      platformNote="Cada ticket comparte responsable, GPS, SLA, evidencia e historial. Productividad por cuadrilla y auditoría de contratistas."
      ctaLabel="Ver detalle de activos y auditoría"
      ctaTarget="auditoria"
      className="snap-start"
      mock={
        <ProductScreenshot
          src="./plataforma/cuadrillas.png"
          alt="Plataforma de gestión y auditoría de cuadrillas — tickets, GPS, evidencia y SLA"
          aspect="aspect-[16/10]"
          dark
          framed={false}
        />
      }
    />
  );
}
