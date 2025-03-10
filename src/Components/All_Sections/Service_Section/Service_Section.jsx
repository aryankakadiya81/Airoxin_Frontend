// import { motion } from 'framer-motion';
// import React, { useContext } from 'react';
// import { Global } from '../../../App';
// import Product_Data from '../../../Json_Files/Product_Page.json';
// import { Link } from 'react-router-dom';
// import Bbg from '../../../Assets/Service/S_B2.jpeg';




// const Service_Section = () => {

//     // let Bbg = "https://i.postimg.cc/qMJ35L45/Earth-Wall.jpg";
//     let { Categorys, SubCategorys , Loader} = useContext(Global);

//     let [Category, setCategory] = Categorys;
//     let [SubCategory, setSubCategory] = SubCategorys;
//     let [IsLoading, setIsLoading] = Loader;
//     return (
//         <>


//             <section className="py-28 h-auto bg-fixed bg-center w-auto bg-cover bg-no-repeat block" style={{ backgroundImage: `url(${Bbg})` }}>
//                 <div className="max-w-[1920px] mx-auto px-10">
//                     <motion.h2 className="text-5xl font-bold text-center text-white mb-8" initial={{ opacity: 0, y: 40 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1.0 }}
//                     >
//                         Our Products
//                     </motion.h2>
//                     <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6" initial={{ opacity: 0, y: 40 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1.0, delay: 0.4 }}>
//                         {Product_Data.Category.map((product) => (
//                             <motion.div
//                                 key={product.id}
//                                 className="bg-[#D3D9D4] h-full rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
//                             >
//                                 <div className="p-6 text-center">
//                                     <motion.div className="text-4xl mb-4 ">
//                                         <i className={` ${product.Icon} bg-[#124E66] rounded-full text-white p-5`}>
//                                         </i>
//                                     </motion.div>
//                                     <motion.h3
//                                         className="sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
//                                         {product.Category_Name}
//                                     </motion.h3>
//                                     <motion.p className="text-gray-600 my-10 text-lg">
//                                         {product.Details}
//                                     </motion.p>
//                                     <Link onClick={() => { setCategory(product.Category_Name); window.scrollTo(0, 0); setIsLoading(true)}} to="/Category">
//                                         <motion.button
//                                             className="px-6 py-2 bg-[#124E66] hover:bg-[#212A31] text-white rounded-lg focus:outline-none transition-all duration-200 ease-in-out"
//                                             whileHover={{ scale: 1.1 }}
//                                             whileTap={{ scale: 0.95 }}
//                                         >
//                                             More Details
//                                         </motion.button>

//                                     </Link>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>
//         </>
//     );




// }

// export default Service_Section




import React, { useContext } from 'react';
import { Global } from '../../../App';
import { motion } from 'framer-motion';
import Product_Data from '../../../Json_Files/Product_Page.json';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    icon: '🌱',
    name: 'Biodegradable Packaging',
    description: '100% compostable materials for sustainable shipping solutions',
    details: '/packaging'
  },
  {
    id: 2,
    icon: '💡',
    name: 'Solar Chargers',
    description: 'Portable solar-powered devices for eco-friendly energy on-the-go',
    details: '/solar'
  },
  {
    id: 3,
    icon: '👕',
    name: 'Organic Apparel',
    description: 'Clothing made from certified organic cotton and recycled materials',
    details: '/apparel'
  },
  {
    id: 4,
    icon: '♻️',
    name: 'Recycling Kits',
    description: 'Home recycling systems with compost bins and sorting guides',
    details: '/recycling'
  }
];

const Service_Section = () => {

  let { Categorys, SubCategorys, Loader } = useContext(Global);

  let [Category, setCategory] = Categorys;
  let [SubCategory, setSubCategory] = SubCategorys;
  let [IsLoading, setIsLoading] = Loader;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gray-900"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12"
        >
          Our Eco-Friendly Products
          <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
        </motion.h2>

        {/* Product Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Product_Data.Category.map((product, ind) => (
            <motion.div
              key={ind}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon Animation */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 0.8 }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="flex justify-center mb-6"
              >
                <div className="text-5xl sm:text-6xl text-green-500">
                  {product.icon}
                </div>
              </motion.div>

              {/* Product Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                {product.Category_Name}
              </h3>
              <p className="text-gray-400 mb-6">{product.Details}</p>

              {/* Details Button */}
              <Link
                onClick={() => { setCategory(product.Category_Name); window.scrollTo(0, 0); setIsLoading(true) }} to="/Category"
                className="flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Service_Section;