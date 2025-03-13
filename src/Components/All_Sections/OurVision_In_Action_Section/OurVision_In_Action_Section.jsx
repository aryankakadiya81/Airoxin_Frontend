// OurVision_In_Action_Section

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Datas from '../../../Json_Files/Vision_Mission_Page.json';


const OurVision_In_Action_Section = () => {

  let [Data, SetData] = useState(Datas.Vision_Page.OurVision_In_Action);

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
          className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
        >
          {Data.Title}
          <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-40 mx-auto rounded-full" />
        </motion.h2>

        {/* Introduction Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 text-center"
        >
          <p className="text-lg lg:mx-20 md:mx-auto sm:text-xl text-gray-400 leading-relaxed">
            {Data.Description}
          </p>
        </motion.div>

        {/* Actions Grid */}
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
          {Data.Actions.map((action, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon Animation */}
              <motion.span
                className="text-5xl text-green-500 block mb-4"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {action.Icon}
              </motion.span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                {action.Title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">{action.Description}</p>
            </motion.div>
          ))}
        </motion.div>



      </div>
    </motion.section>
  );
};

export default OurVision_In_Action_Section;