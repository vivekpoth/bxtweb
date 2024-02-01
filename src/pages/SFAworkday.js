import React, { useEffect } from 'react';
import '../styles/Position.css'; // Make sure to import your CSS file

function SFAworkday() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jobDescriptionPage">
      <h1>Senior Functional Analyst - Workday</h1>

      <div className="jobDescription">
        <p>
          This position will be part of the ERP Cloud Solution Delivery team that has the primary
          responsibility to maintain and support two highly visible cloud systems, Workday and Coupa.
          We are seeking one Workday Analyst to augment the team.
        </p>

        <p>
          You will provide support which includes troubleshooting Production issues related to
          Workday Finance and Adaptive Planning, developing integrations and reports,
          performing end-to-end testing of said integrations, reports, and/or business processes.
          You would support the Production Workday environment and the development of new
          solutions and enhancements.
        </p>

        <div className="section">
          <h2>Personnel Qualifications</h2>
          <ul>
            <li>A bachelor's degree in computer science or a related degree in the IT field or equivalent experience.</li>
            <li>At least 10 years of experience in full SDLC.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Place of Performace</h2>
          <ul>
            <li>Full-time telework is available. Local staff report to office in Washington, DC, one day a week.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Citizen Status</h2>
          <ul>
            <li>US Citizenship or Green Card is required.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Capabilities</h2>
          <ul>
            <li>Analyze user needs to determine functional and cross-functional requirements.</li>
            <li>Performs functional allocation to identify required tasks and their interrelationships.</li>
            <li>Identifies resources required for each task.</li>
            <li>Provides daily supervision and direction to support staff.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Candidate Knowledge and Experience</h2>
          <ul>
            <li>The ability to configure, implement, test, and document solutions in Workday’s Adaptive Planning module.</li>
            <li>Possess experience with integrations in Workday (Studio, EIB etc.).</li>
            <li>Strong functional/analytical skills in Workday Finance and Adaptive Planning.</li>
            <li>Strong work ethic.</li>
            <li>Excellent communication and organizational skills.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Candidate Responsibilities</h2>
          <ul>
            <li>Monitor integration issues in Production and work with business users and agile team on the issue resolution.</li>
            <li>Support regression testing of new Workday Finance and Adaptive Planning releases.</li>
            <li>Design and test assigned reports and integrations.</li>
            <li>Document project deliverables such as requirements specification, design, and test results.</li>
          </ul>
        </div>
      </div>
      <h1>
      Qualified? Email{' '}
            <a href="mailto:hr@bxtpartners.com">hr@bxtpartners.com.</a>
      </h1>
    </div>
  );
}

export default SFAworkday;