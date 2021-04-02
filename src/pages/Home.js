import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';

const Home = () => {

  const [cryptos,setCryptos] = useState([]);
  const [playOnce,setPlayOnce] = useState(true)

  useEffect(() => {
    if (playOnce) {
        
      axios
      .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DASH,XMR&tsyms=USD,EUR&api_key={1409420410fe99a1624ecd7154025fd8a130193722722d1d13183f15681450cc}')
      .then((res) => {
        setCryptos(res.data)
        console.log(cryptos)
        setPlayOnce(false)
      })
    }
  }) 

  return (
    <div>
      <Header />
      <div className='main'>
        <h2>Crypto currencies</h2>
        <div className="crypto-list">
          {Object.keys(cryptos).map((index) => (
            <Card
              keys={(cryptos[index].EUR) + (cryptos[index].USD)}
              name={index}
              eur={cryptos[index].EUR}
              usd={cryptos[index].USD}
            />
          ))}
        </div>
      </div>
    </div>
    );
};

export default Home;