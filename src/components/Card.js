import React, { useState } from 'react';
import NumberFormat from 'react-number-format'
import crypto from '../data';
import Details from './Details/Details';

const Card = ({eur, name, usd, title, details, hover}) => {


  const [doneOnce, setDoneOnce] = useState(false)
  const [cryptoTitle, setCryptoTitle] = useState()
  const [showDetails, setShowDetails] = useState(false)

  const handleClick = () => {
    setShowDetails(!showDetails)
    details(details)
  };
  const handleHover = () => {
    hover(hover)
  }

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
      <div className="card" onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div className="img-box">
          <img src={process.env.PUBLIC_URL + `/assets/${name}.png`} alt=""/>
        </div>
        <div className="content">
          <h2>{cryptoTitle}</h2>
          <div className="values">
            <h3> Short : {name}</h3>
            <div className="eur">
              <h3>€ :</h3>
              <span>{<NumberFormat value={eur} displayType={'text'} thousandSeparator={' '}/>}</span>
            </div>
            <div className="usd">
              <h3>$ :</h3>
              <span>{<NumberFormat value={usd}  displayType={'text'} thousandSeparator={' '}/>}</span>
            </div>
            <button onClick={handleClick} >Learn more</button>
          </div>
        </div>
      </div>
      <div className={showDetails ? 'show' : 'hidden'}>
          <Details
            details={ {eur, name, usd, cryptoTitle} }
            onClick={handleClick} />
        </div>
      
    </div>
  </>
  );
};

export default Card;