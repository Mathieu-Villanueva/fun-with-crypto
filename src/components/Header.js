import React from 'react';
import Nav from './Nav';
import Search from './Search';

const Header = () => {
    return (
        <div className='header'>
            <Nav />
            <Search />
        </div>
    );
};

export default Header;