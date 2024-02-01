import React, { useEffect } from 'react';
import '../styles/Position.css'; // Make sure to import your CSS file

function TFAworkday() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jobDescriptionPage">
      <h1>Techno Functional Analyst (Workday)</h1>

      <div className="jobDescription">
        <p>
          The primary responsibility of the Technology Services’ (TS) ERP Cloud Oversight &amp;
          Security
          team is to maintain and support Security for Several ERP Cloud applications to include
          Workday &amp; Coupa. We are seeking one Security engineer resource to augment the
          team.
        </p>

        <p>
          You will provide technical expertise for security access management, regulatory
          compliance, security policy, and application-level security compliance. The position
          provides consultation in analyzing, assessing, and design applications -layer security
          controls. You will also ensure that the organization's HR &amp; FIN processes, and
          technology align effectively to support its workforce management needs. You will
          provide local expertise and skills to consult on setup, configuration and maintenance of
          business processes and data aligned to Core HCM/FIN and Security across the
          organizational landscape.
        </p>

        <div className="section">
          <h2>Personnel Qualifications</h2>
          <ul>
            <li>A bachelor’s degree in Computer Science or a related degree in the IT field or equivalent experience.</li>
            <li>At least 10 years of experience in full SDLC for all task order applications and technologies.</li>
            <li>Strong organizational and multi-tasking skills.</li>
            <li>Ability to adapt to shifting priorities, demands and timelines through analytical and problem-solving capabilities.</li>
            <li>Demonstrates an urgency to achieve goals and can be relied upon to deliver results.</li>
            <li>Superior interviewing skills.</li>
            <li>Excellent communication skills: oral, written, presentation, facilitation and interpersonal.</li>
            <li>Maintain and build client relationships.</li>
            <li>Ability to effectively work with others with a diversity of communication styles and technical areas of expertise.</li>
            <li>Demonstrates the ability to lead the planning, design and implementation of projects.</li>
            <li>Certified in a core Workday functional pillar (HCM, Financials, etc.)</li>
            <li>3+ years of Workday implementation experience</li>
            <li>Excellent functional knowledge of Workday Security</li>
          </ul>
        </div>

        <div className="section">
          <h2>Responsibilities</h2>
          <ul>
            <li>System Configuration: Configure and maintain Core HCM and Role-Based / User-Based Security to meet the organization's business requirements.</li>
            <li>Compliance: Stay up-to-date with compliance requirements (as applicable to the module) to ensure processes and workflows are compliant with any local laws. Make necessary system adjustments to accommodate changes in regulations.</li>
            <li>Reporting: Generate regular reports and analytics related to module information for insights or audit purposes. Provide insights and recommendations for process improvements.</li>
            <li>Issue Resolution: Investigate and resolve discrepancies, errors, and escalated employee inquiries within a respective module in a timely manner.</li>
            <li>Testing and Upgrades: Partner with PSO and ERP Solutions Delivery Team to participate in system testing and upgrades to ensure relevant modules function correctly and efficiently. Understand future releases and demo to stakeholder groups for discussion / application.</li>
            <li>Training and Support: Partner to train end-users and stakeholders on how to use different functionality within the modules effectively. Provide ongoing support and troubleshooting assistance.</li>
            <li>Integration: Collaborate with other teams to understand the needs of differing HRIS Analysts (admins), HR Users, People Leaders or End Users ensuring processes flow smoothly.</li>
            <li>Process Optimization: Continuously identify opportunities to streamline and improve module processes. Propose and implement enhancements to increase efficiency and accuracy.</li>
            <li>Security: Oversee the configuration of role and user-based security assignments across the organization to ensure domains and data objects are correctly applied to enable users to perform as well as drive data protection specifications.</li>
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
          <h2>Place of Performance</h2>
          <ul>
            <li>Full-time telework is available. Local staff report to office in Washington, DC, one day a week.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Citizenship Status</h2>
          <ul>
            <li>US Citizenship or Green Card is required.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Period of Performance</h2>
          <ul>
            <li>ANTICIPATED START DATE: 01/29/2024</li>
            <li>END DATE: 12/31/2024</li>
            <li>NOTE: Possibility to extend services beyond the anticipated period of performance. The anticipated end date is December 31, 2025.</li>
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

export default TFAworkday;