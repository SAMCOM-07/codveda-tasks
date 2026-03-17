import { motion } from "framer-motion";
import PageTransition from "../layouts/PageTransition";
import ScrollReveal from "../components/ScrollReveal";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Product One",
      description: "Advanced animation package",
      gradient: "from-blue-400 to-blue-600",
      icon: "🎨",
    },
    {
      id: 2,
      title: "Product Two",
      description: "Smooth transitions",
      gradient: "from-purple-400 to-purple-600",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Product Three",
      description: "Interactive components",
      gradient: "from-pink-400 to-pink-600",
      icon: "🎯",
    },
    {
      id: 4,
      title: "Product Four",
      description: "Stunning visuals",
      gradient: "from-cyan-400 to-cyan-600",
      icon: "✨",
    },
    {
      id: 5,
      title: "Product Five",
      description: "Web performance",
      gradient: "from-green-400 to-green-600",
      icon: "🚀",
    },
    {
      id: 6,
      title: "Product Six",
      description: "Developer friendly",
      gradient: "from-orange-400 to-orange-600",
      icon: "💻",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <PageTransition direction="left">
      <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <motion.div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                Our Products
              </h1>
              <p className="text-xl text-gray-600">
                Discover our amazing collection of products
              </p>
            </motion.div>
          </ScrollReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <ScrollReveal>
                  <div className="relative h-72 rounded-lg overflow-hidden cursor-pointer">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative h-full flex flex-col items-center justify-center bg-white group-hover:bg-gradient-to-br"
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: product.id * 0.1,
                        }}
                        className="text-6xl mb-4"
                      >
                        {product.icon}
                      </motion.div>

                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors text-center">
                        {product.title}
                      </h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="text-gray-600 group-hover:text-white mt-3 transition-colors text-center"
                      >
                        {product.description}
                      </motion.p>
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-white/20"
                      initial={{ borderColor: "transparent" }}
                      whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
                    />
                  </div>
                </ScrollReveal>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Products;
