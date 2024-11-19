import React from 'react';
import Details from "../../Json_Files/All_Section_Details.json";
import Contact from "../../Json_Files/Company_Contact_Page.json"
// import Bbg from '../../Assets/Wallpaper/Earth_Wall.jpg';


{/* <section className="py-5 py-xl-8" style={{ backgroundImage: `url(${Bbg})`, backgroundAttachment: `fixed`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}> */ }

const Consign_Section = () => {
    let Bbg = "https://i.postimg.cc/qMJ35L45/Earth-Wall.jpg";
    return (
        <>
            <div>
                <section className="py-3 py-md-5 py-xl-8" style={{ backgroundImage: `url(${Bbg})`, backgroundAttachment: `fixed`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row gy-3 gy-md-5 gy-lg-0 align-items-center">
                            <div className="col-12 col-lg-5 my-4">
                                <h3 className="fs-2 text-dark fw-bold my-3">
                                    {Contact.name}
                                </h3>
                                <h4 className="display-5 fs-1 mb-3 mb-xl-4">
                                    {Details.Consign_Section.Paragraph}
                                </h4>


                            </div>
                            <div className="col-12 col-lg-7 placeholder-wave">
                                <div className="row justify-content-xl-end">
                                    <div className="col-12 col-xl-11">
                                        <div className="row gy-3 gy-md-4">


                                            {
                                                Details.Consign_Section.Box.map((el) => {
                                                    return (
                                                        <div key={el.id} className="col-12 col-sm-6 animate__animated animate__fadeInUp">
                                                            <div className="card border-0 border-bottom border-primary shadow-sm">
                                                                <div className="card-body text-center p-4 p-xxl-5">
                                                                    <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2">
                                                                        <i className={`${el.Icon} fs-2`}></i>
                                                                    </div>
                                                                    <h3 className="h1 mb-2">{el.Count}</h3>
                                                                    <p className="fs-5 mb-0 text-secondary">{el.Name}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Consign_Section
