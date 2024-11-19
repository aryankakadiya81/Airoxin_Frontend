import React, { useContext } from 'react';
import { Global } from '../../App';
import ProductData from '../../Json_Files/Product_Page.json';
import { Link, useNavigate } from 'react-router-dom';


const Category_Section = () => {

    let Navigate = useNavigate();

    let { Categorys, SubCategorys } = useContext(Global);
    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;

    return (
        <>
            <div className='bg-white'>


                <div className="container my-5">
                    <div className='container d-flex justify-content-start my-5'>
                        <button onClick={() => { Navigate("/Home"); window.scrollTo(0, 0); }} className='fs-4 px-4 btn btn-primary'><i className="bi bi-arrow-left"></i> Back</button>
                    </div>
                    <div className="row g-4">
                        {
                            ProductData.SubCategory.filter((el) => { return el.Category_Name == Category }).map((el) => {
                                return (
                                    <>
                                        <div key={el.id} className="col-12 col-sm-6 col-xl-4 animate__animated animate__fadeInUp">
                                            <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-lg placeholder-glow">
                                                <div className="card-body text-center">
                                                    <div>
                                                        <img src={el.Image}
                                                        draggable="false" alt="Product image" className="card-img-top" height={400}/>
                                                    </div>

                                                    <h4 className="my-4 fw-bold">
                                                        {el.SubCategory_Name}
                                                    </h4>


                                                    <Link onClick={() => { setSubCategory(el.SubCategory_Name); window.scrollTo(0, 0); }} to="/Category/Subcategory" type="button" className="btn btn-primary mb-3">
                                                        LEARN MORE
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>




                <div>
                </div>
            </div>
        </>
    )
}

export default Category_Section
