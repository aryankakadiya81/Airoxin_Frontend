// import React, { useContext, useState } from 'react';
// import { Global } from '../../../App';
// import { motion } from 'framer-motion';
// import Details from '../../../Json_Files/All_Section_Details.json';
// import Img1 from '../../../Assets/About/About_Us.jpeg';
// // import Contact from '../../../Json_Files/Company_Contact_Page.json';
// // import Img from '../../../Assets/Wallpaper/Team1.svg';


// import { useNavigate } from 'react-router-dom';

// const About_Company = () => {


//     let { Loader } = useContext(Global);
//     let [IsLoading, setIsLoading] = Loader;

//     let Navigate = useNavigate();
//     const scrollToTopAbout = () => {
//         window.scrollTo(0, 0);
//         Navigate("/Contact");
//         setIsLoading(true);
//     }


//     return (

//         <section id="about" className="relative py-44 bg-[#192F40] overflow-hidden h-auto bg-fixed bg-center w-auto bg-cover bg-no-repeat block" style={{ backgroundImage: `url(${Img1})` }}>
//             {/* Unique Dark Background Corners */}
//             {/* <div className="absolute top-0 left-0 w-48 h-48 bg-[#1E1E1E] rounded-full blur-3xl opacity-50"></div>
//             <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#1E1E1E] rounded-full blur-3xl opacity-50"></div> */}


//             {/* Dark Overlay for Better Visibility */}
//             <div className="w-full h-full bg-black bg-opacity-70 z-10"></div>
//             {/* Content Container */}
//             <div className="max-w-[1920px] mx-auto px-4 relative z-10">
//                 {/* Title */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-8"
//                 >
//                     About Our Company
//                 </motion.h2>

//                 {/* Paragraph */}
//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="text-xl py-10 sm:text-2xl 2xl:mx-64 xl:mx-64 text-center text-gray-300 leading-relaxed mx-auto mb-12"
//                 >
//                     {Details.About_Company_Section.Paragraph}
//                 </motion.p>

//                 {/* Contact Now Button */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="flex justify-center"
//                 >
//                     <button
//                         onClick={scrollToTopAbout}
//                         className="px-8 py-4 bg-[#124E66] hover:bg-[#1A3D58] text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out"
//                     >
//                         Contact Now
//                     </button>
//                 </motion.div>
//             </div>
//         </section>


//     );
// }

// export default About_Company;

import { useRef, useState, useContext } from 'react';
import { motion, useInView } from 'framer-motion';
// import Process from '../../../Assets/About/Bagasse_Process.png'
import CountUp from 'react-countup';
import Details from '../../../Json_Files/All_Section_Details.json';
import { Global } from '../../../App';
import { useNavigate } from 'react-router-dom';


const About_Company = () => {

  let [Data, setData] = useState(Details.About_Company_Section);
    let { Loader } = useContext(Global);
    let [IsLoading, setIsLoading] = Loader;

    let Navigate = useNavigate();
    const scrollToTopAbout = () => {
        window.scrollTo(0, 0);
        Navigate("/Contact");
        setIsLoading(true);
    }




  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const stats = [
    { id: 1, value: 350000, label: 'Annual Production in KG' },
    { id: 2, value: 80, label: 'Workers & Professionals' },
    { id: 3, value: 18, label: 'Exported Countries' },
    { id: 4, value: 90000, label: 'SqFt Area' }
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
        {/* Section Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
        >
          {Data.Title}
          <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
        </motion.h2>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <motion.img
              src={Details.About_Company_Section.Image}
              alt="Eco-friendly process"
              className="rounded-3xl w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div>
            <motion.h3
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl text-white font-semibold mb-6"
            >
              {/* Pioneering Sustainable Solutions Since 2012 */}
              {/* Disposable products are growing in popularity due to their portability and affordability. */}
              {Data.Small_Paragraph}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 text-lg mb-8"
            >
              {/* We're dedicated to creating innovative environmental solutions through cutting-edge technology and sustainable practices. Our mission is to empower businesses and individuals to reduce their carbon footprint while maintaining modern convenience. */}

              {/* We prioritize a customer-centric approach, which has helped us fully satisfy our clients with high-quality products. As a result, we enjoy repeated orders, boosting both our confidence and growth. We are proud to be trusted manufacturers, exporters, and suppliers, serving national and international clients transparently and offering our products at competitive prices. */}
              {/* At Airoxin International, we're passionate about nature. Founded in 2020, we're committed to producing high-quality, biodegradable tableware from sugarcane waste. Based in Gujarat, our mission is to reduce plastic waste and promote a sustainable future. Join us in our journey towards a cleaner, greener world. */}
              {Data.Paragraph}
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-4"
            >

              {Data.Features_About.map((ele,ind) => {
                return (
                  <li key={ind} className="flex items-center gap-3 text-white">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-green-500 text-3xl"
                    >
                      🌍
                    </motion.span>
                    {ele}
                  </li>
                )
              }
              )
              }


            </motion.ul>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
              }
            }
          }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {Data.Counter_Data.map((stat,ind) => (


            <motion.div
              key={ind}
              className="p-6 bg-gray-800 rounded-2xl text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 10,
                delay: 0.3
              }}
            >
              <div className='flex justify-center'>
                <CountUp
                  start={isInView ? 0 : null}
                  end={stat.value}
                  duration={3}
                  separator=","
                  className="text-4xl sm:text-5xl text-green-500 font-bold block mb-2"
                />
                <span className="text-3xl text-[#D4EDD4]">+</span>
              </div>
              <p className="text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}

          {/* // <motion.div
            //   key={stat.id}

            //   className="p-6 bg-gray-800 rounded-2xl text-center"
            // >
            //   <motion.span

            //     className="text-4xl sm:text-5xl text-green-500 font-bold block mb-2"
            //   >
            //     {stat.value}+
            //   </motion.span>
            //   <p className="text-gray-400 uppercase tracking-wider">{stat.label}</p>
            // </motion.div> */}

        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTopAbout}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg text-lg transition duration-200"
          >
            Join Our Green Journey
          </motion.button>
        </motion.div>




      </div>
    </motion.section >
  );
};

export default About_Company;