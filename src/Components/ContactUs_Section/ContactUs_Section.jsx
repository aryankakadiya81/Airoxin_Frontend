import React, { useState } from 'react';
import './ContactUs_Section.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact_Json from '../../Json_Files/Company_Contact_Page.json';
import CountryJson from '../../Json_Files/Country.json';
import axios from 'axios';
// import Bbg from '../../Assets/Wallpaper/Walll.svg';



const ContactUs_Section = () => {

    let [Country, setCountry] = useState(null);
    let [CountryCode, setCountryCode] = useState(null);
    let [CountryDiel, setCountryDiel] = useState(null);



    let [Data, setData] = useState(Contact_Json);

    let [Name, setName] = useState("");
    let [Email, setEmail] = useState("");
    let [Phone, setPhone] = useState("");
    let [Subject, setSubject] = useState("");
    let [Msg, setMsg] = useState("");


    const HSubmit = async (e) => {

        // console.log(Name, Email, Phone, Subject, Msg);
        e.preventDefault();
        toast.success("Message Send Successfully, We Will Connect you Shortly");
        try {
            const response = await axios.post("https://airoxin-backend.onrender.com/v1/Mail", {
                Name: Name,
                Email: Email,
                Country: Country,
                CountryCode: CountryCode,
                CountryDielCode: CountryDiel,
                Mobile: Phone,
                Sub: Subject,
                Txt: Msg
            });
            setName("");
            setCountry(null);
            setCountryCode(null);
            setCountryDiel(null);
            setEmail("");
            setPhone("");
            setSubject("");
            setMsg("");

        } catch (error) {
            console.log(error);
        }


    }




    return (
        <>
            <div>
                <section className="bg-white py-3 py-md-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
                            <h1 className="col-12 text-center fw-bold justify-content-center mb-5" style={{ fontSize: "40px" }}>GET IN TOUCH</h1>
                            <div className="col-12 col-lg-6 py-5">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <div className="d-flex mb-5 animate__animated animate__fadeInUp">
                                            <div className="me-4 text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={50}
                                                    height={50}
                                                    fill="currentColor"
                                                    className="bi bi-geo"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="mb-3 fs-1">Address</h4>
                                                <address className="mb-0 text-secondary fs-3">
                                                    {Data.add}
                                                </address>
                                            </div>
                                        </div>
                                        <div className="row mb-2 animate__animated animate__fadeInUp">
                                            <div className="col-12 col-sm-12">
                                                <div className="d-flex mb-5">
                                                    <div className="me-4 text-primary">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={50}
                                                            height={50}
                                                            fill="currentColor"
                                                            className="bi bi-telephone-outbound"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="mb-3 fs-1">Phone</h4>
                                                        <div className="mb-0 fs-3">
                                                            {Data.phone.map((ele) => {
                                                                return (
                                                                    <>
                                                                        <a
                                                                            className="link-secondary text-decoration-none"
                                                                            href={`tel:${ele}`}
                                                                        >
                                                                            {ele}
                                                                        </a>
                                                                    </>
                                                                )
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 mb-5 overflow-hidden">
                                                <div className="d-flex mb-0">
                                                    <div className="me-4 text-primary">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={50}
                                                            height={50}

                                                            fill="currentColor"
                                                            className="bi bi-envelope-at"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="mb-3 fs-1">E-Mail</h4>
                                                        <div className="mb-0 fs-3">
                                                            {Data.email.map((ele) => {
                                                                return (
                                                                    <>
                                                                        <a className="link-secondary text-decoration-none"
                                                                            href={`mailto:${ele}`}
                                                                        >
                                                                            {ele}
                                                                        </a><br></br>
                                                                    </>
                                                                )
                                                            })}


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>





                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 animate__animated animate__fadeInUp">
                                <div className="bg-white border rounded shadow-sm overflow-hidden">
                                    <form onSubmit={HSubmit}>
                                        <div className="row gy-4 gy-xl-5 p-4 p-xl-5" style={{ backgroundColor: "#e8f2ff" }}>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="fullname" className="form-label">
                                                    Full Name <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullname"
                                                    name="fullname"
                                                    value={Name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            


                                            <div className="col-12 col-md-6">
                                                {/* <CountrySelect
                                                    value={value}
                                                    onChange={setValue}
                                                    onClick={setValue}
                                                    valueAs='id'
                                                /> */}
                                                <label htmlFor="Country" className="form-label">
                                                    Country <span className="text-danger">*</span>
                                                </label>
                                                <div className="input-group">
                                                    {/* <span className="input-group-text"><i className="py-1 bi bi-globe-americas"></i></span> */}


                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-lg bg-white  dropdown-toggle dropdown-toggle-split fs-6 rounded-1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {Country ? `${Country.length>=25 ? Country.slice(0,25) : Country}...` : "Country"} {/*<span className="visually-hidden">Toggle Dropdown</span> */}
                                                        </button>
                                                        <ul className="dropdown-menu" style={{ maxHeight: "200px", overflowY: "scroll" }}>

                                                            {
                                                                CountryJson.map((el) => {
                                                                    return (
                                                                        <button className="fs-6 dropdown-item" onClick={() => {
                                                                            return(setCountry(el.name),setCountryCode(el.code),setCountryDiel(el.dial_code))}}>{el.name}  {`(${el.dial_code})`}</button>

                                                                    )
                                                                })
                                                            }

                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                            


                                            <div className="col-12 col-md-6">
                                                <label htmlFor="phone" className="form-label">
                                                    Phone Number <span className="text-danger">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-telephone-fill"></i>
                                                    </span>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        maxLength={10}
                                                        value={Phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>



                                            <div className="col-12 col-md-6">
                                                <label htmlFor="email" className="form-label">
                                                    Email <span className="text-danger">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-envelope-fill"></i>

                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        value={Email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>



                                            <div className="col-12">
                                                <label htmlFor="subject" className="form-label">
                                                    Subject <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    name="subject"
                                                    value={Subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message" className="form-label">
                                                    Message <span className="text-danger">*</span>
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    rows={3}
                                                    value={Msg}
                                                    onChange={(e) => setMsg(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-lg" type='submit'
                                                        onSubmit={HSubmit}
                                                        disabled={!Msg || !Subject || !Email || !Phone || !Name || !Country} >
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>


                                            <div className='col-12'>

                                                <ul className="list-unstyled m-0 p-0 d-flex justify-content-center">
                                                    <li className="me-3">
                                                        <a target="_blank" href={Data.facebook} className="link-dark link-dark">
                                                            <i className="text-primary fs-2 fa-brands fa-square-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="me-3">
                                                        <a target="_blank" href={Data.twitter} className="link-dark link-opacity-75-hover">
                                                            <i className="text-primary fs-2 fa-brands fa-square-x-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="me-3">
                                                        <a target="_blank" href={Data.linkedin} className="link-dark link-opacity-75-hover">
                                                            <i className="text-primary fs-2 fa-brands fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li className="me-3">
                                                        <a target="_blank" href={Data.whatsapp} className="link-dark link-opacity-75-hover">
                                                            <i className="text-primary fs-2 fa-brands fa-square-whatsapp"></i>
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a target="_blank" href={Data.instagram} className="link-dark link-opacity-75-hover">
                                                            <i className="text-primary fs-2 fa-brands fa-square-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ContactUs_Section
