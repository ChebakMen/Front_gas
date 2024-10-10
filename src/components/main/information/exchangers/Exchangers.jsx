import './exchangers.css'

function Exchangeer(){
    return(
        <section className="exchanger">
            <div className="container">
                <div className="exchanger__wrapper">
                    <div className="exchanger__title">
                        <h3>Мы <span>решаем</span></h3>
                    </div>
                    <ul className="exchanger__inner">
                        <li className="exchanger__items">
                            <button href="!#" className="exchanger__btn-fcard">Сопровождение инвестиций
                            </button>
                        </li>
                        <li className="exchanger__items">
                            <button  className="exchanger__btn" href="!#">Расследования и решения сложных криптокейсов
                            </button>
                        </li>
                        <li className="exchanger__items">
                            <button className="exchanger__btn-card" href="!#">Обеспечение безопасности криптопераций
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export {Exchangeer};