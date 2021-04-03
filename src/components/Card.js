import React, { useState } from 'react';
import NumberFormat from 'react-number-format'

const Card = ({eur, name, usd}) => {

  return (
    <div 
      className='crypto' 
      >
        <img src={process.env.PUBLIC_URL + `/assets/${name}.png`} alt="crypto" className="crypto-logo"/>
        <h3 className="crypto-title">{name}</h3>
        <div 
        className='crypto-values'>
          <p className="EUR">EURO : {<NumberFormat 
              value={eur} 
              displayType={'text'}
              thousandSeparator={true}
            />}</p>
          <p className="USD">USD : {<NumberFormat 
              value={usd} 
              displayType={'text'}
              thousandSeparator={true}
            />}</p>
        </div>
        
    </div>
  );
};

export default Card;