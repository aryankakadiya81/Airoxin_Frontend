import React, { useContext } from 'react';
import { Global } from '../../App';
import ProductData from '../../Json_Files/Product_Page.json';
import Seo_Data from '../../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from '../../Helmet_Jsx';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../Mini_Components/Heading';

const SubCategory_Section = () => {

  let Navigate = useNavigate();

  let { Categorys, SubCategorys, Selected_Products } = useContext(Global);
  let [Category, setCategory] = Categorys;
  let [SubCategory, setSubCategory] = SubCategorys;
  let [Selected_Product, setSelected_Product] = Selected_Products;
  

  return (
    <>
      <div className='bg-white'>

      <Helmet_Jsx Title={Seo_Data.Productpage.Title} Desc={Seo_Data.Productpage.Description}></Helmet_Jsx>
        <Heading Title={SubCategory}></Heading>

        <div className="container my-5">
          <div className='container d-flex justify-content-start my-5'>
            <button onClick={() => {window.scrollTo(0, 0); Navigate(-1); }} className='fs-4 px-4 btn btn-primary'><i className="bi bi-arrow-left"></i> Back</button>
          </div>
          <div className="row g-4">
            {
              ProductData.Products.filter((el) => { return el.SubCategory_Name == SubCategory && el.Category_Name == Category }).map((el) => {
                return (
                  <>
                    <div key={el.id} className="col-12 col-sm-6 col-xl-4 animate__animated animate__fadeInUp">
                      <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-lg placeholder-glow">
                        <div className="card-body text-center">
                          <div>
                            <img draggable="false" src={el.Thumbnail_Image} alt="Product image" className="card-img-top" height={400}/>
                          </div>

                          <h4 className="my-4 fw-bold">
                            {el.Product_Name}
                          </h4>


                          <Link to="/Category/Subcategory/Product" onClick={() => {window.scrollTo(0, 0); setSelected_Product(el);}} type="button" className="btn btn-primary mb-3">
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
          {/* <div className='container d-flex justify-content-start my-5 ms-5 ps-5'>
            <button onClick={() => { Navigate(-1); window.scrollTo(0, 0); }} className='px-4 fs-4  btn btn-primary'>&#11164; Back</button>
          </div> */}
        </div>




        <div>
        </div>
      </div>

    </>
  )
  
}

export default SubCategory_Section
