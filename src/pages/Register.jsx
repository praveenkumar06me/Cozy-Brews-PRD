import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCoffee, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Mock registration - In production, this would be an API call
    login({
      email: formData.email,
      name: formData.name,
      role: 'user'
    });
    navigate('/'); // Changed from /dashboard to /
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-16 min-h-screen bg-coffee-100/30 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <FiCoffee className="w-12 h-12 text-coffee-400 mx-auto mb-4" />
            <h2 className="text-3xl font-playfair text-coffee-500">Create Account</h2>
            <p className="text-gray-600">Join our coffee community</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">
                <div className="flex items-center">
                  <FiUser className="mr-2" />
                  Full Name
                </div>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-400 focus:border-coffee-400"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                <div className="flex items-center">
                  <FiMail className="mr-2" />
                  Email
                </div>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-400 focus:border-coffee-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                <div className="flex items-center">
                  <FiLock className="mr-2" />
                  Password
                </div>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-400 focus:border-coffee-400"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                <div className="flex items-center">
                  <FiLock className="mr-2" />
                  Confirm Password
                </div>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-400 focus:border-coffee-400"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-coffee-400 text-white py-2 px-4 rounded-md hover:bg-coffee-500 transition-colors duration-200"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-coffee-400 hover:text-coffee-500"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;