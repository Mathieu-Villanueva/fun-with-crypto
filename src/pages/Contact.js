import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Social from '../components/Social';

const Contact = () => {
  return (
    <div className="page-contact">
    <Header />
      <div className="background">
        <Social />
      </div>
      <div className="contact">
        <h2>Contacts</h2>
        <div className="underconstruct">
          <h3>Under construction</h3>
          <p>To see what will be the next feature, please go to <Link to ='/about'>ABOUT</Link></p></div>
        </div>
    </div>
  );
};

export default Contact;