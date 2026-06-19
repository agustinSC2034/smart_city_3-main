import { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const openRef = useRef(false);

  openRef.current = open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.15, 0.3, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openRef.current) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original;
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const dark = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300",
        scrolled
          ? "border-b border-ink-200/70 bg-white/90 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5" onClick={() => go("top")}>
          <Logo />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "text-[15px] font-extrabold tracking-tight transition-colors duration-300",
                dark ? "text-white" : "text-ink-900"
              )}
            >
              GRUPO ITTEL
            </span>
            <span
              className={cn(
                "text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300",
                dark ? "text-cyan-glow" : "text-cyan-700"
              )}
            >
              IT-TEL Smart City
            </span>
          </span>
          <span className="sr-only">, inicio</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {navItems.map((n) => {
            const active = activeId === n.id;
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                  dark
                    ? "text-white/85 hover:bg-white/10 hover:text-white"
                    : "text-ink-700 hover:bg-ink-100 hover:text-ink-900",
                  active && (dark ? "text-white" : "text-ink-900")
                )}
              >
                {n.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full transition-all duration-200",
                    dark ? "bg-cyan-glow" : "bg-brand",
                    active ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </nav>

        {/* Botones desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={() => go("contacto")}
            className={cn(
              "btn-secondary transition-colors duration-300",
              dark &&
                "!border-white/25 !bg-white/10 !text-white hover:!bg-white/15"
            )}
          >
            Contacto
          </button>
          <button onClick={() => go("contacto")} className="btn-primary">
            Solicitar demo
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>

        {/* Hamburguesa mobile */}
        <button
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-lg transition-colors duration-300 lg:hidden",
            dark ? "text-white hover:bg-white/10" : "text-ink-700 hover:bg-ink-100"
          )}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink-200 bg-white lg:hidden"
        >
          <nav className="container-page flex flex-col py-3" aria-label="Móvil">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-ink-700 hover:bg-ink-100"
              >
                {n.label}
              </button>
            ))}
            <button onClick={() => go("contacto")} className="btn-primary mt-3 w-full">
              Solicitar demo
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand text-white shadow-soft ring-1 ring-brand/20">
      <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
        <rect x="3" y="3" width="5" height="5" rx="1" fill="#22d3ee" />
        <rect x="10" y="3" width="5" height="9" rx="1" fill="#10b981" />
        <rect x="17" y="3" width="4" height="6" rx="1" fill="#94a3b8" />
        <rect x="3" y="10" width="9" height="4" rx="1" fill="#22d3ee" opacity="0.7" />
        <rect x="14" y="14" width="7" height="7" rx="1" fill="#22d3ee" opacity="0.7" />
        <rect x="3" y="16" width="18" height="5" rx="1" fill="#10b981" opacity="0.55" />
      </svg>
    </span>
  );
}
