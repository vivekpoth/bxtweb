import React, { useEffect } from 'react';
import '../styles/Position.css'; // Make sure to import your CSS file

function ProjectManager() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jobDescriptionPage">
      <h1>Project Manager</h1>

      <div className="jobDescription">
        <p>
          We are seeking to hire a Project Manager to work alongside a team that is designing
          and developing information management, collaboration, and intranet tools in SharePoint
          Online for our federal clients located in Washington, DC.
        </p>

        <div className="section">
          <h2>Personnel Qualifications</h2>
          <ul>
            <li>At least five (5) years of experience leading cross-functional Agile project teams and ensuring that Agile processes and methodologies are followed.</li>
            <li>A bachelor’s degree in Computer Science or a related degree in the IT field or equivalent experience.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Capabilities</h2>
          <ul>
            <li>Experience leveraging Agile Project Management best practices and ceremonies (e.g., sprints, stands, retros, estimating, etc.), to implement new software and digital products in an organization.</li>
            <li>Able to execute business process/task analysis and translate into user stories.</li>
            <li>Proficiency in project management tools (Gitlab, Jira, Planner, etc.).</li>
            <li>Excellent interpersonal skills with a proven ability to communicate at various levels within IT project teams, stakeholders, technical teams, and clients.</li>
            <li>Must be able to multitask assignments and projects, work with a team, and work well independently.</li>
            <li>Experience with planning and communicating the launch of new products and features to an organization or division, including development of communications plans, delivering user demos, coordinating support, and executing end-user training programs.</li>
            <li>Problem Solving.</li>
            <li>Creative and strategic thinking.</li>
            <li>Preferred: Experience conducting user research (user interviews, card sorting, contextual inquiries, personas, etc.).</li>
            <li>Preferred: Experience leading Usability Testing with end users.</li>
            <li>Preferred: Experience as Agile Coach either in a technology or non-technology role in an organization that diligently applied agile principles, practices, and theory.</li>
            <li>Preferred: Ability to turn user needs into key performance indicators (KPIs) and/or objectives and key results (OKRs).</li>
            <li>Analyze user needs to determine functional and cross-functional requirements.</li>
            <li>Performs functional allocation to identify required tasks and their interrelationships.</li>
            <li>Identifies resources required for each task.</li>
          </ul>
        </div>

        <div className="section">
          <h2>You Shall:</h2>
          <ul>
            <li>Follow client’s IT standards or industry best practices, as directed.</li>
            <li>Manage project timelines, resources, and scope.</li>
            <li>Facilitate agile ceremonies such as daily stand-ups, sprint planning, retrospectives, and demos.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Place of Performance</h2>
          <ul>
            <li>Minimum four (4) days per month on-site at client location, Washington, DC.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Citizenship Status</h2>
          <ul>
            <li>US Citizenship is required.</li>
          </ul>
        </div>
      </div>
      <h1>
        Qualified? Email{' '}
        <a href="mailto:hr@bxtpartners.com">hr@bxtpartners.com</a>.
      </h1>
    </div>
  );
}

export default ProjectManager;