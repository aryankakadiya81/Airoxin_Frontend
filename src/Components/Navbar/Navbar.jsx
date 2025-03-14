import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Global } from '../../App';
import Pdf from '../../Assets/Pdf/Airoxin International Catalog.pdf';
import Logo from '../../Assets/Logo/WHITE/HORIZONTAL/HORIZONTAL WHITE.svg';
import { Link, useNavigate } from 'react-router-dom';
import Product_Data from '../../Json_Files/Product_Page.json';


const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

    let { Categorys, SubCategorys, Loader } = useContext(Global);
    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;
    let [IsLoading, setIsLoading] = Loader;
    let Scroll = () => {
        window.scrollTo(0, 0);
        setIsLoading(true);
    }

    const DownloadBroucher = () => {
        const link = document.createElement("a");
        link.href = Pdf;
        link.download = "AIROXIN Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Catalogue Download Successfully");
    };


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    };


    return (
        <nav className={`bg-[#192F40] p-4 mt-0 sticky top-0 z-50 font-semibold sm:text-lg lg:text-lg md:text-base`}>

            <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between">
                <Link onClick={Scroll} to="/">
                    <img
                        src={Logo}
                        draggable="false"
                        alt="Airoxin"
                        className='xxs:w-32 xs:w-36 sm:w-40 md:w-40 lg:w-52 xl:w-52 2xl:w-56 3xl:w-60'
                    />
                </Link>
                <button
                    onClick={toggleMobileMenu}
                    type="button"
                    className="md:hidden text-white hover:text-white focus:text-white focus:outline-none"
                    aria-label="Toggle navigation"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        )}
                    </svg>
                </button>

                <div
                    className={`${isMobileMenuOpen ? 'flex' : 'hidden'
                        } md:flex md:items-center md:w-auto w-full`}
                    id="menu"
                >
                    <ul className="font-basef text-md flex flex-col md:flex-row md:justify-end md:items-center text-[#FFFFFF] md:gap-x-3">
                        <li>
                            <Link onClick={Scroll} to="/Home" className="block py-2 px-3 active:bg-[#124E66] hover:bg-[#1A3D58]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={Scroll} to="/About" className="block py-2 px-3 active:bg-[#124E66] hover:bg-[#1A3D58]">
                                About Us
                            </Link>
                        </li>

                        <li onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)} onClick={toggleDropdown}>
                            <button

                                className="py-2 px-3 active:bg-[#124E66] hover:bg-[#1A3D58] flex items-center"
                                aria-label="Toggle dropdown"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                Our Company
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul
                                    className={`absolute z-10 bg-[#1E2B33] rounded-md text-[#E0E0E0] shadow-lg mt-0 w-auto`}
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="services-dropdown"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                >
                                    <li onMouseEnter={() => setIsDropdownOpen(true)}>

                                        <Link onClick={Scroll} className="hover:bg-[#1A3D58] active:bg-[#124E66] block py-2 px-4 hover:text-white"
                                            role="menuitem"
                                            to='/Infrastructure'>
                                            Infrastructure
                                        </Link>
                                    </li>
                                    {/* <li onMouseEnter={() => setIsDropdownOpen(true)}>
                                        <Link onClick={Scroll} className="hover:bg-[#1A3D58] active:bg-[#124E66] block py-2 px-4 hover:text-white"
                                            role="menuitem" to="/Certificates">
                                            Certificates
                                        </Link>
                                    </li> */}


                                    <li onMouseEnter={() => setIsDropdownOpen(true)}>
                                        <Link onClick={Scroll} to="/ProductGallery" className="hover:bg-[#1A3D58] active:bg-[#124E66] block py-2 px-4 hover:text-white"
                                            role="menuitem">
                                            Product Gallery
                                        </Link>
                                    </li>


                                    <li onMouseEnter={() => setIsDropdownOpen(true)}>
                                        <p onClick={DownloadBroucher} to="/ProductGallery" className="hover:bg-[#1A3D58] active:bg-[#124E66] block py-2 px-4 hover:text-white"
                                            role="menuitem">
                                            Get Cetalogue
                                        </p>
                                    </li>
                                    {/* <li onMouseEnter={() => setIsDropdownOpen(true)}>
                                        <Link onClick={Scroll} to="/ProductGallery" className="hover:bg-[#1A3D58] active:bg-[#124E66] block py-2 px-4 hover:text-white"
                                            role="menuitem">
                                            Get Catalogue

                                        </Link>
                                    </li> */}
                                    {/* <li onMouseEnter={() => setIsDropdownOpen(true)}>

                                        <Link onClick={Scroll} className="hover:bg-[#1A3D58] active:bg-[#124E66] block py-2 px-4 hover:text-white"
                                            role="menuitem"
                                            to='/Tradefair'>
                                            TRADE FAIR PARTICIPATION
                                        </Link>
                                    </li> */}
                                </ul>
                            )}
                        </li>


                        <li onMouseEnter={() => setIsDropdownOpen1(true)}
                            onMouseLeave={() => setIsDropdownOpen1(false)} className='relative'>
                            <button
                                onClick={toggleDropdown1}
                                className="py-2 px-3 active:bg-[#124E66] hover:bg-[#1A3D58] flex items-center"
                                aria-label="Toggle dropdown"
                                onMouseEnter={() => setIsDropdownOpen1(true)}
                            >
                                Products
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen1 ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            {isDropdownOpen1 && (
                                <ul
                                    className={`absolute z-10 text-[#E0E0E0] bg-[#1E2B33] rounded-md shadow-lg mt-0 w-56`}
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="services-dropdown"
                                    onMouseEnter={() => setIsDropdownOpen1(true)}
                                >



                                    {
                                        Product_Data.Category.map((el) => {
                                            return (
                                                <li key={el.id} onMouseEnter={() => setIsDropdownOpen1(true)}>
                                                    <Link onClick={() => { setCategory(el.Category_Name); window.scrollTo(0, 0); setIsLoading(true); }} className="hover:bg-[#1A3D58] active:bg-[#124E66] block py-2 px-4 hover:text-white"
                                                        role="menuitem"
                                                        to="/Category">
                                                        {el.Category_Name}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }


                                </ul>
                            )}
                        </li>
                        {/* <li>

                            <Link onClick={Scroll} className="block py-2 px-3 active:bg-[#124E66] hover:bg-[#1A3D58]" to="/Team">
                                Our Team
                            </Link>
                        </li> */}


                        <li>
                            <Link to="/Contact" onClick={Scroll} className="block py-2 px-3 active:bg-[#124E66] hover:bg-[#1A3D58]" >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;