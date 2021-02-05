import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>Insight</Link>
            </div>
            <ul className="nav-links">
                <li className="nav-item"><Link to='/about'>About</Link></li>
                <li className="nav-item"><Link to='/cases'>Cases</Link></li>
                <li className="nav-item"><Link to='/contato'>Contato</Link></li>
            </ul>

        </div>
    )
}
export default Header