import React, { useContext, useState } from 'react';
import { Global } from '../../../App';
import { motion } from 'framer-motion';
// import Contact from '../../../Json_Files/Company_Contact_Page.json';
import Details from '../../../Json_Files/All_Section_Details.json';

// import Img1 from '../../../Assets/About/About_Us.jpeg';


import { useNavigate } from 'react-router-dom';

const About_Company = () => {

    let { Loader } = useContext(Global);
    let [IsLoading, setIsLoading] = Loader;

    let Navigate = useNavigate();
    const scrollToTopAbout = () => {
        window.scrollTo(0, 0);
        Navigate("/Contact");
        setIsLoading(true);
    }


    return (

        <section id="about" className="relative py-44 overflow-hidden h-auto bg-fixed bg-center w-auto bg-cover bg-no-repeat">
            {/* Unique Dark Background Corners */}
            {/* <div className="absolute top-0 left-0 w-48 h-48 bg-[#1E1E1E] rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#1E1E1E] rounded-full blur-3xl opacity-50"></div> */}


            {/* Dark Overlay for Better Visibility */}
            <div className="w-full h-full bg-black bg-opacity-70 z-10"></div>
            {/* Content Container */}
            <div className="max-w-[1920px] mx-auto px-4 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-8"
                >
                    About Our Company
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl py-10 sm:text-2xl 2xl:mx-64 xl:mx-64 text-center text-gray-300 leading-relaxed mx-auto mb-12"
                >
                    {Details.About_Company_Section.Paragraph}
                </motion.p>

                {/* Contact Now Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <button
                        className="px-8 py-4 bg-[#124E66] hover:bg-[#1A3D58] text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out"
                        onClick={scrollToTopAbout}
                    >
                        Contact Now
                    </button>
                </motion.div>
            </div>
        </section>


    );
}

export default About_Company;
