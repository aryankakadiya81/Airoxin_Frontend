import React, { useState } from 'react';
import './Accreditation_Section.css'
import Cdata from '../../Json_Files/Cirtificate.json';
// import Bbg from 'https://i.postimg.cc/DwD4m3s9/Acc.jpg';


const Accreditation_Section = () => {

    let Bbg = "https://i.postimg.cc/DwD4m3s9/Acc.jpg"
    let [Data, setData] = useState(Cdata);
    let [Img, setImg] = useState(null);

    return (
        <>
            <div>

                <div className="container overflow-hidden my-5 py-2 pb-5">
                    <div className="row g-4">

                        {
                            Data.map((el) => {
                                return (

                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 border-0 animate__animated animate__fadeInUp' key={el.id}>
                                        <div className='imgdiv shadow-sm p-3 border-3 rounded-4' style={{ backgroundImage: `url(${Bbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                            <div className='overflow-hidden' onClick={()=>{setImg(el.img)}}>

                                                <img src={el.img}
                                                    className="imgimg card-img-top rounded-4"
                                                    draggable="false"
                                                    alt={el.Name}
                                                    height={320} />

                                            </div>

                                            <div className="text-center my-2 fs-4 fw-bold">
                                                <div>{el.Name}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className='Popup bg-black' style={{display: Img ? 'block' : 'none'}}>
                            <span onClick={()=>{setImg(null)}}>&times;</span>
                            <img draggable="false" src={Img}/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Accreditation_Section
