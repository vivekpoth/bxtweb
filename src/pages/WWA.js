import React, {useEffect} from 'react'
import '../styles/VisMis.css';
import '../styles/Home.css';
import '../styles/Values.css';
import '../styles/Story.css';
import MissionImg from '../assets/6137734.jpg'
import VisionIMG from '../assets/6029459.jpg'

function WWA() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
        <div className="home" /*style={{ backgroundImage: `url(${BannerImage})` }}*/>
          <div className="headerContainer">
            <h1> Who We Are </h1>
          </div>
        </div>
        <div className="vismis">
            <div className="vision">
                <h2>Vision</h2>
                <img className = 'card-image1' src = {VisionIMG} alt="Vision"/>
                <p>To be recognized as a leader in helping organizations of all sizes transform into innovative, technology-centric, and data-driven business models</p>
            </div>
            <div className="mission">
                <h2>Mission</h2>
                <img className = 'card-image2' src = {MissionImg} alt="Mission"/>
                <p>Our mission is to make a long-lasting positive impact on our customers and to build a firm of great leaders that hires, nurtures, and retains exceptional people</p>
            </div>
        </div>
        <div className="coreValuesSection">
            <h1>We embrace V.O.I.C.E driven by our core values</h1>
            <div className="coreValuesContainer">
                <div className="coreValueCard">
                <h1>V</h1>
                <h2>Value</h2>
                <p>Deliver value to our clients with exceptional service.</p>
                </div>
                <div className="coreValueCard">
                <h1>O</h1>
                <h2>Objective</h2>
                <p>Maintain Independent, fact-based, and objective perspective.</p>
                </div>
                <div className="coreValueCard">
                <h1>I</h1>
                <h2>Integrity</h2>
                <p>Act with integrity and responsibility; take accountability for the outcomes.</p>
                </div>
                <div className="coreValueCard">
                <h1>C</h1>
                <h2>Courage</h2>
                <p>Cultivate entrepreneurial culture, collaborate and adapt with agility.</p>
                </div>
                <div className="coreValueCard">
                <h1>E</h1>
                <h2>Empower</h2>
                <p>Empower employees to excel, govern ourselves as “one-firm”.</p>
                </div>
            </div>
        </div>
        <div className="ourStory">
            <div className="ourStoryBox">
                <div className="ourStoryContent">
                <h1>Our Story</h1>
                <p>
                    BXT Partners was started in 2010 by the founders who had prior management consulting experience at a premier management consulting firm. They were driven by the entrepreneurial urge to help customers enable growth and organizational effectiveness through effective use of technology.
                </p>
                <p>
                    Our initial success was when we helped a major financial regulator drive strategy development and assist with execution management. This resulted in helping the customer better respond to the financial crisis and implement new laws and regulations. We also helped the customer with developing and executing digital Strategy, consolidated application modernization strategy, business operations improvement, advanced analytics etc.
                </p>
                <p>
                    Based on this success, founders established BXT Partners to replicate what we are good at i.e. working at the intersection of business and technology to help organizations of all sizes transform into innovative, technology-centric and data-driven businesses.
                </p>
                <p>
                    We are focused on helping small and mid-size organizations benefit from innovation, technology, and data as much as big organizations. Similarly, helping large organizations be nimble and agile like a small entrepreneur-led organization.
                </p>
                <p>
                    Since then, we have hired, mentored, and nurtured employees who have the passion to help organizations innovate business leveraging technology. Our employees are unique with experience-based business knowledge, proven delivery skills, and robust technology expertise.
                </p>
                <p>
                    We have been serving customers to:
                </p>
                <ul>
                    <li>Drive Sustainable Growth and Strategy: Develop strategies, design business operations, and implement change models ensuring maximum value is realized using a mix of mindset, people, processes, technology, and data.</li>
                    <li>Achieve Digital Excellence: Develop digital strategies, automate, digitize, and drive business value with data.</li>
                    <li>Build the Right Product: Transform into a product-led organization to be more customer-focused, agile, innovative, and data-driven resulting in better outcomes and increased business success.</li>
                    <li>Deliver Value Quickly: Develop strategies and execute projects that turn strategy into measurable business results.</li>
                </ul>
                </div>
            </div>
            </div>
    </div> 
    
  )
}

export default WWA