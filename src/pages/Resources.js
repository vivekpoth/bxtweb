import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Resources.css';
import BannerImage from '../assets/gradient.png';
import CaseStudyForm from '../components/CaseStudyForm';

function Resources() {
  // Sample case studies data organized by service
  const services = [
    {
      name: 'Business Consulting',
      caseStudies: [
        {
          title: 'Credit Department Reorganization',
        },
        {
          title: 'Risk Management - Implement Three Lines of Défense',
        },
        {
          title: 'Organization Readiness - Dodd Frank Act',
        },
        {
          title: 'Business Operations Technology Strategic',
        },
        // Add more case studies for Service 1
      ],
    },
    {
      name: 'Digital Transformation',
      caseStudies: [
        {
          title: 'Digital Bank Supervision',
        },
        {
          title: 'Digitized End to End Processes - Implement New Law',
        },
        {
          title: 'Born Digital Stays Digital',
        },
        {
          title: 'Robotics Process Automation COE',
        },
        {
          title: 'Advanced Analytics',
        },
        {
          title: 'Large Data Management',
        },
        // Add more case studies for Service 2
      ],
    },
    {
      name: 'Product Management',
      caseStudies: [
        {
          title: 'Product Led Organization',
        },
        {
          title: 'Branch Operations Redesign',
        },
        {
          title: 'Loan Origination Technology Modernization',
        },
        {
          title: 'Application Rationalization',
        },
        {
          title: 'Board Business Cases',
        },
        // Add more case studies for Service 2
      ],
    },
    {
      name: 'Agile Program / Project Management',
      caseStudies: [
        {
          title: 'Enterprise Project/Portfolio Management',
        },
        {
          title: 'Information Security PMO',
        },
        {
          title: 'Agile Transformation',
        },
        {
          title: 'Independent Verification and Validation (IV&V)',
        },
        // Add more case studies for Service 2
      ],
    },
  ];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCaseStudyTitle = queryParams.get('caseStudy');
  const scrollOffset = 100; // Adjust this value to set the desired offset

  useEffect(() => {
    // Scroll to the top of the page first
    window.scrollTo(0, 0);

    // Scroll to the selected case study section with an offset
    if (selectedCaseStudyTitle) {
      const sectionElement = document.getElementById(selectedCaseStudyTitle);

      if (sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top;
        window.scrollTo({
          top: window.scrollY + sectionTop - scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedCaseStudyTitle]);

  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const closeModal = () => {
    setFormVisible(false);
  };
  // Handle form submission, send email, and close the form
  const handleSubmitForm = (formData) => {
    console.log('Form submitted:', formData);

  };

  

  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Resources</h1>
          <p>Click to download a case study.</p>
        </div>
      </div>
      <div className="caseStudies2">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <h2>{service.name}</h2>
            <div className="caseStudiesList">
              {service.caseStudies.map((caseStudy, caseIndex) => (
                <div
                  className="caseStudy"
                  key={caseIndex}
                  id={caseStudy.title}
                  onClick={() => {
                    setSelectedCaseStudy(caseStudy);
                    setFormVisible(true);
                  }}
                >
                  <h3>{caseStudy.title}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Display the form if a case study is selected */}
      {isFormVisible && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <CaseStudyForm
              selectedCaseStudy={selectedCaseStudy}
              onClose={closeModal}
              onSubmit={handleSubmitForm}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Resources;