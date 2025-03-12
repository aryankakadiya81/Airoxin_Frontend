import React from 'react';
import { motion } from 'framer-motion';

const VisionPage = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-gray-900"
        >
            {/* Section Title */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl text-center text-white mb-16 relative"
                >
                    Our Vision for a Sustainable Future 🌍
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto"
                    />
                </motion.h2>

                {/* Company Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20 text-center"
                >
                    <h3 className="text-3xl sm:text-4xl text-white font-semibold mb-6">
                        About Us 🌱
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                        We are a leading manufacturer and exporter of eco-friendly bagasse
                        tableware products. Our mission is to replace single-use plastics with
                        sustainable alternatives made from sugarcane bagasse, a renewable and
                        biodegradable resource. With a focus on quality, innovation, and
                        environmental responsibility, we aim to make a positive impact on the
                        planet.
                    </p>
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
                >
                    {/* Left Column - Vision Statement */}
                    <motion.div
                        className="space-y-6"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-2xl sm:text-3xl text-white font-semibold">
                            Our Vision 🌿
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Our Vision Is To Create A World Where Every Table Is Set With Sustainable, Eco-friendly Tableware. By Leveraging The Power Of Nature, We Strive To Eliminate Plastic Waste And Promote A Circular Economy. We Envision A Future Where Businesses And Consumers Alike Prioritize Sustainability Without Compromising On Quality Or Convenience.
                        </p>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">🌱</span> Replace single-use plastics
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">🌍</span> Promote zero-waste solutions
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">💧</span> Conserve natural resources
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right Column - Vision Image */}
                    <motion.div
                        className="relative overflow-hidden rounded-3xl"
                        initial={{ scale: 1.2, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img
                            src="https://res.cloudinary.com/dtnqlv91f/image/upload/v1741763305/General/wfzxnqcysbkqwkxekgin.png"
                            alt="Eco-friendly Vision"
                            className="w-full h-full object-cover"
                        />
                        <motion.div
                            className="absolute inset-0 bg-black/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        />
                    </motion.div>
                </motion.div>

                {/* Export Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-20 text-center"
                >
                    <h3 className="text-3xl sm:text-4xl text-white font-semibold mb-6">
                        Our Export Vision 🌐
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                        As a global leader in eco-friendly tableware, we are committed to
                        expanding our reach across international markets. Our export vision is
                        to provide sustainable solutions to businesses worldwide, helping them
                        meet their environmental goals while maintaining high standards of
                        quality and affordability.
                    </p>
                </motion.div>

                {/* Growth Sections */}
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
                >
                    {/* Current Growth */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-lg text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-4">
                            Current Growth 📈
                        </h3>
                        <p className="text-gray-400">
                            Over the past year, we have expanded our production capacity by 40%,
                            established partnerships with distributors in 15+ countries, and
                            achieved a 30% increase in revenue. Our products are now available in
                            major markets across Europe, North America, and Asia.
                        </p>
                    </motion.div>

                    {/* Future Growth */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-lg text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-4">
                            Future Growth 🚀
                        </h3>
                        <p className="text-gray-400">
                            In the next five years, we aim to double our production capacity,
                            enter emerging markets in Africa and South America, and launch new
                            product lines such as compostable cutlery and packaging solutions.
                            Our goal is to become the most trusted name in sustainable tableware
                            globally.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Market Position */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <h3 className="text-3xl sm:text-4xl text-white font-semibold mb-6">
                        Our Position in the Market 🏆
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                        Today, we are one of the top three exporters of bagasse tableware in
                        the world. Our commitment to quality, innovation, and sustainability
                        has earned us recognition from industry leaders and environmental
                        organizations. We are proud to be at the forefront of the green
                        revolution, setting new standards for eco-friendly products.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default VisionPage;