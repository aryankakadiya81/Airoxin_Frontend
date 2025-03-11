import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import ContactUs_Section from './All_Sections/ContactUs_Section/ContactUs_Section'
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from "../Helmet_Jsx";

const ContactUs_Page = () => {
  return (
    <div>
      <Helmet_Jsx All={Seo_Data.ContactUspage}></Helmet_Jsx>
      <Navbar></Navbar>
      <ContactUs_Section></ContactUs_Section>
      
      <Footer></Footer>
    </div>
  )
}

export default ContactUs_Page
