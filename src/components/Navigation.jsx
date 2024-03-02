import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.styles.css";
import hamburgerImage from "../assets/images/icon-hamburger.svg";
import closeImage from "../assets/images/icon-close.svg";

const Navigation = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <nav
      className={`navigation ${isCollapsed ? "collapsed" : ""} ${
        isScrolled && "scrolled"
      }`}
    >
      <div className="logo">
        <img
          src={hamburgerImage}
          className="hamburger-icon"
          onClick={toggleNav}
        />
        <h1>room</h1>
      </div>
      <ul className={!isCollapsed ? "active" : ""}>
        <li className="close-icon">
          <img src={closeImage} onClick={toggleNav} />
        </li>
        <li className="nav-item">
          <Link to="/room-homepage-master/">home</Link>
        </li>
        <li className="nav-item">
          <Link to="/room-homepage-master/shop">shop</Link>
        </li>
        <li className="nav-item">
          <Link to="/room-homepage-master/about">about</Link>
        </li>
        <li className="nav-item">
          <Link to="/room-homepage-master/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
