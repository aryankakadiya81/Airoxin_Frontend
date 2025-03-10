import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Team_Page from '../../../Json_Files/Team_Page.json';
// import Photo from '../../Assets/Team Photo/ARYAN.jpg';
// import Team_Card from './Team_Card';

const Team_Section = () => {
    let Bbg = "https://i.postimg.cc/qMJ35L45/Earth-Wall.jpg";
    const [Team, setTeam] = useState(Team_Page);
    const teamMembers = [
        { id: 1, name: 'Sarah Green', role: 'CEO & Founder', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0bSwA5qUB7ukMdtoDuzaE6JjyweyxbXiaA&s' },
        { id: 2, name: 'James Leaf', role: 'Sustainability Lead', image: 'https://static.vecteezy.com/system/resources/thumbnails/026/408/485/small/man-lifestyle-portrait-hipster-serious-t-shirt-isolated-person-white-background-american-smile-confident-fashion-photo.jpg' },
        { id: 3, name: 'Lina Bloom', role: 'Eco Designer', image: 'https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=' }
    ];
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-gray-900 overflow-hidden"
        >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
                >
                    {`Meet Our Green Team`}
                    <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
                </motion.h2>
                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-20"
                >
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
                                    delayChildren: 0.5
                                }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    >
                        {Team_Page.map((member, ind) => (
                            <motion.div
                                key={ind}
                                variants={{
                                    hidden: { x: 50, opacity: 0 },
                                    visible: { x: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-800 rounded-3xl overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className='flex justify-center m-1'>
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-[500px] rounded-3xl"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl text-white font-semibold">
                                        {member.name}
                                    </h4>
                                    <p className="text-green-500 text-sm uppercase tracking-wider my-2">
                                        {member.post}
                                    </p>
                                    <p className="text-gray-300 text-sm uppercase tracking-wider">
                                        {member.place}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Team_Section;