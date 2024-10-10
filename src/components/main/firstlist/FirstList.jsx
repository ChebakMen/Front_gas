import './first.css'
import FirstPhoto from './../../../image/FirstPhoto.png'

function FirstList(){
    return(
        <section className='firstList' id='firstList'>
            <div className="container">
                <div className="firstList__inner">
                    <div className="firstList__info">
                        <div className="firstList__info-text">
                            <h1>КРИПТОЕВРАЗИЯ</h1>
                            <h2>Безопасность <span>в цифровом мире начинается здесь</span></h2>
                        </div>
                        <div className="firstList__info-btn">
                            <a href="#form">Оставить заявку</a>
                        </div>
                    </div>
                    <div className="firstList__img">
                        <img src={FirstPhoto} alt="Photos" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export {FirstList};