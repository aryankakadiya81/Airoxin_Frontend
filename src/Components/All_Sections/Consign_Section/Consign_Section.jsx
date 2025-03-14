import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import Details from "../../../Json_Files/All_Section_Details.json";
import Contact from "../../../Json_Files/Company_Contact_Page.json"

const Consign_Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      className="py-28 bg-gray-900"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
        >
          {Details.Consign_Section.Main_Title}
          <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {/* Left Column: Text Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#55A630] to-[#2D6A4F] drop-shadow-lg"
            >
              {Details.Consign_Section.Title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg sm:text-xl md:text-2xl text-[#C1E1C1] leading-relaxed"
            >
              {Details.Consign_Section.Paragraph}
            </motion.p>
          </motion.div>

          {/* Right Column: Statistics Boxes */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {Details.Consign_Section.Box.map((el) => (
              <motion.div
                key={el.id}
                className="p-6 bg-[#2D3D30] bg-opacity-80 border border-[#4A5D50] rounded-2xl 
                           shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon Container */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#55A630] to-[#2D6A4F] 
                               flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <i className={`${el.Icon} text-3xl text-white drop-shadow-md`}></i>
                  </motion.div>

                  {/* Animated Counter */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 10,
                      delay: 0.3
                    }}
                  >
                    <CountUp
                      start={isInView ? 0 : null}
                      end={el.Count}
                      duration={3}
                      separator=","
                      className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text 
                                 bg-gradient-to-r from-[#C1E1C1] to-[#8AA62F]"
                    />
                    <span className="text-3xl text-[#D4EDD4]">+</span>
                  </motion.div>

                  {/* Label */}
                  <p className="text-base sm:text-lg text-[#D4EDD4] uppercase tracking-wider font-medium">
                    {el.Name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Consign_Section;