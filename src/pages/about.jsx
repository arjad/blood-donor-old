import React from 'react'
import Nav from "../common/nav";
import Nav2 from "../common/nav2";
import Footer from "../common/footer";
import Underline from "../assets/underline.png";

export default function about() 
{
    return (
        <div>
            <Nav />
            <Nav2 />
            <div className="wallpaper mb-5 container-fluid">
                <h1>About Us</h1>
            </div>
            <div className="about-div">

            <div className="mt-5 container ">
                <div className="heading_donors">
                    <h2>Who Are We </h2>
                    <img src={Underline}/>
                </div>
                <br/><br/>
                <p >
                We are totally Non Government, Non Political Volunteer Organization and our purpose is to Seek pleasure of Allah by Saving Human lives by facilitating blood.
                We provide blood donations with few clicks. We try our level best to meet 100% blood requirements voluntarily through our website. We have a database of donors willing to donate blood who can be reached through our website.
                </p>
                <p>
                Our mission is to fulfill every blood request in the country with a promising web portal and motivated individuals who are willing to donate blood.</p>
            
            </div>
            <div className="mt-5 container ">
                <div className="heading_donors">
                    <h2>How We Started </h2>
                    <img src={Underline}/>
                </div>
                <br/><br/>
                <p >
                    We started this project as our university final year project. And we decided to launch it to facilitate others.
                    University's Blood Society helped us by providing donors information in this regard.
                </p>
                
            </div>
            </div>

            <Footer />
        </div>
    )
}
