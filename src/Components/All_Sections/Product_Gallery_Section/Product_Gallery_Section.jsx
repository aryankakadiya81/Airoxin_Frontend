import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import React, { useState } from 'react';
import manufacturingImages from '../../../Json_Files/Product_Gallery.json';

const Product_Gallery_Section = () => {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-gray-900"
        >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
                >
                    {manufacturingImages.Title}
                    <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
                </motion.h2>

                {/* Image Gallery */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                >
                    {manufacturingImages.Data.map((img, index) => (
                        <motion.div
                            key={img.id}
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.5 }}
                            className="relative group cursor-pointer"
                            onClick={() => {
                                setSelectedImage(index);
                                setOpenLightbox(true);
                            }}
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Thumbnail */}
                            <motion.img
                                src={img.Image}
                                alt={img.alt}
                                className="w-full object-cover rounded-3xl shadow-lg"
                            />

                            {/* Overlay */}
                            
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={manufacturingImages.Data.map(img => ({
                    src: img.Image,
                    alt: img.alt,
                    description: img.description
                }))}
                index={selectedImage}
                // plugins={['Zoom']}
                styles={{
                    container: { backgroundColor: '#1A1A1A' },
                    caption: { color: '#C1E1C1' }
                }}
            />
        </motion.section>
    );
};

export default Product_Gallery_Section;