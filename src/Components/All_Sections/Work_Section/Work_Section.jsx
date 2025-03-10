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
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-12 md:py-28 block"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-70 z-10"></div> {/* Dark overlay */}
      <div className="max-w-[1920px] mx-auto px-4 relative z-10"> {/* z-10 for content above overlay */}
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
            <p className="md:text-2xl leading-relaxed mb-8 md:mb-12 mx-auto text-xl pb-10 sm:text-2xl 2xl:mx-64 xl:mx-64 text-[#e5e7eb]">
              {Detail.Work_Section.Paragraph}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work_Section;


// import { motion } from 'framer-motion';
// import workData from '../../../Json_Files/Work_Data.json';

// const WorkSection = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="py-24 bg-gray-900"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-4xl sm:text-5xl font-bold text-white mb-4 relative"
//           >
//             Introducing Our Work
//             <motion.span
//               initial={{ width: 0 }}
//               animate={{ width: '100%' }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-blue-500"
//             />
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//             className="text-gray-400 text-lg max-w-2xl mx-auto"
//           >
//             Explore our sustainable projects that are shaping a greener future
//           </motion.p>
//         </motion.div>

//         {/* Work Showcase Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.5
//               }
//             }
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {workData.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={{
//                 hidden: { y: 50, opacity: 0 },
//                 visible: { y: 0, opacity: 1 }
//               }}
//               transition={{ duration: 0.5 }}
//               className="bg-gray-800 rounded-3xl p-6 hover:shadow-2xl transition-shadow"
//               whileHover={{ scale: 1.02 }}
//             >
//               {/* Icon Animation */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 200,
//                   damping: 10,
//                   repeat: Infinity,
//                   repeatType: 'reverse'
//                 }}
//                 className="flex justify-center mb-6"
//               >
//                 <div className="text-5xl text-green-500">
//                   {project.emoji}
//                 </div>
//               </motion.div>

//               {/* Project Content */}
//               <motion.h3
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="text-2xl text-white font-semibold mb-4"
//               >
//                 {project.title}
//               </motion.h3>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//                 className="text-gray-400 mb-6"
//               >
//                 {project.description}
//               </motion.p>

//               {/* Progress Bar */}
//               <motion.div className="mb-6">
//                 <div className="flex justify-between text-sm text-gray-500 mb-1">
//                   <span>Completed</span>
//                   <span>{project.progress}%</span>
//                 </div>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${project.progress}%` }}
//                   transition={{ duration: 1.5, type: 'spring' }}
//                   className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
//                 />
//               </motion.div>

//               {/* Action Button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full bg-green-600 text-white py-3 rounded-full mt-4 transition duration-200"
//               >
//                 View Project
//               </motion.button>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default WorkSection;