import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Datas from '../../../Json_Files/Vision_Mission_Page.json';
import { Global } from '../../../App';

const Vision_Conclusion_Section = () => {

  let Navigate = useNavigate();
  let { Loader } = useContext(Global);
  let [IsLoading, setIsLoading] = Loader;
  let [Data, SetData] = useState(Datas.Vision_Page.Vision_Conclusion);
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
      className="py-20 pb-0 bg-gray-900"
    >
      {/* Section Title */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
        >
          {Data.Title}

          <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-44 mx-auto rounded-full" />
        </motion.h2>

        {/* Conclusion Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 text-center"
        >
          <p className="text-lg lg:mx-20 md:mx-auto sm:text-xl text-gray-400 leading-relaxed">
            {Data.Description}
          </p>
          <p className="text-lg lg:mx-20 md:mx-auto sm:text-xl text-gray-400 leading-relaxed mt-4">
            {Data.Sub_Description}
          </p>
          <motion.button
          onClick={scrollToTopAbout}
            className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-8 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Vision_Conclusion_Section;