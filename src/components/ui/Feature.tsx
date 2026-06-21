import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type FeatureSectionProps = {
  id: string;
  dark?: boolean;
  eyebrow?: string;
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
            {eyebrow && (
              <p
                className={cn(
                  "eyebrow mb-4",
                  dark && "text-cyan-glow"
                )}
              >
                {eyebrow}
              </p>
            )}
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
              <ul className="mt-6 flex flex-col gap-2">
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
                        "mt-2 h-px w-4 shrink-0",
                        dark ? "bg-cyan-glow/60" : "bg-ink-300"
                      )}
                      aria-hidden
                    />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {platformNote && (
              <p
                className={cn(
                  "mt-6 max-w-xl text-[13px] leading-relaxed",
                  dark ? "text-ink-400" : "text-ink-500"
                )}
              >
                {platformNote}
              </p>
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
          "overflow-hidden rounded-xl border shadow-soft",
          dark
            ? "border-white/10 bg-brand-dark"
            : "border-ink-200 bg-white",
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
            <span
              className={cn(
                "text-xs font-semibold",
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
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border text-center",
        dark ? "border-white/10 bg-white/5" : "border-ink-200 bg-ink-50",
        aspect,
        className
      )}
    >
      <span
        className={cn(
          "text-[12px] font-semibold uppercase tracking-wide",
          dark ? "text-ink-300" : "text-ink-500"
        )}
      >
        {label}
      </span>
      {caption && (
        <span
          className={cn(
            "max-w-xs px-4 text-[12px]",
            dark ? "text-ink-400" : "text-ink-500"
          )}
        >
          {caption}
        </span>
      )}
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
        "relative overflow-hidden rounded-xl border shadow-soft",
        dark
          ? "border-white/10 bg-brand-dark"
          : "border-ink-200 bg-white",
        className
      )}
    >
      <div className={cn("relative overflow-hidden", aspect)}>
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
