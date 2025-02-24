{/* Previous imports remain the same */}

const About = () => {
  const isLoading = useLoader();

  if (isLoading) {
    return <CoffeeLoader />;
  }

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
            Discover the passion and dedication behind The Backbenchers
          </p>
        </motion.div>
        {/* Rest of the about page content remains the same */}
      </div>
    </div>
  );
};

export default About;