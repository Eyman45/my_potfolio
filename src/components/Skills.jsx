import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <motion.div
          className="flex flex-col md:flex-row justify-between mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-bold">Web Development</h3>
            <div className="mt-4">
              <p>HTML & CSS</p>
              <div className="bg-gray-300 h-2 rounded">
                <motion.div className="bg-blue-500 h-2 rounded" style={{ width: '90%' }} initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1 }}></motion.div>
              </div>
            </div>
            {/* Repeat for more skills */}
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-bold">Video Editing</h3>
            <div className="mt-4">
              <p>Adobe Premiere Pro</p>
              <div className="bg-gray-300 h-2 rounded">
                <motion.div className="bg-green-500 h-2 rounded" style={{ width: '80%' }} initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1 }}></motion.div>
              </div>
            </div>
            {/* Repeat for more skills */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
