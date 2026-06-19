import { cn } from "@/lib/cn";

export function Sparkline({
  points,
  className,
  stroke = "#0ea5b7",
  height = 40,
  width = 120,
  fill = true,
}: {
  points: number[];
  className?: string;
  stroke?: string;
  height?: number;
  width?: number;
  fill?: boolean;
}) {
  if (points.length < 2) return null;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = i * stepX;
    const y = height - ((p - min) / range) * (height - 6) - 3;
    return [x, y] as const;
  });
  const path = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const area = `${path} L${width},${height} L0,${height} Z`;
  const gid = `spark-${stroke.replace("#", "")}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("h-10 w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#${gid})`} />}
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function BarRow({
  label,
  value,
  max = 100,
  color = "#0ea5b7",
  suffix = "%",
}: {
  label: string;
  value: number;
  max?: number;
  color?: string;
  suffix?: string;
}) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-ink-600">{label}</span>
        <span className="nums font-semibold text-ink-800">
          {value}
          {suffix}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
