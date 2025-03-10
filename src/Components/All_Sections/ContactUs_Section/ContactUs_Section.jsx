import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact_Json from '../../../Json_Files/Company_Contact_Page.json';
// import CountryJson from '../../Json_Files/Country.json';
import axios from 'axios';



const ContactUs_Section = () => {
    const ref = useRef(null);
    let [Data, setData] = useState(Contact_Json);
    let [Load, setLoad] = useState(false);

    // const isInView = useInView(ref, { once: true });
    const animationControls = useAnimation();
    const [countries, setCountries] = useState([]);
    const [countryCode, setCountryCode] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        countrycode: "",
        country: ""
    });

    // Error State for Validation
    const [errors, setErrors] = useState({});


    useEffect(() => {
        // Fetch country data (names and codes)
        fetch("https://restcountries.com/v3.1/all?fields=name,cca2,idd")
            .then((response) => response.json())
            .then((data) => {
                const countryList = data.map((country) => ({
                    name: country.name.common,
                    code: country.cca2,
                    dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
                }));
                setCountries(countryList.sort((a, b) => a.name.localeCompare(b.name)));
            })
            .catch((error) => console.error("Error fetching countries:", error));
    }, []);

    const handleCountryChange = (event) => {
        const selectedCountry = countries.find((country) => country.code === event.target.value);
        if (selectedCountry) {
            setCountryCode(selectedCountry.dialCode);
            setFormData({ ...formData, country: event.target.value, countrycode: selectedCountry.dialCode })
        } else {
            setCountryCode("");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear errors when user starts typing
        setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};

        // Name Validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        // Email Validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        // Phone Validation
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10-15 digits";
        }

        // Subject Validation
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        // Message Validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = async (e) => {
        setLoad(true);
        e.preventDefault();

        // Validate the form before submission
        if (!validateForm()) {
            return;
        }

        try {
            setLoad(true);
            // Simulate API call



            // Show success notification
            toast.success("Message Send Successfully, We Will Connect you Shortly");
            const response = await axios.post("https://airoxin-backend.onrender.com/v1/Mail", formData);

            // console.log("Form Data Submitted:", formData);
            // const response = await axios.post("http://localhost:5000/v1/Mail", formData);
            
            // Reset form fields after successful submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                country: "",
                countrycode: ""
            });
            setCountryCode("");
            setLoad(false);
            
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div
            ref={ref}
            className="bg-gray-900 text-white py-16 px-4"
        >
            {/* Title Section */}
            <div
                className="text-center mb-12"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Contact Us
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-400">
                    We'd love to hear from you.
                </p>
            </div>

            {/* Content Grid */}
            <div className="container mx-auto max-w-6xl items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Contact Information */}
                <div
                    className="space-y-6"
                >
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-500">Corporate / Sales Office</h3>
                        <p className="text-gray-400">
                            {Data.add}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-500">Factory Address</h3>
                        <p className="text-gray-400">
                            {Data.Factory}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-500">Phone</h3>
                        <p className="text-gray-400">
                            {Data.phone}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-500">Email</h3>

                        {Data.email.map((ele) => {
                            return (
                                <>
                                    <a className="text-gray-400"
                                        href={`mailto:${ele}`}
                                    >
                                        {ele}
                                    </a><br></br>
                                </>
                            )
                        })}
                    </div>

                    {/* Social Media Buttons */}
                    <div className="flex items-center justify-start space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14">
                        <a
                            href={Data.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                        >
                            <i className="fab fa-instagram text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"></i>
                        </a>
                        <a
                            href={Data.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                        >
                            <i className="fab fa-facebook text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"></i>
                        </a>
                        <a
                            href={Data.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-sky-500 transition-colors duration-300"
                        >
                            <i className="fab fa-twitter text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"></i>
                        </a>
                        <a
                            href={Data.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
                        >
                            <i className="fab fa-linkedin text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"></i>
                        </a>
                        <a
                            href={Data.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                        >
                            <i className="fab fa-whatsapp text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"></i>
                        </a>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Country Dropdown */}
                        <div>
                            <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Country *
                            </label>
                            <select
                                id="country"
                                name="country"
                                onChange={handleCountryChange}
                                className="mt-1 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            >
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Phone Number Fields */}
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            <div className="flex-1">
                                <label
                                    htmlFor="countryCode"
                                    className="block text-sm font-medium text-gray-400"
                                >
                                    Code
                                </label>
                                <input
                                    type="text"
                                    id="countryCode"
                                    value={countryCode}
                                    readOnly
                                    className="mt-1 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-400"
                                >
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                            )}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            disabled={Load}
                            type="submit"
                            className="w-full py-3 text-lg font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs_Section;