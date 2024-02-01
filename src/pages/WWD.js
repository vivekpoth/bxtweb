import React, {useEffect} from 'react'
import '../styles/Services.css'
import { Service1, Service2, Service3, Service4, Service5 } from '../components/Services.js'
import '../styles/Home.css';


function WWD() {
  useEffect(() => {
    window.scrollTo(0, 0);
  
    const section = window.location.hash.substring(1); // Get the URL fragment
  
    if (section) {
      const element = document.getElementById(section);
  
      if (element) {
        const offset = 100; // You can adjust this value as needed
        const offsetTop = element.offsetTop - offset;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div>
        <div className="home" /*style={{ backgroundImage: `url(${BannerImage})` }}*/>
          <div className="headerContainer">
            <h1> What We Do </h1>
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