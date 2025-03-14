import React from 'react';
import { motion } from 'framer-motion';

const Team_Card = (Props) => {
    let Wall = "https://i.postimg.cc/Y0kWkNgj/Card-Wll.jpg";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex justify-center"
        >
            {/* Card Container */}
            <div
                className="relative w-full max-w-sm bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${Wall})` }}
            >
                {/* Overlay for Better Visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>

                {/* Content */}
                <div className="relative z-10 p-6 text-center">
                    {/* Profile Image */}
                    <img
                        draggable="false"
                        src={Props.img}
                        alt={Props.name}
                        className="rounded-full w-32 h-32 mx-auto border-4 border-blue-500 shadow-md transition-transform duration-300 hover:scale-110"
                    />

                    {/* Name and Position */}
                    <div className="mt-6">
                        <h4 className="text-xl sm:text-2xl font-bold text-white">{Props.name}</h4>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base">{Props.post}</p>
                    </div>

                    {/* Social Icons */}
                    <ul className="flex justify-center space-x-4 mt-6">
                        <li>
                            <a
                                href={Props.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-square-facebook text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={Props.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-square-x-twitter text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={Props.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-linkedin text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={Props.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-square-whatsapp text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={Props.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-square-instagram text-2xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Team_Card;