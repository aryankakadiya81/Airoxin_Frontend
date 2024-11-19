import React from 'react';
import { Helmet } from "react-helmet";
import Icon from "./Assets/Logo/ICON/icon.svg";
import Seo_Data from './Json_Files/SEO_Meta_Keyword.json'



const Helmet_Jsx = (Props) => {
    return (
        <Helmet>

            <title>{Props.Title ? Props.Title : "AIROXIN INTERNATIONAL"}</title>
            <meta name="keywords" content={Seo_Data.General.Keywords} />
            <meta name="description" content={Seo_Data.General.Description} />
            <meta name="robots" content="Home,About,Contact" />

            {Props.Desc && Props.Desc.map((el) => {
                    return (
                        <meta name="description" content={el} />
                    )
                })
            }
                {/* <base href="https://www.airoxin.com/" /> */}
                <meta property="og:site_name" content="AIROXIN" />
                <meta property="og:title" content={Props.Title} />
            {
               Props.Desc && Props.Desc.map((el) => {
                    return (
                        <meta property="og:description" content={el} />
                    )
                })
            }
            <meta property="og:url" content={Props.Url}/>


            
            <link rel="icon" href={Icon} />

            <meta property="og:title" content="Your page title"/>
            <meta property="og:description" content="Your page description"/>
            <meta property="og:image" content="URL of your image"/>
            <meta property="og:type" value="Product"/>



        </Helmet>
    )
}

export default Helmet_Jsx
