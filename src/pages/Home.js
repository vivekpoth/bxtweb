import React from 'react';
import BannerImage from '../assets/gradient.png';
import WhyBxt from '../assets/whybxt.png';
import { Link } from 'react-router-dom'; 
import '../styles/Home.css';
import '../styles/Card.css';
import '../styles/HomeWho.css';

function Home() {

  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Innovative Business. <br /> Leverage Technology. </h1>
          <p> Business and Technology consulting firm with deep industry experience providing services to federal government, banks, and insurance companies. What sets us apart is our ability to provide solutions that encompasses business, technology, data, strategy and execution.</p>
        </div>
      </div>
      <div className="cardSection">
          <h1>What We Do</h1>
        <div className="cardContainer">
          <Link to="/whatwedo#section3">
            <div className="card"> 
                <h2>Business Consulting</h2>
                <p>Achieve organizational growth, efficiency, and competitiveness. Our approach enables you to navigate challenges and seize opportunities in an ever-changing financial landscape.</p>
                <h3>Drive sustainable growth and profitability.</h3>
            </div>
          </Link>
          <div className="card"> 
            <h2>Digital Transformation</h2>
            <p>Transform into innovative and technology centric business models. Our approach focuses on rapid digital development and deployment, experimentation, and the integration of data, technology, people, and processes to streamline operations and increase revenue.</p>
            <h3>Achieve digital excellence.</h3>
          </div>
          <div className="card"> 
            <h2>Product Management</h2>
            <p>Transform into a product led organization to be more customer focused, agile, innovative and data driven resulting in better outcomes and increased business success.</p>
            <h3>Build the right product.</h3>
          </div>
          <div className="card"> 
            <h2>Agile Program Management</h2>
            <p>Execute strategy and manage change to achieve business objectives. Our approach emphasizes on flexibility, collaboration, and continuous improvement to adapt to change and deliver value quickly and efficiently.</p>
            <h3>Deliver value quickly.</h3>
          </div> 
        </div>
      </div>
      <div className = "who">
        <div>
          <h1>Who We Are</h1>
          <div className="cardWhoContainer"> 
            <div className="cardWho">
              <h2>Vision</h2>
              <p>To be recognized as a leader in helping organizations of all sizes transform into innovative, technology centric and data driven business models</p>
            </div>
            <div className="cardWho">
              <h2>Mission</h2>
              <p>Our mission is to make a long-lasting positive impact on our customers and to build a firm of great leaders that hires, nurtures, and retains exceptional people</p>
            </div>
          </div>
          <p>We are a unique breed of consultants with experience-based business knowledge, proven delivery skills, and robust technology expertise.</p>
        </div>
      </div>
      <div className="whybxt" style={{ backgroundImage: `url(${WhyBxt})` }}> </div>
    </div>
  );
}

export default Home;