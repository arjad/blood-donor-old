import React from 'react'
import Nav from "../common/nav";
import Nav2 from "../common/nav2";
import Footer from "../common/footer";
import Underline from "../assets/underline.png";

export default function searchblood() {
    return (
        <div>
            <Nav />
            <Nav2 />
            <div className="wallpaper mb-5 container-fluid">
                <h1>Search For Blood</h1>
            </div>
            <div className="heading_donors">
                    <h2>Find Donors</h2>
                    <img src={Underline}/>
            </div>
            <div className="searchblood-div">
       
            
            <details>
            	<summary>Blood Group</summary>
            	<ul>
            		<li>A+</li>
            		<li>B+</li>
            		<li>AB+</li>
            		<li>A-</li>
            		<li>B-</li>
            		<li>O+</li>
            		<li>O+</li>
            	</ul>
            </details>
            <details>
            	<summary>Select City</summary>
            	<ul>
            		<li>Lahore</li>
            		<li>Kasur</li>
            		<li>Karachi</li>
            		<li>Islamabad</li>
            		<li>Failsalabad</li>
            	</ul>
            </details>



            </div>
        

            <Footer />
        </div>
    )
}
