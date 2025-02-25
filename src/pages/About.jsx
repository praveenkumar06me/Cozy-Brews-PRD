import { motion } from 'framer-motion';
import { FiCoffee, FiHeart, FiUsers } from 'react-icons/fi';
import { useLoader } from '../hooks/useLoader';
import CoffeeLoader from '../components/CoffeeLoader';

const About = () => {
  const isLoading = useLoader();

  if (isLoading) {
    return <CoffeeLoader />;
  }

  const features = [
    {
      icon: <FiCoffee className="w-8 h-8" />,
      title: "Quality Coffee",
      description: "We source the finest beans and craft each cup with precision and care."
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every drink is prepared with passion and attention to detail."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community",
      description: "More than a café, we're a gathering place for coffee lovers."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-coffee-100/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-playfair text-coffee-500 mb-4">Our Story</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the passion and dedication behind The Backbencher's
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-playfair text-coffee-500 mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, The Backbencher's began with a simple mission: to serve exceptional coffee in a warm, welcoming environment. What started as a small coffee cart has grown into a beloved community hub.
            </p>
            <p className="text-gray-600">
              We take pride in sourcing the finest coffee beans, supporting sustainable farming practices, and creating memorable experiences for our customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Coffee shop interior"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-coffee-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-playfair text-coffee-500 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;