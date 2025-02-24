{/* Previous imports remain the same */}

const Footer = () => {
  {/* Previous constants remain the same */}

  return (
    <footer className="bg-coffee-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl">The Backbenchers</h3>
            <p className="text-coffee-100 text-sm">
              Your perfect spot for exceptional coffee and a warm atmosphere.
            </p>
            {/* Social links remain the same */}
          </div>
          {/* Rest of the footer content remains the same */}
        </div>
        <div className="border-t border-coffee-400 mt-8 pt-8 text-center text-coffee-100 text-sm">
          <p>© {new Date().getFullYear()} The Backbenchers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;