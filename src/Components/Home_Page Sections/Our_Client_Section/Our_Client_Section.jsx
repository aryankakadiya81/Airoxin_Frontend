import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Optional: For autoplay functionality
import { Autoplay } from 'swiper/modules';

const Our_Client_Section = () => {
    // Array of client/company logos with actual image URLs
    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", // Netflix
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Zee_Entertainment_Enterprises_logo.png", // Zee
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Skybags_logo.svg/1200px-Skybags_logo.svg.png", // Skybag
        "https://upload.wikimedia.org/wikipedia/commons/7/7f/Safari_Logo.png", // Safari
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sugar_Cosmetics_logo.png/640px-Sugar_Cosmetics_logo.png", // Sugar
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tata_Group_Logo.svg", // Tata
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adani_Enterprises_logo.svg/1200px-Adani_Enterprises_logo.svg.png", // Adani
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jio_Logo.svg/1200px-Jio_Logo.svg.png", // Jio
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cello_Worldwide_Logo.svg/1200px-Cello_Worldwide_Logo.svg.png", // Cello
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", // Tesla
    ];

    return (
        <section className="bg-gray-900 py-16">
            {/* Container */}
            <div className="container mx-auto px-4">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl font-bold text-center text-blue-500 mb-12"
                >
                    Trusted By Leading Companies
                </motion.h2>

                {/* Swiper Slider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView="auto" // Automatically adjusts to fit multiple logos
                        loop={true} // Enables infinite looping
                        autoplay={{
                            delay: 1, // Minimal delay for continuous sliding
                            disableOnInteraction: false,
                        }}
                        speed={2000} // Speed of the sliding animation (in milliseconds)
                        className="overflow-hidden"
                    >
                        {/* Duplicate the logos for infinite sliding effect */}
                        {[...logos, ...logos].map((logo, index) => (
                            <SwiperSlide key={index} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 mx-4">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={logo}
                                        alt={`Client Logo ${index}`}
                                        className="w-[200px] h-full object-contain rounded-lg shadow-lg bg-gray-800 p-2"
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default Our_Client_Section;