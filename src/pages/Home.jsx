import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLoader } from '../hooks/useLoader';
import CoffeeLoader from '../components/CoffeeLoader';

const Home = () => {
  const isLoading = useLoader();

  if (isLoading) {
    return <CoffeeLoader />;
  }

  return (
    <div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-4"
          >
            <h1 className="font-playfair text-5xl md:text-6xl text-white mb-6">
              Welcome to The Backbencher's
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your perfect spot for exceptional coffee and a warm atmosphere
            </p>
            <Link
              to="/menu"
              className="inline-block bg-coffee-400 text-white px-8 py-3 rounded-full hover:bg-coffee-500 transition-colors duration-200"
            >
              Explore our Menu
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-coffee-100/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair text-coffee-500 mb-4">Our Specialties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium coffee drinks and delightful treats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Artisanal Coffee",
                description: "Expertly roasted and brewed to perfection"
              },
              {
                title: "Fresh Pastries",
                description: "Baked daily for the perfect coffee companion"
              },
              {
                title: "Cozy Atmosphere",
                description: "A warm and welcoming space to enjoy your coffee"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-playfair text-coffee-500 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;