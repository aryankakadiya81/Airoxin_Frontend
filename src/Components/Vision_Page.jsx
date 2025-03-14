import React from 'react';
import { motion } from 'framer-motion';
import Datas from '../Json_Files/Vision_Mission_Page.json'
import OurVision_Hero_Section from './All_Sections/OurVision_Hero_Section/OurVision_Hero_Section';
import Our_Vision_Key_Aspirations_Section from './All_Sections/Our_Vision_Key_Aspirations_Section/Our_Vision_Key_Aspirations_Section';
import Why_Vision_Matters_Section from './All_Sections/Why_Vision_Matters_Section/Why_Vision_Matters_Section';
import Vision_Conclusion_Section from './All_Sections/Vision_Conclusion_Section/Vision_Conclusion_Section';
import OurVision_In_Action_Section from './All_Sections/OurVision_In_Action_Section/OurVision_In_Action_Section';
import Full_Screen_Image_Section from './All_Sections/Full_Screen_Image_Section/Full_Screen_Image_Section';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Vision_Page = () => {
    return (
        <>
        <Navbar></Navbar>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-900"
            >
                <OurVision_Hero_Section></OurVision_Hero_Section>
                <Why_Vision_Matters_Section></Why_Vision_Matters_Section>
                <Our_Vision_Key_Aspirations_Section></Our_Vision_Key_Aspirations_Section>
                <OurVision_In_Action_Section></OurVision_In_Action_Section>
                <Vision_Conclusion_Section></Vision_Conclusion_Section>
                <Full_Screen_Image_Section URL={Datas.Vision_Page.Base_Image}></Full_Screen_Image_Section>
            </motion.section>
            <Footer></Footer>
        </>
    );
};

export default Vision_Page;