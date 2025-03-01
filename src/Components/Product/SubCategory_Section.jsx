// import React, { useContext } from 'react';
// import { Global } from '../../App';
// import ProductData from '../../Json_Files/Product_Page.json';
// import Seo_Data from '../../Json_Files/SEO_Meta_Keyword.json'
// import Helmet_Jsx from '../../Helmet_Jsx';
// import { Link, useNavigate } from 'react-router-dom';
// import Heading from '../Mini_Components/Heading';

// const SubCategory_Section = () => {

//   let Navigate = useNavigate();

//   let { Categorys, SubCategorys, Selected_Products } = useContext(Global);
//   let [Category, setCategory] = Categorys;
//   let [SubCategory, setSubCategory] = SubCategorys;
//   let [Selected_Product, setSelected_Product] = Selected_Products;


//   return (
//     <>
//       <div className='bg-white'>

//       <Helmet_Jsx Title={Seo_Data.Productpage.Title} Desc={Seo_Data.Productpage.Description}></Helmet_Jsx>
//         <Heading Title={SubCategory}></Heading>

//         <div className="container my-5">
//           <div className='container d-flex justify-content-start my-5'>
//             <button onClick={() => {window.scrollTo(0, 0); Navigate(-1); }} className='fs-4 px-4 btn btn-primary'><i className="bi bi-arrow-left"></i> Back</button>
//           </div>
//           <div className="row g-4">
//             {
//              ProductData.SubCategory.length != 0 
//              ? ProductData.Products.filter((el) => { return el.SubCategory_Name == SubCategory && el.Category_Name == Category }).map((el) => {
//                 return (
//                   <>
//                     <div key={el.id} className="col-12 col-sm-6 col-xl-4 animate__animated animate__fadeInUp">
//                       <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-lg placeholder-glow">
//                         <div className="card-body text-center">
//                           <div>
//                             <img draggable="false" src={el.Thumbnail_Image} alt="Product image" className="card-img-top" height={400}/>
//                           </div>

//                           <h4 className="my-4 fw-bold">
//                             {el.Product_Name}
//                           </h4>


//                           <Link to="/Category/Subcategory/Product" onClick={() => {window.scrollTo(0, 0); setSelected_Product(el);}} type="button" className="btn btn-primary mb-3">
//                             LEARN MORE
//                           </Link>

//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )
//               })
//               : <div className='text-center fs-1'> Comming Soon...</div>

//             }

//           </div>
//           {/* <div className='container d-flex justify-content-start my-5 ms-5 ps-5'>
//             <button onClick={() => { Navigate(-1); window.scrollTo(0, 0); }} className='px-4 fs-4  btn btn-primary'>&#11164; Back</button>
//           </div> */}
//         </div>




//         <div>
//         </div>
//       </div>

//     </>
//   )

// }

// export default SubCategory_Section


import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Global } from '../../App';
import ProductData from '../../Json_Files/Product_Page.json';
import Seo_Data from '../../Json_Files/SEO_Meta_Keyword.json';
import Helmet_Jsx from '../../Helmet_Jsx';
import { Link, useNavigate } from 'react-router-dom';
import Vid1 from "../../Assets/Vedio/Vid1.mp4";


const SubCategory_Section = () => {
  const navigate = useNavigate();
  const { Categorys, SubCategorys, Selected_Products } = useContext(Global);
  const [Category, setCategory] = Categorys;
  const [SubCategory, setSubCategory] = SubCategorys;
  const [Selected_Product, setSelected_Product] = Selected_Products;

  return (
    <div className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={Vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20">
        <section className=" text-white py-16">
          {/* SEO Meta Tags */}
          <Helmet_Jsx Title={Seo_Data.Productpage.Title} Desc={Seo_Data.Productpage.Description}></Helmet_Jsx>

          {/* Container */}
          <div className="container mx-auto px-10">


            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-500"
            >
              {SubCategory}
            </motion.h1>
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <button
                onClick={() => {
                  navigate(-1);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <i className="bi bi-arrow-left"></i>
                Back
              </button>
            </motion.div>



            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10 lg:gap-12">
              {ProductData.Products.length !== 0 ? (
                ProductData.Products
                  .filter((el) => el.SubCategory_Name === SubCategory && el.Category_Name === Category)
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
                        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        {/* Image */}
                        <div className="overflow-hidden">
                          <img
                            src={el.Thumbnail_Image}
                            draggable="false"
                            alt={el.Product_Name}
                            className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubCategory_Section;