import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          ConnectHub
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          A modern, responsive social feed platform to browse users and posts,
          search, filter, and manage content. Built with{" "}
          <span className="font-semibold">React.js, Redux Toolkit, Tailwind CSS, and React Router</span>, 
          featuring pagination, infinite scroll, and CRUD operations.
        </p>

        <motion.a
          href="https://github.com/yourusername/connecthub"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:bg-purple-100 transition"
        >
          🚀 View on GitHub
        </motion.a>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl"
      >
        <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">🔥 Features</h3>
          <ul className="text-sm space-y-2">
            <li>• Infinite Scroll & Pagination</li>
            <li>• Real-time Search & Filtering</li>
            <li>• CRUD Operations with Optimistic UI</li>
            <li>• Error Boundaries & Testing</li>
          </ul>
        </div>

        <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">🛠 Tech Stack</h3>
          <ul className="text-sm space-y-2">
            <li>• React.js + Redux Toolkit</li>
            <li>• Tailwind CSS</li>
            <li>• React Router</li>
            <li>• Framer Motion</li>
            <li>• Jest & RTL</li>
          </ul>
        </div>

        <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">⚡ Highlights</h3>
          <ul className="text-sm space-y-2">
            <li>• Reusable Components</li>
            <li>• Dark/Light Theme Toggle</li>
            <li>• Smooth Animations</li>
            <li>• Mobile-first Responsive UI</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
