import { useId } from "react";
import { cn } from "@/lib/cn";
import type { StatusKey } from "@/components/ui/Card";

export type MapNode = {
  id: string;
  x: number; // 0..100
  y: number; // 0..100
  status: StatusKey;
  pulse?: boolean;
  label?: string;
};

const statusFill: Record<StatusKey, string> = {
  ok: "#10b981",
  warn: "#f59e0b",
  alert: "#ef4444",
  info: "#0ea5b7",
};

const defaultNodes: MapNode[] = [
  { id: "n1", x: 22, y: 28, status: "ok", pulse: true, label: "Cruce A" },
  { id: "n2", x: 48, y: 22, status: "ok", label: "Cámara 12" },
  { id: "n3", x: 70, y: 34, status: "warn", pulse: true, label: "Luminaria 478" },
  { id: "n4", x: 32, y: 52, status: "ok", label: "Contenedor 091" },
  { id: "n5", x: 58, y: 58, status: "alert", pulse: true, label: "Av. Corrientes" },
  { id: "n6", x: 80, y: 60, status: "ok", label: "Estación aire" },
  { id: "n7", x: 40, y: 78, status: "info", pulse: true, label: "Cuadrilla 3" },
  { id: "n8", x: 66, y: 82, status: "ok", label: "Sumidero 22" },
];

// Road segments connecting nodes (by id pairs)
const defaultRoads: [string, string][] = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n1", "n4"],
  ["n2", "n5"],
  ["n3", "n5"],
  ["n4", "n5"],
  ["n5", "n6"],
  ["n4", "n7"],
  ["n5", "n7"],
  ["n6", "n8"],
  ["n7", "n8"],
];

export function CityMap({
  nodes = defaultNodes,
  roads: customRoads,
  className,
  showLabels = false,
  variant = "dark",
}: {
  nodes?: MapNode[];
  roads?: [string, string][];
  className?: string;
  showLabels?: boolean;
  variant?: "dark" | "light";
}) {
  const id = useId();
  const roads = customRoads ?? defaultRoads;
  const nodeById = (nid: string) => nodes.find((n) => n.id === nid);
  const bg = variant === "dark" ? "#081a33" : "#f1f5f9";
  const roadStroke = variant === "dark" ? "#1e3a5f" : "#cbd5e1";
  const roadSoft = variant === "dark" ? "#142a4d" : "#e2e8f0";

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Mapa abstracto de ciudad con sensores urbanos conectados"
    >
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor={variant === "dark" ? "#0c2a52" : "#ffffff"} />
          <stop offset="100%" stopColor={bg} />
        </radialGradient>
        <pattern
          id={`${id}-grid`}
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M6 0H0V6"
            fill="none"
            stroke={variant === "dark" ? "#16356a" : "#e2e8f0"}
            strokeWidth="0.3"
          />
        </pattern>
      </defs>

      <rect width="100" height="100" fill={`url(#${id}-bg)`} />
      <rect width="100" height="100" fill={`url(#${id}-grid)`} opacity="0.6" />

      {/* soft blocks */}
      <g opacity="0.5">
        <rect x="10" y="14" width="16" height="10" rx="1.5" fill={roadSoft} />
        <rect x="44" y="12" width="14" height="8" rx="1.5" fill={roadSoft} />
        <rect x="74" y="26" width="14" height="12" rx="1.5" fill={roadSoft} />
        <rect x="14" y="60" width="18" height="12" rx="1.5" fill={roadSoft} />
        <rect x="50" y="68" width="16" height="10" rx="1.5" fill={roadSoft} />
        <rect x="72" y="72" width="14" height="12" rx="1.5" fill={roadSoft} />
      </g>

      {/* roads */}
      <g stroke={roadStroke} strokeWidth="1.6" strokeLinecap="round" fill="none">
        {roads.map(([a, b], i) => {
          const A = nodeById(a);
          const B = nodeById(b);
          if (!A || !B) return null;
          return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} />;
        })}
      </g>
      <g
        stroke={variant === "dark" ? "#2c5a8f" : "#94a3b8"}
        strokeWidth="0.4"
        strokeDasharray="1.5 2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      >
        {roads.map(([a, b], i) => {
          const A = nodeById(a);
          const B = nodeById(b);
          if (!A || !B) return null;
          return <line key={`d-${i}`} x1={A.x} y1={A.y} x2={B.x} y2={B.y} />;
        })}
      </g>

      {/* nodes */}
      <g>
        {nodes.map((n) => {
          const fill = statusFill[n.status];
          return (
            <g key={n.id}>
              {n.pulse && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="2.2"
                  fill={fill}
                  opacity="0.35"
                  className="animate-ping-slow"
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
              )}
              <circle cx={n.x} cy={n.y} r="1.6" fill={fill} />
              <circle
                cx={n.x}
                cy={n.y}
                r="0.7"
                fill={variant === "dark" ? "#ffffff" : "#ffffff"}
              />
              {showLabels && n.label && (
                <text
                  x={n.x + 2.4}
                  y={n.y + 0.8}
                  fontSize="2"
                  fill={variant === "dark" ? "#cbd5e1" : "#475569"}
                  fontFamily="Inter, sans-serif"
                >
                  {n.label}
                </text>
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export { statusFill };
