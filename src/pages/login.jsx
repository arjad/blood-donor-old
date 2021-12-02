import React from 'react'
import Nav from "../common/nav";
import Nav2 from "../common/nav2";
import Footer from "../common/footer";
export default function login() {
    return (<div>
        <Nav />
        <Nav2 />
            <div class="login-div container">
              <section className="content">
                <form action="">
                  <h1>Login Form</h1>
                  <div>
                    <input type="text" placeholder="Username" required="" className="username" />
                  </div>
                  <div>
                    <input type="password" placeholder="Password" required="" className="password" />
                  </div>
                  <div>
                    <input type="submit" value="Log in" />
                    <a href="#">Lost your password?</a>
                    <a href="#">Register</a>
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
