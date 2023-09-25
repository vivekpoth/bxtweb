import React from 'react';
import '../styles/Resources.css';
import BannerImage from '../assets/gradient.png';

function Resources() {
  // Sample case studies data organized by service
  const services = [
    {
      name: 'Service 1',
      caseStudies: [
        {
          title: 'Case Study 1',
          description: 'Description of Case Study 1...',
        },
        {
          title: 'Case Study 2',
          description: 'Description of Case Study 2...',
        },
        {
          title: 'Case Study 2',
          description: 'Description of Case Study 2...',
        },
        {
          title: 'Case Study 2',
          description: 'Description of Case Study 2...',
        },
        // Add more case studies for Service 1
      ],
    },
    {
      name: 'Service 2',
      caseStudies: [
        {
          title: 'Case Study 3',
          description: 'Description of Case Study 3...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        // Add more case studies for Service 2
      ],
    },
    {
      name: 'Service 2',
      caseStudies: [
        {
          title: 'Case Study 3',
          description: 'Description of Case Study 3...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        // Add more case studies for Service 2
      ],
    },
    {
      name: 'Service 2',
      caseStudies: [
        {
          title: 'Case Study 3',
          description: 'Description of Case Study 3...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        {
          title: 'Case Study 4',
          description: 'Description of Case Study 4...',
        },
        // Add more case studies for Service 2
      ],
    },
  ];

  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Resources</h1>
          <p>Explore our case studies by service.</p>
        </div>
      </div>
      <div className="caseStudies">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <h2>{service.name}</h2>
            <div className="caseStudiesList">
              {service.caseStudies.map((caseStudy, caseIndex) => (
                <div className="caseStudy" key={caseIndex}>
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                  {/* Add a button here to handle form display */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;