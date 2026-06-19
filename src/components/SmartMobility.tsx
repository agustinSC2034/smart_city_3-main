import { BusFront, Gauge } from "lucide-react";
import { FeatureSection, MockFrame } from "@/components/ui/Feature";

export function SmartMobility() {
  return (
    <FeatureSection
      id="movilidad"
      dark
      eyebrow="Movilidad · ITS"
      title="Movilidad y semáforos inteligentes"
      description="Medimos el tránsito, adaptamos los cruces y coordinamos corredores para mejorar la circulación, priorizar el transporte público y responder ante incidentes."
      highlights={[
        "Conteo vehicular, congestión, velocidades y tiempos de viaje",
        "Regulación semafórica adaptativa y onda verde por corredor",
        "Prioridad para ambulancias y transporte público",
        "Monitoreo de controladores, fallas y rutas alternativas",
        "Estacionamiento y zonas de carga como capacidad complementaria",
      ]}
      platformNote="El cruce reporta su estado y comparte datos con tránsito, transporte público e incidentes."
      ctaLabel="Ver gestión de incidentes"
      ctaTarget="incidentes"
      mock={<MobilityMock />}
    />
  );
}

function MobilityMock() {
  return (
    <MockFrame title="movilidad.ittel · corredor Callao · 3 cruces" rightLabel="adaptativo · en línea">
      <div className="grid gap-3 sm:grid-cols-[1.6fr_1fr]">
        {/* Corridor map with 3 intersections */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-brand-deep sm:aspect-auto sm:min-h-[300px]">
          <svg viewBox="0 0 200 130" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <rect width="200" height="130" fill="#081a33" />
            {/* grid */}
            <defs>
              <pattern id="mgrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0V10" fill="none" stroke="#16356a" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="200" height="130" fill="url(#mgrid)" opacity="0.5" />
            {/* corridor road */}
            <rect x="88" y="0" width="24" height="130" fill="#16315a" />
            <line x1="100" y1="0" x2="100" y2="130" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />

            {/* cross streets */}
            <rect x="0" y="24" width="200" height="18" fill="#0e2347" opacity="0.7" />
            <rect x="0" y="60" width="200" height="18" fill="#0e2347" opacity="0.7" />
            <rect x="0" y="98" width="200" height="18" fill="#0e2347" opacity="0.7" />

            {/* intersection 1 (top) — green wave */}
            <circle cx="100" cy="33" r="3.5" fill="#10b981" opacity="0.3" className="animate-pulse-soft" />
            <circle cx="100" cy="33" r="2" fill="#10b981" />
            {/* intersection 2 (mid) — congestion */}
            <circle cx="100" cy="69" r="3.5" fill="#ef4444" opacity="0.3" className="animate-pulse-soft" />
            <circle cx="100" cy="69" r="2" fill="#ef4444" />
            {/* intersection 3 (bottom) — ok */}
            <circle cx="100" cy="107" r="3.5" fill="#10b981" opacity="0.3" />
            <circle cx="100" cy="107" r="2" fill="#10b981" />

            {/* green wave path */}
            <path d="M100 8 L100 30 L100 64 L100 104 L100 126" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 4" opacity="0.6" />

            {/* vehicles on corridor */}
            <rect x="94" y="10" width="12" height="18" rx="2" fill="#22d3ee" opacity="0.85" />
            <rect x="94" y="44" width="12" height="18" rx="2" fill="#94a3b8" opacity="0.5" />
            <rect x="94" y="76" width="12" height="18" rx="2" fill="#94a3b8" opacity="0.5" />

            {/* bus approaching with priority */}
            <rect x="92" y="116" width="16" height="22" rx="2" fill="#10b981" />
            <circle cx="96" cy="136" r="2" fill="#081a33" />
            <circle cx="104" cy="136" r="2" fill="#081a33" />
            {/* priority indicator */}
            <path d="M108 127 L120 127 L116 122 M120 127 L116 132" fill="none" stroke="#10b981" strokeWidth="0.8" />

            {/* cross traffic */}
            <rect x="40" y="28" width="20" height="10" rx="2" fill="#94a3b8" opacity="0.4" />
            <rect x="150" y="64" width="20" height="10" rx="2" fill="#94a3b8" opacity="0.4" />

            {/* labels for intersections */}
            <text x="78" y="36" fontSize="2.5" fill="#cbd5e1" fontFamily="Inter">Cruce 1</text>
            <text x="78" y="72" fontSize="2.5" fill="#fca5a5" fontFamily="Inter">Cruce 2</text>
            <text x="78" y="110" fontSize="2.5" fill="#cbd5e1" fontFamily="Inter">Cruce 3</text>
          </svg>

          {/* overlays */}
          <div className="absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            Corredor Callao · 3 cruces
          </div>
          <div className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            <BusFront className="size-3 text-ops" /> Bus 152 · prioridad activada
          </div>
          <div className="absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-md bg-alert/80 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            <span className="size-1.5 rounded-full bg-white animate-pulse-soft" /> Congestión cruce 2
          </div>
        </div>

        {/* Right column: stats + public transport */}
        <div className="flex flex-col gap-2.5">
          {/* corridor stats */}
          <div className="rounded-lg border border-ink-200 bg-white p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-600">
              <Gauge className="size-3.5 text-cyan-tech" /> Tiempo de viaje
            </p>
            <p className="nums mt-1 text-2xl font-bold text-ink-900">11 min</p>
            <p className="text-[10px] text-ink-600">corredor completo · -18% vs plan fijo</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-ink-200 bg-white p-2.5">
              <p className="text-[10px] font-medium uppercase tracking-wide text-ink-600">Vehículos/h</p>
              <p className="nums mt-0.5 text-lg font-bold text-ink-900">2.840</p>
            </div>
            <div className="rounded-lg border border-ink-200 bg-white p-2.5">
              <p className="text-[10px] font-medium uppercase tracking-wide text-ink-600">Demora media</p>
              <p className="nums mt-0.5 text-lg font-bold text-ink-900">-18%</p>
            </div>
          </div>

          {/* Public transport block */}
          <div className="rounded-lg border border-ops/30 bg-ops/5 p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ops-dark">
              <BusFront className="size-3.5" /> Transporte público conectado
            </p>
            <div className="mt-2 space-y-1.5 text-[11px] text-ink-700">
              <p className="flex items-center justify-between">
                <span>Unidades GPS</span>
                <strong className="nums text-ink-900">14 activas</strong>
              </p>
              <p className="flex items-center justify-between">
                <span>Frecuencia programada</span>
                <strong className="nums text-ink-900">cada 8 min</strong>
              </p>
              <p className="flex items-center justify-between">
                <span>Demoradas</span>
                <strong className="nums text-amber-700">2 unidades</strong>
              </p>
              <p className="flex items-center justify-between">
                <span>Prioridad semafórica</span>
                <strong className="nums text-ops-dark">activa · 3 cruces</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
