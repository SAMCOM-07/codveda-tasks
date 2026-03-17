import { motion } from "framer-motion";

interface Props {
  title: string;
}

const ProductCard = ({ title }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">
        Smooth hover animation
      </p>
    </motion.div>
  );
};

export default ProductCard;