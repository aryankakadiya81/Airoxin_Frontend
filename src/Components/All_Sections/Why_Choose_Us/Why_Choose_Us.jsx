import React from 'react';
import Details from '../../../Json_Files/All_Section_Details.json';
import { motion } from 'framer-motion';

const Why_Choose_Us = () => {
    return (
        <section className="text-white py-16">
            {/* Container */}
            <div className="max-w-[1920px] mx-auto px-4">
                {/* Section Title */}
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
                >
                    {Details.Why_Choose_Us_Section.Title}
                    <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
                </motion.h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Details.Why_Choose_Us_Section.Features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0 text-[#22c55e]">
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    fill="currentColor"
                                    className="bi bi-check-circle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg> */}

                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6667 9.2333V9.99997C18.6656 11.797 18.0838 13.5455 17.0078 14.9848C15.9318 16.4241 14.4194 17.477 12.6961 17.9866C10.9729 18.4961 9.13105 18.4349 7.44539 17.8121C5.75973 17.1894 4.32055 16.0384 3.34247 14.5309C2.36439 13.0233 1.89983 11.24 2.01806 9.4469C2.1363 7.65377 2.83101 5.94691 3.99857 4.58086C5.16613 3.21482 6.74399 2.26279 8.49683 1.86676C10.2497 1.47073 12.0836 1.65192 13.725 2.3833" stroke="#009035" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M18.6666 3.33325L10.3333 11.6749L7.83325 9.17492" stroke="#009035" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </div>

                            {/* Feature Text */}
                            <div>
                                <p className="text-lg font-medium">{feature}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why_Choose_Us;