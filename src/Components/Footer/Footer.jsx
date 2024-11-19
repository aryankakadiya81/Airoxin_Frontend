import Pdf from '../../Assets/Pdf/Airoxin International Brochure.pdf'
import Pdf2 from '../../Assets/Pdf/Airoxin International Card.pdf'
import React, { useState, useContext } from 'react';
import { Global } from '../../App.jsx';
import Logo from '../../Assets/Logo/HORIZONTAL/HORIZONTAL.svg';
import { Link } from 'react-router-dom';
import Contact_Json from '../../Json_Files/Company_Contact_Page.json';
import Product_Data from '../../Json_Files/Product_Page.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Footer = () => {


    let { Categorys, SubCategorys } = useContext(Global);

    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;

    let [Email, setEmail] = useState("");

    const HSubmit = async (e) => {

        // console.log(Name, Email, Phone, Subject, Msg);
        e.preventDefault();
        toast.success("Subscribe Successfully");
        try {
            const response = await axios.post("https://airoxin-backend.onrender.com/v1/Mail", {
                Name: "From Subscribe",
                Email: Email,
                Country: "From Subscribe",
                CountryCode: "From Subscribe",
                CountryDielCode: "From Subscribe",
                Mobile: "From Subscribe",
                Sub: "From Subscribe",
                Txt: "From Subscribe"
            });
            setEmail("");

        } catch (error) {
            console.log(error);
        }


    }

    let DownloadBroucher = () => {
        const pdfUrl = Pdf;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "AIROXIN Brochure.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    let DownloadCard = () => {
        const pdfUrl = Pdf2;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "AIROXIN CARD.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    let [Data, setData] = useState(Contact_Json);
    return (
        <>
            <div>
                <footer className="footer" style={{ backgroundColor: "#343a3e" }}>
                    <section className="py-4 py-md-5 py-xl-8 border-top">
                        <div className="container overflow-hidden">
                            <div className="row gy-4 gy-lg-0">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="widget">
                                        <h4 className="widget-title mb-4 text-white fs-2">Get in Touch</h4>
                                        <div className="row mb-3 text-white">
                                            <i className="col-2 fa-solid fa-location-dot fs-3 align-content-center"></i>
                                            <p className='col-10 fs-5'>
                                                {Data.add}
                                            </p>
                                        </div>
                                        <div className="row mb-3 text-white">
                                            <i className="col-2 fa-solid fa-phone fs-3 align-content-center"></i>


                                            {Data.phone.map((ele) => {
                                                return (
                                                    <>
                                                        <a
                                                            className="col-10 link-info text-decoration-none text-white fs-5"
                                                            href={`tel:${ele}`}
                                                        >
                                                            {ele}
                                                        </a>
                                                        <br></br>
                                                    </>
                                                )
                                            })}

                                        </div>
                                        <div className="row mb-3 text-white">
                                            <i className="col-2 bi bi-envelope-fill fs-3 align-content-center"></i>
                                            <div className='col-10'>

                                                {Data.email.map((ele) => {
                                                    return (
                                                        <>
                                                            <a
                                                                className=" link-info text-decoration-none text-white fs-5"
                                                                href={`mailto:${ele}`}
                                                            >
                                                                {ele}
                                                            </a><br></br>
                                                        </>
                                                    )
                                                })}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                                    <div className="widget">
                                        <h4 className="widget-title mb-4 fs-2 text-white">Quick Links</h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <Link to="/Home" onClick={() => { window.scrollTo(0, 0) }} className="link-info text-decoration-none fs-5 text-white">
                                                    <i className="bi bi-dash"></i> Home
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link to="/About" onClick={() => { window.scrollTo(0, 0) }} className="link-info text-decoration-none fs-5 text-white">
                                                    <i className="bi bi-dash"></i> About Us
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link to="/Accreditation" onClick={() => { window.scrollTo(0, 0) }} className="link-info text-decoration-none fs-5 text-white">
                                                    <i className="bi bi-dash"></i> Accreditation
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link to="/Team" onClick={() => { window.scrollTo(0, 0) }} className="link-info text-decoration-none fs-5 text-white">
                                                    <i className="bi bi-dash"></i> Our Team
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link to="/Contact" onClick={() => { window.scrollTo(0, 0) }} className="link-info text-decoration-none fs-5 text-white">
                                                    <i className="bi bi-dash"></i> Contact Us
                                                </Link>
                                            </li>
                                            <li className="mb-0">
                                                <Link onClick={() => { window.scrollTo(0, 0) }} to="/Tradefair" className="link-info text-decoration-none fs-5 text-white">
                                                    <i className="bi bi-dash"></i> Trade Fair Participation
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                                    <div className="widget">
                                        <h4 className="widget-title mb-4 fs-2 text-white">Products</h4>
                                        <ul className="list-unstyled">

                                            {Product_Data.Category.map((el) => {
                                                return (
                                                    <li key={el.id} className="mb-2">
                                                        <Link onClick={() => {
                                                            window.scrollTo(0, 0); setCategory(el.Category_Name);
                                                        }} to="/Category" className="link-info text-decoration-none fs-5 text-white">
                                                            <i className="bi bi-dash"></i> {el.Category_Name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}



                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">

                                    <div className="widget">
                                        <h4 className="widget-title mb-4 fs-2 text-white">Our Newsletter</h4>

                                        <form onSubmit={HSubmit}>
                                            <div className="row gy-4">
                                                <div className="col-12">
                                                    <div className="input-group">
                                                        <span
                                                            className="input-group-text"
                                                            id="email-newsletter-addon"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="bi bi-envelope"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                            </svg>
                                                        </span>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email-newsletter"
                                                            placeholder="Email Address"
                                                            aria-label="email-newsletter"
                                                            aria-describedby="email-newsletter-addon"
                                                            value={Email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button className="btn btn-primary" type="submit" disabled={!Email}>
                                                            Subscribe
                                                        </button>
                                                    </div>
                                                </div>



                                                {/* <div className="col-12">
                                                    <div className="d-grid">
                                                    <button className="btn btn-primary" type="submit">
                                                    Download Card
                                                    </button>
                                                    </div>
                                                    </div> */}

                                            </div>
                                        </form>
                                    </div>
                                    <div className='row g-4 mt-1'>
                                        <div className="col-6">
                                            <div className="d-grid">
                                                <button className="btn btn-primary" onClick={DownloadBroucher}>
                                                    Download<br />Broucher
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="d-grid">
                                                <button className="btn btn-primary" onClick={DownloadCard}>
                                                    Download<br />Card
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="py-2 py-md-5 py-xl-3 border-top border-light-subtle" style={{ backgroundColor: "#e8f2ff" }}>
                        <div className="container overflow-hidden">
                            <div className="row gy-4 gy-md-0 align-items-sm-center">
                                <div className="col-xs-12 col-sm-6 col-md-4 order-0 order-md-0">
                                    <div className="footer-logo-wrapper text-center text-sm-start">
                                        <Link onClick={() => { window.scrollTo(0, 0) }} to="/Home">
                                            <img
                                                src={Logo}
                                                draggable="false"
                                                alt="BootstrapBrain Logo"
                                                width={175}
                                                height={57}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-4 order-2 order-md-1">

                                    <div className="credits text-dark text-center mt-0 fs-5">
                                        © 2024. {Data.name}
                                    </div>
                                    <div className="footer-copyright-wrapper text-center fs-5">
                                        All Rights Reserved.
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 order-1 order-md-2">
                                    <div className="social-media-wrapper">
                                        <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-sm-end">
                                            <li className="me-3">
                                                <a target="_blank" href={Data.facebook} className="link-dark link-opacity-75-hover">
                                                    <i className="fs-2 fa-brands fa-square-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="me-3">
                                                <a target="_blank" href={Data.twitter} className="link-dark link-opacity-75-hover">
                                                    <i className="fs-2 fa-brands fa-square-x-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="me-3">
                                                <a target="_blank" href={Data.linkedin} className="link-dark link-opacity-75-hover">
                                                    <i className="fs-2 fa-brands fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li className="me-3">
                                                <a target="_blank" href={Data.whatsapp} className="link-dark link-opacity-75-hover">
                                                    <i className="fs-2 fa-brands fa-square-whatsapp"></i>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a target="_blank" href={Data.instagram} className="link-dark link-opacity-75-hover">
                                                    <i className="fs-2 fa-brands fa-square-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Footer
