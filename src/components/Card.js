import React, { useState } from 'react';
import NumberFormat from 'react-number-format'
import crypto from '../data';

const Card = ({eur, name, usd, title}) => {

  const [doneOnce, setDoneOnce] = useState(false)
  const [cryptoTitle, setCryptoTitle] = useState()

  crypto.forEach(element => {
    if (!doneOnce) {
      if(title === element.label) {
        const titre = element.name;
        setCryptoTitle(titre);
      }
      setDoneOnce(true)      
    }
  });
    
  return (
    <>
    <div className="container">
      <div className="card">
        <div className="img-box">
          <img src={process.env.PUBLIC_URL + `/assets/${name}.png`} alt=""/>
        </div>
        <div className="content">
          <h2>{cryptoTitle}</h2>
          <div className="values">
            <h3> Short : {name}</h3>
            <div className="eur">
              <h3>€ :</h3>
              <span>{<NumberFormat 
                value={eur} 
                displayType={'text'}
                thousandSeparator={''}
              />}</span>
            </div>
            <div className="usd">
              <h3>$ :</h3>
              <span>{<NumberFormat 
                value={usd} 
                displayType={'text'}
                thousandSeparator={true}
              />} </span>
            </div>
            <a href={`https://www.cryptocompare.com/coins/${name.toLowerCase()}/overview`} target="_Blank" >Find</a>
          </div>
        </div>
    </div>
  </div>
  </>
  );
};

export default Card;