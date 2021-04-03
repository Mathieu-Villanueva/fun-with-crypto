import React, { useState } from 'react';
import NumberFormat from 'react-number-format'

const Card = ({eur, name, usd}) => {

  return (
    <>
    <div className="container">
      <div className="card">
        <div className="img-box">
          <img src={process.env.PUBLIC_URL + `/assets/${name}.png`} alt=""/>
        </div>
        <div className="content">
          <h2>{name}</h2>
          <div className="values">
            <div className="eur">
              <h3>€ :</h3>
              <span>{<NumberFormat 
                value={eur} 
                displayType={'text'}
                thousandSeparator={true}
              />} €</span>
            </div>
            <div className="usd">
              <h3>$ :</h3>
              <span>{<NumberFormat 
                value={usd} 
                displayType={'text'}
                thousandSeparator={true}
              />} $</span>
            </div>
            <a href="#" target="_blank">Find</a>
          </div>
        </div>
    </div>
  </div>
  </>
  );
};

export default Card;