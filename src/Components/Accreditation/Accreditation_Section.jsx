import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import default styles for the lightbox
import Cdata from '../../Json_Files/Cirtificate.json';

const Accreditation_Section = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

    // Extract image URLs and names for the lightbox
    const images = Cdata.map((el) => ({
        src: el.img,
        alt: el.Name,
        title: el.Name,
        description: el.Name, // Optional: Add descriptions if needed
    }));

    return (
        <section className=" text-white py-16">
            {/* Container */}
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold">Our Accreditations</h1>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Cdata.map((el, index) => (
                        <motion.div
                            key={el.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            {/* Image */}
                            <img
                                src={el.img}
                                alt={el.Name}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Title */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-bold">{el.Name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Image Viewer Popup */}
                {selectedImageIndex !== -1 && (
                    <Lightbox
                        slides={images}
                        open={selectedImageIndex !== -1}
                        index={selectedImageIndex}
                        close={() => setSelectedImageIndex(-1)}
                        animation={{ fade: 300, swipe: 500 }} // Smooth animations
                        controller={{ closeOnBackdropClick: true }} // Close on clicking outside
                    />
                )}
            </div>
        </section>
    );
};

export default Accreditation_Section;