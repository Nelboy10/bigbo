"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
}

export default function FadeIn({ children, delay = 0, direction = "up", fullWidth = false }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 40, opacity: 0 };
      case "down": return { y: -40, opacity: 0 };
      case "left": return { x: 40, opacity: 0 };
      case "right": return { x: -40, opacity: 0 };
      case "none": return { opacity: 0 };
      default: return { y: 40, opacity: 0 };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case "up":
      case "down": return { y: 0, opacity: 1 };
      case "left":
      case "right": return { x: 0, opacity: 1 };
      case "none": return { opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  return (
    <div ref={ref} className={fullWidth ? "w-full" : ""}>
      <motion.div
        initial={getInitialPosition()}
        animate={isInView ? getTargetPosition() : getInitialPosition()}
        transition={{ duration: 0.5, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={fullWidth ? "w-full h-full" : "h-full"}
      >
        {children}
      </motion.div>
    </div>
  );
}
