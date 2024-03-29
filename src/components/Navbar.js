import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Logo from '../assets/BxT-Old-Logo-01-1.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={Logo} alt="Logo"/>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/whoweare"
                activeClassName="active"
                className={`nav-links ${location.pathname === '/whoweare' ? 'active' : ''}`}
                onClick={handleClick}
              >
                Who We Are
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/whatwedo"
                activeClassName="active"
                className={`nav-links ${location.pathname === '/whatwedo' ? 'active' : ''}`}
                onClick={handleClick}
              >
                What We Do
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/resources"
                activeClassName="active"
                className={`nav-links ${location.pathname === '/resources' ? 'active' : ''}`}
                onClick={handleClick}
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/joinus"
                activeClassName="active"
                className={`nav-links ${location.pathname === '/joinus' ? 'active' : ''}`}
                onClick={handleClick}
              >
                Join Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

/*
import React, { useState } from 'react';
import Logo from '../assets/BxT-Old-Logo-01-1.png'
import { Link } from 'react-router-dom' 
import '../styles/Navbar.css'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/"> <img src={Logo} /> </Link>
        <div className="hiddenLinks">
          <Link to="/whoweare"> Who We Are </Link>
          <Link to="/whatwedo"> What We Do </Link>
          <Link to="/resources"> Resources </Link>
          <Link to="/joinus"> Join Us </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/whoweare"> Who We Are </Link>
        <Link to="/whatwedo"> What We Do </Link>
        <Link to="/resources"> Resources </Link>
        <Link to="/joinus"> Join Us </Link>
        <button onClick={toggleNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar
*/