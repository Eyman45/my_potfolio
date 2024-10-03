import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="">
      <img className='w-full h-screen' src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg" alt="" />
      <div className="flex justify-center items-center h-full">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 4 }}
          transition={{ duration: 3000 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi, I'm [Abdirahman Abdulkadir]
          </motion.h1>
          <motion.p
            className="mt-4 text-2xl md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Web Developer & Video Editor
          </motion.p>
          <motion.a
            href="#contact"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
