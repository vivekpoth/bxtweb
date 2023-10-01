import React from 'react';
import WhyBxt from '../assets/whybxt.png';
import ConsultingImg from '../assets/consultingImg.jpg';
import DigitalTransformationImg from '../assets/DigitalImg.jpg';
import ProductManagementImg from '../assets/PMImage.jpg';
import AgilePMImg from '../assets/AgileIMG.jpg'
import VisionMissionImg from '../assets/visionmissionimg.jpg'
import VisionIMG from '../assets/vision.jpg'
import { Link } from 'react-router-dom'; 
import '../styles/Home.css';
import '../styles/Card.css';
import '../styles/HomeWho.css';

const attributionConsulting = "https://www.freepik.com/free-vector/strategic-consulting-concept-illustration_26388521.htm#query=business%20consulting&position=0&from_view=search&track=ais";
const attributionDigitalTransformation = 'https://www.freepik.com/free-vector/innovation-concept-illustration_13717657.htm#page=2&position=2&from_view=author';
const attributionProductManagement = '';
const attributionAgilePM = '';
const attributionVissionMission = "https://www.freepik.com/free-vector/vision-statement-concept-illustration_19949385.htm#query=storyset%20vision&position=7&from_view=search&track=ais";


function Home() {

  return (
    <div>
      <div className="home">
        <div className="headerContainer">
          <h1> Innovative Business. <br /> Leverage Technology. </h1>
          <p> Business and Technology consulting firm with deep industry experience providing services to federal government, banks, and insurance companies. What sets us apart is our ability to provide solutions that encompasses business, technology, data, strategy and execution.</p>
        </div>
      </div>
      <div className="cardSection">
        <div class="heading-card-top">
          <h2>What We Do</h2>
        </div>
        <div className="cardContainer">
          <div className="card"> 
              <h2>Business Consulting</h2>
              <img src={ConsultingImg} alt="Consulting Image" />
              <p className='attribution'>Image by <a href={attributionConsulting}>storyset</a> on Freepik</p>
              <p className='cardDescription'>Achieve organizational growth, efficiency, and competitiveness. Our approach enables you to navigate challenges and seize opportunities in an ever-changing financial landscape.</p>
              <h3>Enable profitable sustainability.</h3>
          </div>
          <div className="card"> 
            <h2>Digital Transformation</h2>
            <img src={DigitalTransformationImg} alt="Digital Transformation Image" />
            <p className='attribution'>Image by <a href={attributionDigitalTransformation}>storyset</a> on Freepik</p>
            <p className='cardDescription'>Transform into innovative and technology centric business models. Our approach focuses on rapid digital development and deployment, experimentation, and the integration of data, technology, people, and processes to streamline operations and increase revenue.</p>
            <h3>Achieve digital excellence.</h3>
          </div>
          </Link>
          <Link to="/whatwedo#section3">
          <div className="card"> 
            <h2>Product Management</h2>
            <img src={ProductManagementImg} alt="Product Management Image" />
            <p className='attribution'>Image by <a href={attributionProductManagement}>storyset</a> on Freepik</p>
            <p className='cardDescription'>Transform into a product led organization to be more customer focused, agile, innovative and data driven resulting in better outcomes and increased business success.</p>
            <h3>Build the right product.</h3>
          </div>
          </Link>
          <Link to="/whatwedo#section4">
          <div className="card"> 
            <h2>Agile Program Management</h2>
            <img src={AgilePMImg} alt="Agile PM Image" />
            <p className='attribution'>Image by <a href={attributionAgilePM}>storyset</a> on Freepik</p>
            <p className='cardDescription'>Execute strategy and manage change to achieve business objectives. Our approach emphasizes on flexibility, collaboration, and continuous improvement to adapt to change and deliver value quickly and efficiently.</p>
            <h3>Deliver value quickly.</h3>
          </div> 
          </Link>
        </div>
      </div>
      <div className = "who">
        <div class="heading-card">
          <h2>Who We Are</h2>
        </div>
        <div class = "content">
          <div className='cards-container'>
            <div className="cardWho" id="visionCard" >
              <h2>Vision</h2>
              <img className = 'card-image' src = {VisionIMG}/>
              <p>To be recognized as a leader in helping organizations of all sizes transform into innovative, technology centric and data driven business models</p>
            </div>
            <div className="cardWho" id="missionCard">
              <h2>Mission</h2>
              <img className = 'card-image' src = {VisionMissionImg}/>
              <p>Our mission is to make a long-lasting positive impact on our customers and to build a firm of great leaders that hires, nurtures, and retains exceptional people</p>
            </div>
          </div>
        </div>
        {/* <p>We are a unique breed of consultants with experience-based business knowledge, proven delivery skills, and robust technology expertise.</p> */}
      </div>
      {/* <div className="whybxt" style={{ backgroundImage: `url(${WhyBxt})` }}> </div> */}
      {/* Attribution for the image */}
    </div>
  );
}

export default Home;