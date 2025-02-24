{/* Previous imports remain the same */}

const Navbar = () => {
  {/* Previous state and handlers remain the same */}

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2 font-playfair text-2xl text-coffee-500">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQH5nZAcWUQNLQ/profile-displayphoto-shrink_400_400/B4DZTROIRNHkAk-/0/1738676931523?e=1746057600&v=beta&t=M6N5eQr4PtHqwqEsbEBZR5KNzGd2zK9-BSqiYysavvg"
                alt="The Backbenchers Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span>The Backbenchers</span>
            </Link>
            
            {/* Rest of the navbar code remains the same */}
          </div>
        </div>
        {/* Mobile menu and logout modal remain the same */}
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