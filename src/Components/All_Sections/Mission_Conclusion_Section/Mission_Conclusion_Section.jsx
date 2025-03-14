import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Datas from '../../../Json_Files/Vision_Mission_Page.json';
import { Global } from '../../../App';


const Mission_Conclusion_Section = () => {
    let Navigate = useNavigate();
    let { Loader } = useContext(Global);
    let [IsLoading, setIsLoading] = Loader;
    let [Data, SetData] = useState(Datas.Mission_Page);
    const scrollToTopAbout = () => {
        window.scrollTo(0, 0);
        Navigate("/Contact");
        setIsLoading(true);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-20 pb-0 text-center"
            >
                <h3 className="text-3xl sm:text-4xl text-white font-semibold mb-6">
                    {Data.Conclusion.Base_Title}
                </h3>
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 lg:mx-20 md:mx-auto">
                    {Data.Conclusion.Base_Desription}
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTopAbout}
                    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg text-lg transition duration-200"
                >
                    Join Our Green Journey
                </motion.button>

            </motion.div>
        </motion.section>
    )
}

export default Mission_Conclusion_Section
