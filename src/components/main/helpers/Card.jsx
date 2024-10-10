function Card(props){
    return(
        <div className="card__inner">
            <div className="card__inner-text">
                <h3>{props.name} <span>{props.firstName}</span> </h3>
            </div>
            <div className="card__inner-bottom">
                <p>{props.subName}</p>
                <div className="card__inner-btn">
                    <a href="!#">Узнать подробнее</a>
                </div>
            </div>
        </div>
    )
}

export {Card};