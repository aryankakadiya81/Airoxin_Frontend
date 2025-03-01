import React, { useRef, useEffect, useState } from 'react';
import Detail from '../../../Json_Files/All_Section_Details.json';
import { motion, useInView, useAnimation } from 'framer-motion';
import backgroundImage from '../../../Assets/About/About_Us.jpeg'; // Replace with your image path

const Work_Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [isInView, animationControls]);

  return (
    <div
      ref={ref}
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-12 md:py-28"
  
    >
      <div className="w-full h-full bg-black bg-opacity-70 z-10"></div> {/* Dark overlay */}
      <div className="container mx-auto px-4 relative z-10"> {/* z-10 for content above overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={animationControls}
          className="w-full"
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Introducing <span className="text-blue-500">Our Work</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium my-16">
              {Detail.Work_Section.Work_Shlogen}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 md:mb-12 mx-auto max-w-3xl text-[#e5e7eb]">
              {Detail.Work_Section.Paragraph}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work_Section;