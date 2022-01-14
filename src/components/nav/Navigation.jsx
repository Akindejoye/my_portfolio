import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    return ( 
        <div className='nav'>
            <div className='nav-left'>
                <h1 className='nav-title'>Francis Akindejoye</h1>
            </div>
            <div className='nav-right'>
                <ul className='nav-list'>
                    <Link to='/' className='link'>
                        <li className="nav-listItem">Home</li>
                    </Link>
                    <Link to='/about' className='link'>
                        <li className="nav-listItem">About</li>
                    </Link>
                    <Link to='/product' className='link'>
                        <li className="nav-listItem">Product</li>
                    </Link>
                    <Link to='/contact' className='link'>
                        <li className="nav-listItem">Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
     );
}
 
export default Navigation;