import { motion, AnimatePresence } from 'framer-motion';
import { FiCoffee } from 'react-icons/fi';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative z-10"
        >
          <div className="text-center">
            <FiCoffee className="w-12 h-12 text-coffee-400 mx-auto mb-4" />
            <h3 className="text-2xl font-playfair text-coffee-500 mb-2">
              Time for a Coffee Break?
            </h3>
            <p className="text-gray-600 mb-6">
              We'll keep your spot warm and your coffee hot for your next visit. See you soon!
            </p>
            
            <div className="flex space-x-4">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-coffee-400 text-coffee-400 rounded-md hover:bg-coffee-50 transition-colors duration-200"
              >
                Stay Longer
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 px-4 py-2 bg-coffee-400 text-white rounded-md hover:bg-coffee-500 transition-colors duration-200"
              >
                Time to Go
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LogoutModal;