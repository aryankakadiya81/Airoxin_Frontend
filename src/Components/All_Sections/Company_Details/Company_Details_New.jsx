import React from 'react';
import { motion } from 'framer-motion';
import Details from '../../../Json_Files/About_Company_Details.json';
import "./Company_Details.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional: For navigation buttons
import 'swiper/css/pagination'; // Optional: For pagination
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Company_Details_New = () => {

    return (
        <div className="py-16 px-7">
            {/* Swiper Slider */}
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={2} // Default for laptops
                breakpoints={{
                    240: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 }, // Tablets
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 } // Laptops
                }}
                centeredSlides={true} // Center the active card
                loop={true} // Infinite loop
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3 seconds
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }} // Navigation arrows
                // pagination={{ clickable: true }} // Pagination dots
                pagination={false}
                className="rounded-2xl max-w-[1920px]"
            >

                {Details.map((el, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                            style={{ backgroundColor: `${el.bgColor}` }}
                            className={`rounded-3xl p-6  backdrop-blur-lg text-left shadow-lg`}
                        >
                            {/* Main Icon */}
                            <div
                                className={`flex items-center justify-center w-16 h-16 rounded-full mb-6`}
                                style={{ backgroundColor: `${el.iconBg}` }}
                            >
                                <i

                                    className={`${el.icon} text-3xl text-white`}
                                ></i>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                                {el.Title}
                            </h3>

                            {/* Subtitles */}
                            <ul className="space-y-2">
                                {el.Subtitles.map((subtitle, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center justify-start text-gray-300"
                                    >
                                        <i className="bi bi-check-circle-fill me-2 text-green-500"></i>
                                        {subtitle}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </SwiperSlide>
                ))}
                {/* Custom Navigation Buttons */}

            </Swiper>

            <div className="flex justify-between items-center mt-4 font-extraboldc">
                {/* Prev Button (Hidden on sm and xs screens) */}
                <button className="custom-prev bg-green-700 hover:bg-green-600 font-extrabold text-3xl md:text-xl text-white px-4 py-2 rounded transition-colors">
                    ⟵
                </button>

                {/* Next Button (Hidden on sm and xs screens) */}
                <button className="custom-next bg-green-700 hover:bg-green-600 font-extrabold text-3xl md:text-xl text-white px-4 py-2 rounded transition-colors">
                    ⟶
                </button>

            </div>


        </div>
    );
};

export default Company_Details_New;


// Orange
// bgColor: #f9731620 (Orange with 20% opacity)
// iconBg: #f97316 (Solid orange)
// Cyan
// bgColor: #06b6d420 (Cyan with 20% opacity)
// iconBg: #06b6d4 (Solid cyan)
// Red
// bgColor: #ef444420 (Red with 20% opacity)
// iconBg: #ef4444 (Solid red)
// Lime
// bgColor: #84cc1620 (Lime with 20% opacity)
// iconBg: #84cc16 (Solid lime)
// Indigo
// bgColor: #4f46e520 (Indigo with 20% opacity)
// iconBg: #4f46e5 (Solid indigo)
// Pink
// bgColor: #ec489920 (Pink with 20% opacity)
// iconBg: #ec4899 (Solid pink)
// Amber
// bgColor: #f59e0b20 (Amber with 20% opacity)
// iconBg: #f59e0b (Solid amber)
// "bgColor": "#16a34a20",
// "iconBg": "#16a34a"
// "bgColor": "#2563eb20",
// "iconBg": "#2563eb"
// "bgColor": "#facc1520",
// "iconBg": "#facc15"
// "bgColor": "#a855f720",
// "iconBg": "#a855f7"
// "bgColor": "#14b8a620",
// "iconBg": "#14b8a6"