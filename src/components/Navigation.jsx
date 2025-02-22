
import React,{ useState } from "react";
import { Menu, X, } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-blue-500/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Young & <span className="text-blue-400">Bullish</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                Join Community
              </button>
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-lg"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                Success Stories
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                Resources
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                About Us
              </a>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                Join Community
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    );
};
export default Navigation;