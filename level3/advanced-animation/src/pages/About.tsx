import { motion } from "framer-motion";
import PageTransition from "../layouts/PageTransition";

const About = () => {
  const features = [
    {
      title: "Smooth Animations",
      description: "Beautiful transitions powered by Framer Motion",
      icon: "🎬",
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed and efficiency",
      icon: "⚡",
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on all devices",
      icon: "📱",
    },
    {
      title: "Developer Friendly",
      description: "Easy to customize and extend",
      icon: "👨‍💻",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageTransition direction="up">
      <section className="min-h-screen pt-24 pb-20 bg-linear-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              About AnimaFlow
            </h1>
            <p className="text-xl text-gray-600">
              Crafting beautiful animations for modern web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                What We Do
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                AnimaFlow specializes in creating stunning, performant animations that enhance user experience. 
                We leverage the power of Framer Motion to bring your ideas to life with smooth, elegant transitions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team is dedicated to delivering cutting-edge animation solutions that not only look great 
                but also maintain optimal performance across all platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex flex-col justify-center items-center text-white text-center"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-10"
                style={{
                  background: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
              <motion.div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Built with Love</h3>
                <p className="text-lg opacity-90">
                  Using React, TypeScript, and Framer Motion
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Create Magic?</h2>
            <p className="text-lg mb-8 opacity-90">
              Start building beautiful animations today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
