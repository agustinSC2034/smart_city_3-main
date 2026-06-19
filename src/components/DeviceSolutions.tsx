import {
  Activity,
  AlertTriangle,
  Camera,
  CheckCircle2,
  Gauge,
  Lightbulb,
  Navigation,
  Trash2,
  Waypoints,
  Zap,
} from "lucide-react";
import { FeatureSection, MockFrame } from "@/components/ui/Feature";
import { statusStyles, type StatusKey } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

/* ============================================================
 * ============================================================ */
export function SmartLighting() {
  return (
    <FeatureSection
      id="alumbrado"
      mockSide="left"
      eyebrow="Energía · IoT"
      title="Alumbrado inteligente"
      description="Luminarias conectadas que reportan su estado en tiempo real. Dimerización por horario, zona o evento, detección temprana de fallas y postes que sirven de infraestructura para sensores y cámaras."
      highlights={[
        "Detección automática de fallas y consumo por punto de luz",
        "Dimerización por horario, zona o evento para ahorrar energía",
        "Mantenimiento preventivo con alertas antes del reclamo",
        "Postes como soporte IoT: cámaras, sensores y conectividad",
      ]}
      platformNote="Cada luminaria tiene ficha, estado y responsable en la plataforma. Una falla abre una orden de trabajo y la cuadrilla llega con la pieza correcta."
      ctaLabel="Cómo se audita el mantenimiento"
      ctaTarget="auditoria"
      mock={<LightingMock />}
    />
  );
}

function LightingMock() {
  const poles = [
    { x: 14, on: true, dim: false, alert: false },
    { x: 32, on: true, dim: true, alert: false },
    { x: 50, on: false, dim: false, alert: true },
    { x: 68, on: true, dim: false, alert: false },
    { x: 86, on: true, dim: true, alert: false },
  ];
  return (
    <MockFrame title="alumbrado.ittel · corredor Av. Rivadavia" rightLabel="9.318 luminarias · 1 falla">
      <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr]">
        {/* night street */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#050d1f] sm:aspect-auto sm:min-h-[260px]">
          <svg viewBox="0 0 200 110" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
              <radialGradient id="lamp-on" cx="50%" cy="0%" r="60%">
                <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="lamp-dim" cx="50%" cy="0%" r="45%">
                <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* sky */}
            <rect width="200" height="110" fill="#050d1f" />
            {/* road */}
            <rect x="0" y="78" width="200" height="32" fill="#0b1a36" />
            <line x1="0" y1="94" x2="200" y2="94" stroke="#1e3a5f" strokeWidth="0.8" strokeDasharray="6 6" />
            {/* poles + glow */}
            {poles.map((p, i) => (
              <g key={i}>
                <line x1={p.x} y1="20" x2={p.x} y2="78" stroke="#334155" strokeWidth="1" />
                <line x1={p.x} y1="20" x2={p.x + 6} y2="18" stroke="#334155" strokeWidth="1" />
                {p.on && !p.dim && <ellipse cx={p.x + 6} cy="22" rx="22" ry="26" fill="url(#lamp-on)" />}
                {p.dim && <ellipse cx={p.x + 6} cy="22" rx="16" ry="18" fill="url(#lamp-dim)" />}
                <circle cx={p.x + 6} cy="19" r="1.6" fill={p.alert ? "#ef4444" : p.dim ? "#fcd34d" : "#fde68a"} />
                {p.alert && (
                  <g>
                    <circle cx={p.x + 6} cy="19" r="3" fill="none" stroke="#ef4444" strokeWidth="0.6" className="animate-pulse-soft" />
                    <text x={p.x + 6} y="14" fontSize="3" fill="#ef4444" textAnchor="middle" fontFamily="Inter">!</text>
                  </g>
                )}
              </g>
            ))}
          </svg>
          <div className="absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            Modo noche · dimerización activa
          </div>
        </div>

        {/* stats */}
        <div className="flex flex-col gap-2.5">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-cyan-glow">
              <Zap className="size-3.5" /> Ahorro energético
            </p>
            <p className="nums mt-1 text-2xl font-bold text-white">-38%</p>
            <p className="text-[10px] text-ink-400">con dimerización por evento</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-300">
              <Lightbulb className="size-3.5 text-ops" /> Operativas
            </p>
            <p className="nums mt-1 text-2xl font-bold text-white">99,2%</p>
            <p className="text-[10px] text-ink-400">9.317 / 9.318 luminarias</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-alert/30 bg-alert/10 p-3">
            <AlertTriangle className="size-4 text-alert" />
            <div className="leading-tight">
              <p className="text-[12px] font-semibold text-white">LUM-478 sin luz</p>
              <p className="text-[10px] text-ink-300">OT-2207 · cuadrilla L-1 en camino</p>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/* ============================================================
 * 3) CÁMARAS INTELIGENTES
 * ============================================================ */
export function SmartCameras() {
  return (
    <FeatureSection
      id="camaras"
      dark
      mockSide="left"
      eyebrow="Operación · Analítica de video"
      title="Cámaras inteligentes"
      description="Cámaras con analítica de video integradas al mapa: detectan incidentes, objetos abandonados, acumulación de personas, humo u obstrucciones. Evidencia visual para la operación, no vigilancia invasiva."
      highlights={[
        "Detección de incidentes, objetos, acumulación y humo",
        "Conteo vehicular y peatonal por zona y horario",
        "Zonas escolares, gastronómicas, turísticas y de carga",
        "Cada evento genera evidencia visual y alerta en el mapa",
      ]}
      platformNote="La analítica dispara un evento que cae en el Centro de Control con vídeo de evidencia, posición y cuadrilla sugerida — igual que un sensor o un reclamo."
      ctaLabel="Ver el centro de control"
      ctaTarget="control"
      mock={<CameraMock />}
    />
  );
}

function CameraMock() {
  return (
    <MockFrame title="camaras.ittel · cámara 217 · Comuna 3" rightLabel="analítica · en vivo">
      <div className="grid gap-3 sm:grid-cols-[1.6fr_1fr]">
        {/* feed */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#0a1426] sm:aspect-auto sm:min-h-[260px]">
          {/* fake street scene */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#13294d,transparent_60%),linear-gradient(180deg,#0a1426_0%,#0a1426_55%,#0b1a36_55%,#0b1a36_100%)]" />
          <div className="absolute inset-x-0 top-[55%] h-px bg-white/10" />
          {/* detection boxes */}
          <DetBox className="left-[12%] top-[30%] h-[28%] w-[16%]" label="Vehículo · 1" tone="info" />
          <DetBox className="left-[44%] top-[34%] h-[24%] w-[14%]" label="Vehículo · 2" tone="info" />
          <DetBox className="left-[70%] top-[60%] h-[30%] w-[20%]" label="Acumulación" tone="warn" />
          <DetBox className="left-[30%] top-[58%] h-[34%] w-[18%]" label="Objeto" tone="alert" />
          {/* overlays */}
          <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            <span className="size-1.5 rounded-full bg-alert animate-pulse-soft" /> REC · 09:47:12
          </div>
          <div className="absolute right-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            1080p · 30fps
          </div>
        </div>

        {/* analytics */}
        <div className="flex flex-col gap-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">
            Eventos detectados
          </p>
          {[
            { t: "Objeto en vía pública", n: "1", tone: "alert" as StatusKey, time: "09:42" },
            { t: "Acumulación de personas", n: "12", tone: "warn" as StatusKey, time: "09:38" },
            { t: "Conteo vehicular", n: "284", tone: "info" as StatusKey, time: "1h" },
          ].map((e) => {
            const s = statusStyles[e.tone];
            return (
              <div key={e.t} className="flex items-center gap-2.5 rounded-lg border border-ink-200 bg-white p-2.5">
                <span className={cn("dot", s.dot)} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-semibold text-ink-800">{e.t}</p>
                  <p className="text-[10px] text-ink-600">hace {e.time}</p>
                </div>
                <span className="nums text-sm font-bold text-ink-900">{e.n}</span>
              </div>
            );
          })}
          <div className="mt-1 flex items-center gap-2 rounded-lg bg-cyan-tech/10 p-3">
            <Camera className="size-4 text-cyan-tech" />
            <p className="text-[11px] leading-snug text-ink-700">
              <strong className="text-ink-900">1.286 cámaras</strong> integradas al mapa operativo.
            </p>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

function DetBox({
  className,
  label,
  tone,
}: {
  className?: string;
  label: string;
  tone: "info" | "warn" | "alert";
}) {
  const c = tone === "alert" ? "#ef4444" : tone === "warn" ? "#f59e0b" : "#22d3ee";
  return (
    <div className={cn("absolute rounded border-2", className)} style={{ borderColor: c }}>
      <span
        className="absolute -top-4 left-0 whitespace-nowrap rounded-sm px-1 text-[9px] font-semibold text-white"
        style={{ backgroundColor: c }}
      >
        {label}
      </span>
    </div>
  );
}

/* ============================================================
 * 4) RESIDUOS INTELIGENTES
 * ============================================================ */
export function SmartWaste() {
  return (
    <FeatureSection
      id="residuos"
      mockSide="left"
      eyebrow="Higiene urbana · Sensores"
      title="Residuos inteligentes"
      description="Sensores instalados en contenedores seleccionados y puntos críticos para medir llenado, temperatura y otras variables según el equipamiento instalado. La plataforma selecciona qué puntos atender, calcula una ruta y la cuadrilla registra el servicio."
      highlights={[
        "Sensores de llenado, temperatura y otras variables según equipamiento",
        "El sistema selecciona qué puntos atender y calcula la ruta",
        "Detección de desbordes y puntos críticos en mapa",
        "Control de cumplimiento por punto, GPS y evidencia fotográfica",
      ]}
      platformNote="El sensor prioriza el punto, la plataforma calcula la ruta y la cuadrilla registra el servicio."
      ctaLabel="Ver gestión de cuadrillas"
      ctaTarget="cuadrillas"
      mock={<WasteMock />}
    />
  );
}

function WasteMock() {
  const bins = [
    { id: "C-091", pct: 92, tone: "alert" as StatusKey },
    { id: "C-088", pct: 64, tone: "warn" as StatusKey },
    { id: "C-072", pct: 31, tone: "ok" as StatusKey },
  ];
  const barColor = (t: StatusKey) =>
    t === "alert" ? "#ef4444" : t === "warn" ? "#f59e0b" : "#10b981";
  return (
    <MockFrame title="residuos.ittel · monitoreo de contenedores" rightLabel="puntos críticos · en línea">
      <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
        {/* Container visual representations */}
        <div className="flex flex-col gap-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">
            Contenedores con sensor
          </p>
          {bins.map((b) => (
            <div key={b.id} className="flex items-center gap-3 rounded-lg border border-ink-200 bg-white p-2.5">
              {/* Container icon with fill level */}
              <div className="relative flex h-12 w-10 shrink-0 flex-col justify-end overflow-hidden rounded-md border-2 border-ink-300 bg-ink-100">
                <div
                  className="w-full rounded-sm transition-all"
                  style={{ height: `${b.pct}%`, backgroundColor: barColor(b.tone) }}
                />
                {/* lid */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-ink-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[12px] font-semibold text-ink-800">
                    <Trash2 className="size-3.5 text-ink-600" /> {b.id}
                  </span>
                  <span className="nums text-[14px] font-bold text-ink-900">{b.pct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full" style={{ width: `${b.pct}%`, backgroundColor: barColor(b.tone) }} />
                </div>
                <p className="mt-0.5 text-[10px] text-ink-500">
                  {b.tone === "alert" ? "Crítico · atender hoy" : b.tone === "warn" ? "Medio · priorizar" : "Ok · rutina"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Route map + platform integration */}
        <div className="flex flex-col gap-2.5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-deep sm:aspect-auto sm:min-h-[180px]">
            <svg viewBox="0 0 200 150" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <rect width="200" height="150" fill="#081a33" />
              <defs>
                <pattern id="wgrid" width="14" height="14" patternUnits="userSpaceOnUse">
                  <path d="M14 0H0V14" fill="none" stroke="#16356a" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="200" height="150" fill="url(#wgrid)" opacity="0.6" />
              {/* optimized route */}
              <path d="M20 30 L60 40 L70 80 L130 110 L180 120" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 4" />
              {/* stops with container icons */}
              {[
                { x: 20, y: 30, c: "#10b981" },
                { x: 60, y: 40, c: "#f59e0b" },
                { x: 70, y: 80, c: "#f59e0b" },
                { x: 130, y: 110, c: "#ef4444" },
                { x: 180, y: 120, c: "#10b981" },
              ].map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="3.5" fill={p.c} />
                  <circle cx={p.x} cy={p.y} r="1.2" fill="#fff" />
                </g>
              ))}
            </svg>
            <div className="absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
              Ruta optimizada · 5 paradas
            </div>
            <div className="absolute right-2.5 bottom-2.5 rounded-md bg-ops/90 px-2 py-1 text-[10px] font-bold text-white">
              <Navigation className="inline size-3" /> -30% km
            </div>
          </div>

          {/* Platform flow */}
          <div className="rounded-lg border border-ink-200 bg-ink-50/60 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Flujo operativo</p>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-ink-700">
              <span className="rounded bg-white px-1.5 py-0.5 font-medium">Sensor</span>
              <span className="text-ink-400">→</span>
              <span className="rounded bg-white px-1.5 py-0.5 font-medium">Ruta</span>
              <span className="text-ink-400">→</span>
              <span className="rounded bg-white px-1.5 py-0.5 font-medium">Cuadrilla</span>
              <span className="text-ink-400">→</span>
              <span className="rounded bg-white px-1.5 py-0.5 font-medium">Evidencia</span>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/* ============================================================
 * 5) PEAJES Y ACCESOS
 * ============================================================ */
export function SmartTolls() {
  return (
    <FeatureSection
      id="peajes"
      mockSide="left"
      eyebrow="Movilidad · Peajes"
      title="Peajes y accesos inteligentes"
      description="Gantries con lectura de patentes (ANPR) y telepeaje, control de flotas y cumplimiento por corredor. La misma plataforma que opera la ciudad también audita los accesos y el cobro."
      highlights={[
        "Lectura de patentes y telepeaje sin detener el tránsito",
        "Control de flotas, excesos y fraude por corredor",
        "Conteo y clasificación vehicular por horario",
        "Cumplimiento contractual y reportes de auditoría",
      ]}
      platformNote="Cada lectura y cada evento del corredor se suman al Centro de Control, con la misma trazabilidad que un semáforo o un reclamo ciudadano."
      ctaLabel="Ver el centro de control"
      ctaTarget="control"
      mock={<TollMock />}
    />
  );
}

function TollMock() {
  return (
    <MockFrame title="peajes.ittel · corredor norte · gantry 04" rightLabel="ANPR + telepeaje">
      <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr]">
        {/* gantry scene */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#0a1426] sm:aspect-auto sm:min-h-[260px]">
          <svg viewBox="0 0 200 120" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <rect width="200" height="120" fill="#0a1426" />
            {/* sky glow */}
            <rect width="200" height="60" fill="#0e2547" />
            {/* road */}
            <rect x="0" y="60" width="200" height="60" fill="#0b1a36" />
            {/* lanes */}
            <line x1="0" y1="80" x2="200" y2="80" stroke="#1e3a5f" strokeWidth="0.6" strokeDasharray="5 5" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="#1e3a5f" strokeWidth="0.6" strokeDasharray="5 5" />
            {/* gantry */}
            <rect x="80" y="20" width="40" height="6" rx="1" fill="#334155" />
            <rect x="84" y="26" width="3" height="40" fill="#334155" />
            <rect x="113" y="26" width="3" height="40" fill="#334155" />
            {/* cameras on gantry */}
            <rect x="88" y="26" width="6" height="4" rx="1" fill="#22d3ee" />
            <rect x="100" y="26" width="6" height="4" rx="1" fill="#22d3ee" />
            <rect x="110" y="26" width="6" height="4" rx="1" fill="#22d3ee" />
            {/* lane lights */}
            <circle cx="92" cy="40" r="1.6" fill="#10b981" />
            <circle cx="103" cy="40" r="1.6" fill="#10b981" />
            <circle cx="113" cy="40" r="1.6" fill="#f59e0b" />
            {/* vehicle */}
            <rect x="86" y="86" width="20" height="12" rx="2" fill="#22d3ee" opacity="0.9" />
            <rect x="86" y="82" width="20" height="6" rx="2" fill="#22d3ee" opacity="0.7" />
            <rect x="89" y="98" width="4" height="3" fill="#0a1426" />
            <rect x="99" y="98" width="4" height="3" fill="#0a1426" />
            {/* read beam */}
            <line x1="100" y1="30" x2="96" y2="92" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.8" />
          </svg>
          <div className="absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            Gantry 04 · 3 manos · telepeaje
          </div>
          <div className="absolute bottom-2.5 left-2.5 rounded-md bg-ops/90 px-2 py-1 text-[10px] font-bold text-white">
            <CheckCircle2 className="inline size-3" /> Patente leída · AB123CD
          </div>
        </div>

        {/* stats */}
        <div className="flex flex-col gap-2.5">
          <div className="rounded-lg border border-ink-200 bg-white p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-600">
              <Gauge className="size-3.5 text-cyan-tech" /> Tránsito · hoy
            </p>
            <p className="nums mt-1 text-2xl font-bold text-ink-900">28.461</p>
            <p className="text-[10px] text-ink-600">vehículos · 4 corredores</p>
          </div>
          <div className="rounded-lg border border-ink-200 bg-white p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-600">
              <Activity className="size-3.5 text-ops" /> Lecturas válidas
            </p>
            <p className="nums mt-1 text-2xl font-bold text-ink-900">99,6%</p>
            <p className="text-[10px] text-ink-600">ANPR + telepeaje</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-cyan-tech/30 bg-cyan-tech/10 p-3">
            <Waypoints className="size-4 text-cyan-tech" />
            <p className="text-[11px] leading-snug text-ink-700">
              <strong className="text-ink-900">Integración ITS</strong> · peaje y centros de control.
            </p>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
