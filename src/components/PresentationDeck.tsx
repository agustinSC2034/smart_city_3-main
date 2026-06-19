import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Home, ArrowRight } from "lucide-react";
import { CityMap } from "@/components/ui/CityMap";
import { cn } from "@/lib/cn";
import {
  deckSlides,
  solutionNodes,
  visionFlow,
  visionResult,
  wasteFlow,
  incidentFlow,
  integrationFlow,
  mobilityHighlights,
  type DeckSlide,
} from "@/data/presentation";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PresentationDeck() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = deckSlides.length;
  const slide = deckSlides[index];

  const goTo = useCallback(
    (n: number) => setIndex(Math.min(Math.max(n, 0), total - 1)),
    [total]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.isContentEditable || t?.tagName === "INPUT" || t?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); setIndex((c) => Math.min(c + 1, total - 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); setIndex((c) => Math.max(c - 1, 0)); }
      if (e.key === "Home") { e.preventDefault(); setIndex(0); }
      if (e.key === "End") { e.preventDefault(); setIndex(total - 1); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  const progress = useMemo(() => `${((index + 1) / total) * 100}%`, [index, total]);

  const slideMotion = reduce
    ? {}
    : { initial: { opacity: 0, scale: 0.99 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.01 } };

  return (
    <main className="fixed inset-0 overflow-hidden bg-brand-deep text-white">
      {/* Ambient backgrounds */}
      <div className="pointer-events-none fixed inset-0 grid-line-bg opacity-15" aria-hidden />
      <div className="pointer-events-none fixed -left-40 top-0 size-[520px] rounded-full bg-cyan-tech/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none fixed -right-40 bottom-0 size-[560px] rounded-full bg-ops/8 blur-3xl" aria-hidden />

      {/* Click zones for navigation */}
      <button
        className="absolute inset-y-0 left-0 z-20 w-[12%] cursor-default"
        onClick={previous}
        aria-label="Anterior"
        tabIndex={-1}
      />
      <button
        className="absolute inset-y-0 right-0 z-20 w-[12%] cursor-default"
        onClick={next}
        aria-label="Siguiente"
        tabIndex={-1}
      />

      {/* Top bar — discrete */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-3">
        <a
          href={getHomeHref()}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Home className="size-3.5" /> Web
        </a>
        <span className="text-xs font-semibold text-white/40">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </header>

      {/* Progress bar — top edge */}
      <div className="absolute inset-x-0 top-0 z-30 h-0.5 bg-white/10">
        <div className="h-full bg-cyan-glow transition-all duration-300" style={{ width: progress }} />
      </div>

      {/* Slide stage — full screen 16:9 */}
      <div className="relative z-10 flex h-dvh w-full items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            {...slideMotion}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <SlideRenderer slide={slide} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls — discrete */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-center gap-4 px-6 py-4">
        <button
          type="button"
          onClick={previous}
          disabled={index === 0}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
        >
          <ChevronLeft className="size-4" /> Anterior
        </button>
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {deckSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-200",
                i === index ? "w-6 bg-cyan-glow" : "w-1.5 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-tech px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-cyan-700 disabled:opacity-30"
        >
          Siguiente <ChevronRight className="size-4" />
        </button>
      </footer>
    </main>
  );
}

/* ============================================================
   Slide renderer — dispatches by layout type
   ============================================================ */
function SlideRenderer({ slide }: { slide: DeckSlide }) {
  switch (slide.layout) {
    case "cover":
      return <CoverSlide slide={slide} />;
    case "statement":
      return <StatementSlide slide={slide} />;
    case "diagram":
      return <DiagramSlide slide={slide} />;
    case "dashboard":
      return <DashboardSlide slide={slide} />;
    case "split":
      return <SplitSlide slide={slide} />;
    case "flow":
      return <FlowSlide slide={slide} />;
    case "closing":
      return <ClosingSlide slide={slide} />;
    default:
      return null;
  }
}

/* ============================================================
   Background helper — image with gradient fallback
   ============================================================ */
function SlideBackground({ slide, className }: { slide: DeckSlide; className?: string }) {
  if (slide.bgImage) {
    // Try to load image; if it fails, the gradient fallback shows
    return (
      <div className={cn("absolute inset-0", className)}>
        <img
          src={slide.bgImage}
          alt=""
          aria-hidden
          className="size-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-brand-deep/30" />
      </div>
    );
  }
  if (slide.bgGradient) {
    return (
      <div className={cn("absolute inset-0", className)}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-dark to-brand-deep" />
        <div className="absolute inset-0 grid-line-bg opacity-20" />
        <div className="absolute -right-20 top-10 size-[400px] rounded-full bg-cyan-tech/12 blur-3xl" />
        <div className="absolute -left-20 bottom-0 size-[400px] rounded-full bg-ops/8 blur-3xl" />
      </div>
    );
  }
  return null;
}

/* ============================================================
   1) COVER — full-screen, background image, big title
   ============================================================ */
function CoverSlide({ slide }: { slide: DeckSlide }) {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
      <SlideBackground slide={slide} />
      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-glow">{slide.kicker}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200 sm:text-xl">
            {slide.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   2) STATEMENT — big text, minimal, dark or with image
   ============================================================ */
function StatementSlide({ slide }: { slide: DeckSlide }) {
  return (
    <div className="relative flex h-dvh w-full items-center overflow-hidden">
      <SlideBackground slide={slide} />
      <div className="relative z-10 mx-auto max-w-4xl px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-glow">{slide.kicker}</p>
        <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200 sm:text-xl">
            {slide.subtitle}
          </p>
        )}
        {slide.points && (
          <div className="mt-8 flex flex-wrap gap-3">
            {slide.points.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-ink-200"
              >
                <span className="size-1.5 rounded-full bg-alert" /> {p}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   3) DIAGRAM — central diagram with nodes
   ============================================================ */
function DiagramSlide({ slide }: { slide: DeckSlide }) {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-brand-deep">
      <div className="absolute inset-0 grid-line-bg opacity-15" aria-hidden />
      <div className="absolute -left-20 top-10 size-[400px] rounded-full bg-cyan-tech/10 blur-3xl" aria-hidden />
      <div className="relative z-10 w-full max-w-5xl px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-glow">{slide.kicker}</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {slide.subtitle}
            </p>
          )}
        </div>

        {/* Diagram content per slide */}
        <div className="mt-10">
          {slide.id === "vision" && <VisionDiagram />}
          {slide.id === "soluciones" && <SolutionsDiagram />}
          {slide.id === "integracion" && <IntegrationDiagram />}
        </div>
      </div>
    </div>
  );
}

function VisionDiagram() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Sources */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {visionFlow.map(({ label, icon: Icon }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
          >
            <Icon className="size-5 text-cyan-glow" /> {label}
          </span>
        ))}
      </div>
      {/* Arrow down */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-px bg-gradient-to-b from-cyan-glow to-ops" />
        <span className="rounded-full bg-ops/20 px-4 py-2 text-sm font-bold text-ops">Operación coordinada</span>
      </div>
      {/* Results */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {visionResult.map(({ label, icon: Icon }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-xl border border-ops/30 bg-ops/10 px-5 py-3 text-base font-bold text-white"
          >
            <Icon className="size-5 text-ops" /> {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function SolutionsDiagram() {
  const radius = 180;
  return (
    <div className="relative mx-auto flex size-[400px] items-center justify-center">
      {/* Central core */}
      <div className="absolute z-10 flex size-28 items-center justify-center rounded-full bg-brand text-center ring-4 ring-cyan-tech/30">
        <span className="text-sm font-bold text-white">Plataforma<br />Smart City</span>
      </div>
      {/* Orbiting nodes */}
      {solutionNodes.map(({ label, icon: Icon, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <div
            key={label}
            className="absolute flex flex-col items-center gap-2"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-cyan-glow shadow-lg">
              <Icon className="size-6" />
            </span>
            <span className="text-xs font-semibold text-white/80">{label}</span>
            {/* Connector line */}
            <svg
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: "50%", top: "50%", width: radius, height: 2, transform: `translate(${x > 0 ? -radius : 0}px, 0) rotate(${angle}deg)`, transformOrigin: x > 0 ? "left center" : "right center" }}
            >
              <line x1="0" y1="1" x2={radius} y2="1" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

function IntegrationDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {integrationFlow.map(({ label, icon: Icon }, i) => (
          <div key={label} className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
              <Icon className="size-5 text-cyan-glow" /> {label}
            </span>
            {i < integrationFlow.length - 1 && <ArrowRight className="size-5 text-cyan-glow/60" />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   4) DASHBOARD — platform mockup as protagonist (only slide)
   ============================================================ */
function DashboardSlide({ slide }: { slide: DeckSlide }) {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-brand-deep">
      <div className="absolute inset-0 grid-line-bg opacity-15" aria-hidden />
      <div className="relative z-10 w-full max-w-5xl px-8">
        {/* Minimal heading */}
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-glow">{slide.kicker}</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {slide.title}
          </h2>
          {slide.demo && (
            <span className="mt-2 inline-block text-[10px] font-medium text-ink-400">Escenario demostrativo</span>
          )}
        </div>

        {/* Platform mockup — 75% width, no browser frame */}
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-brand-dark shadow-lift">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-ops animate-pulse-soft" />
              <span className="text-xs font-semibold text-white">IT-TEL Smart City · CABA</span>
            </div>
            <span className="text-[10px] text-ink-400">en línea · 09:47</span>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-px border-b border-white/10 bg-white/5">
            {[
              { l: "Activos", v: "8.412" },
              { l: "Operativos", v: "96%" },
              { l: "Cuadrillas", v: "12" },
              { l: "SLA", v: "94,2%" },
            ].map((k) => (
              <div key={k.l} className="bg-brand-dark px-3 py-2.5">
                <p className="text-[9px] font-medium uppercase tracking-wide text-ink-400">{k.l}</p>
                <p className="nums mt-0.5 text-base font-bold text-white">{k.v}</p>
              </div>
            ))}
          </div>

          {/* Main grid */}
          <div className="grid gap-px bg-white/5 lg:grid-cols-[140px_1fr_200px]">
            {/* Sidebar */}
            <aside className="bg-brand-dark p-2.5">
              {["Movilidad", "Alumbrado", "Cámaras", "Residuos", "Cuadrillas", "Ambiente"].map((v, i) => (
                <p
                  key={v}
                  className={cn(
                    "mb-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-medium",
                    i === 0 ? "bg-cyan-tech/20 text-cyan-glow" : "text-ink-400"
                  )}
                >
                  {v}
                </p>
              ))}
            </aside>

            {/* Map */}
            <div className="relative min-h-[280px] bg-brand-deep">
              <CityMap className="absolute inset-0 size-full" variant="dark" />
              <div className="absolute left-2.5 top-2.5 rounded-md bg-black/45 px-2 py-1 text-[9px] font-semibold text-white backdrop-blur">
                Mapa operativo
              </div>
            </div>

            {/* Right panel */}
            <aside className="bg-brand-dark p-2.5">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-ink-400">Eventos</p>
              {[
                { t: "Luminaria LUM-478", tone: "warn" },
                { t: "Contenedor 92%", tone: "alert" },
              ].map((e) => (
                <div key={e.t} className="mb-1.5 rounded-md border border-white/10 bg-white/5 p-2">
                  <div className="flex items-center gap-1.5">
                    <span className={cn("size-1.5 rounded-full", e.tone === "warn" ? "bg-warn" : "bg-alert")} />
                    <p className="text-[10px] font-semibold text-white">{e.t}</p>
                  </div>
                </div>
              ))}
              <div className="mt-2 rounded-md border border-cyan-tech/30 bg-cyan-tech/5 p-2">
                <p className="text-[9px] font-semibold text-cyan-glow">Activo</p>
                <p className="text-[11px] font-bold text-white">LUM-478</p>
                <p className="text-[9px] text-ink-400">OT-2207 · cuadrilla en camino</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   5) SPLIT — visual + text lateral
   ============================================================ */
function SplitSlide({ slide }: { slide: DeckSlide }) {
  return (
    <div className="relative flex h-dvh w-full items-center overflow-hidden">
      <SlideBackground slide={slide} />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-8 lg:flex-row lg:items-center lg:gap-16">
        {/* Text */}
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-glow">{slide.kicker}</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-ink-200 sm:text-xl">{slide.subtitle}</p>
          )}
          {slide.id === "movilidad" && (
            <div className="mt-6 flex flex-wrap gap-3">
              {mobilityHighlights.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white"
                >
                  <Icon className="size-4 text-cyan-glow" /> {label}
                </span>
              ))}
            </div>
          )}
          {slide.id === "auditoria" && (
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { l: "Ubicación", v: "Av. Corrientes 1200" },
                { l: "Cuadrilla", v: "M-7 · en sitio" },
                { l: "SLA", v: "42 min · 18 restantes" },
                { l: "Evidencia", v: "Foto antes / después" },
              ].map((item) => (
                <div key={item.l} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-400">{item.l}</p>
                  <p className="mt-1 text-sm font-bold text-white">{item.v}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visual */}
        <div className="flex-1">
          {slide.id === "movilidad" && <MobilityVisual />}
          {slide.id === "auditoria" && <AuditVisual />}
        </div>
      </div>
    </div>
  );
}

function MobilityVisual() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-brand-dark shadow-lift">
      <CityMap className="absolute inset-0 size-full" variant="dark" />
      <svg className="absolute inset-0 size-full" viewBox="0 0 500 360" aria-hidden>
        <path d="M60 260 C150 180, 230 280, 330 150 S430 100, 462 58" fill="none" stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" strokeDasharray="14 10" opacity="0.7" />
        <path d="M70 84 C150 110, 230 60, 310 96 S400 170, 450 140" fill="none" stroke="#10b981" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      </svg>
      <div className="absolute left-3 top-3 rounded-md bg-black/50 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur">
        Corredor · 3 cruces
      </div>
      <div className="absolute bottom-3 left-3 rounded-md bg-ops/80 px-2.5 py-1.5 text-[10px] font-bold text-white">
        Bus 152 · prioridad activada
      </div>
    </div>
  );
}

function AuditVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lift">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-glow">Orden de trabajo</p>
      <p className="mt-2 text-2xl font-bold text-white">OT-2207 · Bache</p>
      <p className="mt-1 text-sm text-ink-300">Av. Corrientes 1200 · Comuna 1</p>

      {/* Evidence before/after */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_30%,#475569,transparent_50%)]">
          <span className="absolute left-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-ink-700">Antes</span>
          <span className="absolute bottom-2 right-2 rounded bg-alert/80 px-1.5 py-0.5 text-[9px] font-bold text-white">09:12</span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-ops/30 bg-[radial-gradient(circle_at_50%_50%,#e2e8f0,transparent_60%)]">
          <span className="absolute left-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-ink-700">Después</span>
          <span className="absolute bottom-2 right-2 rounded bg-ops/80 px-1.5 py-0.5 text-[9px] font-bold text-white">09:45 ✓</span>
        </div>
      </div>

      {/* Validation */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-ops/30 bg-ops/10 p-3">
        <span className="text-sm font-semibold text-white">Validación de supervisor</span>
        <span className="rounded-full bg-ops px-3 py-1 text-xs font-bold text-white">Aprobado</span>
      </div>
    </div>
  );
}

/* ============================================================
   6) FLOW — horizontal/vertical process flow
   ============================================================ */
function FlowSlide({ slide }: { slide: DeckSlide }) {
  const flow = slide.id === "residuos" ? wasteFlow : incidentFlow;
  return (
    <div className="relative flex h-dvh w-full items-center overflow-hidden">
      <SlideBackground slide={slide} />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-glow">{slide.kicker}</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {slide.subtitle}
            </p>
          )}
        </div>

        {/* Flow steps */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {flow.map(({ label, icon: Icon }, i) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-cyan-glow shadow-lg">
                  <Icon className="size-6" />
                </span>
                <span className="text-xs font-semibold text-white/80">{label}</span>
              </div>
              {i < flow.length - 1 && <ArrowRight className="size-5 text-cyan-glow/50" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   7) CLOSING — full-screen dark, CTA
   ============================================================ */
function ClosingSlide({ slide }: { slide: DeckSlide }) {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
      <SlideBackground slide={slide} />
      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-glow">{slide.kicker}</p>
        <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="mt-6 text-xl leading-relaxed text-ink-200 sm:text-2xl">
            {slide.subtitle}
          </p>
        )}
        <a
          href="mailto:administracion@it-tel.com.ar"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-cyan-tech px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-cyan-700"
        >
          Diseñemos un piloto
          <ArrowRight className="size-5" />
        </a>
        <p className="mt-4 text-sm text-ink-400">administracion@it-tel.com.ar · 0810-345-ITTEL</p>
      </div>
    </div>
  );
}

/* ============================================================
   Utils
   ============================================================ */
export function shouldRenderPresentation(pathname: string) {
  const normalized = pathname.replace(/\/$/, "");
  return normalized === "/presentacion" || normalized.endsWith("/presentacion");
}

function getHomeHref() {
  const pathname = window.location.pathname.replace(/\/$/, "");
  if (pathname === "/presentacion") return "/";
  return `${pathname.slice(0, -"/presentacion".length) || "/"}/`;
}
