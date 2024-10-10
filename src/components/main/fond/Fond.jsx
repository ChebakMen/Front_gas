import './fond.css'
import fond from './../../../image/fond.svg'

function Fond(){
    return(
        <section className="fond">
            <div className="container">
                <div className="fond__inner">
                    <div className="fond__inner-text">
                        <h2>Проект создан при поддержке </h2>
                    </div>
                    <div className="fond__inner-img">
                        <img src={fond} alt="Fond" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Fond};