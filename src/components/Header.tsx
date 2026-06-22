import { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
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
          ? "border-b border-ink-200 bg-white backdrop-blur-lg"
          : "border-b border-transparent bg-brand-deep/30 backdrop-blur-[2px]"
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Logo + texto */}
        <a href="#top" className="flex items-center gap-3" onClick={() => go("top")}>
          <Logo />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "text-[18px] font-extrabold tracking-tight transition-colors duration-300",
                dark ? "text-white" : "text-ink-900"
              )}
            >
              IT-TEL
            </span>
            <span
              className={cn(
                "text-[12px] font-semibold tracking-wide transition-colors duration-300",
                dark ? "text-cyan-glow" : "text-cyan-700"
              )}
            >
              Smart City
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
                  "relative rounded-lg px-3 py-2 text-[0.9rem] font-medium transition-colors duration-200",
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
          <a
            href="https://auditoria-urbana.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-lg px-4 py-2 text-[0.9rem] font-medium transition-colors duration-200",
              dark
                ? "text-white/85 hover:bg-white/10 hover:text-white"
                : "text-ink-700 hover:bg-ink-100 hover:text-ink-900"
            )}
          >
            Iniciar sesión
          </a>
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
            <a
              href="https://auditoria-urbana.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-lg px-3 py-3 text-center text-sm font-medium text-ink-700 hover:bg-ink-100"
            >
              Iniciar sesión
            </a>
            <button onClick={() => go("contacto")} className="btn-secondary mt-3 w-full">
              Contacto
            </button>
          </nav>
        </div>
      )}

    </header>
  );
}

function Logo() {
  return (
    <img
      src="./favicon.png"
      alt="IT-TEL Smart City"
      className="size-9 w-auto rounded-lg object-contain"
      width={36}
      height={36}
    />
  );
}
