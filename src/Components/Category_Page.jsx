import React, { useContext } from 'react';
import { Global } from '../App';
import Navbar from './Navbar/Navbar';
import SubCategory_Section from './Product/Category_Section';
import Footer from './Footer/Footer';
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from "../Helmet_Jsx";
import Vid1 from "../Assets/Vedio/Vid1.mp4";




const Category_Page = () => {
    let { Categorys, SubCategorys } = useContext(Global);

    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;

    // console.log(Category, SubCategory);
    return (
        <>
            <Helmet_Jsx Title={Seo_Data.Productpage.Title} Desc={Seo_Data.Productpage.Description}></Helmet_Jsx>
            <Navbar></Navbar>
            {/* Main Content with Background Video */}
            <div className="relative overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="fixed top-0 left-0 w-full h-full object-cover z-0 block"
                >
                    <source src={Vid1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay for Better Readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                {/* Main Content */}
                <div className="relative z-20">
                    {/* <Heading Title={Category}></Heading> */}
                    <SubCategory_Section></SubCategory_Section>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}

export default Category_Page
