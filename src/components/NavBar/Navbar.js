import React, { useState } from "react";
import "../NavBar/Navbar.css";
import "animate.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-content">
          <h2 className="animate__animated animate__wobble">
            <span>Omar</span> Samir
          </h2>
          <div className="navbar-items animate__animated animate__backInRight">
            <ul className={isMenuOpen ? "open" : ""}>
              <li className="Hm">
                <a style={{ color: "coral" }} href="#home">
                  Home
                </a>
              </li>
              <li className="sm">
                <a href="#home">About Me</a>
              </li>
              <li className="sm">
                <a href="#services">Services</a>
              </li>
              <li className="sm">
                <a href="#tools">Tools</a>
              </li>
              <li className="sm">
                <a href="#projects">Projects</a>
              </li>
              <li className="sm">
                <a href="#education">Education</a>
              </li>
              <li className="sm">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="list-icon-drop-down" onClick={toggleMenu}>
            <a href="#list">
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
