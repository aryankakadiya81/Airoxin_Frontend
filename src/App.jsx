import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { useState, createContext } from 'react';
import Logo from './Assets/Logo/ICON/icon.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_Page from './Components/Home_Page';
import Error_Page from './Components/Error_Page/Error_Page'
import AboutUs_Page from './Components/AboutUs_Page';
import Team_Page from './Components/Team_Page';
import ContactUs_Page from './Components/ContactUs_Page';
import Accreditation_Page from './Components/Accreditation_Page';
import Tradefair_Participation_Page from './Components/Tradefair_Participation_Page';

import Category_Page from './Components/Category_Page';
import SubCategory_Section from './Components/Product/SubCategory_Section';
import Product from './Components/Product/Product';
import Pro_Data from './Json_Files/Product_Page.json'
// import Tostify from './Tostify';
import { ToastContainer } from 'react-toastify';
// import Company_Details from './Components/Company_Details/Company_Details';




// import Img from './Components/Img';

export let Global = createContext();



const App = () => {

    let [Category, setCategory] = useState(Pro_Data.Products[0].Category_Name);
    let [SubCategory, setSubCategory] = useState(Pro_Data.Products[0].SubCategory_Name);
    let [Selected_Product, setSelected_Product] = useState(Pro_Data.Products[0]);

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
    return (
        <>
            <div className='user-select-none'>
                <ToastContainer></ToastContainer>
                <SpeedInsights />
                <Global.Provider value={{ Categorys: [Category, setCategory], SubCategorys: [SubCategory, setSubCategory], Selected_Products: [Selected_Product, setSelected_Product] }} >

                    <FloatingWhatsApp
                        phoneNumber="+91 9925614381"
                        accountName="AIROXIN INTERNATIONAL"
                        chatMessage="Hello Dear, How Can I Help You?"
                        avatar={Logo}
                    />
                    <BrowserRouter>


                        <Routes>

                            <Route path="*" element={<Error_Page></Error_Page>}></Route>

                            <Route path="/Error" element={<Error_Page></Error_Page>}></Route>

                            <Route path="/" element={<Home_Page></Home_Page>}></Route>

                            <Route path="/Home" element={<Home_Page></Home_Page>}></Route>
                            <Route path="/About" element={<AboutUs_Page></AboutUs_Page>}></Route>

                            <Route path="/Team" element={<Team_Page></Team_Page>}></Route>

                            <Route path="/Contact" element={<ContactUs_Page></ContactUs_Page>}></Route>

                            <Route path='/Accreditation' element={<Accreditation_Page></Accreditation_Page>}></Route>

                            <Route path='/Tradefair' element={<Tradefair_Participation_Page></Tradefair_Participation_Page>}></Route>

                            <Route path='/Category' element={<Category_Page></Category_Page>}></Route>

                            <Route path='/Category/Subcategory' element={<SubCategory_Section></SubCategory_Section>}></Route>

                            <Route path='/Category/Subcategory/Product' element={<Product></Product>}></Route>

                        </Routes>

                    </BrowserRouter>
                </Global.Provider>

            </div>
        </>
    )
}

export default App
