import React from "react";
import {Cards} from './card/Cards'
import './card/cards.css'




class InfoCard extends React.Component{

    state={
        cards:[
            {
                id: 'card1',
                name: 'Черный', 
                firstName: 'список крипторынка',
                subName: 'Список недобросовестных крипроучастников'
            },
            {
                id: 'card2',
                name: 'Рейтиг',
                firstName: ' доверия', 
                subName: 'Криптоигроки, получившие положительные оценки других учасников рынка'
            },
            {
                id: 'card3',
                name: 'Сотрудничество', 
                firstName: 'с КриптоЕвразией',
                subName: 'Сотрудничесвто с профессионалами в обсласти крпитовалюты, которые решат все ваши вопросы'
            }
        ]
    };

    render(){
        return <section className="infoCard" id="infoCard">
            <Cards cards={this.state.cards}/>
        </section>
    }
}


export {InfoCard};