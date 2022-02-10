import { useState } from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Intro from "../components/intro/Intro";
import MobileNav from "../components/mobileNav/MobileNav";
import Navigation from "../components/nav/Navigation";
import ProductList from "../components/productList/ProductList";
import React from "react";

const Home = () => {

    const [isMobile, setIsMobile] = useState(false)

    const openNav = () => {
        setIsMobile(!isMobile);
    }

    return ( 
        <div>
            <Navigation openNav={openNav} />
            <MobileNav isMobile={isMobile} openNav={openNav} />
            {/* <Toggle /> */}
            <Intro />
            <About />
            <ProductList/>
            <Contact />
        </div>
     );
}
 
export default Home;