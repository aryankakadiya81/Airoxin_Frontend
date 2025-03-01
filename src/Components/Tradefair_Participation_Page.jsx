import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Tradefair_Participation from './Tradefair_Participation/Tradefair_Participation';
import Vid1 from "../Assets/Vedio/Vid1.mp4";

import Helmet_Jsx from '../Helmet_Jsx';
import Data from '../Json_Files/SEO_Meta_Keyword.json'

const Tradefair_Participation_Page = () => {
    return (
        <>
            <div>
                <Helmet_Jsx Title={Data.Tradefair_Participation.Title}></Helmet_Jsx>

                <Navbar />

                {/* Main Content with Background Video */}
                <div className="relative overflow-hidden">
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="fixed top-0 left-0 w-full h-full object-cover z-0"
                    >
                        <source src={Vid1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay for Better Readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                    {/* Main Content */}
                    <div className="relative z-20">
                        {/* <Heading Title="Tradefair Participation"></Heading> */}
                        <Tradefair_Participation></Tradefair_Participation>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default Tradefair_Participation_Page
