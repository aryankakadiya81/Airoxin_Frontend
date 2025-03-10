import React from 'react'
import Team_Section from './Team_Section/Team_Section'
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from '../Helmet_Jsx'
// import Heading from './Mini_Components/Heading'

const Team_Page = () => {
    return (
        <div>
            <Helmet_Jsx All={Seo_Data.Team}></Helmet_Jsx>
            <Navbar></Navbar>
            {/* <Heading Title="Backbone of Our Company" Font="50px"></Heading> */}
            <Team_Section></Team_Section>
            <Footer></Footer>
        </div>
    )
}

export default Team_Page
