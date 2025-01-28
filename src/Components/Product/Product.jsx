import React, { useContext, useState } from 'react';
import "./Product.css";
import { Global } from '../../App';
import ProductData from '../../Json_Files/Product_Page.json';
import Seo_Data from '../../Json_Files/SEO_Meta_Keyword.json'
import Helmet_Jsx from '../../Helmet_Jsx';
import { useNavigate } from 'react-router-dom';
import Heading from '../Mini_Components/Heading';

const Product = () => {

    let Navigate = useNavigate();

    let [Img, setImg] = useState(null);

    let { Categorys, SubCategorys, Selected_Products } = useContext(Global);
    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;
    let [Selected_Product, setSelected_Product] = Selected_Products;

    let i = 0;

    const KeySkip = ['id', 'Table_Name'];
    return (
        <>
            <div className='bg-white'>

                <Helmet_Jsx Title={Seo_Data.Productpage.Title} Desc={Seo_Data.Productpage.Description}></Helmet_Jsx>
                <Heading Title={Selected_Product.Product_Name}></Heading>

                <div className="container my-5">
                    <div className='container d-flex justify-content-start my-5'>
                        <button onClick={() => { Navigate(-1) }} className='fs-4 px-4 btn btn-primary'><i className="bi bi-arrow-left"></i> Back</button>
                    </div>






                    {
                        ProductData.Products.length != 0 
                        ?
                        <>
                            <div className="row g-4">


                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                    <div className='row g-2'>
                                        {
                                            Selected_Product.Images.map((el) => {
                                                return (
                                                    <div key={el} className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 animate__animated animate__fadeInUp overflow-hidden' onClick={() => { setImg(el) }}>

                                                        <img draggable="false" src={el} alt="Product image" className="imgimg2 border-2 rounded-4 p-1 card-img" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                    <div>

                                        {

                                            Selected_Product.Tables.map((obj) => {
                                                return (
                                                    <table key={obj.id} className="table table-striped border-1 border-black fs-5 table-hover animate__animated animate__fadeInUp">
                                                        <thead className='border-1 border-black'>
                                                            <tr className='border-1 border-black'>
                                                                <th>{obj.Table_Name}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {Object.keys(obj).map((key, index) => {
                                                                return (


                                                                    (!KeySkip.includes(key)) &&

                                                                    <tr key={index} className='border-1 border-black'>
                                                                        <td className='border-1 border-black'>{key}</td>
                                                                        <td className='border-1 border-black'>{obj[key].map((el) => {
                                                                            return (
                                                                                <>
                                                                                    <i className="bi bi-arrow-right"></i> {el}
                                                                                    <br />
                                                                                </>
                                                                            )
                                                                        })}</td>
                                                                    </tr>


                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                )
                                            })



                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                        : <div className='text-center fs-1'> Comming Soon...</div>
                    }






                    {/* <div className='container d-flex justify-content-start my-5 ms-5 ps-5'>
                        <button onClick={() => { Navigate(-1) }} className='px-4 fs-4  btn btn-primary'>11164; Back</button>
                    </div> */}
                </div>




                <div className='Popup bg-black' style={{ display: Img ? 'block' : 'none' }}>
                    <span onClick={() => { setImg(null) }}>&times;</span>
                    <img draggable="false" src={Img} />
                </div>

            </div>

        </>
    )
}



// {
//     "id": "02",
//     "Product_Name": "Polo Nack T-shirt",
//     "SubCategory_Name": "Tshirts",
//     "Category_Name": "Readymade Garments",
//     "Thumbnail_Image": "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//     "Images": [
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg"
//     ],
//     "Tables": [
//         {
//             "id": "01",
//             "Table_Name": "General Information",
//             "Packaging": "Pastic Bag",
//             "Size of Packing": "20cm * 20cm * 10cm",
//             "Sleeve": "Full"
//         },
//         {
//             "id": "02",
//             "Table_Name": "Pricing",
//             "1 - 34 pieces": "$5.90",
//             "35 - 599 pieces": "$5.70"
//         }
//     ]
// }

export default Product
