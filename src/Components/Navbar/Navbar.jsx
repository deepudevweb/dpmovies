import { useState } from 'react'
import React from 'react'
import Logo from '../Images/icons8-imdb-48.png'
import './Navbar.css';
import { IoMenu } from "react-icons/io5";
import axios from 'axios';
// import { Link } from 'react-router-dom'

const Navbar = () =>  {
  const [showLinks, setShowLinks] = useState(false);
  const [zIndex, setZIndex] = useState(null);
  const toggleLinks = () => {
    // setShowLinks(prevShowLinks => !prevShowLinks);
    setShowLinks(!showLinks);
    setZIndex(showLinks ? null : 100);
  };
  
  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-icons">
          <div className="navbar-toggle" onClick={toggleLinks}>
            <IoMenu className='menu-icon' />
          </div>
        </div>
        <div className="navbar-logo">
          <img src={Logo} alt="IMDb Logo" />
        </div>
        <div className={`navbar-links ${showLinks ? 'show' : ''}`} style={{ zIndex: zIndex }}>
          <ul>
            <li>Movies</li>
            <li>TVShows</li>
            <li>Celebs</li>
            <li>More</li>
          </ul>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search IMDb" />
          <button type="button">Search</button>
        </div>
        <div className="navbar-auth">
          <ul>
            <li>Sign Up</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
    };
    
    export default Navbar;
