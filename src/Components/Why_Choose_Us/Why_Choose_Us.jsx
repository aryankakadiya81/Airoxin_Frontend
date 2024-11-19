import React from 'react';
import Img from '../../Assets/Wallpaper/Choose_Us.svg';
import Details from '../../Json_Files/All_Section_Details.json';


const Why_Choose_Us = () => {
    return (
        <>
            <div className='container'>
                <div className='row my-5'>




                    <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12'>
                        <img
                            className="img-fluid p-5"
                            draggable="false"
                            src={Img}
                            alt="About 2"
                        />
                    </div>

                    <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 px-3 py-5'>
                        <div className='fs-1 fw-bold mb-4 animate__animated animate__fadeInUp'>
                            {Details.Why_Choose_Us_Section.Title}
                        </div>
                        <div>

                            {
                                Details.Why_Choose_Us_Section.Features.map((el) => {
                                    return (
                                        <div className="d-flex align-items-center mb-3 animate__animated animate__fadeInUp">
                                            <div className="me-3 text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={28}
                                                    height={28}
                                                    fill="currentColor"
                                                    className="bi bi-check-circle-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="fs-5 m-0">
                                                    {el}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Why_Choose_Us
