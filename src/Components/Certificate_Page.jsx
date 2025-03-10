import React from 'react'
import Navbar from './Navbar/Navbar'
// import Vid1 from "../Assets/Vedio/Vid1.mp4";
import Certificate_Section from './All_Sections/Certificate_Section/Certificate_Section';

import Footer from './Footer/Footer'
// import Heading from './Mini_Components/Heading';
import Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from '../Helmet_Jsx';

const Certificate_Page = () => {
    return (
        <>
            <div>
                {/* <Helmet_Jsx Title={Data.Accreditation.Title}></Helmet_Jsx> */}
                <Navbar />

                {/* Main Content with Background Video */}
                <div className="relative overflow-hidden">
                    {/* Background Video */}
                    {/* <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="fixed top-0 left-0 w-full h-full object-cover z-0 block"
                    >
                        <source src={Vid1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}

                    {/* Overlay for Better Readability */}
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>

                    {/* Main Content */}
                    <div className="relative z-20">

                        <Certificate_Section></Certificate_Section>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default Certificate_Page
