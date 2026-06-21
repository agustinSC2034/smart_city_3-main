import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { solutions, type Solution } from "@/data/solutionsShowcase";
import { cn } from "@/lib/cn";

type Variant = "A" | "B" | "C";

const variantByIndex: Variant[] = ["A", "B", "C", "A", "C", "B"];

export function SolutionsShowcase() {
  const go = (target?: string) => {
    if (!target) return;
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="soluciones" className="scroll-mt-24">
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

      {solutions.map((s, i) => (
        <Chapter
          key={s.id}
          index={i}
          variant={variantByIndex[i]}
          solution={s}
          onCta={() => go(s.ctaTarget)}
        />
      ))}
    </div>
  );
}

/* ---------------- Capítulo ---------------- */

function Chapter({
  index,
  variant,
  solution,
  onCta,
}: {
  index: number;
  variant: Variant;
  solution: Solution;
  onCta: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax leve en la captura (~4% del alto)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const dark = index % 2 === 0;

  return (
    <section
      ref={ref}
      id={solution.id}
      data-index={index}
      className="scroll-mt-24 py-20 sm:py-28"
      style={{ backgroundColor: dark ? "#051023" : "#ffffff" }}
    >
      <div className="container-page">
        {variant === "A" && (
          <VariantA solution={solution} onCta={onCta} imgY={reduce ? undefined : imgY} dark={dark} reduce={reduce} />
        )}
        {variant === "B" && (
          <VariantB solution={solution} onCta={onCta} imgY={reduce ? undefined : imgY} dark={dark} reduce={reduce} />
        )}
        {variant === "C" && (
          <VariantC solution={solution} onCta={onCta} imgY={reduce ? undefined : imgY} dark={dark} reduce={reduce} />
        )}
      </div>
    </section>
  );
}

/* ---------------- Variantes ---------------- */

function VariantA({
  solution, onCta, imgY, dark, reduce,
}: {
  solution: Solution; onCta: () => void; imgY?: any; dark: boolean; reduce: boolean | null;
}) {
  // 0 = texto izq / imagen der · 3 = imagen izq / texto der
  const flip = solution.id === "residuos";
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <div className={cn("grid items-center gap-10 lg:gap-16", flip ? "lg:grid-cols-[1.7fr_1fr]" : "lg:grid-cols-[1fr_1.7fr]")}>
      <motion.div
        initial={reduce ? false : { opacity: 0, x: flip ? 36 : -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease }}
        className={cn(flip && "lg:order-2")}
      >
        <ChapterText solution={solution} dark={dark} onCta={onCta} />
      </motion.div>

      <motion.div
        initial={{ opacity: reduce ? 1 : 0.4, scale: reduce ? 1 : 0.94 }}
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

function VariantB({
  solution, onCta, imgY, dark, reduce,
}: {
  solution: Solution; onCta: () => void; imgY?: any; dark: boolean; reduce: boolean | null;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease }}
      >
        <ChapterText solution={solution} dark={dark} onCta={onCta} />
      </motion.div>

      <motion.div
        initial={{ opacity: reduce ? 1 : 0.4, scale: reduce ? 1 : 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease, delay: 0.06 }}
        style={imgY ? { y: imgY } : undefined}
        className="overflow-hidden"
      >
        <ChapterScreenshot solution={solution} clip="inset(0 100% 0 0)" reduce={reduce} />
      </motion.div>
    </div>
  );
}

function VariantC({
  solution, onCta, imgY, dark, reduce,
}: {
  solution: Solution; onCta: () => void; imgY?: any; dark: boolean; reduce: boolean | null;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: reduce ? 1 : 0.4, scale: reduce ? 1 : 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease }}
        style={imgY ? { y: imgY } : undefined}
        className="overflow-hidden"
      >
        <ChapterScreenshot solution={solution} clip="inset(0 0 100% 0)" reduce={reduce} />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease, delay: 0.12 }}
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
  solution, dark, onCta, compact,
}: {
  solution: Solution; dark: boolean; onCta: () => void; compact?: boolean;
}) {
  return (
    <div>
      <h3 className={cn("text-2xl font-bold tracking-tight sm:text-3xl lg:leading-[1.15]", dark ? "text-white" : "text-ink-900")}>
        {solution.title}
      </h3>
      <p className={cn("mt-4 max-w-xl text-base leading-relaxed", dark ? "text-ink-200" : "text-ink-600", compact && "text-[15px]")}>
        {solution.description}
      </p>
      <ul className="mt-6 flex flex-col gap-2">
        {solution.capabilities.map((c) => (
          <li key={c} className={cn("flex items-start gap-3 text-sm leading-relaxed", dark ? "text-ink-200" : "text-ink-700")}>
            <span className={cn("mt-2 h-px w-5 shrink-0", dark ? "bg-cyan-glow/60" : "bg-ink-300")} aria-hidden />
            {c}
          </li>
        ))}
      </ul>
      {solution.ctaLabel && (
        <button onClick={onCta} className={cn("mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors", dark ? "text-cyan-glow hover:text-white" : "text-brand hover:text-cyan-700")}>
          {solution.ctaLabel}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}

function ChapterScreenshot({
  solution, clip, reduce,
}: {
  solution: Solution; clip: string; reduce: boolean | null;
}) {
  return (
    <motion.div
      initial={reduce ? undefined : { clipPath: clip }}
      whileInView={reduce ? undefined : { clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <img
        src={solution.screenshot}
        alt={solution.alt}
        loading="lazy"
        decoding="async"
        className={cn("block w-full", solution.aspect, solution.fit === "contain" ? "object-contain" : "object-cover")}
      />
    </motion.div>
  );
}
