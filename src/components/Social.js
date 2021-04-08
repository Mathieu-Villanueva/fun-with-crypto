import React from 'react';

const Social = () => {
  
  return (
    <div className="link">
      <ul>
      <li>
          <a href="https://fr.linkedin.com/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-linkedin"></span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-facebook"></span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/?lang=fr">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-twitter"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;