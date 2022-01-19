import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import './navigation.css';
import { animateScroll as scroll } from 'react-scroll';

const Navigation = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return ( 
        <div className='nav'>
            <div className='nav-left'>
                <h1 className='nav-title' onClick={toggleHome}>Francis Akindejoye</h1>
            </div>
            <div className='nav-right'>
                <div className='nav-icon'>
                    <FaBars />
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