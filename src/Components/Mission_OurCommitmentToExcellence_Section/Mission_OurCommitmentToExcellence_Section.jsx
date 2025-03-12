import React,{useState} from 'react';
import { motion } from 'framer-motion';
import Datas from "../../Json_Files/Vision_Mission_Page.json"

const Mission_OurCommitmentToExcellence_Section = () => {

    let [Data,SetData] = useState(Datas.Mission_Page.Our_Commitment_To_Excellence) 
    // const commitments = [
    //     {
    //         title: 'Exceptional Quality',
    //         description:
    //             'Every product undergoes rigorous testing to ensure it meets the highest standards of durability, safety, and sustainability.',
    //         icon: '🏆'
    //     },
    //     {
    //         title: 'Personalized Support',
    //         description:
    //             'Our team is dedicated to providing tailored solutions and exceptional customer service to meet your unique needs.',
    //         icon: '🤝'
    //     },
    //     {
    //         title: 'Timely Delivery',
    //         description:
    //             'We prioritize efficiency and reliability to ensure your orders are delivered on time, every time.',
    //         icon: '⏱️'
    //     },
    //     {
    //         title: 'Innovative Solutions',
    //         description:
    //             'We continuously innovate to provide cutting-edge, eco-friendly products that address modern challenges.',
    //         icon: '💡'
    //     }
    // ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-10 bg-gray-900"
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
                    <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-56 mx-auto rounded-full" />
                </motion.h2>
                {/* 🌟Our Commitment to Excellence🌟 */}
                {/* Introduction Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20 text-center"
                >
                    <p className="text-lg md:mx-20 sm:text-xl text-gray-400 leading-relaxed">
                    {Data.Description}
                    </p>
                </motion.div>

                {/* Commitments Grid */}
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {Data.Commitments.map((commitment, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-lg text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Icon Animation */}
                            <motion.span
                                className="text-4xl text-green-500 block mb-4"
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {commitment.Icon}
                            </motion.span>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                {commitment.Title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400">{commitment.Description}</p>
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
                        Experience Excellence Today 🌿
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8">
                        Partner with us to experience unparalleled quality, innovation, and
                        sustainability in every product.
                    </p>
                    <motion.button
                        className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-8 rounded-full font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div> */}
            </div>
        </motion.section>
    );
};

export default Mission_OurCommitmentToExcellence_Section;