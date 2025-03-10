// import React, { useEffect, useContext } from 'react';
// import { Global } from '../../../App';
// import Details from '../../../Json_Files/All_Section_Details.json';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import H4 from '../../../Assets/Hero/H4.jpeg';
// import H5 from '../../../Assets/Hero/H5.jpg';
// import H9 from '../../../Assets/Hero/H9.jpeg';
// // import H1 from '../../../Assets/Hero/H1.jpeg';
// // import H2 from '../../../Assets/Hero/H2.jpeg';
// // import H3 from '../../../Assets/Hero/H3.jpeg';
// // import H6 from '../../../Assets/Hero/H6.jpeg';
// // import H7 from '../../../Assets/Hero/H7.jpeg';
// // import H8 from '../../../Assets/Hero/H8.jpeg';



// const Hero_Section = () => {


//   let { Categorys, SubCategorys, Loader } = useContext(Global);
//   let [Category, setCategory] = Categorys;
//   let [SubCategory, setSubCategory] = SubCategorys;
//   let [IsLoading, setIsLoading] = Loader;


//   let Navigate = useNavigate();
//   const scrollToTophero = () => {
//     setIsLoading(true);
//     window.scrollTo(0, 0);
//     Navigate("/About");
//   };


//   const backgroundImages = [
//     H9, H4, H5
//   ];

//   const [currentImage, setCurrentImage] = React.useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
//     }, 3000);

//     return () => clearInterval(interval); // Clean up on unmount
//   }, []);

//   return (


//     <section className="relative bg-fixed bg-cover w-full h-screen transition-all duration-1000 inline-block ease-in-out sm:py-72" style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       <div className="relative z-10 flex justify-center items-center h-full text-center text-white px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="space-y-4 max-w-[1920px]"
//         >
//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight ">
//             {Details.Shlogan_Section.Shlogen_black_line}
//           </h1>
//           <p className="text-xl py-10 sm:text-2xl 2xl:mx-64 xl:mx-64">
//             {Details.Shlogan_Section.Paragraph}
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={scrollToTophero}
//             className="mt-6 px-8 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
//           >
//             Get Started
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>

//   );
// };


// export default Hero_Section;

import React, { useEffect, useContext } from 'react';
import { Global } from '../../../App';
import Details from '../../../Json_Files/All_Section_Details.json';
import { motion } from 'framer-motion';
import Ecoo from '../../../Assets/Hero/Ecoo.png';
import { useNavigate } from 'react-router-dom';


const Hero_Section = () => {


  let { Loader } = useContext(Global);
  // let [Category, setCategory] = Categorys;
  // let [SubCategory, setSubCategory] = SubCategorys;
  let [IsLoading, setIsLoading] = Loader;


  let Navigate = useNavigate();
  const scrollToTophero = () => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    Navigate("/About");
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className={`absolute inset-0 bg-[${Ecoo}] bg-cover bg-center filter blur-sm`}
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute h-2 w-2 rounded-full bg-green-500/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between pt-32 pb-24 md:pb-32">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                {Details.Shlogan_Section.Shlogen_Word}
              </span>{" "}
              {/* Solutions for a Greener Tomorrow */}
              {Details.Shlogan_Section.Shlogen_black_line}
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-lg   mx-auto md:mx-0">
              {/* Join our mission to reduce carbon footprint with eco-friendly products and services */}
              {Details.Shlogan_Section.Paragraph}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg z-10"
                onClick={scrollToTophero}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block relative w-full md:w-96 lg:w-[450px]"
          >
            <img
              src={Ecoo}
              alt="Eco-friendly illustration"
              className="w-full h-full z-50 mb-14"
            />
            {/* <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute -bottom-7 -right-3 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"
            /> */}
          </motion.div>
        </div>

        {/* Animated Wave Separator */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 right-0 w-full"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <path
            fill="#1A1A1A"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,144C672,149,768,203,864,202.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </motion.svg>
      </div>
    </motion.section>
  );
};

export default Hero_Section;