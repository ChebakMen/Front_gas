// import ReviewSlider from './../reviews/Testimonials'; // Импортируем компонент для слайдера отзывов

// const StarRating = ({ rating }) => {
//   const totalStars = 5; 
//   const filledStars = Math.round(rating); 

//   return (
//     <div>
//       {[...Array(totalStars)].map((_, index) => (
//         <span key={index} >
//           <img src={Starts} className='stars' alt="start" />
//         </span> 
//       ))}WWWWW
//     </div>
//   );
// };

// function ExchangeList() {
//   const [exchanges, setExchanges] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(15);
//   const [loading, setLoading] = useState(true);
//   const [selectedExchange, setSelectedExchange] = useState(null); // Состояние для выбранного обменника
//   const [reviews, setReviews] = useState([]); // Состояние для отзывов

//   useEffect(() => {
//     const fetchExchanges = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
//         setExchanges(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке данных:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExchanges();
//   }, []);

//   const loadMoreExchanges = () => {
//     setVisibleCount((prevCount) => prevCount + 15);
//   };

//   const handleExchangeClick = async (exchange) => {
//     setSelectedExchange(exchange); // Устанавливаем выбранный обменник

//     // Загружаем отзывы для выбранного обменника
//     try {
//       // const linkApi = 'https://api.coingecko.com/api/v3/exchanges/${exchange.id}/reviews';
//       const response = await axios.get('https://api.coingecko.com/api/v3/exchanges/${exchange.id}/reviews');
//       setReviews(response.data); // Предполагается, что сервер возвращает отзывы в этом формате
//     } catch (error) {
//       console.error('Ошибка при загрузке отзывов:', error);
//     }
//   };

//   if (loading) {
//     return <div>Загрузка...</div>;
//   }

//   return (
//     <div className="exchanger__wrapper">
//       <div className='exchanger__wrapper-item'>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th>Обменник</th>
//               <th>Сумма резервов</th>
//               <th>Страна</th>
//               <th>Рейтинг</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {exchanges.slice(0, visibleCount).map((exchange) => (
//               <tr key={exchange.id} className='exchanger__item' onClick={() => handleExchangeClick(exchange)}>
//                 <td className='exchanger__main-name'><strong>{exchange.name}</strong></td>
//                 <td className='exchanger__main-summ'>{exchange.trade_volume_24h_btc ? exchange.trade_volume_24h_btc.toLocaleString() : 'Не указана'}</td>
//                 <td className='exchanger__main-country'>{exchange.country || 'Не указана'}</td>
//                 <td className='exchanger__main-rating'><StarRating rating={exchange.trust_score} /></td>
//                 <td><a href={exchange.url} target="_blank" rel="noopener noreferrer" className='exchanger__main-link'>Перейти на сайт <img src={ExchangeArrow} alt="exchanger__main-link" /></a></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {visibleCount < exchanges.length && (
//           <button onClick={loadMoreExchanges}>Загрузить еще</button>
//         )}
//       </div>

//       {/* Отображаем отзывы о выбранном обменнике */}
//       {selectedExchange && reviews.length > 0 && (
//         <ReviewSlider reviews={reviews} />
//       )}
//     </div>
//   );
// }

// export default ExchangeList;


// import React, { useEffect, useState } from 'react';
// import Reviews from './../reviews/Testimonials'; // Импортируем новый компонент


{/* <table className='exchanger__table'>
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Резерв</th>
                    <th>Страна</th>
                    <th>Оценка</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {exchanges.map((exchange, index) => (
                    <tr key={index}>
                      <td>popa negra</td>
                      <td>1111</td>
                      <td>piska negra</td>
                        <td>{exchange.name}</td>
                        <td>{exchange.reserves}</td>
                        <td>{exchange.country}</td>
                        <td>{exchange.trust_score} / 10</td>
                        <td >
                          <a className='exchanger__main-link' href={exchange.url} target="_blank">перейти на ссайт <img src={ExchangeArrow} alt="exchanger__main-link" /></a>
                        </td>
                    </tr>
                ))}
            </tbody>
            <button onClick={loadMore} style={{ marginTop: '10px' }}>
                Загрузить еще
            </button>
        </table> */}

        // .map(exchange => ({ 
        //   id: exchange.id, //id
        //   name: exchange.name, //name
        //   reserves: exchange.trade_volume_24h_btc || 'Error', //her znaet
        //   country: exchange.country || 'Error', //country
        //   trust_score: exchange.trust_score || 'Error', // Trust
        //   url: exchange.url || 'Error' //URL
//
