import { FeatureSection, ProductScreenshot } from "@/components/ui/Feature";

export function SmartLighting() {
  return (
    <FeatureSection
      id="alumbrado"
      mockSide="left"
      eyebrow="Energía · IoT"
      title="Alumbrado inteligente"
      description="Luminarias conectadas que reportan estado y consumo en tiempo real. Dimerización por horario, zona o evento, detección temprana de fallas y postes como soporte IoT para cámaras y sensores."
      highlights={[
        "Falla y consumo por punto de luz, con ficha de cada luminaria",
        "Dimerización por horario, zona o evento para bajar el consumo",
        "El posten como infraestructura: cámaras, sensores y conectividad",
      ]}
      platformNote="Una falla abre una orden de trabajo y la cuadrilla llega con la pieza correcta."
      ctaLabel="Cómo se audita el mantenimiento"
      ctaTarget="auditoria"
      className="snap-start"
      mock={<LightingMock />}
    />
  );
}

function LightingMock() {
  return (
    <ProductScreenshot
      src="./plataforma/alumbrado.png"
      alt="Vista de alumbrado inteligente con calle iluminada, mapa de luminarias, estado del controlador y cuadrilla asignada."
      aspect="aspect-[1672/941]"
      fit="contain"
      framed={false}
    />
  );
}

export function SmartCameras() {
  return (
    <FeatureSection
      id="camaras"
      dark
      mockSide="left"
      eyebrow="Operación · Analítica de video"
      title="Cámaras inteligentes"
      description="Analítica de video integrada al mapa: detección de incidentes, objetos abandonados, acumulación de personas, humo u obstrucciones. Evidencia visual para la operación, no vigilancia invasiva."
      highlights={[
        "Detección de incidentes, objetos, acumulación y humo por zona",
        "Conteo vehicular y peatonal por zona y horario",
        "Cada evento genera evidencia visual y alerta en el mapa",
      ]}
      platformNote="La analítica dispara un evento que cae en el Centro de Control con video, posición y cuadrilla sugerida, igual que un sensor o un reclamo."
      ctaLabel="Ver el centro de control"
      ctaTarget="incidentes"
      className="snap-start"
      mock={<CameraMock />}
    />
  );
}

function CameraMock() {
  return (
    <ProductScreenshot
      src="./plataforma/camaras.png"
      alt="Panel de cámaras inteligentes con video analítico, detecciones, eventos recientes y acciones rápidas."
      aspect="aspect-[1672/941]"
      fit="contain"
      dark
      framed={false}
    />
  );
}

export function SmartWaste() {
  return (
    <FeatureSection
      id="residuos"
      mockSide="left"
      eyebrow="Higiene urbana · Sensores"
      title="Residuos inteligentes"
      description="Sensores en contenedores seleccionados y puntos críticos para medir llenado, temperatura y otras variables según el equipamiento. La plataforma selecciona qué puntos atender, calcula la ruta y la cuadrilla registra el servicio."
      highlights={[
        "Sensores de llenado, temperatura y variables según equipamiento",
        "El sistema selecciona puntos y calcula la ruta del recorrido",
        "Cumplimiento por punto, GPS y evidencia fotográfica",
      ]}
      platformNote="El sensor prioriza el punto, la plataforma calcula la ruta y la cuadrilla registra el servicio."
      ctaLabel="Ver gestión de cuadrillas"
      ctaTarget="cuadrillas"
      className="snap-start"
      mock={<WasteMock />}
    />
  );
}

function WasteMock() {
  return (
    <ProductScreenshot
      src="./plataforma/residuos.png"
      alt="Vista de residuos inteligentes con contenedor sensorizado, nivel de llenado crítico, ruta recomendada y acciones operativas."
      aspect="aspect-[1672/941]"
      fit="contain"
      framed={false}
    />
  );
}
