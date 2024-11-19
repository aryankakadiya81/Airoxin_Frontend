import React, { useContext } from 'react';
import './Navbar.css';
import { Global } from '../../App';
import Logo from '../../Assets/Logo/WHITE/HORIZONTAL/HORIZONTAL WHITE.svg';
import { Link, useNavigate } from 'react-router-dom';
import Product_Data from '../../Json_Files/Product_Page.json';

const Navbar = () => {

    let { Categorys, SubCategorys } = useContext(Global);

    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;
    return (
        <>
            <div className='sticky-top '>
                <nav className="navbar bg-primary navbar-expand-lg navbar-light static-top" style={{ backgroundColor: "#79adff" }}>
                    <div className="container">
                        <Link onClick={()=>{window.scrollTo(0, 0)}} className="navbar-brand" to="/">
                            <img
                                src={Logo}
                                draggable="false"
                                alt="Airoxin"
                                height={45}
                            />
                        </Link>
                        <button
                            className="navbar-toggler border-0 border-white"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fa-solid fa-bars fs-3 text-white border-0" />
                            
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item fs-5 active">
                                    <Link onClick={()=>{window.scrollTo(0, 0)}} className="nav-link" to="/Home">
                                        HOME
                                    </Link>
                                </li>
                                <li className="nav-item dropdown fs-5">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        OUR COMPANY
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <Link onClick={()=>{window.scrollTo(0, 0)}} className="dropdown-item" to="/About">
                                                ABOUT US
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={()=>{window.scrollTo(0, 0)}} className="dropdown-item" to="/Accreditation">
                                                ACCREDITATION
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown fs-5">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        PRODUCT
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdown"
                                    >

                                        {
                                            Product_Data.Category.map((el) => {
                                                return (
                                                    <li key={el.id}>
                                                        <Link onClick={() => { setCategory(el.Category_Name); window.scrollTo(0, 0); }} className="dropdown-item" to="/Category">
                                                            {el.Category_Name}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </li>
                                <li className="nav-item fs-5">
                                    <Link onClick={()=>{window.scrollTo(0, 0)}} className="nav-link" aria-current="page" to="/Team">
                                        OUR TEAM
                                    </Link>
                                </li>
                                <li className="nav-item fs-5">
                                    <Link onClick={()=>{window.scrollTo(0, 0)}} className="nav-link" aria-current="page" to='/Tradefair'>
                                        TRADE FAIR PARTICIPATION
                                    </Link>
                                </li>
                                <li className="nav-item fs-5">
                                    <Link onClick={()=>{window.scrollTo(0, 0)}} className="nav-link " aria-current="page" to="/Contact">
                                        CONTACT US
                                    </Link>
                                </li>
                                {/* <li className="nav-item align-content-center">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="specificSizeInputName"
                                        placeholder="Search..."
                                    />
                                </li> */}

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Navbar
