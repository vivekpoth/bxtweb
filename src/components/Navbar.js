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