import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
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
            Welcome to The Patra's
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Your perfect spot for exceptional coffee and a warm atmosphere
          </p>
          <Link
            to="/menu"
            className="inline-block bg-coffee-400 text-white px-8 py-3 rounded-full hover:bg-coffee-500 transition-colors duration-200"
          >
            View Our Menu
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;