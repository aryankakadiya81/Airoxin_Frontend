import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from "../Helmet_Jsx";
import Infrastructure_Section from './All_Sections/Infrastructure_Section/Infrastructure_Section'
import VisionPage from './VisionPage';


const Infrastructure_Page = () => {
  return (
    <div>
      <Helmet_Jsx All={Seo_Data.Infrastructure}></Helmet_Jsx>
      <Navbar></Navbar>
      {/* <Heading Title="Contact Us"></Heading> */}
      {/* <Infrastructure_Section></Infrastructure_Section> */}
      <VisionPage></VisionPage>
      <Footer></Footer>
    </div>
  )
}

export default Infrastructure_Page
