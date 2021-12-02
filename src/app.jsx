import React from 'react'
import Home from '../src/pages/Home';
import About from '../src/pages/about'
import Searchblood from "../src/pages/searchblood";
import Contactus from "../src/pages/contactus";
import Register from "./pages/register";
import Login from "./pages/login";

import "./style/styles.css";
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() 
{
    return (
        <>
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/aboutus" exact component={About}/>
                <Route path="/searchblood" exact component={Searchblood}/>
                <Route path="/contactus" excat component={Contactus}/>
                <Route path="/register" excat component={Register}/>
                <Route path="/login" excat component={Login}/>
            </Router>
        </>
    )
}

export default App;