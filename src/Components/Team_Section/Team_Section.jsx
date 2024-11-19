import React, { useState } from 'react';
import Team_Page from '../../Json_Files/Team_Page.json'
// import Bbg from '../../Assets/Wallpaper/Earth_Wall.jpg';
import Photo from '../../Assets/Team Photo/ARYAN.jpg'
import Team_Card from './Team_Card';

const Team_Section = () => {

    let Bbg = "https://i.postimg.cc/qMJ35L45/Earth-Wall.jpg";

    let [Team, setTeam] = useState(Team_Page);

    // console.log(Team);
    return (
        <>
            <div style={{ backgroundImage: `url(${Bbg})`, backgroundAttachment: `fixed`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <section className="py-3 py-md-5 py-xl-8">
                    <div className="container my-3">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 mb-5">
                                <h2 className="mb-4 display-5 text-center fw-bold">Our <span className=''>Team</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="container overflow-hidden">
                        <div className="row g-3">

                            {
                                Team.map((el) => { return(
                                    <Team_Card key={el.id} img={el.img} name={el.name} post={el.post} facebook={el.facebook} twitter={el.twitter} linkedin={el.linkedin} whatsapp={el.whatsapp} instagram={el.instagram}></Team_Card>)
                                })
                            }


                            



                            

                        </div>
                    </div >
                </section >


            </div >
        </>
    )
}

export default Team_Section
