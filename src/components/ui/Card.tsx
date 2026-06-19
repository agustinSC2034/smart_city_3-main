import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type StatusKey = "ok" | "warn" | "alert" | "info";

export const statusStyles: Record<
  StatusKey,
  { dot: string; text: string; chip: string; label: string }
> = {
  ok: {
    dot: "bg-ops",
    text: "text-ops-dark",
    chip: "border-ops/30 bg-ops/10 text-ops-dark",
    label: "Operativo",
  },
  warn: {
    dot: "bg-warn",
    text: "text-amber-700",
    chip: "border-amber-500/40 bg-amber-500/10 text-amber-700",
    label: "Atención",
  },
  alert: {
    dot: "bg-alert",
    text: "text-alert",
    chip: "border-alert/30 bg-alert/10 text-alert",
    label: "Crítico",
  },
  info: {
    dot: "bg-cyan-tech",
    text: "text-cyan-tech",
    chip: "border-cyan-tech/30 bg-cyan-tech/10 text-cyan-tech",
    label: "Info",
  },
};

export function StatusDot({
  status,
  pulse = false,
  className,
}: {
  status: StatusKey;
  pulse?: boolean;
  className?: string;
}) {
  const s = statusStyles[status];
  return (
    <span className={cn("relative inline-flex size-2.5", className)}>
      {pulse && (
        <span
          className={cn(
            "absolute inset-0 rounded-full opacity-60 animate-ping-slow",
            s.dot
          )}
          aria-hidden
        />
      )}
      <span className={cn("relative inline-flex size-2.5 rounded-full", s.dot)} />
    </span>
  );
}

export function StatusChip({
  status,
  label,
  className,
}: {
  status: StatusKey;
  label?: string;
  className?: string;
}) {
  const s = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-semibold",
        s.chip,
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", s.dot)} />
      {label ?? s.label}
    </span>
  );
}

export function SolutionCard({
  icon: Icon,
  title,
  description,
  metric,
  metricLabel,
  status = "ok",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  status?: StatusKey;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/5 text-brand ring-1 ring-brand/10 transition-colors group-hover:bg-brand group-hover:text-white">
          <Icon className="size-5" aria-hidden />
        </span>
        <StatusDot status={status} />
      </div>

      <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>

      {metric && (
        <div className="mt-4 flex items-end justify-between border-t border-ink-100 pt-3">
          <div>
            <p className="nums text-lg font-bold text-ink-900">{metric}</p>
            {metricLabel && (
              <p className="text-[11px] uppercase tracking-wide text-ink-600">
                {metricLabel}
              </p>
            )}
          </div>
          <ArrowUpRight
            className="size-4 text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-tech"
            aria-hidden
          />
        </div>
      )}
    </article>
  );
}

export function KpiCard({
  label,
  value,
  delta,
  deltaTone = "up",
  icon: Icon,
}: {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "up" | "down" | "flat";
  icon?: LucideIcon;
}) {
  const tone =
    deltaTone === "up"
      ? "text-ops-dark"
      : deltaTone === "down"
        ? "text-alert"
        : "text-ink-600";
  return (
    <div className="rounded-xl border border-ink-200 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium uppercase tracking-wide text-ink-600">
          {label}
        </p>
        {Icon && <Icon className="size-4 text-ink-600" aria-hidden />}
      </div>
      <p className="nums mt-2 text-2xl font-bold text-ink-900">{value}</p>
      {delta && <p className={cn("mt-1 text-xs font-semibold", tone)}>{delta}</p>}
    </div>
  );
}
