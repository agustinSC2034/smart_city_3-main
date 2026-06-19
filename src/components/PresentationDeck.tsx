import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CloudSun,
  Home,
  Recycle,
} from "lucide-react";
import { CityMap } from "@/components/ui/CityMap";
import { cn } from "@/lib/cn";
import {
  alertStack,
  closingPillars,
  crewRoute,
  deckRoutePath,
  deckSlides,
  environmentSignals,
  integrationSteps,
  mobilityRoutes,
  solutionIcons,
  type DeckSlide,
} from "@/data/presentation";

const slideMotion = {
  initial: { opacity: 0, y: 14, scale: 0.985 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.99 },
};

export function PresentationDeck() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = deckSlides.length;
  const slide = deckSlides[index];

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex(Math.min(Math.max(nextIndex, 0), total - 1));
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.isContentEditable || target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") {
        return;
      }

      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        setIndex((current) => Math.min(current + 1, total - 1));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => Math.max(current - 1, 0));
      }
      if (event.key === "Home") {
        event.preventDefault();
        setIndex(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        setIndex(total - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  const progress = useMemo(() => `${((index + 1) / total) * 100}%`, [index, total]);

  return (
    <main className="min-h-dvh overflow-hidden bg-brand-deep text-white">
      <div className="pointer-events-none fixed inset-0 grid-line-bg opacity-20" aria-hidden />
      <div className="pointer-events-none fixed -left-40 top-0 size-[520px] rounded-full bg-cyan-tech/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none fixed -right-40 bottom-0 size-[560px] rounded-full bg-ops/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-[1500px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <DeckTopBar current={index + 1} total={total} />

        <section className="flex flex-1 items-center justify-center py-4">
          <div
            className="w-full"
            style={{ maxWidth: "min(1280px, calc((100dvh - 10.5rem) * 16 / 9))" }}
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lift sm:aspect-video">
              <div className="absolute inset-x-0 top-0 h-1 bg-ink-100">
                <div className="h-full bg-cyan-tech transition-all duration-300" style={{ width: progress }} />
              </div>

              <AnimatePresence mode="wait">
                <motion.article
                  key={slide.id}
                  {...(reduce ? {} : slideMotion)}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 grid bg-white text-ink-900 lg:grid-cols-[0.92fr_1.08fr]"
                >
                  <SlideCopy slide={slide} current={index + 1} total={total} />
                  <SlideVisual slide={slide} />
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <DeckControls
          canPrevious={index > 0}
          canNext={index < total - 1}
          previous={previous}
          next={next}
          current={index + 1}
          total={total}
        />
      </div>
    </main>
  );
}

function DeckTopBar({ current, total }: { current: number; total: number }) {
  const homeHref = getHomeHref();

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
      <a
        href={homeHref}
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/14"
      >
        <Home className="size-4" aria-hidden />
        Volver a la web principal
      </a>
      <div className="flex items-center gap-3">
        <span className="hidden text-xs font-semibold uppercase tracking-wide text-ink-400 sm:inline">
          GRUPO ITTEL Smart City
        </span>
        <span className="rounded-lg border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold text-white">
          slide {current} / {total}
        </span>
      </div>
    </header>
  );
}

function DeckControls({
  canPrevious,
  canNext,
  previous,
  next,
  current,
  total,
}: {
  canPrevious: boolean;
  canNext: boolean;
  previous: () => void;
  next: () => void;
  current: number;
  total: number;
}) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 pt-4">
      <button
        type="button"
        onClick={previous}
        disabled={!canPrevious}
        className="inline-flex min-w-36 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/14 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="size-4" aria-hidden />
        Anterior
      </button>

      <div className="flex items-center gap-2">
        {deckSlides.map((slide, i) => (
          <span
            key={slide.id}
            className={cn(
              "h-1.5 rounded-full transition-all duration-200",
              i + 1 === current ? "w-8 bg-cyan-glow" : "w-2 bg-white/25"
            )}
            aria-label={`Slide ${i + 1} de ${total}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={next}
        disabled={!canNext}
        className="inline-flex min-w-36 items-center justify-center gap-2 rounded-xl bg-cyan-tech px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Siguiente
        <ChevronRight className="size-4" aria-hidden />
      </button>
    </footer>
  );
}

function SlideCopy({ slide, current, total }: { slide: DeckSlide; current: number; total: number }) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-brand-deep px-8 py-8 text-white sm:px-10 lg:px-12 lg:py-10">
      <div className="absolute inset-0 grid-line-bg opacity-20" aria-hidden />
      <div className="absolute -left-20 bottom-8 size-64 rounded-full bg-cyan-tech/15 blur-3xl" aria-hidden />

      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-glow">{slide.kicker}</p>
        <h1 className="mt-5 max-w-[11ch] text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl xl:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 xl:text-lg">{slide.body}</p>
      </div>

      <div className="relative">
        <ul className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {slide.points.map((point) => (
            <li key={point} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold text-white">
              <span className="size-2 rounded-full bg-ops" aria-hidden />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
          <p className="nums text-sm font-semibold text-ink-300">
            {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          {slide.metric && (
            <div className="text-right">
              <p className="nums text-3xl font-extrabold text-white">{slide.metric.value}</p>
              <p className="mt-1 max-w-44 text-xs font-medium uppercase tracking-wide text-ink-400">{slide.metric.label}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SlideVisual({ slide }: { slide: DeckSlide }) {
  return (
    <div className="relative hidden h-full overflow-hidden bg-ink-50 p-6 sm:block lg:p-8">
      <div className="absolute inset-0 grid-dot-bg opacity-45" aria-hidden />
      <div className="relative flex h-full items-center justify-center">
        {slide.visual === "hero" && <HeroMockup />}
        {slide.visual === "problem" && <ProblemMockup />}
        {slide.visual === "vision" && <VisionMockup />}
        {slide.visual === "platform" && <PlatformMockup />}
        {slide.visual === "solutions" && <SolutionsMockup />}
        {slide.visual === "mobility" && <MobilityMockup />}
        {slide.visual === "waste" && <WasteMockup />}
        {slide.visual === "crews" && <CrewsMockup />}
        {slide.visual === "incident" && <IncidentMockup />}
        {slide.visual === "environment" && <EnvironmentMockup />}
        {slide.visual === "integration" && <IntegrationMockup />}
        {slide.visual === "closing" && <ClosingMockup />}
      </div>
    </div>
  );
}

function BrowserFrame({ children, title = "IT-TEL Smart City" }: { children: ReactNode; title?: string }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-lift">
      <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-alert" />
          <span className="size-2.5 rounded-full bg-warn" />
          <span className="size-2.5 rounded-full bg-ops" />
        </div>
        <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-ink-600 shadow-soft">{title}</span>
        <span className="w-14" />
      </div>
      {children}
    </div>
  );
}

function HeroMockup() {
  return (
    <BrowserFrame title="Centro de control urbano">
      <div className="grid min-h-[430px] grid-cols-[1fr_240px] bg-brand-deep">
        <div className="relative">
          <CityMap className="absolute inset-0 size-full" variant="dark" showLabels />
          <div className="absolute left-4 top-4 rounded-lg bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
            Mapa operativo - tiempo real
          </div>
          <div className="absolute bottom-4 left-4 grid grid-cols-3 gap-2">
            {["8.412 activos", "96% online", "12 cuadrillas"].map((label) => (
              <span key={label} className="rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                {label}
              </span>
            ))}
          </div>
        </div>
        <aside className="border-l border-white/10 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-ink-500">Eventos</p>
          <AlertList />
        </aside>
      </div>
    </BrowserFrame>
  );
}

function ProblemMockup() {
  const columns = [
    ["Transito", "planilla", "reclamo"],
    ["Alumbrado", "mail", "orden manual"],
    ["Residuos", "GPS", "telefono"],
    ["Cuadrillas", "foto", "cierre tardio"],
  ];

  return (
    <div className="w-full">
      <div className="grid gap-4 md:grid-cols-4">
        {columns.map((column, i) => (
          <div key={column[0]} className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card">
            <span className="nums text-xs font-bold text-cyan-700">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-bold text-ink-900">{column[0]}</h3>
            <div className="mt-5 space-y-2">
              {column.slice(1).map((item) => (
                <p key={item} className="rounded-lg bg-ink-100 px-3 py-2 text-sm font-medium text-ink-600">{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-alert/20 bg-alert/5 p-5 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-alert">Sin plataforma comun</p>
        <p className="mt-2 text-xl font-extrabold text-ink-900">La ciudad ve partes, no el sistema completo.</p>
      </div>
    </div>
  );
}

function VisionMockup() {
  return (
    <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-ink-200 bg-brand-deep shadow-lift">
        <CityMap className="absolute inset-0 size-full" variant="dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/40 to-transparent" />
        {["Sensor", "Camara", "Reclamo", "GPS"].map((label, i) => (
          <span
            key={label}
            className="absolute rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-xs font-bold text-white backdrop-blur"
            style={{ left: `${16 + i * 17}%`, top: `${18 + (i % 2) * 42}%` }}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-3">
        {["Detectar", "Priorizar", "Asignar", "Medir"].map((label, i) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white p-4 shadow-soft">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand text-sm font-extrabold text-white">{i + 1}</span>
            <div>
              <p className="font-bold text-ink-900">{label}</p>
              <p className="text-sm text-ink-500">Flujo operativo trazable</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformMockup() {
  return (
    <BrowserFrame>
      <div className="grid min-h-[430px] grid-cols-[160px_1fr_220px] bg-ink-200">
        <aside className="bg-white p-3">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-500">Verticales</p>
          {["Movilidad", "Alumbrado", "Camaras", "Residuos", "Cuadrillas"].map((item, i) => (
            <p key={item} className={cn("mb-2 rounded-lg px-3 py-2 text-xs font-semibold", i === 0 ? "bg-brand text-white" : "bg-ink-50 text-ink-600")}>
              {item}
            </p>
          ))}
        </aside>
        <div className="relative bg-brand-deep">
          <CityMap className="absolute inset-0 size-full" variant="dark" showLabels />
          <span className="absolute left-4 top-4 rounded-lg bg-black/45 px-3 py-2 text-xs font-bold text-white backdrop-blur">Mapa unificado</span>
        </div>
        <aside className="bg-white p-3">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-500">Control</p>
          <AlertList />
        </aside>
      </div>
    </BrowserFrame>
  );
}

function SolutionsMockup() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      {solutionIcons.map(({ label, icon: Icon, tone }) => (
        <div key={label} className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
          <div className={cn("inline-flex size-12 items-center justify-center rounded-xl bg-brand", tone)}>
            <Icon className="size-6" />
          </div>
          <h3 className="mt-5 text-2xl font-extrabold text-ink-900">{label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            Estado, alertas, ordenes e indicadores conectados al mapa operativo.
          </p>
        </div>
      ))}
    </div>
  );
}

function MobilityMockup() {
  return (
    <div className="grid w-full gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-ink-200 bg-brand-deep shadow-lift">
        <CityMap className="absolute inset-0 size-full" variant="dark" />
        <svg className="absolute inset-0 size-full" viewBox="0 0 500 360" aria-hidden>
          <path d="M60 260 C150 180, 230 280, 330 150 S430 100, 462 58" fill="none" stroke="#22d3ee" strokeWidth="8" strokeLinecap="round" strokeDasharray="18 12" opacity="0.75" />
          <path d="M70 84 C150 110, 230 60, 310 96 S400 170, 450 140" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round" opacity="0.65" />
        </svg>
      </div>
      <div className="space-y-3">
        {mobilityRoutes.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-ink-200 bg-white p-4 shadow-soft">
            <Icon className="size-5 text-cyan-tech" />
            <p className="mt-3 text-lg font-extrabold text-ink-900">{label}</p>
            <p className="text-sm font-semibold text-ink-500">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WasteMockup() {
  return (
    <div className="grid w-full gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
        <Recycle className="size-10 text-ops" />
        <h3 className="mt-4 text-2xl font-extrabold text-ink-900">Contenedores por estado</h3>
        <div className="mt-6 space-y-4">
          {[92, 74, 48, 21].map((value, i) => (
            <div key={value}>
              <div className="mb-1 flex justify-between text-xs font-bold text-ink-500">
                <span>Zona {i + 1}</span>
                <span>{value}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-ink-100">
                <div className={cn("h-full rounded-full", value > 85 ? "bg-alert" : value > 65 ? "bg-warn" : "bg-ops")} style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-[390px] overflow-hidden rounded-2xl border border-ink-200 bg-brand-deep shadow-lift">
        <CityMap className="absolute inset-0 size-full" variant="dark" />
        <svg className="absolute inset-0 size-full" viewBox="0 0 500 360" aria-hidden>
          <path d="M62 285 C130 210, 200 260, 255 180 S356 118, 438 86" fill="none" stroke="#10b981" strokeWidth="7" strokeLinecap="round" strokeDasharray="16 10" />
        </svg>
        <span className="absolute bottom-4 left-4 rounded-lg bg-black/45 px-3 py-2 text-xs font-bold text-white backdrop-blur">Ruta sugerida - 7 paradas</span>
      </div>
    </div>
  );
}

function CrewsMockup() {
  return (
    <div className="w-full">
      <div className="grid gap-4 md:grid-cols-4">
        {crewRoute.map(({ label, icon: Icon }, i) => (
          <div key={label} className="relative rounded-2xl border border-ink-200 bg-white p-5 shadow-card">
            {i < crewRoute.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 hidden size-6 -translate-y-1/2 text-cyan-tech md:block" />}
            <Icon className="size-8 text-cyan-tech" />
            <p className="mt-5 text-lg font-extrabold text-ink-900">{label}</p>
            <p className="mt-1 text-sm text-ink-500">Paso {i + 1}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {["Cercania", "Prioridad", "SLA"].map((label, i) => (
          <div key={label} className="rounded-2xl border border-ink-200 bg-white p-4 shadow-soft">
            <p className="nums text-3xl font-extrabold text-brand">{i === 0 ? "1.8 km" : i === 1 ? "Alta" : "42 min"}</p>
            <p className="text-sm font-semibold text-ink-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IncidentMockup() {
  return (
    <div className="grid w-full gap-5 lg:grid-cols-[1fr_1fr]">
      <div className="relative min-h-[410px] overflow-hidden rounded-2xl border border-ink-200 bg-brand-deep shadow-lift">
        <CityMap className="absolute inset-0 size-full" variant="dark" />
        <div className="absolute left-[52%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-alert/40 bg-alert/90 px-4 py-3 text-sm font-extrabold text-white shadow-lift">
          Incidente
        </div>
      </div>
      <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
        <p className="text-xs font-bold uppercase tracking-wide text-ink-500">Flujo</p>
        <div className="mt-5 space-y-4">
          {["Alerta detectada", "Camara validada", "Orden creada", "Cuadrilla asignada", "Cierre auditado"].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              <span className={cn("inline-flex size-8 items-center justify-center rounded-full text-xs font-extrabold text-white", i < 3 ? "bg-cyan-tech" : "bg-ops")}>{i + 1}</span>
              <p className="font-semibold text-ink-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnvironmentMockup() {
  return (
    <div className="grid w-full gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
        <CloudSun className="size-10 text-cyan-tech" />
        <h3 className="mt-4 text-2xl font-extrabold text-ink-900">Senales ambientales</h3>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {environmentSignals.map((signal) => (
            <div key={signal.label} className="rounded-xl bg-ink-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-500">{signal.label}</p>
              <p className="nums mt-2 text-2xl font-extrabold text-brand">
                {signal.value} <span className="text-xs font-bold text-ink-500">{signal.suffix}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-[390px] overflow-hidden rounded-2xl border border-ink-200 bg-brand-deep shadow-lift">
        <CityMap className="absolute inset-0 size-full" variant="dark" />
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/45 p-4 text-white backdrop-blur">
          <p className="text-xs font-bold uppercase tracking-wide text-cyan-glow">Protocolo preventivo</p>
          <p className="mt-1 text-lg font-extrabold">Riesgo de anegamiento en zona baja</p>
        </div>
      </div>
    </div>
  );
}

function IntegrationMockup() {
  return (
    <div className="w-full rounded-2xl border border-ink-200 bg-white p-8 shadow-lift">
      <div className="grid gap-4 md:grid-cols-4">
        {integrationSteps.map(({ label, icon: Icon }, i) => (
          <div key={label} className="relative text-center">
            {i < integrationSteps.length - 1 && <ArrowRight className="absolute -right-5 top-8 hidden size-6 text-cyan-tech md:block" />}
            <span className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-brand text-white">
              <Icon className="size-7" />
            </span>
            <p className="mt-4 text-lg font-extrabold text-ink-900">{label}</p>
            <p className="mt-1 text-sm text-ink-500">Capa {i + 1}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-ink-50 p-5">
        <div className="grid gap-3 md:grid-cols-4">
          {["captura", "normalizacion", "accion", "tablero"].map((item) => (
            <span key={item} className="rounded-lg bg-white px-3 py-2 text-center text-sm font-bold text-ink-700 shadow-soft">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClosingMockup() {
  return (
    <div className="w-full">
      <div className="grid gap-4 md:grid-cols-4">
        {closingPillars.map(({ label, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-ink-200 bg-white p-5 text-center shadow-card">
            <span className="mx-auto inline-flex size-12 items-center justify-center rounded-xl bg-brand text-white">
              <Icon className="size-6" />
            </span>
            <p className="mt-4 text-lg font-extrabold text-ink-900">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-brand-deep p-8 text-white shadow-lift">
        <p className="text-sm font-bold uppercase tracking-wide text-cyan-glow">Proximos pasos</p>
        <p className="mt-3 text-4xl font-extrabold tracking-tight">Definir vertical inicial, alcance piloto e indicadores de exito.</p>
      </div>
    </div>
  );
}

function AlertList() {
  return (
    <div className="mt-3 space-y-3">
      {alertStack.map((alert) => (
        <div key={alert.title} className="rounded-xl border border-ink-200 bg-white p-3 shadow-soft">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "size-2 rounded-full",
                alert.tone === "ok" ? "bg-ops" : alert.tone === "warn" ? "bg-warn" : "bg-alert"
              )}
            />
            <p className="text-sm font-bold text-ink-900">{alert.title}</p>
          </div>
          <p className="mt-1 text-xs font-medium text-ink-500">{alert.zone}</p>
        </div>
      ))}
    </div>
  );
}

export function shouldRenderPresentation(pathname: string) {
  const normalized = pathname.replace(/\/$/, "");
  return normalized === deckRoutePath || normalized.endsWith(deckRoutePath);
}

function getHomeHref() {
  const pathname = window.location.pathname.replace(/\/$/, "");
  if (pathname === deckRoutePath) {
    return "/";
  }

  return `${pathname.slice(0, -deckRoutePath.length) || "/"}/`;
}
