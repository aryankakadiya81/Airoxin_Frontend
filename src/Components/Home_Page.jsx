import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero_Section from "./All_Sections/Hero_Section/Hero_Section";
import Service_Section from "./All_Sections/Service_Section/Service_Section";
import About_Company from "./All_Sections/About_Company/About_Company";
// import Team_Section from "./Team_Section/Team_Section";
import Consign_Section from "./All_Sections/Consign_Section/Consign_Section";
import Footer from "./Footer/Footer";
import Helmet_Jsx from "../Helmet_Jsx";
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json';
// import Vision_Mission_Section from "./All_Sections/Vision_Mission_Section/Vision_Mission_Section";
import Product_Features_Section from "./All_Sections/Product_Features_Section/Product_Features_Section";
// import Product_Advantage_Section from "./All_Sections/Product_Advantage_Section/Product_Advantage_Section";



function Home_Page() {

 
  return (
    <>
      { (<div className="bg-gray-900">
        <Helmet_Jsx All={Seo_Data.Homepage}></Helmet_Jsx>
        
        <Navbar></Navbar>
        <Hero_Section></Hero_Section>
        <Service_Section></Service_Section>
        <About_Company></About_Company>
        {/* <Team_Section></Team_Section> */}
        {/* <Vision_Mission_Section></Vision_Mission_Section> */}
        <Product_Features_Section></Product_Features_Section>
        <Consign_Section></Consign_Section>
        {/* <Product_Advantage_Section></Product_Advantage_Section> */}
        {/* <Work_Section></Work_Section> */}
        {/* <Our_Client_Section></Our_Client_Section> */}
        {/* <ContactUs_Section></ContactUs_Section> */}
        <Footer></Footer>

      </div>)}
    </>
  );
}

export default Home_Page;
