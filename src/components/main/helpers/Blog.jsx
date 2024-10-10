function  Blog(props){
    return(
        <div className="blog__card">
            <div className="blog__card-heading">
            <h4>{props.name}</h4>
            </div>
            <div className="blog__card-description">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export {Blog};