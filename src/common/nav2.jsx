import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Underline from "../assets/underline.png";

function nav2() 
{
    return (
        <div className="nav2 container-fluid shadow">
        {/* <div className="row"> */}
            <img className="logo-img" src={Logo}/>
            <ul className="btns-div">
                <Link to="/">
                <li>Home
                    <img src={Underline}/>
                </li>
                </Link>
                <Link to="/aboutus">
                    <li>About Us<img src={Underline}/></li>
                </Link>
                <Link to="/searchblood">
                    <li>Search Blood<img src={Underline}/></li>
                </Link>
                <Link to="/contactus">
                    <li>Contact Us<img src={Underline}/></li>    
                </Link>
            </ul>
            

        {/* </div> */}
        </div>
    )
}

export default nav2
