import React from 'react'
import {Link} from "react-router-dom";

// import "../style/style.css";
export default function nav() {
    return (
        <div className="nav_bar container-fluid py-2">
            <div className="icon-div">
                <abbr title="FaceBook"><i class="fab fa-facebook-f"></i></abbr>
                <abbr title="Instagram"><i class="fab fa-instagram"></i></abbr>
                <abbr title="Twitter"><i class="fab fa-twitter"></i></abbr>
                <abbr title="Linkedin"><i class="fab fa-linkedin-in"></i></abbr>
            </div>
            <div className="btn-div">
                
                <select name="language">
                  <option value="eng">English</option>
                  <option value="urdu">Urdu</option>
                </select>
                <Link to="/register">
                <a>Register</a>
                </Link>
                |
                <Link to="login">
                <a>Login</a>
                </Link>
            </div>
            
        </div>
    )
}
