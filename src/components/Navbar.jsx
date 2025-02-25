import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import LogoutModal from './LogoutModal';
import CartIcon from './CartIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const links = [
    { to: '/', text: 'Home' },
    { to: '/menu', text: 'Menu' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutModal(false);
    navigate('/');
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2 font-playfair text-2xl text-coffee-500">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQH5nZAcWUQNLQ/profile-displayphoto-shrink_400_400/B4DZTROIRNHkAk-/0/1738676931523?e=1746057600&v=beta&t=M6N5eQr4PtHqwqEsbEBZR5KNzGd2zK9-BSqiYysavvg"
                alt="The Backbencher's Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span>The Backbencher's</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="text-gray-700 hover:text-coffee-400 transition-colors duration-200"
                >
                  {link.text}
                </Link>
              ))}
              
              <CartIcon />
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">{user.name}</span>
                  <button
                    onClick={handleLogoutClick}
                    className="flex items-center text-gray-700 hover:text-coffee-400"
                  >
                    <FiLogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center text-gray-700 hover:text-coffee-400"
                >
                  <FiUser className="w-5 h-5" />
                </Link>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-coffee-400"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="block px-3 py-2 text-gray-700 hover:text-coffee-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              
              {user ? (
                <>
                  <div className="px-3 py-2 text-gray-700">{user.name}</div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogoutClick();
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-coffee-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 hover:text-coffee-400"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </nav>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default Navbar;