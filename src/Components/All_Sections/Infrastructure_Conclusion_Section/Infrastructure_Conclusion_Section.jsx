import React, { useState, useContext } from 'react';
import { Global } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Infra from '../../../Json_Files/Infrastructur.json';

const Infrastructure_Conclusion_Section = () => {
    let Navigate = useNavigate();
    let { Loader } = useContext(Global);
    let [IsLoading, setIsLoading] = Loader;
    const scrollToTopAbout = () => {
      window.scrollTo(0, 0);
      Navigate("/Contact");
      setIsLoading(true);
    }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="pb-20 bg-gray-900"
    >
      {/* Section Title */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
          >
            {Infra.Infrastructure_Conclusion.Title}
            <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
          </motion.h2>
          <p className="text-lg sm:text-xl lg:mx-20 md:mx-auto text-gray-400 leading-relaxed mb-8">
            {Infra.Infrastructure_Conclusion.Paragraph_2}
          </p>
          <motion.button
          onClick={scrollToTopAbout}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-8 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </motion.div>
    </div>
    </motion.section>
  )
}

export default Infrastructure_Conclusion_Section
