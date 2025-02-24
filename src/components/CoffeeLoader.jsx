import { motion } from 'framer-motion';
import { FiCoffee } from 'react-icons/fi';

const CoffeeLoader = () => {
  return (
    <div className="fixed inset-0 bg-coffee-100/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-coffee-400"
        >
          <FiCoffee className="w-16 h-16" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 font-playfair text-coffee-500"
        >
          Brewing your experience...
        </motion.div>
      </div>
    </div>
  );
};

export default CoffeeLoader;