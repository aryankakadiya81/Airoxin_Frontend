import React from 'react';
import Contact from '../../Json_Files/Company_Contact_Page.json';
import Details from '../../Json_Files/All_Section_Details.json';
import Img from '../../Assets/Wallpaper/Team1.svg';

import { useNavigate } from 'react-router-dom';

const About_Company = () => {
    let Navigate = useNavigate();
    const scrollToTopAbout = () => {
        window.scrollTo(0, 0);
        Navigate("/Contact");
    }
    let i = 0;

    return (
        <>
            <div>
                <>
                    {/* About 2 - Bootstrap Brain Component */}
                    <section className="py-3 py-md-5">
                        <div className="container">
                            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                                <div className="col-12 col-lg-6 placeholder-wave">
                                    <img
                                        className="img-fluid p-5 user-select-none"
                                        draggable="false"
                                        src={Img}
                                        alt="About 2"
                                        height={300}
                                    />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="row justify-content-xl-center animate__animated animate__fadeInUp">
                                        <div className="col-12 col-xl-10">
                                            <h2 className="mb-3 fw-bold fs-1">About<span className='text-primary'> {Contact.name}</span></h2>
                                            <p className="lead fs-3 mb-3 mb-xl-5">
                                                {Details.About_Company_Section.Paragraph}
                                            </p>
                                            


                                            <button
                                                type="button"
                                                className="btn bsb-btn-xl btn-outline-primary rounded-pill"
                                                onClick={scrollToTopAbout}
                                            >
                                                Connect Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>

            </div>
        </>
    )
}

export default About_Company;
