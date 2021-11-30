import React from 'react';
import App from "../assets/app.png";
import Appbtn1 from "../assets/app-btn1.png";

export default function footer() 
{
    return (
        <div className="footer-div p-5">
        <div className="row">
            <ul className="col-lg-4 footer-1st">
                <li>Accessibility</li>
                <li>Term Of Use</li>
                <li>Privacy Policy</li>
                <li>News</li>
                <li>Feedback</li>
                <li>FAQs</li>
            </ul>
            <div className="col-lg-4 footer-2nd">
                <img className="mobile" src={App}/>
                <img className="app-btn" src={Appbtn1}/>

                
            </div>
            <div className="col-lg-4 row footer-3rd">
                <input className="email-input" placeholder="Your Email Adress"/>
                <button className="sub-btn">Subscribe</button>

                <ul className="col-12 icon-div">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                </ul>

                
            </div>
        </div>
        <div className="last-footer">
        Copyrights <i class="far fa-copyright"></i> 2021, All Rights Reserved. Site Designed & Maintained By BloodDonorWebsite.com
        </div>
            
        </div>
    )
}
