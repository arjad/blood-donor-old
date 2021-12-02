import React from 'react'
import { Carousel } from 'react-bootstrap';
import Nav from "../common/nav";
import Nav2 from "../common/nav2";
import Footer from "../common/footer";
import Slider from "./comp/slider";
import Body from "./comp/body";
export default function Home() 
{
    return (
        <div>
            <Nav />
            <Nav2 />

            <Slider />
            <Body />
            <Footer />
          
        </div>
    )
}
