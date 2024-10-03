import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="path/to/your-image.jpg"
            alt="Profile"
            className="rounded-full w-40 h-40 md:w-60 md:h-60 mb-6 md:mb-0"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          <motion.div
            className="md:ml-10 text-center md:text-left"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <p className="text-lg text-red-500">I am a web developer and video editor with a passion for creating visually stunning projects...</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
