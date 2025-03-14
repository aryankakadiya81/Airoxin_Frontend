import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Infra from '../../../Json_Files/Infrastructur.json';

const Infrastructure_OurFectory_Section = () => {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="py-10 bg-gray-900"
        >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
                >
                    {Infra.Our_Fectory.Title}
                    <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
                </motion.h2>

                

                {/* Image Gallery */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
                >
                    {Infra.Our_Fectory.Fectorty_Photos_Data.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.5 }}
                            className="relative group cursor-pointer"
                        >
                            {/* Thumbnail */}
                            <motion.img
                                src={img.Image}
                                alt={img.alt}
                                className="w-full h-80 object-cover rounded-3xl shadow-lg"
                            />

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </motion.section>
    );
};

export default Infrastructure_OurFectory_Section;