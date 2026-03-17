import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full backdrop-blur-lg bg-white/70 shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          <Link to="/">AnimaFlow</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <motion.div key={item.path} whileHover={{ y: -2 }}>
              <Link
                to={item.path}
                className="relative font-medium transition-colors hover:text-blue-600"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.path}
              variants={linkVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 rounded transition-colors ${location.pathname === item.path
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100"
                  }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;