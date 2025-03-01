import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import About_Company from './About_Us Sections/About_Company/About_Company';
import Work_Section from './About_Us Sections/Work_Section/Work_Section';
// import Heading from './Mini_Components/Heading';
import Vid1 from "../Assets/Vedio/Vid1.mp4";
import Company_Details from './About_Us Sections/Company_Details/Company_Details';
import Why_Choose_Us from './About_Us Sections/Why_Choose_Us/Why_Choose_Us';
import Helmet_Jsx from '../Helmet_Jsx';
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json';

const AboutUs_Page = () => {
    return (
        <>
            <div className="user-select-none">
                {/* SEO Meta Tags */}
                <Helmet_Jsx Title={Seo_Data.Aboutpage.Title} Desc={Seo_Data.Aboutpage.Description} Url={Seo_Data.Aboutpage.Url}></Helmet_Jsx>

                {/* Navbar */}
                <Navbar />

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
                        {/* <Heading Title="About Us"></Heading> */}
                        {/* <Hero_Section></Hero_Section> */}
                        <About_Company />
                        <Company_Details />
                        <Work_Section />
                        <Why_Choose_Us />
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default AboutUs_Page;