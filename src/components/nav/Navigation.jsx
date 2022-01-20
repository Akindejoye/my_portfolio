import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navigation.css';
import { animateScroll as scroll } from 'react-scroll';

const Navigation = () => {

    const [scrollNav, setScrollNav] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const changeBackgroundNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundNav)

        return () => {
            window.removeEventListener('scroll', changeBackgroundNav)
        }

    }, []);

    const sideNav = () => {
        setMobileNav(!mobileNav)
    }

    return ( 
        <div className={scrollNav ? 'nav-2' : 'nav-1'}>
            <div className='nav-left'>
                <h1 className='nav-title' onClick={toggleHome}>Francis Akindejoye</h1>
            </div>
            <div className='nav-right'>
                <div 
                    className='nav-icon'
                    onClick={sideNav}
                >
                    {mobileNav ? <FaTimes /> : <FaBars />}
                </div>
                <ul className='nav-list'>
                    <Link 
                        to='home' 
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true'
                        activeClass='active'
                        offset={-40}
                        className='link'
                    >
                        <li className="nav-listItem">Home</li>
                    </Link>
                    <Link 
                        to='about' 
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true'
                        activeClass='active'
                        offset={-80}
                        className='link'
                    >
                        <li className="nav-listItem">About</li>
                    </Link>
                    <Link 
                        to='product'
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true'
                        activeClass='active'
                        offset={-80}
                        className='link'
                    >
                        <li className="nav-listItem">Product</li>
                    </Link>
                    <Link 
                        to='contact' 
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true'
                        activeClass='active'
                        offset={-80}
                        className='link'
                    >
                        <li className="nav-listItem">Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
     );
}
 
export default Navigation;