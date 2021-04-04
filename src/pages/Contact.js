import React from 'react';
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iste provident. Recusandae iusto excepturi ducimus. Non repellendus voluptates, consequatur dolor quod exercitationem aut fugiat, aperiam porro odio, consequuntur nostrum quas consectetur modi ex dolorum fuga ab maiores obcaecati magnam similique?</p>
      </div>
    </div>
  );
};

export default Contact;