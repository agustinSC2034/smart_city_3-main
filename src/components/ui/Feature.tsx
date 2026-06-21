import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type FeatureSectionProps = {
  id: string;
  dark?: boolean;
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  /** "left" = mock a la izquierda, "right" = mock a la derecha (default right) */
  mockSide?: "left" | "right";
  highlights?: string[];
  platformNote?: ReactNode;
  ctaLabel?: string;
  ctaTarget?: string;
  mock: ReactNode;
  className?: string;
};

export function FeatureSection({
  id,
  dark = false,
  eyebrow,
  title,
  description,
  mockSide = "right",
  highlights = [],
  platformNote,
  ctaLabel,
  ctaTarget,
  mock,
  className,
}: FeatureSectionProps) {
  const go = (target?: string) => {
    if (!target) return;
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-[var(--section-y)]",
        dark ? "bg-brand-deep text-ink-100" : "bg-white",
        className
      )}
    >
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* TEXT */}
          <Reveal className={cn(mockSide === "left" && "lg:order-2")}>
            <p
              className={cn(
                "eyebrow mb-4",
                dark && "text-cyan-glow"
              )}
            >
              <span className="size-1.5 rounded-full bg-current" aria-hidden />
              {eyebrow}
            </p>
            <h2
              className={cn(
                "text-3xl font-bold tracking-tight sm:text-4xl lg:leading-[1.12]",
                dark ? "text-white" : "text-ink-900"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mt-4 max-w-xl text-base leading-relaxed sm:text-lg",
                dark ? "text-ink-300" : "text-ink-600"
              )}
            >
              {description}
            </p>

            {highlights.length > 0 && (
              <ul className="mt-6 flex flex-col gap-2.5">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className={cn(
                      "flex items-start gap-2.5 text-sm leading-relaxed",
                      dark ? "text-ink-200" : "text-ink-700"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-1.5 size-1.5 shrink-0 rounded-full",
                        dark ? "bg-cyan-glow" : "bg-cyan-tech"
                      )}
                      aria-hidden
                    />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {platformNote && (
              <div
                className={cn(
                  "mt-6 flex items-start gap-2.5 rounded-xl border p-3.5 text-[13px] leading-relaxed",
                  dark
                    ? "border-white/10 bg-white/5 text-ink-300"
                    : "border-ink-200 bg-ink-50/70 text-ink-700"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md text-[11px] font-bold",
                    dark ? "bg-cyan-tech/20 text-cyan-glow" : "bg-brand/10 text-brand"
                  )}
                  aria-hidden
                >
                  ↗
                </span>
                <span>{platformNote}</span>
              </div>
            )}

            {ctaLabel && (
              <button
                onClick={() => go(ctaTarget)}
                className={cn(
                  "mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors",
                  dark
                    ? "text-cyan-glow hover:text-white"
                    : "text-brand hover:text-cyan-700"
                )}
              >
                {ctaLabel}
                <ArrowRight className="size-4" aria-hidden />
              </button>
            )}
          </Reveal>

          {/* MOCK */}
          <Reveal delay={0.08} className={cn(mockSide === "left" && "lg:order-1")}>
            {mock}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Frame with window chrome to wrap a visual mock. */
export function MockFrame({
  children,
  title,
  dark = false,
  className,
  rightLabel,
}: {
  children: ReactNode;
  title: string;
  dark?: boolean;
  className?: string;
  rightLabel?: string;
}) {
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute -inset-3 -z-10 rounded-3xl blur-2xl",
          dark
            ? "bg-gradient-to-br from-cyan-tech/15 via-brand/30 to-transparent"
            : "bg-gradient-to-br from-cyan-tech/15 via-brand/5 to-transparent"
        )}
        aria-hidden
      />
      <div
        className={cn(
          "overflow-hidden rounded-2xl border shadow-lift ring-1",
          dark
            ? "border-white/10 bg-brand-dark ring-white/5"
            : "border-ink-200 bg-white ring-ink-200/60",
          className
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between border-b px-4 py-2.5",
            dark ? "border-white/10 bg-black/20" : "border-ink-200 bg-ink-50/60"
          )}
        >
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-alert/70" />
            <span className="size-2.5 rounded-full bg-warn/70" />
            <span className="size-2.5 rounded-full bg-ops/70" />
            <span
              className={cn(
                "ml-2 text-xs font-semibold",
                dark ? "text-ink-300" : "text-ink-600"
              )}
            >
              {title}
            </span>
          </div>
          {rightLabel && (
            <span
              className={cn(
                "hidden text-[11px] font-medium sm:inline",
                dark ? "text-ink-400" : "text-ink-600"
              )}
            >
              {rightLabel}
            </span>
          )}
        </div>
        <div className="p-3 sm:p-4">{children}</div>
      </div>
    </div>
  );
}

/** Placeholder for a real photo to drop in later. */
export function ImageMock({
  label = "Imagen",
  caption,
  aspect = "aspect-[16/9]",
  dark = false,
  className,
}: {
  label?: string;
  caption?: string;
  aspect?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border",
        dark ? "border-white/10" : "border-ink-200",
        aspect,
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          dark
            ? "bg-[radial-gradient(circle_at_30%_30%,#1e3a5f,transparent_45%),radial-gradient(circle_at_70%_70%,#081a33,transparent_50%)]"
            : "bg-[radial-gradient(circle_at_30%_30%,#cbd5e1,transparent_45%),radial-gradient(circle_at_70%_70%,#e2e8f0,transparent_50%)]"
        )}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-line-bg opacity-20" aria-hidden />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
            dark
              ? "border-white/15 bg-white/5 text-ink-300"
              : "border-ink-200 bg-white/80 text-ink-600"
          )}
        >
          {label}
        </span>
        {caption && (
          <span
            className={cn(
              "max-w-xs text-[11px]",
              dark ? "text-ink-400" : "text-ink-500"
            )}
          >
            {caption}
          </span>
        )}
      </div>
    </div>
  );
}

export function ProductScreenshot({
  src,
  alt,
  aspect = "aspect-[16/10]",
  fit = "cover",
  dark = false,
  className,
  imageClassName,
  framed = true,
}: {
  src: string;
  alt: string;
  aspect?: string;
  fit?: "cover" | "contain";
  dark?: boolean;
  className?: string;
  imageClassName?: string;
  framed?: boolean;
}) {
  if (!framed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "block w-full max-w-full",
          aspect,
          fit === "contain" ? "object-contain" : "object-cover",
          className,
          imageClassName
        )}
      />
    );
  }
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border shadow-lift ring-1",
        dark
          ? "border-white/10 bg-brand-dark ring-white/10"
          : "border-ink-200 bg-white ring-ink-200/60",
        className
      )}
    >
      <div
        className={cn(
          "absolute -inset-8 -z-10 rounded-3xl blur-2xl",
          dark ? "bg-cyan-tech/10" : "bg-cyan-tech/15"
        )}
        aria-hidden
      />
      <div className={cn("relative overflow-hidden rounded-[1rem]", aspect)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "size-full",
            fit === "contain" ? "object-contain" : "object-cover",
            imageClassName
          )}
        />
      </div>
    </div>
  );
}
