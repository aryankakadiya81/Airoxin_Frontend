import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Error_Page = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-16">
            {/* Container */}
            <div className="container mx-auto px-4">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    {/* Error Code */}
                    <h2 className="flex justify-center items-center gap-2 mb-8 text-7xl sm:text-8xl font-bold text-blue-500">
                        <span>4</span>
                        <i className="bi bi-exclamation-circle-fill text-red-500 text-6xl sm:text-7xl"></i>
                        <span className="flip-horizontal">4</span>
                    </h2>

                    {/* Heading */}
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl font-bold mb-4 text-gray-100"
                    >
                        Oops! You're lost.
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl text-gray-400 mb-8"
                    >
                        The page you are looking for was not found.
                    </motion.p>

                    {/* Back to Home Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                        >
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Error_Page;