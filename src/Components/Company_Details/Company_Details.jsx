import React from 'react';
import Details from '../../Json_Files/About_Company_Details.json'
// import ppp from '../../Assets/Company_Details_Png/Aryan-Suit-SVG.svg';

const Company_Details = () => {
    return (


        <>
            <div className='container py-5'>

                <div className='row g-4'>


                    {
                        Details.map((el) => {
                            return (
                                <div key={el.id} className='col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12 animate__animated animate__fadeInUp mt-5 pt-5'>
                                    <div className="card shadow-lg border-2 rounded-4" style={{ backgroundColor: el.Background_Color, color: el.Font_Color }}>
                                        <span className="position-absolute top-0 start-50 translate-middle text-center rounded-circle p-2" style={{ width: "80px", height: "80px", fontSize: "42px", backgroundColor: el.Background_Color }}>
                                            <i className={el.Icon}></i>
                                        </span>
                                        <img draggable="false" src={el.Image} className="card-img-top pt-5 px-3" alt="..." />
                                        <div className="card-body text-start ms-3">
                                            <div className="fs-5 fw-bold">{el.Title}</div>
                                            <div className='fs-6 mt-1'>
                                                {el.Subtitles.map((elll) => {
                                                    return (
                                                        <>
                                                            <i className="bi bi-dash"></i> {elll}<br/>
                                                        </>
                                                    )
                                                })}



                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }














                </div>

            </div>
        </>
    )
}

export default Company_Details
