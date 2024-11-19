import React from 'react';
// import Wall from '../../Assets/Wallpaper/Card-Wll.jpg';

const Team_Card = (Props) => {

    let Wall = "https://i.postimg.cc/Y0kWkNgj/Card-Wll.jpg";
    return (
        
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeInUp'>
                <div className="card-body py-3 border-1 rounded-5 overflow-hidden " style={{ backgroundImage: `url(${Wall})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="text-center">
                        <img draggable="false" src={Props.img} alt="Admin" className="rounded-circle" width={150} />
                        <div className="mt-3">
                            <h4 className='fs-3'>{Props.name}</h4>
                            <p className="text-secondary mb-3 fs-5">{Props.post}</p>
                            
                        </div>
                        <ul className="list-unstyled m-0 p-0 d-flex justify-content-center mb-2">
                            <li className="me-4">
                                <a target="_blank" href={Props.facebook} className="link-dark link-dark">
                                    <i className="text-primary fs-6 fa-brands fa-square-facebook"></i>
                                </a>
                            </li>
                            <li className="me-4">
                                <a target="_blank" href={Props.twitter} className="link-dark link-opacity-75-hover">
                                    <i className="text-primary fs-6 fa-brands fa-square-x-twitter"></i>
                                </a>
                            </li>
                            <li className="me-4">
                                <a target="_blank" href={Props.linkedin} className="link-dark link-opacity-75-hover">
                                    <i className="text-primary fs-6 fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="me-4">
                                <a target="_blank" href={Props.whatsapp} className="link-dark link-opacity-75-hover">
                                    <i className="text-primary fs-6 fa-brands fa-square-whatsapp"></i>
                                </a>
                            </li>
                            <li className="">
                                <a target="_blank" href={Props.instagram} className="link-dark link-opacity-75-hover">
                                    <i className="text-primary fs-6 fa-brands fa-square-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Team_Card
