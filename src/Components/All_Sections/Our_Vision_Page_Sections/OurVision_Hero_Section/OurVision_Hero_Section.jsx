import React,{useState} from 'react';
import { motion } from 'framer-motion';
import JsData from '../../../../Json_Files/Vision_Mission_Page.json'

const OurVision_Hero_Section = () => {


    let [Data,SetData] = useState(JsData.Vision_Page.Vision_Page_Main_Data)
    
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
                        {/* At Airoxin International, our vision is to create a world where every table is set with sustainable, eco-friendly tableware, and every business embraces environmentally responsible practices as the norm. We aspire to be the global leader in replacing single-use plastics with innovative, biodegradable solutions made from renewable resources like sugarcane bagasse. */}
                        {Data.Description}
                    </p>
                </motion.div>

                {/* Vision Points Grid */}
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
                    {Data.VisionPoints.map((point, index) => (
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
                                className="text-4xl text-green-500 block mb-4"
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {point.Icon}
                            </motion.span>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                {point.Title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400">{point.Description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action Section */}
                {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl sm:text-4xl text-white font-semibold mb-6">
            Be Part of Our Vision 🌿
          </h3>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8">
            Join us in creating a sustainable future. Together, we can make the world a better place.
          </p>
          <motion.button
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-8 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </motion.div> */}
            </div>
        </motion.section>
    );
};

export default OurVision_Hero_Section;