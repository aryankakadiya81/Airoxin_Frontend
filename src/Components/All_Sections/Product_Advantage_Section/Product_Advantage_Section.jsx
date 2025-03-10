import { motion } from 'framer-motion';
import featuresData from '../../../Json_Files/All_Section_Details.json';

const Product_Advantage_Section = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="py-16 bg-gray-900"
        >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
                >
                    {featuresData.Product_Advantage_Section.Title}
                    <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
                </motion.h2>

                {/* Features Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
                >
                    {featuresData.Product_Advantage_Section.Data.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.4 }}
                            className="bg-gray-800/90 rounded-2xl p-4 text-center backdrop-blur-sm"
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Icon */}
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-3xl sm:text-4xl text-green-500 mb-3 block"
                            >
                                {feature.emoji}
                            </motion.span>

                            {/* Title */}
                            <motion.h3
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-lg sm:text-xl font-semibold text-white mb-2"
                            >
                                {feature.title}
                            </motion.h3>

                            {/* Description */}
                            {/* <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="text-xs sm:text-sm text-gray-400"
                            >
                                {feature.description}
                            </motion.p> */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Product_Advantage_Section;