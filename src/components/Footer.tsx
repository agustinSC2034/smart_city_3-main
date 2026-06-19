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
              <img
                src="./Logo_Ittel_AI.png"
                alt="Logo IT-TEL"
                className="size-9 w-auto rounded-lg object-contain"
                width={36}
                height={36}
              />
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
              operamos plataformas Smart City para municipios,
              concesionarias y operadores de servicios públicos.
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
              <li>Semáforos inteligentes</li>
              <li>Alumbrado inteligente</li>
              <li>Cámaras inteligentes</li>
              <li>Residuos y sensores</li>
              <li>Cuadrillas en tiempo real</li>
              <li>Peajes y accesos</li>
            </ul>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-600">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-600">
              <li>0810-345-ITTEL (4883)</li>
              <li>administracion@it-tel.com.ar</li>
              <li>Av. Alicia Moreau de Justo 1930, CABA</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-ink-600 sm:flex-row sm:items-center">
          <p>
            Solución presentada por GRUPO ITTEL. Datos de demostración —
            no representan mediciones contractuales.
          </p>
          <p className="flex items-center gap-2">
            <span className="dot bg-ops" /> En línea
          </p>
        </div>
      </div>
    </footer>
  );
}
