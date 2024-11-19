import React from 'react';
import Detail from '../../Json_Files/All_Section_Details.json'
import Work from '../../Assets/Wallpaper/Work1.svg';

const Work_Section = () => {
    return (
        <>
            <div>
                <section className="py-3 py-md-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">

                            <div className="col-12 col-lg-6 animate__animated animate__fadeInUp">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-10">
                                        <h2 className="mb-4 fs-1">Introducing <span className='text-primary'>Our Work</span></h2>
                                        <h3 className='mb-4 fs-3'>{Detail.Work_Section.Work_Shlogen}</h3>
                                        <p className="lead fs-4 mb-3 mb-xl-5">
                                            {Detail.Work_Section.Paragraph}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 placeholder-wave">
                                <img
                                    draggable="false"
                                    className="img-fluid rounded"
                                    src={Work}
                                    alt="About 2"
                                />
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Work_Section
