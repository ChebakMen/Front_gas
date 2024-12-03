import  { React,useState } from 'react';
import axios from 'axios';

import formImg from './../../../../image/form-img.jpg'

import './exchengerForm.css'


const ExchengersForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: '',
    message: '',

  });

  const [isChecked, setIsChecked] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Обновляем состояние чекбокса
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Пожалуйста, подтвердите согласие.');
      return;
    }

    const botToken = '/';
    const chatId = '/'; // Вы можете получить ID чата, используя @userinfobot

    const textMessage = `Имя: ${formData.name}\nТелефон: ${formData.phone}\nТелеграмм: ${formData.telegram}\nСообщение: ${formData.message}`;

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: textMessage,
      });
      alert('Сообщение отправлено!');
    } catch (error) {
      console.error('Ошибка при отправке сообщения', error);
      alert('Ошибка при отправке сообщения');
    }
  };

  return (
    <section className="form">
        <div className="container">
              <div className="coin__title">
                <h3>Оценить <span>работу обменника</span></h3>
              </div>
            <div className="form__wrapper">
                <form className='form__coin-inner' onSubmit={handleSubmit}>
                    <div className='form__coin-name'>
                      <input className='coin__name'
                          type="text"
                          name="name"
                          placeholder='Название обменника'
                          value={formData.name}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className='coin__user-name'>
                        <input className='coin__user'
                            onSelect={"aaaaaa"}
                            type="tel"
                            name="phone"
                            placeholder='Ваше имя'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form__coin-assessment'>
                        <input className='coin__assessment'
                            type="text"
                            name="telegram"
                            placeholder='Ваша оценка'
                            value={formData.telegram}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form__coin-text'>
                        <textarea className='coin__text'
                        placeholder='Ваш комментарий'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div  className='form__btn-checkbox'>
                      <label>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} required/>
                        <span class="checkbox dark" />
                      </label>
                      <label className='form__checkbox-text'>
                        <p className='form__btn-txt'>
                          Нажимая на кнопку "Отправить", вы подтверждаете, что ознакомились с <a href="https://срвт.рф/privacy-policy" target="_blank">Условиями обработки персональных данных</a> и принимаете их 
                        </p>
                      </label>
                    </div>
                    <div className="coin__inner-btn">
                      <button className='coin__btn' type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export {ExchengersForm};
