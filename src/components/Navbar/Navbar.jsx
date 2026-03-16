import React, { useState } from "react";
import {Link} from 'react-scroll'
import "./Navbar.css";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        Abishek<span>.FED</span>
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="home" smooth={true} duration={500}
       onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}
       onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}
       onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}
       onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}
       onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
 {/* Right Icons */}
<div className="nav-icons">
  <a href="https://github.com/ABISHEK-FED" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>

  <a href=" https://www.linkedin.com/in/abishek-sachithanandham-5bb711390" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>


{/* Talk Button */}
<Link to="contact" smooth={true} duration={500}>
  <button className="talk-btn">
    Let's Talk
  </button>
</Link>
</div>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}