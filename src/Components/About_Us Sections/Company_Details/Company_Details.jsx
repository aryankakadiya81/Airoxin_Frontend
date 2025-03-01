import React from 'react';
import Details from '../../../Json_Files/About_Company_Details.json';
import "./Company_Details.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional: For navigation buttons
import 'swiper/css/pagination'; // Optional: For pagination
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Company_Details = () => {
    return (
        <div className=" py-16 px-7">
            {/* Swiper Slider */}
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={80}
                slidesPerView={2} // Default for laptops
                breakpoints={{
                    240: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 }, // Tablets
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3 } // Laptops
                }}
                centeredSlides={true} // Center the active card
                loop={true} // Infinite loop
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3 seconds
                navigation // Navigation arrows
                // pagination={{ clickable: true }} // Pagination dots
                pagination={false} // Pagination dots

                className="rounded-2xl max-w-[1920px]"
            >
                {Details.map((el) => (
                    <SwiperSlide key={el.id}>
                        <div
                            className="relative rounded-2xl shadow-lg overflow-hidden cardddd text-white p-4 w-full h-full"
                            style={{
                                backgroundColor: el.Background_Color,
                                color: el.Font_Color,
                                border:`1px solid ${el.Background_Color}`
                            }}
                        >
                            {/* Dome for Icon */}

                            <div className='flex justify-center '> 
                                <div className="w-24 h-24 bg-[#3b82f6] rounded-full flex items-center justify-center">
                                {/* D3D9D4 */}
                                    <i
                                        className={el.Icon}
                                        style={{
                                            fontSize: "3rem",
                                            color: el.Icon_Color || "#D3D9D4",
                                        }}
                                    ></i>
                                </div>
                            </div>


                            {/* Card Content */}
                            <div className="mt-8 text-left space-y-4">
                                <h3 className="text-xl font-bold">{el.Title}</h3>
                                <ul className="space-y-2">
                                    {el.Subtitles.map((subtitle, index) => (
                                        <li key={index} className="flex items-center justify-start text-gray-300">
                                            <i className="bi bi-dash me-2"></i>
                                            {subtitle}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Company_Details;