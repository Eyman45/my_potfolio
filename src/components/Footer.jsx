import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="https://github.com" className="text-gray-400 hover:text-white mx-2">GitHub</a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2">Twitter</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
