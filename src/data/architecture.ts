import {
  Cpu,
  Radio,
  Cloud,
  Brain,
  ClipboardList,
  FileBarChart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type FlowStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const flowSteps: FlowStep[] = [
  {
    id: "capture",
    step: "01",
    title: "Captura de datos",
    description:
      "Sensores, cámaras, reclamos ciudadanos, GPS de flotas, activos urbanos y APIs externas alimentan la plataforma de forma continua.",
    icon: Cpu,
  },
  {
    id: "connectivity",
    step: "02",
    title: "Conectividad",
    description:
      "Fibra, radioenlaces, 4G/5G, LoRaWAN, NB-IoT y WiFi sobre redes municipales existentes para llevar los datos al centro.",
    icon: Radio,
  },
  {
    id: "platform",
    step: "03",
    title: "Plataforma de datos",
    description:
      "Nube, base histórica, motor de eventos e integraciones que normalizan y unifican toda la información urbana.",
    icon: Cloud,
  },
  {
    id: "intelligence",
    step: "04",
    title: "Inteligencia operativa",
    description:
      "Reglas, alertas, clasificación, priorización y predicción para transformar datos en decisiones accionables.",
    icon: Brain,
  },
  {
    id: "manage",
    step: "05",
    title: "Gestión",
    description:
      "Cuadrillas, rutas, tareas, evidencia fotográfica y control de SLA para ejecutar la operación de forma coordinada.",
    icon: ClipboardList,
  },
  {
    id: "report",
    step: "06",
    title: "Reportes y auditoría",
    description:
      "KPIs, productividad, cumplimiento, trazabilidad y transparencia para auditar y planificar la mejora continua.",
    icon: FileBarChart,
  },
];

export type ArchLayer = {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

export const archLayers: ArchLayer[] = [
  {
    id: "devices",
    title: "Dispositivos urbanos",
    description:
      "Todo lo que mide, observa y reporta el estado real de la ciudad.",
    items: [
      "Sensores IoT",
      "Cámaras y analítica de video",
      "Controladores semafóricos",
      "Luminarias conectadas",
      "GPS de flotas y cuadrillas",
      "Estaciones ambientales",
    ],
    icon: Cpu,
  },
  {
    id: "connectivity",
    title: "Conectividad",
    description:
      "Capa de transporte sobre infraestructura existente y nueva.",
    items: ["Fibra óptica", "Radioenlaces", "LTE / 5G", "LoRaWAN / NB-IoT", "WiFi municipal", "Redes existentes"],
    icon: Radio,
  },
  {
    id: "platform",
    title: "Plataforma",
    description:
      "Núcleo de datos, eventos, APIs y analítica para unificar la ciudad.",
    items: ["Nube y edge", "APIs abiertas", "Base de datos histórica", "Motor de eventos", "Analítica y reglas", "Integraciones"],
    icon: Cloud,
  },
  {
    id: "apps",
    title: "Aplicaciones",
    description:
      "Interfaces para cada actor de la operación urbana.",
    items: ["Dashboard web", "App inspectores", "App cuadrillas", "Portal ciudadano", "Reportes y auditoría", "Mapas y GIS"],
    icon: ClipboardList,
  },
  {
    id: "integrations",
    title: "Integraciones",
    description:
      "Conexión con los sistemas y actores que ya existen en el municipio.",
    items: ["Sistemas municipales", "147 / BOTI", "GIS", "Proveedores", "Contratistas", "APIs públicas/privadas"],
    icon: FileBarChart,
  },
  {
    id: "security",
    title: "Seguridad y gobierno",
    description:
      "Control de acceso, trazabilidad y resguardo de la información.",
    items: ["Roles y permisos", "Auditoría y logs", "Respaldos", "Cifrado", "Cumplimiento normativo", "Gobierno de datos"],
    icon: ShieldCheck,
  },
];

export const integrations = [
  "Sistemas municipales",
  "147 / BOTI",
  "VMS de cámaras",
  "Sensores IoT",
  "Controladores semafóricos",
  "Luminarias inteligentes",
  "GPS de flotas",
  "Mapas GIS",
  "Bases de datos",
  "Proveedores y contratistas",
  "APIs públicas",
  "APIs privadas",
];
