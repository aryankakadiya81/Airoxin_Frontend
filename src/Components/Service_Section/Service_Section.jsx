import React, { useContext } from 'react';
import { Global } from '../../App';
import './Service_Section.css';
import Product_Data from '../../Json_Files/Product_Page.json';
// import Bbg from '../../Assets/Wallpaper/Earth_Wall.jpg';
import { Link } from 'react-router-dom';


const Service_Section = () => {

    let Bbg = "https://i.postimg.cc/qMJ35L45/Earth-Wall.jpg";
    let { Categorys, SubCategorys } = useContext(Global);

    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;
    return (
        <>
            <div>

                <section className="bg-light py-5 py-xl-8" style={{ backgroundImage: `url(${Bbg})`, backgroundAttachment: `fixed`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                                <h2 className="display-5 mt-2 mb-5 fw-bold text-center">
                                    CATAGORY
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="container overflow-hidden mb-5 mt-3">
                        <div className="row gy-4">

                            {
                                Product_Data.Category.map((el) => {
                                    return (
                                        <div key={el.id} className="col-12 col-sm-6 col-xl-4 animate__animated animate__fadeInUp">
                                            <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-sm placeholder-glow">
                                                <div className="card-body text-center p-4 p-xxl-5">
                                                    <i className={`w-25 bg-primary rounded-circle py-3 ${el.Icon} text-white`} style={{ fontSize: "40px" }}></i>

                                                    <h4 className="my-4 fw-bold">
                                                        {el.Category_Name}
                                                    </h4>
                                                    <p className="mb-4 text-secondary">
                                                        {el.Details}
                                                    </p>

                                                    <Link onClick={() => { setCategory(el.Category_Name); window.scrollTo(0, 0); }} type="button" to="/Category" className="btn btn-primary">
                                                        LEARN MORE
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }








                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Service_Section
