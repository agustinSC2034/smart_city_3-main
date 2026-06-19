"use strict";

/* ========================================================================
   DATA MOCK — editá estos arrays para cambiar textos, métricas y estados
   ======================================================================== */

const NAV_ITEMS = [
  { id: "plataforma", label: "Plataforma" },
  { id: "soluciones", label: "Soluciones" },
  { id: "control", label: "Centro de control" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "casos", label: "Casos de uso" },
  { id: "contacto", label: "Contacto" },
];

const SOLUTIONS = [
  { icon: "layout-dashboard", title: "Centro de Control Smart City", desc: "Mapa vivo de la ciudad con alertas operativas, estado de servicios, gestión por comuna o zona, indicadores de cumplimiento y trazabilidad de cada evento.", metric: "24/7", metricLabel: "Monitoreo", status: "ok", tag: "Núcleo" },
  { icon: "traffic-cone", title: "Semáforos inteligentes", desc: "Cruces conectados con regulación adaptativa, detección de congestión, prioridad para transporte público y emergencias, estado de controladores y alertas de fallas.", metric: "412", metricLabel: "Cruces activos", status: "ok", tag: "Movilidad" },
  { icon: "car-front", title: "Tránsito y movilidad", desc: "Cámaras de conteo vehicular, detección de congestión, tiempos de viaje, incidentes, cortes y estacionamiento inteligente, con zonas escolares, turísticas y de carga.", metric: "-18%", metricLabel: "Demora media", status: "info", tag: "Movilidad" },
  { icon: "cctv", title: "Cámaras y operación urbana", desc: "Cámaras integradas al mapa con analítica de video para detectar incidentes, objetos, acumulación, humo u obstrucciones. Evidencia visual para la operación, no vigilancia invasiva.", metric: "1.286", metricLabel: "Cámaras", status: "ok", tag: "Operación" },
  { icon: "lightbulb", title: "Alumbrado inteligente", desc: "Luminarias conectadas con detección de fallas en tiempo real, dimerización por horario o evento, mantenimiento preventivo y postes como infraestructura IoT para sensores y cámaras.", metric: "38%", metricLabel: "Ahorro energía", status: "ok", tag: "Energía" },
  { icon: "trash-2", title: "Residuos inteligentes", desc: "Contenedores con sensores de nivel de llenado, rutas de recolección optimizadas, detección de desbordes y control de cumplimiento por punto crítico.", metric: "92%", metricLabel: "Contenedor pico", status: "alert", tag: "Higiene" },
  { icon: "message-square-warning", title: "Reclamos ciudadanos conectados", desc: "Reclamos desde web, app o 147/BOTI con foto y ubicación, clasificación automática, derivación a área responsable, seguimiento de SLA y cierre con evidencia. El reclamo como sensor humano.", metric: "147", metricLabel: "Canal integrado", status: "warn", tag: "Ciudadano" },
  { icon: "wrench", title: "Mantenimiento urbano", desc: "Inventario de activos georreferenciados, órdenes de trabajo, cuadrillas en mapa, tareas por prioridad, fotos antes y después, historial de activos, SLA y productividad.", metric: "2.340", metricLabel: "Activos", status: "ok", tag: "Auditoría" },
  { icon: "wind", title: "Ambiente: aire y ruido", desc: "Sensores de PM2.5, PM10, CO, NOx, temperatura y humedad, más sensores de ruido por zona que miden decibeles y patrones, no conversaciones. Mapas de calor y alertas por umbral.", metric: "26", metricLabel: "Estaciones", status: "info", tag: "Ambiente" },
  { icon: "droplets", title: "Agua, drenaje e inundaciones", desc: "Sensores de nivel, lluvia y sumideros críticos con alertas tempranas, mapa de riesgo y cuadrillas preventivas para reducir inundaciones y tiempos de respuesta.", metric: "180", metricLabel: "Sumideros", status: "warn", tag: "Hídrico" },
  { icon: "map-pin", title: "Zonas inteligentes", desc: "Zonas escolares, gastronómicas, turísticas, ambientales y de eventos con reglas específicas, sensores, cámaras, reclamos, permisos y fiscalización integrada.", metric: "9", metricLabel: "Zonas activas", status: "ok", tag: "Gestión" },
];

const STATUS_STYLES = {
  ok:    { dot: "bg-ops",      text: "text-ops-dark",     chip: "border-ops/30 bg-ops/10 text-ops-dark",     label: "Operativo" },
  warn:  { dot: "bg-amber-500",text: "text-amber-700",    chip: "border-amber-500/40 bg-amber-500/10 text-amber-700", label: "Atención" },
  alert: { dot: "bg-alert",    text: "text-alert",        chip: "border-alert/30 bg-alert/10 text-alert",    label: "Crítico" },
  info:  { dot: "bg-cyan-tech",text: "text-cyan-tech",    chip: "border-cyan-tech/30 bg-cyan-tech/10 text-cyan-tech", label: "Info" },
};

const ALERTS = [
  { id: "a1", zone: "Centro / Av. Corrientes y Callao", title: "Congestión alta en cruce", detail: "Demora media 11 min. Semáforo 3 en regulación adaptativa.", status: "alert", time: "09:42", category: "Transito", crew: "Cuadrilla T-3" },
  { id: "a2", zone: "Comuna 5 / Balvanera", title: "Luminaria fuera de servicio", detail: "Luminaria 478 - postes Av. Rivadavia. Falla de driver.", status: "warn", time: "09:28", category: "Alumbrado", crew: "Cuadrilla L-1" },
  { id: "a3", zone: "Comuna 1 / Puerto Madero", title: "Contenedor con llenado 92%", detail: "Contenedor 091 - ruta de recolección recalculada.", status: "warn", time: "09:15", category: "Residuos", crew: "Cuadrilla R-2" },
  { id: "a4", zone: "Comuna 14 / Palermo", title: "Ruido supera umbral nocturno", detail: "Sensor 22 - 68 dB. Patron recurrente zona gastronómica.", status: "info", time: "02:10", category: "Ambiente" },
  { id: "a5", zone: "Comuna 3 / Balvanera", title: "Cámara detecta acumulación", detail: "Cámara 217 - objetos en vía pública. Verificando evento.", status: "warn", time: "08:51", category: "Camaras" },
  { id: "a6", zone: "147 / Reclamo ciudadano", title: "Reclamo pendiente de validación", detail: "Ticket #44-1182 - bache con foto. Cruce con activo cercano.", status: "info", time: "08:33", category: "Reclamo" },
  { id: "a7", zone: "Comuna 4 / La Boca", title: "Cuadrilla asignada en camino", detail: "Cuadrilla M-7 ETA 14 min. Orden de trabajo OT-2207.", status: "ok", time: "09:47", category: "Reclamo", crew: "Cuadrilla M-7" },
  { id: "a8", zone: "Comuna 6 / Caballito", title: "Sumidero crítico - nivel alto", detail: "Sumidero 22 - sensor de nivel 78%. Lluvia 12 mm/h.", status: "warn", time: "07:58", category: "Hidrico", crew: "Cuadrilla H-4" },
];

const KPIS = [
  { label: "Sensores activos", value: "8.412", delta: "+126 hoy", tone: "up" },
  { label: "Alertas procesadas", value: "1.284", delta: "+38 últimas 24h", tone: "up" },
  { label: "Tiempo medio resolución", value: "42 min", delta: "-18% vs mes previo", tone: "up" },
  { label: "Servicios monitoreados", value: "11", delta: "Verticales activas", tone: "flat" },
  { label: "Cumplimiento SLA", value: "94,2%", delta: "+3,1pp", tone: "up" },
  { label: "Zonas críticas", value: "7", delta: "-2 vs semana", tone: "up" },
];

const CREWS = [
  { id: "T-3", name: "Tránsito 3", zone: "Centro", status: "ok", task: "Regulación cruce" },
  { id: "L-1", name: "Alumbrado 1", zone: "Balvanera", status: "warn", task: "Reemplazo driver" },
  { id: "R-2", name: "Residuos 2", zone: "Puerto Madero", status: "ok", task: "Recolección ruta 7" },
  { id: "M-7", name: "Mantenimiento 7", zone: "La Boca", status: "info", task: "OT-2207 bache" },
  { id: "H-4", name: "Hídrico 4", zone: "Caballito", status: "warn", task: "Inspección sumidero" },
  { id: "A-1", name: "Ambiente 1", zone: "Palermo", status: "ok", task: "Calibración sensor" },
];

const FILTERS = [
  { id: "all", label: "Todo", icon: "layout-dashboard" },
  { id: "Transito", label: "Tránsito", icon: "traffic-cone" },
  { id: "Alumbrado", label: "Alumbrado", icon: "lightbulb" },
  { id: "Residuos", label: "Residuos", icon: "trash-2" },
  { id: "Ambiente", label: "Ambiente", icon: "wind" },
  { id: "Camaras", label: "Cámaras", icon: "cctv" },
  { id: "Hidrico", label: "Hídrico", icon: "droplets" },
  { id: "Reclamo", label: "Reclamos", icon: "message-square-warning" },
];

const SENSOR_BARS = [
  { label: "Semáforos", value: 96, color: "#10b981" },
  { label: "Alumbrado", value: 88, color: "#10b981" },
  { label: "Cámaras", value: 92, color: "#0ea5b7" },
  { label: "Residuos", value: 74, color: "#f59e0b" },
];

const TRAFFIC_SERIES = [38,42,47,55,61,58,64,72,81,76,69,74,80,88];
const AIR_SERIES = [22,24,21,26,30,34,38,41,39,36,33,31,28,27];

const MAP_NODES = [
  { id: "n1", x: 20, y: 24, status: "ok",    pulse: true,  label: "Cruce A" },
  { id: "n2", x: 46, y: 20, status: "ok",    pulse: false, label: "Cámara 12" },
  { id: "n3", x: 70, y: 30, status: "warn",  pulse: true,  label: "Luminaria 478" },
  { id: "n4", x: 30, y: 50, status: "ok",    pulse: false, label: "Contenedor 091" },
  { id: "n5", x: 56, y: 54, status: "alert", pulse: true,  label: "Av. Corrientes" },
  { id: "n6", x: 80, y: 56, status: "ok",    pulse: false, label: "Estación aire" },
  { id: "n7", x: 38, y: 76, status: "info",  pulse: true,  label: "Cuadrilla 3" },
  { id: "n8", x: 66, y: 80, status: "warn",  pulse: true,  label: "Sumidero 22" },
];

const ROADS = [["n1","n2"],["n2","n3"],["n1","n4"],["n2","n5"],["n3","n5"],["n4","n5"],["n5","n6"],["n4","n7"],["n5","n7"],["n6","n8"],["n7","n8"]];

const STATUS_FILL = { ok: "#10b981", warn: "#f59e0b", alert: "#ef4444", info: "#0ea5b7" };

const FLOW_STEPS = [
  { step: "01", title: "Captura de datos", desc: "Sensores, cámaras, reclamos ciudadanos, GPS de flotas, activos urbanos y APIs externas alimentan la plataforma de forma continua.", icon: "cpu" },
  { step: "02", title: "Conectividad", desc: "Fibra, radioenlaces, 4G/5G, LoRaWAN, NB-IoT y WiFi sobre redes municipales existentes para llevar los datos al centro.", icon: "radio" },
  { step: "03", title: "Plataforma de datos", desc: "Nube, base histórica, motor de eventos e integraciones que normalizan y unifican toda la información urbana.", icon: "cloud" },
  { step: "04", title: "Inteligencia operativa", desc: "Reglas, alertas, clasificación, priorización y predicción para transformar datos en decisiones accionables.", icon: "brain" },
  { step: "05", title: "Gestión", desc: "Cuadrillas, rutas, tareas, evidencia fotográfica y control de SLA para ejecutar la operación de forma coordinada.", icon: "clipboard-list" },
  { step: "06", title: "Reportes y auditoría", desc: "KPIs, productividad, cumplimiento, trazabilidad y transparencia para auditar y planificar la mejora continua.", icon: "file-bar-chart" },
];

const ARCH_LAYERS = [
  { id: "devices", title: "Dispositivos urbanos", desc: "Todo lo que mide, observa y reporta el estado real de la ciudad.", items: ["Sensores IoT","Cámaras y analítica de video","Controladores semafóricos","Luminarias conectadas","GPS de flotas y cuadrillas","Estaciones ambientales"], icon: "cpu" },
  { id: "connectivity", title: "Conectividad", desc: "Capa de transporte sobre infraestructura existente y nueva.", items: ["Fibra óptica","Radioenlaces","LTE / 5G","LoRaWAN / NB-IoT","WiFi municipal","Redes existentes"], icon: "radio" },
  { id: "platform", title: "Plataforma", desc: "Núcleo de datos, eventos, APIs y analítica para unificar la ciudad.", items: ["Nube y edge","APIs abiertas","Base de datos histórica","Motor de eventos","Analítica y reglas","Integraciones"], icon: "cloud" },
  { id: "apps", title: "Aplicaciones", desc: "Interfaces para cada actor de la operación urbana.", items: ["Dashboard web","App inspectores","App cuadrillas","Portal ciudadano","Reportes y auditoría","Mapas y GIS"], icon: "clipboard-list" },
  { id: "integrations", title: "Integraciones", desc: "Conexión con los sistemas y actores que ya existen en el municipio.", items: ["Sistemas municipales","147 / BOTI","GIS","Proveedores","Contratistas","APIs públicas/privadas"], icon: "file-bar-chart" },
  { id: "security", title: "Seguridad y gobierno", desc: "Control de acceso, trazabilidad y resguardo de la información.", items: ["Roles y permisos","Auditoría y logs","Respaldos","Cifrado","Cumplimiento normativo","Gobierno de datos"], icon: "shield-check" },
];

const INTEGRATIONS = ["Sistemas municipales","147 / BOTI","VMS de cámaras","Sensores IoT","Controladores semafóricos","Luminarias inteligentes","GPS de flotas","Mapas GIS","Bases de datos","Proveedores y contratistas","APIs públicas","APIs privadas"];

const USE_CASES = [
  { icon: "building-2", title: "Municipios y gobiernos", desc: "Operación urbana unificada, reclamos conectados y auditoría de servicios públicos.", points: ["Mapa único","147 / BOTI","Indicadores de gestión"] },
  { icon: "hard-hat", title: "Concesionarias viales", desc: "Monitoreo de tránsito, incidentes, semáforos y cumplimiento de SLA contractual.", points: ["Semáforos conectados","Cámaras y analítica","Trazabilidad"] },
  { icon: "factory", title: "Parques industriales", desc: "Seguridad perimetral, movilidad interna, ambiente y mantenimiento de activos.", points: ["Accesos","Calidad de aire","Mantenimiento"] },
  { icon: "home", title: "Barrios cerrados y urbanizaciones", desc: "Alumbrado, seguridad operativa, residuos y atención al residente en un panel.", points: ["Alumbrado IoT","Cámaras","Reclamos"] },
  { icon: "droplet", title: "Servicios públicos", desc: "Agua, drenaje, residuos y alumbrado con sensores y rutas optimizadas.", points: ["Nivel y lluvia","Rutas","Evidencia"] },
  { icon: "bus-front", title: "Transporte y movilidad", desc: "Tiempos de viaje, prioridad semafórica, paradas y flotas integradas al mapa.", points: ["Conteo vehicular","Prioridad TP","Incidentes"] },
];

const IMPACT = [
  { metric: "hasta -45%", label: "tiempo de respuesta operativa", note: "según alcance del piloto" },
  { metric: "+30 pp", label: "cumplimiento de SLA en mantenimiento", note: "métrica de ejemplo" },
  { metric: "-22%", label: "recorridos de inspección innecesarios", note: "potencial estimado" },
  { metric: "-35%", label: "reclamos repetidos por zona", note: "según alcance del proyecto" },
  { metric: "hasta -38%", label: "consumo energético en alumbrado", note: "con dimerización y evento" },
  { metric: "100%", label: "trazabilidad de activos urbanos", note: "ficha, estado, historial" },
];

const OS_FLOW = [
  { label: "Fuentes", items: ["Sensor","Cámara","Reclamo","Activo urbano","Vehículo","Cuadrilla"] },
  { label: "Plataforma de datos", items: ["Normalización","Eventos","Georreferencia","Contexto"] },
  { label: "Alertas y decisiones", items: ["Reglas","Priorización","Asignación","SLA"] },
  { label: "Operación y auditoría", items: ["Cuadrillas","Evidencia","Trazabilidad","Responsables"] },
  { label: "Indicadores y reportes", items: ["KPIs","Cumplimiento","Productividad","Planificación"] },
];

const DETECT_ACT = [
  { label: "Detectar", desc: "Sensores, cámaras y ciudadanos reportan." },
  { label: "Analizar", desc: "La plataforma clasifica y prioriza el evento." },
  { label: "Accionar", desc: "Se asigna la cuadrilla y se ejecuta la tarea." },
  { label: "Medir", desc: "Se registra evidencia, SLA e indicadores." },
];

const CITIZEN_FLOW = [
  { n: "1", t: "Ciudadano reporta", d: "Desde web, app o 147/BOTI con foto y ubicación." },
  { n: "2", t: "Se geolocaliza", d: "El reclamo cae en el mapa con coordenadas exactas." },
  { n: "3", t: "Se clasifica", d: "Categoría automática y área responsable asignada." },
  { n: "4", t: "Cruce con activos", d: "Se vincula a luminaria, semáforo o contenedor cercano." },
  { n: "5", t: "Cuadrilla asignada", d: "Orden de trabajo con prioridad y SLA definido." },
  { n: "6", t: "Cierre con evidencia", d: "Foto antes/después y validación de cumplimiento." },
];

const MAINT_HISTORY = [
  { date: "18 jun · 09:12", title: "Reclamo ciudadano recibido", who: "147 / BOTI", status: "info" },
  { date: "18 jun · 09:18", title: "Validación y clasificación", who: "Supervisor zona 1", status: "ok" },
  { date: "18 jun · 09:24", title: "Orden de trabajo OT-2207 creada", who: "Sistema", status: "ok" },
  { date: "18 jun · 09:31", title: "Cuadrilla M-7 asignada · ETA 14 min", who: "Despacho", status: "warn" },
  { date: "18 jun · 09:45", title: "Cuadrilla en sitio · inicio de tarea", who: "Cuadrilla M-7", status: "ok" },
  { date: "—", title: "Cierre con evidencia fotográfica", who: "Pendiente", status: "alert" },
];

const MAINT_ASSETS = [
  { id: "LUM-478", name: "Luminaria Av. Rivadavia 2140", status: "warn" },
  { id: "SEM-03", name: "Controlador semafórico Callao", status: "ok" },
  { id: "CON-091", name: "Contenedor Puerto Madero", status: "alert" },
  { id: "SUM-22", name: "Sumidero Caballito", status: "warn" },
];

const BEFORE = ["Datos dispersos en áreas y planillas","Reclamos aislados sin trazabilidad","Poca visibilidad del cumplimiento","Recorridos manuales y reactivos","Reportes tardíos y estáticos","Mantenimiento solo cuando falla","Auditoría basada en muestras"];
const AFTER  = ["Mapa único de operación urbana","Alertas en tiempo real por zona","Tareas priorizadas por impacto","Cuadrillas coordinadas en mapa","Evidencia antes y después","Indicadores claros y vivos","Auditoría y mejora continua"];

/* ========================================================================
   HELPERS
   ======================================================================== */

function statusDotHTML(status, pulse) {
  const s = STATUS_STYLES[status];
  return '<span class="relative inline-flex size-2.5">' +
    (pulse ? '<span class="absolute inset-0 rounded-full opacity-60 animate-ping-slow ' + s.dot + '"></span>' : '') +
    '<span class="relative inline-flex size-2.5 rounded-full ' + s.dot + '"></span></span>';
}

function statusChipHTML(status, label) {
  const s = STATUS_STYLES[status];
  return '<span class="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-semibold ' + s.chip + '">' +
    '<span class="size-1.5 rounded-full ' + s.dot + '"></span>' + (label || s.label) + '</span>';
}

function statusChipDarkHTML(status, label) {
  const s = STATUS_STYLES[status];
  return '<span class="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-semibold ' + s.text + '">' +
    '<span class="size-1.5 rounded-full ' + s.dot + '"></span>' + label + '</span>';
}

function sparklineSVG(points, stroke, height, width) {
  height = height || 40;
  width = width || 120;
  stroke = stroke || "#0ea5b7";
  if (points.length < 2) return "";
  var max = Math.max.apply(null, points);
  var min = Math.min.apply(null, points);
  var range = max - min || 1;
  var stepX = width / (points.length - 1);
  var coords = points.map(function(p, i) {
    var x = i * stepX;
    var y = height - ((p - min) / range) * (height - 6) - 3;
    return [x, y];
  });
  var path = coords.map(function(c, i) { return (i === 0 ? "M" : "L") + c[0].toFixed(1) + "," + c[1].toFixed(1); }).join(" ");
  var area = path + " L" + width + "," + height + " L0," + height + " Z";
  var gid = "spark-" + stroke.replace("#", "");
  return '<svg viewBox="0 0 ' + width + " " + height + '" preserveAspectRatio="none" style="height:' + (height * 0.625) + 'px;width:100%" aria-hidden="true">' +
    '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="' + stroke + '" stop-opacity="0.25"/>' +
    '<stop offset="100%" stop-color="' + stroke + '" stop-opacity="0"/>' +
    "</linearGradient></defs>" +
    '<path d="' + area + '" fill="url(#' + gid + ')"/>' +
    '<path d="' + path + '" fill="none" stroke="' + stroke + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>' +
    "</svg>";
}

function cityMapSVG(nodes, variant) {
  variant = variant || "dark";
  var bg = variant === "dark" ? "#081a33" : "#f1f5f9";
  var roadStroke = variant === "dark" ? "#1e3a5f" : "#cbd5e1";
  var roadSoft = variant === "dark" ? "#142a4d" : "#e2e8f0";
  var gridStroke = variant === "dark" ? "#16356a" : "#e2e8f0";
  var nodeById = {};
  nodes.forEach(function(n) { nodeById[n.id] = n; });

  var roadsHTML = ROADS.map(function(pair) {
    var A = nodeById[pair[0]], B = nodeById[pair[1]];
    return '<line x1="' + A.x + '" y1="' + A.y + '" x2="' + B.x + '" y2="' + B.y + '"/>';
  }).join("");

  var dashHTML = ROADS.map(function(pair) {
    var A = nodeById[pair[0]], B = nodeById[pair[1]];
    return '<line x1="' + A.x + '" y1="' + A.y + '" x2="' + B.x + '" y2="' + B.y + '"/>';
  }).join("");

  var nodesHTML = nodes.map(function(n) {
    var fill = STATUS_FILL[n.status];
    var pulseCircle = n.pulse
      ? '<circle cx="' + n.x + '" cy="' + n.y + '" r="2.2" fill="' + fill + '" opacity="0.35" class="animate-ping-slow" style="transform-origin:' + n.x + 'px ' + n.y + 'px"/>'
      : "";
    return pulseCircle +
      '<circle cx="' + n.x + '" cy="' + n.y + '" r="1.6" fill="' + fill + '"/>' +
      '<circle cx="' + n.x + '" cy="' + n.y + '" r="0.7" fill="#ffffff"/>';
  }).join("");

  var blocksHTML =
    '<rect x="10" y="14" width="16" height="10" rx="1.5" fill="' + roadSoft + '"/>' +
    '<rect x="44" y="12" width="14" height="8" rx="1.5" fill="' + roadSoft + '"/>' +
    '<rect x="74" y="26" width="14" height="12" rx="1.5" fill="' + roadSoft + '"/>' +
    '<rect x="14" y="60" width="18" height="12" rx="1.5" fill="' + roadSoft + '"/>' +
    '<rect x="50" y="68" width="16" height="10" rx="1.5" fill="' + roadSoft + '"/>' +
    '<rect x="72" y="72" width="14" height="12" rx="1.5" fill="' + roadSoft + '"/>';

  return '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style="height:100%;width:100%" role="img" aria-label="Mapa abstracto de ciudad con sensores urbanos conectados">' +
    '<defs>' +
    '<radialGradient id="mapbg-' + variant + '" cx="50%" cy="40%" r="80%">' +
    '<stop offset="0%" stop-color="' + (variant === "dark" ? "#0c2a52" : "#ffffff") + '"/>' +
    '<stop offset="100%" stop-color="' + bg + '"/>' +
    "</radialGradient>" +
    '<pattern id="mapgrid-' + variant + '" width="6" height="6" patternUnits="userSpaceOnUse">' +
    '<path d="M6 0H0V6" fill="none" stroke="' + gridStroke + '" stroke-width="0.3"/>' +
    "</pattern>" +
    "</defs>" +
    '<rect width="100" height="100" fill="url(#mapbg-' + variant + ')"/>' +
    '<rect width="100" height="100" fill="url(#mapgrid-' + variant + ')" opacity="0.6"/>' +
    '<g opacity="0.5">' + blocksHTML + "</g>" +
    '<g stroke="' + roadStroke + '" stroke-width="1.6" stroke-linecap="round" fill="none">' + roadsHTML + "</g>" +
    '<g stroke="' + (variant === "dark" ? "#2c5a8f" : "#94a3b8") + '" stroke-width="0.4" stroke-dasharray="1.5 2.5" stroke-linecap="round" fill="none" opacity="0.8">' + dashHTML + "</g>" +
    "<g>" + nodesHTML + "</g>" +
    "</svg>";
}

/* ========================================================================
   RENDER — Solutions
   ======================================================================== */

function renderSolutions() {
  var html = SOLUTIONS.map(function(s) {
    return '<article class="solution-card group relative flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-soft hover:border-ink-300">' +
      '<div class="flex items-start justify-between">' +
      '<span class="inline-flex size-11 items-center justify-center rounded-xl bg-brand/5 text-brand ring-1 ring-brand/10"><i data-lucide="' + s.icon + '" class="size-5"></i></span>' +
      statusDotHTML(s.status) +
      "</div>" +
      '<h3 class="mt-4 text-base font-semibold text-ink-900">' + s.title + "</h3>" +
      '<p class="mt-2 text-sm leading-relaxed text-ink-600">' + s.desc + "</p>" +
      '<div class="mt-4 flex items-end justify-between border-t border-ink-100 pt-3">' +
      "<div><p class=\"nums text-lg font-bold text-ink-900\">" + s.metric + "</p>" +
      '<p class="text-[11px] uppercase tracking-wide text-ink-600">' + s.metricLabel + "</p></div>" +
      '<i data-lucide="arrow-up-right" class="size-4 text-ink-300"></i>' +
      "</div></article>";
  }).join("");
  document.getElementById("solutions-grid").innerHTML = html;
}

/* ========================================================================
   RENDER — Control Center
   ======================================================================== */

var activeFilter = "all";
var selectedAlert = ALERTS[0];

function renderControlCenter() {
  renderKPIs();
  renderFilters();
  renderAlertsList();
  renderEventPanel();
  renderCrews();
  renderEventsTable();
  renderSensorBars();
  renderControlCharts();
  document.getElementById("cc-map").innerHTML = cityMapSVG(MAP_NODES, "dark");
  lucide.createIcons();
}

function renderKPIs() {
  var html = KPIS.map(function(k) {
    var toneClass = k.tone === "up" ? "text-ops" : k.tone === "down" ? "text-alert" : "text-ink-400";
    return '<div class="bg-brand-dark px-3.5 py-3">' +
      '<p class="text-[10px] font-medium uppercase tracking-wide text-ink-400">' + k.label + "</p>" +
      '<p class="nums mt-1 text-lg font-bold text-white">' + k.value + "</p>" +
      '<p class="mt-0.5 text-[10px] font-semibold ' + toneClass + '">' + k.delta + "</p>" +
      "</div>";
  }).join("");
  document.getElementById("cc-kpis").innerHTML = html;
}

function renderFilters() {
  var html = FILTERS.map(function(f) {
    var isActive = activeFilter === f.id;
    var count = f.id === "all" ? ALERTS.length : ALERTS.filter(function(a) { return a.category === f.id; }).length;
    return '<li><button class="filter-btn flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[13px] ' +
      (isActive ? "bg-cyan-tech/15 text-white ring-1 ring-cyan-tech/30" : "text-ink-300 hover:bg-white/5 hover:text-white") +
      '" data-filter="' + f.id + '">' +
      '<span class="flex items-center gap-2"><i data-lucide="' + f.icon + '" class="size-4"></i> ' + f.label + "</span>" +
      '<span class="nums rounded px-1.5 py-0.5 text-[10px] font-semibold ' +
      (isActive ? "bg-cyan-tech/20 text-cyan-glow" : "bg-white/5 text-ink-400") +
      '">' + count + "</span></button></li>";
  }).join("");
  document.getElementById("cc-filters").innerHTML = html;
  document.querySelectorAll("[data-filter]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      activeFilter = btn.getAttribute("data-filter");
      renderFilters();
      renderAlertsList();
      lucide.createIcons();
    });
  });
}

function renderAlertsList() {
  var filtered = activeFilter === "all" ? ALERTS : ALERTS.filter(function(a) { return a.category === activeFilter; });
  var html = filtered.map(function(a) {
    var s = STATUS_STYLES[a.status];
    var isSel = selectedAlert.id === a.id;
    return '<li><button class="w-full rounded-lg p-2 text-left transition-colors ' +
      (isSel ? "bg-white/10 ring-1 ring-cyan-tech/30" : "hover:bg-white/5") +
      '" data-alert="' + a.id + '">' +
      '<div class="flex items-center justify-between">' +
      '<span class="flex items-center gap-1.5 text-[11px] font-semibold text-white"><span class="dot ' + s.dot + '"></span>' + a.title + "</span>" +
      '<span class="nums text-[10px] text-ink-400">' + a.time + "</span>" +
      "</div>" +
      '<p class="mt-0.5 truncate text-[10px] text-ink-400">' + a.zone + "</p>" +
      "</button></li>";
  }).join("");
  document.getElementById("cc-alerts").innerHTML = html;
  document.getElementById("cc-alert-count").textContent = filtered.length;
  document.querySelectorAll("[data-alert]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var id = btn.getAttribute("data-alert");
      selectedAlert = ALERTS.find(function(a) { return a.id === id; }) || ALERTS[0];
      renderAlertsList();
      renderEventPanel();
    });
  });
}

function renderEventPanel() {
  var a = selectedAlert;
  var s = STATUS_STYLES[a.status];
  var rows = [
    { label: "Categoría", value: a.category },
    { label: "Hora", value: a.time },
    { label: "Cuadrilla", value: a.crew || "Sin asignar" },
    { label: "SLA", value: "2h · en curso", tone: "warn" },
  ];
  var rowsHTML = rows.map(function(r) {
    return '<div class="flex items-center justify-between text-[11px]">' +
      '<span class="text-ink-400">' + r.label + "</span>" +
      '<span class="nums font-semibold ' + (r.tone === "warn" ? "text-amber-500" : "text-white") + '">' + r.value + "</span>" +
      "</div>";
  }).join("");
  document.getElementById("cc-event").innerHTML =
    '<div class="flex items-center justify-between">' +
    statusChipDarkHTML(a.status, a.category) +
    '<span class="nums text-[10px] text-ink-400">#' + a.id.toUpperCase() + "</span>" +
    "</div>" +
    '<p class="mt-2 text-sm font-semibold text-white">' + a.title + "</p>" +
    '<p class="mt-1 text-[11px] leading-relaxed text-ink-300">' + a.detail + "</p>" +
    '<p class="mt-2 text-[10px] text-ink-400">' + a.zone + "</p>" +
    '<div class="mt-3 space-y-2 border-t border-white/10 pt-3">' + rowsHTML + "</div>" +
    '<div class="mt-3 flex gap-2">' +
    '<button class="flex-1 rounded-lg bg-cyan-tech px-2.5 py-1.5 text-[11px] font-semibold text-brand-deep hover:bg-cyan-glow">Asignar</button>' +
    '<button class="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-white hover:bg-white/10">Ver ficha</button>' +
    "</div>";
}

function renderCrews() {
  var html = CREWS.map(function(c) {
    var s = STATUS_STYLES[c.status];
    return '<li class="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-2.5 py-2">' +
      '<span class="dot ' + s.dot + '"></span>' +
      '<div class="min-w-0 flex-1">' +
      '<p class="text-[12px] font-semibold text-white">' + c.name + ' <span class="nums text-[10px] font-medium text-ink-400">· ' + c.id + "</span></p>" +
      '<p class="truncate text-[10px] text-ink-400">' + c.zone + " · " + c.task + "</p>" +
      "</div>" +
      '<i data-lucide="chevron-right" class="size-4 text-ink-500"></i>' +
      "</li>";
  }).join("");
  document.getElementById("cc-crews").innerHTML = html;
}

function renderEventsTable() {
  var html = ALERTS.slice(0, 6).map(function(a) {
    var s = STATUS_STYLES[a.status];
    return '<li class="flex items-center gap-2 border-b border-white/5 py-2 last:border-0">' +
      '<span class="dot ' + s.dot + '"></span>' +
      '<span class="min-w-0 flex-1 truncate text-[12px] text-ink-200">' + a.title + "</span>" +
      '<span class="nums text-[10px] text-ink-500">' + a.time + "</span>" +
      "</li>";
  }).join("");
  document.getElementById("cc-events").innerHTML = html;
}

function renderSensorBars() {
  var html = SENSOR_BARS.map(function(b) {
    return '<div class="space-y-1">' +
      '<div class="flex items-center justify-between text-[10px]">' +
      '<span class="text-ink-300">' + b.label + "</span>" +
      '<span class="nums font-semibold text-white">' + b.value + "%</span>" +
      "</div>" +
      '<div class="h-1.5 w-full overflow-hidden rounded-full bg-white/10">' +
      '<div class="h-full rounded-full" style="width:' + b.value + "%;background-color:" + b.color + '"></div>' +
      "</div></div>";
  }).join("");
  document.getElementById("cc-sensor-bars").innerHTML = html;
}

function renderControlCharts() {
  document.getElementById("cc-chart-traffic").innerHTML =
    '<div class="rounded-lg border border-white/10 bg-white/5 p-2.5">' +
    '<div class="flex items-center justify-between">' +
    '<p class="text-[10px] font-medium uppercase tracking-wide text-ink-400">Tránsito</p>' +
    '<span class="nums text-[10px] font-semibold text-white">' + TRAFFIC_SERIES[TRAFFIC_SERIES.length - 1] + "</span>" +
    "</div>" + sparklineSVG(TRAFFIC_SERIES, "#22d3ee", 40, 120) + "</div>";
  document.getElementById("cc-chart-air").innerHTML =
    '<div class="rounded-lg border border-white/10 bg-white/5 p-2.5">' +
    '<div class="flex items-center justify-between">' +
    '<p class="text-[10px] font-medium uppercase tracking-wide text-ink-400">Calidad aire</p>' +
    '<span class="nums text-[10px] font-semibold text-white">' + AIR_SERIES[AIR_SERIES.length - 1] + "</span>" +
    "</div>" + sparklineSVG(AIR_SERIES, "#10b981", 40, 120) + "</div>";
}

/* ========================================================================
   RENDER — How it works
   ======================================================================== */

function renderHowItWorks() {
  var html = FLOW_STEPS.map(function(s) {
    return '<div class="relative" role="listitem">' +
      '<div class="reveal card-surface h-full p-5">' +
      '<div class="flex items-center gap-3">' +
      '<span class="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-soft ring-4 ring-white"><i data-lucide="' + s.icon + '" class="size-5"></i></span>' +
      "<div>" +
      '<p class="nums text-[11px] font-bold uppercase tracking-wider text-cyan-700">Paso ' + s.step + "</p>" +
      '<h3 class="text-base font-semibold text-ink-900">' + s.title + "</h3>" +
      "</div></div>" +
      '<p class="mt-3 text-sm leading-relaxed text-ink-600">' + s.desc + "</p>" +
      "</div></div>";
  }).join("");
  document.getElementById("flow-steps").innerHTML = html;
}

/* ========================================================================
   RENDER — Architecture
   ======================================================================== */

function renderArchitecture() {
  var html = ARCH_LAYERS.map(function(layer, i) {
    var reversed = i % 2 === 1;
    var itemsHTML = layer.items.map(function(it) {
      return '<li class="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-[13px] text-ink-200"><span class="size-1.5 rounded-full bg-cyan-glow"></span>' + it + "</li>";
    }).join("");
    return '<div class="grid items-stretch gap-3 lg:grid-cols-[260px_1fr]">' +
      '<div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 ' + (reversed ? "lg:order-2" : "") + '">' +
      '<span class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-tech/15 text-cyan-glow ring-1 ring-cyan-tech/30"><i data-lucide="' + layer.icon + '" class="size-5"></i></span>' +
      "<div>" +
      '<p class="nums text-[10px] font-bold uppercase tracking-wider text-ink-400">Capa ' + String(i + 1).padStart(2, "0") + "</p>" +
      '<h3 class="text-sm font-semibold text-white">' + layer.title + "</h3>" +
      '<p class="mt-0.5 text-[11px] leading-relaxed text-ink-300">' + layer.desc + "</p>" +
      "</div></div>" +
      '<div class="rounded-2xl border border-white/10 bg-brand-dark p-4 ' + (reversed ? "lg:order-1" : "") + '">' +
      '<ul class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">' + itemsHTML + "</ul>" +
      "</div></div>";
  }).join("");
  document.getElementById("arch-layers").innerHTML = html;
}

/* ========================================================================
   RENDER — Use cases
   ======================================================================== */

function renderUseCases() {
  var html = USE_CASES.map(function(c) {
    var pointsHTML = c.points.map(function(p) {
      return '<li class="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-[11px] font-medium text-ink-600">' + p + "</li>";
    }).join("");
    return '<article class="solution-card group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">' +
      '<span class="inline-flex size-11 items-center justify-center rounded-xl bg-brand/5 text-brand ring-1 ring-brand/10"><i data-lucide="' + c.icon + '" class="size-5"></i></span>' +
      '<h3 class="mt-4 text-base font-semibold text-ink-900">' + c.title + "</h3>" +
      '<p class="mt-2 text-sm leading-relaxed text-ink-600">' + c.desc + "</p>" +
      '<ul class="mt-4 flex flex-wrap gap-1.5">' + pointsHTML + "</ul>" +
      "</article>";
  }).join("");
  document.getElementById("use-cases-grid").innerHTML = html;
}

/* ========================================================================
   RENDER — Impact
   ======================================================================== */

function renderImpact() {
  var html = IMPACT.map(function(m) {
    return '<div class="card-surface h-full p-6">' +
      '<div class="flex items-center gap-2 text-ops-dark"><i data-lucide="trending-up" class="size-4"></i><span class="text-[11px] font-semibold uppercase tracking-wide">' + m.note + "</span></div>" +
      '<p class="nums mt-3 text-4xl font-extrabold tracking-tight text-ink-900">' + m.metric + "</p>" +
      '<p class="mt-2 text-sm leading-relaxed text-ink-600">' + m.label + "</p>" +
      "</div>";
  }).join("");
  document.getElementById("impact-grid").innerHTML = html;
}

/* ========================================================================
   RENDER — Integrations
   ======================================================================== */

function renderIntegrations() {
  var html = INTEGRATIONS.map(function(it) {
    return '<div class="flex items-center gap-2.5 rounded-xl border border-ink-200 bg-white p-3.5 shadow-soft transition-colors hover:border-cyan-tech/40 hover:bg-cyan-tech/5">' +
      '<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand/5 text-brand ring-1 ring-brand/10"><i data-lucide="plug" class="size-3.5"></i></span>' +
      '<span class="text-[13px] font-medium text-ink-800">' + it + "</span>" +
      '<i data-lucide="check" class="ml-auto size-4 text-ops-dark"></i>' +
      "</div>";
  }).join("");
  document.getElementById("integrations-grid").innerHTML = html;
}

/* ========================================================================
   RENDER — Hero map + sparkline
   ======================================================================== */

function renderHero() {
  document.getElementById("hero-map").innerHTML = cityMapSVG(MAP_NODES, "dark");
  document.getElementById("hero-spark").innerHTML = sparklineSVG([20,24,22,30,36,33,40,48,52,47,44,50], "#22d3ee", 40, 120);
}

/* ========================================================================
   RENDER — Citizens flow
   ======================================================================== */

function renderCitizenFlow() {
  var html = CITIZEN_FLOW.map(function(s) {
    return '<li class="relative rounded-xl border border-ink-200 bg-white p-3.5 shadow-soft">' +
      '<span class="inline-flex size-7 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">' + s.n + "</span>" +
      '<h3 class="mt-2.5 text-[13px] font-semibold text-ink-900">' + s.t + "</h3>" +
      '<p class="mt-1 text-[12px] leading-relaxed text-ink-600">' + s.d + "</p>" +
      "</li>";
  }).join("");
  document.getElementById("citizen-flow").innerHTML = html;
}

/* ========================================================================
   RENDER — Maintenance
   ======================================================================== */

function renderMaintenance() {
  var historyHTML = MAINT_HISTORY.map(function(h, i) {
    var isLast = i === MAINT_HISTORY.length - 1;
    var iconHTML = h.status === "ok"
      ? '<i data-lucide="check-circle-2" class="size-3.5"></i>'
      : h.status === "alert"
        ? '<i data-lucide="circle-dashes" class="size-3.5"></i>'
        : '<span class="size-1.5 rounded-full bg-current"></span>';
    var borderClass = h.status === "ok" ? "border-ops text-ops-dark" : h.status === "warn" ? "border-amber-500 text-amber-700" : h.status === "alert" ? "border-alert text-alert" : "border-cyan-tech text-cyan-tech";
    return '<li class="relative flex gap-3 pb-5 last:pb-0">' +
      (isLast ? "" : '<span class="absolute left-[11px] top-6 h-full w-px bg-ink-200" aria-hidden="true"></span>') +
      '<span class="relative z-10 mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border-2 bg-white ' + borderClass + '">' + iconHTML + "</span>" +
      '<div class="min-w-0 flex-1">' +
      '<div class="flex items-center justify-between gap-2">' +
      '<p class="text-[13px] font-semibold text-ink-900">' + h.title + "</p>" +
      '<span class="nums shrink-0 text-[11px] text-ink-600">' + h.date + "</span>" +
      "</div>" +
      '<p class="mt-0.5 text-[11px] text-ink-600">por ' + h.who + "</p>" +
      "</div></li>";
  }).join("");
  document.getElementById("maint-history").innerHTML = historyHTML;

  var assetsHTML = MAINT_ASSETS.map(function(a) {
    return '<li class="flex items-center justify-between rounded-xl border border-ink-200 px-3 py-2.5">' +
      '<div class="min-w-0"><p class="nums text-[12px] font-bold text-ink-900">' + a.id + "</p>" +
      '<p class="truncate text-[11px] text-ink-600">' + a.name + "</p></div>" +
      statusChipHTML(a.status) +
      "</li>";
  }).join("");
  document.getElementById("maint-assets").innerHTML = assetsHTML;
}

/* ========================================================================
   INTERACTIVITY — Header, mobile menu, scroll reveal
   ======================================================================== */

function initHeader() {
  var header = document.getElementById("site-header");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 8) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  var menuBtn = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  menuBtn.addEventListener("click", function() {
    var open = mobileMenu.classList.contains("hidden");
    if (open) {
      mobileMenu.classList.remove("hidden");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    }
    lucide.createIcons();
  });

  document.querySelectorAll("[data-scroll]").forEach(function(el) {
    el.addEventListener("click", function(e) {
      e.preventDefault();
      var id = el.getAttribute("data-scroll");
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      var target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "-60px" });

  document.querySelectorAll(".reveal").forEach(function(el) {
    observer.observe(el);
  });
}

/* ========================================================================
   INIT
   ======================================================================== */

document.addEventListener("DOMContentLoaded", function() {
  renderHero();
  renderSolutions();
  renderControlCenter();
  renderCitizenFlow();
  renderMaintenance();
  renderHowItWorks();
  renderArchitecture();
  renderUseCases();
  renderImpact();
  renderIntegrations();
  initHeader();
  initReveal();
  lucide.createIcons();
});
