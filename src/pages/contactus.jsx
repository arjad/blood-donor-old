import React from 'react'
import Nav from "../common/nav";
import Nav2 from "../common/nav2";
import Footer from "../common/footer";
import Underline from "../assets/underline.png";
export default function contactus() 
{
    return (
        <div>
            <Nav />
            <Nav2 />
            <div className="wallpaper mb-5 container-fluid">
                <h1>Contact Us</h1>
            </div>
           
            <div className="conatiner-fluid">
            <div className="contactus-div container mb-5">
            <div className="row">
                <ul className="contact-info shadow col-lg-5 col-md-12 mx-5">
                    <li><i class="fas fa-phone"></i>042-090078601</li>
                    <li><i class="fas fa-map-marked-alt"></i>PUCIT, Near Doctor Hospital, Lahore. </li>
                    <li><i class="fas fa-envelope-open-text"></i>blooddonorwebsite.com</li>
                    <li><i class="fab fa-facebook-f"></i>facebook page</li>
                    <li><i class="fab fa-youtube"></i>youtube channel name</li>
                    <li><i class="fab fa-twitter"></i>twiter id</li>
                </ul>
                <div className="map-div shadow col-lg-5 col-md-12 mx-5">
                </div>
            
                <form className="complain-form shadow col-lg-5 col-md-12 mx-5">
                    <div className="heading_donors">
                        <h3>Suggestion / Complain form</h3>
                        <img src={Underline}/>
                    </div>
                    <br/>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Your Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label>Subject</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" placeholder="Type Short Description" rows="3"></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary">Send</button>
                </form>
                <div className="ad-div shadow col-lg-5 col-md-12 mx-5">
                </div>
            </div>
            </div>
            </div>
            <Footer />
            
        </div>
    )
}
