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
          src="./smart-city-caba-hero-2.png"
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
            "linear-gradient(to right, rgba(5,16,35,0.88) 0%, rgba(5,16,35,0.72) 40%, rgba(5,16,35,0.35) 72%, rgba(5,16,35,0.08) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Gradiente vertical para pie y techo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,16,35,0.30) 0%, transparent 22%, transparent 72%, rgba(5,16,35,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[100svh] items-center py-28">
        <div className="max-w-2xl">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Monitoreo y auditoría de servicios urbanos
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg"
          >
            Sensores, activos, reclamos y equipos de campo conectados a una misma
            operación para supervisar servicios, asignar tareas y verificar el trabajo
            realizado.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
