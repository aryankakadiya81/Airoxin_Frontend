// import React, { useState } from 'react';
// import Tradefair from '../../Json_Files/Tradefair.json';
// import './Tradefair_Participent.css';

// const Tradefair_Participation = () => {

//     let [Data, setData] = useState(Tradefair);
//     let [Img, setImg] = useState(null);
//     let [Cat, setCat] = useState("All");

//     function Fatch(name) {
//         setCat(name);
//     }

//     return (
//         <div className='my-5'>





//             <div className='container overflow-hidden'>
//                 <div className='d-flex flex-wrap justify-content-center mb-5'>
//                     {
//                         Data.map((el) => {
//                             return (
//                                 <>
//                                     <div key={el.id} className='mx-1'>
//                                         <div>
//                                             <button onClick={() => { Fatch(el.name) }} className='border-0 fs-4 bg-white link-primary fw-semibold'>{el.name}</button>
//                                         </div>
//                                     </div>

//                                 </>
//                             );
//                         })
//                     }
//                 </div>
//             </div>




//             <div className='container overflow-hidden'>
//                 <div className='row g-3'>
//                     {
//                         Cat == "All" && Data.map((el) => {
//                             return (
//                                 <>
//                                     {
//                                         el.images.map((i) => {
//                                             return (
//                                                 <div onClick={() => { setImg(i); }} className='img-fluid col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 overflow-hidden animate__animated animate__fadeInUp'>
//                                                     <img draggable="false" key={i} src={i} className='imgimgg w-100 border-2 rounded-3' height={350}></img>
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                 </>
//                             )
//                         })
//                     }

//                     {
//                         Cat != "All" && Data.filter((el) => { return (el.name == Cat) }).map((el) => {
//                             return (
//                                 <>
//                                     {
//                                         el.images.map((i) => {
//                                             return (
//                                                 <div onClick={() => { setImg(i); }} className='animate__animated animate__fadeInUp img-fluid col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 overflow-hidden'>
//                                                     <img draggable="false" key={i} src={i} className='imgimgg w-100 border-2 rounded-3' height={350}></img>
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                 </>
//                             )
//                         })
//                     }
//                 </div>
//             </div>

//             <div className='Popupp bg-black' style={{ display: Img ? 'block' : 'none' }}>
//                 <span onClick={() => { setImg(null) }}>&times;</span>
//                 <img draggable="false" src={Img} />
//             </div>




//         </div>
//     )
// }

// export default Tradefair_Participation


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import default styles for the lightbox
import Tradefair from '../../../Json_Files/Tradefair.json';

const Tradefair_Participation = () => {
    const [data,setdata] = useState(Tradefair);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

    // Filter images based on selected category
    const filteredImages =
        selectedCategory === "All"
            ? data.Data.flatMap((el) => el.images)
            : data.Data.find((el) => el.name === selectedCategory)?.images || [];

    return (
        <section className=" text-white py-16">
            {/* Container */}
            <div className="max-w-[1920px] mx-auto px-4">
                {/* Dark Mode Heading */}
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 relative"
                >
                    {data.Title}
                    <span className="block mt-4 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto rounded-full" />
                </motion.h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <motion.button
                        onClick={() => setSelectedCategory("All")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            selectedCategory === "All" ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
                        }`}
                    >
                        All
                    </motion.button>
                    {data.Data.map((el,ind) => (
                        <motion.button
                            key={ind}
                            onClick={() => setSelectedCategory(el.name)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                selectedCategory === el.name ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
                            }`}
                        >
                            {el.name}
                        </motion.button>
                    ))}
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <img
                                src={img}
                                alt={`Trade Fair ${index}`}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Image Viewer Popup */}
                {selectedImageIndex !== -1 && (
                    <Lightbox
                        slides={filteredImages.map((img) => ({ src: img }))}
                        open={selectedImageIndex !== -1}
                        index={selectedImageIndex}
                        close={() => setSelectedImageIndex(-1)}
                        animation={{ fade: 300, swipe: 500 }} // Smooth animations
                        controller={{ closeOnBackdropClick: true }} // Close on clicking outside
                    />
                )}
            </div>
        </section>
    );
};

export default Tradefair_Participation;