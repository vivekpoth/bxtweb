import React from 'react'
import '../styles/Services.css'
import BannerImage from '../assets/gradient.png';
import '../styles/Home.css';
import '../styles/JoinUs.css';


function JoinUs() {
  return (
    <div>
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
          <div className="headerContainer">
            <h1> Join Us </h1>
            <p> Tagline? </p>
          </div>
        </div>
        <div className="joinUsPage">
            <h1>
              Are you passionate about helping organizations transform into innovative, technology-centric, and data-driven business models?
            </h1>
            <div className="joinUsContainer">
                <p>
                  Employees are key to our success. We hire exceptional people, empower them, and nurture them to become great leaders. We invest in our employees and provide opportunities regularly to learn and share.
                </p>
                <h3>We are looking for exceptional people who:</h3>
                <ul>
                    <li>Work to solve real business problems and not just complete assigned tasks.</li>
                    <li>Can bridge the gap between business and technology.</li>
                    <li>Can facilitate, negotiate, and communicate with business leaders and technologists.</li>
                </ul>
                <p>
                  BXT Partners is an equal opportunity employer, and all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, national origin, sexual orientation, gender identity, disability status, protected veteran status, or any other characteristic protected by law.
                </p>
                <p>
                  Interested? Shoot us an email at{" "}
                  <a href="mailto:hr@bxtpartners.com">hr@bxtpartners.com.</a>
                </p>
            </div>
        </div>
    </div>   
  )
}

export default JoinUs