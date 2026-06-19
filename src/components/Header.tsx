import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-ink-200/80 bg-white/85 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-white/0"
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-tight text-ink-900">
              GRUPO ITTEL
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-700">
              IT-TEL Smart City
            </span>
          </span>
          <span className="sr-only">, inicio</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={() => go("contacto")} className="btn-secondary">
            Contacto
          </button>
          <button onClick={() => go("contacto")} className="btn-primary">
            Solicitar demo
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-200 bg-white lg:hidden">
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
