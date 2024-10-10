import React, { useState } from 'react';
import './infoButton/infomation.css'
import {AboutCompany} from'./aboutCompany/AboutCompany'
import {Exchangeer} from './exchangers/Exchangers'
import {Faq} from './questions/Faq'

function Information() {

const [activeSection, setActiveSection] = useState(1);

const changeSection = (newSection) => {
  setActiveSection(newSection);
};

return (
  <div className="information" id='information'>
    <div className="container">
        <ul className="info__wrapper">
            <li className="info__inner">
                <button onClick={() => changeSection(1)} className={activeSection === 1 ? "info__about-active" : "info__btn-first"}> О компании</button>
            </li>
            <span className="info__line"></span>
            <li className="info__inner">
                <button onClick={() => changeSection(2)} className={activeSection === 2 ? "info__btn-active" : "info__btn"}>Возможности</button>
            </li>
            <span className="info__line"></span>
            <li className="info__inner">
                <button onClick={() => changeSection(3)} className={activeSection === 3 ? "info__faq-active" : "info__btn-faq"}>FAQ</button>
            </li>
        </ul>
    </div>

    {activeSection === 1 && <AboutCompany />}
    {activeSection === 2 && <Exchangeer />}
    {activeSection === 3 && <Faq />}
  </div>
);

}


export {Information};
