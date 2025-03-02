import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Global } from '../../App';
import ProductData from '../../Json_Files/Product_Page.json';
import Seo_Data from '../../Json_Files/SEO_Meta_Keyword.json';
import Helmet_Jsx from '../../Helmet_Jsx';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional: For navigation buttons
import 'swiper/css/pagination'; // Optional: For pagination
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import Vid1 from "../../Assets/Vedio/Vid1.mp4";


const Product = () => {
    const navigate = useNavigate();
    const { Categorys, SubCategorys, Selected_Products } = useContext(Global);
    const [Category] = Categorys;
    const [SubCategory] = SubCategorys;
    const [Selected_Product] = Selected_Products;

    const KeySkip = ['id', 'Table_Name'];

    // State to manage full-screen slider visibility
    const [isFullScreenSliderOpen, setIsFullScreenSliderOpen] = useState(false);
    const [initialSlideIndex, setInitialSlideIndex] = useState(0);

    // State to manage lightbox visibility
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Function to open the lightbox
    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setIsLightboxOpen(true);
    };

    // Function to close the lightbox
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };


    return (
        <div className="relative overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="block fixed top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={Vid1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for Better Readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            {/* Main Content */}
            <div className="relative z-20">
                <section className=" text-white py-16">
                    {/* SEO Meta Tags */}
                    <Helmet_Jsx Title={Seo_Data.Productpage.Title} Desc={Seo_Data.Productpage.Description}></Helmet_Jsx>
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-500"
                    >
                        {Selected_Product.Product_Name}
                    </motion.h1>
                    {/* Container */}
                    <div className="max-w-[1920px] mx-auto lg:px-10">
                        {/* Back Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <button
                                onClick={() => {
                                    navigate(-1);
                                    window.scrollTo(0, 0);
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ms-10"
                            >
                                <i className="bi bi-arrow-left"></i>
                                Back
                            </button>
                        </motion.div>



                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-5">
                            {/* Left Column: Swiper Slider for Images */}
                            <div className="space-y-4">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    className="rounded-lg lg:h-[750px] h-full shadow-lg overflow-hidden block"
                                >
                                    {Selected_Product.Images.map((el, index) => (
                                        <SwiperSlide key={index}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                                onClick={() => openLightbox(index)}
                                            >
                                                <img
                                                    src={el}
                                                    draggable="false"
                                                    alt={`Product ${index}`}
                                                    className="w-full 2xl:h-[750px] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer block"
                                                />
                                            </motion.div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Right Column: Tables */}
                            <div className="space-y-6">
                                {Selected_Product.Tables.map((obj) => (
                                    <motion.table
                                        key={obj.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full border-collapse border border-gray-700 rounded-lg overflow-hidden"
                                    >
                                        <div className="bg-gray-800 text-white text-center py-3 rounded-t-lg">
                                            <h3 className="text-xl font-semibold">{obj.Table_Name}</h3>
                                        </div>
                                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                                            {Object.keys(obj).map((key, index) => {
                                                if (!KeySkip.includes(key)) {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="py-3 px-4 text-left">{key}</td>
                                                            <td className="py-3 px-3 text-left">
                                                                {obj[key].map((item, idx) => (
                                                                    <div key={idx} className="flex items-center gap-2">
                                                                        <i className="bi bi-arrow-right text-blue-500"></i>
                                                                        <span>{item}</span>
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </tbody>
                                    </motion.table>
                                ))}
                            </div>
                        </div>

                        {/* Lightbox for Full-Screen Images */}
                        {isLightboxOpen && (
                            <Lightbox
                                slides={Selected_Product.Images.map((image) => ({ src: image }))}
                                open={isLightboxOpen}
                                index={selectedImageIndex}
                                close={closeLightbox}
                                animation={{ fade: 300, swipe: 500 }} // Smooth animations
                                controller={{ closeOnBackdropClick: true }} // Close on clicking outside
                            />
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Product;



// // {
// //     "id": "02",
// //     "Product_Name": "Polo Nack T-shirt",
// //     "SubCategory_Name": "Tshirts",
// //     "Category_Name": "Readymade Garments",
// //     "Thumbnail_Image": "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
// //     "Images": [
// //         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
// //         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
// //         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
// //         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg"
// //     ],
// //     "Tables": [
// //         {
// //             "id": "01",
// //             "Table_Name": "General Information",
// //             "Packaging": "Pastic Bag",
// //             "Size of Packing": "20cm * 20cm * 10cm",
// //             "Sleeve": "Full"
// //         },
// //         {
// //             "id": "02",
// //             "Table_Name": "Pricing",
// //             "1 - 34 pieces": "$5.90",
// //             "35 - 599 pieces": "$5.70"
// //         }
// //     ]
// // }
