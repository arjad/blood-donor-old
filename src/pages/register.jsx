import React from 'react'
import Nav from "../common/nav";
import Nav2 from "../common/nav2";
import Footer from "../common/footer";
export default function register() 
{
    return (<div>
        <Nav />
        <Nav2 />
            <div class="login-div container">
              <section className="content">
                <form action="">
                  <h1>Registeration</h1>
                  <div>
                    <input type="text" placeholder="First Name" required="" className="username" />
                  </div> <div>
                    <input type="text" placeholder="Last Name" required="" className="username" />
                  </div>
                  <div>
                    <input type="text" placeholder="Username" required="" className="username" />
                  </div>
                  <div>
                    <input type="password" placeholder="Password" required="" className="password" />
                  </div>
                  <div>
                    <input type="password" placeholder="Re-Type Password" required="" className="password" />
                  </div>
                  <div>
                    <input type="submit" value="Sign Up" />
                    <a href="#">Log In</a>
                  </div>
                </form>
              </section>
            </div>
            <br/>
            <br/>
        <Footer/>
    </div>
    )
}
