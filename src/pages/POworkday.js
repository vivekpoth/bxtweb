import React, { useEffect } from 'react';
import '../styles/Position.css'; // Make sure to import your CSS file

function POworkday() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jobDescriptionPage">
      <h1>Workday Product Owner</h1>

      <div className="jobDescription">
        <p>
          The position is part of the Human Resources section of the Division of Management to
          serve as Product Owner Support Specialist as part of the PSO (People, Strategy &amp;
          Operations)
          Information Systems and Compliance (HRIS) team providing support for the Product
          Owner of
          the Workday HCM Agile team in implementing sustainment practices and backlog
          refinement/prioritization.
        </p>

        <div className="section">
          <h2>Personnel Qualifications</h2>
          <ul>
            <li>Bachelor’s degree in IT or related field or equivalent IT software development life cycle experience to include Agile delivery. Preferably coupled with degree or experience in a Human Resources field of study.</li>
            <li>Experience with leading a Workday agile team and knowledge of Workday HCM.</li>
            <li>Strong knowledge of DevOps tools and processes, preference of experience with ServiceNow Agile module and knowledge of HRSD.</li>
            <li>Strong analytical, research, and conceptual-thinking skills to visualize solutions to a wide variety of HR needs.</li>
            <li>Excellent verbal and written communication skills.</li>
            <li>Ability to act with integrity, professionalism, and confidentiality.</li>
            <li>Ability to navigate organizational culture and flexibility on the application of best practices.</li>
            <li>Excellent interpersonal and negotiation skills.</li>
            <li>Excellent organizational skills and attention to detail.</li>
            <li>Excellent time management skills with a proven ability to meet deadlines.</li>
            <li>At least one of the following certifications:
              <ul>
                <li>Scrum Alliance Certified Scrum Product Owner (CSPO) or equivalent PO certification</li>
                <li>SAFe Agile Certification</li>
                <li>Certified SAFe Product Owner / Product Manager</li>
                <li>Certified Scrum Professional</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Responsibilities</h2>
          <ul>
            <li>Prepare for and participate in Sprint Review and Planning: by getting feedback from stakeholders on prioritization, collaborate with the team to detail story acceptance criteria, ensure all tasks have been completed and properly documented and story is ready for Product Owner approval.</li>
            <li>Manage cases/requests and stories via ServiceNow’s HRSD and Agile modules.</li>
            <li>Create and maintain relationships with key stakeholders and Center of Excellence leads (i.e. Benefits, Payroll, Compensation, Financials, etc.) that are our main customers.</li>
            <li>Create data visualizations that paint the picture of the team’s progress, challenges, etc.</li>
            <li>Support activities to create a roadmap of our own backlog and projects and other projects affecting the Workday system or shared resources.</li>
            <li>Other duties as assigned.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Capabilities</h2>
          <ul>
            <li>Prepare for and participate in Sprint Planning.</li>
            <li>Collaborate with the team to detail story acceptance criteria and examples in the form of acceptance tests.</li>
            <li>Communicate story detail and priorities and ensure the team aligns and agrees on a final iteration plan.</li>
            <li>Experience using Agile tracking tools (e.g., Jira, Confluence, Azure, and DevOps).</li>
          </ul>
        </div>

        <div className="section">
          <h2>Place of Performance</h2>
          <ul>
            <li>Remote with the organization’s discretion to request occasional on-site at FRB locations in Washington, DC.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Citizenship Status</h2>
          <ul>
            <li>US Citizenship required.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Period of Performance</h2>
          <ul>
            <li>ANTICIPATED START DATE: February 5, 2024</li>
            <li>END DATE: December 31, 2024</li>
            <li>NOTE: Possibility to extend services through 12/31/2025.</li>
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

export default POworkday;