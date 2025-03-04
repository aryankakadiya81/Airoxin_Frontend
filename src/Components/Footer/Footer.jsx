import { Global } from '../../App';
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Pdf from '../../Assets/Pdf/Airoxin International Catalog.pdf';
import Pdf2 from '../../Assets/Pdf/Airoxin International Card.pdf';
import Logo from '../../Assets/Logo/WHITE/HORIZONTAL/HORIZONTAL WHITE.svg';
import { Link } from 'react-router-dom';
import Contact_Json from '../../Json_Files/Company_Contact_Page.json';
import Product_Data from '../../Json_Files/Product_Page.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Footer = () => {
    const { Categorys, SubCategorys, Loader } = useContext(Global);
    const [Category, setCategory] = Categorys;
    const [SubCategory, setSubCategory] = SubCategorys;
    let [IsLoading, setIsLoading] = Loader;

    const [Email, setEmail] = useState("");
    const [Data, setData] = useState(Contact_Json);

    let Scroll = () => {
        window.scrollTo(0, 0);
        setIsLoading(true);
    }


    // Handle Subscribe Form Submission
    const HSubmit = async (e) => {
        e.preventDefault();
        toast.success("Subscribe Successfully");
        try {
            await axios.post("https://airoxin-backend.onrender.com/v1/Mail", {
                name: "From Subscribe",
                email: Email,
                country: "From Subscribe",
                countrycode: "From Subscribe",
                phone: "From Subscribe",
                subject: "From Subscribe",
                message: "From Subscribe"
            });
            setEmail("");
        } catch (error) {
            console.error(error);
        }
    };

    // Download Brochure
    const DownloadBroucher = () => {
        const link = document.createElement("a");
        link.href = Pdf;
        link.download = "AIROXIN Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Download Card
    const DownloadCard = () => {
        const link = document.createElement("a");
        link.href = Pdf2;
        link.download = "AIROXIN CARD.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <footer className="bg-[#1E2B33] text-white py-16 px-4 relative overflow-hidden">
            {/* Overlay for Unique Effect */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20"></div>

            {/* Container */}
            <div className="max-w-[1920px] mx-auto relative z-10">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Section 1: Get in Touch */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {/* Logo */}
                        <div className="flex justify-center sm:justify-start mb-4">
                            <img
                                src={Logo}
                                alt="Company Logo"
                                className="w-32 h-auto sm:w-40"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-blue-500">Get in Touch</h3>
                        <p className="text-gray-400">{Data.add}</p>
                        <ul className="space-y-2">
                            {Data.phone.map((ele, index) => (
                                <li key={index} className="text-gray-400 flex items-center">
                                    <i className="fa-solid fa-phone text-blue-500 mr-2"></i>
                                    {ele}
                                </li>
                            ))}
                            {Data.email.map((ele, index) => (
                                <li key={index} className="text-gray-400 flex items-center">
                                    <i className="fa-solid fa-envelope text-blue-500 mr-2"></i>
                                    {ele}
                                </li>
                            ))}
                        </ul>

                        {/* Social Media Buttons */}
                        <div className="flex space-x-4 mt-4">
                            <a
                                href={Data.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-facebook text-2xl sm:text-3xl"></i>
                            </a>
                            <a
                                href={Data.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-instagram text-2xl sm:text-3xl"></i>
                            </a>
                            <a
                                href={Data.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-x-twitter text-2xl sm:text-3xl"></i>
                            </a>
                            <a
                                href={Data.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-linkedin text-2xl sm:text-3xl"></i>
                            </a>
                            <a
                                href={Data.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl"></i>
                            </a>
                        </div>
                    </motion.div>

                    {/* Section 2: Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-blue-500">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/About" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/Accreditation" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Accreditation
                                </Link>
                            </li>
                            <li>
                                <Link to="/Tradefair" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Trade Fair Participation
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/Team" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Our Team
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/Contact" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Section 3: Products */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-blue-500">Products</h3>
                        <ul className="space-y-2">
                            {Product_Data.Category.map((el, index) => (
                                <li key={index}>
                                    <Link
                                        to="/Category"
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            setCategory(el.Category_Name);
                                            setIsLoading(true);
                                        }}
                                        className="text-gray-400 hover:text-blue-500 transition-colors"
                                    >
                                        {el.Category_Name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Section 4: Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-blue-500">Our Newsletter</h3>
                        <form onSubmit={HSubmit} className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            <button
                                type="submit"
                                className="w-full py-3 text-lg font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="space-y-2">
                            <button
                                onClick={DownloadBroucher}
                                className="w-full py-3 text-lg font-bold text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors duration-300"
                            >
                                Download Brochure
                            </button>
                            <button
                                onClick={DownloadCard}
                                className="w-full py-3 text-lg font-bold text-white bg-purple-500 hover:bg-purple-600 rounded-md transition-colors duration-300"
                            >
                                Download Card
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center text-gray-400"
                >
                    © 2024. {Data.name}. All Rights Reserved.
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;