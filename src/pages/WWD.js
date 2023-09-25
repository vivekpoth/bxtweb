import React from 'react'
import '../styles/Services.css'
import { Service1, Service2, Service3, Service4, Service5 } from '../components/Services.js'
import BannerImage from '../assets/gradient.png';
import '../styles/Home.css';


function WWD() {
  return (
    <div>
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
          <div className="headerContainer">
            <h1> What We Do </h1>
            <p> Brief description of services? </p>
          </div>
        </div>
        <div id="section1"> <Service1 /> </div>
        <div id="section2"> <Service2 /> </div>
        <div id="section3"> <Service3 /> </div>
        <div id="section4"> <Service4 /> </div>
        <div id="section5"> <Service5 /> </div>
    </div>   
  )
}

export default WWD