import { motion } from 'framer-motion';
import Data from '../../../Json_Files/Vision_Mission_Page.json';
import { Global } from '../../../App';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Vision_Mission_Section = () => {
    let Navigate = useNavigate();
    let { Loader } = useContext(Global);
    let [visionMissionData, setvisionMissionData] = useState(Data.Vision_and_Mission_Section);
    let [IsLoading, setIsLoading] = Loader;
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-gray-900 overflow-hidden"
        >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
                >
                    {visionMissionData.title}
                    <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
                </motion.h2>

                {/* Vision & Mission Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {/* Vision Card */}
                    <motion.div
                        variants={{
                            hidden: { x: -50, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800 rounded-3xl p-8 md:p-12"
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 10
                            }}
                            className="mb-6"
                        >
                            <motion.div
                                className='text-6xl text-center text-green-500 mb-2 block'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 10,
                                    delay: 0.3
                                }}
                            >
                                {visionMissionData.vision.iconPath}
                            </motion.div>

                        </motion.div>
                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-2xl sm:text-3xl text-white font-semibold mb-4 text-center"
                        >
                            {visionMissionData.vision.title}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-gray-400 text-lg text-center"
                        >
                            {`${visionMissionData.vision.description.slice(0, 390)}...`}
                        </motion.p>
                        <div className='flex justify-center my-4'>
                            <button
                                onClick={() => { Navigate("/Mission"); window.scrollTo(0, 0); setIsLoading(true); }}
                                className="flex items-center text-xl content-center gap-2 text-green-500 hover:text-green-600 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                                <motion.svg
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </motion.svg>
                            </button>

                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 50, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800 rounded-3xl p-8 md:p-12"
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 10
                            }}
                            className="mb-6"
                        >
                            <motion.div
                                className='text-6xl text-center text-green-500 mb-2 block'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 10,
                                    delay: 0.3
                                }}
                            >
                                {visionMissionData.mission.iconPath}
                            </motion.div>

                        </motion.div>
                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-2xl sm:text-3xl text-white font-semibold mb-4 text-center"
                        >
                            {visionMissionData.mission.title}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-gray-400 text-lg text-center"
                        >
                            {`${visionMissionData.mission.description.slice(0, 390)}...`}
                        </motion.p>
                        <div className='flex justify-center my-4'>
                            <button
                                onClick={() => { Navigate("/Mission"); window.scrollTo(0, 0); setIsLoading(true); }}
                                className="flex items-center text-xl content-center gap-2 text-green-500 hover:text-green-600 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                                <motion.svg
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </motion.svg>
                            </button>

                        </div>

                    </motion.div>
                </motion.div>

                {/* Core Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {visionMissionData.coreValues.map((value, i) => (
                        <motion.div
                            key={value.id}
                            className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 text-center"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 10,
                                    delay: 0.3 * i
                                }}
                                className="text-4xl text-green-500 mb-4 block"
                            >
                                {value.icon}
                            </motion.span>
                            <h4 className="text-xl text-white font-semibold mb-2">
                                {value.title}
                            </h4>
                            <p className="text-gray-400">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Vision_Mission_Section;