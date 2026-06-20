import { FeatureSection, ProductScreenshot } from "@/components/ui/Feature";

export function SmartLighting() {
  return (
    <FeatureSection
      id="alumbrado"
      mockSide="left"
      eyebrow="Energia · IoT"
      title="Alumbrado inteligente"
      description="Luminarias conectadas que reportan su estado en tiempo real. Dimerizacion por horario, zona o evento, deteccion temprana de fallas y postes que sirven de infraestructura para sensores y camaras."
      highlights={[
        "Deteccion automatica de fallas y consumo por punto de luz",
        "Dimerizacion por horario, zona o evento para ahorrar energia",
        "Mantenimiento preventivo con alertas antes del reclamo",
        "Postes como soporte IoT: camaras, sensores y conectividad",
      ]}
      platformNote="Cada luminaria tiene ficha, estado y responsable en la plataforma. Una falla abre una orden de trabajo y la cuadrilla llega con la pieza correcta."
      ctaLabel="Como se audita el mantenimiento"
      ctaTarget="auditoria"
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
      eyebrow="Operacion · Analitica de video"
      title="Camaras inteligentes"
      description="Camaras con analitica de video integradas al mapa: detectan incidentes, objetos abandonados, acumulacion de personas, humo u obstrucciones. Evidencia visual para la operacion, no vigilancia invasiva."
      highlights={[
        "Deteccion de incidentes, objetos, acumulacion y humo",
        "Conteo vehicular y peatonal por zona y horario",
        "Zonas escolares, gastronomicas, turisticas y de carga",
        "Cada evento genera evidencia visual y alerta en el mapa",
      ]}
      platformNote="La analitica dispara un evento que cae en el Centro de Control con video de evidencia, posicion y cuadrilla sugerida, igual que un sensor o un reclamo."
      ctaLabel="Ver el centro de control"
      ctaTarget="control"
      mock={<CameraMock />}
    />
  );
}

function CameraMock() {
  return (
    <ProductScreenshot
      src="./plataforma/camaras.png"
      alt="Panel de camaras inteligentes con video analitico, detecciones, eventos recientes y acciones rapidas."
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
      description="Sensores instalados en contenedores seleccionados y puntos criticos para medir llenado, temperatura y otras variables segun el equipamiento instalado. La plataforma selecciona que puntos atender, calcula una ruta y la cuadrilla registra el servicio."
      highlights={[
        "Sensores de llenado, temperatura y otras variables segun equipamiento",
        "El sistema selecciona que puntos atender y calcula la ruta",
        "Deteccion de desbordes y puntos criticos en mapa",
        "Control de cumplimiento por punto, GPS y evidencia fotografica",
      ]}
      platformNote="El sensor prioriza el punto, la plataforma calcula la ruta y la cuadrilla registra el servicio."
      ctaLabel="Ver gestion de cuadrillas"
      ctaTarget="cuadrillas"
      mock={<WasteMock />}
    />
  );
}

function WasteMock() {
  return (
    <ProductScreenshot
      src="./plataforma/residuos.png"
      alt="Vista de residuos inteligentes con contenedor sensorizado, nivel de llenado critico, ruta recomendada y acciones operativas."
      aspect="aspect-[1672/941]"
      fit="contain"
      framed={false}
    />
  );
}
