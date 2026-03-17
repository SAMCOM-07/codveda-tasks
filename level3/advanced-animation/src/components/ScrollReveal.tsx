import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type ReactNode } from "react";

const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;