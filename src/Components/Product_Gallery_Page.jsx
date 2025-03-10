import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from "../Helmet_Jsx";
import Product_Gallery_Section from './All_Sections/Product_Gallery_Section/Product_Gallery_Section';



const Product_Gallery_Page = () => {
  return (
    <div>
      <Helmet_Jsx All={Seo_Data.Productpage}></Helmet_Jsx>
      <Navbar></Navbar>
      {/* <Heading Title="Contact Us"></Heading> */}
      <Product_Gallery_Section></Product_Gallery_Section>
      <Footer></Footer>
    </div>
  )
}

export default Product_Gallery_Page
