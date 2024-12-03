// import './exchangeList.css';
import ExchangeArrow from './../../../../image/exchange_arrow.svg';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BadExchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(9); // Начальное количество обменников

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
                const newExchanges = response.data
                    .slice(0, count) // Загружаем обменники в соответствии с count
                    .map(exchange => ({
                        id: exchange.id, // ID
                        name: exchange.name, // Название
                        reserves: exchange.trade_volume_24h_btc || 'Error', // Резерв
                        country: exchange.country || 'Error', // Страна
                        trust_score: exchange.trust_score || 'Error', // Оценка
                        url: exchange.url || 'Error' // URL
                    }));

                setExchanges(newExchanges);
            } catch (err) {
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };

        fetchExchanges();
    }, [count]); // Зависимость от count

    const loadMore = () => {
        setCount(prevCount => prevCount + 5); // Увеличиваем количество на 5 при каждом нажатии
    };

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <table className='exchanger__table'>
                <thead className='exchanger__table-header'>
                    <tr>
                        <th><p className='exchanger__header-name'>Название</p></th>
                        <th><p className='exchanger__header-reserv'>Резерв(BTC)</p></th>
                        <th><p className='exchanger__header-country'>Страна</p></th>
                        <th><p className='exchanger__header-trust'>Оценка</p></th>
                        <th><a className='exchanger__header-btn' href='/exchanger'>Белый список</a></th>
                    </tr>
                </thead>
                <tbody className='exchanger__table-main'>
                    {exchanges.reverse().map((exchange, index) => (
                        <tr key={index}>
                            <td>
                                <p className="exchanger__main-name">{exchange.name}</p>
                            </td>
                            <td>
                                <p className='exchanger__main-reserv'>{exchange.reserves}</p>
                            </td>
                            <td>
                                <p className='exchanger__main-country'>{exchange.country}</p>
                            </td>
                            <td>
                                <p className='exchanger__main-tust'>{exchange.trust_score} / 10 </p>
                            </td>
                            <td>
                                <a className='exchanger__main-link' href={exchange.url} target="_blank" rel="noopener noreferrer">
                                    Перейти на сайт <img src={ExchangeArrow} alt="exchanger__main-link" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={loadMore} className='exchanger__footer-btn'>
                Загрузить еще
            </button>
        </div>
    );
};

export default BadExchanges;

