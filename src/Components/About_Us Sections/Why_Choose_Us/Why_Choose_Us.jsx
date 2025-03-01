import React from 'react';
import Details from '../../../Json_Files/All_Section_Details.json';
import { motion } from 'framer-motion';

const Why_Choose_Us = () => {
    return (
        <section className="text-white py-16">
            {/* Container */}
            <div className="max-w-[1920px] mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold">{Details.Why_Choose_Us_Section.Title}</h1>
                </motion.div>

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
                            <div className="flex-shrink-0 text-blue-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    fill="currentColor"
                                    className="bi bi-check-circle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
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