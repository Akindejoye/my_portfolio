import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./navigation.css";
import { animateScroll as scroll } from "react-scroll";
import React from "react";
import Fade from "react-reveal/Fade";

const Navigation = ({ openNav }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const changeBackgroundNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundNav);

    return () => {
      window.removeEventListener("scroll", changeBackgroundNav);
    };
  }, []);

  return (
    <Fade top>
      <div className={scrollNav ? "nav-2" : "nav-1"}>
        <div className="nav-left">
          {/* <h1 className="nav-title" onClick={toggleHome}>
            Francis
          </h1> */}
        </div>
        <div className="nav-right">
          <button className="nav-icon" onClick={openNav}>
            <FaBars />
          </button>
          <ul className="nav-list">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
              offset={-40}
              className="link"
            >
              <li className="nav-listItem">Home</li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
              offset={-80}
              className="link"
            >
              <li className="nav-listItem">About</li>
            </Link>
            <Link
              to="product"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
              offset={-80}
              className="link"
            >
              <li className="nav-listItem">Portfolio</li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
              offset={-80}
              className="link"
            >
              <li className="nav-listItem">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default Navigation;
