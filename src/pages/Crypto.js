import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Crypto = () => {

  const [cryptos,setCryptos] = useState([]);
  const [detailsActive, setdetailsActive] = useState(false);
  const [playOnce, setPlayOnce] = useState(false)

  useEffect(() => {
    if (detailsActive === false && playOnce === true) {
      const interval = setInterval(() => {          
        axios
          .get(
            'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DASH,XMR&tsyms=USD,EUR&api_key={81b5fb5c850e9c6b37c7a68c67eae6635f7456a086ba13fd60f11fdf44287047}'
          )
          .then((res) => {
            setCryptos(res.data)
            console.log(res.data);
          })
      }, 60000);      
      return () => {
        clearInterval(interval);
      }
    }
    if(playOnce === false){
      setPlayOnce(true)
      axios
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DASH,XMR&tsyms=USD,EUR&api_key={81b5fb5c850e9c6b37c7a68c67eae6635f7456a086ba13fd60f11fdf44287047}'
      )
      .then((res) => {
        setCryptos(res.data)
        console.log(res.data);
      })
    }

  },[playOnce, detailsActive]) 

  const handleDetails = () => {
    setdetailsActive(!detailsActive)
  }

  return (
    <>
    <div className="page-crypto">
      <Header />
      <div className="background"/>
      <div className="page-crypto-text">
        <h2>Crypto-money</h2>
        <div className="underconstruct">
          <h3>Under construction</h3>
          <p>To see what will be the next feature, please go to <Link to='/about'>ABOUT</Link></p>
        </div>
          <h2  className='page-crypto-title'>This page was made to pratice API calls. Here, every minute, a call is made to update the prices.</h2>
        </div>
      
        <div className="crypto-list">
          {Object.keys(cryptos).map((index) => (
            <Card
              key={cryptos[index].EUR + cryptos[index].USD}
              name={index}
              eur={cryptos[index].EUR}
              usd={cryptos[index].USD}
              title={index}
              details={handleDetails}
              hover={handleDetails}
            />
          ))}
        </div>
    </div>
    </>
    );
};

export default Crypto;