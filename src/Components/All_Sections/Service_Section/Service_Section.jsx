import React, { useContext } from 'react';
import { Global } from '../../../App';
import { motion } from 'framer-motion';
import Product_Data from '../../../Json_Files/Product_Page.json';
import { Link } from 'react-router-dom';


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
            <Link
            key={ind}
              onClick={() => { setCategory(product.Category_Name); window.scrollTo(0, 0); setIsLoading(true) }} to="/Category">
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
                  className="flex justify-center"
                >

                  <img src={`${product.Thumbnail_Image}`} className='rounded-2xl'></img>


                </motion.div>

                {/* Product Content */}
                <h3 className="text-xl sm:text-3xl font-semibold text-white my-4 mt-6">
                  {product.Category_Name}
                </h3>
                {/* <p className="text-gray-400 mb-6">{product.Details}</p> */}

                {/* Details Button */}
                <Link
                  onClick={() => { setCategory(product.Category_Name); window.scrollTo(0, 0); setIsLoading(true) }} to="/Category"
                  className="flex text-xl items-center gap-2 text-green-500 hover:text-green-600 transition-colors duration-200"
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
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Service_Section;