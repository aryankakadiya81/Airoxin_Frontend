import React from 'react';
import { motion } from 'framer-motion';

const Full_Screen_Image_Section = (Props) => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="py-10 bg-gray-900"
            >
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-20 relative rounded-3xl overflow-hidden"
                    >
                        <img
                            src={Props.URL}
                            alt="Nature Background"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

export default Full_Screen_Image_Section;
