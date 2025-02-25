import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-coffee-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl">The Backbencher's</h3>
            <p className="text-coffee-100 text-sm">
              Your perfect spot for exceptional coffee and a warm atmosphere.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-playfair text-xl">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-coffee-100 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-coffee-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-coffee-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-playfair text-xl">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FiMapPin className="text-coffee-100" />
                <span className="text-coffee-100">Purulia, West Bengal IND</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="text-coffee-100" />
                <span className="text-coffee-100">+91 8319130565</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-coffee-100" />
                <span className="text-coffee-100">praveenkumar06me@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-playfair text-xl">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FiClock className="text-coffee-100" />
                <span className="text-coffee-100">Mon-Sun: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-400 mt-8 pt-8 text-center text-coffee-100 text-sm">
          <p>© {new Date().getFullYear()} The Backbencher's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;