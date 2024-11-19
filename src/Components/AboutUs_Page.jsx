import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import About_Company from './About_Company/About_Company';
// import Hero_Section from './Hero_Section/Hero_Section';
import Work_Section from './Work_Section/Work_Section';
import Heading from './Mini_Components/Heading';
import Company_Details from './Company_Details/Company_Details';
import Why_Choose_Us from './Why_Choose_Us/Why_Choose_Us';
import Helmet_Jsx from '../Helmet_Jsx';
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'


const AboutUs_Page = () => {
    return (
        <>
            <div className='user-select-none'>
            <Helmet_Jsx Title={Seo_Data.Aboutpage.Title} Desc={Seo_Data.Aboutpage.Description} Url={Seo_Data.Aboutpage.Url}></Helmet_Jsx>
                <Navbar></Navbar>
                <Heading Title="About Us"></Heading>
                {/* <Hero_Section></Hero_Section> */}
                <About_Company></About_Company>
                <Company_Details></Company_Details>
                <Work_Section></Work_Section>
                <Why_Choose_Us></Why_Choose_Us>
                <Footer></Footer>
                
            </div>
        </>
    )
}

export default AboutUs_Page
