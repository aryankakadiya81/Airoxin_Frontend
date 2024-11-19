import React, { useState } from 'react';
import Tradefair from '../../Json_Files/Tradefair.json';
import './Tradefair_Participent.css';

const Tradefair_Participation = () => {

    let [Data, setData] = useState(Tradefair);
    let [Img, setImg] = useState(null);
    let [Cat, setCat] = useState("All");

    function Fatch(name) {
        setCat(name);
    }

    return (
        <div className='my-5'>





            <div className='container overflow-hidden'>
                <div className='d-flex flex-wrap justify-content-center mb-5'>
                    {
                        Data.map((el) => {
                            return (
                                <>
                                    <div key={el.id} className='mx-1'>
                                        <div>
                                            <button onClick={() => { Fatch(el.name) }} className='border-0 fs-4 bg-white link-primary fw-semibold'>{el.name}</button>
                                        </div>
                                    </div>

                                </>
                            );
                        })
                    }
                </div>
            </div>




            <div className='container overflow-hidden'>
                <div className='row g-3'>
                    {
                        Cat == "All" && Data.map((el) => {
                            return (
                                <>
                                    {
                                        el.images.map((i) => {
                                            return (
                                                <div onClick={() => { setImg(i); }} className='img-fluid col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 overflow-hidden animate__animated animate__fadeInUp'>
                                                    <img draggable="false" key={i} src={i} className='imgimgg w-100 border-2 rounded-3' height={350}></img>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }

                    {
                        Cat != "All" && Data.filter((el) => { return (el.name == Cat) }).map((el) => {
                            return (
                                <>
                                    {
                                        el.images.map((i) => {
                                            return (
                                                <div onClick={() => { setImg(i); }} className='animate__animated animate__fadeInUp img-fluid col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 overflow-hidden'>
                                                    <img draggable="false" key={i} src={i} className='imgimgg w-100 border-2 rounded-3' height={350}></img>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div className='Popupp bg-black' style={{ display: Img ? 'block' : 'none' }}>
                <span onClick={() => { setImg(null) }}>&times;</span>
                <img draggable="false" src={Img} />
            </div>




        </div>
    )
}

export default Tradefair_Participation
