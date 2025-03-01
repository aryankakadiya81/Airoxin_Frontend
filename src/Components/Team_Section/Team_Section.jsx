import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Team_Page from '../../Json_Files/Team_Page.json';
import Photo from '../../Assets/Team Photo/ARYAN.jpg';
import Team_Card from './Team_Card';

const Team_Section = () => {
    let Bbg = "https://i.postimg.cc/qMJ35L45/Earth-Wall.jpg";
    const [Team, setTeam] = useState(Team_Page);

    return (
        <section
            className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-12 md:py-20 lg:py-32"
            style={{ backgroundImage: `url(${Bbg})` }}
        >
            {/* Overlay for Better Visibility */}
            <div className="absolute inset-0 bg-[#1E2B33] opacity-80"></div>

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Team</span>
                    </h2>
                </motion.div>

                {/* Team Cards */}
                <div
                    className={`grid gap-6 justify-items-center ${
                        Team.length === 1 ? 'grid-cols-1' :
                        Team.length === 2 ? 'grid-cols-2' :
                        'grid-cols-1 sm:grid-cols-1 lg:grid-cols-3'
                    }`}
                >
                    {Team.map((el) => (
                        <motion.div
                            key={el.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: el.id * 0.1 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <Team_Card
                                img={el.img}
                                name={el.name}
                                post={el.post}
                                facebook={el.facebook}
                                twitter={el.twitter}
                                linkedin={el.linkedin}
                                whatsapp={el.whatsapp}
                                instagram={el.instagram}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team_Section;