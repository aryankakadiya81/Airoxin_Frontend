import React from 'react';
import { Helmet } from "react-helmet";
import Icon from "./Assets/Logo/ICON/icon.svg";
// import Seo_Data from './Json_Files/SEO_Meta_Keyword.json'



const Helmet_Jsx = (Props) => {

    return (
        <Helmet>

            <title>{Props.All.Title ? Props.All.Title : "AIROXIN INTERNATIONAL"}</title>
            <meta name="keywords" content={Props.All.Keywords} />
            <meta name="abstract" content={Props.All.Keywords} />

            <meta name="description" content={Props.All.Description} />
            <meta name="robots" content={Props.All.Robots} />
            <meta name="GOOGLEBOT" content={Props.All.Googlebot} />
            <meta name="geo.placename" content={Props.All.Geo_Place} />
            <meta name="geo.placename" content={Props.All.Geo_Place_1} />

            <meta name="og:title" content={Props.All.Title} />
            <meta name="og:description" content={Props.All.Description} />
            <meta name="og:email" content="contact.airoxin@gmail.com" />
            <meta name="og:phone_number" content="+919925614381" />
            <meta name="og:url" content={Props.All.Url} />
            <meta name="og:image" content={`https://res.cloudinary.com/dtnqlv91f/image/upload/v1741576770/General/slt7uf0udlvtvqte8mvu.jpg`} />
            <meta name="twitter:title" content={Props.All.Title} />
            <meta name="twitter:description" content={Props.All.Description} />
            <link name="canonical" content={Props.All.Url} />
            <link rel="icon" href={Icon} />



        </Helmet>
    )
}

export default Helmet_Jsx
