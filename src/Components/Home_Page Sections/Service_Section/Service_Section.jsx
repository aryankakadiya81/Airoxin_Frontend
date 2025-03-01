import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Global } from '../../../App';
import Product_Data from '../../../Json_Files/Product_Page.json';
import Bbg from '../../../Assets/Service/S_B2.jpeg';
import { Link } from 'react-router-dom';
// import Design from '../../../Json_Files/Design_Json/Colour_Json.json';




const Service_Section = () => {

    // let Bbg = "https://i.postimg.cc/qMJ35L45/Earth-Wall.jpg";
    let { Categorys, SubCategorys } = useContext(Global);

    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;
    
    return (
        <>


            <section className="py-28 h-auto bg-fixed bg-center w-auto bg-cover bg-no-repeat block" style={{ backgroundImage: `url(${Bbg})` }}>
                <div className="max-w-[1920px] mx-auto px-10">
                    <motion.h2 className="text-5xl font-bold text-center text-white mb-8" initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        Our Products
                    </motion.h2>
                    <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6" initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.4 }}>
                        {Product_Data.Category.map((product) => (
                            <motion.div
                                key={product.id}
                                className="bg-[#D3D9D4] h-full rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                            >
                                <div className="p-6 text-center">
                                    <motion.div className="text-4xl mb-4 ">
                                        <i className={` ${product.Icon} bg-[#124E66] rounded-full text-white p-5`}>
                                        </i>
                                    </motion.div>
                                    <motion.h3
                                        className="sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                                        {product.Category_Name}
                                    </motion.h3>
                                    <motion.p className="text-gray-600 my-10 text-lg">
                                        {product.Details}
                                    </motion.p>
                                    <Link onClick={() => { setCategory(product.Category_Name); window.scrollTo(0, 0); }} to="/Category">
                                        <motion.button
                                            className="px-6 py-2 bg-[#124E66] hover:bg-[#212A31] text-white rounded-lg focus:outline-none transition-all duration-200 ease-in-out"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            More Details
                                        </motion.button>

                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );




}

export default Service_Section
