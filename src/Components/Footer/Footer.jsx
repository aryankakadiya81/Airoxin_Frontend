import { Global } from '../../App';
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Pdf from '../../Assets/Pdf/Airoxin International Catalog.pdf';
import Logo from '../../Assets/Logo/WHITE/HORIZONTAL/HORIZONTAL WHITE.svg';
import { Link } from 'react-router-dom';
import Contact_Json from '../../Json_Files/Company_Contact_Page.json';
import Product_Data from '../../Json_Files/Product_Page.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Footer = () => {
    const [Data, setData] = useState(Contact_Json);
    const [Email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const { Categorys, SubCategorys, Loader } = useContext(Global);
    const [Category, setCategory] = Categorys;
    let [Load, setLoad] = useState(false)
    // const [SubCategory, setSubCategory] = SubCategorys;
    let [IsLoading, setIsLoading] = Loader;


    const HSubmit = async (e) => {
        e.preventDefault();


        toast.success("Subscribe Successfully");
        setLoad(true);
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
            setLoad(false);
        } catch (error) {
            console.error(error);
        }
    };

    let Scroll = () => {
        window.scrollTo(0, 0);
        setIsLoading(true);
    }

    // Download Brochure
    const DownloadBroucher = () => {
        const link = document.createElement("a");
        link.href = Pdf;
        link.download = "AIROXIN Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Catalogue Download Successfully");
    };

    return (
        <motion.footer
            initial={{ y: 100, opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-[#192f40] text-gray-400 py-10 overflow-hidden"
        >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">


                {/* Main Content Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.4
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-10"
                >
                    {/* Contact Details */}
                    <motion.div
                        variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="col-span-1"
                    >
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    className="text-green-500 text-xl"
                                >
                                    📍
                                </motion.span>
                                <p>{Contact_Json.add}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    className="text-green-500 text-xl"
                                >
                                    📞
                                </motion.span>
                                {
                                    Contact_Json.phone.map((el, ind) => {
                                        return (
                                            <p key={ind}>{el}</p>
                                        )
                                    })
                                }

                            </div>
                            <div className="flex items-center gap-3">
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    className="text-green-500 text-xl"
                                >
                                    ✉️
                                </motion.span>

                                {Contact_Json.email.map((el, index) => {
                                    return (
                                        <p key={index}>
                                            {el}
                                        </p>
                                    )
                                })}

                            </div>
                        </div>

                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="col-span-1"
                    >
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">

                            <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to="/" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Home
                                </Link>
                            </motion.li>

                            <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to="/About" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    About Us
                                </Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to="/Infrastructure" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Infrastructure
                                </Link>
                            </motion.li>
                            {/* <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to="/Certificates" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Certificates
                                </Link>
                            </motion.li> */}
                            <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to="/ProductGallery" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Product Gallery
                                </Link>
                            </motion.li>


                            <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link onClick={DownloadBroucher}className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Get Cetalogue
                                </Link>
                            </motion.li>
                            {/* <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to="/Tradefair" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Trade Fair Participation
                                </Link>
                            </motion.li> */}
                            {/* <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to="/Team" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Our Team
                                </Link>
                            </motion.li> */}
                            <motion.li
                                whileHover={{ marginLeft: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to="/Contact" onClick={Scroll} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    Contact Us
                                </Link>
                            </motion.li>

                        </ul>
                    </motion.div>

                    {/* Product Links */}
                    <motion.div
                        variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="col-span-1"
                    >
                        <h3 className="text-white text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            {Product_Data.Category.map((product) => (
                                <motion.li
                                    key={product.id}
                                    whileHover={{ marginLeft: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to="/Category"
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            setCategory(product.Category_Name);
                                            setIsLoading(true);
                                        }}
                                        className="text-gray-400 hover:text-blue-500 transition-colors"
                                    >
                                        {product.Category_Name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter Subscription */}
                    <motion.div
                        variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="col-span-1"
                    >
                        <h3 className="text-white text-lg font-semibold mb-4">Subscribe</h3>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <motion.input
                                type="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="bg-gray-800 rounded-lg p-3 flex-1"
                                whileFocus={{ scale: 1.02, borderColor: '#2D6A4F' }}
                                transition={{ duration: 0.2 }}
                            />


                            {/* {subscribed && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-green-500 mt-3"
                                >
                                    Subscribed successfully!
                                </motion.p>
                            )} */}
                        </form>

                        {/* <motion.button
                            disabled={Load === true || Email.length === 0}
                            type="submit"
                            onClick={HSubmit}
                            className="bg-green-600 text-white px-10 py-3 rounded-lg hover:bg-green-700 my-5 w-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Subscribe
                        </motion.button> */}
                        <motion.button
                            className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-10 my-5 w-full rounded-xl font-semibold"
                            disabled={Load === true || Email.length === 0}
                            type="submit"
                            onClick={HSubmit}
                        >
                            Subscribe
                        </motion.button>

                    </motion.div>
                </motion.div >

                {/* Bottom Section */}
                < motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row items-center justify-between"
                >
                    {/* Social Media */}
                    {/* < motion.div
                        className="flex gap-6 mb-4 sm:mb-0"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {
                            [FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    className="text-gray-400 hover:text-white text-2xl"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon />
                                </motion.a>
                            ))
                        }
                    </motion.div > */}

                    <div>
                        <img
                            src={Logo}
                            alt="Company Logo"
                            className="mx-auto mb-4 h-16"
                        />
                    </div>


                    <div className='mx-6'>
                        {/* Copyright */}
                        < motion.p
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            © 2018 AIROXIN INTERNATIONAL. All rights reserved.
                        </motion.p >
                    </div>


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
                            <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl"></i>                             </a>
                    </div>
                </motion.div >
            </div >
        </motion.footer >
    );
};

export default Footer;