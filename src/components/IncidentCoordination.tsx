import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, Camera, Clock, MapPin, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CityMap } from "@/components/ui/CityMap";
import { statusStyles } from "@/components/ui/Card";
import { scenarios, processStages, type Scenario } from "@/data/incidents";
import { EASE, staggerContainer, itemFadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function IncidentCoordination() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const active = scenarios.find((s) => s.id === activeId) ?? scenarios[0];

  return (
    <section
      id="incidentes"
      className="relative scroll-mt-24 overflow-hidden bg-brand-deep py-20 text-ink-100 sm:py-28"
    >
      {/* ambient gradients */}
      <div className="pointer-events-none absolute inset-0 grid-line-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-10 size-[440px] rounded-full bg-cyan-tech/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-[460px] rounded-full bg-ops/8 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative">
        {/* ===== Header ===== */}
        <Reveal direction="up">
          <div className="max-w-3xl">
            <p className="eyebrow text-cyan-glow">
              <span className="size-1.5 rounded-full bg-current" aria-hidden />
              Respuesta urbana coordinada
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              De la alerta a la acción
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              Cada incidente reúne datos, cámaras, activos, responsables y tareas en un
              mismo flujo operativo. La ciudad sabe qué pasó, quién debe actuar y cuánto
              tarda en resolverlo.
            </p>
          </div>
        </Reveal>

        {/* ===== Process line ===== */}
        <Reveal delay={0.1} className="mt-12">
          <ProcessLine />
        </Reveal>

        {/* ===== Scenario selector ===== */}
        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-ink-400">
              Escenario
            </span>
            {scenarios.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "border-cyan-tech/40 bg-cyan-tech/15 text-cyan-glow"
                      : "border-white/10 bg-white/5 text-ink-300 hover:bg-white/10 hover:text-white"
                  )}
                  aria-pressed={isActive}
                >
                  {s.tabLabel}
                </button>
              );
            })}
            <span className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-ink-400">
              Escenario demostrativo
            </span>
          </div>
        </Reveal>

        {/* ===== Main scene ===== */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <Scene scenario={active} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== Closing line ===== */}
        <Reveal delay={0.1} className="mt-14">
          <p className="mx-auto max-w-2xl text-center text-lg font-medium leading-relaxed text-white sm:text-xl">
            Un mismo evento, una respuesta coordinada,{" "}
            <span className="text-cyan-glow">una trazabilidad completa.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Process line: Detectado → Validado → Plan → Equipos → Resuelto → Auditado
   ============================================================ */
function ProcessLine() {
  return (
    <div className="relative">
      {/* horizontal connector (desktop) */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px lg:block"
        style={{ background: "linear-gradient(to right, transparent, rgba(34,211,238,0.35), rgba(16,185,129,0.3), transparent)" }}
        aria-hidden
      />
      <motion.ol
        className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer(0.1)}
      >
        {processStages.map((stage, i) => {
          const s = statusStyles[stage.status];
          const isLast = i === processStages.length - 1;
          return (
            <motion.li
              key={stage.id}
              variants={itemFadeUp}
              transition={{ duration: 0.5, ease: EASE }}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className={cn(
                  "relative inline-flex size-9 items-center justify-center rounded-full ring-1",
                  "bg-brand-dark",
                  stage.status === "ok"
                    ? "ring-ops/50"
                    : stage.status === "info"
                      ? "ring-cyan-tech/50"
                      : "ring-amber-500/50"
                )}
              >
                <span className={cn("size-2.5 rounded-full", s.dot)} />
              </span>
              <span className="mt-2 text-[13px] font-semibold text-white">{stage.label}</span>
              {!isLast && (
                <ArrowRight
                  className="absolute -right-2 top-3 hidden size-4 text-ink-500 lg:block"
                  aria-hidden
                />
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  );
}

/* ============================================================
   Scene: mapa + flujo + timeline + métricas sueltas
   ============================================================ */
function Scene({ scenario }: { scenario: Scenario }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      {/* LEFT: map + scenario header integrated */}
      <div className="flex flex-col gap-5">
        {/* scenario title integrated, airy */}
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">{scenario.title}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-300">
              <MapPin className="size-4 text-cyan-glow" /> {scenario.location}
            </p>
          </div>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
              statusStyles[scenario.statusTone].chip
            )}
          >
            <span className={cn("size-1.5 rounded-full", statusStyles[scenario.statusTone].dot)} />
            {scenario.status}
          </span>
        </div>

        {/* map — protagonista visual */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-dark shadow-lift">
          <CityMap
            nodes={scenario.mapNodes}
            roads={scenario.mapRoads}
            variant="dark"
            className="aspect-[4/3] w-full sm:aspect-[16/10]"
          />
          {/* hot spot label */}
          <HotSpotLabel scenario={scenario} />
          {/* camera chip floating */}
          <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/45 px-2.5 py-1.5 text-[11px] text-white backdrop-blur">
            <Camera className="size-3.5 text-cyan-glow" />
            <span className="font-semibold">{scenario.cameraLabel}</span>
            <span className="text-ink-400">· {scenario.cameraHint}</span>
          </div>
        </div>

        {/* metrics sueltos — sin cards, divisores sutiles */}
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {scenario.metrics.map((m) => (
            <div key={m.label} className="px-3 first:pl-0">
              <p className="text-[11px] font-medium uppercase tracking-wide text-ink-400">
                {m.label}
              </p>
              <p
                className={cn(
                  "nums mt-1 text-2xl font-bold",
                  m.tone ? statusStyles[m.tone].text : "text-white"
                )}
              >
                {m.value}
              </p>
              {m.hint && <p className="text-[10px] text-ink-500">{m.hint}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: flow + areas + actions */}
      <div className="flex flex-col gap-6">
        {/* timeline / flow */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-400">
            Flujo del incidente
          </p>
          <Timeline items={scenario.timeline} />
        </div>

        {/* areas + actions in two airy columns, no nested cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* areas */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
              Áreas involucradas
            </p>
            <ul className="flex flex-wrap gap-2">
              {scenario.areas.map((a) => (
                <li
                  key={a.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] text-ink-200"
                >
                  <span className="size-1.5 rounded-full bg-cyan-glow" />
                  {a.label}
                </li>
              ))}
            </ul>
          </div>

          {/* actions */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
              Acciones generadas
            </p>
            <ul className="flex flex-col gap-2.5">
              {scenario.actions.map((act) => {
                const s = statusStyles[act.status];
                return (
                  <li key={act.label} className="flex items-start gap-2.5 text-sm text-ink-200">
                    <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", s.dot)} />
                    {act.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* priority + SLA footer line — integrado, sin card */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm">
          <span className="flex items-center gap-2 text-ink-300">
            <AlertTriangle className="size-4 text-amber-400" />
            Prioridad <strong className="text-white">{scenario.priority}</strong>
          </span>
          <span className="flex items-center gap-2 text-ink-300">
            <Clock className="size-4 text-cyan-glow" />
            Transcurrido <strong className="nums text-white">{scenario.elapsed}</strong>
          </span>
          <span className="flex items-center gap-2 text-ink-300">
            <CheckCircle2 className="size-4 text-ops" />
            SLA <strong className="nums text-white">{scenario.slaRemaining}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Timeline: línea vertical con estados conectados
   ============================================================ */
function Timeline({
  items,
}: {
  items: Scenario["timeline"];
}) {
  return (
    <motion.ol
      className="relative flex flex-col"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      variants={staggerContainer(0.07)}
    >
      {items.map((it, i) => {
        const s = statusStyles[it.status];
        const isLast = i === items.length - 1;
        const isPending = it.time === "—";
        return (
          <motion.li
            key={i}
            variants={itemFadeUp}
            transition={{ duration: 0.45, ease: EASE }}
            className="relative flex gap-3 pb-4 last:pb-0"
          >
            {/* vertical connector */}
            {!isLast && (
              <span
                className={cn(
                  "absolute left-[9px] top-5 h-full w-px",
                  isPending ? "bg-white/10" : "bg-white/15"
                )}
                aria-hidden
              />
            )}
            {/* dot */}
            <span
              className={cn(
                "relative z-10 mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full ring-2 ring-brand-deep",
                isPending ? "bg-brand-dark" : s.dot
              )}
            >
              {isPending && <span className="size-1.5 rounded-full bg-ink-500" />}
            </span>
            {/* content */}
            <div className="flex flex-1 items-baseline justify-between gap-3">
              <span
                className={cn(
                  "text-[13px] leading-snug",
                  isPending ? "text-ink-500" : "text-ink-100"
                )}
              >
                {it.label}
              </span>
              <span
                className={cn(
                  "nums shrink-0 text-[11px] font-medium",
                  isPending ? "text-ink-600" : "text-ink-400"
                )}
              >
                {it.time}
              </span>
            </div>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}

/* ============================================================
   Hot spot label on the map
   ============================================================ */
function HotSpotLabel({ scenario }: { scenario: Scenario }) {
  const hot = scenario.mapNodes.find((n) => n.id === scenario.hotSpotId);
  if (!hot) return null;
  // position the label near the hotspot, clamped
  const left = Math.min(Math.max(hot.x, 18), 82);
  const top = Math.min(Math.max(hot.y + 8, 12), 86);
  return (
    <div
      className="pointer-events-none absolute z-10 -translate-x-1/2 rounded-lg border border-white/10 bg-black/55 px-2.5 py-1.5 text-center backdrop-blur"
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-glow">
        Incidente
      </p>
      <p className="text-[11px] font-bold text-white">{hot.label}</p>
    </div>
  );
}
