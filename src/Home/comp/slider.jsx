import React from 'react'
import S1 from "../../assets/s1.jpg";
import S2 from "../../assets/s2.jpg";
import S3 from "../../assets/s3.jpg";
import S4 from "../../assets/s4.jpg";
import {Carousel} from 'react-bootstrap';

export default function slider() 
{
    return (    
      <Carousel className="carousel slider-div" fade={true} pause={false}>
     
     <Carousel.Item interval={2000}>
       <img className="d-block w-100" src={S1} alt="First slide" />
     </Carousel.Item>
     
     <Carousel.Item interval={3000}>
       <img className="d-block w-100" src={S2}  alt="2nd slide"    />
     </Carousel.Item>
    
     <Carousel.Item interval={3000}>
       <img className="d-block w-100" src={S3} alt="3rd slide"   />
     </Carousel.Item>
     <Carousel.Item interval={3000}>
       <img className="d-block w-100" src={S4} alt="4th slide"   />
     </Carousel.Item>   
   </Carousel>
    )
}
