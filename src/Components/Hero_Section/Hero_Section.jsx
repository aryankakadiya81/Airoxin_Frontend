import React from 'react';
import Details from '../../Json_Files/All_Section_Details.json'
import Plane from '../../Assets/Wallpaper/Plane2.svg';
import { useNavigate } from 'react-router-dom';



const Hero_Section = () => {
    let Navigate = useNavigate();
    const scrollToTophero = () => {
        window.scrollTo(0, 0)
        Navigate("/About")
    }
    return (
        <>
            <div>
                <section className="py-3 py-lg-5 py-xl-8">
                    <div className="container overflow-hidden">
                        <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
                            <div className="col-12 col-lg-6 order-1 order-lg-0 animate__animated animate__fadeInUp">
                                <h2 className="display-3 fw-bold mb-3">
                                {Details.Shlogan_Section.Shlogen_black_line} <span className='text-primary'>{Details.Shlogan_Section.Shlogen_blue_line}</span>
                                </h2>
                                <p className="fs-4 mb-5">
                                {Details.Shlogan_Section.Paragraph}
                                </p>
                                <div className="d-grid gap-2 d-sm-flex">
                                    <button
                                        className="btn btn-primary p-3 fw-bold bsb-btn-2xl rounded-pill"
                                        type="button"
                                        onClick={scrollToTophero}

                                    >
                                        LERN MORE
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 text-center">
                                <div className="position-relative placeholder-wave">
                                    
                                    <img
                                        alt="img"
                                        draggable="false"
                                        className="img-fluid"
                                        src={Plane}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero_Section
