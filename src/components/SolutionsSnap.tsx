import { useEffect, useRef, type ReactNode } from "react";

/**
 * Envuelve el bloque de soluciones y activa scroll-snap suave (proximity)
 * solo mientras ese bloque está en el viewport. Al salir, restaura scroll normal.
 */
export function SolutionsSnap({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const html = document.documentElement;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible) {
          html.style.scrollSnapType = "y proximity";
        } else {
          html.style.scrollSnapType = "";
        }
      },
      { rootMargin: "-15% 0px -15% 0px", threshold: [0, 0.1, 0.5] }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      html.style.scrollSnapType = "";
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
