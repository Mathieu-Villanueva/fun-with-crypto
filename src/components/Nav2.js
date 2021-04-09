import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav2 = () => {
  return (
    <div className="cube-nav">
      <NavLink 
        to='/crypto'
        exact
        className="face cube-nav-crypto">
          <span>Crypto</span>
      </NavLink>

      <NavLink
        to='/about'
        exact
        className="face cube-nav-about">
          <span>About</span> 
      </NavLink>

      <NavLink
        to='/contacts'
        exact
        className="face cube-nav-contacts">
          <span>Contact</span> 
      </NavLink>
    </div>
  );
};

export default Nav2;