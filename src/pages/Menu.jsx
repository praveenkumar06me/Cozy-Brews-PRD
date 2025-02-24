import { motion } from 'framer-motion';
import { FiCoffee, FiPackage, FiShoppingCart } from 'react-icons/fi';
import CoffeeLoader from '../components/CoffeeLoader';
import { useLoader } from '../hooks/useLoader';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const isLoading = useLoader();
  const { addToCart } = useCart();

  if (isLoading) {
    return <CoffeeLoader />;
  }

  const menuItems = [
    {
      category: "Hot Coffee",
      items: [
        { id: 1, name: "Espresso", price: 3.50, description: "Pure and intense" },
        { id: 2, name: "Cappuccino", price: 4.50, description: "Espresso with steamed milk foam" },
        { id: 3, name: "Latte", price: 4.75, description: "Espresso with steamed milk" }
      ]
    },
    {
      category: "Cold Coffee",
      items: [
        { id: 4, name: "Iced Americano", price: 4.00, description: "Chilled espresso with water" },
        { id: 5, name: "Frappuccino", price: 5.50, description: "Blended coffee with cream" },
        { id: 6, name: "Cold Brew", price: 4.75, description: "Slow-steeped coffee" }
      ]
    }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="pt-16 min-h-screen bg-coffee-100/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-playfair text-coffee-500 mb-4">Our Menu</h1>
          <p className="text-gray-600">Discover our carefully curated selection of coffee</p>
        </motion.div>

        <div className="space-y-12">
          {menuItems.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-playfair text-coffee-400 mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-playfair text-coffee-500">{item.name}</h3>
                      <span className="text-coffee-400">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full flex items-center justify-center space-x-2 bg-coffee-400 text-white py-2 px-4 rounded-md hover:bg-coffee-500 transition-colors duration-200"
                    >
                      <FiShoppingCart />
                      <span>Add to Cart</span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;