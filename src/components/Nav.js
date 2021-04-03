import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <li>
                <Link to='/' className='nav-item'>Home</Link>
            </li>
            <li>
                <Link to='/crypto' className='nav-item'>Crypto-Money</Link>
            </li>
            <li>
                <Link to='/about' className='nav-item'>About</Link>
            </li>
            <li>
                <Link to='/contacts' className='nav-item'>Contact</Link>
            </li>
        </nav>
    );
};

export default Nav;