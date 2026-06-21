import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { solutions, type Solution } from "@/data/solutionsShowcase";
import { cn } from "@/lib/cn";

type Variant = "A" | "B" | "C";

const variantByIndex: Variant[] = ["A", "B", "C", "A", "C", "B"];

export function SolutionsShowcase() {
  const [active, setActive] = useState(0);
  const blockRef = useRef<HTMLDivElement>(null);

  // Progreso global del bloque (0..1) para la línea del indicador
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const chapters = Array.from(
      blockRef.current?.querySelectorAll<HTMLElement>("[data-chapter]") ?? []
    );
    if (chapters.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = Number(visible[0].target.getAttribute("data-index"));
          setActive(idx);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 0.8] }
    );
    chapters.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const go = (target?: string) => {
    if (!target) return;
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={blockRef} id="soluciones" className="scroll-mt-24">
      {/* Encabezado simple del bloque */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
            Soluciones para operar la ciudad
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
            Infraestructura, software y equipos de campo conectados a una misma
            operación.
          </p>
        </div>
      </section>

      {/* Indicador lateral — solo desktop */}
      <ChapterIndicator
        total={solutions.length}
        active={active}
        progress={scrollYProgress}
      />

      {solutions.map((s, i) => (
        <Chapter
          key={s.id}
          index={i}
          total={solutions.length}
          variant={variantByIndex[i]}
          solution={s}
          onCta={() => go(s.ctaTarget)}
        />
      ))}
    </div>
  );
}

/* ---------------- Indicador ---------------- */

function ChapterIndicator({
  total,
  active,
  progress,
}: {
  total: number;
  active: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const reduce = useReducedMotion();
  return (
    <div
      className="pointer-events-none fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
      aria-hidden
    >
      <div className="flex flex-col items-end gap-3">
        <span className="nums text-[12px] font-semibold tabular-nums text-ink-500">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="text-[11px] font-medium text-ink-400">
          {solutions[active]?.title}
        </span>
        <div className="relative h-32 w-px bg-ink-200">
          <motion.div
            className="absolute inset-x-0 top-0 origin-top bg-brand"
            style={{ height: "100%", scaleY: reduce ? 1 : progress }}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Capítulo ---------------- */

function Chapter({
  index,
  total,
  variant,
  solution,
  onCta,
}: {
  index: number;
  total: number;
  variant: Variant;
  solution: Solution;
  onCta: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax leve en la captura (máx ~4% del alto)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      ref={ref}
      id={solution.id}
      data-chapter
      data-index={index}
      className="scroll-mt-24 py-20 sm:py-28"
      style={bgFor(variant, index)}
    >
      <div className="container-page">
        <ChapterNumber index={index} total={total} variant={variant} />

        {variant === "A" && (
          <VariantA solution={solution} onCta={onCta} imgY={reduce ? undefined : imgY} dark={isDark(variant, index)} reduce={reduce} />
        )}
        {variant === "B" && (
          <VariantB solution={solution} onCta={onCta} imgY={reduce ? undefined : imgY} dark={isDark(variant, index)} reduce={reduce} />
        )}
        {variant === "C" && (
          <VariantC solution={solution} onCta={onCta} imgY={reduce ? undefined : imgY} dark={isDark(variant, index)} reduce={reduce} />
        )}
      </div>
    </section>
  );
}

function ChapterNumber({ index, total, variant }: { index: number; total: number; variant: Variant }) {
  const dark = isDark(variant, index);
  return (
    <div className={cn("mb-10 flex items-center gap-3 text-[12px] font-semibold tabular-nums", dark ? "text-cyan-glow" : "text-cyan-700")}>
      <span className="nums">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <span className={cn("h-px w-10", dark ? "bg-white/20" : "bg-ink-300")} />
    </div>
  );
}

/* ---------------- Variantes ---------------- */

// A: editorial dividida — texto 35-40%, imagen 60-65%, imagen cerca del borde
function VariantA({
  solution,
  onCta,
  imgY,
  dark,
  reduce,
}: {
  solution: Solution;
  onCta: () => void;
  imgY?: any;
  dark: boolean;
  reduce: boolean | null;
}) {
  // 0 = Movilidad (texto izq, imagen der) · 3 = Residuos (imagen izq, texto der)
  const flip = solution.id === "residuos";
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <div className={cn("grid items-center gap-10 lg:gap-16", flip ? "lg:grid-cols-[1.7fr_1fr]" : "lg:grid-cols-[1fr_1.7fr]")}>
      <motion.div
        initial={reduce ? false : { opacity: 0, x: flip ? 28 : -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className={cn(flip && "lg:order-2")}
      >
        <ChapterText solution={solution} dark={dark} onCta={onCta} />
      </motion.div>

      <motion.div
        initial={{ opacity: reduce ? 1 : 0.65, scale: reduce ? 1 : 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease }}
        style={imgY ? { y: imgY } : undefined}
        className={cn("overflow-hidden", flip && "lg:order-1")}
      >
        <ChapterScreenshot solution={solution} clip="inset(0 100% 0 0)" reduce={reduce} />
      </motion.div>
    </div>
  );
}

// B: captura protagonista — texto arriba, captura casi todo el ancho debajo
function VariantB({
  solution,
  onCta,
  imgY,
  dark,
  reduce,
}: {
  solution: Solution;
  onCta: () => void;
  imgY?: any;
  dark: boolean;
  reduce: boolean | null;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <div className="flex flex-col gap-10">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="max-w-2xl"
      >
        <ChapterText solution={solution} dark={dark} onCta={onCta} />
      </motion.div>

      <motion.div
        initial={{ opacity: reduce ? 1 : 0.65, scale: reduce ? 1 : 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease, delay: 0.05 }}
        style={imgY ? { y: imgY } : undefined}
        className="overflow-hidden"
      >
        <ChapterScreenshot solution={solution} clip="inset(100% 0 0 0)" wide reduce={reduce} />
      </motion.div>
    </div>
  );
}

// C: bloque inmersivo — fondo plano, captura grande, texto superpuesto levemente
function VariantC({
  solution,
  onCta,
  imgY,
  dark,
  reduce,
}: {
  solution: Solution;
  onCta: () => void;
  imgY?: any;
  dark: boolean;
  reduce: boolean | null;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: reduce ? 1 : 0.65, scale: reduce ? 1 : 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease }}
        style={imgY ? { y: imgY } : undefined}
        className="overflow-hidden"
      >
        <ChapterScreenshot solution={solution} clip="inset(0 0 100% 0)" wide reduce={reduce} />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
        className={cn(
          "relative z-10 -mt-24 max-w-xl rounded-lg p-6 sm:p-8 lg:-mt-32",
          dark ? "bg-brand-deep/90 text-ink-100" : "bg-white/95 text-ink-900 shadow-soft"
        )}
      >
        <ChapterText solution={solution} dark={dark} onCta={onCta} compact />
      </motion.div>
    </div>
  );
}

/* ---------------- Piezas ---------------- */

function ChapterText({
  solution,
  dark,
  onCta,
  compact,
}: {
  solution: Solution;
  dark: boolean;
  onCta: () => void;
  compact?: boolean;
}) {
  return (
    <div>
      <h3
        className={cn(
          "text-2xl font-bold tracking-tight sm:text-3xl lg:leading-[1.15]",
          dark ? "text-white" : "text-ink-900"
        )}
      >
        {solution.title}
      </h3>
      <p
        className={cn(
          "mt-4 max-w-xl text-base leading-relaxed",
          dark ? "text-ink-200" : "text-ink-600",
          compact && "text-[15px]"
        )}
      >
        {solution.description}
      </p>

      <ul className="mt-6 flex flex-col gap-2">
        {solution.capabilities.map((c) => (
          <li
            key={c}
            className={cn(
              "flex items-start gap-3 text-sm leading-relaxed",
              dark ? "text-ink-200" : "text-ink-700"
            )}
          >
            <span className={cn("mt-2 h-px w-5 shrink-0", dark ? "bg-cyan-glow/60" : "bg-ink-300")} aria-hidden />
            {c}
          </li>
        ))}
      </ul>

      {solution.ctaLabel && (
        <button
          onClick={onCta}
          className={cn(
            "mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors",
            dark ? "text-cyan-glow hover:text-white" : "text-brand hover:text-cyan-700"
          )}
        >
          {solution.ctaLabel}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}

function ChapterScreenshot({
  solution,
  clip,
  wide,
  reduce,
}: {
  solution: Solution;
  clip: string;
  wide?: boolean;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      initial={reduce ? undefined : { clipPath: clip }}
      whileInView={reduce ? undefined : { clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("overflow-hidden", wide ? "w-full" : "w-full")}
    >
      <img
        src={solution.screenshot}
        alt={solution.alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "block w-full bg-white",
          solution.aspect,
          solution.fit === "contain" ? "object-contain" : "object-cover"
        )}
      />
    </motion.div>
  );
}

/* ---------------- Helpers ---------------- */

function isDark(variant: Variant, index: number): boolean {
  // Variante C: Cámaras (index 2) usa gris claro, Cuadrillas (index 4) usa azul institucional
  if (variant === "C") return index === 4;
  // Variante A: Movilidad (0) usa azul, Residuos (3) usa blanco
  if (variant === "A") return index === 0;
  return false;
}

function bgFor(variant: Variant, index: number): React.CSSProperties {
  if (variant === "C") {
    return index === 4
      ? { backgroundColor: "#051023" }
      : { backgroundColor: "#f6f8fb" };
  }
  if (variant === "A") {
    return index === 0 ? { backgroundColor: "#051023" } : { backgroundColor: "#ffffff" };
  }
  return { backgroundColor: "#ffffff" };
}
