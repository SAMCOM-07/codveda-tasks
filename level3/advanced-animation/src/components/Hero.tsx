import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col items-center justify-center text-center"
    >
      <motion.h1
        variants={item}
        className="text-5xl font-bold mb-6"
      >
        Advanced Animations Demo
      </motion.h1>

      <motion.p
        variants={item}
        className="text-lg text-gray-600 mb-8"
      >
        Smooth animations powered by Framer Motion
      </motion.p>

      <motion.button
        variants={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Explore
      </motion.button>
    </motion.section>
  );
};

export default Hero;