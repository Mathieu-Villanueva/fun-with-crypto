import React from 'react';

const Details = ({details, onClick}) => {

  const {eur, name, usd, cryptoTitle} = details

  return (
    <div className="details" onClick={onClick}>
      <button className="close" onClick={onClick}>X</button>
      <div className="details-content">
        <h2> Coucou, c'est les détails {eur} {name} {usd} {cryptoTitle}</h2>
      </div>
    </div>
  );
};

export default Details;