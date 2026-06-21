import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-deep text-white"
    >
      {/* Fondo: imagen CABA full-screen */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: bgY }}
        aria-hidden="true"
      >
        <img
          src="./smart-city-caba-hero.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
      </motion.div>

      {/* Gradiente oscuro de izquierda a derecha para legibilidad del texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,16,35,0.94) 0%, rgba(5,16,35,0.82) 40%, rgba(5,16,35,0.4) 72%, rgba(5,16,35,0.1) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Gradiente vertical para pie y techo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,16,35,0.35) 0%, transparent 22%, transparent 72%, rgba(5,16,35,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[100svh] items-center pb-24 pt-28">
        <div className="max-w-2xl">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Operación urbana en tiempo real
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg"
          >
            Semáforos, luminarias, sensores, cámaras, reclamos y cuadrillas sobre
            un mismo mapa operativo, con alertas, órdenes de trabajo y trazabilidad
            de cada intervención.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => go("contacto")}
              className="btn-primary"
            >
              Solicitar demo
              <ArrowRight className="size-4" aria-hidden />
            </button>
            <button
              onClick={() => go("plataforma")}
              className="btn border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/15"
            >
              Ver la plataforma
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
