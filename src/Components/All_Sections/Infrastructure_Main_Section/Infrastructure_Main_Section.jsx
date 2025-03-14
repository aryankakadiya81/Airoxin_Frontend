import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Infra from '../../../Json_Files/Infrastructur.json';

const InfrastructurePage = () => {
  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-900"
    >
      {/* Section Title */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl sm:text-5xl font-bold text-white mb-16 relative"
        >
          {Infra.Main_Infrastructure_Section.Title}
          <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
        </motion.h2>

        {/* Sections Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Infra.Main_Infrastructure_Section.Cars_Data.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl p-6 sm:p-8 backdrop-blur-lg text-left shadow-lg`}
              style={{ backgroundColor: `${section.Color}20` }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Main Icon */}
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full mb-6`}
                style={{ backgroundColor: section.Color }}
              >
                <i
                  className={`${section.Icon} text-3xl text-white`}
                ></i>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                {section.Title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">{section.Description}</p>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default InfrastructurePage;