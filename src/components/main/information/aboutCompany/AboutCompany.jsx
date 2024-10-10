import './aboutCompany.css'
import mission from './../../../../image/mission.jpg'
import about from './../../../../image/about.jpg'


function AboutCompany(){
    return(
        <section  className="about__company">
            <div className="container">
                <div className="about__company-wrapper">
                    <div className="about__company-text">
                        <h3>#КриптоЕвразия</h3>
                    </div>
                    <ul className="about__company-inner">
                        <li className="about__company-items">
                            <div className="about__company-project">
                                <span>{'>500'}</span>
                                <p>Успешно решенных задач</p>
                            </div>
                        </li>
                        <li className="about__company-items">
                            <div className="about__company-img">
                                <img src={about} alt="About Card" />
                            </div>
                        </li>
                        <li className="about__company-items">
                            <div className="about__company-country">
                                <span>{'>97'}</span>
                                <p>Стран партнеров</p>
                            </div>
                        </li>
                        <li className="about__company-items">
                            <div className="about__company-info">
                                <p>Наша команда экспертов с многолетним опытом в сфере криптовалют и финансовых рынков занимается решением стратегически важных задач, формирующих основу для разработки законодательных норм в криптовалютной отрасли, а также осуществляет верификацию участников крипторынка</p>
                            </div>
                        </li>
                    </ul>
                    <div className="mission__company">
                        <div className="mission__company-text">
                            <h5>Миссия компании:</h5>
                            <p>Обеспечение снижения инвестиционных рисков и раскрытие новых перспектив для эффективного управления и оптимизации ваших криптоактивов, с целью максимизации их доходности и защиты от волатильности рынка</p>
                        </div>
                        <div className="mission__company-img">
                             <img src={mission} alt="mission company" /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {AboutCompany};
