import React from 'react'
import Home from '../src/Home/Home';
import About from '../src/About/about'
import Searchblood from "../src/searchblood/searchblood";
import Contactus from "../src/contactus/contactus";

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
            </Router>
        </>
    )
}

export default App;