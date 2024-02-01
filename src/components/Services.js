import React from 'react';
import '../styles/Services.css'; // Your service page specific styles
import { Link } from 'react-router-dom' 
import busconsultingimg from '../assets/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept.jpg';
import digitransimg from '../assets/rpa-concept-with-blurry-hand-touching-screen.jpg';
import projmanimg from '../assets/business-people-meeting.jpg';
import staffimg from '../assets/successful-happy-business-team.jpg';
import prodmanimg from '../assets/shoulder-shot-business-man-drawing-diagrams-wall-poster.jpg';

export function Service1() {
    return (
        <div className="serviceTotal">
            <div className="servicePage">
                <div className ="serviceContainer">
                    <div className="serviceContent">
                        <h1>Business Consulting</h1>
                        <h3>Drive sustainable growth and profitability</h3>
                        <p>
                        Achieve organizational growth, efficiency and competitiveness. Our approach enables you to
                        navigate challenges and seize opportunities in an ever-changing financial landscape by
                        focusing on innovation, revenue growth, actionable risk management, and continuous
                        business operations improvement that is guided by a strategy.
                        </p>
                        <p>
                        We bring years of deep industry experience providing services in the financial industry.
                        </p>
                        <p>
                        We partner with clients to develop strategies, design business operations and implement
                        change models ensuring maximum value is realized using a mix of mindset, people,
                        processes, technology, and data.
                        </p>
                        <ul>
                        <li>Strategy and Planning</li>
                        <li>Risk Management</li>
                        <li>Business Process Re-design</li>
                        <li>Regulatory Compliance</li>
                        <li>Customer Experience Enhancement</li>
                        <li>Post-Merger Integration</li>
                        </ul>
                        <h1>#GrowTheMarket</h1>
                    </div>
                    <div className="serviceImage">
                        <img src={busconsultingimg} alt="Business Consulting"/>
                    </div>
                </div>
            </div>
            <div className = "caseStudiesContainer"> 
                <h2> Case Studies </h2>
                <div className="caseStudies">
                        <Link to={`/resources?caseStudy=Credit%20Department%20Reorganization`} className="link-button"> Credit Department Reorganization </Link>
                        <Link
                        to="/resources?caseStudy=Risk%20Management%20-%20Implement%20Three%20Lines%20of%20Défense"
                        className="link-button"
                        >
                        Risk Management - Implement Three Lines of Défense
                        </Link>
                        <Link
                        to="/resources?caseStudy=Organization%20Readiness%20-%20Dodd%20Frank%20Act"
                        className="link-button"
                        >
                        Organization Readiness - Dodd Frank Act
                        </Link>
                        <Link
                        to="/resources?caseStudy=Business%20Operations%20Technology%20Strategic"
                        className="link-button"
                        >
                        Business Operations Technology Strategic
                        </Link>
                </div>       
            </div>
        </div>
    );
}

export function Service2() {
    return (
        <div className="serviceTotal">
            <div className="servicePage1">
                <div className ="serviceContainer">
                    <div className="serviceContent">
                        <h1>Digital Transformation</h1>
                        <h3>Achieve digital excellence</h3>
                        <p>
                        Transform into an innovative and technology-centric organization that is
                        well-positioned to succeed in today's rapidly changing business environment.
                        </p>
                        <p>
                        Our approach to increasing organizational value involves transforming operations
                        and business models using digital technologies to improve efficiency, enhance
                        customer experience, and create new revenue streams. This is achieved through
                        rapid digital development and deployment, experimentation, streamlined
                        processes, and the integration of data, technology, people, and processes.
                        </p>
                        <p>
                        We partner with clients to develop digital strategies, automate, digitize, and drive
                        business value with data.
                        </p>
                        <ul>
                        <li>Digital Strategy</li>
                        <li>Intelligent Automation</li>
                        <li>Digital Product Development</li>
                        <li>Data Strategy and Management</li>
                        <li>Artificial Intelligence and Analytics</li>
                        </ul>
                        <h1>#GoDigital</h1>
                    </div>
                    <div className="serviceImage">
                            <img src={digitransimg} alt="Digital Transformation"/>
                    </div>
                </div>
                
            </div>
            <div className = "caseStudiesContainer1"> 
                <h2> Case Studies</h2>
                <div className="caseStudies">
                <Link
                to="/resources?caseStudy=Digital%20Bank%20Supervision"
                className="link-button"
                >
                Digital Bank Supervision
                </Link>
                <Link
                to="/resources?caseStudy=Digitized%20End%20to%20End%20Processes%20-%20Implement%20New%20Law"
                className="link-button"
                >
                Digitized End to End Processes - Implement New Law
                </Link>
                <Link
                to="/resources?caseStudy=Born%20Digital%20Stays%20Digital"
                className="link-button"
                >
                Born Digital Stays Digital
                </Link>
                <Link
                to="/resources?caseStudy=Robotics%20Process%20Automation%20COE"
                className="link-button"
                >
                Robotics Process Automation COE
                </Link>
                <Link
                to="/resources?caseStudy=Advanced%20Analytics"
                className="link-button"
                >
                Advanced Analytics
                </Link>
                <Link
                to="/resources?caseStudy=Large%20Data%20Management"
                className="link-button"
                >
                Large Data Management
                </Link>
                </div>       
            </div>
        </div>
    );
}

export function Service3() {
    return (
        <div className="serviceTotal">
            <div className="servicePage">
                <div className ="serviceContainer">
                    <div className="serviceContent">
                        <h1>Product Management</h1>
                        <h3>Build the right product</h3>
                        <p>
                        Transform into a product led organization to be more customer focused, agile, innovative
                        and data driven resulting in better outcomes and increased business success. Successful
                        transformation of organizations to leverage software product as a source of growth relies
                        heavily on getting the product management right. And is critical to driving business impact
                        and maximizing ROI on software investments.
                        </p>
                        <p>
                        BXT Partners has the experience and expertise to transform your organization into product
                        led organization. Our product managers shape software products based on customer needs,
                        pressure testing them for business viability, collaborating across engineering teams to build,
                        and work with sales and marketing to commercialize and take the product to market.
                        </p>
                        <p>
                        Wherever you are in the transformation, we have the frameworks, tools, experience, and
                        expertise to assist you with following service capabilities.
                        </p>
                        <ul>
                        <li>Product Led Organization Transformation</li>
                        <li>Product Portfolio Strategy</li>
                        <li>Agile Adoption</li>
                        <li>Human Centered Design</li>
                        <li>Application Rationalization and Modernization</li>
                        <li>Business Case</li>
                        </ul>
                        <h1>#GetTheRightSh!tDone</h1>
                    </div>
                    <div className="serviceImage">
                        <img src={prodmanimg} alt="Product Management"/>
                    </div>
                </div>
            </div>
            <div className = "caseStudiesContainer"> 
                <h2> Case Studies </h2>
                <div className="caseStudies">
                <Link
                to="/resources?caseStudy=Product%20Led%20Organization"
                className="link-button"
                >
                Product Led Organization
                </Link>
                <Link
                to="/resources?caseStudy=Branch%20Operations%20Redesign"
                className="link-button"
                >
                Branch Operations Redesign
                </Link>
                <Link
                to="/resources?caseStudy=Loan%20Origination%20Technology%20Modernization"
                className="link-button"
                >
                Loan Origination Technology Modernization
                </Link>
                <Link
                to="/resources?caseStudy=Application%20Rationalization"
                className="link-button"
                >
                Application Rationalization
                </Link>
                <Link
                to="/resources?caseStudy=Board%20Business%20Cases"
                className="link-button"
                >
                Board Business Cases
                </Link>
                </div>       
            </div>
        </div>
    );
}

export function Service4() {
    return (
        <div className="serviceTotal">
            <div className="servicePage1">
                <div className ="serviceContainer">
                    <div className="serviceContent">
                        <h1>Agile Program/Project Management</h1>
                        <h3>Deliver value quickly</h3>
                        <p>
                        Execute strategy and manage change to achieve business objectives. Our approach
                        emphasizes on flexibility, collaboration, and continuous improvement to adapt to change
                        and deliver value quickly and efficiently.
                        </p>
                        <p>
                        An organization's ability to successfully execute projects and manage change is a key
                        component of their overall success and profitability. We bring the expertise to implement
                        effective project and portfolio management processes and tools to improve delivery.
                        </p>
                        <p>
                        As a trusted partner, we understand the complexities of managing large-scale projects and programs,
                        and we're here to ensure your success from start to finish. Our team of seasoned program managers
                        has a proven track record of delivering outstanding results.
                        </p>
                        <ul>
                        <li>Complex Program Management</li>
                        <li>Project Portfolio Management</li>
                        <li>PMO Setup</li>
                        <li>Sourcing and Acquisition</li>
                        <li>Change Management</li>
                        <li>Business Analysis</li>
                        </ul>
                        <h1>#GoToMarketTimely</h1>
                    </div>
                    <div className="serviceImage">
                        <img src={projmanimg} alt="Agile Project Management"/>
                    </div>
                </div>
            </div>
            <div className = "caseStudiesContainer1"> 
                <h2> Case Studies </h2>
                <div className="caseStudies">
                <Link
                to="/resources?caseStudy=Enterprise%20Project/Portfolio%20Management"
                className="link-button"
                >
                Enterprise Project/Portfolio Management
                </Link>
                <Link
                to="/resources?caseStudy=Information%20Security%20PMO"
                className="link-button"
                >
                Information Security PMO
                </Link>
                <Link
                to="/resources?caseStudy=Agile%20Transformation"
                className="link-button"
                >
                Agile Transformation
                </Link>
                <Link
                to="/resources?caseStudy=Independent%20Verification%20and%20Validation%20(IV&V)"
                className="link-button"
                >
                Independent Verification and Validation (IV&V)
                </Link>
                </div>       
            </div>
        </div>
    );
}

export function Service5() {
    return (
        <div className="servicePage">
            <div className ="serviceContainer">
                <div className="serviceContent">
                    <h1>Staff Augmentation</h1>
                    <h3>Build High Impact Teams</h3>
                    <p>
                    We follow a well-established and proven process that involves evaluating client needs,
                    identifying suitable candidates from our talent pool, and nurturing our employees for
                    continuous learning and development to ensure they have up-to-date skills.
                    </p>
                    <p>
                    With our comprehensive strategy and unwavering commitment to excellence, we are your
                    trusted partner in providing exceptional technical staffing services.
                    </p>
                </div>
                <div className="serviceImage">
                    <img src={staffimg} alt="Staff Augmentation"/>
                </div>
            </div>
        </div>
    );
}
