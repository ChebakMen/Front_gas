import  { React,useState } from 'react';
import axios from 'axios';
import formImg from './../../../../image/form-img.jpg'
import './Form.css'


const TelegramForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: '',
    message: '',

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const botToken = '7278543258:AAG7VsctJnW2z59utB1t0WdShez3HDrQb4s';
    const chatId = '6460560966'; // Вы можете получить ID чата, используя @userinfobot

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
              <div className="form__title">
                <h3>Оставить <span>заявку</span></h3>
              </div>
            <div className="form__wrapper">
                <form className='form__inner' onSubmit={handleSubmit}>
                    <div className='form__inner-name'>
                      <input className='form__name'
                          type="text"
                          name="name"
                          placeholder='Ваше ФИО'
                          value={formData.name}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className='form__inner-number'>
                        <input className='form__phone'
                            type="tel"
                            name="phone"
                            placeholder='Ваш телефон'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form__inner-tg'>
                        <input className='form__tg'
                            type="text"
                            name="telegram"
                            placeholder='Ваш телеграмм'
                            value={formData.telegram}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form__inner-text'>
                        <textarea className='form__text'
                        placeholder='Опишите вашу порблему'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form__inner-btn">
                      <button className='from__btn' type="submit">Отправить</button>
                      <p className='form__btn-txt'>Отправляя свои данные, вы принимаете <a href="!#">условия обработки персональных данных</a></p>
                    </div>
                </form>
                <div className="form__image">
                    <img src={formImg} alt="form Image" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default TelegramForm;
