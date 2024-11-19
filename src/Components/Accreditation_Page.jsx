import React from 'react'
import Navbar from './Navbar/Navbar'
import Accreditation_Section from './Accreditation/Accreditation_Section'
import Footer from './Footer/Footer'
import Heading from './Mini_Components/Heading';
import Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from '../Helmet_Jsx';

const Accreditation_Page = () => {
    return (
        <>
            <div>
                <Helmet_Jsx Title={Data.Accreditation.Title}></Helmet_Jsx>
                <Navbar></Navbar>
                <Heading Title="Accreditation"></Heading>
                <Accreditation_Section></Accreditation_Section>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Accreditation_Page
