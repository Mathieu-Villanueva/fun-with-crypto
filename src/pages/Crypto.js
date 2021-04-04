import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';
import Social from '../components/Social';

const Crypto = () => {

  const [cryptos,setCryptos] = useState([]);
  const [playOnce,setPlayOnce] = useState(true)

  useEffect(() => {
    if (playOnce) {
        
      axios
      .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DASH,XMR&tsyms=USD,EUR&api_key={1409420410fe99a1624ecd7154025fd8a130193722722d1d13183f15681450cc}')
      .then((res) => {
        setCryptos(res.data)
        setPlayOnce(false)
      })
    }
  }) 

  return (
    <div className="page-crypto">
      <Header />
      <div className="background">
        <Social />
      </div>
      <div className='crypto'>
        <div className="crypto-background"></div>
        <div className="crypto-list">
          {Object.keys(cryptos).map((index) => (
            <Card
              key={cryptos[index].EUR + cryptos[index].USD}
              name={index}
              eur={cryptos[index].EUR}
              usd={cryptos[index].USD}
              title={index}
            />
          ))}
        </div>
      </div>
    </div>
    );
};

export default Crypto;