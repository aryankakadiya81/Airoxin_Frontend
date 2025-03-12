import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Seo_Data from '../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from "../Helmet_Jsx";
import Datas from '../Json_Files/Vision_Mission_Page.json'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import WhyBagasse_Tableware_Section from './All_Sections/WhyBagasse_Tableware_Section/WhyBagasse_Tableware_Section';
import Mission_Conclusion_Section from './All_Sections/Mission_Conclusion_Section/Mission_Conclusion_Section';
import Mission_OurCommitmentToExcellence_Section from './Mission_OurCommitmentToExcellence_Section/Mission_OurCommitmentToExcellence_Section';
import Full_Screen_Image_Section from './All_Sections/Full_Screen_Image_Section/Full_Screen_Image_Section';
import Mission_Hero_Section from './Mission_Hero_Section/Mission_Hero_Section';

const Mission_Page = () => {
    let [Data, SetData] = useState(Datas.Mission_Page);



    return (
        <>
            <Helmet_Jsx All={Seo_Data.Aboutpage}></Helmet_Jsx>
            <Navbar></Navbar>

            <Mission_Hero_Section></Mission_Hero_Section>
            <Mission_OurCommitmentToExcellence_Section></Mission_OurCommitmentToExcellence_Section>
            <WhyBagasse_Tableware_Section></WhyBagasse_Tableware_Section>
            <Mission_Conclusion_Section></Mission_Conclusion_Section>
            <Full_Screen_Image_Section URL={Data.Conclusion.Base_Image}></Full_Screen_Image_Section>

            <Footer></Footer>
        </>
    );
};

export default Mission_Page;