import { motion } from "framer-motion";
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  direction = "right",
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      case "down":
        return { y: -100, opacity: 0 };
      case "up":
        return { y: 100, opacity: 0 };
      default:
        return { x: 100, opacity: 0 };
    }
  };

  const getExitPosition = () => {
    switch (direction) {
      case "left":
        return { x: 100, opacity: 0 };
      case "right":
        return { x: -100, opacity: 0 };
      case "down":
        return { y: 100, opacity: 0 };
      case "up":
        return { y: -100, opacity: 0 };
      default:
        return { x: -100, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={getExitPosition()}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
