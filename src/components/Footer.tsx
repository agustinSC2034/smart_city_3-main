import { navItems } from "@/data/content";

export function Footer({ homeHref }: { homeHref?: string }) {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (homeHref) {
      window.location.href = homeHref + "#" + id;
    }
  };

  return (
    <footer className="bg-brand-deep">
      <div className="container-page py-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="./Logo_Ittel_AI.png"
                alt="Logo IT-TEL"
                className="size-9 w-auto rounded-lg object-contain"
                width={36}
                height={36}
              />
              <div className="leading-tight">
                <p className="text-[18px] font-extrabold tracking-tight text-white">
                  IT-TEL
                </p>
                <p className="text-[12px] font-semibold tracking-wide text-ink-400">
                  Smart City
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              Tecnología, conectividad e infraestructura urbana. Diseñamos, integramos y
              operamos plataformas Smart City para municipios,
              concesionarias y operadores de servicios públicos.
            </p>
            <p className="mt-4 text-xs text-ink-500">
              © {new Date().getFullYear()} IT-TEL. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              Secciones
            </p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.targetId)}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              Soluciones
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-400">
              <li>Semáforos inteligentes</li>
              <li>Alumbrado inteligente</li>
              <li>Cámaras inteligentes</li>
              <li>
                <a
                  href="/soluciones/residuos-inteligentes"
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  Residuos, rutas y recolección
                </a>
              </li>
              <li>Cuadrillas y auditoría</li>
              <li>Monitoreo ambiental</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
