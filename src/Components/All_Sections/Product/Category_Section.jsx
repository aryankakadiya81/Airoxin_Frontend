import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Global } from '../../../App';
import ProductData from '../../../Json_Files/Product_Page.json';
import { Link, useNavigate } from 'react-router-dom';

const Category_Section = () => {
    const navigate = useNavigate();
    const { Categorys, SubCategorys, Selected_Products } = useContext(Global);
    const [Category, setCategory] = Categorys;
    const [SubCategory, setSubCategory] = SubCategorys;
    const [Selected_Product, setSelected_Product] = Selected_Products;

    return (
        <section className="bg-gray-900 py-20">
            {/* Container */}
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12"
            >
                {Category}
                <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
            </motion.h2>
            <div className="max-w-[1920px] mx-auto px-4">
                {/* Back Button */}
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => {
                            navigate("/Home");
                            window.scrollTo(0, 0);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 font-semibold text-white rounded-md hover:bg-green-700 lg:text-2xl text-md transition-colors ms-4 lg:ms-10"
                    >
                        <i className="bi bi-arrow-left"></i>
                        Back
                    </button>
                </motion.div>


                {/* Grid Layout */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:mx-10 gap-8"> */}
                <div>
                    {ProductData.SubCategory
                        .filter((el) => el.Category_Name === Category).length !== 0 ? (
                        ProductData.SubCategory
                            .filter((el) => el.Category_Name === Category)
                            .map((ele) => (
                                <>
                                    {/* <motion.h1
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.8 }}
                                        className="text-3xl sm:text-4xl font-bold text-center my-12 bg-clip-text text-transparent text-white"
                                    >
                                        {ele.SubCategory_Name}
                                        <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
                                    </motion.h1> */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10 lg:gap-12">
                                        {ProductData.Products.filter((el) => el.SubCategory_Name === ele.SubCategory_Name && el.Category_Name === ele.Category_Name).length !== 0 ? (
                                            ProductData.Products
                                                .filter((el) => el.SubCategory_Name === ele.SubCategory_Name && el.Category_Name === ele.Category_Name)
                                                .map((el, ind) => (




                                                    <Link
                                                        to="/Category/Subcategory/Product"
                                                        onClick={() => {
                                                            setSelected_Product(el);
                                                            window.scrollTo(0, 0);
                                                        }}>
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

                                                                <img src={el.Thumbnail_Image}
                                                                    alt={el.Product_Name} className='rounded-2xl'></img>


                                                            </motion.div>

                                                            {/* Product Content */}
                                                            <h3 className="text-xl sm:text-3xl font-semibold text-white my-4 mt-6">
                                                                {el.Product_Name}
                                                            </h3>
                                                            {/* <p className="text-gray-400 mb-6">{product.Details}</p> */}

                                                            {/* Details Button */}
                                                            <Link
                                                                to="/Category/Subcategory/Product"
                                                                onClick={() => {
                                                                    setSelected_Product(el);
                                                                    window.scrollTo(0, 0);
                                                                }}
                                                                className="flex text-xl items-center gap-2 text-green-500 hover:text-green-600 transition-colors duration-200"
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                More Details
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


                                                ))
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 0.6 }}
                                                className="col-span-full text-center text-3xl font-bold text-gray-500 h-screen"
                                            >
                                                Coming Soon...
                                            </motion.div>
                                        )}
                                    </div>
                                </>
                            ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className="col-span-full text-center text-3xl font-bold text-[white] h-screen"
                        >
                            Coming Soon...
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Category_Section;