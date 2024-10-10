import { Blog } from "../../helpers/Blog";
import arrow from './../../../../image/Arrow.svg'

function BlogCards(props){
    return(
        <div className="container">
            <div className="blog__inner">
                <div className="blog__inner-all">
                    <a href="!#">Другие статьи</a>
                    <img src={arrow} alt="right-arrow" />
                </div>
                <div className="blog__inner-text">
                    {
                        props.blogs.map( blog =>(

                            <Blog key={blog.id} name={blog.name} description={blog.description}  /> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export {BlogCards};