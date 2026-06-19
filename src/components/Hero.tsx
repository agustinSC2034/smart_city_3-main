import { ArrowRight, Radio, Activity, Users, Cloud, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { CityMap } from "@/components/ui/CityMap";
import { Sparkline } from "@/components/ui/Charts";
import { heroIndicators } from "@/data/solutions";
import { alerts } from "@/data/operations";
import { statusStyles } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export function Hero() {
  const reduce = useReducedMotion();

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-28 sm:pt-32"
    >
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 grid-dot-bg opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-cyan-tech/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-40 size-[460px] rounded-full bg-brand/5 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-10 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-28">
        {/* LEFT */}
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-5"
          >
            <span className="size-1.5 rounded-full bg-ops animate-pulse-soft" />
            Smart City Platform · GRUPO ITTEL
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-extrabold leading-[1.07] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]"
          >
            Infraestructura urbana inteligente para ciudades que necesitan{" "}
            <span className="text-brand">operar en tiempo real</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg"
          >
            Integramos sensores, cámaras, reclamos, cuadrillas, activos urbanos y datos
            en una plataforma Smart City para monitorear, auditar y optimizar servicios
            públicos.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <button onClick={() => go("soluciones")} className="btn-primary">
              Ver soluciones
              <ArrowRight className="size-4" aria-hidden />
            </button>
            <button onClick={() => go("control")} className="btn-secondary">
              Explorar centro de control
            </button>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
          >
            {heroIndicators.map((h) => {
              const s = statusStyles[h.status];
              return (
                <li
                  key={h.label}
                  className="flex items-center gap-2 rounded-xl border border-ink-200 bg-white/70 px-3 py-2.5 text-xs font-medium text-ink-700 shadow-soft backdrop-blur"
                >
                  <span className={cn("dot", s.dot)} />
                  {h.label}
                </li>
              );
            })}
          </motion.ul>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-600"
          >
            <span className="font-semibold uppercase tracking-wide text-ink-600">
              Pensada para
            </span>
            <span>Municipios</span>
            <span className="text-ink-300">·</span>
            <span>Concesionarias</span>
            <span className="text-ink-300">·</span>
            <span>Parques industriales</span>
            <span className="text-ink-300">·</span>
            <span>Barrios cerrados</span>
            <span className="text-ink-300">·</span>
            <span>Servicios públicos</span>
          </motion.div>
        </div>

        {/* RIGHT - dashboard mock */}
        <DashboardMock />
      </div>
    </section>
  );
}

function DashboardMock() {
  const reduce = useReducedMotion();
  const topAlerts = alerts.slice(0, 3);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-cyan-tech/15 via-brand/5 to-transparent blur-2xl" aria-hidden />
      <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-lift ring-1 ring-ink-200/60">
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50/60 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-alert/70" />
            <span className="size-2.5 rounded-full bg-warn/70" />
            <span className="size-2.5 rounded-full bg-ops/70" />
            <span className="ml-2 text-xs font-semibold text-ink-600">
              control.ittel.smartcity · panel operativo
            </span>
          </div>
          <span className="hidden text-[11px] font-medium text-ink-600 sm:inline">
            en línea · 09:47
          </span>
        </div>

        {/* body */}
        <div className="grid gap-3 p-3 sm:grid-cols-[1.4fr_1fr] sm:p-4">
          {/* map */}
          <div className="relative overflow-hidden rounded-xl border border-ink-200 bg-brand-deep">
            <CityMap variant="dark" className="aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[280px]" />
            <div className="absolute left-2.5 top-2.5 rounded-lg bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
              Mapa vivo · CABA
            </div>
            <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-lg bg-black/40 px-2 py-1 text-[10px] text-white backdrop-blur">
              <Radio className="size-3 text-cyan-glow" /> 8.412 sensores activos
            </div>
            {/* floating mini card */}
            <div className="absolute right-2.5 top-2.5 w-32 rounded-lg border border-white/10 bg-white/95 p-2 shadow-card">
              <p className="text-[10px] font-medium uppercase tracking-wide text-ink-600">
                Cruce crítico
              </p>
              <p className="nums mt-0.5 text-sm font-bold text-ink-900">11 min</p>
              <p className="text-[10px] text-ink-600">demora media</p>
            </div>
          </div>

          {/* right column */}
          <div className="flex flex-col gap-3">
            {/* kpis row */}
            <div className="grid grid-cols-2 gap-2">
              <MiniStat icon={Activity} label="Alertas hoy" value="38" tone="alert" />
              <MiniStat icon={Users} label="Cuadrillas" value="12" tone="info" />
            </div>

            {/* traffic sparkline */}
            <div className="rounded-xl border border-ink-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium uppercase tracking-wide text-ink-600">
                  Tránsito · 24h
                </p>
                <span className="nums text-[11px] font-semibold text-ops-dark">+12%</span>
              </div>
              <Sparkline points={[20, 24, 22, 30, 36, 33, 40, 48, 52, 47, 44, 50]} className="mt-1" />
            </div>

            {/* alerts list */}
            <div className="rounded-xl border border-ink-200 bg-white p-2.5">
              <p className="px-1 text-[11px] font-medium uppercase tracking-wide text-ink-600">
                Alertas activas
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {topAlerts.map((a) => {
                  const s = statusStyles[a.status];
                  return (
                    <li
                      key={a.id}
                      className="flex items-start gap-2 rounded-lg px-1.5 py-1.5 hover:bg-ink-50"
                    >
                      <span className={cn("mt-1 dot", s.dot)} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-semibold text-ink-800">
                          {a.title}
                        </p>
                        <p className="truncate text-[10px] text-ink-600">{a.zone}</p>
                      </div>
                      <span className="nums text-[10px] text-ink-600">{a.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* footer status strip */}
        <div className="grid grid-cols-2 gap-px border-t border-ink-200 bg-ink-200 sm:grid-cols-4">
          {[
            { label: "Semáforos", value: "412", ok: true },
            { label: "Alumbrado", value: "9.318", ok: true },
            { label: "Residuos", value: "1.204", ok: true },
            { label: "Ambiente", value: "26", ok: true },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between bg-white px-3 py-2.5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-ink-600">
                  {s.label}
                </p>
                <p className="nums text-sm font-bold text-ink-900">{s.value}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-ops-dark">
                <Cloud className="size-3" /> OK
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* floating accent cards */}
      <FloatingCard
        className="-left-4 bottom-10 hidden sm:flex"
        title="SLA cumplimiento"
        value="94,2%"
        sub="+3,1pp"
        icon={<Activity className="size-4 text-ops-dark" />}
        delay={0.5}
      />
      <FloatingCard
        className="-right-3 top-24 hidden md:flex"
        title="Reclamo cerrado"
        value="OT-2207"
        sub="evidencia ✓"
        icon={<ArrowUpRight className="size-4 text-cyan-tech" />}
        delay={0.7}
      />
    </motion.div>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Activity;
  label: string;
  value: string;
  tone: "alert" | "info" | "ok";
}) {
  const toneText =
    tone === "alert" ? "text-alert" : tone === "info" ? "text-cyan-tech" : "text-ops-dark";
  return (
    <div className="rounded-xl border border-ink-200 bg-white p-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-wide text-ink-600">{label}</p>
        <Icon className={cn("size-3.5", toneText)} />
      </div>
      <p className="nums mt-1 text-xl font-bold text-ink-900">{value}</p>
    </div>
  );
}

function FloatingCard({
  className,
  title,
  value,
  sub,
  icon,
  delay = 0.4,
}: {
  className?: string;
  title: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute z-10 items-center gap-3 rounded-xl border border-ink-200 bg-white px-3 py-2.5 shadow-lift",
        className
      )}
    >
      <span className="inline-flex size-8 items-center justify-center rounded-lg bg-ink-50">
        {icon}
      </span>
      <div className="leading-tight">
        <p className="text-[10px] font-medium uppercase tracking-wide text-ink-600">{title}</p>
        <p className="nums text-sm font-bold text-ink-900">{value}</p>
        <p className="text-[10px] text-ink-600">{sub}</p>
      </div>
    </motion.div>
  );
}
