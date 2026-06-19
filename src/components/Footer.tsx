import { navItems } from "@/data/content";

export function Footer() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand text-white shadow-soft">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
                  <rect x="3" y="3" width="5" height="5" rx="1" fill="#22d3ee" />
                  <rect x="10" y="3" width="5" height="9" rx="1" fill="#10b981" />
                  <rect x="17" y="3" width="4" height="6" rx="1" fill="#94a3b8" />
                  <rect x="3" y="10" width="9" height="4" rx="1" fill="#22d3ee" opacity="0.7" />
                  <rect x="14" y="14" width="7" height="7" rx="1" fill="#22d3ee" opacity="0.7" />
                  <rect x="3" y="16" width="18" height="5" rx="1" fill="#10b981" opacity="0.55" />
                </svg>
              </span>
              <div className="leading-none">
                <p className="text-[15px] font-extrabold tracking-tight text-ink-900">
                  GRUPO ITTEL
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-700">
                  IT-TEL Smart City
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-600">
              Tecnología, conectividad e infraestructura urbana. Diseñamos, integramos y
              operamos plataformas Smart City para municipios, concesionarias y operadores
              de servicios públicos.
            </p>
            <p className="mt-4 text-xs text-ink-600">
              © {new Date().getFullYear()} GRUPO ITTEL. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-600">
              Plataforma
            </p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className="text-sm text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-600">
              Soluciones
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-600">
              <li>Centro de control</li>
              <li>Tránsito y semáforos</li>
              <li>Alumbrado y residuos</li>
              <li>Reclamos ciudadanos</li>
              <li>Auditoría urbana</li>
            </ul>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-600">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-600">
              <li>smartcity@grupoittel.com</li>
              <li>+54 11 0000-0000</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-ink-600 sm:flex-row sm:items-center">
          <p>
            Solución presentada por GRUPO ITTEL. Datos de demostración — no representan
            mediciones contractuales.
          </p>
          <p className="flex items-center gap-2">
            <span className="dot bg-ops" /> Sistema operativo · demo en línea
          </p>
        </div>
      </div>
    </footer>
  );
}
