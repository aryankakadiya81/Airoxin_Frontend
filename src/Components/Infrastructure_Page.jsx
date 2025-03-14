import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from "../Helmet_Jsx";

import Infrastructure_Main_Section from './All_Sections/Infrastructure_Main_Section/Infrastructure_Main_Section';
import Infrastructure_OurFectory_Section from './All_Sections/Infrastructure_OurFectory_Section/Infrastructure_OurFectory_Section';
import Infrastructure_Conclusion_Section from './All_Sections/Infrastructure_Conclusion_Section/Infrastructure_Conclusion_Section';


const Infrastructure_Page = () => {
  return (
    <div>
      <Helmet_Jsx All={Seo_Data.Infrastructure}></Helmet_Jsx>
      <Navbar></Navbar>
      {/* <Heading Title="Contact Us"></Heading> */}
      <Infrastructure_Main_Section></Infrastructure_Main_Section>
      <Infrastructure_OurFectory_Section></Infrastructure_OurFectory_Section>
      <Infrastructure_Conclusion_Section></Infrastructure_Conclusion_Section>
      <Footer></Footer>
    </div>
  )
}

export default Infrastructure_Page
