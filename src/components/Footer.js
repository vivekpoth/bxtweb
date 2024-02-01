import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>AT A GLANCE</h2>
          <p>
            BXT Partners is a business and technology consulting firm with deep industry experience providing advisory and management consulting services in the financial sector – banks, credit unions, insurance, and federal financial regulators. What sets us apart is our ability to provide solutions that encompass business, technology, strategy, and operations.
          </p>
          <p>
            DUNS Number: 052334228<br />
            CAGE Code: 6PA49<br />
            NAICS Codes: 541611, 541618, 541511, 541512, 541519, 518210, 541511, 541690
          </p>
        </div>
        <div className="footer-section">
          <h2>CONTACT US</h2>
          <p>
            Email: <a href="mailto:Info@bxtpartners.com">Info@bxtpartners.com</a><br />
            Phone: (703)-909-6676<br />
            Address: 2201 Cooperative Way, Suite 600, Herndon, VA 20171<br />
            <br />
            <iframe width="400" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=2201%20Cooperative%20Way,%20Suite%20600,%20Herndon,%20VA%2020171+(BXT%20Partners)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="map"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;