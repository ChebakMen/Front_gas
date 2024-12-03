import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./valueCoin.css"

import Eth from "./../../../../image/ETH.svg"
import Btc from "./../../../../image/BTC.svg"
import Usdt from "./../../../../image/USDT.svg"
import Doge from "./../../../../image/DOGE.svg"

function ValueCoin(){
    const [prices, setPrices] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,dogecoin&vs_currencies=usd');
        setPrices(response.data);
        setLoading(false);
      } catch (err) {
        setError('Ошибка при получении данных');
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchPrices();
      const interval = setInterval(fetchPrices, 60000); // обновление каждые 60 секунд
      return () => clearInterval(interval); // очистка интервала при размонтировании компонента
    }, []);
  
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;
  
    return (
      <div className='value__wrapper'>
        <div className="value__inner">
            <div className="value__title">
                <p>Последние курсы валют</p>
            </div>
            <div className="coin__info">
                <p>Валюта</p>
                <p>Стоимость</p>
            </div>
            <span className="coin__line"></span>
            <ul className="value__items">
                <li className="value__item">
                    <div className="coin__img">
                        <img src={Btc} alt="Bitcoin" />
                    </div>
                    <div className="coin__price">
                        <span>${prices.bitcoin?.usd}</span>
                        <p>1 BTC</p>
                    </div>
                </li>
                <span className="coin__line"></span>
                <li className="value__item">
                    <div className="coin__img">
                        <img src={Eth} alt="Ethereum" />
                    </div>
                    <div className="coin__price">
                        <span>${prices.ethereum?.usd}</span>
                        <p>1 ETH</p>
                    </div>
                </li>
                <span className="coin__line"></span>
                <li className="value__item">
                    <div className="coin__img">
                        <img src={Usdt} alt="Tether" />
                    </div>
                    <div className="coin__price">
                        <span>${prices.tether?.usd}</span>
                        <p>1 USDT</p>
                    </div>
                </li>
                <span className="coin__line"></span>
                <li className="value__item">
                    <div className="coin__img">
                        <img src={Doge} alt="Dogecoin" />
                    </div>
                    <div className="coin__price">
                        <span>${prices.dogecoin?.usd}</span>
                        <p>1 DOGE</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    );
};

export {ValueCoin};
