import React, {useEffect} from 'react';
import Details from '../../../Json_Files/All_Section_Details.json';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import H4 from '../../../Assets/Hero/H4.jpeg';
import H5 from '../../../Assets/Hero/H5.jpg';
import H9 from '../../../Assets/Hero/H9.jpeg';
// import H1 from '../../../Assets/Hero/H1.jpeg';
// import H2 from '../../../Assets/Hero/H2.jpeg';
// import H3 from '../../../Assets/Hero/H3.jpeg';
// import H6 from '../../../Assets/Hero/H6.jpeg';
// import H7 from '../../../Assets/Hero/H7.jpeg';
// import H8 from '../../../Assets/Hero/H8.jpeg';



const Hero_Section = () => {
  let Navigate = useNavigate();
  const scrollToTophero = () => {
    window.scrollTo(0, 0)
    Navigate("/About")
  }

  const backgroundImages = [
    H9, H4, H5
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (


    <section className="relative bg-fixed bg-cover w-full h-screen transition-all duration-1000 ease-in-out sm:py-72" style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex justify-center items-center h-full text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight ">
            {Details.Shlogan_Section.Shlogen_black_line}
          </h1>
          <p className="text-xl py-10 sm:text-2xl 2xl:mx-64 xl:mx-64">
            {Details.Shlogan_Section.Paragraph}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTophero}
            className="mt-6 px-8 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>

  );
};


export default Hero_Section;