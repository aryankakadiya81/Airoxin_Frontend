import { SpeedInsights } from "@vercel/speed-insights/react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, createContext, useEffect } from 'react';
import Logo from './Assets/Logo/WHITE/MAIN/MAIN WHITE.svg'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_Page from './Components/Home_Page';
import Error_Page from './Components/All_Sections/Error_Page/Error_Page'
import AboutUs_Page from './Components/AboutUs_Page';
// import Team_Page from './Components/Team_Page';
import ContactUs_Page from './Components/ContactUs_Page';
import Tradefair_Participation_Page from './Components/Tradefair_Participation_Page';
import Category_Page from './Components/Category_Page';
// import SubCategory_Section from './Components/Product/SubCategory_Section';
import Product from './Components/All_Sections/Product/Product';
import Pro_Data from './Json_Files/Product_Page.json'
// import Tostify from './Tostify';
import { ToastContainer } from 'react-toastify';
import Infrastructure_Page from "./Components/Infrastructure_Page";
import Certificate_Page from "./Components/Certificate_Page";
import Product_Gallery_Page from "./Components/Product_Gallery_Page";
import Mission_Page from "./Components/Mission_Page";
import Scroll_To_Top_Button from "./Components/All_Sections/Scroll_To_Top_Button/Scroll_To_Top_Button";
import Vision_Page from "./Components/Vision_Page";

// import Company_Details from './Components/Company_Details/Company_Details';






// 'dark-charcoal': '#212A31',
//         'gray-blue': '#2E3944',
//         'deep-navy': '#124E66',
//         'rich-navy': '#1A3D58',
//         'darker-navy': '#15334C',
//         'charcoal-gray': '#25333C',
//         'mid-charcoal': '#1E2B33',
//         'very-dark-navy': '#0F2639',
//         'soft-gray-blue': '#2C373F',
//         'balanced-blue-gray': '#192F40',

// import Img from './Components/Img';

export let Global = createContext();



const App = () => {

    let [Category, setCategory] = useState(Pro_Data.Products[6].Category_Name);
    let [SubCategory, setSubCategory] = useState(Pro_Data.Products[6].SubCategory_Name);
    let [Selected_Product, setSelected_Product] = useState(Pro_Data.Products[6]);

    const [IsLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide loader after 2 seconds (simulating loading)
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [IsLoading]);

    return (
        <>
            <div className="font-DM bg-gray-900">

                {/* Loader */}

                <AnimatePresence>
                    {IsLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="fixed inset-0 z-50 flex items-center justify-center"
                        >
                            {/* Background */}
                            <motion.div
                                initial={{ scale: 1 }}
                                exit={{
                                    scale: [1, 0], // Simulate "closing doors" effect
                                    transition: { duration: 0.8, ease: "easeInOut" },
                                }}
                                className="absolute inset-0 bg-gray-900"
                            />

                            {/* Static Logo */}
                            <img
                                src={Logo} // Replace with your logo path
                                alt="Static Logo"
                                className="w-32 h-32 mb-6 z-50"
                            />

                            {/* Progress Bar */}
                            {/* <motion.div className="w-full max-w-md bg-gray-700 rounded-full overflow-hidden h-4">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                                className="h-full bg-blue-500"
                            />
                        </motion.div> */}
                        </motion.div>
                    )}
                </AnimatePresence>


                {!IsLoading && (<div className="select-none scroll-smooth">
                    <motion.Cursor />
                    <ToastContainer theme="dark"></ToastContainer>
                    <SpeedInsights />
                    
                    <Global.Provider
                        value={{
                            Categorys: [Category, setCategory],
                            SubCategorys: [SubCategory, setSubCategory], Selected_Products: [Selected_Product, setSelected_Product],
                            Loader: [IsLoading, setIsLoading]
                        }} >
                            
                        <FloatingWhatsApp
                            phoneNumber="+91 9925614381"
                            accountName="AIROXIN INTERNATIONAL"
                            chatMessage="Hello Dear, How Can I Help You?"
                            avatar={Logo}
                        />
                        <Scroll_To_Top_Button></Scroll_To_Top_Button>
                        <BrowserRouter>


                            <Routes>

                                <Route path="*" element={<Error_Page></Error_Page>}></Route>

                                <Route path="/Error" element={<Error_Page></Error_Page>}></Route>

                                <Route path="/" element={<Home_Page></Home_Page>}></Route>

                                <Route path="/Home" element={<Home_Page></Home_Page>}></Route>
                                <Route path="/About" element={<AboutUs_Page></AboutUs_Page>}></Route>

                                {/* <Route path="/Team" element={<Team_Page></Team_Page>}></Route> */}

                                <Route path="/Contact" element={<ContactUs_Page></ContactUs_Page>}></Route>

                                <Route path='/Certificates' element={<Certificate_Page></Certificate_Page>}></Route>

                                <Route path='/Infrastructure' element={<Infrastructure_Page></Infrastructure_Page>}></Route>

                                <Route path='/Mission' element={<Mission_Page></Mission_Page>}></Route>

                                <Route path='/Vision' element={<Vision_Page></Vision_Page>}></Route>

                                <Route path='/ProductGallery' element={<Product_Gallery_Page></Product_Gallery_Page>}></Route>


                                <Route path='/Tradefair' element={<Tradefair_Participation_Page></Tradefair_Participation_Page>}></Route>

                                <Route path='/Category' element={<Category_Page></Category_Page>}></Route>

                                {/* <Route path='/Category/Subcategory' element={<SubCategory_Section></SubCategory_Section>}></Route> */}

                                <Route path='/Category/Subcategory/Product' element={<Product></Product>}></Route>

                            </Routes>

                        </BrowserRouter>
                    </Global.Provider>

                </div>)}
            </div>
        </>
    )
}

export default App

// {
//     "id": "01",
//     "SubCategory_Name": "Tshirts",
//     "Category_Name": "Readymade Garments",
//     "Product_Name": "Round Nack T-shirt",
//     "Thumbnail_Image": "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//     "Images": [
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg"
//     ],
//     "Tables": [
//         {
//             "id": "01",
//             "Table_Name": "General Information",
//             "Product Name": ["Round Nack T-shirt"],
//             "Packaging": ["Pastic Bag"],
//             "Size of Packing": ["20cm * 20cm * 10cm"],
//             "Sleeve": ["Full"]
//         },
//         {
//             "id": "02",
//             "Table_Name": "Pricing",
//             "1 - 34 pieces": ["$5.90"],
//             "35 - 599 pieces": ["$5.70"]
//         }
//     ]
// }