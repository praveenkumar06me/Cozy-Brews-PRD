import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import CoffeeLoader from '../components/CoffeeLoader';
import { useLoader } from '../hooks/useLoader';

const Contact = () => {
  const isLoading = useLoader();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (isLoading) {
    return <CoffeeLoader />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      info: "Purulia, West Bengal IND"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      info: "+91 8319130565"
    },
    {
      icon: <FiMail />,
      title: "Email Us",
      info: "praveenkumar06me@gmail.com"
    },
    {
      icon: <FiClock />,
      title: "Opening Hours",
      info: "Mon-Sun: 8:00 AM - 10:00 PM"
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
          <h1 className="text-4xl font-playfair text-coffee-500 mb-4">Contact Us</h1>
          <p className="text-gray-600">We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-coffee-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-playfair text-coffee-500 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.info}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-400 focus:border-coffee-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-400 focus:border-coffee-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-400 focus:border-coffee-400"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-coffee-400 text-white py-2 px-4 rounded-md hover:bg-coffee-500 transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;