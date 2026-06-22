import { useEffect, useState, useRef, useCallback } from "react";
import { X, Mail, Phone, MapPin } from "lucide-react";

const RECAPTCHA_SITE_KEY = "6LeK7VIsAAAAAJcPyHaWA3sCQisGE1aHHiy4VHYE";

type Status = "idle" | "sending" | "success" | "error";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  const ensureCaptcha = useCallback(() => {
    if (!captchaRef.current) return;
    const g = (window as any).grecaptcha;
    if (!g) return;
    if (widgetId.current !== null) {
      try { g.reset(widgetId.current); } catch { widgetId.current = null; }
    }
    if (widgetId.current === null) {
      try {
        widgetId.current = g.render(captchaRef.current, { sitekey: RECAPTCHA_SITE_KEY });
      } catch { widgetId.current = null; }
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setMsg("");
    widgetId.current = null;

    const scriptSel = 'script[src*="recaptcha"]';
    if (!document.querySelector(scriptSel)) {
      const s = document.createElement("script");
      s.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      s.onload = ensureCaptcha;
      document.body.appendChild(s);
    } else {
      const tick = setInterval(() => {
        if ((window as any).grecaptcha) {
          clearInterval(tick);
          ensureCaptcha();
        }
      }, 120);
      setTimeout(() => clearInterval(tick), 6000);
    }
  }, [open, ensureCaptcha]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const g = (window as any).grecaptcha;
    const token = g?.getResponse(widgetId.current ?? undefined);
    if (!token) {
      setStatus("error");
      setMsg("Por favor completa el reCAPTCHA");
      return;
    }
    setStatus("sending");
    setMsg("");
    try {
      const fd = new FormData(formRef.current!);
      const res = await fetch("/contacto.php", { method: "POST", body: fd });
      const text = await res.text();
      const data = JSON.parse(text);
      if (data.success) {
        setStatus("success");
        setMsg(data.message || "Mensaje enviado correctamente.");
        formRef.current?.reset();
        try { g.reset(widgetId.current); } catch {}
      } else {
        setStatus("error");
        setMsg(data.message || "Error al enviar el mensaje.");
        try { g.reset(widgetId.current); } catch {}
      }
    } catch {
      setStatus("error");
      setMsg("Error de conexión. Intenta más tarde o escribinos directamente.");
      try { g?.reset(widgetId.current); } catch {}
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Formulario de contacto">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-ink-900">Contacto</h2>
            <p className="text-sm text-ink-600">Respondemos en 24 hs hábiles.</p>
          </div>
          <button onClick={onClose} className="inline-flex size-9 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900" aria-label="Cerrar">
            <X className="size-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6">
          {status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-green-100">
                <Mail className="size-6 text-green-700" />
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-800">{msg}</p>
              <button onClick={onClose} className="btn-secondary mt-6">Cerrar</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="nombre" placeholder="Nombre completo" required />
                <Field name="email" type="email" placeholder="Correo electrónico" required />
              </div>
              <Field name="asunto" placeholder="Teléfono (opcional)" />
              <div>
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Contanos qué necesitás"
                  required
                  className="w-full rounded-lg border border-ink-300 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div ref={captchaRef} className="min-h-[78px]" />
              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">{msg}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>

              <div className="border-t border-ink-200 pt-4">
                <div className="grid gap-2 text-sm text-ink-600">
                  <a href="mailto:administracion@it-tel.com.ar" className="flex items-center gap-2 transition-colors hover:text-ink-900">
                    <Mail className="size-4 text-cyan-700" /> administracion@it-tel.com.ar
                  </a>
                  <span className="flex items-center gap-2">
                    <Phone className="size-4 text-cyan-700" /> 0810-345-ITTEL (4883)
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4 text-cyan-700" /> Av. Alicia Moreau de Justo 1930, CABA
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ name, type = "text", placeholder, required }: { name: string; type?: string; placeholder: string; required?: boolean }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-ink-300 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
    />
  );
}
