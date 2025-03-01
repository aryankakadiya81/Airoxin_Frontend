import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero_Section from "./Home_Page Sections/Hero_Section/Hero_Section";
import Service_Section from "./Home_Page Sections/Service_Section/Service_Section";
import About_Company from "./Home_Page Sections/About_Company/About_Company";
import Consign_Section from "./Home_Page Sections/Consign_Section/Consign_Section";
import Work_Section from "./Home_Page Sections/Work_Section/Work_Section";
// import Team_Section from "./Team_Section/Team_Section";
// import ContactUs_Section from "./ContactUs_Section/ContactUs_Section";
import Footer from "./Footer/Footer";
import Helmet_Jsx from "../Helmet_Jsx";
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'
// import Our_Client_Section from "./Home_Page Sections/Our_Client_Section/Our_Client_Section";


// import Error_Page from "./Components/Error_Page/Error_Page";



// Title={"Airoxin International: Your Global Trade Partner for Readymade Garments and More"} Description={"Airoxin International is a leading global trade company specializing in the import-export of readymade garments and other products. Benefit from our expertise, global network, and commitment to quality."} CalltoAction={" Encourage visitors to contact you or explore your services further." }

function Home_Page() {
  return (
    <>
      <div>
        
        <Helmet_Jsx Title={Seo_Data.Homepage.Title} Desc={Seo_Data.Homepage.Description} Url={Seo_Data.Homepage.Url}></Helmet_Jsx>
        <Navbar></Navbar>
        <Hero_Section></Hero_Section>
        <Service_Section></Service_Section>
        <About_Company></About_Company>
        <Consign_Section></Consign_Section>
        <Work_Section></Work_Section>
        {/* <Our_Client_Section></Our_Client_Section> */}
        {/* <Team_Section></Team_Section> */}
        {/* <ContactUs_Section></ContactUs_Section> */}
        <Footer></Footer>

      </div>
    </>
  );
}

export default Home_Page;
