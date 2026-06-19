import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article";
  once?: boolean;
};

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;

  if (reduce) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </Comp>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={baseVariants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      custom={y}
    >
      {children}
    </motion.div>
  );
}

export { baseVariants };
