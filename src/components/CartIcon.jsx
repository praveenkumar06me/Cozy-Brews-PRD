import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CartIcon = () => {
  const { getCartCount } = useCart();
  const count = getCartCount();

  return (
    <Link to="/cart" className="relative">
      <FiShoppingCart className="w-6 h-6" />
      {count > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 bg-coffee-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        >
          {count}
        </motion.div>
      )}
    </Link>
  );
};

export default CartIcon;