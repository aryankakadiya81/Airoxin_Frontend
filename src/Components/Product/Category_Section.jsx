// import React, { useContext } from 'react';
// import { motion } from 'framer-motion';
// import { Global } from '../../App';
// import ProductData from '../../Json_Files/Product_Page.json';
// import { Link, useNavigate } from 'react-router-dom';

// const Category_Section = () => {
//     const navigate = useNavigate();
//     const { Categorys, SubCategorys } = useContext(Global);
//     const [Category, setCategory] = Categorys;
//     const [SubCategory, setSubCategory] = SubCategorys;

//     return (
//         <section className="text-white py-16">
//             {/* Container */}
//                 <motion.h1
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-500"
//                 >
//                     {Category}
//                 </motion.h1>
//             <div className="max-w-[1920px] mx-auto px-4">
//                 {/* Back Button */}
//                 {/* Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="mb-8"
//                 >
//                     <button
//                         onClick={() => {
//                             navigate("/Home");
//                             window.scrollTo(0, 0);
//                         }}
//                         className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
//                     >
//                         <i className="bi bi-arrow-left"></i>
//                         Back
//                     </button>
//                 </motion.div>


//                 {/* Grid Layout */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:mx-10 gap-8">
//                     {ProductData.SubCategory.filter((el) => el.Category_Name === Category).length !== 0 ? (
//                         ProductData.SubCategory
//                             .filter((el) => el.Category_Name === Category)
//                             .map((el) => (
//                                 <Link to="/Category/Subcategory"
//                                     onClick={() => {
//                                         setSubCategory(el.SubCategory_Name);
//                                         window.scrollTo(0, 0);
//                                     }}>
//                                     <motion.div
//                                         key={el.id}
//                                         initial={{ opacity: 0, y: 50 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ duration: 0.6 }}
//                                         className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors"
//                                     >
//                                         {/* Gradient Overlay */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

//                                         {/* Image */}
//                                         <div className="overflow-hidden">
//                                             <img
//                                                 src={el.Image}
//                                                 draggable="false"
//                                                 alt={el.SubCategory_Name}
//                                                 className="w-full p-3 rounded-2xl h-[420px] transition-transform duration-300 group-hover:scale-110"
//                                             />
//                                         </div>

//                                         {/* Content */}
//                                         <div className="p-6 text-center relative z-10">
//                                             <h4 className="text-xl font-bold mb-4 text-white">{el.SubCategory_Name}</h4>
//                                             <Link
//                                                 to="/Category/Subcategory"
//                                                 onClick={() => {
//                                                     setSubCategory(el.SubCategory_Name);
//                                                     window.scrollTo(0, 0);
//                                                 }}
//                                                 className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors inline-block"
//                                             >
//                                                 LEARN MORE
//                                             </Link>
//                                         </div>
//                                     </motion.div>
//                                 </Link>
//                             ))
//                     ) : (
//                         <motion.div
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6 }}
//                             className="col-span-full text-center text-3xl font-bold text-[white] h-screen"
//                         >
//                             Coming Soon...
//                         </motion.div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Category_Section;



import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Global } from '../../App';
import ProductData from '../../Json_Files/Product_Page.json';
import { Link, useNavigate } from 'react-router-dom';

const Category_Section = () => {
    const navigate = useNavigate();
    const { Categorys, SubCategorys, Selected_Products } = useContext(Global);
    const [Category, setCategory] = Categorys;
    const [SubCategory, setSubCategory] = SubCategorys;
    const [Selected_Product, setSelected_Product] = Selected_Products;

    return (
        <section className="text-white py-16">
            {/* Container */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-500"
            >
                {Category}
            </motion.h1>
            <div className="max-w-[1920px] mx-auto px-4">
                {/* Back Button */}
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => {
                            navigate("/Home");
                            window.scrollTo(0, 0);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
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
                                    <motion.h1
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="text-3xl sm:text-4xl font-bold text-center my-12 text-blue-500"
                                    >
                                        {ele.SubCategory_Name}
                                    </motion.h1>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10 lg:gap-12">
                                        {ProductData.Products.filter((el) => el.SubCategory_Name === ele.SubCategory_Name && el.Category_Name === ele.Category_Name).length !== 0 ? (
                                            ProductData.Products
                                                .filter((el) => el.SubCategory_Name === ele.SubCategory_Name && el.Category_Name === ele.Category_Name)
                                                .map((el) => (
                                                    <Link
                                                        to="/Category/Subcategory/Product"
                                                        onClick={() => {
                                                            setSelected_Product(el);
                                                            window.scrollTo(0, 0);
                                                        }}>
                                                        <motion.div
                                                            key={el.id}
                                                            initial={{ opacity: 0, y: 50 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.6 }}
                                                            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors mx-5"
                                                        >
                                                            {/* Gradient Overlay */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                                            {/* Image */}
                                                            <div className="overflow-hidden">
                                                                <img
                                                                    src={el.Thumbnail_Image}
                                                                    draggable="false"
                                                                    alt={el.Product_Name}
                                                                    className="w-full p-3 rounded-2xl h-[420px] transition-transform duration-300 group-hover:scale-110"
                                                                />
                                                            </div>

                                                            {/* Content */}
                                                            <div className="p-6 text-center relative z-10">
                                                                <h4 className="text-xl font-bold mb-4">{el.Product_Name}</h4>
                                                                <Link
                                                                    to="/Category/Subcategory/Product"
                                                                    onClick={() => {
                                                                        setSelected_Product(el);
                                                                        window.scrollTo(0, 0);
                                                                    }}
                                                                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors inline-block"
                                                                >
                                                                    LEARN MORE
                                                                </Link>
                                                            </div>
                                                        </motion.div>
                                                    </Link>
                                                ))
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
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
                            viewport={{ once: true }}
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