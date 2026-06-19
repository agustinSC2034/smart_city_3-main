import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  itemFadeUp,
  staggerContainer,
  EASE,
  viewportOnce,
} from "@/lib/motion";

type Direction = "up" | "left" | "right" | "scale" | "none";

const variantByDir: Record<Direction, typeof fadeUp> = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  none: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article";
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  as = "div",
  once = true,
  amount,
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
      viewport={
        amount !== undefined
          ? { once, amount }
          : { once, margin: "-70px" }
      }
      transition={{ duration: 0.6, delay, ease: EASE }}
      variants={variantByDir[direction]}
    >
      {children}
    </Comp>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={itemFadeUp}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export { fadeUp, fadeLeft, fadeRight, scaleIn, itemFadeUp, staggerContainer };
