import React from 'react';
import { motion } from 'framer-motion';
import Details from "../../../Json_Files/All_Section_Details.json";
import Contact from "../../../Json_Files/Company_Contact_Page.json"
import Bbg from '../../../Assets/Service/S_B2.jpeg';



{/* <section className="py-5 py-xl-8" style={{ backgroundImage: `url(${Bbg})`, backgroundAttachment: `fixed`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}> */ }

const Consign_Section = () => {
    
    return (
        <>
            

            <section
                // className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#124E66] via-[#192F40] to-[#212A31] relative overflow-hidden"

                className="py-28 h-auto bg-fixed bg-center w-auto bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Bbg})` }}
            >
                {/* Overlay for Better Visibility */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-white"
                        >
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#748D92] to-[#124E66]">
                                {Contact.name}
                            </h3>
                            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
                                {Details.Consign_Section.Paragraph}
                            </h4>
                        </motion.div>

                        {/* Right Column: Boxes */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center lg:justify-items-end">



                            {Details.Consign_Section.Box.map((el) => (
                                <motion.div
                                    key={el.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="w-full max-w-sm"
                                >
                                    <div className="bg-[#1E2B33] bg-opacity-80 border border-[#2C373F] rounded-lg shadow-lg p-4 sm:p-6 text-center backdrop-blur-md">
                                        <div
                                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#124E66] to-[#1A3D58] flex items-center justify-center mx-auto mb-3 sm:mb-4"
                                            aria-hidden="true"
                                        >
                                            <i className={`${el.Icon} text-lg sm:text-3xl text-white`}></i>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#748D92] to-[#124E66]">
                                            {el.Count}
                                        </h3>
                                        <p className="text-sm sm:text-lg text-gray-300">{el.Name}</p>
                                    </div>
                                </motion.div>
                            ))}



                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Consign_Section
