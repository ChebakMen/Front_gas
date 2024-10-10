import React, { useState } from 'react';
import './accordion.css'
import pluse from './../../../../../image/pluse.svg'

// Аккордеон Item компонент
const AccordionItem = ({ title, content, isOpen, onClick }) => (
    <div className="accordion-item">
        <div className="accordion__question" onClick={onClick}>
            <h4>{title}</h4>
            <img src={pluse} alt="pluse" />
        </div>
        {isOpen && (
            <div className="accordion__answer">
                <p>{content}</p>
            </div>
        )}
    </div>
);

// Основной Аккордеон компонент
const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        if (index === openIndex) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="container">

            <div className="accordion__title">
                <h3>Часто <span>задаваемые вопросы</span></h3>
            </div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    isOpen={index === openIndex}
                    title={item.title}
                    content={item.content}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;