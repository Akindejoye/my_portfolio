import { Link } from "react-scroll";
import './mobileNav.css';
import { FaTimes } from 'react-icons/fa';
import React from "react";

const MobileNav = ({isMobile, openNav}) => {

    if(openNav) {
        console.log("Nav comes alive");
    }

    return ( 
        <>
        <div 
            className={`${isMobile ? 'mobileNavContainer' : 'mobileClear'}`}
            onClick={openNav}
        >
            <button className="mobileNavIconClose" onClick={openNav}>
                <FaTimes />
            </button>
            <ul className="mobileNavList">
                <li className="mobileNavItem">
                    <Link to='home' onClick={openNav}>Home</Link>
                </li>
                <li className="mobileNavItem">
                    <Link to='about' onClick={openNav}>About</Link>
                </li>
                <li className="mobileNavItem">
                    <Link to='product' onClick={openNav}>Product</Link>
                </li>
                <li className="mobileNavItem">
                    <Link to='contact' onClick={openNav}>Contact</Link>
                </li>
            </ul>
        </div>
        </>
     );
}
 
export default MobileNav;