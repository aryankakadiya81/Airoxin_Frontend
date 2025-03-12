import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Datas from '../../Json_Files/Vision_Mission_Page.json'
import 'react-toastify/dist/ReactToastify.css';



const Mission_Hero_Section = () => {
    let [Data, SetData] = useState(Datas.Mission_Page);
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-20 pb-10 bg-gray-900"
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

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20 text-center"
                >
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed md:mx-20">
                        {Datas.Mission_Page.Paragraph}
                    </p>
                </motion.div>

                {/* Mission Highlights */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {
                        Data.Cards_Data.map((ele, ind) => {
                            return (
                                <motion.div
                                    key={ind}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-gray-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-lg text-center"
                                >
                                    <motion.span
                                        className="text-4xl text-green-500 block mb-4"
                                        animate={{ rotate: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        {ele.Emoji}
                                    </motion.span>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                        {ele.Title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {ele.Paragraph}
                                    </p>
                                </motion.div>)

                        })
                    }



                </motion.div>
            </div>
        </motion.section>
    )
}

export default Mission_Hero_Section
