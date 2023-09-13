import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Clock from "./DateTime";
import { Link } from "react-router-dom";


function Navbar() {
  const options = ['English', 'Hindi'];

  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn((prevIsSoundOn) => !prevIsSoundOn);
    // You can add logic here to mute/unmute sound as needed
  };

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const defaultOption = options[0];

  return (
    <nav className="nav">
      <div className="Time">
        <Clock />
      </div>
      <a href="#" className="nav__brand">
        Skip to main content
      </a>
      <div onClick={toggleSound} className="nav__toggler">
        {isSoundOn ? (
          <FontAwesomeIcon icon={faVolumeUp} className="sound-icon" />
        ) : (
          <FontAwesomeIcon icon={faVolumeMute} className="sound-icon" />
        )}
      </div>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            A+
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            A
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            A-
          </a>
        </li>
        <li className="nav__item">
          <button className="btn1">A</button>
        </li>
        <li className="nav__item">
          <button className="btn2">A</button>
        </li>
        <li>
          <Dropdown options={options} onChange={(selectedOption) => console.log(selectedOption)} value={defaultOption} placeholder="Select an option" />
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="social-buttons">  
        <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" class="gmail"><i class="fas fa-envelope"></i></a>
        <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
      </div>

      <div className="login">
      <button className="loginbutton">Login</button> 
      </div>

      <div className="signup">
          
    
  <button className="signupbutton">Sign Up</button>
  

      </div>
    </nav>
  );
}

export default Navbar;
