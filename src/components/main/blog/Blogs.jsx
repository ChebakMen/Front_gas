import React from "react";
import {BlogCards } from "./blogCard/BlogCards";
import './blogCard/blogCards.css'

class Blogs extends React.Component{

    state ={
        blogs:[
            {
                id: 'blog1',
                name: 'Что такое криптовалюта?(!)',
                description: 'Криптовалюта — это разновидность цифровой валюты, не имеющей физического воплощения и единого центра, который бы ее контролировал. Работает в так называемом «блокчейне» или цепочке блоков с информацией'
            },
            {
                id: 'blog2',
                name: 'Что такое криптовалюта?',
                description: 'Криптовалюта — это разновидность цифровой валюты, не имеющей физического воплощения и единого центра, который бы ее контролировал. Работает в так называемом «блокчейне» или цепочке блоков с информацией'
            }
        ]
    }

    render(){
        return <section className="blog">
            <BlogCards blogs={this.state.blogs} />
        </section>
    }
}

export {Blogs};